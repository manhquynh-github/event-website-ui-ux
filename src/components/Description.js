import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Layout from '../constants/Layout';

class Description extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.string,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title}>Description</Typography>
        <Typography className={classes.content}>
          {this.props.description.split('\n').map((e, i) => (
            <p className={classes.paragraph}>{e}</p>
          ))}
        </Typography>
        <Typography className={classes.seeMore}>See more</Typography>
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
  content: {
    fontSize: 18,
    fontWeight: 300,
    lineHeight: '140%',
    marginTop: Layout.spacing.medium,
  },
  paragraph: {
    marginBottom: 16,
  },
  seeMore: {
    color: '#1769AA',
    fontSize: 18,
    cursor: 'pointer',
    fontWeight: 500,
    '&:hover': {
      color: darken('#1769AA', 0.5),
    },
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
});

export default withStyles(styles)(Description);
