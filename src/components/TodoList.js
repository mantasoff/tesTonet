import React from 'react';
import TodoCard from './TodoCard';
import TodoMenu from './TodoMenu';

class TodoList extends React.Component {

    createNewTodo = () => {
        this.props.createTodo(this.props.match.params.id);
    } 

    renderCards = () => {
        const filteredValue = this.props.todoArray.find(todo => {
            if(todo.id == this.props.match.params.id) return true;
            return false;
        });

        return(
            filteredValue.todoList.map(todo => {
                return(
                    <TodoCard listId={this.props.match.params.id} key={todo.id} deleteTodo={this.props.deleteTodo} changeTodo={this.props.changeTodo} todo={todo}/>
                );
            })
        );
    }

    render() {
        return(
            <div>
                <TodoMenu buttonName='Create new Todo!' menuName='TestTonet Task' onClick={this.createNewTodo} />
                {this.renderCards()}
            </div>
        );
    }
}

export default TodoList;