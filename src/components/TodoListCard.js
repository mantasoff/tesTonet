import React from 'react';
import history from '../history';

class TodoListCard extends React.Component {
    renderSnippet = () => {
        const filteredTodoList = this.props.TodoList.todoList.filter(todo => {
            if(!todo.isDone) return true;
            return false;
        });

        return filteredTodoList.map(todo => {
            return(
                <div className="event">
                    <div className="content">
                        <div className="summary">
                            {todo.name}
                        </div>
                    </div>
                </div>
            );
        })
    }
    
    render() {
        return (
            <div className="ui link card" onClick={() => history.push(`/todo/${this.props.TodoList.id}`)}>
                <div className="content">
                    <div className="header">{this.props.TodoList.name}</div>
                </div>
                <div className="content">
                    <div className="ui sub header">Tasks</div>
                    <div className="ui small feed">        
                        {this.renderSnippet()}
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListCard;