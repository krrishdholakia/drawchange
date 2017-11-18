import PropTypes from 'prop-types';


import React from 'react';

// var MainPane = React.createClass({
//   render: function() {
//     if (this.props.children) {
//       return (
//         <div className="MainPane">
//           { this.props.children };
//         </div>
//       );
//     }

//       return(
//         <div className="MainPane MainPane--empty">
//           { this.props.placeholder }
//         </div>
//       );

//   }
// });

// export default MainPane;

class MainPane extends React.Component {
  render() {
    console.log(this.props.currentItem);
    return (
      <div className="MainPane">
        <div className="MainPane__content">
          { this.props.currentItem ? this.props.currentItem._id : "None Selected" }
        </div>
      </div>
    );
  }
}

MainPane.propTypes = {
  currentItem: PropTypes.any
};

export default MainPane;