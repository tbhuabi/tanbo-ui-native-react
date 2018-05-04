import React from 'react';
import PropTypes from 'prop-types';

export class UITitle extends React.Component {
  render() {
    return (
      <div className="ui-title">
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
UITitle.defaultProps = {
  children: ''
};

UITitle.propTypes = {
  children: PropTypes.node
};