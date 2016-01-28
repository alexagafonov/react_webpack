'use strict';

let React = require('react');
let $ = require('jquery');

let Menu = React.createClass({
    getInitialState() {
        return {data: []};
    },

    componentDidMount() {
      $.ajax({
        url: '/data/data.json',
        dataType: 'json',
        cache: false,
        success: function menuLoaded(data) {
          this.setState({ data: data.menu });
        }.bind(this),
      });
    },

    render() {
      return (
          <ul className="menu">{ this.state.data.map(item =>
              <li key={ item.id }
                className={ item.isActive === 'true' ? 'menu__item active' : 'menu__item' }
              >
                  <a className="menu__link" href={ item.link }>{ item.name }</a>
              </li>
          )}
          </ul>
      );
    }
});

module.exports = Menu;
