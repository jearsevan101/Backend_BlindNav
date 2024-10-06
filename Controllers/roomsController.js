const Room = require('../models/roomsModel');

// Mendapatkan semua rooms
const getAllRooms = async (req, res) => {
  try {
    const result = await Room.getAllRooms();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan room berdasarkan ID
const getRoomById = async (req, res) => {
  const { room_id } = req.params;
  try {
    const result = await Room.getRoomById(room_id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat room baru
const createRoom = async (req, res) => {
  const { building_id, floor, room_name, room_type, room_number, responsible_professors } = req.body;
  try {
    const result = await Room.createRoom(building_id, floor, room_name, room_type, room_number, responsible_professors);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mengubah room berdasarkan ID
const updateRoom = async (req, res) => {
  const { room_id } = req.params;
  const { building_id, floor, room_name, room_type, room_number, responsible_professors } = req.body;
  try {
    const result = await Room.updateRoom(room_id, building_id, floor, room_name, room_type, room_number, responsible_professors);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus room berdasarkan ID
const deleteRoom = async (req, res) => {
  const { room_id } = req.params;
  try {
    await Room.deleteRoom(room_id);
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
