# tailgo.github.io
My Site.

## Technology stack

 - Typescript
 - React
 - React-router
 - Webpack
 - Material-ui

## Run

    npm run build

## 记录

github pages 需求的分支惯例。因为使用了 github pages 的根域名，所以只能在 master 分支上创建可以访问的页面。那这时候有两种方案

1. 开发的代码和编译后生成的代码都在master，然后混在一起
2. 写个脚本，在开发分支写代码，然后发布的时候把构建内容丢到master下。

作为一个靓仔，肯定选择方案二。
