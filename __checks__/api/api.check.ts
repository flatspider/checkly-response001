import { ApiCheck, AssertionBuilder } from 'checkly/constructs'
import {groupAPI} from '../groups/group.check'
import dotenv from 'dotenv';
const usersJSON = require('./userURLs.json');

dotenv.config();

const usersList = usersJSON.users;

const token = process.env.BEARER_AUTH_TOKEN;

for (const user of usersList) {
  new ApiCheck(`check_user_${user.id}`, {
    name: `User ${user.name}`,
    group: groupAPI,
    request: {
        method: 'GET',
        url: user.profile_url,
        body: JSON.stringify({
          name: 'checkly'
        }),
        skipSSL: false,
        followRedirects: true,
        headers: [
          {
            key: 'Authorization',
            value: `Bearer ${token}`,
          }
        ],
        assertions: [
            AssertionBuilder.statusCode().equals(200),
            AssertionBuilder.jsonBody('$.name').equals(user.name),
            AssertionBuilder.jsonBody('$.id').equals(user.id),
        ]
      }
  })
}