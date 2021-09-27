const request = require('supertest');
const app = require('../src/app');

/**
 *testing  
 */
it('testing', done => {
    request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
});