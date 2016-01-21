var React = require('react');
var ReactDOM = require('react-dom');

import {File1} from './file1.js';
import {File2} from './file2.js';

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <File1 />
        <File2 />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
