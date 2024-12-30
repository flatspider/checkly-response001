import { CheckGroup, Frequency, ApiCheck } from 'checkly/constructs'
import { userEmail } from '../../alert_channels/email'

// 1) Applies to all browser checks in the __checks__/**/*.spec.ts location

export const groupBrowser = new CheckGroup('check-group-browser', {
  name: 'All Browser Checks',
  activated: true,
  alertChannels: [userEmail],
  locations: ['eu-west-1'],
  tags: ['browser-group'],
  concurrency: 10,
  /* A glob pattern that matches the Checks inside your repo, see https://www.checklyhq.com/docs/cli/using-check-test-match/ */
  // Here we define how to pick up any .spec files that should belong to this group
  browserChecks: {
    frequency: Frequency.EVERY_30M,
    // If your tests are in TypeScript:
    testMatch: '**/__checks__/**/*.spec.ts'
    },
})

// 2) A Group for all API Checks
// Exporting a check group object with name check-group-api as the variable groupAPI
export const groupAPI = new CheckGroup('check-group-api', {
  name: 'All API Checks',
  activated: true,
  alertChannels: [userEmail],
  locations: ['eu-west-1'],
  tags: ['api-group'],
  concurrency: 10,
  // Optionally you can set a frequency here if you have code-based checks
  // frequency: Frequency.EVERY_15M,
})


new ApiCheck('test-check-001', {
    name: 'API check #1',
    group: groupAPI,
    request: {
      method: 'GET',
      url: 'https://mac-demo-repo.vercel.app/api/hello',
    }
  })
