'use strict'

let React = require('react');
let ReactDOM = require('react-dom');
let Tabs = require('./Tabs');
let FriendsApp = require('./FriendsApp');
let Brands = require('./Brands');
let Menu = require('./Menu');

const mountNode = document.getElementById('root');

ReactDOM.render(
    <Tabs headers={['Header1', 'Header2', 'Header3']}>
        <FriendsApp />
        <Brands />
        <Menu />
    </ Tabs>,
    mountNode
);
