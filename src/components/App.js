import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';
import TodoList from './TodoList';
import TodoPage from './TodoPage';
import TodoListCreationModal from './TodoListCreationModal';


class App extends React.Component {
    state = {
        mode: 'NONE',
        todoArrayList: [{
                id: 0,
                name: "Todo List 1",
                todoList: [{
                       id: 0,
                       isDone: false,
                       name: 'hi'
                    },
                    {
                        id: 1,
                        isDone: false,
                        name: 'bye'
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
                   name: ''
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
                return false;
            })
        });    
    }

    createNewTodo = listId => {
        const currentList = this.state.todoArrayList.find(todo => {
            if(listId == todo.id) return true;
            return false;
        });

        let lastTodoId = 0;
        if(currentList.todoList.length > 0) lastTodoId = currentList.todoList[currentList.todoList.length-1].id;

        this.setState({
            todoArrayList: this.state.todoArrayList.map(todoArray => {
                if(listId == todoArray.id) todoArray.todoList = [...todoArray.todoList, {         
                    id: lastTodoId + 1,
                    isDone: false,
                    name: 'ok'
                }];
                return todoArray;
            })
        })
    }

    

    changeTodo = (listId, changedTodo) => {
        this.setState({
            todoArrayList: this.state.todoArrayList.map(todoArray => {
                if(listId == todoArray.id){
                    todoArray.todoList = todoArray.todoList.map(todo => {
                        if(todo.id == changedTodo.id) return changedTodo;
                        return todo;
                    })
                }
                return todoArray;
            })
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
                    <div>
                        <Switch>
                            <Route exact path="/" render={(props) => <TodoPage {...props} deleteTodoArrayList={this.deleteTodoArrayList} todoArrayList={this.state.todoArrayList} /> } /> 
                            <Route exact path="/todo/create" render={(props) => <TodoListCreationModal createNewTodoList={this.createNewTodoList} />} />
                            <Route exact path="/todo/:id" render={(props) => <TodoList {...props} createTodo={this.createNewTodo} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo} todoArray={this.state.todoArrayList} />} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;