import React from 'react';
import PropTypes from 'prop-types';

export class UIContent extends React.Component {
  render() {
    return (
      <div className="ui-content">
        <div className="ui-content-shadow"/>
        <div className="ui-content-wrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}

UIContent.defaultProps = {
  children: ''
};

UIContent.propTypes = {
  children: PropTypes.node
};