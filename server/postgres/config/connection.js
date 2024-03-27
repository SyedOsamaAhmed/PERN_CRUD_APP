import pkg from 'pg';




const client = new pkg.Client({
  host: '192.168.100.14',
  port: 5432,
  database: 'userinfo',
  user: 'postgres',
  password: 'postgres',
})




  export default client;