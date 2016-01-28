'use strict';

let React = require('react');
let TabItem = require('./TabItem');
let ContentItem = require('./ContentItem');

let Tabs = React.createClass({
    getInitialState() {
        return { items: [], text: '', currentTab: 0 };
    },

    handleClick(tab) {
      this.setState({ currentTab: tab });
    },

    render() {
      const self = this;
      return (
          <div className="tabs">
              <ul className="tabs__header">
                {this.props.headers.map((li, i) =>
                    <TabItem key={i}
                      handleClick={self.handleClick.bind(this, i)}
                      isCurrent={(self.state.currentTab === i)}
                    >{ li }
                    </ TabItem>
                )}
              </ul>
              {this.props.children.map((div, i) =>
                  <ContentItem key={i}
                    isCurrent={(self.state.currentTab === i)}
                  >{ div }
                  </ ContentItem>
              )}
          </div>
      );
    }
});

Tabs.propTypes = {
  handleClick: React.PropTypes.func,
  headers: React.PropTypes.array,
  children: React.PropTypes.array,
};

module.exports = Tabs;
