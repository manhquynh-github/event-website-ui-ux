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
    childStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    cardStyle: PropTypes.object,
    style: PropTypes.object,
  };

  render() {
    return (
      <Grid style={this.props.style} container spacing={32}>
        {this.props.topics.map((e, i) => (
          <Grid key={`topic-${i}`} item xs={12} sm={6} lg={3}>
            <TopicCard
              title={e.title}
              image={e.image}
              url={e.url}
              count={e.count}
              style={this.props.childStyle}
              imageStyle={this.props.imageStyle}
              {...this.props.cardStyle}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const styles = {};

export default TopicGrid;
