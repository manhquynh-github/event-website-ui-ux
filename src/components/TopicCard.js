import React, { Component } from 'react';
import {
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import BlurImage from './BlurImage';

class TopicCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageStyle: PropTypes.object.isRequired,
    style: PropTypes.object,
    url: PropTypes.string,
    count: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    raised: PropTypes.bool,
    square: PropTypes.bool,
    elevation: PropTypes.number,
  };

  static defaultProps = {
    raised: undefined,
    square: undefined,
    elevation: undefined,
  };

  render() {
    return (
      <Card
        style={{
          width: this.props.width,
          height: this.props.height,
          ...this.props.style,
        }}
        raised={this.props.raised}
        square={this.props.square}
        elevation={this.props.elevation}>
        <CardActionArea>
          <BlurImage
            showOriginal
            src={this.props.image}
            {...this.props.imageStyle}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="subtitle1" component="p">{`${
              this.props.count
            } topics`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const styles = {};

export default TopicCard;
