import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/eventpagestyle.css';

class SideTable extends React.Component {
    render() {
        return (
            <div className="spaceside">
                <h1>{this.props.currentNum || "None Selected"}</h1>
            </div>
        )
    }
}

export default SideTable