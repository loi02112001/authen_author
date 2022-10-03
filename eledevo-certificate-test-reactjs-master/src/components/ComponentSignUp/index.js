import React from "react";
import { checkUserName, CheckPassword } from '../../validate/validate'

export default class ComponentSignUp extends React.Component {
    state = {
        userName: '',
        password: '',
        validateUserName: true,
        validatePassword: true
    }

    render() {
        return (
            <div>
                <h3>Đây là trang Đăng kí</h3>
                <div>
                    <p>Tên đăng nhập</p>
                    <input onChange={(e) => {
                        this.setState({ userName: e.target.value, validateUserName: checkUserName(e.target.value) })
                        if (e.target.value === '') {
                            this.setState({ validateUserName: true, userName: '' })
                        }
                    }
                    }></input>
                    <p style={{ display: this.state.validateUserName === false ? 'block' : 'none', color: 'red' }}>Yêu cầu nhập đúng định dạng</p>
                    <p>Mật khẩu</p>
                    <input type='password' onChange={(e) => {
                        this.setState({ password: e.target.value, validatePassword: CheckPassword(e.target.value) })
                        if (e.target.value === '') {
                            this.setState({ validatePassword: true, password: '' })
                        }
                    }}></input>
                    <p style={{ display: this.state.validatePassword === false ? 'block' : 'none', color: 'red' }}>Độ dài mật khẩu phải lớn hơn 6</p>
                </div>

                <button onClick={() => {
                    if (this.state.validatePassword === false || this.state.validateUserName === false) {
                        alert('Vui lòng nhập đúng thông tin')
                    } else if (this.state.password === '' || this.state.userName === '') {
                        alert('Vui lòng không được để trống')
                    } else {
                        this.props.signUp({ userName: this.state.userName, password: this.state.password })
                    }
                }}>Đăng ký</button>


            </div>
        )
    }
}