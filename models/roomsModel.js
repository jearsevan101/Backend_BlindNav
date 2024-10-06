const pool = require('../database');

// Mendapatkan semua rooms
const getAllRooms = async () => {
  return pool.query('SELECT * FROM rooms');
};

// Mendapatkan room berdasarkan ID
const getRoomById = async (room_id) => {
  return pool.query('SELECT * FROM rooms WHERE room_id = $1', [room_id]);
};

// Membuat room baru
const createRoom = async (building_id, floor, room_name, room_type, room_number, responsible_professors) => {
  return pool.query(
    'INSERT INTO rooms (building_id, floor, room_name, room_type, room_number, responsible_professors) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [building_id, floor, room_name, room_type, room_number, responsible_professors]
  );
};

// Mengubah room berdasarkan ID
const updateRoom = async (room_id, building_id, floor, room_name, room_type, room_number, responsible_professors) => {
  return pool.query(
    'UPDATE rooms SET building_id = $1, floor = $2, room_name = $3, room_type = $4, room_number = $5, responsible_professors = $6 WHERE room_id = $7 RETURNING *',
    [building_id, floor, room_name, room_type, room_number, responsible_professors, room_id]
  );
};

// Menghapus room berdasarkan ID
const deleteRoom = async (room_id) => {
  return pool.query('DELETE FROM rooms WHERE room_id = $1', [room_id]);
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
