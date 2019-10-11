import React from 'react';
import { Route, Router, Link, Switch } from 'react-router-dom';
import history from '../history';
import TodoList from './TodoList';


class App extends React.Component {
    state = {
        todoArray: [{
            id: 0,
            isDone: false,
            name: 'This is a quick task'
        }]
    }

    createNewTodo = () => {
        let currentArray = this.state.todoArray;
        let lastTodoArray = currentArray[this.state.todoArray.length - 1];
        let addToArray = {
            id: lastTodoArray.id + 1,
            isDone: false,
            name: ''
        }

        currentArray.push(addToArray);
        this.setState({
            todoArray: currentArray
        });

    }

    changeTodo = (id, changedTodo) => {
        let upcomingTodoArray = this.state.todoArray.map(todo => {
            if(id === todo.id) {
                todo = changedTodo;
            }
            return todo;
        })  
        console.log(upcomingTodoArray);
        this.setState({
            todoArray: upcomingTodoArray
        })
    }
    

    deleteTodo = id => {
        let upcomingTodoArray = this.state.todoArray.filter(todo => {
            if(id == todo.id) {
                return false;
            }
            return true;
        })  
        this.setState({
            todoArray: upcomingTodoArray
        })       
    }

    render() {
        return(
            <div className="ui container">
                <Router history={history}>
                    <div className="ui menu">
                        <h2>Tesonet Todo List</h2>
                        <div className="ui right menu">
                            <button onClick={this.createNewTodo} className="ui button simple">New</button>
                        </div>        
                    </div>
                    

                    <div>
                        <Switch>
                            <Route exact path="/" render={(props) => <TodoList {...props} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo} todoArray={this.state.todoArray} />} />
                        </Switch>

                    </div>
                </Router>

            </div>
        );
    }
}

export default App;