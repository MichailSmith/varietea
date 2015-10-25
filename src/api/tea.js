
import { Router } from 'express';
import teaTable from '../data/teaTable.js';

const router = new Router();

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


export default router;
