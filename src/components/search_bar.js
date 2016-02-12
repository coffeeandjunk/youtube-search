import React, { Component } from 'react';

//Function Component
// const SearchBar = () => {
//   return <input />;
// }

//Class Component
class SearchBar extends Component {
  constructor(props) { //this is a method
    super(props); //super calls the parent method of the parent class (Conponent)

    this.state = { term: '' };
  }

  render() { //method
    // return <input onChange={this.on InputChange}/>
    return (
      <div className="search-bar">
        <input
        value={this.state.term}//controlled component is controlled by the state
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
