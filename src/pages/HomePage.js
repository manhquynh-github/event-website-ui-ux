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
        <TopBar transparent={this.state.atTop} />
        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          <EventCard
            raised
            square
            style={{ marginTop: 64 }}
            title="Linde.Intel.AI.Challenge"
            tags={['AI', 'Industry']}
            startDate={moment(new Date())}
            endDate={moment(new Date())}
            location="MUNICH, GERMANY"
            prize="Prize pool: $10000"
            image={EventImage.Event1}
            imageStyle={{ height: this.state.height / 2 }}
          />
          <div className={classes.topicContainer}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: 'black' }}
              align="center">
              Popular Topics
            </Typography>
            <div className={classes.paddedContainer}>
              <TopicGrid
                style={{ padding: 32 }}
                topics={sampleTopics}
                imageStyle={{ height: 100 }}
                cardStyle={{ textAlign: 'center' }}
              />
            </div>
          </div>
          <div className={classes.whyContainer}>
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

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 300, // So the Typography noWrap works
    minHeight: 300,
  },
  paddedContainer: {
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
  },
  topicContainer: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
  },
  whyContainer: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    backgroundColor: '#d3d3d3',
  },
});

export default withStyles(styles)(HomePage);
