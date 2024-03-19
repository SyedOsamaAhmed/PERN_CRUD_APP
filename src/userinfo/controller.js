
import {Pool} from '../../db';


const pool=new Pool();

 const getUsers=pool.query("SELECT * from userpost",(req,res)=>{
   pool.query("SELECT * from userpost",(error,results)=>{
    if(error)throw error;

    res.status(200).json(results.rows);
   })

})

export default getUsers;
