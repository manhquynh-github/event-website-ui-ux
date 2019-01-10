import { Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BackgroundImage from '../assets/background';
import AdvancedImage from '../components/AdvancedImage';
import Footer from '../components/Footer';
import HotEventCard from '../components/HotEventCard';
import ResizeListener from '../components/ResizeListener';
import ScrollListener from '../components/ScrollListener';
import TopBar from '../components/TopBar';
import TopicGrid from '../components/TopicGrid';
import WhyUsGrid from '../components/WhyUsGrid';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { SampleHotEvents, SampleTopics, WhyUsContent } from '../data/Data';
import EventCard from '../components/EventCard';
import Description from '../components/Description';
import Registration from '../components/Registration';
import Prize from '../components/Prize';
import Map from '../components/Map';
import SideNavigation from '../components/SideNavigation';

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = { atTop: false, verticalContact: false };
    this.resizeHandler = this.resizeHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.event = SampleHotEvents[0];
    this.state = {
      eventCardWidth: 411,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ResizeListener handler={this.resizeHandler} />
        <ScrollListener handler={this.scrollHandler} />
        <TopBar elevation={this.state.atTop ? 0 : 4} />
        <div className={classes.sideContainer}>
          <EventCard
            style={{ width: this.state.eventCardWidth }}
            className={classes.eventCard}
            event={this.event}
          />
          <SideNavigation className={classes.sideNavigation} />
        </div>
        <main className={classes.content}>
          <div className={classes.paddedContainer}>
            <Paper
              className={classes.contentContainer}
              style={{ width: this.state.contentWidth }}>
              <AdvancedImage
                src={this.event.image}
                showOriginal
                width={this.state.contentWidth}
                height={this.state.contentWidth / 2}
              />
              <Description description={this.event.description} />
              <Registration />
              <Prize width={this.state.contentWidth} />
              <Map width={this.state.contentWidth} />
            </Paper>
          </div>
          <Footer verticalContact={this.state.verticalContact} />
        </main>
      </div>
    );
  }

  resizeHandler({ width, height, ref }) {
    this.setState({
      eventCardWidth: width / 3,
      get contentWidth() {
        return (
          width -
          5 -
          Layout.spacing.page * 2 -
          this.eventCardWidth -
          Layout.spacing.large
        );
      },
    });
  }

  scrollHandler({ y }) {
    this.setState({ atTop: y === 0 });
  }
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: Colors.lightGray,
    minWidth: 300, // So the Typography noWrap works
    minHeight: 300,
  },
  paddedContainer: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: Layout.spacing.page,
      paddingRight: Layout.spacing.page,
    },
  },
  createButton: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    height: 50,
    width: 300,
    fontSize: 30,
    fontWeight: 300,
    textTransform: 'none',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    borderRadius: 0,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: Colors.primaryDark,
    },
  },
  sideContainer: {
    position: 'fixed',
    right: Layout.spacing.page,
    top: Layout.navBar.height + Layout.spacing.medium,
  },
  eventCard: {
    display: 'inline-block',
  },
  sideNavigation: {
    marginTop: Layout.spacing.large,
  },
  contentContainer: {
    marginTop: Layout.spacing.medium + Layout.navBar.height,
    marginBottom: Layout.spacing.page,
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: 0,
  },
});

export default withStyles(styles)(HomePage);
