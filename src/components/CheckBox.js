import React from 'react';

class Checkbox extends React.Component {  
    render() {
        return(
        <div>
            <div className="ui checkbox">
                <input checked={this.props.value}  onChange={() => this.props.valueChange()} type="checkbox"></input>
                <label>Is Done?</label>
            </div>
        </div>
        );
    }
}

export default Checkbox;