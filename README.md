# customer-shiquanshimei
十全十美

## 使用
```bash
$ git clone
$ cd customer-shiquanshimei
$ yarn install
$ yarn mock:server    # start mock data server at http://localhost:3000, npm run mock:server also works
$ yarn dev            # start webpack-dev-server in another terminal window at http://localhost:8080, npm run dev also works
```

## 登录认证
* Admin: username `admin` & password `123`, authorities is `'admin'`
* User: username `user` & password `123`, authorities is `'user'`

## /admin/query
字段登录密码、确认密码、原密码字段缺失

## /user/checkList
入参字段有哪些
会员管理中会员卡、会员管理分别使用哪2个接口


系统管理、审核管理接口是否存在
