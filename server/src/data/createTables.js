import pool from "../config/db.js";



const createParticipantTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS participants (
    id SERIAL PRIMARY KEY,
    prolific_id VARCHAR(100) NOT NULL,
    ip VARCHAR(100) NOT NULL,
    user_agent VARCHAR(200) NOT NULL,
    vpn INTEGER NOT NULL,
    tpc_blocked INTEGER NOT NULL,
    age INTEGER NOT NULL,
    gender INTEGER NOT NULL,
    education INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

  try {
    pool.query(queryText);
    console.log("participants table created if not exists");
  } catch (error) {
    console.log("Error creating users table : ", error);
  }
};


const createResponseTable = async () => {
    const queryText = `
      CREATE TABLE IF NOT EXISTS responses (
      id SERIAL PRIMARY KEY,
      prolific_id VARCHAR(100) NOT NULL,
      test_group VARCHAR(100) NOT NULL,
      publisher VARCHAR(100) NOT NULL,
      ad_url VARCHAR(2000) NOT NULL,
      r1 VARCHAR(100) NOT NULL,
      r2 VARCHAR(100) NOT NULL,
      r3 VARCHAR(100) NOT NULL,
      r4 VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
  
  )
      `;
      // CONSTRAINT fk_prolific_id FOREIGN KEY (prolific_id) REFERENCES participants(prolific_id) ON DELETE CASCADE

    try {
      pool.query(queryText);
      console.log("responses table created if not exists");
    } catch (error) {
      console.log("Error creating responses table : ", error);
    }
  };



const createTestingGroupTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS testing_groups (
    id SERIAL PRIMARY KEY,
    prolific_id VARCHAR(100) NOT NULL,
    test_group INTEGER NOT NULL
)
    `;

  try {
    pool.query(queryText);
    console.log("testing_groups table created if not exists");
  } catch (error) {
    console.log("Error creating testing_groups table : ", error);
  }
};



const createTables = async () => {
createParticipantTable();
createResponseTable();
createTestingGroupTable();
}

export default createTables;