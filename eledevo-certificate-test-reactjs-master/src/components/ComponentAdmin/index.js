import React from "react";

export default class ComponentAdmin extends React.Component{
    state = {
        nameAdd: '',
        nameUpdate: '',
        id: '',
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
                        <td><button onClick={()=>{this.setState({id:item._id,nameUpdate:item.name})}}>Choosse</button></td>
                        <td><button onClick={()=>{this.props.deleteItem({id:item._id})}}>Delete</button></td>
                    </tr>
                )
            })
        }
        return (
            <div>
                <input onChange={(e)=>{this.setState({nameAdd:e.target.value})}}></input>
                <button onClick={()=>{this.props.addItem({nameAdd:this.state.nameAdd})}}>Add</button>
                <input value={this.state.nameUpdate} onChange={(e)=>{this.setState({nameUpdate:e.target.value})}}></input>
                <button onClick={()=>{this.props.updateItem({id:this.state.id,nameUpdate:this.state.nameUpdate})}}>Update</button>
                <input onChange={(e)=>{this.setState({nameSearch:e.target.value})}}></input>
                <button onClick={()=>{this.props.searchItem({nameSearch:this.state.nameSearch})}}>Search</button>
                <table>
                    <tbody>
                        <tr>
                            <td>Id của dữ liệu</td>
                            <td>Tên của dữ liệu</td>
                        </tr>
                        {listData}
                    </tbody>
                </table>
                <button onClick={()=>{
                    localStorage.removeItem("token")
                    localStorage.removeItem("role")
                    window.location.href = '/'
                }}>Đăng xuất</button>
                
            </div>
        )
    }
}