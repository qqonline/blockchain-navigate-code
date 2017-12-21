# blockchain-navigate-code

Welcome to Website: [https://icepy.me/blockchain-navigate/](https://icepy.me/blockchain-navigate/)，中国大陆用户建议访问HTTP，因为证书服务器在国外，如果访问HTTPS网页打开速度会比较慢。[blockchain-navigate](https://github.com/icepy/blockchain-navigate)项目使用Github Pages托管在Github，你可以放心安全的使用。

# How 

安装Node.js并且clone blockchain-navigate-code项目。

```bash
$ nvm install { node version }
$ git clone git@github.com:icepy/blockchain-navigate-code.git
```
使用 `npm start` 启动

```bash
$ cd blockchain-navigate-code
$ npm i
$ npm start
```
当你修改完之后，一定要使用`npm run build` 重新构建。

# 发布

clone 静态网页托管项目

```bash
$ git@github.com:icepy/blockchain-navigate.git
```

然后将打包好的dist目录覆盖至此

```bash
$ cp -r dist/** ~/blockchain-navigate
```
# 社区支持

大家可以将一些有用的资源共享出来，如果你会编码可以发起一个PR，如果你不会编码你可以将比较好的资源通过知乎私信给我（搜索知乎用户**icepy**），最重要的是这对你有价值，将它添加到你的浏览器书签中吧。