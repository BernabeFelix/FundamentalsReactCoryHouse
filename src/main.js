$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/author/authorPages');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

// (function(window) {
// 'use strict';

var App = React.createClass({
  render: function() {
    var Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      case 'authors':
        Child = Authors;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );
  }
});

function render() {
  var route = window.location.hash.substring(1);
  React.render(<App route={route}/>, document.getElementById('app'));
}

window.onhashchange = render;
render();

// })(window);
