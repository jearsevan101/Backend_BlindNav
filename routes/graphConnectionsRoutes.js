const express = require('express');
const router = express.Router();
const graphConnectionsController = require('../Controllers/graphConnectionController');

// Mendapatkan semua graph connections
router.get('/', graphConnectionsController.getAllConnections);

// Mendapatkan graph connection berdasarkan ID
router.get('/:connection_id', graphConnectionsController.getConnectionById);

// Membuat graph connection baru
router.post('/', graphConnectionsController.createConnection);

// Mengubah graph connection berdasarkan ID
router.put('/:connection_id', graphConnectionsController.updateConnection);

// Menghapus graph connection berdasarkan ID
router.delete('/:connection_id', graphConnectionsController.deleteConnection);

module.exports = router;
