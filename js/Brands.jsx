'use strict';

let React = require('react');
let Select = require('./Select');

let Brands = React.createClass({
    render() {
      return (
          <Select className="tab__form__select" list={['Audi', 'BMW', 'Dodge', 'Ford', 'Nissan']} />
      );
    }
});

Brands.propTypes = {
  list: React.PropTypes.array,
  className: React.PropTypes.string,
};

module.exports = Brands;
