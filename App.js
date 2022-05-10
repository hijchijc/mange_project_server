const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')


app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

// 定义简单的返回错误函数
// app.use((req, res, next) => {
//   res.cc = (err, status = 1) => {
//     res.send({
//       status, 
//       message:err instanceof Error ? err.message : err
//     })
//   }
//   next()
// })

// 导入登录模块
const loginRouter = require('./router/login')
app.use(loginRouter)

// 导入类别模块
const categoryRouter = require('./router/category')
app.use('/manage/category', categoryRouter)

// 错误级别中间件
app.use((err, req, res, next) => {
  res.send(err)
})

app.listen(5000, () => {
  console.log("manage_project_server is running at http:localhost:5000");
})