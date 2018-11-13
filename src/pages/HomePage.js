import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import EventCard from '../components/EventCard';
import Image from '../assets/sample_image.jpg';
import moment from 'moment';
import TopicGrid from '../components/TopicGrid';

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
            image={Image}
            imageStyle={{ height: this.state.height / 2 }}
          />
          <div className={classes.paddedContainer}>
            <TopicGrid
              style={{ padding: 32 }}
              topics={this.generate()}
              imageStyle={{ height: 140 }}
              cardStyle={{ textAlign: 'center' }}
            />
          </div>
        </main>
      </div>
    );
  }

  generate() {
    const x = [];
    for (let i = 0; i < 8; i++) {
      x.push({
        title: 'Aritifical Intelligence',
        image: Image,
        count: 99,
      });
    }
    return x;
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
    backgroundColor: theme.palette.background.default,
    minWidth: 300, // So the Typography noWrap works
    minHeight: 300,
  },
  paddedContainer: {
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles)(HomePage);
