import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TopicImage from '../assets/topics';
import EventImage from '../assets/events';
import EventCard from '../components/EventCard';
import TopBar from '../components/TopBar';
import TopicGrid from '../components/TopicGrid';
import { Typography } from '@material-ui/core';
import Colors from '../constants/Colors';
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
    const hotEventCardHeight =
      ((this.state.height + 111 - styles.navBar.height) / 3) * 2;
    const hotEventCardImageHeight = hotEventCardHeight - 50;
    const hotEventCard = (
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

    const topicCardHeight = (((this.state.height + 111) / 3) * 2 - 64 - 32) / 2;
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
    const topic = (
      <div style={styles.topicContainer}>
        <Typography style={styles.topicHeading} align="center">
          Popular Topics
        </Typography>
        <TopicGrid
          style={{ ...styles.topicGrid, width: topicGridWidth }}
          topics={sampleTopics}
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

    return (
      <div style={styles.root}>
        <TopBar elevation={this.state.atTop ? 0 : 4} />
        <main style={styles.content}>
          {hotEventCard}
          {topic}
          <div style={styles.whyContainer}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: 'black' }}
              align="center">
              Why us
            </Typography>
          </div>
        </main>
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

const sampleTopics = [
  { title: 'Aritifical Intelligence', image: TopicImage.AI, count: 51 },
  { title: 'Industry', image: TopicImage.Industry, count: 40 },
  { title: 'Big Data', image: TopicImage.BigData, count: 39 },
  { title: 'Internet of Things', image: TopicImage.IOT, count: 36 },
  { title: 'Non-Profit', image: TopicImage.NonProfit, count: 25 },
  { title: 'API', image: TopicImage.API, count: 16 },
  { title: 'Transport', image: TopicImage.Transport, count: 17 },
  { title: 'Blockchain', image: TopicImage.BlockChain, count: 18 },
];

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
    paddingBottom: Layout.padding.page,
  },
  topicHeading: {
    color: Colors.primaryColor,
    fontSize: 36,
    fontWeight: 300,
  },
  topicGrid: {
    marginTop: Layout.margin.large,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
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
  whyContainer: {
    paddingLeft: Layout.padding.page,
    paddingRight: Layout.padding.page,
    paddingTop: Layout.padding.page,
    paddingBottom: Layout.padding.page,
    backgroundColor: '#d3d3d3',
  },
};

export default HomePage;
