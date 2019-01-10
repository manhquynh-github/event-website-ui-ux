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

class PrizeCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    prizeOrder: PropTypes.oneOf[(1, 2, 3)],
    prize: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
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

    return (
      <Paper
        className={classNames(classes.container, this.props.className)}
        style={style}>
        <AdvancedImage
          src={Background.Trophy}
          dim
          dimStyle={{ backgroundColor: this.getDimColor() }}
          height={this.props.height}>
          <div className={classes.overlay}>
            <div className={classes.iconContainer}>
              <FontAwesomeIcon
                icon={faTrophy}
                size={this.getIconSize()}
                color={Colors.white}
              />
            </div>
            <div className={classes.contentContainer}>
              <Typography
                className={classes.title}
                align="center"
                style={{ fontSize: this.getTitleSize() }}>
                {`${this.getTitle()} Prize`}
              </Typography>
              <Typography
                className={classes.content}
                align="center"
                style={{ fontSize: this.getContentSize() }}>
                {this.props.prize}
              </Typography>
            </div>
          </div>
        </AdvancedImage>
      </Paper>
    );
  }

  getDimColor() {
    switch (this.props.prizeOrder) {
      case 1:
        return 'rgba(244, 67, 54, 0.95)';
      case 2:
        return 'rgba(63, 81, 181, 0.95)';
      case 3:
        return 'rgba(76, 175, 80, 0.95)';
    }
  }

  getTitle() {
    switch (this.props.prizeOrder) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
    }
  }

  getTitleSize() {
    switch (this.props.prizeOrder) {
      case 1:
        return 36;
      case 2:
        return 30;
      case 3:
        return 30;
    }
  }

  getContentSize() {
    switch (this.props.prizeOrder) {
      case 1:
        return 30;
      case 2:
        return 24;
      case 3:
        return 24;
    }
  }

  getIconSize() {
    switch (this.props.prizeOrder) {
      case 1:
        return '5x';
      case 2:
        return '4x';
      case 3:
        return '4x';
    }
  }
}

const styles = (theme) => ({
  container: {
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.75)',
    borderRadius: 10,
    width: 223.33,
    height: 335,
    overflow: 'hidden',
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentContainer: {
    marginTop: Layout.spacing.medium,
  },
  title: {
    fontWeight: 500,
    color: Colors.white,
  },
  content: {
    fontWeight: 300,
    color: Colors.white,
  },
});

export default withStyles(styles)(PrizeCard);
