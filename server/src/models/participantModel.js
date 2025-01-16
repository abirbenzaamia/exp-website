import pool from "../config/db.js";

export const getAllParticipantsService = async () => {
  const result = await pool.query("SELECT * FROM participants");
  return result.rows;
};


export const getParticipantByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM participants where id = $1", [id]);
  return result.rows[0];
};


export const createParticipantService = async (prolific_id, ip, user_agent, age, gender, education) => {
  const result = await pool.query(
    "INSERT INTO participants (prolific_id, ip, user_agent, age, gender, education) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [prolific_id, ip, user_agent, age, gender, education]
  );
  return result.rows[0];
};


export const updateParticipantService = async (id, prolific_id, ip, user_agent, age, gender, education) => {
  const result = await pool.query(
    "UPDATE users SET prolific_id=$1, ip=$2, user_agent=$3, age=$4, gender=$5, education=$6 WHERE id=$7 RETURNING *",
    [prolific_id, ip, user_agent, age, gender, education, id]
  );
  return result.rows[0];
};


export const deleteParticipantService = async (id) => {
  const result = await pool.query(
    "DELETE FROM participants WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};