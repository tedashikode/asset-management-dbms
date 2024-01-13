const express = require('express');
const router = express.Router();
const assets = require('../services/assets');

/* GET assets. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await assets.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting assets `, err.message);
    next(err);
  }
});

/* POST asset */
router.post('/', async function(req, res, next) {
    try {
      res.json(await assets.create(req.body));
    } catch (err) {
      console.error(`Error while creating asset`, err.message);
      next(err);
    }
});

/* PUT asset */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await assets.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating asset`, err.message);
      next(err);
    }
});

/* DELETE asset */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await passets.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting asset`, err.message);
      next(err);
    }
});

// GET asset by id
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await assets.search(req.params.id));
    } catch (err) {
      console.error(`Error while searching assets `, err.message);
      next(err);
    }
  });

module.exports = router;