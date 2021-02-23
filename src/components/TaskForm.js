import React, {Component} from "react";

class TaskForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: '',
            name : '',
            status: false
        };
    }
    componentWillMount()
    {
        if(this.props.tasks)
        {
            this.setState({
                id: this.props.tasks.id,
                name: this.props.tasks.name,
                status: this.props.tasks.status
            });
        }
    }
    componentWillReceiveProps(nextprops) // Khi component Thêm đang mở thì không ấn dc. Phải dùng componentWillReceiveProps để gọi khác
    {
        if(nextprops && nextprops.tasks)
        {
            this.setState({
                id: nextprops.tasks.id,
                name: nextprops.tasks.name,
                status: nextprops.tasks.status
            });
        }
        else if(nextprops && nextprops.tasks==null)
        {
            this.setState({
                id: '',
                name : '',
                status: false
            });
        }
    }
    onChange  = (event) =>
    {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name==='status')
        {
            value= target.value === 'true' ? true :false;
        }
        this.setState({
            [name] :value
        });
    }
    onSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }
    onClear = () =>{
        this.setState({
            name: '',
            status: false
        })
        this.onCloseForm();
    }
    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    
  render(){
      var {id} = this.state;
  return (
    <div className="panel panel-warning">
            <div className="panel-heading">
                        <h3 className="panel-title">
                            {id !==''? 'Cập nhật Công Việc' : 'Thêm Công Việc'}
                        {/* <span className="fa fa-times-circle text-right">
                            
                        </span> */}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange ={this.onChange} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name="status" value={this.state.status} onChange ={this.onChange} >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
                                <button type="button" className="btn btn-danger"  onClick ={this.onClear}>Hủy Bỏ</button>
                            </div>
                        </form>
            </div>
        </div>
  );
 }
}
export default TaskForm;
