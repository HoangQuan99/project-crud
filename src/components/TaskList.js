import React, {Component} from "react"
import TaskItem from './TaskItem';
class TaskList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            filterName: '',
            filterStatus: -1  //all active 1 deactive 0
        };
    }
    onChange = (event) =>
    {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(name==='filterName' ? value : this.state.filterName, 
                            name==='filterStatus' ? value:  this.state.filterStatus);
        this.setState({
            [name] : value
        });
    }
  render(){
    var { tasks } = this.props;
    var { filterName,filterStatus } = this.state;
    let elmTasks = tasks.map((task,index) => {
        return <TaskItem 
        deleteItem = {this.props.deleteItem}
        onUpdateStatus={this.props.onUpdateStatus} 
        updateData={this.props.updateData} 
        key={task.id} 
        index={index} 
        task = {task}/>
    });
  return (
    <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control"  name="filterName" value={filterName} onChange={this.onChange}/>
                                    </td>
                                    <td>
                                        <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange} >
                                            <option value={-1}>Tất Cả</option>
                                            <option value={0}>Ẩn</option>
                                            <option value={1}>Kích Hoạt</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                {elmTasks}
                            </tbody>
                        </table>
  );
 }
}
export default TaskList;
