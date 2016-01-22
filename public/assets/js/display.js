import React from 'react';

class Display extends React.Component {
  constructor(){
    super();
    this.play = this.play.bind(this);
  }
  play(e){
    console.log(e.target.id);
    this.props.getVideo(e.target.id);
  }
  render(){
    return (
      <div>
        <ul>
          {this.props.videos.map(function(video, idx){
            return <li id={video.id} onClick={this.play} key={idx} >{video.title}</li>
          }.bind(this))}
        </ul>
      </div>
    )
  }
}

module.exports = Display
