import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLable,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLable>Search</SearchFormButtonLable>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
