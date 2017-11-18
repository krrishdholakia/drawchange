import React from 'react';
import PropTypes from 'prop-types';

class InlineItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
            <div className="InlineItem" onClick= {()=>this.props.updateCurrentEvent(this.props.id)}>

                <div className="InlineItem__name">
                    {this.props.name}
                </div>
                <div className="InlineItem__date">
                    {this.props.date}
                </div>
                <div className="InlineItem__location">
                    {this.props.location}
                </div>
                <div className="InlineItem__description" >
                    {this.props.description}
                </div>
            </div>
    );
  }

}

InlineItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  updateCurrentEvent: PropTypes.func,
  updateRenderItem: PropTypes.func
};

export default InlineItem;