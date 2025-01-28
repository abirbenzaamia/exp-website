import pool from "../config/db.js";

export const getAllResponsesService = async () => {
  const result = await pool.query("SELECT * FROM responses");
  return result.rows;
};


export const getResponseByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM responses where id = $1", [id]);
  return result.rows[0];
};


export const createResponseService = async (prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4 ) => {
  const result = await pool.query(
    "INSERT INTO responses (prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4]
  );
  return result.rows[0];
};


export const updateResponseService = async (id, prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4) => {
  const result = await pool.query(
    "UPDATE users SET prolific_id=$1, test_group=$2, publisher=$3, ad_url=$4, r1=$5, r2=$6, r3=$7, r4=$8 WHERE id=$9 RETURNING *",
    [prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4, id]
  );
  return result.rows[0];
};


export const deleteResponseService = async (id) => {
  const result = await pool.query(
    "DELETE FROM responses WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};