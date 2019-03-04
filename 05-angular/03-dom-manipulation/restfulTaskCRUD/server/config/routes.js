const tasks = require('./../controllers/tasks.js');
const path = require('path');

module.exports = function(app){
  // create a task
  app.post('/task', tasks.create)

  app.delete('/task/:id', tasks.removeTask)
  // get all tasks
  app.get('/tasks', tasks.all)
  // get one task
  app.get('/task/:id', tasks.getOne)
  // update a task
  app.put('/task', tasks.update)
  // catch all
  app.all('*', (req, res) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  })
 

}
