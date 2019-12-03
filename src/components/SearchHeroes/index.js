import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchHeroes } from '../../actions/hero';

import Button from '../../styles/components/Button';
import { Searchbar, Field } from './styles';

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
        <Field
          type="search"
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit" onClick={this.onSubmit}>
          Search
        </Button>
      </Searchbar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchHeroes: query => dispatch(doFetchHeroes(query))
});

export default connect(null, mapDispatchToProps)(SearchHeroes);
