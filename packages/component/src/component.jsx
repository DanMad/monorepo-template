import PropTypes from 'prop-types';
import { greet } from '@your-scope/core';
import './component.scss';

const Component = ({ name }) => (
  <p className={`text ${name && 'with-name'}`}>
    {greet(name)}
  </p>
);

Component.defaultProps = {
  name: '',
};

Component.propTypes = {
  name: PropTypes.string,
};

export default Component;
