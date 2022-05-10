const db = require('../db/index')

exports.reqList = (req, res) => {

  const { parentId } = req.query

  if(!parentId) {
    return res.send('查找分类失败')
  }

  const sqlStr = 'select * from category where parentId=?'

  db.query(sqlStr, parentId, (err, results) => {
    if(err) {
      return res.send(err)
    } else {
      res.send({
        status: 0,
        data: results
      })
    }
  })
}

exports.addList = (req, res) => {

  const { categoryName, parentId} = req.body


  if(!categoryName || !parentId) {
    return res.send('添加失败')
  }

  const sqlStr = 'insert into category set ?'
  db.query(sqlStr, {name: categoryName, parentId: parentId}, (err, results) => {
    if(err) {
      return res.send(err)
    } else {
      res.send({
        status: 0,
      })
    }
  })
}

exports.updateList = (req, res) => {

  const { categoryId, categoryName} = req.body


  if(!categoryId || !categoryName) {
    return res.send('修改失败')
  }

  const sqlStr = 'update category set name=? where _id = ?'
  db.query(sqlStr, [categoryName, categoryId], (err, results) => {
    if(err) {
      return res.send(err)
    } else {
      res.send({
        status: 0,
      })
    }
  })
}