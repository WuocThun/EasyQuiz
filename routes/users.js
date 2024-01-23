const userRoutes = (app, fs) => {
  // variables
  const dataPath = './data/users.json';

  // READ
  app.get('/user/userType/61403e8fa8524b0019c83a3e', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

//võ
    // variables
  const dataVo = './data/vo.json';

  // READ
  app.get('/user/userType/6151be1450bbd90019387ea9', (req, res) => {
    fs.readFile(dataVo, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });


  
};

module.exports = userRoutes;