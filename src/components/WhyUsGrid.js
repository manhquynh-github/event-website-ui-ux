import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class WhyUsGrid extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  static defaultProps = {
    title: '',
    content: '',
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={this.props.className}
        style={this.props.style}
        container
        spacing={32}>
        {this.props.data.map((e, i) => (
          <Grid
            item
            key={`reason-${i}`}
            className={classes.itemContainer}
            xs={12}
            lg={4}>
            <div className={classes.contentContainer}>
              <Typography className={classes.title} align="center">
                {e.title}
              </Typography>
              <Typography className={classes.content} align="center">
                {e.content}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const styles = (theme) => ({
  title: {
    color: Colors.white,
    fontSize: 30,
    fontVariant: 'small-caps',
  },
  content: {
    marginTop: 16,
    color: Colors.white,
    fontSize: 21,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: Layout.spacing.medium,
    marginRight: Layout.spacing.medium,
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: Layout.spacing.large,
      marginRight: Layout.spacing.large,
    },
  },
  itemContainer: {
    display: 'inherit',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(WhyUsGrid);
