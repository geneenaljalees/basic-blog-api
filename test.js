const request = require('supertest');
const app = require('./server');

 test('should create a new user', (done) => {
   const newUser = {
     id: 1,
     firstname: 'Geneen',
     secondname: 'mohammad',
     password: 'geneen123',
   };

   request(app)
     .post('/users')
     .send(newUser)
     .set('Content-Type', 'application/json')
     .expect(201)
     .end((err, res) => {
       if (err) return done(err);

       expect(res.body).toHaveProperty('message', 'User created successfully');
       expect(res.body.user.firstname).toBe('Geneen');

       done();
     });
 });

test('should create a new post for an existing user', (done) => {
  const newPost = {
    userId: 1,
    title: 'My First Post',
    content: 'Hello world!'
  };

  request(app)
    .post('/posts')
    .send(newPost)
    .set('Content-Type', 'application/json')
    .expect(201)
    .end((err, res) => {
      if (err) return done(err);

      expect(res.body).toHaveProperty('message', 'Post created successfully');
      expect(res.body.post.title).toBe('My First Post');
      expect(res.body.post.content).toBe('Hello world!');
      done();
    })
});

  test('should return all posts as JSON', (done) => {
    request(app)
      .get('/posts')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body[0].title).toBe('My First Post');
        expect(res.body[0].content).toBe('Hello world!');
        expect(res.body[0].userId).toBe(1);
        done();
      });
  });