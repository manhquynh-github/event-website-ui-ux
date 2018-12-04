import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class WhyUsGrid extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    title: '',
    content: '',
  };

  render() {
    return (
      <Grid style={this.props.style} container spacing={32}>
        {this.props.data.map((e, i) => (
          <Grid
            key={`reason-${i}`}
            item
            sm={12}
            lg={4}
            style={styles.itemContainer}>
            <div style={styles.contentContainer}>
              <Typography style={styles.title} align="center">
                {e.title}
              </Typography>
              <Typography style={styles.content} align="center">
                {e.content}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const styles = {
  title: {
    color: Colors.white,
    fontSize: 30,
    fontVariant: 'small-caps',
    lineHeight: 'normal',
  },
  content: {
    marginTop: 16,
    color: Colors.white,
    fontSize: 21,
    lineHeight: 'normal',
  },
  contentContainer: {
    marginLeft: Layout.margin.large,
    marginRight: Layout.margin.large,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  itemContainer: {
    padding: 0,
    display: 'inherit',
  },
};

export default WhyUsGrid;
