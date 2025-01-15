import { ApiCheck, AssertionBuilder } from 'checkly/constructs'
import {groupAPI} from '../groups/group.check'
import dotenv from 'dotenv';
const usersJSON = require('./userURLs.json');

dotenv.config();

const usersList = usersJSON.users;

const bearer_token = process.env.BEARER_AUTH_TOKEN;

// Defines types for the user object
interface User {
  id: string | number;
  name: string;
  profile_url: string;
}

function CreateAPIChecks(user: User, token: string | undefined ) {
 return  new ApiCheck(`check_user_${user.id}`, {
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
 
for (const user of usersList) {
  CreateAPIChecks(user, bearer_token);
}