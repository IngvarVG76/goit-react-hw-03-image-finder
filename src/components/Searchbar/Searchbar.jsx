import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineZoomIn } from 'react-icons/ai';

import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  // SearchFormButtonLable,
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
    const { input } = this.state;

    if (input.trim() !== '') {
      this.props.onSubmit(input);
      this.setState({ input: ''});
    } 
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineZoomIn />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.input}
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
