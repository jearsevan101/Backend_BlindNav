const pool = require('../database');

// Mendapatkan semua professor
const getAllProfessors = async () => {
  return pool.query('SELECT * FROM professors');
};

// Mendapatkan professor berdasarkan ID
const getProfessorById = async (professor_id) => {
  return pool.query('SELECT * FROM professors WHERE professor_id = $1', [professor_id]);
};

// Membuat professor baru
const createProfessor = async (professor_name, additional_info) => {
  return pool.query(
    'INSERT INTO professors (professor_name, additional_info) VALUES ($1, $2) RETURNING *',
    [professor_name, additional_info]
  );
};

// Mengubah professor berdasarkan ID
const updateProfessor = async (professor_id, professor_name, additional_info) => {
  return pool.query(
    'UPDATE professors SET professor_name = $1, additional_info = $2 WHERE professor_id = $3 RETURNING *',
    [professor_name, additional_info, professor_id]
  );
};

// Menghapus professor berdasarkan ID
const deleteProfessor = async (professor_id) => {
  return pool.query('DELETE FROM professors WHERE professor_id = $1', [professor_id]);
};

module.exports = {
  getAllProfessors,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor
};
