# deno-demo

## 原文 / Original

[Slim Hmidi,Create a server with deno and mongo.](https://dev.to/slimhmidi/create-a-server-with-deno-and-mongo-206l)

## 译文 / Translation

[【译】Deno + MongoDB 构建 CRUD API](https://xuxun.cool/2020/06/create-a-server-with-deno-and-mongo/)

## 附录：Mac 安装 Deno

> 代码截取自[Deno 钻研之术：(1) Hello，从多样化安装到简单实战](https://juejin.im/post/5ebb8b9c5188250bdf5c2d89)，有修改。

**友情提示**：目前 Mac 用户使用 homebrew 安装版本只有 `0.4.2`，运行本文章代码会报错。

推荐：**Mac 系统使用 `curl` 方式安装高版本 `deno`**

``` bash
# 通过 curl 下载远程的安装脚本 install.sh 中的 deno.zip 压缩包到本地并立即执行
$ curl -fsSL https://deno.land/x/install/install.sh | sh
# Archive:  /Users/${USER_NAME}/.deno/bin/deno.zip
#   inflating: deno
# Deno was installed successfully to /Users/${USER_NAME}/.deno/bin/deno
# Manually add the directory to your $HOME/.bash_profile (or similar)
#   export DENO_INSTALL="/Users/${USER_NAME}/.deno"
#   export PATH="$DENO_INSTALL/bin:$PATH"
# Run '/Users/${USER_NAME}/.deno/bin/deno --help' to get started

# 输入 deno -V 并不能运行成功 deno 命令，需要我们手动配置环境变量来让终端知道 deno 命令该在哪执行。
$ deno -V
# zsh: command not found: deno

# 注意：${USER_NAME} 是你在自己操作系统下的用户名，需要手动改为自己的用户名。
$ export DENO_INSTALL="/Users/xuxun/.deno"
$ export PATH="$DENO_INSTALL/bin:$PATH"
$ deno -V
deno 1.1.1
$ which deno
/Users/xuxun/.deno/bin/deno

```

友情提示：curl 下载 deno 过程可能有点慢，可以选择扔在一边先不去管它。
