import React from 'react';
import PropTypes from 'prop-types';

export class UIHeader extends React.Component {
  render() {
    return (
      <div className="ui-header">
        {this.props.children}
      </div>
    );
  }
}

UIHeader.defaultProps = {
  children: ''
};

UIHeader.propTypes = {
  children: PropTypes.node
};