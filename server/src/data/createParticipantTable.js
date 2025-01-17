import pool from "../config/db.js";

const createParticipantTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS participants (
    id SERIAL PRIMARY KEY,
    prolific_id VARCHAR(100) NOT NULL,
    ip VARCHAR(100) NOT NULL,
    user_agent VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    gender INTEGER NOT NULL,
    education INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

  try {
    pool.query(queryText);
    console.log("Participant table created if not exists");
  } catch (error) {
    console.log("Error creating users table : ", error);
  }
};

export default createParticipantTable;