import React from 'react';
import PropTypes from 'prop-types';

import { LoadMoreBtn } from 'components/Button/Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
