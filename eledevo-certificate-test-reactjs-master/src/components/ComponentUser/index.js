import React from "react";

export default class ComponentUser extends React.Component {
    state = {
        nameSearch: ''
    }
    render() {
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map(item => {
                return (
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                    </tr>
                )
            })
        }
        return (
            <div>
                <input onChange={(e) => { this.setState({ nameSearch: e.target.value }) }}></input>
                <button onClick={() => { this.props.searchItem({ nameSearch: this.state.nameSearch }) }}>Search</button>
                <table>
                    <tbody>
                        <tr>
                            <td>Id của dữ liệu</td>
                            <td>Tên của dữ liệu</td>
                        </tr>
                        {listData}
                    </tbody>
                </table>
                <button onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('role')
                    window.location.href = '/'
                }}>Đăng xuất</button>
            </div>
        )
    }
}


