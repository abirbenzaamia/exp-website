const pg = require('pg')

const db = new pg.Pool({
   host: process.env.HOST,
   port: process.env.PORT,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DB

}

)
