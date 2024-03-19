import  pg  from 'pg';


const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    password:"postgres",
    port:5432,
    database:"userinfo",
  })

  export default pool;