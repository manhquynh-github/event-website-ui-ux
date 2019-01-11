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
import GalleryCard from './GalleryCard';
import SwipeButton from './SwipeButton';

class Gallery extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 223.33,
    height: 335,
  };

  render() {
    const { classes } = this.props;
    const style = {
      width: this.props.width,
      height: this.props.height,
      ...this.props.style,
    };

    const gridWidth = this.props.width - Layout.spacing.large * 2;
    const gridHeight = gridWidth / 3;
    const galleryWidth = (gridWidth - Layout.spacing.large) / 2;
    const galleryHeight = gridHeight;

    return (
      <div className={classes.root}>
        <Typography className={classes.title}>Gallery</Typography>

        <div className={classes.galleryContainer}>
          <Grid
            item
            container
            xs={12}
            spacing={Layout.spacing.large}
            direction="row"
            style={{ width: gridWidth }}>
            <Grid item xs={6}>
              <GalleryCard
                width={galleryWidth}
                height={galleryHeight}
                caption="Challenge 2017"
                src={Background.Gallery1}
              />
            </Grid>
            <Grid item xs={6}>
              <GalleryCard
                width={galleryWidth}
                height={galleryHeight}
                caption="Challenge 2016"
                src={Background.Gallery2}
              />
            </Grid>
          </Grid>
          <SwipeButton back className={classes.backButton} />
          <SwipeButton className={classes.forwardButton} />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    padding: Layout.spacing.large,
  },
  title: {
    fontSize: 24,
  },
  galleryContainer: {
    position: 'relative',
    marginTop: Layout.spacing.large,
  },
  backButton: {
    transform: 'translate(-50%, -50%)',
  },
  forwardButton: {
    transform: 'translate(10%, -50%)',
  },
});

export default withStyles(styles)(Gallery);
