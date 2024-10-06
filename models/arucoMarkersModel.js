const pool = require('../database');

// Mendapatkan semua ArUco markers
const getAllMarkers = async () => {
  return pool.query('SELECT * FROM aruco_markers');
};

// Mendapatkan ArUco marker berdasarkan ID
const getMarkerById = async (marker_id) => {
  return pool.query('SELECT * FROM aruco_markers WHERE marker_id = $1', [marker_id]);
};

// Membuat ArUco marker baru
const createMarker = async (marker_id, building_id, floor, location_name, connected_rooms) => {
  return pool.query(
    'INSERT INTO aruco_markers (marker_id, building_id, floor, location_name, connected_rooms) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [marker_id, building_id, floor, location_name, connected_rooms]
  );
};

// Mengubah data ArUco marker berdasarkan ID
const updateMarker = async (marker_id, building_id, floor, location_name, connected_rooms) => {
  return pool.query(
    'UPDATE aruco_markers SET building_id = $1, floor = $2, location_name = $3, connected_rooms = $4 WHERE marker_id = $5 RETURNING *',
    [building_id, floor, location_name, connected_rooms, marker_id]
  );
};

// Menghapus ArUco marker berdasarkan ID
const deleteMarker = async (marker_id) => {
  return pool.query('DELETE FROM aruco_markers WHERE marker_id = $1', [marker_id]);
};

module.exports = {
  getAllMarkers,
  getMarkerById,
  createMarker,
  updateMarker,
  deleteMarker
};
