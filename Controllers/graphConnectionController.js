const GraphConnection = require('../models/graphConnectionsModel');

// Mendapatkan semua graph connections
const getAllGraphConnections = async (req, res) => {
  try {
    const result = await GraphConnection.getAllGraphConnections();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan graph connection berdasarkan ID
const getGraphConnectionById = async (req, res) => {
  const { connection_id } = req.params;
  try {
    const result = await GraphConnection.getGraphConnectionById(connection_id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Connection not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat graph connection baru
const createGraphConnection = async (req, res) => {
  const { from_marker_id, to_marker_id, distance, angle } = req.body;
  try {
    const result = await GraphConnection.createGraphConnection(from_marker_id, to_marker_id, distance, angle);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mengubah graph connection berdasarkan ID
const updateGraphConnection = async (req, res) => {
  const { id } = req.params;
  const { from_marker_id, to_marker_id, distance, angle } = req.body;
  try {
    const result = await GraphConnection.updateGraphConnection(id, from_marker_id, to_marker_id, distance, angle);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGraphConnection = async (req, res) => {
  const { id } = req.params;
  try {
    await GraphConnection.deleteGraphConnection(id);
    res.json({ message: 'Graph connection deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllGraphConnections,
  getGraphConnectionById,
  createGraphConnection,
  updateGraphConnection,
  deleteGraphConnection
};
