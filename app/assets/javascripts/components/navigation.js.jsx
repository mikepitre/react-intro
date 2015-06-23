/* globals React */
'use strict';

var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <p className='btn btn-primary'>Home</p>
        <p className='btn btn-default'>Posts</p>
      </nav>
    );
  },
  homeClicked: function () {
    window.location.href = '/';
  },
  postClicked: function () {
    window.location.href = '/posts';
  }
});
