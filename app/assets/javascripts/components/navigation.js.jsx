/* globals React */
'use strict';

var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <p onClick={this.homeCLicked} className='btn btn-primary'>Home</p>
        <p onClick={this.postsClicked} className='btn btn-default'>Posts</p>
      </nav>
    );
  },
  homeClicked: function () {
    window.location.href = '/';
  },
  postsClicked: function () {
    window.location.href = '/posts';
  }
});
