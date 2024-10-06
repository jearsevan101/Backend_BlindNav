const pool = require('../database');

// Mendapatkan semua bangunan
const getAllBuildings = async () => {
  return pool.query('SELECT * FROM buildings');
};

// Membuat bangunan baru
const createBuilding = async (building_name, total_floors) => {
  return pool.query(
    'INSERT INTO buildings (building_name, total_floors) VALUES ($1, $2) RETURNING *',
    [building_name, total_floors]
  );
};

// Memperbarui bangunan
const updateBuilding = async (id, building_name, total_floors) => {
  return pool.query(
    'UPDATE buildings SET building_name = $1, total_floors = $2 WHERE building_id = $3 RETURNING *',
    [building_name, total_floors, id]
  );
};

// Menghapus bangunan
const deleteBuilding = async (id) => {
  return pool.query('DELETE FROM buildings WHERE building_id = $1', [id]);
};

module.exports = {
  getAllBuildings,
  createBuilding,
  updateBuilding,
  deleteBuilding
};
