const Professor = require('../models/professorsModel');

// Mendapatkan semua professors
const getAllProfessors = async (req, res) => {
  try {
    const result = await Professor.getAllProfessors();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan professor berdasarkan ID
const getProfessorById = async (req, res) => {
  const { professor_id } = req.params;
  try {
    const result = await Professor.getProfessorById(professor_id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat professor baru
const createProfessor = async (req, res) => {
  const { professor_name, additional_info } = req.body;
  try {
    const result = await Professor.createProfessor(professor_name, additional_info);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mengubah professor berdasarkan ID
const updateProfessor = async (req, res) => {
  const { professor_id } = req.params;
  const { professor_name, additional_info } = req.body;
  try {
    const result = await Professor.updateProfessor(professor_id, professor_name, additional_info);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus professor berdasarkan ID
const deleteProfessor = async (req, res) => {
  const { professor_id } = req.params;
  try {
    await Professor.deleteProfessor(professor_id);
    res.json({ message: 'Professor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor
};
