const GraphConnection = require('../models/graphConnectionsModel');

// Mendapatkan semua graph connections
const getAllConnections = async (req, res) => {
  try {
    const result = await GraphConnection.getAllConnections();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan graph connection berdasarkan ID
const getConnectionById = async (req, res) => {
  const { connection_id } = req.params;
  try {
    const result = await GraphConnection.getConnectionById(connection_id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Connection not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat graph connection baru
const createConnection = async (req, res) => {
  const { from_marker_id, to_marker_id, distance, angle } = req.body;
  try {
    const result = await GraphConnection.createConnection(from_marker_id, to_marker_id, distance, angle);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mengubah graph connection berdasarkan ID
const updateConnection = async (req, res) => {
  const { connection_id } = req.params;
  const { from_marker_id, to_marker_id, distance, angle } = req.body;
  try {
    const result = await GraphConnection.updateConnection(connection_id, from_marker_id, to_marker_id, distance, angle);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Connection not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus graph connection berdasarkan ID
const deleteConnection = async (req, res) => {
  const { connection_id } = req.params;
  try {
    await GraphConnection.deleteConnection(connection_id);
    res.json({ message: 'Connection deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllConnections,
  getConnectionById,
  createConnection,
  updateConnection,
  deleteConnection
};
