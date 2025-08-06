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