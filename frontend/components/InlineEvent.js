import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/eventpagestyle.css';

function InlineEvent({number, updateFunc}) {
    return (
        <div className="controlsingleevent">
        <div className="singleevent" onClick={() => updateFunc(number)}>
            <div className="eventname">
                Meetup
            </div>
            <div className="eventdate">
                October
            </div>
            <div className="eventvolunteers">
                {number}
            </div>
        </div>
        </div>
    );
}

export default InlineEvent