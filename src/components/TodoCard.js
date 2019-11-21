import React from 'react';
import Checkbox from './CheckBox';

class TodoCard extends React.Component {
    onCheckboxChange = () => {
        this.props.changeTodo(this.props.listId, {
            id: this.props.todo.id,
            isDone: !this.props.todo.isDone,
            name: this.props.todo.name,
        });
    }

    onInputChange = (changedInput) => {
        this.props.changeTodo(this.props.listId, {
            id: this.props.todo.id,
            isDone: this.props.todo.isDone,
            name: changedInput,
        });
    }

    render() {
        return( 
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Todo</label>
                        <div className="inline fields">
                            <div className="field">
                                <Checkbox  value={this.props.todo.isDone} valueChange={this.onCheckboxChange}/>                        
                            </div>
                            <div className="twelve wide field">
                                <input value={this.props.todo.name}  onChange={(e) => this.onInputChange(e.target.value)} type="text" placeholder="What do you want to do?" />
                            </div>
                            <div className="two wide field">
                                <button className="ui button red" onClick={() => {this.props.deleteTodo(this.props.listId,this.props.todo.id)}}>Delete</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoCard;