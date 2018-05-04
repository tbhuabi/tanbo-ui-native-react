import React from 'react';
import PropTypes from 'prop-types';

export class UIPage extends React.Component {
  render() {
    return (
      <div className="ui-page">
        {this.props.children}
      </div>
    );
  }
}
UIPage.defaultProps = {
  children: ''
};

UIPage.propTypes = {
  children: PropTypes.node
};