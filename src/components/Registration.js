import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class Registration extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} align="center">
          Registration
        </Typography>
        <Grid
          container
          spacing={Layout.spacing.small}
          justify="center"
          className={classes.contentGrid}>
          <Grid item container direction="row" justify="center" xs={12}>
            <div className={classes.contentLabelContainer}>
              <Typography className={classes.contentLabel} align="right">
                Name:
              </Typography>
            </div>
            <TextField className={classes.textField} />
          </Grid>
          <Grid item container direction="row" justify="center" xs={12}>
            <div className={classes.contentLabelContainer}>
              <Typography className={classes.contentLabel} align="right">
                Phone:
              </Typography>
            </div>
            <TextField className={classes.textField} />
          </Grid>
          <Grid item container direction="row" justify="center" xs={12}>
            <div className={classes.contentLabelContainer}>
              <Typography className={classes.contentLabel} align="right">
                Email:
              </Typography>
            </div>
            <TextField className={classes.textField} />
          </Grid>
        </Grid>
        <Button className={classes.submitButton} variant="contained">
          Submit
        </Button>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    padding: Layout.spacing.large,
    backgroundColor: '#EBEBEB',
    [theme.breakpoints.down('sm')]: {
      padding: Layout.spacing.medium,
    },
  },
  title: {
    fontSize: 24,
  },
  contentGrid: {
    marginTop: Layout.spacing.large,
    marginBottom: Layout.spacing.large,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contentLabelContainer: {
    marginRight: Layout.spacing.medium,
    display: 'flex',
    alignItems: 'center',
  },
  contentLabel: {
    fontWeight: 300,
    fontSize: 18,
    width: 75,
  },
  textField: {
    maxWidth: 250,
    width: 250,
  },
  submitButton: {
    marginTop: Layout.spacing.large,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#0077B5',
    color: Colors.white,
    height: 30,
    fontSize: 18,
    textTransform: 'none',
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: Layout.spacing.small,
    paddingRight: Layout.spacing.small,
    borderRadius: 0,
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: darken('#0077B5', 0.5),
    },
  },
});

export default withStyles(styles)(Registration);
