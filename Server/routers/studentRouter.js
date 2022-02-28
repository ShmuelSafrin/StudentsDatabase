const studentBL = require('../models/studentsBL')
const express = require('express')
const { get } = require('express/lib/response')

const router = express.Router()

router.route('/')
    .get((req,resp) =>
    {
        studentBL.getAllStudents()
            .then(data =>
                {
                    return resp.json(data)
                }) 
    })
router.route('/:id')
    .get((req,resp) =>
    {
        studentBL.getStudent(req.params.id)
            .then(data =>
                {
                    return resp.json(data)
                }) 
    })

router.route('/')
    .post((req,resp) =>
    {
        let obj = req.body
        studentBL.addStudent( obj)
            .then(data =>
                {
                    return resp.json(data)
                }) 
    })

router.route('/:id')
    .put((req,resp) =>
    {
        let obj = req.body
        let id = req.params.id

        studentBL.updateStudent(id, obj)
            .then(data =>
                {
                    return resp.json(data)
                }) 
    })

router.route('/:id')
    .delete((req,resp) =>
    {
        let id = req.params.id

        studentBL.deleteStudent(id)
            .then(data =>
                {
                    return resp.json(data)
                }) 
    })

module.exports = router
