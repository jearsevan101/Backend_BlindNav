const express = require('express');
const router = express.Router();
const roomsController = require('../Controllers/roomsController');

// Mendapatkan semua rooms
router.get('/', roomsController.getAllRooms);

// Mendapatkan room berdasarkan ID
router.get('/:room_id', roomsController.getRoomById);

// Membuat room baru
router.post('/', roomsController.createRoom);

// Mengubah room berdasarkan ID
router.put('/:room_id', roomsController.updateRoom);

// Menghapus room berdasarkan ID
router.delete('/:room_id', roomsController.deleteRoom);

module.exports = router;
