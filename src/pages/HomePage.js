import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import EventCard from '../components/EventCard';
import Image from '../assets/sample_image.jpg';
import moment from 'moment';

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar />
        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          <EventCard
            style={{ marginTop: 64 }}
            title="Linde.Intel.AI.Challenge"
            tags={['AI', 'Industry']}
            startDate={moment(new Date())}
            endDate={moment(new Date())}
            location="MUNICH, GERMANY"
            prize="Prize pool: $10000"
            media={Image}
            mediaStyle={{ height: this.state.height / 2 }}
          />
        </main>
      </div>
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles)(HomePage);
