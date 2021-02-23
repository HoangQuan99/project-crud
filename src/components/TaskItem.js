import React, {Component} from "react"

class TaskList extends React.Component {
    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    deleteItem = () =>
    {
        this.props.deleteItem(this.props.task.id);
    }
    updateData = () =>
    {
        this.props.updateData(this.props.task.id);
    }
  render(){
      var {task,index} = this.props;
  return (
    <tr>
                                    <td>{index + 1}</td>
                                    <td>{task.name}</td>
                                    <td className="text-center">
                                        <span className={task.status === true ? 'label label-success': 'label label-danger'}
                                            onClick={this.onUpdateStatus}
                                        >
                                            {task.status === true ? 'Kích hoạt': 'Ẩn'}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning" onClick ={this.updateData}>
                                            <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger" onClick ={this.deleteItem}>
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                    </td>
                                </tr>
  );
 }
}
export default TaskList;
