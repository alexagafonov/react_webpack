'use strict';

let React = require('react');

let Select = React.createClass({
    render() {
      return (
          <select className={this.props.className}>
              {this.props.list.map((optionValue, i) =>
                  <option key={i}>{optionValue}</option>
              )}
          </select>
      );
    }
});

Select.propTypes = {
  list: React.PropTypes.array,
  className: React.PropTypes.string,
};

module.exports = Select;
