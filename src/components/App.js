import React from "react";
import '../scss/App.scss';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = {
    errorMessage: ''
  };

  componentDidMount() {
    // setState();
  }

  renderContent() {
    // conditionally return jsx
  }

  render() {
    return (

      <div className="container">
        <SearchBar action="Zoek" placeholder="Zoek..." />
        <SearchBar />
        {/* <ButtonAnimated buttonText='Search' iconName='search' /> */}
        {/* <ResultsList */}
      </div>
    )
  }
}

export default App;
