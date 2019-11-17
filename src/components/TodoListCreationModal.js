import React from 'react';
import './TodoListCreationModal.css'
import history from '../history';

class TodoListCreationModal extends React.Component {
    state = {
        value: ''
    }
    
    onCreateButtonClick = () => {
        this.props.createNewTodoList(this.state.value);
        history.push('/');
    }

    render() {
        return (
            <div class="ui dimmer modals visible active" onClick={() => history.push('/')}>
                <div className="ui segment" onClick = {e => e.stopPropagation()}>
                    <h2 className="ui divided center aligned header">New Todo</h2>
                    <div className="content">
                        <div className="ui form">
                           <div className="field">
                               <label>Name</label>
                               <input value={this.state.value} onChange={(e) => this.setState({ value: e.target.value})} type="text" name="Todo List Name" placeholder="Insert Name Here"></input>
                           </div>
                        </div>
                    </div>
                    <div class="actions modal">
                        <div class="ui positive basic button" onClick={this.onCreateButtonClick}>Create</div>
                        <div class="ui negative basic button" onClick={() => history.push('/')}>Cancel</div>
                    </div>
                </div>
                
            </div>  
        );
    }
}

export default TodoListCreationModal;