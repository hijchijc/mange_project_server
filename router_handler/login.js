exports.login = (req, res) => {
  const {username, password} = req.body
  if(username === 'admin' && password === 'admin') {
    return res.send({
      message:"登录成功", 
      status:0,
      data: {
        id:username
      }
    })
  } else {
    res.send({
      message:"用户名或密码错误", 
      status:1,
    })
  }
}