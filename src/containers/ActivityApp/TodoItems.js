import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  handleEditClick(key){
    this.props.handleEditClick(key);
  }
  handleEditedClick(key,title,description,date){
    if (this._inputTitle.value !== title||this._inputDescription.value !== description||this._inputDate.value !== date) {
          this.props.handleEditedClick(key,this._inputTitle.value,this._inputDescription.value,this._inputDate.value);
        };
  }
  createTasks(item) {
    let isEditMode= item.isEditMode;
    let button;

    if (!isEditMode){
      button=
      <div>
        <button className="edit" onClick={()=>this.handleEditClick(item.key)}>Edit</button>
        <div className="delete" onClick={()=> this.delete(item.key)}>
          <div>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <div className="date">Dated {item.date}</div>
          </div>
        </div>
      </div>
    } else{
      button=
      <div>
        <div className="editMode">
          <input type="text" ref={(a) => this._inputTitle = a} placeholder="enter title"></input>
          <textarea ref={(a) => this._inputDescription = a} placeholder="enter Description"></textarea>
          <input type="date" ref={(a) => this._inputDate = a} placeholder="enter Date"></input>
          <button className="edit" onClick={()=>this.handleEditedClick(item.key,item.title,item.description,item.date)}>Done</button>
        </div>
     </div>;
    }

    return <li key={item.key}>
      {button}
      </li>

  }

  render() {
    var todoItems = this.props.items;
    var listItems = todoItems.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;
