import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlurImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    height: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]).isRequired,
    width: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]).isRequired,
    radius: PropTypes.number,
  };

  static defaultProps = {
    orientation: 'horizontal',
    width: '100%',
    radius: 100,
  };

  render() {
    const orientedStyle = this.getOrientedStyle();

    const mediaStyle = {
      ...styles.media,
      ...orientedStyle,
      backgroundImage: `url('${this.props.src}')`,
    };

    const backgroundStyle = {
      ...styles.background,
      ...orientedStyle,
      backgroundImage: `url('${this.props.src}')`,
      filter: `blur(${this.props.radius}px)`,
    };

    return (
      <div style={styles.container}>
        <div style={backgroundStyle} />
        <div style={mediaStyle} />
      </div>
    );
  }

  getOrientedStyle() {
    if (this.props.orientation === 'horizontal') {
      return { height: this.props.height, width: '100%' };
    } else if (this.props.orientation === 'vertical') {
      return { width: this.props.width, height: '100%' };
    }
  }
}

const styles = {
  container: {
    position: 'relative',
  },
  media: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  background: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '120%',
  },
};

export default BlurImage;
