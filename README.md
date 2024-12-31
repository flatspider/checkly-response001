# Checkly Customer Response

This project contains functional tests for AutomationExercise.com and the Poke API. It also contains a function to dynamically create API checks from a JSON file. The project can be pulled down, tested locally, and then deployed to your Checkly account.

## Project Structure

This project has your tests contained within the **checks** folder.

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

Run the "git clone https://github.com/flatspider/checkly-response001.git" command to pull down all of the files.

## Test Project Locally

Run npm install to download all required dependencies.

You will need to establish a .env file with the proper auth token or run

To test your check on Checkly before deploying it, run:

```
 npx checkly test -e BEARER_AUTH_TOKEN=<your_auth_token>

```

- Running `npx checkly test` will look for `.check.ts` files and `.spec.ts` in `__checks__` directories and execute them in a dry run.

- Running `npx checkly deploy` will deploy your checks to Checkly, attach alert channels, and run them on a 10m schedule in the
  region `us-east-1` and `eu-west-1`

## CLI Commands

Run the core CLI commands with `npx checkly <command>`

| Command              | Action                                  |
| :------------------- | :-------------------------------------- |
| `npx checkly test`   | Dry run all the checks in your project  |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud |
| `npx checkly login`  | Log in to your Checkly account          |
| `npx checkly --help` | Show help for each command.             |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).

## Adding and running `@playwright/test`

You can add `@playwright/test` to this project to get full code completion and run `.spec.ts` files for local debugging.
It's best to install the Playwright npm package version that matches your [Checkly runtime](https://www.checklyhq.com/docs/cli/npm-packages/).

```bash
npm install --save-dev @playwright/test@1.38.1
```

## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or
join our [Slack community](https://checklyhq.com/slack).
