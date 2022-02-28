const studentModel = require('./studentModel')

const getAllStudents = () =>
{
    return new Promise((resolve, reject) =>
    {
        studentModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

const getStudent = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        studentModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

const addStudent = (obj) =>
{
    return new Promise((resolve, reject) =>
    {
        const s = new studentModel({
                name : obj.name,
                faculty : obj.faculty,
                grades : obj.grades
            })

        s.save(function(err)
        {

            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Created !!')
            }
        })
    })
}

const updateStudent = (id, obj) =>
{
    return new Promise((resolve, reject) =>
    {
        studentModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                faculty : obj.faculty,
                grades : obj.grades
            },function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated !!')
                }
            })
    })
}

const deleteStudent = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        studentModel.findByIdAndDelete(id, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Deleted !!')
                }
            })
    })
}

module.exports = {getAllStudents, getStudent, addStudent, updateStudent,deleteStudent}