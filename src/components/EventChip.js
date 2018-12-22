import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import classNames from 'classnames';

class EventChip extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  render() {
    const { classes, className, style } = this.props;
    return (
      <div className={classNames(classes.root, className)} style={style}>
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

const styles = {
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
    '&:hover': {
      backgroundColor: Colors.primaryDark,
    },
  },
};

export default withStyles(styles)(EventChip);
