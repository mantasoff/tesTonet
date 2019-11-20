import React from 'react';
import TodoCard from './TodoCard';
import TodoMenu from './TodoMenu';

class TodoList extends React.Component {
    state = {
        id: 0,
        name: "",
        todoList: [{
            id: 0,
            isDone: false,
            name: ''
        }]
    };

    componentDidMount() {
        this.getStateFromParent();
        console.log('TODOList:' );
        console.log(this.state);
    }

    


    createNewTodo = () => {
        this.props.createTodo(this.state.id);
        let lastTodoId = 0;
        if(this.state.todoList.length > 0) lastTodoId = this.state.todoList[this.state.todoList.length-1].id;

        this.setState({
            todoList: [...this.state.todoList, {
                id: lastTodoId + 1,
                isDone: false,
                name: ''
            }]
        },console.log(this.state))
    } 

    getStateFromParent = () => {
        const todo = this.props.todoArray.find(todoParam => {
            if(todoParam.id == this.props.match.params.id) return true;
        })
        console.log(this.props);
        this.setState({
            id: todo.id,
            name: todo.name,
            todoList: todo.todoList
        },() => console.log(this.state))
    }

    renderCards = () => {
        return(
            this.state.todoList.map(todo => {
                return(
                    <TodoCard listId={this.state.id} key={todo.id} deleteTodo={this.props.deleteTodo} changeTodo={this.props.changeTodo} todo={todo}/>
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