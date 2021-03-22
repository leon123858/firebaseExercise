import { Request, Response } from 'express';
import db from '../initDB';
let firestore = db;


export default async (req: Request, res: Response) => {
  let ID =  req.query.ID;
  if(ID == undefined){
    res.send("save error");
    return;
  }
  await firestore
          .collection('Reminder')
          .doc(ID.toString())
          .get()
          .then((tmp)=> res.json(tmp.data()))
          .catch(()=>res.send('find error')); 
  return;
}