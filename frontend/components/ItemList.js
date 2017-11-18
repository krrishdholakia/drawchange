import React from 'react';
import PropTypes from 'prop-types';

import InlineItem from './InlineItem';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem() {
    return (
      <div className="ItemList__list">
        { this.props.items.map((item) => (
          <InlineItem
            name = {item.name}
            date = {item.date}
            location = {item.location}
            description = {item.description}
            id = {item._id}
            updateCurrentEvent = {this.props.updateCurrentEvent}
          />
        )) }
      </div>
    );
  }

  render() {
    return (
      <div className="ItemList">
        <h1 className="ItemList__title">
            Item Page
        </h1>
        {this.renderItem()}
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  updateCurrentEvent: PropTypes.func,
  updateRenderItem: PropTypes.func
};

export default ItemList;