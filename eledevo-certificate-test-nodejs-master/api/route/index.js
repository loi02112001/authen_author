const studentController = require('../controller/index') 
const accountController = require('../controller/account')
const auth = require('../middleware/jwt')
const routes = (app)=>{
    app.route('/student/:id')
        .delete(auth.verify,auth.role,studentController.deleteStudent)
        .put(auth.verify,auth.role,studentController.updateStudent)
    app.route('/student/search')
        .get(auth.verify,studentController.searchStudent)
    app.route('/register')
        .post(accountController.register)
    app.route('/login')
        .post(accountController.login)
    app.route('/student')
        .get(auth.verify,studentController.getStudent)
        .post(auth.verify,auth.role,studentController.addStudent)   
}
module.exports = routes