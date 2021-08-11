import React, {Component} from "react";
import "../assets/css/TodoList.css";
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: []
        };
    }

    addItem(e){
        if(this._inputElement.value !==""){
            let newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
            this.setState((prevState)=> {
               return {
                   items: prevState.items.concat(newItem)
               } ;
            });
            this._inputElement.value ="";
        }
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key){
        // eslint-disable-next-line array-callback-return
        let filteredItems = this.state.items.filter((item)=>{
            return (item.key !==key);
        });

        this.setState({
           items: filteredItems
        });
    }

    render() {
     return (
        <div className="todoListMain">
            <div className="header">
                <form action="" onSubmit={this.addItem}>
                    <input type="text" ref={(a) => this._inputElement = a} placeholder="enter task"/>
                    <button type="submit">Add</button>
                </form>
            </div>
            <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
     );
    }
}

export default TodoList;