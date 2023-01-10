const router = require('express').Router();
const { Router } = require('express');
const User = require('../../models/User');
const users = require('../../models/User');

//\\--USER BUILDER--\\//
router.post('/', (req, res) => {
    //\\--CREATE-\\//
    User.create({
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email
    })
    .then((newUser)=> {
        //\\--STORES NEW USER IN THE DB AS A JSON OBJECT--\\//
        res.json(newUser);
    })
    .catch((err) => {
        res.json(err);
  });
});

// //\\--SEED DATA--\\//
// router.post('/seed', (req, res) => {
//     //\\--BULK BUILDER--\\//
//     User.bulkCreate([
//     {
//     id: '1',
//     first_name: 'Adrian',
//     last_name: 'Jones',
//     password: '12345',
//     email: 'fakeEmail@whatever.com'
//     },{
//     id: '2',
//     first_name: 'Brandon',
//     last_name: 'Littlejohn',
//     password: '123456',
//     email: 'fakeEmail2@whatever.com'
//     },{
//     id: '3',
//     first_name: 'Jeniah',
//     last_name: 'Turner',
//     password: '1234567',
//     email: 'fakeEmail3@whatever.com'
//    },{
//     id: '4',
//     first_name: 'Brandon',
//     last_name: 'Ochaeta',
//     password: '12345678',
//     email: 'fakeEmail4@whatever.com'
//   },{
//     id: '5',
//     first_name: 'Faith',
//     last_name: 'Wallace',
//     password: '123456789',
//     email: 'fakeEmail5@whatever.com'
//     },{
//     id: '6',
//     first_name: 'Andrew',
//     last_name: 'Simpkins',
//     password: '1234567890',
//     email: 'fakeEmail6@whatever.com'
//    }
//   ]).then(() => {
//     res.send('Database seeded!');
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });