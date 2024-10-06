const express = require('express');
const router = express.Router();
const arucoMarkersController = require('../Controllers/arucoMarkersController');

// Mendapatkan semua ArUco markers
router.get('/', arucoMarkersController.getAllArucoMarkers);

// Mendapatkan ArUco marker berdasarkan ID
router.get('/:marker_id', arucoMarkersController.getArucoMarkerById);

// Membuat ArUco marker baru
router.post('/', arucoMarkersController.createArucoMarker);

// Mengubah data ArUco marker berdasarkan ID
router.put('/:marker_id', arucoMarkersController.updateArucoMarker);

// Menghapus ArUco marker berdasarkan ID
router.delete('/:marker_id', arucoMarkersController.deleteArucoMarker);

module.exports = router;
