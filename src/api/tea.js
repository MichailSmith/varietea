import { Router } from 'express';
import teaTable from '../data/teaTable.js';
import bodyParser from 'body-parser';

import authenticator from './user.js';

const router = new Router();
router.use(bodyParser.json());

router.use(async (req, res, next) => {
  console.log(req);
  next();
});

router.get('/:teaName', async (req, res, next) => {

  try{
    const teaName = req.params.teaName;

    const tea = await teaTable.getTea(teaName);

    if(!tea){
      res.status(404).send(`No tea with name '${teaName}' found.`);
      return;
    }

    res.status(200).send(tea);
  }
  catch (error){
    next(error);
  }
});

router.get('', async (req, res, next) => {

  try{

    const tea = await teaTable.getAllTeas();
    res.status(200).send(tea.entries);
  }
  catch (error){
    next(error);
  }
});

router.put('/:teaName', async (req, res, next) => {
  try{
    const teaName = req.params.teaName;
    teaTable.upsertTea(req.body.tea);
    const tea = await teaTable.getTea(teaName);
    res.status(200).send(tea)
  }
  catch (error){
    next(error);
  }
});

router.post('/:teaName', async (req, res, next) => {
  try{
    const teaName = req.params.teaName;
    teaTable.upsertTea(req.body.tea);
  }
  catch (error){
    next(error);
  }
});

export default router;
