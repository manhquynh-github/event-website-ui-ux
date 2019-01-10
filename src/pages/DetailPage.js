import { Button, Typography } from '@material-ui/core';
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

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = { atTop: false, verticalContact: false };
    this.resizeHandler = this.resizeHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ResizeListener handler={this.resizeHandler} />
        <ScrollListener handler={this.scrollHandler} />
        <TopBar elevation={this.state.atTop ? 0 : 4} />
        <main className={classes.content}>
          <div className={classes.paddedContainer}>
            <EventCard
              className={classes.eventCard}
              event={SampleHotEvents[0]}
            />
          </div>

          <Footer verticalContact={this.state.verticalContact} />
        </main>
      </div>
    );
  }

  resizeHandler({ width, height, ref }) {}

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
  eventCard: {
    position: 'absolute',
    right: Layout.spacing.page,
    top: Layout.navBar.height + Layout.spacing.medium,
    width: 411,
    //height: 311,
  },
});

export default withStyles(styles)(HomePage);
