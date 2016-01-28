'use strict';

let React = require('react');

let Input = React.createClass({
    render() {
      return (
          <input placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            value={this.props.value}
            data-elemid={this.props.elemId}
            className={this.props.className}
          />
      );
    }
});

Input.propTypes = {
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
  elemId: React.PropTypes.number,
  className: React.PropTypes.string,
};

module.exports = Input;
