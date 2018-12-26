import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { strictProps as TopicProps } from '../models/Topic';
import TopicCard from './TopicCard';

class TopicGrid extends Component {
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape(TopicProps).isRequired)
      .isRequired,
    imageProps: PropTypes.object,
    cardProps: PropTypes.object,
  };

  render() {
    const { imageProps, cardProps } = this.props;

    return (
      <Grid
        className={this.props.className}
        style={this.props.style}
        container
        spacing={32}>
        {this.props.topics.map((e, i) => (
          <Grid key={`topic-${i}`} item xs={12} sm={6} lg={3}>
            <TopicCard
              title={e.title}
              image={e.image}
              url={e.url}
              count={e.count}
              imageProps={imageProps}
              {...cardProps}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default TopicGrid;
