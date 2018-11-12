import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AttachMoney from '@material-ui/icons/AttachMoney';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BlurImage from './BlurImage';
import EventChip from './EventChip';

class EventCard extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    media: PropTypes.string.isRequired,
    mediaStyle: PropTypes.object,
    location: PropTypes.string,
    startDate: PropTypes.instanceOf(moment),
    endDate: PropTypes.instanceOf(moment),
    prize: PropTypes.string,
    link: PropTypes.string,
  };

  render() {
    return (
      <Card style={this.props.style}>
        <CardActionArea>
          <div style={styles.mediaContainer}>
            <BlurImage src={this.props.media} {...this.props.mediaStyle} />
            <div style={[styles.dimOverlay, this.props.mediaStyle]} />
            <div style={styles.overlay}>
              <Typography
                variant="headline"
                style={{ color: '#fff' }}
                gutterBottom>
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
  mediaContainer: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
  dimOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

export default EventCard;
