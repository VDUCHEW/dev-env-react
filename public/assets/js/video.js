import React from 'react';

class Video extends React.Component {
  constructor(){
    super();
  }
  render() {
    if ( this.props.vid ) {
      player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: this.props.vid,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
      });
      player.playVideo();
    }
    return (
      <div>

      </div>
    )
  };
}

module.exports = Video
