const request = require('supertest');
const app = require('../src/app');

/**
 *testing GET Person 
 */

describe('Get /persons', () => {
    it('200 /persons', done => {
        request(app)
            .get('/persons')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

describe('Post /persons', () => {
    it('201 /persons', done => {
        const person = {
            dni: "1121932148",
            name: "Fabricio Caicedo"
        };
        request(app)
            .post('/persons')
            .send(person)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(err => {
                if (err) return done(err);

                done();
            });
    });

    it('400 /persons', done => {
        const person = {};
        request(app)
            .post('/persons')
            .send(person)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end(err => {
                if (err) return done(err);
                done();
            });
    });
});

describe('Get /persons/:dni', () => {
    it('200 /persons/:dni', done => {
        request(app)
            .get('/persons/1121932148')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});
/*
describe('Delete /persons/:dni', () => {
    it('200 /persons/:dni', done => {
        request(app)
            .get('/persons/1121932148')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});*/