
import { Router } from 'express';
import teaList from './staticData.js'

const router = new Router();

router.get('/:id', async (req, res, next) => {

  try{
    const id = req.params.id;

    const tea = teaList.filter(tea => tea.id == id)[0];

    if(!tea){
      res.status(404).send(`No tea with id '${id}' found.`);
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

    const tea = teaList;

    if(!tea){
      res.status(404).send(`No tea found.`);
      return;
    }

    res.status(200).send(tea);
  }
  catch (error){
    next(error);
  }
});


export default router;
