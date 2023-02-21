# Koa-Template

用户注册接口 POST http://localhost/user  需携带token 认证

Content-Type：application/json

`{
    "username":"Magical",
    "password":"1234"
}
`

用户登录接口 POST http://localhost/login

Content-Type：application/json

`{
    "username":"Magical",
    "password":"1234"
}
`
添加消息接口 POST http://localhost/message/addMsg

Content-Type：application/json

`{
    "from":1, 
    "to":2,
}
`

查询消息接口 POST http://localhost/message/addMsg

Content-Type：application/json

`{
    "from":1, 
    "to":2,
    "msg":"123456😊😊"
}
`



获取用户列表接口 GET http://localhost/user/:id  查询非id的所有用户信息


获取头像接口 GET http://localhost/avatar/findavatar/:username 查询 username 的头像







