import React, { Component } from 'react';

import List from '../containers/list';
import Info from '../containers/info';

export default class App extends Component {
  render() {
    return (
      <div>
      	<List />
      	<Info />
      </div>
    );
  }
}
