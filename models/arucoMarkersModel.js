const pool = require('../database');

// Mendapatkan semua ArUco markers
const getAllArucoMarkers = async () => {
  return pool.query('SELECT * FROM aruco_markers');
};

// Mendapatkan ArUco marker berdasarkan ID
const getArucoMarkerById = async (marker_id) => {
  return pool.query('SELECT * FROM aruco_markers WHERE marker_id = $1', [marker_id]);
};

// Membuat ArUco marker baru
const createArucoMarker = async (building_id, floor, point_name, point_type, left_room_id, right_room_id, forward_room_id, backward_room_id, description) => {
  return pool.query(
    `INSERT INTO aruco_markers (building_id, floor, point_name, point_type, left_room_id, right_room_id, forward_room_id, backward_room_id, description) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [building_id, floor, point_name, point_type, left_room_id, right_room_id, forward_room_id, backward_room_id, description]
  );
};

// Mengubah data ArUco marker berdasarkan ID
const updateArucoMarker = async (id, building_id, floor, point_name, point_type, left_room_id, right_room_id, forward_room_id, backward_room_id, description) => {
  return pool.query(
    `UPDATE aruco_markers SET building_id = $1, floor = $2, point_name = $3, point_type = $4, left_room_id = $5, right_room_id = $6, 
     forward_room_id = $7, backward_room_id = $8, description = $9 WHERE marker_id = $10 RETURNING *`,
    [building_id, floor, point_name, point_type, left_room_id, right_room_id, forward_room_id, backward_room_id, description, id]
  );
};

// Menghapus ArUco marker berdasarkan ID
const deleteArucoMarker = async (id) => {
  return pool.query('DELETE FROM aruco_markers WHERE marker_id = $1', [id]);
};

module.exports = {
  getAllArucoMarkers,
  getArucoMarkerById,
  createArucoMarker,
  updateArucoMarker,
  deleteArucoMarker
};
