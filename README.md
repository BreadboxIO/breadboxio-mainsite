[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/DB-Tax-Wealth/mainsite.svg)](https://github.com/DB-Tax-Wealth/mainsite/issues)
[![GitHub stars](https://img.shields.io/github/stars/DB-Tax-Wealth/mainsite.svg)](https://github.com/DB-Tax-Wealth/mainsite/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# 🍞 Breadbox.io Mainsite

[![Breadbox.io](http://i.imgur.com/vAw3l8H.png)](http://breadbox.io)

An application using [React](https://reactjs.org/) deployed as the Breadbox.io main public website.

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
    - [Node.js & Node Package Manager](#nodejs---node-package-manager)
  - [Installing](#installing)
- [Development](#development)
  - [Webpack Dev Server](#webpack-dev-server)
    - [Hot Reloading](#hot-reloading)
  - [ESLint and Prettier.io](#eslint-and-prettierio)
  - [Committing](#committing)
    - [Pre-Commit Hooks](#pre-commit-hooks)
- [Deployment](#deployment)
- [License](#license)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node.js & Node Package Manager

You'll need to download and install Node.js version 6 or higher and Node Package Manager for installing dependencies. Node Package Manager is installed when installing Node.js. Download the latest version of Node.js for [macOS](https://nodejs.org/dist/v10.16.0/node-v10.16.0.pkg) or [Windows (64-bit)](https://nodejs.org/dist/v10.16.0/node-v10.16.0-x86.msi).

### Installing

You'll need to clone this repository to your working directory on your local machine, then install the project dependencies using **Node Package Manager** through the command line.

First, navigate to your working directory:

```
cd path/to/your/working/directory
```

Clone this repository to your working directory:
First clone the repository:

```
git clone https://github.com/BreadboxIO/breadboxio-mainsite.git
```

After cloning is complete, navigate inside the newly cloned repository:

```
cd breadboxio-mainsite
```

Finally, run `npm install` to install all project dependencies:

```
npm install
```

## Development

### Webpack Dev Server

During development, this application can be run in a web browser using [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/). To start the application in a web browser, navigate to the root of the project directory in the command line and run `npm run start`. This command will print out a URL which can be opened in a web browser.

First, navigate to the root of the project:

```
cd path/to/your/working/directory/mainsite
```

Then start the application:

```
npm run start
```

After Webpack Dev Server has compiled the development bundle, it will print out something similar to following:

```
ℹ ｢wds｣: Project is running at http://localhost:9090/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: 404s will fallback to /index.html
ℹ ｢wdm｣:
ℹ ｢wdm｣: Compiled successfully.
```

Open the URL [http://localhost:9090/](http://localhost:9090/) in your web browser.

#### Hot Reloading

This project is equipped with [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/). This means that while Webpack Dev Server is running the documentation application, you can make changes to the files and they will automatically update in the web browser. Occasionally, the web browser may need a manual refresh if you're changes affect application state or changes outside of the React life-cycle.

### ESLint and Prettier.io

This project is equipped with [ESLint](https://eslint.org/) and [Prettier.io](https://prettier.io/) to ensure a homogeneous code-style and JavaScript syntactical error prevention.

During development, you can run `npm run eslint:fix` in the root of the project to automatically fix any fixable [ESLint errors/warnings](.eslintrc), and format your JavaScript to match the [Prettier standards](.prettierrc).

### Committing

To ensure the commit history of this project remains helpful, please use the commit rules outlined [here](https://chris.beams.io/posts/git-commit/) when committing.

To making following these rules easier, this project is equipped with a [Git commit template](.commit.template.txt):

```
# <type>: (If applied, this commit will...) <subject> (Max 50 char)
# |<----  Using a Maximum Of 50 Characters  ---->|


# Explain why this change is being made
# |<----   Try To Limit Each Line to a Maximum Of 72 Characters   ---->|

# Provide links or keys to any relevant tickets, articles or other resources
# Example: Github issue #23

# --- COMMIT END ---
# Type can be
#    feat     (new feature)
#    fix      (bug fix)
#    refactor (refactoring production code)
#    style    (formatting, missing semi colons, etc; no code change)
#    docs     (changes to documentation)
#    test     (adding or refactoring tests; no production code change)
#    chore    (updating grunt tasks etc; no production code change)
# --------------------
# Remember to
#    Capitalize the subject line
#    Use the imperative mood in the subject line
#    Do not end the subject line with a period
#    Separate subject from body with a blank line
#    Use the body to explain what and why vs. how
#    Can use multiple lines with "-" for bullet points in body
# --------------------
```

To enable this Git commit template, run the following command from the root of the project:

```
git config --global commit.template commit.template.txt
```

#### Pre-Commit Hooks

This project is equipped with [Git Pre-Commit Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to help ensure successful builds. These "hooks" are a set of scripts that will run before allowing a developer to commit to the project. If any of these scripts fail the commit will cancel.

Before allowing a successful commit Git will run the following scripts:

```
npm run eslint
npm run stylelint
```

It's recommended a developers run `npm run eslint:fix` often during development to prevent any failures from code-style or JavaScript syntactical errors.

## Deployment

This application is hosted on GitHub pages out of the `docs/` directory of this repository's **master** branch. That means anything committed, and pushed to the `docs/` directory of this repo on the master branch will automatically appear at [http://breadbox.io/](http://breadbox.io/).

**NOTE:** It can take several minutes to an hour after a successful push of the master branch for GitHub pages to update.

To deploy this application, simply run the build script `npm run build` from the root of this repository. This script will generate a deployable bundle of the application using Webpack.

`npm run build`

After the build is complete, all updated bundle files will be in the `docs/` directory. Commit and push the changes to this directory to master.

## License

This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details

## Authors

- **Joey Schroeder** - _Initial work_ - [Breadbox.io](https://github.com/BreadBoxIO)

## Acknowledgments

- Hat tip 🤠 to anyone who's code was used
