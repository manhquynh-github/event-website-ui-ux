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
import { fade } from '@material-ui/core/styles/colorManipulator';
import Colors from '../constants/Colors';
import classNames from 'classnames';
import { strictProps as EventProps } from '../models/Event';

class HotEventCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    hotEvents: PropTypes.arrayOf(PropTypes.shape(EventProps)).isRequired,
    imageProps: PropTypes.object,
    selectedIndex: PropTypes.number,
  };

  static defaultProps = {
    selectedIndex: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  render() {
    const { classes } = this.props;
    const event = this.props.hotEvents[this.state.selectedIndex];

    return (
      <Card
        className={classNames(classes.card, this.props.className)}
        style={this.props.style}
        square>
        <CardActionArea className={classes.cardActionArea}>
          <div className={classes.imageContainer}>
            <AdvancedImage
              blur
              dim
              src={event.image}
              {...this.props.imageProps}
            />
            <div className={classes.overlay}>
              <Typography className={classes.title} gutterBottom>
                {event.title}
              </Typography>
              <EventChip tags={event.tags} className={classes.eventChip} />
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

  componentDidUpdate() {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.setState((previousState) => ({
        selectedIndex: (previousState.selectedIndex + 1) % 3,
      }));
    }, 6000);
  }

  renderEventDetail() {
    const { classes } = this.props;
    const event = this.props.hotEvents[this.state.selectedIndex];
    const formattedLocation = event.location
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

    return (
      <div className={classes.detailContainer}>
        <ListItem disableGutters className={classes.detailItem}>
          <ListItemIcon className={classes.detailIcon}>
            <LocationOnOutlined />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={formattedLocation}
            className={classes.detailText}
          />
        </ListItem>
        <ListItem disableGutters className={classes.detailItem}>
          <ListItemIcon className={classes.detailIcon}>
            <CalendarTodayOutlined />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={`${event.startDate.format(
              'MMM DD'
            )} - ${event.endDate.format('MMM DD')}`}
            className={classes.detailText}
          />
        </ListItem>
        <ListItem disableGutters className={classes.detailItem}>
          <ListItemIcon className={classes.detailIcon}>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={event.prize}
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
        {this.props.hotEvents.map((e, i) => (
          <Grid key={`hot-event-${i}`} item xs={12} md={4}>
            <ListItem
              onClick={() => this.setState({ selectedIndex: i })}
              selected={this.state.selectedIndex == i}
              disableGutters
              button
              classes={{
                root: classes.otherEventItem,
                selected: classes.otherEventSelectedItem,
              }}>
              <ListItemText
                style={{
                  color:
                    this.state.selectedIndex == i ? Colors.white : Colors.black,
                }}
                disableTypography
                className={classes.otherEventTitle}
                primary={e.title}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const styles = (theme) => ({
  card: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },
  cardActionArea: {
    color: fade(Colors.black, 0.5),
  },
  cardContent: {
    padding: 0,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: fade(Colors.black, 0.5),
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
    color: Colors.white,
    fontSize: 36,
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'center',
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
    //color: fade(Colors.black, 0.5),
    '&$otherEventSelectedItem': {
      backgroundColor: Colors.primary,
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    },
    '&$otherEventSelectedItem:hover': {
      backgroundColor: Colors.primaryDark,
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    },
  },
  otherEventSelectedItem: {},
  otherEventTitle: {
    padding: 0,
    margin: 0,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 'normal',
    textAlign: 'center',
  },
});

export default withStyles(styles)(HotEventCard);
