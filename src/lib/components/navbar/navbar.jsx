import React from 'react';
import PropTypes from 'prop-types';

export class UINavbar extends React.Component {
  render() {
    return (
      <div className="ui-navbar">
        {this.props.children}
      </div>
    );
  }
}
UINavbar.defaultProps = {
  children: ''
};

UINavbar.propTypes = {
  children: PropTypes.node
};