import React, { Component } from 'react';
import Colors from '../constants/Colors';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';
import {
  faMapMarkerAlt,
  faCalendar,
  faTrophy,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BookmarkBorder,
  CalendarTodayOutlined,
  LocationOnOutlined,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AdvancedImage from './AdvancedImage';
import { strictProps as EventProps } from '../models/Event';
import Layout from '../constants/Layout';
import EventChip from './EventChip';
import { darken } from '@material-ui/core/styles/colorManipulator';

class EventCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    event: EventProps,
  };

  render() {
    const { classes, event } = this.props;
    const formattedLocation = event.location
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    return (
      <Paper
        className={classNames(classes.root, this.props.className)}
        style={this.props.style}>
        <Typography className={classes.title} noWrap>
          {event.title}
        </Typography>
        <div className={classes.eventChipContainer}>
          <EventChip tags={event.tags} className={classes.eventChip} />
        </div>
        <Grid
          container
          spacing={Layout.spacing.small}
          className={classes.eventDetailGrid}>
          <Grid item container xs={12} direction="row" alignItems="center">
            <div className={classes.detailIconContainer}>
              <LocationOnOutlined />
            </div>
            <Typography className={classes.detailText} noWrap>
              {formattedLocation}
            </Typography>
          </Grid>
          <Grid item container xs={12} direction="row" alignItems="center">
            <div className={classes.detailIconContainer}>
              <CalendarTodayOutlined />
            </div>
            <Typography className={classes.detailText} noWrap>
              {`${event.startDate.format('MMM DD')} - ${event.endDate.format(
                'MMM DD'
              )}`}
            </Typography>
          </Grid>
          <Grid item container xs={12} direction="row" alignItems="center">
            <div className={classes.detailIconContainer}>
              <FontAwesomeIcon icon={faTrophy} size="lg" />
            </div>
            <Typography className={classes.detailText} noWrap>
              {event.prize}
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.actionContainer}>
          <Button className={classes.registerButton} variant="contained">
            Register
          </Button>
          <Button className={classes.otherButton} variant="contained">
            <BookmarkBorder className={classes.otherIcon} />
          </Button>
          <Button className={classes.otherButton} variant="contained">
            <FontAwesomeIcon icon={faShare} size="lg" />
          </Button>
        </div>
      </Paper>
    );
  }
}

const styles = (theme) => ({
  root: {
    padding: 32,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: 2.5,
    background:
      'radial-gradient(155.50px at 50% 50%, rgba(33, 150, 243, 0.1875) 0%, rgba(33, 150, 243, 0) 100%)',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  eventChipContainer: {
    display: 'flex',
    overflow: 'auto',
    marginTop: Layout.spacing.small,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  eventChip: {
    display: 'flex',
  },
  eventDetailGrid: {
    marginTop: Layout.spacing.medium,
  },
  detailIconContainer: {
    width: 30,
    height: 30,
    marginRight: Layout.spacing.medium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 18,
    fontWeight: 300,
  },
  actionContainer: {
    display: 'flex',
    direction: 'row',
    marginTop: Layout.spacing.medium,
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#2C387E',
    color: Colors.white,
    borderRadius: 0,
    width: '100%',
    maxWidth: '100%',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)',
    textTransform: 'none',
    fontSize: 24,
    height: 40,
    paddingLeft: Layout.spacing.small,
    paddingRight: Layout.spacing.small,
    paddingTop: 0,
    paddingBottom: 0,
    '&:hover': {
      backgroundColor: darken('#2C387E', 0.25),
    },
  },
  otherButton: {
    minWidth: 40,
    width: 40,
    height: 40,
    marginLeft: Layout.spacing.small,
    borderRadius: 0,
    backgroundColor: '#EBEBEB',
    boxShadow: 'none',
  },
  otherIcon: {
    color: Colors.black,
  },
});

export default withStyles(styles)(EventCard);
