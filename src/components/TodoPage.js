import React from 'react';
import history from '../history';
import TodoListCard from './TodoListCard';
import TodoMenu from './TodoMenu';

class TodoPage extends React.Component {
    renderTodoListCards = () => {
        return this.props.todoArrayList.map(TodoList => {
            return (
                <div className="four wide column" key={TodoList.id}>
                    <TodoListCard  deleteTodoArray={this.props.deleteTodoArrayList} TodoList={TodoList} />
                </div>
            );
            
        });
    }

    render() {
        return (
            <div>
                <TodoMenu buttonName="Create new Todo List" menuName="TesTonet Task" onClick={() => history.push('/todo/create')}/>
                <div className="ui grid">
                    {this.renderTodoListCards()}
                </div>
            </div>
            
            
        );
    }
}

export default TodoPage;