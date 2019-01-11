import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Layout from '../constants/Layout';
import PrizeCard from './PrizeCard';

class Prize extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 795,
  };

  render() {
    const { classes, width } = this.props;
    const cardHeight = ((width / 16) * 9 * 3) / 4;
    const cardWidth = (cardHeight / 3) * 2;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} align="center">
          Prize
        </Typography>
        <div
          className={classes.prizeContainer}
          style={{ width: cardWidth * 3 - Layout.spacing.small * 4 }}>
          <PrizeCard
            width={cardWidth}
            height={cardHeight - Layout.spacing.large}
            prizeOrder={2}
            prize="€3500"
            className={classes.secondPrize}
          />
          <PrizeCard
            width={cardWidth}
            height={cardHeight}
            prizeOrder={1}
            prize="€7000"
            className={classes.firstPrize}
          />
          <PrizeCard
            width={cardWidth}
            height={cardHeight - Layout.spacing.large * 2}
            prizeOrder={3}
            prize="€1750"
            className={classes.thirdPrize}
          />
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    padding: Layout.spacing.large,
    [theme.breakpoints.down('sm')]: {
      padding: Layout.spacing.medium,
    },
  },
  title: {
    fontSize: 24,
  },
  prizeContainer: {
    marginTop: Layout.spacing.medium,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondPrize: {
    zIndex: 2,
  },
  firstPrize: {
    marginLeft: -Layout.spacing.small,
    zIndex: 3,
  },
  thirdPrize: {
    marginLeft: -Layout.spacing.small,
  },
});

export default withStyles(styles)(Prize);
