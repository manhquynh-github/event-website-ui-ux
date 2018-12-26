import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class Footer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.container} spacing={0}>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={16}>
            <Grid item>
              <Button className={classNames(classes.button, classes.facebook)}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  color={Colors.white}
                />
              </Button>
            </Grid>
            <Grid item>
              <Button className={classNames(classes.button, classes.twitter)}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  color={Colors.white}
                />
              </Button>
            </Grid>
            <Grid item>
              <Button className={classNames(classes.button, classes.linkedIn)}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  color={Colors.white}
                />
              </Button>
            </Grid>
            <Grid item>
              <Button className={classNames(classes.button, classes.instagram)}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  color={Colors.white}
                />
              </Button>
            </Grid>
          </Grid>
          <Typography className={classes.copyright}>
            Copyright © 2018 EventHackathon. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} container alignItems="flex-end">
          <Grid container spacing={32} className={classes.contactGrid}>
            <Grid item>
              <Typography className={classes.contactLink}>Email us</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.contactLink}>
                Terms of Service
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.contactLink}>
                Privacy Policy
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.contactLink}>
                License Agreement
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = (theme) => ({
  container: {
    backgroundColor: Colors.mediumGray,
    paddingTop: Layout.spacing.page,
    paddingBottom: Layout.spacing.page,
    paddingLeft: Layout.spacing.medium,
    paddingRight: Layout.spacing.medium,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: Layout.spacing.page,
      paddingRight: Layout.spacing.page,
    },
  },
  button: {
    minWidth: 0,
    minHeight: 0,
    width: 40,
    height: 40,
    borderRadius: 45,
  },
  facebook: {
    backgroundColor: Colors.facebook,
    '&:hover': {
      backgroundColor: darken(Colors.facebook, 0.5),
    },
  },
  twitter: {
    backgroundColor: Colors.twitter,
    '&:hover': {
      backgroundColor: darken(Colors.twitter, 0.5),
    },
  },
  linkedIn: {
    backgroundColor: Colors.linkedIn,
    '&:hover': {
      backgroundColor: darken(Colors.linkedIn, 0.5),
    },
  },
  instagram: {
    backgroundColor: Colors.instagram,
    '&:hover': {
      backgroundColor: darken(Colors.instagram, 0.5),
    },
  },
  copyright: {
    color: Colors.footerText,
    fontSize: 18,
    marginTop: Layout.spacing.medium,
  },
  contactGrid: {
    marginTop: 0,
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
  },
  contactLink: {
    color: Colors.footerText,
    fontSize: 18,
    cursor: 'pointer',
    '&:hover': {
      color: darken(Colors.footerText, 0.5),
    },
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
});

export default withStyles(styles)(Footer);
