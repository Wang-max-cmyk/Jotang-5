## 通过API向讯飞星火大模型请求数据

### 0.明确目标

向大模型请求数据

### 1.静态网页

以（2）为基础，略微修改

### 2.学习API相关知识

#### (1). 什么是API？

API（Application Programming Interface，应用程序编程接口）是一种允许软件应用程序之间相互通信的协议。它定义了请求的制作方式，如何发送请求，预期的响应格式，这样就可以在软件或系统之间实现数据交换和功能触发。

#### (2). API的类型

##### 2.1. RESTful API
- 基于REST（Representational State Transfer）架构风格的API。
- 使用HTTP协议的GET, POST, PUT, DELETE等方法。
- 无状态，每次请求都是独立的。

##### 2.2. SOAP API
- 简单对象访问协议（Simple Object Access Protocol）。
- 使用XML格式进行数据交换。
- 支持WSDL（Web Services Description Language）用于描述服务接口。

##### 2.3. GraphQL
- 由Facebook开发，用于替代RESTful API。
- 允许客户端指定所需数据的确切结构。
- 通过单个请求获取多个资源。

#### (3). API的关键组成部分

##### 3.1. Endpoint（端点）
- API的URL地址，客户端通过它来访问资源。

##### 3.2. Request（请求）
- 客户端发送给API的数据，包括HTTP方法和参数。

##### 3.3. Response（响应）
- API返回给客户端的数据，通常包括状态码和数据。

##### 3.4. Header（头部）
- 请求和响应的元数据，如内容类型、认证令牌等。

##### 3.5. Status Codes（状态码）
- 表示API请求结果的数字代码，如200表示成功，404表示未找到。

#### (4). 使用API的步骤

##### 4.1. 注册与认证
- 在大多数情况下，使用API前需要注册并获取认证信息（如API密钥或令牌）。

##### 4.2. 发送请求
- 使用HTTP客户端发送请求到API端点。

##### 4.3. 处理响应
- 接收API的响应，并根据返回的数据或状态码进行相应的处理。

#### (5). API文档

API文档是开发者使用API的重要资源，通常包含以下内容：

- API概述和功能介绍
- 如何注册和获取API密钥
- 端点列表和每个端点的功能描述
- 请求和响应的格式及参数说明
- 状态码和错误消息的解释
- 示例请求和响应

#### (6). 安全性

- 使用HTTPS协议保证数据传输的安全性。
- 实施认证机制，如OAuth、API密钥。
- 对敏感数据进行加密处理。

#### (7). 示例

 ```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer your_api_token
 

 http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
 ```

以上示例展示了如何使用GET请求从一个API获取用户信息，并接收一个JSON格式的响应。

### 3.通过API向大模型请求数据的方法

- Python
- java
- js
- SDK

### 4.基本结构

- 2题的网页为前端
- 简单的Python为后端向讯飞星火大模型请求数据

### 5.传递参数

- max_tokens（回复长度限制）
- top-k（灵活度）
- temperature（随机性）

很遗憾，讯飞星火只有这么多参数...

### 6.部署上线

本地测试，成功

![](https://pic.imgdb.cn/item/67194b23d29ded1a8c3d3b85.png)

![](https://pic.imgdb.cn/item/67194b5ed29ded1a8c3d56ac.png)

- 想通过Heroku部署，无法注册...
- 想通过Netlify来部署，不太支持Python...
- 想通过Azure来部署，微软账号不行...
- 通过阿里云来部署，失败...
- 通过vercel来部署，网页无法打开(应该是结构或者环境变量有问题)...

但是我不想也不会放弃，我一定会成功的！！！
