import pool from "../config/db.js";

export const getAllTestingGroupsService = async () => {
  const result = await pool.query("SELECT * FROM testing_groups");
  return result.rows;
};


export const getTestingGroupByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM testing_groups where id = $1", [id]);
  return result.rows[0];
};


export const getTestingGroupByProlificIdService = async (prolific_id) => {
    const result = await pool.query("SELECT * FROM testing_groups where prolific_id = $1", [prolific_id]);
    return result.rows[0];
  };


export const getTestingGroupsService = async (test_group) => {
  const result = await pool.query("SELECT * FROM testing_groups where test_group = $1", [test_group]);
  return result.rows;
};




export const createTestingGroupService = async (prolific_id, test_group ) => {
  const result = await pool.query(
    "INSERT INTO testing_groups (prolific_id, test_group) VALUES ($1, $2) RETURNING *",
    [prolific_id, test_group]
  );
  return result.rows[0];
};


export const updateTestingGroupService = async (id, prolific_id, test_group) => {
  const result = await pool.query(
    "UPDATE testing_groups SET prolific_id=$1, test_group=$2 WHERE id=$3 RETURNING *",
    [prolific_id, test_group, id]
  );
  return result.rows[0];
};


export const deleteTestingGroupService = async (id) => {
  const result = await pool.query(
    "DELETE FROM testing_groups WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};