const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');

const express = require('express');
const filmRouter = new express.Router();

filmRouter.get('/:id', function(req, res){
  const index = req.params.id;
  res.json({data: films[index]})
});

filmRouter.get('/', function(req, res){
  res.json(films);
});


module.exports = filmRouter;
