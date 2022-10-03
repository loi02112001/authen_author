const accountModel = require('../model/account')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async(req,res)=>{
    try {
        const userName = req.body.userName
        const password = req.body.password
        const check = await accountModel.findOne({userName})
        if(check){
            res.send({messageFailure:'tài khoản đã tồn tại'})
        }else{
            const encryptPassword =  await bcrypt.hash(password,10)
            const registerAcc = await accountModel.create({userName:userName,password:encryptPassword})
            res.send({registerAcc,messageSuccess:'tạo tk thành công'})
        }
    } catch (error) {
        res.send({message:'loi roi'})
    }
}
const login = async(req,res) =>{
    try {
        const userName = req.body.userName
        const password = req.body.password
        const check = await accountModel.findOne({userName})
        if(check){
            const checkPassword = await bcrypt.compare(password,check.password)
            if(checkPassword){
                const data = await accountModel.findById(check._id).select("-password")
                const role = data.role
                const token = jwt.sign({data},'secret',{expiresIn:'15m'})
                res.send({token,role,message:'dang nhap thanh cong'})
            }else{
                res.send({passwordErrMess:'sai mật khẩu'})
            }
        }else{
            res.send({userNameErrMess:'Tên đăng nhập không tồn tại'})
        }
    } catch (error) {
        res.send({message:'lỗi rồi'})
    }
}

module.exports = {register,login}