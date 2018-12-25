import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BackgroundImage from '../assets/background';
import EventImage from '../assets/events';
import AdvancedImage from '../components/AdvancedImage';
import HotEventCard from '../components/HotEventCard';
import TopBar from '../components/TopBar';
import TopicGrid from '../components/TopicGrid';
import WhyUsGrid from '../components/WhyUsGrid';
import Colors from '../constants/Colors';
import { SampleHotEvents, SampleTopics, WhyUsContent } from '../data/Data';
import Layout from '../constants/Layout';

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, atTop: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateWindowScroll = this.updateWindowScroll.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.updateWindowScroll();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.updateWindowScroll);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar elevation={this.state.atTop ? 0 : 4} />
        <main className={classes.content}>
          <div className={classes.paddedContainer}>
            {this.renderHotEventCard()}
            {this.renderTopic()}
            {this.renderWhyUs()}
          </div>
        </main>
      </div>
    );
  }

  renderHotEventCard() {
    const { classes } = this.props;
    const hotEventCardHeight =
      ((this.state.height + Layout.default.offset.y - Layout.navBar.height) /
        3) *
      2;
    const hotEventCardImageHeight = hotEventCardHeight - 50;
    return (
      <HotEventCard
        className={classes.hotEventCard}
        style={{ height: hotEventCardHeight }}
        hotEvents={SampleHotEvents}
        imageProps={{ height: hotEventCardImageHeight }}
      />
    );
  }

  renderTopic() {
    const { classes } = this.props;
    const topicCardHeight =
      (((this.state.height + Layout.default.offset.y) / 3) * 2 - 64 - 32) / 2;
    const topicCardLabelHeight = topicCardHeight / 4 + 8;
    const topicCardImageHeight = topicCardHeight - topicCardLabelHeight;
    const topicColumns =
      this.state.width >= Layout.breakpoint.lg
        ? 4
        : this.state.width > Layout.breakpoint.sm
        ? 2
        : 1;
    const topicGridWidth =
      topicCardHeight * topicColumns + Layout.spacing.large * 3;
    return (
      <div className={classes.topicContainer}>
        <Typography className={classes.topicHeading} align="center">
          Popular Topics
        </Typography>
        <TopicGrid
          className={classes.topicGrid}
          style={{ width: topicGridWidth }}
          topics={SampleTopics}
          imageProps={{ height: topicCardImageHeight }}
          cardProps={{
            className: classes.topicCard,
            style: {
              height: topicCardHeight,
              width: topicCardHeight,
            },
          }}
        />
      </div>
    );
  }

  renderWhyUs() {
    const { classes } = this.props;
    const whyUsGridWidth =
      this.state.width >= Layout.breakpoint.lg
        ? this.state.width - 64 * 2 - 32 * 2
        : this.state.width;
    const whyUsColumns = this.state.width >= Layout.breakpoint.lg ? 3 : 1;
    const whyUsGridHeight =
      this.state.width >= Layout.breakpoint.lg
        ? ((whyUsGridWidth - 32 * (whyUsColumns - 1)) / whyUsColumns / 16) * 9
        : ((this.state.height +
            Layout.default.offset.y -
            Layout.navBar.height -
            64 * 2) /
            3) *
          3;
    return (
      <div className={classes.whyUsContainer}>
        <AdvancedImage
          height="100%"
          src={BackgroundImage.Hackathon}
          dim
          showOriginal
          dimStyle={{ backgroundColor: 'rgba(44, 56, 126, 0.975)' }}
          className={classes.whyUsBackground}
        />
        <div className={classes.whyUsContentOverlay}>
          <Typography className={classes.whyUsHeading} align="center">
            Why us?
          </Typography>
          <WhyUsGrid
            className={classes.whyUsGrid}
            style={{
              height: whyUsGridHeight,
              width: whyUsGridWidth,
            }}
            data={WhyUsContent}
          />
          <Button className={classes.createButton} variant="contained">
            <Add />
            Create an event
          </Button>
        </div>
      </div>
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state);
  }

  updateWindowScroll(event) {
    if (!this.state.atTop && window.scrollY === 0) {
      this.setState({
        atTop: true,
      });
    } else if (this.state.atTop && window.scrollY !== 0) {
      this.setState({
        atTop: false,
      });
    }
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
    backgroundColor: Colors.paper,
    minWidth: 300, // So the Typography noWrap works
    minHeight: 300,
  },
  hotEventCard: {
    marginTop: 50 + Layout.spacing.medium,
    minWidth: Layout.default.iPhone5.width,
    maxWidth: '100%',
  },
  paddedContainer: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: Layout.spacing.page,
      paddingRight: Layout.spacing.page,
    },
  },
  topicContainer: {
    paddingTop: Layout.spacing.page,
  },
  topicHeading: {
    color: Colors.primary,
    fontSize: 36,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  topicGrid: {
    marginTop: Layout.spacing.large,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
  },
  topicCard: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  whyUsHeading: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  whyUsContainer: {
    position: 'relative',
    paddingTop: Layout.spacing.page,
    paddingBottom: Layout.spacing.page,
  },
  whyUsContentOverlay: {
    marginTop: Layout.spacing.page,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: Layout.spacing.page,
    position: 'relative',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
  whyUsGrid: {
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      marginLeft: Layout.spacing.large,
      marginRight: Layout.spacing.large,
    },
  },
  whyUsBackground: {
    position: 'absolute',
    top: Layout.spacing.page,
    bottom: Layout.spacing.page,
    right: 0,
    left: 0,
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
      color: Colors.white,
    },
  },
});

export default withStyles(styles)(HomePage);
