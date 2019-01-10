import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import PrizeCard from './PrizeCard';
import GoogleMap from '../assets/others/GoogleMap.jpg';
import AdvancedImage from './AdvancedImage';
import classNames from 'classnames';

class SideNavigation extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    width: 795,
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        className={classNames(classes.root, this.props.className)}
        style={this.props.style}>
        <Typography className={classes.link}>Description</Typography>
        <Typography className={classes.link}>Registration</Typography>
        <Typography className={classes.link}>Prize</Typography>
        <Typography className={classes.link}>Map</Typography>
        <Typography className={classes.link}>Agenda</Typography>
        <Typography className={classes.link}>Mentors</Typography>
        <Typography className={classes.link}>Sponsors</Typography>
        <Typography className={classes.link}>Gallery</Typography>
        <Typography className={classes.link} style={{ marginBottom: 0 }}>
          FAQ
        </Typography>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    paddingLeft: Layout.spacing.medium,
    borderLeftStyle: 'solid',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  link: {
    fontSize: 18,
    fontWeight: 300,
    color: Colors.primary,
    cursor: 'pointer',
    textDecoration: 'none',
    marginBottom: Layout.spacing.tight,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default withStyles(styles)(SideNavigation);
