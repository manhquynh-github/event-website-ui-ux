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
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        src: PropTypes.object.isRequired,
      }).isRequired
    ).isRequired,
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 223.33,
    height: 335,
    gallery: [
      { caption: 'Challenge 2017', src: Background.Gallery1 },
      { caption: 'Challenge 2016', src: Background.Gallery2 },
      { caption: 'Challenge 2015', src: Background.Gallery3 },
    ],
  };

  constructor() {
    super();
    this.state = {
      indices: [0, 1],
    };
    this.onBackClick = this.onBackClick.bind(this);
    this.onForwardClick = this.onForwardClick.bind(this);
  }

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
      <div className={classes.root} style={style}>
        <Typography className={classes.title}>Gallery</Typography>

        <div className={classes.galleryContainer}>
          <Grid
            item
            container
            xs={12}
            spacing={Layout.spacing.large}
            direction="row"
            style={{ width: gridWidth }}>
            {this.state.indices.map((e, i) => {
              const gallery = this.props.gallery[e];
              return (
                <Grid item xs={6}>
                  <GalleryCard
                    width={galleryWidth}
                    height={galleryHeight}
                    caption={gallery.caption}
                    src={gallery.src}
                  />
                </Grid>
              );
            })}
          </Grid>
          {this.canBackward() && (
            <SwipeButton
              back
              className={classes.backButton}
              onClick={this.onBackClick}
            />
          )}
          {this.canForward() && (
            <SwipeButton
              className={classes.forwardButton}
              onClick={this.onForwardClick}
            />
          )}
        </div>
      </div>
    );
  }

  onBackClick() {
    const galleryLength = this.props.gallery.length;
    const indices = this.state.indices.map(
      (e, i) => (e - 1 + galleryLength) % galleryLength
    );
    this.setState({ indices: indices });
  }

  onForwardClick() {
    const galleryLength = this.props.gallery.length;
    const indices = this.state.indices.map(
      (e, i) => (e + 1 + galleryLength) % galleryLength
    );
    this.setState({ indices: indices });
  }

  canForward() {
    return this.state.indices[0] < this.props.gallery.length - 1;
  }

  canBackward() {
    return this.state.indices[0] > 0;
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
    transform: 'translate(-150%, -50%)',
  },
});

export default withStyles(styles)(Gallery);
