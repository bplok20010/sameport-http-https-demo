# sameport-http-https-demo

http/https 实现相同端口不跳转原理

检测请求报文中是否存在 GET POST PUT 等信息，如果存在则判断是 HTTP 请求，否则 HTTPS，最后转发到相应的服务上
