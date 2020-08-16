import React from 'react';
import PropTypes from 'prop-types';
import { greet } from '@your-scope/core';
import './scss/style.scss';

const Component = ({ name }) => <p>{greet(name)}</p>;

Component.defaultProps = {
  name: '',
};

Component.propTypes = {
  name: PropTypes.string,
};

export default Component;
