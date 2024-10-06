const express = require('express');
const router = express.Router();
const arucoMarkersController = require('../Controllers/arucoMarkersController');

// Mendapatkan semua ArUco markers
router.get('/', arucoMarkersController.getAllMarkers);

// Mendapatkan ArUco marker berdasarkan ID
router.get('/:marker_id', arucoMarkersController.getMarkerById);

// Membuat ArUco marker baru
router.post('/', arucoMarkersController.createMarker);

// Mengubah data ArUco marker berdasarkan ID
router.put('/:marker_id', arucoMarkersController.updateMarker);

// Menghapus ArUco marker berdasarkan ID
router.delete('/:marker_id', arucoMarkersController.deleteMarker);

module.exports = router;
