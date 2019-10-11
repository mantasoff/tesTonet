import React from 'react';
import Checkbox from './CheckBox';


class TodoCard extends React.Component {

    onChange = () => {
        
    }

    onCheckboxChange = () => {
        this.props.changeTodo(this.props.todo.id, {
            id: this.props.todo.id,
            isDone: !this.props.isDone,
            name: this.props.name
        })
    }

    render() {
        return( 
            <div className="ui segment">
                <form class="ui form">
                    <div class="field">
                        <label>Todo</label>
                        <div class="inline fields">
                            <div className="field">
                                <Checkbox value={this.props.todo.isDone} valueChange={this.onCheckboxChange}/>                        
                            </div>

                            <div class="twelve wide field">
                                <input  type="text" placeholder="What do you want to do?" />
                            </div>
                            <div class="two wide field">
                                <button className="ui button red" onClick={() => {this.props.deleteTodo(this.props.todo.id)}}>Delete</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoCard;