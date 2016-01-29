/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Tabs = __webpack_require__(3);
	var FriendsApp = __webpack_require__(6);
	var Brands = __webpack_require__(10);
	var Menu = __webpack_require__(12);

	var mountNode = document.getElementById('root');

	ReactDOM.render(React.createElement(Tabs, { headers: ['Header1', 'Header2', 'Header3'] }, React.createElement(FriendsApp, null), React.createElement(Brands, null), React.createElement(Menu, null)), mountNode);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var TabItem = __webpack_require__(4);
	var ContentItem = __webpack_require__(5);

	var Tabs = React.createClass({ displayName: "Tabs",
	    getInitialState: function getInitialState() {
	        return { items: [], text: '', currentTab: 0 };
	    },
	    handleClick: function handleClick(tab) {
	        this.setState({ currentTab: tab });
	    },
	    render: function render() {
	        var _this = this;

	        var self = this;
	        return React.createElement("div", { className: "tabs" }, React.createElement("ul", { className: "tabs__header" }, this.props.headers.map(function (li, i) {
	            return React.createElement(TabItem, { key: i,
	                handleClick: self.handleClick.bind(_this, i),
	                isCurrent: self.state.currentTab === i
	            }, li);
	        })), this.props.children.map(function (div, i) {
	            return React.createElement(ContentItem, { key: i,
	                isCurrent: self.state.currentTab === i
	            }, div);
	        }));
	    }
	});

	Tabs.propTypes = {
	    handleClick: React.PropTypes.func,
	    headers: React.PropTypes.array,
	    children: React.PropTypes.array
	};

	module.exports = Tabs;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var TabItem = React.createClass({ displayName: "TabItem",
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    this.props.handleClick();
	  },
	  render: function render() {
	    return React.createElement("li", { onClick: this.handleClick,
	      className: this.props.isCurrent ? 'tabs__header__item current' : 'tabs__header__item'
	    }, this.props.children);
	  }
	});

	TabItem.propTypes = {
	  handleClick: React.PropTypes.func,
	  isCurrent: React.PropTypes.bool,
	  children: React.PropTypes.string
	};

	module.exports = TabItem;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var ContentItem = React.createClass({ displayName: "ContentItem",
	    render: function render() {
	        return React.createElement("div", { className: this.props.isCurrent ? 'current' : null }, React.createElement("div", { className: "tab__content" }, this.props.children));
	    }
	});

	ContentItem.propTypes = {
	    isCurrent: React.PropTypes.bool,
	    children: React.PropTypes.object
	};

	module.exports = ContentItem;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(7);
	var Input = __webpack_require__(8);
	var FriendsList = __webpack_require__(9);

	var FriendsApp = React.createClass({ displayName: "FriendsApp",
	  getInitialState: function getInitialState() {
	    return { items: [], text: '', isDisabled: true };
	  },
	  onChange: function onChange(e) {
	    var disabled = Boolean(!e.target.value);
	    this.setState({ text: e.target.value, isDisabled: disabled });
	  },
	  onChangeFilter: function onChangeFilter(e) {
	    this.filterApply(e.target.value);
	  },
	  filterApply: function filterApply(query) {
	    var filteredData = this.state.totalItems.filter(function (item) {
	      if (item.text.indexOf(query) !== -1) {
	        return item;
	      }
	    });
	    this.setState({ items: filteredData, text: '' });
	  },
	  handleAdd: function handleAdd(e) {
	    e.preventDefault();
	    var newData = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
	    this.setState({ items: newData, text: '', isDisabled: true, totalItems: newData });
	  },
	  handleEdit: function handleEdit(e) {
	    var newData = [];
	    this.state.items.forEach(function (item) {
	      if (Number(item.id) === Number(e.target.dataset.elemid)) {
	        item.isEdit = true;
	      }
	      newData.push(item);
	    });
	    this.setState({ items: newData });
	  },
	  handleSave: function handleSave(e) {
	    var newData = [];
	    this.state.items.forEach(function (item) {
	      if (Number(item.id) === Number(e.target.dataset.elemid)) {
	        item.isEdit = false;
	      }
	      newData.push(item);
	    });
	    this.setState({ items: newData });
	  },
	  editText: function editText(e) {
	    var newData = [];
	    this.state.items.forEach(function (item) {
	      if (Number(item.id) === Number(e.target.dataset.elemid)) {
	        item.newText = e.target.value;
	        item.text = '';
	      }
	      newData.push(item);
	    });
	    this.setState({ items: newData });
	  },
	  handleRemove: function handleRemove(e) {
	    var newData = this.state.items.filter(function (item) {
	      return Number(item.id) !== Number(e.target.dataset.elemid);
	    });
	    this.setState({ items: newData });
	  },
	  render: function render() {
	    return React.createElement("div", null, React.createElement("form", { className: "tab__form" }, React.createElement("span", { className: "tab__form__txt" }, "Напишите имя друга"), React.createElement(Input, {
	      onChange: this.onChange,
	      value: this.state.text,
	      placeholder: "friend name",
	      className: "tab__form__input" }), React.createElement(Button, {
	      onClick: this.handleAdd,
	      txt: "Add Friend",
	      isDisabled: this.state.isDisabled }), React.createElement("br", null), React.createElement("span", { className: "tab__form__txt" }, "Фильтрация друзей"), React.createElement(Input, {
	      onChange: this.onChangeFilter,
	      value: this.state.filter,
	      placeholder: "filter",
	      className: "tab__form__input" })), React.createElement(FriendsList, { items: this.state.items,
	      onEdit: this.handleEdit,
	      onRemove: this.handleRemove,
	      onEditing: this.editText,
	      onSave: this.handleSave }));
	  }
	});

	module.exports = FriendsApp;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Button = React.createClass({ displayName: "Button",
	  render: function render() {
	    return React.createElement("button", { onClick: this.props.onClick,
	      className: this.props.className,
	      "data-elemid": this.props.elemId,
	      disabled: this.props.isDisabled
	    }, this.props.txt);
	  }
	});

	Button.propTypes = {
	  onClick: React.PropTypes.func,
	  className: React.PropTypes.string,
	  elemId: React.PropTypes.number,
	  isDisabled: React.PropTypes.bool,
	  txt: React.PropTypes.string
	};

	module.exports = Button;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Input = React.createClass({ displayName: "Input",
	  render: function render() {
	    return React.createElement("input", { placeholder: this.props.placeholder,
	      onChange: this.props.onChange,
	      value: this.props.value,
	      "data-elemid": this.props.elemId,
	      className: this.props.className });
	  }
	});

	Input.propTypes = {
	  placeholder: React.PropTypes.string,
	  onChange: React.PropTypes.func,
	  value: React.PropTypes.string,
	  elemId: React.PropTypes.number,
	  className: React.PropTypes.string
	};

	module.exports = Input;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(7);
	var Input = __webpack_require__(8);

	var FriendsList = React.createClass({ displayName: "FriendsList",
	  handleRemove: function handleRemove(e) {
	    this.props.onRemove(e);
	  },
	  handleEdit: function handleEdit(e) {
	    this.props.onEdit(e);
	  },
	  handleSave: function handleSave(e) {
	    this.props.onSave(e);
	  },
	  editText: function editText(e) {
	    this.props.onEditing(e);
	  },
	  render: function render() {
	    var _this = this;

	    return React.createElement("ul", null, this.props.items.map(function (item) {
	      return React.createElement("li", { key: item.id, className: item.isEdit ? 'edit' : null }, React.createElement("span", {
	        className: "friend__name"
	      }, item.newText ? item.newText : item.text), React.createElement(Input, {
	        onChange: _this.editText,
	        value: item.newText ? item.newText : item.text,
	        className: "editfield",
	        elemId: item.id }), React.createElement(Button, {
	        onClick: _this.handleEdit,
	        className: "editbtn",
	        txt: "Edit Friend",
	        elemId: item.id }), React.createElement(Button, {
	        onClick: _this.handleSave,
	        className: "savebtn",
	        txt: "Save Friend",
	        elemId: item.id }), React.createElement(Button, {
	        onClick: _this.handleRemove,
	        txt: "Remove Friend",
	        elemId: item.id }));
	    }));
	  }
	});

	FriendsList.propTypes = {
	  items: React.PropTypes.array,
	  onRemove: React.PropTypes.func,
	  onEdit: React.PropTypes.func,
	  onSave: React.PropTypes.func,
	  onEditing: React.PropTypes.func
	};

	module.exports = FriendsList;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Select = __webpack_require__(11);

	var Brands = React.createClass({ displayName: "Brands",
	  render: function render() {
	    return React.createElement(Select, { className: "tab__form__select", list: ['Audi', 'BMW', 'Dodge', 'Ford', 'Nissan'] });
	  }
	});

	Brands.propTypes = {
	  list: React.PropTypes.array,
	  className: React.PropTypes.string
	};

	module.exports = Brands;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Select = React.createClass({ displayName: "Select",
	    render: function render() {
	        return React.createElement("select", { className: this.props.className }, this.props.list.map(function (optionValue, i) {
	            return React.createElement("option", { key: i }, optionValue);
	        }));
	    }
	});

	Select.propTypes = {
	    list: React.PropTypes.array,
	    className: React.PropTypes.string
	};

	module.exports = Select;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var $ = __webpack_require__(13);

	var Menu = React.createClass({ displayName: "Menu",
	    getInitialState: function getInitialState() {
	        return { data: [] };
	    },
	    componentDidMount: function componentDidMount() {
	        $.ajax({
	            url: '/data/data.json',
	            dataType: 'json',
	            cache: false,
	            success: function menuLoaded(data) {
	                this.setState({ data: data.menu });
	            }.bind(this)
	        });
	    },
	    render: function render() {
	        return React.createElement("ul", { className: "menu" }, this.state.data.map(function (item) {
	            return React.createElement("li", { key: item.id,
	                className: item.isActive === 'true' ? 'menu__item active' : 'menu__item'
	            }, React.createElement("a", { className: "menu__link", href: item.link }, item.name));
	        }));
	    }
	});

	module.exports = Menu;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);