import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  AttachMoney,
  CalendarTodayOutlined,
  LocationOnOutlined,
} from '@material-ui/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { strictProps as EventProps } from '../models/Event';
import AdvancedImage from './AdvancedImage';
import EventChip from './EventChip';
import SwipeButton from './SwipeButton';

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
        <CardActionArea disableRipple className={classes.cardActionArea}>
          <div className={classes.imageContainer}>
            <AdvancedImage
              blur
              dim
              src={event.image}
              {...this.props.imageProps}
            />
            <div className={classes.overlay}>
              <Typography className={classes.title} gutterBottom noWrap>
                {event.title}
              </Typography>
              <div className={classes.eventChipContainer}>
                <EventChip tags={event.tags} className={classes.eventChip} />
              </div>
              {this.renderEventDetail()}
            </div>
            <SwipeButton
              back
              onClick={() =>
                this.setState((previousState) => ({
                  selectedIndex: (previousState.selectedIndex - 1 + 3) % 3,
                }))
              }
            />
            <SwipeButton
              onClick={() =>
                this.setState((previousState) => ({
                  selectedIndex: (previousState.selectedIndex + 1 + 3) % 3,
                }))
              }
            />
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
        selectedIndex: (previousState.selectedIndex + 1 + 3) % 3,
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
      <Grid container justify="center">
        <Grid item className={classes.detailGrid}>
          <List disablePadding className={classes.detailList}>
            <ListItem disableGutters className={classes.detailItem}>
              <ListItemIcon className={classes.detailIcon}>
                <LocationOnOutlined />
              </ListItemIcon>
              <Typography noWrap className={classes.detailText}>
                {formattedLocation}
              </Typography>
            </ListItem>
            <ListItem disableGutters className={classes.detailItem}>
              <ListItemIcon className={classes.detailIcon}>
                <CalendarTodayOutlined />
              </ListItemIcon>
              <Typography
                className={classes.detailText}>{`${event.startDate.format(
                'MMM DD'
              )} - ${event.endDate.format('MMM DD')}`}</Typography>
            </ListItem>
            <ListItem disableGutters className={classes.detailItem}>
              <ListItemIcon className={classes.detailIcon}>
                <AttachMoney />
              </ListItemIcon>
              <Typography className={classes.detailText}>
                {event.prize}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
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
          <Grid key={`hot-event-${i}`} item xs={4}>
            <ListItem
              onClick={() => this.setState({ selectedIndex: i })}
              selected={this.state.selectedIndex === i}
              disableGutters
              button
              classes={{
                root: classes.otherEventItem,
                selected: classes.otherEventSelectedItem,
              }}>
              <Typography
                noWrap
                align="center"
                style={{
                  color:
                    this.state.selectedIndex === i
                      ? Colors.white
                      : Colors.black,
                }}
                className={classes.otherEventTitle}>
                {e.title}
              </Typography>
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
    width: '100%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
  title: {
    marginLeft: Layout.spacing.medium,
    marginRight: Layout.spacing.medium,
    color: Colors.white,
    fontSize: 36,
    fontWeight: 400,
    textAlign: 'center',
  },
  eventChipContainer: {
    display: 'flex',
    overflow: 'auto',
    marginTop: Layout.spacing.small,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingLeft: Layout.spacing.medium,
    paddingRight: Layout.spacing.medium,
  },
  eventChip: {
    display: 'flex',
    margin: 'auto',
    paddingRight: Layout.spacing.medium,
  },
  detailGrid: {
    maxWidth: '100%',
    flexBasis: 'auto',
  },
  detailList: {
    marginTop: Layout.spacing.large,
    marginBottom: 0,
    marginLeft: Layout.spacing.large,
    marginRight: Layout.spacing.large,
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
  },
  otherEventGrid: {
    height: 50,
    // [theme.breakpoints.down('md')]: {
    //   height: 150,
    // },
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
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  otherEventSelectedItem: {},
  otherEventTitle: {
    padding: 0,
    margin: 'auto',
    fontSize: 24,
    fontWeight: 300,
  },
  buttonOverlay: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%,-50%)',
  },
  button: {
    minWidth: 0,
    minHeight: 0,
    width: 40,
    height: 40,
    borderRadius: 45,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: fade(Colors.black, 0.5),
    color: Colors.white,
    '&:hover': {
      boxShadow: '0px 0px 12px rgba(33, 150, 243, 0.75)',
      backgroundColor: Colors.black,
    },
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

export default withStyles(styles)(HotEventCard);
