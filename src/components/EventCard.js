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
import Colors from '../constants/Colors';

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
              <EventChip tags={this.props.tags} className={classes.eventChip} />
              {this.renderEventDetail()}
            </div>
          </div>
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          {this.renderOtherEvents()}
        </CardContent>
      </Card>
    );
  }

  renderEventDetail() {
    const { classes } = this.props;

    return (
      <div className={classes.detailContainer}>
        <ListItem disableGutters className={classes.detailItem}>
          <ListItemIcon className={classes.detailIcon}>
            <LocationOnOutlined />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={this.props.location}
            className={classes.detailText}
          />
        </ListItem>
        <ListItem disableGutters className={classes.detailItem}>
          <ListItemIcon className={classes.detailIcon}>
            <CalendarTodayOutlined />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={`${this.props.startDate.format(
              'MMM DD'
            )} - ${this.props.endDate.format('MMM DD')}`}
            className={classes.detailText}
          />
        </ListItem>
        <ListItem disableGutters className={classes.detailItem}>
          <ListItemIcon className={classes.detailIcon}>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={this.props.prize}
            className={classes.detailText}
          />
        </ListItem>
      </div>
    );
  }

  renderOtherEvents() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.otherEventGrid}
        container
        spacing={0}
        justify="center"
        alignItems="stretch">
        <Grid item xs={12} md={4}>
          <ListItem disableGutters button className={classes.otherEventItem}>
            <ListItemText
              disableTypography
              className={classes.otherEventTitle}
              primary={this.props.title}
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <ListItem disableGutters button className={classes.otherEventItem}>
            <ListItemText
              disableTypography
              className={classes.otherEventTitle}
              primary={this.props.title}
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <ListItem disableGutters button className={classes.otherEventItem}>
            <ListItemText
              disableTypography
              className={classes.otherEventTitle}
              primary={this.props.title}
            />
          </ListItem>
        </Grid>
      </Grid>
    );
  }
}

const styles = (theme) => ({
  cardContent: {
    padding: 0,
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
    color: Colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    color: Colors.white,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  otherEventGrid: {
    height: 50,
    [theme.breakpoints.down('md')]: {
      height: 150,
    },
  },
  otherEventItem: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
    height: '100%',
  },
  otherEventTitle: {
    padding: 0,
    margin: 0,
    color: Colors.black,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 'normal',
    textAlign: 'center',
  },
});

export default withStyles(styles)(EventCard);
