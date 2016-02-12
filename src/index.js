import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAM1ibebQtTPwJjQQ0Ryl-WowKNpLzIow4';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('90s bollywood songs');
    }

videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
          //similar to this.setState({ videos: videos });
        });

}

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />{/*Passing props */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
