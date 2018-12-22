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
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AdvancedImage from './AdvancedImage';
import EventChip from './EventChip';
import { withStyles } from '@material-ui/core/styles';

class EventCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(moment).isRequired,
    endDate: PropTypes.instanceOf(moment).isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    prize: PropTypes.string,
    imageProps: PropTypes.object,
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
        <CardActionArea>
          <div className={classes.imageContainer}>
            <AdvancedImage
              blur
              dim
              src={this.props.image}
              {...this.props.imageProps}
            />
            <div className={classes.overlay}>
              <Typography className={classes.title} gutterBottom>
                {this.props.title}
              </Typography>
              <EventChip tags={this.props.tags} style={styles.eventChip} />
              {this.renderEventDetail()}
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

  renderEventDetail() {
    return (
      <div style={styles.detailContainer}>
        <ListItem disableGutters style={styles.detailItem}>
          <ListItemIcon style={styles.detailIcon}>
            <LocationOnOutlined />
          </ListItemIcon>
          <ListItemText
            disableGutters
            disableTypography
            primary={this.props.location}
            style={styles.detailText}
          />
        </ListItem>
        <ListItem disableGutters style={styles.detailItem}>
          <ListItemIcon style={styles.detailIcon}>
            <CalendarTodayOutlined />
          </ListItemIcon>
          <ListItemText
            disableGutters
            disableTypography
            primary={`${this.props.startDate.format(
              'MMM DD'
            )} - ${this.props.endDate.format('MMM DD')}`}
            style={styles.detailText}
          />
        </ListItem>
        <ListItem disableGutters style={styles.detailItem}>
          <ListItemIcon style={styles.detailIcon}>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText
            disableGutters
            disableTypography
            primary={this.props.prize}
            style={styles.detailText}
          />
        </ListItem>
      </div>
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
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 400,
    lineHeight: 'normal',
  },
  eventChip: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 0,
  },
  detailContainer: {
    marginTop: 32,
    marginBottom: 0,
    // display: 'flex',
    // flexWrap: 'wrap',
    display: 'grid',
    justifyContent: 'center',
    // alignItem: 'center',
    flex: 0,
  },
  detailItem: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  detailIcon: {
    width: 40,
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 16,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 'normal',
    display: 'inline-block',
  },
};

export default withStyles(styles)(EventCard);
