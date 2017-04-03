'use strict';

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1> About </h1>
        <p> React, React Router, and flux. </p>
      </div>
    );
  }
});

module.exports = About;
