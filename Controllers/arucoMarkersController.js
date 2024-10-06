const ArucoMarker = require('../models/arucoMarkersModel');

// Mendapatkan semua ArUco markers
const getAllMarkers = async (req, res) => {
  try {
    const result = await ArucoMarker.getAllMarkers();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan ArUco marker berdasarkan ID
const getMarkerById = async (req, res) => {
  const { marker_id } = req.params;
  try {
    const result = await ArucoMarker.getMarkerById(marker_id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Marker not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat ArUco marker baru
const createMarker = async (req, res) => {
  const { marker_id, building_id, floor, location_name, connected_rooms } = req.body;
  try {
    const result = await ArucoMarker.createMarker(marker_id, building_id, floor, location_name, connected_rooms);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mengubah data ArUco marker berdasarkan ID
const updateMarker = async (req, res) => {
  const { marker_id } = req.params;
  const { building_id, floor, location_name, connected_rooms } = req.body;
  try {
    const result = await ArucoMarker.updateMarker(marker_id, building_id, floor, location_name, connected_rooms);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Marker not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus ArUco marker berdasarkan ID
const deleteMarker = async (req, res) => {
  const { marker_id } = req.params;
  try {
    await ArucoMarker.deleteMarker(marker_id);
    res.json({ message: 'Marker deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMarkers,
  getMarkerById,
  createMarker,
  updateMarker,
  deleteMarker
};
