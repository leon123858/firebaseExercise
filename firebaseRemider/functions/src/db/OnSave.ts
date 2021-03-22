import { Request, Response } from 'express';
import db from '../initDB';
let firestore = db;


export default async (req: Request, res: Response) => {
  let ID =  req.query.ID;
  let Date = req.query.Date;
  let Thing = req.query.Thing;
  if(ID == undefined){
    res.send("save error");
    return;
  }
  await firestore
          .collection('Reminder')
          .doc(ID.toString())
          .set({Date:Date,Thing:Thing})
          .then(()=>res.send("save success"))
          .catch(()=>res.send("save error"));
  return;
}