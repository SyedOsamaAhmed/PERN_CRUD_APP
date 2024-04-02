import pkg from 'pg';




const client = new pkg.Client({
  host: 'localhost',
  port: 5432,
  database: 'userinfo',
  user: 'postgres',
  password: 'postgres',
})




  export default client;