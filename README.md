# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Git换行符设置
windows开发环境把autocrlf设置为input，通过下面的命令设置

``` shell
git config --global core.eol lf
git config --global core.autocrlf input
git config --global core.safecrlf true
```

配置详解

1. `core.autocrlf`：换行符自动转换策略，控制checkout和commit的行为

   - true：checkout时将文件中的LF转换为CRLF，commit时将CRLF转换为LF

   - input：checkout时不转换，commit时将CRLF转换为LF

   - false：checkout和commit均不转换

2. `core.safecrlf`：提交时如果文件包含混合换行符，则

   - true：禁止提交

   - warn：发出警告

   - false：忽略

3. `.gitattributes`配置含义，规定哪些后缀的文件需要在commit时进行强制转换

   - text eol=lf：入库时将行尾规范为LF，检出时行尾不强制转换为 CRLF