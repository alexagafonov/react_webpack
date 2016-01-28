'use strict';

let React = require('react');

let Button = React.createClass({
    render() {
      return (
          <button onClick={this.props.onClick}
            className={this.props.className}
            data-elemid={this.props.elemId}
            disabled={this.props.isDisabled}
          >{this.props.txt}</button>
      );
    }
});

Button.propTypes = {
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  elemId: React.PropTypes.number,
  isDisabled: React.PropTypes.bool,
  txt: React.PropTypes.string,
};

module.exports = Button;
