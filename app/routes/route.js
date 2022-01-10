const express = require('express');

const route = express.Router();

const student = require("../models/Student_model");

route.get('/',(req, res) => {
    res.send('we are on default function');
});

route.get('/posts',(req, res) => {
    res.send('we are on posts');
});

route.post('/get_data',(req,res) => {
    const param = {
        id : req.body.id
    }
    student.get_student_by_id(param).then(data =>{
        res.send(data);
    })
});

route.post('/add_data',(req,res) => {
    const param = {
        name : req.body.name,
        age : req.body.age
    }

    student.add_student(param).then(data => {
        res.send(data);
    })
});

route.post('/update_data',(req,res) => {
    const param = {
        id : req.body.id,
        name : req.body.name
    }

    student.update_student(param).then(data => {
        res.send(data);
    })
});

route.post('/delete_data',(req,res) => {
    const param = {
        id : req.body.id
    }

    student.delete_student(param).then(data => {
        res.send(data);
    })
});

// route.post('register_student',(req,res) => {
//     const param = {
//         name :req.body.name,
//         age : req.body.age,
//         father_name : req.body.father_name,
//         mother_name : req.body.mother_name
//     }

//     student.register_student(param).then(data => {
//         res.send(data);
//     })
// });

route.post('/get_all_detail',(req,res) => {
    const param = {
        id : req.body.id
    }

    student.get_all_detail(param).then(data => {
        res.send(data);
    })
});


module.exports = route;