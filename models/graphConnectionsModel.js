const pool = require('../database');

// Mendapatkan semua graph connections
const getAllGraphConnections = async () => {
  return pool.query('SELECT * FROM graph_connections');
};

// Mendapatkan graph connection berdasarkan ID
const getGraphConnectionById = async (connection_id) => {
  return pool.query('SELECT * FROM graph_connections WHERE connection_id = $1', [connection_id]);
};

// Membuat graph connection baru
const createGraphConnection = async (from_marker_id, to_marker_id, distance, angle) => {
  return pool.query(
    `INSERT INTO graph_connections (from_marker_id, to_marker_id, distance, angle) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [from_marker_id, to_marker_id, distance, angle]
  );
};

// Mengubah graph connection berdasarkan ID
const updateGraphConnection = async (id, from_marker_id, to_marker_id, distance, angle) => {
  return pool.query(
    `UPDATE graph_connections SET from_marker_id = $1, to_marker_id = $2, distance = $3, angle = $4 
     WHERE connection_id = $5 RETURNING *`,
    [from_marker_id, to_marker_id, distance, angle, id]
  );
};

// Menghapus graph connection berdasarkan ID
const deleteGraphConnection = async (connection_id) => {
  return pool.query('DELETE FROM graph_connections WHERE connection_id = $1', [connection_id]);
};

module.exports = {
  getAllGraphConnections,
  getGraphConnectionById,
  createGraphConnection,
  updateGraphConnection,
  deleteGraphConnection
};
