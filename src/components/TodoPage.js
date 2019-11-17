import React from 'react';
import TodoListCard from './TodoListCard';


class TodoPage extends React.Component {
    
    renderTodoListCards = () => {
        return this.props.todoArrayList.map(TodoList => {
            return (
                <div class="four wide column">
                    <TodoListCard deleteTodoArray={this.props.deleteTodoArrayList} TodoList={TodoList} />
                </div>
            );
            
        });
    }

    render() {
        return (
            <div className="ui grid">
                {this.renderTodoListCards()}
            </div>
            
        );
    }
}

export default TodoPage;