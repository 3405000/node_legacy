const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// 정적 파일 서빙
app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', './views')
// static file serving
app.use(express.static(__dirname+'/public'))
// parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
// parsing JSON
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index');
})

// app.get('/profile', (req, res) => {
//   res.render('pages/profile');
// })

app.get('/visit', (req, res) => {
  res.render('pages/visit');
})

app.get('/blog', (req, res) => {
    res.render('pages/blog');
})



app.get('/users', (req, res) => {
    res.render('pages/users');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
})

app.post('/api/contact', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const memo = req.body.memo;

  const SQL_Query = `INSERT INTO contact(name, phone, email, memo, create_at, modify_at)
                  VALUES ('${name}', '${phone}', '${email}', '${memo}', NOW(), NOW())`
  
  connectionPool.query(SQL_Query, (err, result) => {
      if (err) {
          console.error('데이터 삽입 중 에러 발생: ', err);
          res.status(500).send('내부 서버 오류')
      } else {
          console.log('데이터가 삽입 되었습니다.');
          res.send("<script> alert('방명록이 등록되었습니다.'); location.href='/' </script>")
      }
  })
})

app.get('/contactList', (req, res) => { 
  const selectQuery = `SELECT * FROM contact ORDER BY id DESC`;

  connectionPool.query(selectQuery, (err, result) => {
      if (err) {
          console.error('데이터 조회 중 에러 발생: ', err);
          res.status(500).send('내부 서버 오류')
      } else {
          console.log('데이터가 조회 되었습니다.');
          console.log(result);
          res.render('pages/contactList', {lists:result});
      }
  });
});


app.post('/api/contactUpdate/:id', (req, res) => {
    const id = req.params.id;
    const status = "done";
    const updateQuery = `UPDATE contact SET status = '${status}' WHERE id = '${id}';`;

    connection.query(updateQuery, (err, result) => {
        if (err) {
            console.error('데이터 업데이트 중 에러 발생:', err);
            res.status(500).send('내부 서버 오류');
        } else {
            console.log('데이터가 업데이트되었습니다.');
            res.send("<script>alert('문의사항이 업데이트되었습니다.'); location.href='/contactList'</script>");
        }
    });
});

app.get('/contactList', (req, res) => { 
    const selectQuery = `SELECT * FROM contact ORDER BY id DESC`;

    connectionPool.query(selectQuery, (err, result) => {
        if (err) {
            console.error('데이터 조회 중 에러 발생: ', err);
            res.status(500).send('내부 서버 오류')
        } else {
            console.log('데이터가 조회 되었습니다.');
            console.log(result);
            res.render('contactList', {lists:result});
        }
    });
});

app.post('/api/contactDelete/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = `DELETE FROM contact WHERE id='${id}'`
    connectionPool.query(deleteQuery, (err, result) => {
        if (err) {
            console.error('데이터 삭제 중 에러 발생: ', err);
            res.status(500).send('내부 서버 오류')
        } else {
            console.log('데이터가 삭제 되었습니다.');
            console.log(result);
            res.send("<script> alert('문의사항이 삭제되었습니다.'); location.href='/contactList' </script>")
        }
    })
})

app.post('/api/contactUpdate/:id', (req, res) => {
    const id = req.params.id;
    const status = "done";
    const updateQuery = `UPDATE contact SET status = '${status}' WHERE id = '${id}';`;

    connection.query(updateQuery, (err, result) => {
        if (err) {
            console.error('데이터 업데이트 중 에러 발생:', err);
            res.status(500).send('내부 서버 오류');
        } else {
            console.log('데이터가 업데이트되었습니다.');
            res.send("<script>alert('문의사항이 업데이트되었습니다.'); location.href='/contactList'</script>");
        }
    });
});

app.post('/api/contactUpdate/:id', (req, res) => {
  const id = req.params.id;
  const status = "done";
  const updateQuery = `UPDATE contact SET status = '${status}' WHERE id = '${id}';`;

  connection.query(updateQuery, (err, result) => {
      if (err) {
          console.error('데이터 업데이트 중 에러 발생:', err);
          res.status(500).send('내부 서버 오류');
      } else {
          console.log('데이터가 업데이트되었습니다.');
          res.send("<script>alert('문의사항이 업데이트되었습니다.'); location.href='/contactList'</script>");
      }
  });
});

app.delete('/api/contactDelete/:id', (req, res) => {
  const id = req.params.id;
  const deleteQuery = `delete from contact where id='${id}'`;
  connectionPool.query(deleteQuery, (err, result) => {
      if (err) {
          console.error('데이터 삭제 중 에러 발생:', err);
          res.status(500).send('내부 서버 오류');
      } else {
          console.log('데이터가 삭제되었습니다.');
          res.send("<script>alert('문의사항이 삭제되었습니다.'); location.href='/contactList'</script>");
      }
  });
});

app.put('/api/contactUpdate/:id', (req, res) => {
  const id = req.params.id;
  const status = "done";
  const updateQuery = `UPDATE contact SET status = '${status}' WHERE id = '${id}';`;

  connectionPool.query(updateQuery, (err, result) => {
      if (err) {
          console.error('데이터 업데이트 중 에러 발생:', err);
          res.status(500).send('내부 서버 오류');
      } else {
          console.log('데이터가 업데이트되었습니다.');
          res.send("<script>alert('문의사항이 업데이트되었습니다.'); location.href='/contactList'</script>");
      }
  });
});


app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`);
    connectionPool.query('SELECT 1', (err, result) => {
      if (err) {
          console.error('MySQL 연결 문제: ', err);
      } else {
          console.log('MySQL 연결 테스트 성공.');
      }
  });
})