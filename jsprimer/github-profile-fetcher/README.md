# GitHub Profile Fetcher

![png](https://github.com/gyokuro06/learning-js/jsprimer/github-profile-fetcher/image/github-profile-fetcher.png)

## Overview

適当なGitHubユーザーのIDに一致するGitHubプロフィールを表示するだけ

## Usage
実行環境にnpmが入っている場合
```sh
git clone git@github.com:gyokuro06/learning-js.git
cd jsprimer/github-profile-fetcher
npm run dev
```

実行環境にnpmがなく、docker composeで動かす場合
```sh
git clone git@github.com:gyokuro06/learning-js.git
cd jsprimer/github-profile-fetcher
make ci
// Ctrl-Cで終了する
make clean
```
