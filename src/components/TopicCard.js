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
import shadows from '@material-ui/core/styles/shadows';
import classNames from 'classnames';
import { strictProps as TopicProps } from '../models/Topic';

class TopicCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    ...TopicProps,
    image: PropTypes.string,
    imageProps: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <Card
        className={classNames(classes.card, this.props.className)}
        square
        style={this.props.style}>
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
            <Typography className={classes.subTitle} align="center">
              {`${this.props.count} events`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const styles = {
  card: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      boxShadow: '0px 4px 12px rgba(33, 150, 243, 0.75)',
    },
  },
  cardActionArea: {
    color: 'rgba(0,0,0,0.5)',
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
