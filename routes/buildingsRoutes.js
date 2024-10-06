const express = require('express');
const router = express.Router();
const buildingsController = require('../Controllers/buildingsController');

// Route untuk mendapatkan semua bangunan
router.get('/', buildingsController.getAllBuildings);

// Route untuk membuat bangunan baru
router.post('/', buildingsController.createBuilding);

// Route untuk memperbarui bangunan berdasarkan ID
router.put('/:id', buildingsController.updateBuilding);

// Route untuk menghapus bangunan berdasarkan ID
router.delete('/:id', buildingsController.deleteBuilding);

module.exports = router;
