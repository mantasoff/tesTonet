import React from 'react';
import TodoCard from './TodoCard';


class TodoList extends React.Component {

    renderCards = () => {
        return(
            this.props.todoArray.map(todo => {
                return(
                    <TodoCard key={todo.id} deleteTodo={this.props.deleteTodo} changeTodo={this.props.changeTodo} todo={todo}/>
                );
            })
        );
    }

    render() {
        return(
            <div>
                {this.renderCards()}
            </div>
        );
    }
}

export default TodoList;