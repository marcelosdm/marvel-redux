import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchHeroes } from '../../actions/hero';

import { Searchbar } from './styles';

class SearchHeroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { query } = this.state;
    if (query) {
      this.props.onFetchHeroes(query);

      this.setState({ query: '' });
    }
    event.preventDefault();
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }

  render() {
    return (
      <Searchbar onSubmit={this.onSubmit}>
        <input type="text" value={this.state.query} onChange={this.onChange} />
        <button type="submit">Search</button>
      </Searchbar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchHeroes: query => dispatch(doFetchHeroes(query))
});

export default connect(null, mapDispatchToProps)(SearchHeroes);
