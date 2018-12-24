import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    '&$selected': {
      backgroundColor: 'red',
    },
  },
  selected: {},
});

function Demo(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <ListItem
        disableGutters
        button
        selected={true}
        classes={{ root: classes.root, selected: classes.selected }}>
        TEST
      </ListItem>
      <ListItem selected={true} classes={classes}>
        TEST
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(Demo);
