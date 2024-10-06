const express = require('express');
require('dotenv').config();
const buildingsRoutes = require('./routes/buildingsRoutes');
const arucoMarkersRoutes = require('./routes/arucoMarkersRoutes');
const graphConnectionsRoutes = require('./routes/graphConnectionsRoutes');
const professorsRoutes = require('./routes/professorsRoutes');
const roomsRoutes = require('./routes/roomsRoutes');

const app = express();
app.use(express.json()); // Untuk parsing request JSON

// Routes
app.use('/buildings', buildingsRoutes);
app.use('/aruco-markers', arucoMarkersRoutes);
app.use('/graph-connections', graphConnectionsRoutes);
app.use('/professors', professorsRoutes);
app.use('/rooms', roomsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
