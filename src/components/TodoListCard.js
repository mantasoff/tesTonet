import React from 'react';

class TodoListCard extends React.Component {

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">{this.props.TodoList.name}</div>
                </div>
                <div className="content">
                    <div className="ui sub header">ToDo</div>
                    <div className="ui small feed">
                        <div className="content">
                            <div className="summary">
                                This is a summary
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListCard;