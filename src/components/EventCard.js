import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  AttachMoney,
  CalendarTodayOutlined,
  LocationOnOutlined,
} from '@material-ui/icons';
//import AttachMoney from '@material-ui/icons/AttachMoney';
//import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';
//import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BlurImage from './BlurImage';
import EventChip from './EventChip';

class EventCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(moment).isRequired,
    endDate: PropTypes.instanceOf(moment).isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    prize: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    imageStyle: PropTypes.object,
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
          <div style={styles.imageContainer}>
            <BlurImage dim src={this.props.image} {...this.props.imageStyle} />
            <div style={styles.overlay}>
              <Typography variant="h3" style={{ color: '#fff' }} gutterBottom>
                {this.props.title}
              </Typography>
              <EventChip
                tags={this.props.tags}
                style={{ justifyContent: 'center' }}
              />
            </div>
          </div>
        </CardActionArea>
        <CardContent style={styles.cardContent}>
          <Grid container justify="space-evenly">
            <Grid item xs={12} md={3}>
              <ListItem disableGutters button style={styles.item}>
                <ListItemIcon>
                  <LocationOnOutlined />
                </ListItemIcon>
                <ListItemText primary={this.props.location} />
              </ListItem>
            </Grid>
            <Grid item xs={12} md={3}>
              <ListItem disableGutters button style={styles.item}>
                <ListItemIcon>
                  <CalendarTodayOutlined />
                </ListItemIcon>
                <ListItemText
                  primary={`${this.props.startDate.format(
                    'MMM DD'
                  )} - ${this.props.endDate.format('MMM DD')}`}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} md={3}>
              <ListItem disableGutters button style={styles.item}>
                <ListItemIcon>
                  <AttachMoney />
                </ListItemIcon>
                <ListItemText primary={this.props.prize} />
              </ListItem>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  cardContent: {
    padding: 0,
  },
  item: {
    padding: 16,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlay: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
};

export default EventCard;
