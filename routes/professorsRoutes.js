const express = require('express');
const router = express.Router();
const professorsController = require('../Controllers/professorsController');

// Mendapatkan semua professors
router.get('/', professorsController.getAllProfessors);

// Mendapatkan professor berdasarkan ID
router.get('/:professor_id', professorsController.getProfessorById);

// Membuat professor baru
router.post('/', professorsController.createProfessor);

// Mengubah professor berdasarkan ID
router.put('/:professor_id', professorsController.updateProfessor);

// Menghapus professor berdasarkan ID
router.delete('/:professor_id', professorsController.deleteProfessor);

module.exports = router;
