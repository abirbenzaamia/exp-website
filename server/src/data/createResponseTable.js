import pool from "../config/db.js";

const createResponseTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS responses (
    id SERIAL PRIMARY KEY,
    prolific_id VARCHAR(100) NOT NULL,
    test_group VARCHAR(100) NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    ad_url VARCHAR(100) NOT NULL,
    r1 VARCHAR(100) NOT NULL,
    r2 VARCHAR(100) NOT NULL,
    r3 VARCHAR(100) NOT NULL,
    r4 VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(), 
    CONSTRAINT fk_prolific_id FOREIGN KEY (prolific_id) REFERENCES participants(prolific_id) ON DELETE CASCADE

)
    `;
  try {
    pool.query(queryText);
    console.log("responses table created if not exists");
  } catch (error) {
    console.log("Error creating responses table : ", error);
  }
};

export default createResponseTable;