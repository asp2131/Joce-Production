const { Pool } = require("pg");


const pool = new Pool({
	user: process.env.USER,
	host: process.env.HOST,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
});

pool.connect()
.then(() => {
    console.log(`connected to database`);
  })
  .catch((error) => {
    console.log(`not connected due to error: ${error}`);
  });
