var studentModel = require('../model/index')

const getStudent = async(req,res)=>{
    try {
        const listStudent = await studentModel.find({})
        
        res.send({
            listStudent,
            message:'success'
        })
    } catch (error) {
        res.send({
            message:'error'
        })
    }
}
const addStudent = async(req,res)=>{
    try {
        const data = req.body
        const addStudent = await studentModel.create({name:data.nameAdd,age:data.age})
        res.send({student:addStudent,message:'success'})
    } catch (error) {
        res.send({
            addStudent: addStudent,
            message:'error'
        })
    }
}
const deleteStudent  = async(req,res)=>{
    try{
        const id = req.params.id
        const delStudent = await studentModel.findByIdAndDelete(id)
        res.send({student:delStudent,message:'success'})
    }catch(error){
        res.send({
            message:'error'
        })
    }
}
const updateStudent = async(req,res)=>{
    try {
        const id = req.params.id
        const updateStudent = await studentModel.findByIdAndUpdate(id,{name:req.body.name,age:req.body.age})
        res.send({
        updateStudent:updateStudent,message:'success'
        })
    } catch (error) {
        res.send({
            message: 'error'
        })
    }
}
const searchStudent = async(req,res)=>{
    try {
        const textSearch = req.query.textSearch
        const searchStudent = await studentModel.find({name:{$regex: textSearch,$options: 'i'}})
        res.send({search: searchStudent,message:'success'})
    } catch (error) {
        res.send({message:'error'})
    }
}

module.exports = {getStudent,addStudent,deleteStudent,updateStudent,searchStudent}