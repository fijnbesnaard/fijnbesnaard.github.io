import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'
// import ButtonAnimated from './ButtonAnimated';
import '../scss/SearchBar.scss';

class SearchBar extends React.Component {

  state = {
    searchTerm: '',
    searchFor: ''
  }
  // // Register changes on input
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {

    return (
      <div className="search-bar">
        <h1>Zoek afbeeldingen</h1>
        <form className="form" onSubmit={this.onSubmitForm}>
          <Input className='input-action' placeholder={this.props.placeholder}>
            <input type="text" value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />
          </Input>
          <Button animated>
            <Button.Content visible>Zoek</Button.Content>
            <Button.Content hidden>
              <Icon name="search" />
            </Button.Content>
          </Button>
          {/* <ButtonAnimated buttonText='Zoek' iconName="search" onClick={() => this.setState({ searchFor: this.state.searchTerm })} /> */}
        </form>
        {this.state.searchFor}
      </div>
    );
  }
}

SearchBar.defaultProps = {
  action: 'Search',
  placeholder: 'Search...'
}

export default SearchBar
