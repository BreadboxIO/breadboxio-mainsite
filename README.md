# Breadbox.io Mainsite
[![Breadbox.io](http://i.imgur.com/vAw3l8H.png)](http://breadbox.io)

The mainsite for BreadBox.io using [React](https://reactjs.org/) and [Webpack](https://github.com/webpack/webpack).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node.js & Node Package Manager
You'll need to download and install Node.js version 6 or higher and Node Package Manager for installing dependencies.  Node Package Manager is installed when installing Node.js.  Download the latest version of Node.js for [macOS](https://nodejs.org/dist/v6.11.0/node-v6.11.0.pkg) or [Windows (64-bit)](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x86.msi).

### Installing

First, you'll need to clone this repo to your working directory on your local machine.  Second, install the project dependencies using Node Package Manager through the command line.

#### Installing Dependencies

1. Open your command line.
2. Navigate to your working directory.
3. Clone this repo to your working directory.
4. Navigate inside the breadboxio.github.io directory.
5. Install the dependencies.

```
cd /path/to/working/directory
git clone https://github.com/BreadboxIO/breadboxio.github.io
cd /breadbox-mainsite
npm install
```

## Development

During development you can start the app using `npm run start`.  This will begin running the app at a specificed local server (typically [localhost:8080/](localhost:8080/)).  You can then view the app in any web browser or browser simulator.  Any time you make a change to the `src` folder while the app is running, the app will automatically refresh in your browser.

```
npm run start
```

## Deployment

After completing development you can run `npm run build`.  This will minifiy and compile the `src` folder into a `docs` folder.  The contents of the `docs` folder is published as the GitHub Pages site.  For more details about publishing to GitHub Pages click [here](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch).

```
npm run build
```

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Webpack](https://github.com/webpack/webpack) - A JavaScript module bundler

## Authors

* **Joey Schroeder** - *Initial work* - [Breadbox.io](https://github.com/BreadBoxIO)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details

## Acknowledgments

* Hat tip to anyone who's code was used
