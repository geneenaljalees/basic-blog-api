const express = require('express');
const userRoutes = require('./src/routes/users');
const postRouter = require('./src/routes/posts');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/posts', postRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
