import React from 'react';
import { Route, Router, Link, Switch } from 'react-router-dom';
import history from '../history';
import TodoList from './TodoList';
import TodoPage from './TodoPage';
import TodoListCreationModal from './TodoListCreationModal';


class App extends React.Component {
    //state = {
    //    todoArray: [{
    //        id: 0,
    //        isDone: false,
    //        name: 'This is a quick task'
    //    }]
    //}

    state = {
        mode: 'NONE',
        todoArrayList: [{
                id: 0,
                name: "Todo List 1",
                todoList: [{
                       id: 0,
                       isDone: false,
                       name: 'This is a quick task'
                    }
                ]
            }    
        ]
    }

    createNewTodoList = name => {
        const currentArray = this.state.todoArrayList;
        const lastTodoListArray = currentArray[currentArray.length - 1];
        const addToArray = {
            id: lastTodoListArray.id + 1,
            name,
            todoList: [{
                   id: 0,
                   isDone: false,
                   name: 'This is a quick task'
                }
            ]
        }

        this.setState({
            todoArrayList: [...this.state.todoArrayList, addToArray]
        })
    }

    deleteTodoArrayList = id => {
        this.setState({
            todoArrayList: this.state.todoArrayList.filter(todoArray => {
                if(todoArray.id !== id) return true;
            })
        });    
    }

    createNewTodo = listId => {
        const currentList = this.state.todoArrayList.filter(todo => {
            if(listId === todo.id) return true;
        });
        let lastTodoId = 0;
        if(currentList.todoList.length > 0) lastTodoId = currentList.todoList[currentList.todoList.length-1].id;
        //let addToArray = {
        //    id: lastTodoArray.id + 1,
        //    isDone: false,
        //    name: ''
        //}

        //currentArray.push(addToArray);
        //this.setState({
        //    todoArray: currentArray
        //});

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
                            <button onClick={() => history.push('/todo/create')} className="ui button simple">New</button>
                        </div>        
                    </div>
                    
                    <div>
                        <Switch>
                            <Route exact path="/" render={(props) => <TodoPage {...props} deleteTodoArrayList={this.deleteTodoArrayList} todoArrayList={this.state.todoArrayList} /> } /> 
                            <Route exact path="/todo/create" render={(props) => <TodoListCreationModal createNewTodoList={this.createNewTodoList} />} />
                            <Route exact path="/todo/:id" render={(props) => <TodoList {...props} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo} todoArray={this.state.todoArrayList} />} />
                            
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;