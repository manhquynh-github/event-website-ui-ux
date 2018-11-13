import React, { Component } from 'react';
import {
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Typography,
  Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import BlurImage from './BlurImage';
import TopicCard from './TopicCard';

class TopicGrid extends Component {
  static propTypes = {
    topics: PropTypes.arrayOf(
      PropTypes.objectOf({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        url: PropTypes.string,
      }).isRequired
    ).isRequired,
    cardStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    style: PropTypes.object,
  };

  render() {
    return (
      <Grid style={this.props.style} container spacing={32}>
        {this.props.topics.map((e, i) => (
          <Grid key={`topic-${i}`} item xs={12} md={6} lg={3}>
            <TopicCard
              raised
              title={e.title}
              image={e.image}
              url={e.url}
              count={e.count}
              style={this.props.cardStyle}
              imageStyle={this.props.imageStyle}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const styles = {};

export default TopicGrid;
