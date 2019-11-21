import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../history';
import todosAPI from '../api/todos'
import TodoList from './TodoList';
import TodoPage from './TodoPage';
import TodoListCreationModal from './TodoListCreationModal';


class App extends React.Component {
    state = {
        mode: 'NONE',
        isReadyToRender: false,
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

    componentDidMount() {
        this.getTodosFromAPI();
    }

    getTodosFromAPI = async () => {
        const response = await todosAPI.get('/todos');
        this.setState({
            isReadyToRender: true,
            todoArrayList: response.data
        });
    }

    postTodoListToAPI = async (todo) => {
        await todosAPI.post('/todos',todo);
    }

    deleteTodoListFromAPI = async (todoId) => {
        await todosAPI.delete(`/todos/${todoId}`);
    }

    putTodoListToAPI = async (todoId, todo) => {
        await todosAPI.put(`/todos/${todoId}`,todo);
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
        
        this.postTodoListToAPI(addToArray);

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
                if(listId == todoArray.id){
                    todoArray.todoList = [...todoArray.todoList, {         
                    id: lastTodoId + 1,
                    isDone: false,
                    name: 'ok'
                    }];
                    this.putTodoListToAPI(listId,todoArray);
                }
                
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
                    this.putTodoListToAPI(listId,todoArray);
                }
                return todoArray;
            })
        })
    }
    
    deleteTodo = (listId,id) => {
        this.setState({
            todoArrayList: this.state.todoArrayList.map(todoArray => {
                if(listId == todoArray.id){
                    todoArray.todoList = todoArray.todoList.filter(todo => {
                        if(todo.id !== id) return true;
                        return false;
                    })
                    this.putTodoListToAPI(listId,todoArray);
                }
                return todoArray;
            })
        })
    }

    render() {


        if(this.state.isReadyToRender) {
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

        return(<div>Loading!</div>)
        
    }
}

export default App;