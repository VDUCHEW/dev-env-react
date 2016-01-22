import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.js';
import Display from './display.js';
import Video from './video.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      video: ''
    }
    this.getResults = this.getResults.bind(this);
    this.setVideo = this.setVideo.bind(this);
  }
  getResults(videos) {
    this.setState({ results: videos })
  }
  setVideo(id){
    this.setState({ video: id })
  }
  render() {
    return (
      <div className="container">
        <Search retrieveResults={this.getResults} />
        <Display videos={this.state.results} getVideo={this.setVideo}/>
        <Video vid={this.state.video}></Video>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
