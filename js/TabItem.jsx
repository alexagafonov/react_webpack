'use strict';

let React = require('react');

let TabItem = React.createClass({
    handleClick(e) {
      e.preventDefault();
      this.props.handleClick();
    },

    render() {
      return (
          <li onClick={this.handleClick}
            className={this.props.isCurrent ? 'tabs__header__item current' : 'tabs__header__item'}
          >{this.props.children}</li>
      );
    }
});

TabItem.propTypes = {
  handleClick: React.PropTypes.func,
  isCurrent: React.PropTypes.bool,
  children: React.PropTypes.string,
};

module.exports = TabItem;
