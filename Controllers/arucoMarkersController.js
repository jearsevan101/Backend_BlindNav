const ArucoMarker = require('../models/arucoMarkersModel');

// Mendapatkan semua ArUco markers
const getAllArucoMarkers = async (req, res) => {
  try {
    const result = await ArucoMarker.getAllArucoMarkers();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan ArUco marker berdasarkan ID
const getArucoMarkerById = async (req, res) => {
  const { marker_id } = req.params;
  try {
    const result = await ArucoMarker.getArucoMarkerById(marker_id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Marker not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat ArUco marker baru
const createArucoMarker = async (req, res) => {
  const { building_id, floor, point_name, point_type,  west_room_id, east_room_id, north_room_id, south_room_id, description } = req.body;
  try {
    const result = await ArucoMarker.createArucoMarker(building_id, floor, point_name, point_type,  west_room_id, east_room_id, north_room_id, south_room_id, description);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mengubah data ArUco marker berdasarkan ID
const updateArucoMarker = async (req, res) => {
  const { id } = req.params;
  const { building_id, floor, point_name, point_type, west_room_id, east_room_id, north_room_id, south_room_id, description } = req.body;
  try {
    const result = await ArucoMarker.updateArucoMarker(id, building_id, floor, point_name, point_type,  west_room_id, east_room_id, north_room_id, south_room_id, description);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus ArUco marker berdasarkan ID
const deleteArucoMarker = async (req, res) => {
  const { id } = req.params;
  try {
    await ArucoMarker.deleteArucoMarker(id);
    res.json({ message: 'Aruco Marker deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllArucoMarkers,
  getArucoMarkerById,
  createArucoMarker,
  updateArucoMarker,
  deleteArucoMarker
};
