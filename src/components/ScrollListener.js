import PropTypes from 'prop-types';
import { Component } from 'react';

class ScrollListener extends Component {
  static propTypes = {
    handler: PropTypes.func,
  };

  constructor() {
    super();
    this.updateWindowScroll = this.updateWindowScroll.bind(this);
  }

  render() {
    return null;
  }

  componentDidMount() {
    this.updateWindowScroll();
    window.addEventListener('scroll', this.updateWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateWindowScroll);
  }

  updateWindowScroll() {
    const scroll = {
      x: window.scrollX,
      y: window.scrollY,
    };

    if (this.props.handler) {
      this.props.handler({ ...scroll, ref: this });
    }
  }
}

export default ScrollListener;
