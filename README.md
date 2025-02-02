# Checkly Customer Response

This Checkly project contains browser tests for AutomationExercise.com and the Poke API. It also contains a function to dynamically create API checks from a JSON file. The project can be pulled down, tested locally, and then deployed to your Checkly account.

## Project Structure

This project has your tests (and check group definitions) contained within the `__checks__` folder. The first file is the generated API check. The second file is the browser check. The third file explicitly defines the check groups.

The `checkly.config.ts` file contains the Checkly configuration outline which mainly sets the location of checks/tests as well as default values.

```
.
├── README.md
├── __checks__
│   ├── api
│   ├── browser
│   └── groups
├── checkly.config.ts
└── package.json
```

## Pull Down Files

Run the `git clone https://github.com/flatspider/checkly-response001.git` command to pull down all the code files for this Checkly project.

Use `cd checkly-response001/` to move into the folder.

Run `npm install` to download all project dependencies and allow you to run Playwright and Checkly in the terminal.

## Test Project Locally

Manage the required auth token for the API check by adding this variable to your .env file:

```
BEARER_AUTH_TOKEN=<your_auth_token>

```

This project does not need Bearer pre-pended. So if the token is "Bearer c23w21-1q8" then the code in the .env file is:

```
BEARER_AUTH_TOKEN=c23w21-1q8
```

Run `npx playwright test` to test the browser checks locally.

Run `npx checkly test` to ensure all tests are being created properly and passing.

Note: AutomationExercise.com test only passes in the eu-region. When the test is run in a us-region a consent button is not provided. The test will wait for a button that never loads and fail to complete.

## Deploy Project to Checkly

To deploy, run `npx checkly deploy` to have your checks live in the cloud at [Checkly](https://www.app.checklyhq.com). This will attach alert channels for your email and run the checks on a schedule.

There you go! You should have a functioning Checkly project.

## CLI Commands Info

Run the core CLI commands with `npx checkly <command>`

| Command              | Action                                  |
| :------------------- | :-------------------------------------- |
| `npx checkly test`   | Dry run all the checks in your project  |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud |
| `npx checkly login`  | Log in to your Checkly account          |
| `npx checkly --help` | Show help for each command.             |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).
