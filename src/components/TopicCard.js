import React, { Component } from 'react';
import {
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import AdvancedImage from './AdvancedImage';
import Colors from '../constants/Colors';

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
          <AdvancedImage
            blur
            showOriginal
            src={this.props.image}
            {...this.props.imageStyle}
          />
          <CardContent style={styles.cardContent}>
            <Typography style={styles.title} align="center">
              {this.props.title}
            </Typography>
            <Typography
              style={styles.subTitle}
              variant="subtitle1"
              align="center">
              {`${this.props.count} events`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const styles = {
  cardContent: {
    padding: 0,
  },
  title: {
    fontSize: 24,
    marginTop: 4,
    marginBottom: 0,
    color: Colors.black,
    lineHeight: 'normal',
  },
  subTitle: {
    marginTop: 0,
    fontSize: 18,
    marginBottom: 4,
    lineHeight: 'normal',
  },
};

export default TopicCard;
