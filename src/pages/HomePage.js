import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BackgroundImage from '../assets/background';
import EventImage from '../assets/events';
import EventCard from '../components/EventCard';
import TopBar from '../components/TopBar';
import TopicGrid from '../components/TopicGrid';
import { Typography } from '@material-ui/core';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import AdvancedImage from '../components/AdvancedImage';
import WhyUsGrid from '../components/WhyUsGrid';
import { Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import { SampleTopics, WhyUsContent } from '../constants/Data';

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
    return (
      <div style={styles.root}>
        <TopBar elevation={this.state.atTop ? 0 : 4} />
        <main style={styles.content}>
          {this.renderHotEventCard()}
          {this.renderTopic()}
          {this.renderWhyUs()}
        </main>
      </div>
    );
  }

  renderHotEventCard() {
    const hotEventCardHeight =
      ((this.state.height + Layout.default.offset.y - styles.navBar.height) /
        3) *
      2;
    const hotEventCardImageHeight = hotEventCardHeight - 50;
    return (
      <EventCard
        elevation={2}
        square
        style={{ ...styles.hotEventCard, height: hotEventCardHeight }}
        title="Linde.Intel.AI.Challenge"
        tags={['AI', 'Industry']}
        startDate={moment(new Date())}
        endDate={moment(new Date())}
        location="MUNICH, GERMANY"
        prize="Prize pool: $10000"
        image={EventImage.Event1}
        imageStyle={{ height: hotEventCardImageHeight }}
      />
    );
  }

  renderTopic() {
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
      topicCardHeight * topicColumns + Layout.margin.large * 3;
    return (
      <div style={styles.topicContainer}>
        <Typography style={styles.topicHeading} align="center">
          Popular Topics
        </Typography>
        <TopicGrid
          style={{ ...styles.topicGrid, width: topicGridWidth }}
          topics={SampleTopics}
          imageStyle={{ height: topicCardImageHeight }}
          childStyle={styles.topicChildStyle}
          cardStyle={{
            ...styles.topicCardStyle,
            height: topicCardHeight,
            width: topicCardHeight,
          }}
        />
      </div>
    );
  }

  renderWhyUs() {
    const whyUsGridWidth = this.state.width - 64 * 2 - 32 * 2;
    const whyUsColumns = this.state.width >= Layout.breakpoint.lg ? 3 : 1;
    const whyUsGridHeight =
      ((whyUsGridWidth - 32 * (whyUsColumns - 1)) / whyUsColumns / 16) *
        9 *
        (3 / whyUsColumns) +
      (-whyUsColumns + 3) * 32;

    return (
      <div style={styles.whyUsContainer}>
        <AdvancedImage
          height="100%"
          src={BackgroundImage.Hackathon}
          dim
          showOriginal
          dimStyle={{ backgroundColor: 'rgba(44, 56, 126, 0.975)' }}
          style={styles.whyUsBackground}
        />
        <div style={styles.WhyUsContentOverlay}>
          <Typography style={styles.whyUsHeading} align="center">
            Why us?
          </Typography>
          <WhyUsGrid
            style={{
              ...styles.whyUsGrid,
              height: whyUsGridHeight,
              width: whyUsGridWidth,
            }}
            data={WhyUsContent}
          />
          <Button
            className={this.props.classes.createButton}
            variant="contained">
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

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  navBar: {
    height: 50,
  },
  content: {
    flexGrow: 1,
    backgroundColor: Colors.paper,
    minWidth: 300, // So the Typography noWrap works
    minHeight: 300,
  },
  hotEventCard: {
    marginLeft: Layout.margin.page,
    marginRight: Layout.margin.page,
    marginTop: 50 + Layout.margin.medium,
  },
  paddedContainer: {
    paddingLeft: Layout.padding.page,
    paddingRight: Layout.padding.page,
  },
  topicContainer: {
    paddingLeft: Layout.padding.page,
    paddingRight: Layout.padding.page,
    paddingTop: Layout.padding.page,
    paddingBottom: 0,
  },
  topicHeading: {
    color: Colors.primary,
    fontSize: 36,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  topicGrid: {
    marginTop: Layout.margin.large,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  topicChildStyle: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topicCardStyle: {
    elevation: 6,
    square: true,
  },
  whyUsHeading: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  whyUsContainer: {
    position: 'relative',
    paddingLeft: Layout.padding.page,
    paddingRight: Layout.padding.page,
    paddingTop: Layout.padding.page,
    paddingBottom: Layout.padding.page,
  },
  WhyUsContentOverlay: {
    marginTop: Layout.margin.page,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: Layout.margin.page,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    position: 'relative',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
  },
  whyUsGrid: {
    marginLeft: Layout.padding.large,
    marginRight: Layout.padding.large,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  whyUsBackground: {
    position: 'absolute',
    top: Layout.margin.page,
    bottom: Layout.margin.page,
    right: Layout.margin.page,
    left: Layout.margin.page,
  },
  withStyles: {
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
      '&:hover': {
        backgroundColor: Colors.primaryDark,
        color: Colors.white,
      },
    },
  },
};

export default withStyles(styles.withStyles)(HomePage);
