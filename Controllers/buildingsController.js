const Building = require('../models/buildingsModel');

// Mendapatkan semua bangunan
const getAllBuildings = async (req, res) => {
  try {
    const result = await Building.getAllBuildings();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat bangunan baru
const createBuilding = async (req, res) => {
  const { building_name, total_floors } = req.body;
  try {
    const result = await Building.createBuilding(building_name, total_floors);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Memperbarui bangunan
const updateBuilding = async (req, res) => {
  const { id } = req.params;
  const { building_name, total_floors } = req.body;
  try {
    const result = await Building.updateBuilding(id, building_name, total_floors);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus bangunan
const deleteBuilding = async (req, res) => {
  const { id } = req.params;
  try {
    await Building.deleteBuilding(id);
    res.json({ message: 'Building deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBuildings,
  createBuilding,
  updateBuilding,
  deleteBuilding
};
