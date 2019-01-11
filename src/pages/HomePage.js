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
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      atTop: false,
      verticalContact: false,
      isRedirecting: false,
      redirectTo: { pathname: '/' },
    };
    this.resizeHandler = this.resizeHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  render() {
    const { classes } = this.props;

    if (this.state.isRedirecting) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return (
      <div className={classes.root}>
        <ResizeListener handler={this.resizeHandler} />
        <ScrollListener handler={this.scrollHandler} />
        <TopBar elevation={this.state.atTop ? 0 : 4} />
        <main className={classes.content}>
          <div className={classes.paddedContainer}>
            {this.renderHotEventCard()}
            {this.renderTopic()}
            {this.renderWhyUs()}
          </div>
          <Footer verticalContact={this.state.verticalContact} />
        </main>
      </div>
    );
  }

  renderHotEventCard() {
    const { classes } = this.props;
    const { hotEventCardHeight, hotEventCardImageHeight } = this.state;
    return (
      <HotEventCard
        className={classes.hotEventCard}
        style={{ height: hotEventCardHeight }}
        hotEvents={SampleHotEvents}
        imageProps={{ height: hotEventCardImageHeight }}
        onCardClick={this.onCardClick}
      />
    );
  }

  onCardClick({ index }) {
    console.log(index);
    this.setState({
      isRedirecting: true,
      redirectTo: {
        pathname: `/detail/${index}`,
      },
    });
  }

  renderTopic() {
    const { classes } = this.props;
    const {
      topicCardHeight,
      topicCardImageHeight,
      topicGridWidth,
    } = this.state;

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
    const { whyUsGridWidth, whyUsGridHeight } = this.state;

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
          <div className={classes.whyUsGridContainer}>
            <WhyUsGrid
              className={classes.whyUsGrid}
              style={{
                height: whyUsGridHeight,
                width: whyUsGridWidth,
              }}
              data={WhyUsContent}
            />
          </div>
          <Button className={classes.createButton} variant="contained">
            <Add />
            Create an event
          </Button>
        </div>
      </div>
    );
  }

  resizeHandler({ width, height, ref }) {
    this.setState({
      /**
       * HotEventCard
       */

      // (768 - 50) * 2/3
      hotEventCardHeight:
        ((height + Layout.default.offset.y - Layout.navBar.height) * 2) / 3,

      get hotEventCardImageHeight() {
        return this.hotEventCardHeight - Layout.navBar.height;
      },

      /**
       * Topic Grid
       */

      // ((768 * 2/3) - 64 - 32) / 2
      topicCardHeight:
        (((height + Layout.default.offset.y) * 2) / 3 -
          Layout.spacing.page -
          Layout.spacing.large) /
        2,

      // (height / 4) + (4*2)
      get topicCardLabelHeight() {
        return this.topicCardHeight / 4 + Layout.spacing.tight * 2;
      },

      get topicCardImageHeight() {
        return this.topicCardHeight - this.topicCardLabelHeight;
      },

      topicColumns: ref.breakpoints({
        lg: 4,
        sm: 2,
        xs: 1,
      }),

      // (height=width * columns) + (32 * columns)
      get topicGridWidth() {
        const topicColumns = this.topicColumns;

        return (
          this.topicCardHeight * topicColumns +
          Layout.spacing.large * topicColumns
        );
      },

      /**
       * WhyUsGrid
       */

      // 1366 - (64 * 2) - (32 * 2)
      whyUsGridWidth: ref.breakpoints({
        lg: width - Layout.spacing.page * 2 - Layout.spacing.large * 2,
        xs: width,
      }),

      whyUsColumns: ref.breakpoints({
        lg: 3,
        xs: 1,
      }),

      get whyUsGridHeight() {
        const whyUsColumns = this.whyUsColumns;

        return ref.breakpoints({
          // (width - (32 * columns))) / columns /16*9
          lg:
            ((this.whyUsGridWidth - Layout.spacing.large * whyUsColumns) /
              whyUsColumns /
              16) *
            9,

          // (height - 50 - (64*2))
          xs: height + Layout.default.offset.y - Layout.navBar.height - 64 * 2,
        });
      },

      /**
       * footer
       */

      verticalContact: ref.breakpoints({
        sm: false,
        xs: true,
      }),
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
  whyUsGridContainer: {
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      marginLeft: Layout.spacing.large,
      marginRight: Layout.spacing.large,
    },
  },
  whyUsGrid: {
    margin: 'auto',
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
