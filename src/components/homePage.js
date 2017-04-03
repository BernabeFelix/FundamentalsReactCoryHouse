'use strict';

var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1> Some title </h1>
        <p> React, React Router, and flux. </p>
      </div>
    );
  }
});

module.exports = Home;
