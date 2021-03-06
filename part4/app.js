const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');

app.use(cors());
app.use(bodyParser.json());
app.use(middleware.tokenExtractor);

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const mongoUrl = config.MONGODB_URI;
mongoose
	.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
	.then(() => {
		console.log('connected to MongoDB');
	})
	.catch((error) => {
		console.log('error connection to MongoDB:', error.message);
	});
app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
