import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AdvancedImage extends Component {
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
    blur: PropTypes.bool,
    radius: PropTypes.number,
    dim: PropTypes.bool,
    dimStyle: PropTypes.object,
    showOriginal: PropTypes.bool,
    originalStyle: PropTypes.object,
    backgroundClassName: PropTypes.object,
    mediaClassName: PropTypes.object,
    dimClassName: PropTypes.object,
  };

  static defaultProps = {
    orientation: 'horizontal',
    height: 100,
    width: '100%',
    blur: undefined,
    radius: 50,
    dim: undefined,
    showOriginal: undefined,
  };

  render() {
    const { classes } = this.props;
    const orientedStyle = this.getOrientedStyle();

    const backgroundStyle = {
      ...orientedStyle,
      backgroundImage: `url('${this.props.src}')`,
      filter: `blur(${this.props.blur ? this.props.radius : 0}px)`,
    };

    const dimOverlayStyle = this.props.dim
      ? {
          ...orientedStyle,
          ...this.props.dimStyle,
        }
      : undefined;

    const mediaStyle = this.props.showOriginal
      ? {
          ...orientedStyle,
          backgroundImage: `url('${this.props.src}')`,
          ...this.props.originalStyle,
        }
      : undefined;

    return (
      <div
        className={classNames(classes.container, this.props.className)}
        style={this.props.style}>
        <div
          className={classNames(
            classes.background,
            this.props.backgroundClassName
          )}
          style={backgroundStyle}
        />
        <div
          className={classNames(classes.media, this.props.mediaClassName)}
          style={mediaStyle}
        />
        <div
          className={classNames(classes.dimOverlay, this.props.dimClassName)}
          style={dimOverlayStyle}
        />
        {this.props.children}
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
  dimOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

export default withStyles(styles)(AdvancedImage);
