
const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


//routes
//index route
router.get('/', function(req, res, next) {
  //Passes projects data to index template
  res.render('index', { projects });
});

//projects Page
router.get('/project/:id', function(req, res, next) {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === +projectId);
  if (project) {
    //Passes project data to the project template
    res.render('project', { project });
  } else {
    res.sendStatus(404);
  }
});

//about route
router.get('/about', (req, res) => {
  res.render('about');
})


module.exports = router;
