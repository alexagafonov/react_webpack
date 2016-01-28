'use strict';

let React = require('react');
let Button = require('./Button');
let Input = require('./Input');

let FriendsList = React.createClass({
    handleRemove(e) {
      this.props.onRemove(e);
    },

    handleEdit(e) {
      this.props.onEdit(e);
    },

    handleSave(e) {
      this.props.onSave(e);
    },

    editText(e) {
      this.props.onEditing(e);
    },

    render() {
      return (
          <ul>
          {this.props.items.map(item =>
              <li key={item.id} className={ item.isEdit ? 'edit' : null }>
                  <span
                    className="friend__name"
                  >{ item.newText ? item.newText : item.text }
                  </span>
                  <Input
                    onChange={ this.editText }
                    value={ item.newText ? item.newText : item.text }
                    className="editfield"
                    elemId={ item.id }
                  />
                  <Button
                    onClick={ this.handleEdit }
                    className="editbtn"
                    txt="Edit Friend"
                    elemId={ item.id }
                  />
                  <Button
                    onClick={ this.handleSave }
                    className="savebtn"
                    txt="Save Friend"
                    elemId={ item.id }
                  />
                  <Button
                    onClick={ this.handleRemove }
                    txt="Remove Friend"
                    elemId={ item.id }
                  />
              </li>
          )}
          </ul>
      );
    }
});

FriendsList.propTypes = {
  items: React.PropTypes.array,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func,
  onSave: React.PropTypes.func,
  onEditing: React.PropTypes.func,
};

module.exports = FriendsList;
