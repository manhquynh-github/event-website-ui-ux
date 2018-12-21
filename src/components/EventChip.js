import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class EventChip extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    style: PropTypes.object,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} style={this.props.style}>
        {this.renderChips()}
      </div>
    );
  }

  renderChips() {
    const { classes } = this.props;
    return this.props.tags.map((e, i) => (
      <Chip key={`chip-${i}`} label={e} className={classes.chip} />
    ));
  }
}

const styles = (theme) => ({
  root: {
    marginLeft: -Layout.margin.small,
    marginRight: -Layout.margin.small,
    marginTop: 0,
    marginBottom: 0,
  },
  chip: {
    marginLeft: Layout.margin.small,
    marginRight: Layout.margin.small,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: Colors.primary,
    color: '#fff',
    '&:hover': {
      backgroundColor: Colors.primaryDark,
      color: Colors.white,
    },
  },
});

export default withStyles(styles)(EventChip);
