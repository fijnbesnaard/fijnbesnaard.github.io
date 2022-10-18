import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../scss/App.scss';

class App extends React.Component {

  state = {
    errorMessage: '',
    searchFor: ''
  };

  componentDidMount() {
    // setState();
  }

  onSearchSubmit = (term) => {
    if (term) {
      console.log(term);

      axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: term
        },
        headers: {
          Authorization: 'Client-ID XyXCXWVZBa4404exjAQxrWVxoGgS1Bc9UwqrB8D9HN4',
        }
      }).then((response) => {
        console.log(response);
        console.log(response.data.results);
      });

    } else {
      console.log('do nothing!');
    }
  }

  renderContent() {
    // conditionally return jsx
  }

  resultsList() {
    if (this.state.searchFor) {
      return (
        <h1>Searching for {this.state.searchFor}...</h1>
      )
    };
    return;
  }

  render() {
    return (

      <div className="container">
        <SearchBar action="Zoek" placeholder="Zoek..." onSubmit={this.onSearchSubmit} />
        {/* <SearchBar /> */}
        {/* <ResultsList */}
        {this.resultsList()}
      </div>
    )
  }
}

export default App;
