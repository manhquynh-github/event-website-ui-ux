import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  count: PropTypes.number,
  url: PropTypes.string,
};

export const strictProps = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default {
  propTypes,
  strictProps,
};
