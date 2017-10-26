import React from 'react';
import ReactDOM from 'react-dom';
import EventList from './EventList.js';
import SideTable from '../components/SideTable.js';
import '../assets/stylesheets/eventpagestyle.css'


class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            current: null
        }

        this.updateCurrent = this.updateCurrent.bind(this);
    }

    updateCurrent(num) {
        this.setState({current: num});
    }
    //functions
    //render () {}

    render() {
        return (
            <div>
            <div className="event">
                <div className="eventtitles">
                    hello world
                </div>
                <div className="eventdetails">
                    test
                </div>
            </div>
            <div className="handlingevents">
                <EventList update={this.updateCurrent}/>
            </div>
            <div>
                <SideTable currentNum={this.state.current}/>
            </div>
            </div>


        );
    }
}

export default Events