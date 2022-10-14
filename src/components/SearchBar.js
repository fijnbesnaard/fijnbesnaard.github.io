import React from 'react'
import { Input } from 'semantic-ui-react'
import '../scss/SearchBar.scss';

class SearchBar extends React.Component {

  render() {

    return (
      <Input className='input-action' action={this.props.action} placeholder={this.props.placeholder} />
    );
  }
}

SearchBar.defaultProps = {
  action: 'Search',
  placeholder: 'Search...'
}

export default SearchBar
