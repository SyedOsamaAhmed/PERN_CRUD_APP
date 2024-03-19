import { Pool } from 'pg';


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'postgres',
    port:5432,
    database:'userinfo',
  })

  export {defaultpool};