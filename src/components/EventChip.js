import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      <Chip
        key={`chip-${i}`}
        label={e}
        clickable
        className={classes.chip}
        color="primary"
      />
    ));
  }
}

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing.unit,
    marginRight: -theme.spacing.unit,
  },
  chip: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

export default withStyles(styles)(EventChip);
