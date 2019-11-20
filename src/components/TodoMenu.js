import React from 'react'
import history from '../history';


const TodoMenu = (props) => {
    return(
        <div className="ui menu">
            <h2 onClick={() => history.push('/')}>{props.menuName}</h2>
            <div className="ui right menu">
                <button onClick={props.onClick} className="ui button simple">{props.buttonName}</button>
            </div>        
        </div>
    )
}

export default TodoMenu;