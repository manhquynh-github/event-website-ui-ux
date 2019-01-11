import { faShare, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Paper, Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { darken, fade } from '@material-ui/core/styles/colorManipulator';
import {
  BookmarkBorder,
  CalendarTodayOutlined,
  LocationOnOutlined,
} from '@material-ui/icons';
import classNames from 'classnames';
import PropTypes, { oneOf } from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { strictProps as EventProps } from '../models/Event';
import EventChip from './EventChip';
import AdvancedImage from './AdvancedImage';
import Background from '../assets/background';

class GalleryCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    src: PropTypes.object,
    caption: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    width: 350,
    height: 238,
  };

  render() {
    const { classes } = this.props;
    const style = {
      width: this.props.width,
      height: this.props.height,
      ...this.props.style,
    };

    return (
      <div
        className={classNames(classes.container, this.props.className)}
        style={style}>
        <AdvancedImage
          src={this.props.src}
          dim
          dimClassName={classes.dim}
          height={this.props.height}>
          <div className={classes.overlay}>
            <div className={classes.contentContainer}>
              <Typography className={classes.caption}>
                {this.props.caption}
              </Typography>
            </div>
          </div>
        </AdvancedImage>
      </div>
    );
  }
}

const styles = (theme) => ({
  container: {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.125)',
    width: 350,
    height: 238,
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(33, 150, 243, 0.5)',
    },
    transition: theme.transitions.create(['box-shadow'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
  contentContainer: {
    marginLeft: Layout.spacing.medium,
    marginRight: Layout.spacing.medium,
    marginBottom: Layout.spacing.medium,
  },
  dim: {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%)',
    '&:hover': {
      background:
        'linear-gradient(180deg, rgba(33, 150, 243, 0) 50%, #2196F3 100%)',
    },
    transition: theme.transitions.create(['background'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  caption: {
    fontSize: 21,
    color: Colors.white,
  },
});

export default withStyles(styles)(GalleryCard);
