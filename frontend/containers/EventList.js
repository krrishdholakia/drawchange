import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/eventpagestyle.css';
import InlineEvent from '../components/InlineEvent.js'

class EventList extends React.Component {

    componentWillMount() {
        // dispatch an action to load data from DB
    }

        renderEvent() {
            let eventmanager = []

            for (let i = 0; i < 30; i++) {
            eventmanager.push(
            <div>
                <InlineEvent number={i} updateFunc={this.props.update}/>
            </div> )
            }

            return eventmanager
        }

        render() {
            return (
                <div className="boxedevent boxed">
                    {this.renderEvent()}
                </div>
            );
        }
    }


    export default EventList