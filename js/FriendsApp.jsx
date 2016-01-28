'use strict';

let React = require('react');
let Button = require('./Button');
let Input = require('./Input');
let FriendsList = require('./FriendsList');

let FriendsApp = React.createClass({
    getInitialState() {
        return { items: [], text: '', isDisabled: true };
    },

    onChange(e) {
      const disabled = Boolean(!e.target.value);
      this.setState({ text: e.target.value, isDisabled: disabled });
    },

    onChangeFilter(e) {
      this.filterApply(e.target.value);
    },

    filterApply(query) {
      const filteredData = this.state.totalItems.filter(item => {
        if (item.text.indexOf(query) !== -1) {
          return item;
        }
      });
      this.setState({ items: filteredData, text: '' });
    },

    handleAdd(e) {
      e.preventDefault();
      const newData = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
      this.setState({ items: newData, text: '', isDisabled: true, totalItems: newData });
    },

    handleEdit(e) {
      const newData = [];
      this.state.items.forEach(item => {
        if (Number(item.id) === Number(e.target.dataset.elemid)) {
          item.isEdit = true;
        }
        newData.push(item);
      });
      this.setState({ items: newData });
    },

    handleSave(e) {
      const newData = [];
      this.state.items.forEach(item => {
        if (Number(item.id) === Number(e.target.dataset.elemid)) {
          item.isEdit = false;
        }
        newData.push(item);
      });
      this.setState({ items: newData });
    },

    editText(e) {
      const newData = [];
      this.state.items.forEach(item => {
        if (Number(item.id) === Number(e.target.dataset.elemid)) {
          item.newText = e.target.value;
          item.text = '';
        }
        newData.push(item);
      });
      this.setState({ items: newData });
    },

    handleRemove(e) {
      const newData = this.state.items.filter(item =>
        (Number(item.id) !== Number(e.target.dataset.elemid))
      );
      this.setState({ items: newData });
    },

    render() {
      return (
          <div>
              <form className="tab__form">
                  <span className="tab__form__txt">Напишите имя друга</span>
                  <Input
                    onChange={ this.onChange }
                    value={this.state.text}
                    placeholder="friend name"
                    className="tab__form__input"
                  />
                  <Button
                    onClick={ this.handleAdd }
                    txt="Add Friend"
                    isDisabled={ this.state.isDisabled }
                  />
                  <br />
                  <span className="tab__form__txt">Фильтрация друзей</span>
                  <Input
                    onChange={ this.onChangeFilter }
                    value={ this.state.filter }
                    placeholder="filter"
                    className="tab__form__input"
                  />
              </form>
              <FriendsList items={ this.state.items }
                onEdit={ this.handleEdit }
                onRemove={ this.handleRemove }
                onEditing={ this.editText }
                onSave={ this.handleSave }
              />
          </div>
      );
    }
});

module.exports = FriendsApp;
