import PropTypes from 'prop-types';
import moment from 'moment';

export const propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.instanceOf(moment),
  endDate: PropTypes.instanceOf(moment),
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  prize: PropTypes,
  description: PropTypes.string,
};

export const strictProps = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(moment).isRequired,
  endDate: PropTypes.instanceOf(moment).isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  prize: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default {
  propTypes,
  strictProps,
};
