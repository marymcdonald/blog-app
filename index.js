const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const logger = require('./utils/logger');
const mongoose = require('mongoose');




const mongoUrl = config.MONGODB_URI
logger.info('connecting to MongoDB');
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use('api/blogs', blogsRouter);


app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})