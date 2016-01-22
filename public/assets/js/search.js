import React from 'react';

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      searchTxt: '' ,
      result: []
  };
    this.updateSearch = this.updateSearch.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }
  updateSearch(e){
    console.log('new txt is ' + e.target.value)
    this.setState({searchTxt: e.target.value})
  }
  performSearch(e){
    e.preventDefault();
    console.log(this.state.searchTxt);
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search/?part=snippet&q=' + this.state.searchTxt + ' &type=video&key=AIzaSyCXF9_OghuLjrPo6GL0WNjWHIb-kfaFWJU',
      success: function(res) {
        console.log(res)
        var videos = res.items.map(function(item){
          return {
            id: item.id.videoId,
            title: item.snippet.title
          }
        });
        this.props.retrieveResults(videos);
      }.bind(this)
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.performSearch}>
          <input onChange={this.updateSearch} type="text" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Search
