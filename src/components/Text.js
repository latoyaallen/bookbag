import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => (
  <div>
    {props.text}
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
