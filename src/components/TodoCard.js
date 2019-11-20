import React from 'react';
import Checkbox from './CheckBox';


class TodoCard extends React.Component {
    state = {
        id: 0,
        isDone: false,
        name: ''
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            id: this.props.todo.id,
            isDone: this.props.isDone,
            name: this.props.name
        })
    }

    onCheckboxChange = () => {
        this.setState({
            isDone: !this.state.isDone
        }, () => this.props.changeTodo(this.props.listId, {
            id: this.state.id,
            isDone: this.state.isDone,
            name: this.state.name
        }))
    }

    onInputChange = (changedInput) => {
        this.setState({
            name: changedInput
        }, () => this.props.changeTodo(this.props.listId, {
            id: this.state.id,
            isDone: this.state.isDone,
            name: this.state.name
        }))
    }

    render() {
        return( 
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Todo</label>
                        <div className="inline fields">
                            <div className="field">
                                <Checkbox  value={this.state.isDone} valueChange={this.onCheckboxChange}/>                        
                            </div>
                            <div className="twelve wide field">
                                <input value={this.state.name}  onChange={(e) => this.onInputChange(e.target.value)} type="text" placeholder="What do you want to do?" />
                            </div>
                            <div className="two wide field">
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