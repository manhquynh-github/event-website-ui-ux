import PropTypes from 'prop-types';
import { Component } from 'react';
import Layout from '../constants/Layout';

class ResizeListener extends Component {
  static propTypes = {
    handler: PropTypes.func,
  };

  constructor() {
    super();
    this.dimensions = { width: 0, height: 0 };
    this.prevDimensions = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  render() {
    return null;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.prevDimensions = { ...this.dimensions };
    this.dimensions = { width: window.innerWidth, height: window.innerHeight };

    if (this.props.handler) {
      this.props.handler({
        ...this.dimensions,
        ref: this,
      });
    }
  }

  breakpoints(object) {
    let result = undefined;

    Object.keys(Layout.breakpoint)
      .reverse()
      .some((e) => {
        if (
          object.hasOwnProperty(e) &&
          this.dimensions.width >= Layout.breakpoint[e]
        ) {
          result = object[e];
          return true;
        }
        return false;
      });

    return result;
  }
}

export default ResizeListener;
