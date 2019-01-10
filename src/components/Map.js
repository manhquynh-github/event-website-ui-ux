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

class Map extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 795,
  };

  render() {
    const { classes, width } = this.props;
    const mapHeight = ((width / 16) * 9 * 3) / 4;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} align="center">
          Map
        </Typography>
        <div className={classes.mapContainer}>
          <AdvancedImage src={GoogleMap} height={mapHeight} />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    backgroundColor: '#ebebeb',
    paddingTop: Layout.spacing.large,
    paddingBottom: Layout.spacing.large,
    paddingLeft: 0,
    paddingRight: 0,
  },
  title: {
    fontSize: 24,
  },
  mapContainer: {
    marginTop: Layout.spacing.medium,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
});

export default withStyles(styles)(Map);
