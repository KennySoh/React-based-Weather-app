import React, { Component } from "react";
import TodoItems from "./TodoItems";


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state={
      items:[]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleEditClick=this.handleEditClick.bind(this);
    this.handleEditedClick=this.handleEditedClick.bind(this);
  }

  addItem(e) {
    if (this._inputTitle.value !== ""&&this._inputDescription.value !== ""&&this._inputDate.value !== "") {
      var newItem = {
        isEditMode:false,
        title: this._inputTitle.value,
        description: this._inputDescription.value,
        date: this._inputDate.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
     
      this._inputTitle.value = "";
      this._inputDescription.value = "";
      this._inputDate.value = "";
    }
    else{
      alert('Please Fill In Title & Description & Date to add entries');
    }
    e.preventDefault();

  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    });
  }
  handleEditClick(key){
    let editedItems=this.state.items
    for (var i=0; i <editedItems.length; i++){
      if(key===editedItems[i]["key"]){
        editedItems[i]["isEditMode"]=true;
      }
    }
    this.setState({
      items:editedItems
    });
  }

  handleEditedClick(key,title,description,date) {
    let editedItems=this.state.items
    for (var i=0; i <editedItems.length; i++){
      if(key===editedItems[i]["key"]){
        editedItems[i]["title"]=title;
        editedItems[i]["description"]=description;
        editedItems[i]["date"]=date;
        editedItems[i]["isEditMode"]=false;
      }
    }
    this.setState({
      items:editedItems
    });
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="ActivityAppTitle">Activity Application</div>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input type="text" ref={(a) => this._inputTitle = a} placeholder="enter title"></input>
            <textarea ref={(a) => this._inputDescription = a} placeholder="enter Description"></textarea>
            <input type="date" ref={(a) => this._inputDate = a} placeholder="enter Date"></input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems items={this.state.items} delete={this.deleteItem} handleEditClick={this.handleEditClick} handleEditedClick={this.handleEditedClick}/>
      </div>
    );
  }
}

export default TodoList;
