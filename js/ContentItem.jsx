'use strict';

let React = require('react');

let ContentItem = React.createClass({
    render() {
      return (
          <div className= {this.props.isCurrent ? 'current' : null}>
              <div className="tab__content">{this.props.children}</div>
          </div>
      );
    }
});

ContentItem.propTypes = {
  isCurrent: React.PropTypes.bool,
  children: React.PropTypes.object,
};

module.exports = ContentItem;
