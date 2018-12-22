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
import { withStyles } from '@material-ui/core/styles';

class TopicCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageProps: PropTypes.object.isRequired,
    style: PropTypes.object,
    url: PropTypes.string,
    count: PropTypes.number,
    raised: PropTypes.bool,
    square: PropTypes.bool,
    elevation: PropTypes.number,
  };

  render() {
    const { classes } = this.props;

    return (
      <Card
        className={this.props.className}
        style={this.props.style}
        raised={this.props.raised}
        square={this.props.square}
        elevation={this.props.elevation}>
        <CardActionArea className={classes.cardActionArea}>
          <AdvancedImage
            blur
            showOriginal
            src={this.props.image}
            {...this.props.imageProps}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} align="center">
              {this.props.title}
            </Typography>
            <Typography
              className={classes.subTitle}
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
  cardActionArea: {
    width: '100%',
    height: '100%',
  },
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

export default withStyles(styles)(TopicCard);
