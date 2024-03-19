import  { Router } from 'express';
import  getUsers  from './controller';


const router = Router();
console.log(getUsers)

 router.get('/',getUsers)


 export default router;