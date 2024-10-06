const express = require('express');
const router = express.Router();
const graphConnectionsController = require('../Controllers/graphConnectionController');

// Mendapatkan semua graph connections
router.get('/', graphConnectionsController.getAllGraphConnections);

// Mendapatkan graph connection berdasarkan ID
router.get('/:connection_id', graphConnectionsController.getGraphConnectionById);

// Membuat graph connection baru
router.post('/', graphConnectionsController.createGraphConnection);

// Mengubah graph connection berdasarkan ID
router.put('/:connection_id', graphConnectionsController.updateGraphConnection);

// Menghapus graph connection berdasarkan ID
router.delete('/:connection_id', graphConnectionsController.deleteGraphConnection);

module.exports = router;
