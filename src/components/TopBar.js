import {
  AppBar,
  Button,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  AccountCircle,
  Add,
  MoreVert as MoreIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class TopBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
  };

  static defaultProps = {
    elevation: undefined,
  };

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  onMenuClose = () => {
    this.setState({ anchorEl: null });
    this.onMobileMenuClose();
  };

  onMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  onMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.onMobileMenuClose}>
        <MenuItem>
          <Add className={classes.menuItemIcon} />
          Create an event
        </MenuItem>
        <MenuItem>
          <AccountCircle className={classes.menuItemIcon} />
          Sign in
        </MenuItem>
      </Menu>
    );

    return (
      <div>
        <AppBar className={classes.appBar} elevation={this.props.elevation}>
          <Toolbar className={classes.toolbar} disableGutters>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer">
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.title} noWrap>
              Event Hackathon
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button className={classes.createButton} variant="contained">
                <Add />
                Create an event
              </Button>
              <Typography className={classes.signIn}>Sign in</Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.onMobileMenuOpen}
                color="inherit">
                <MoreIcon className={classes.moreIcon} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: Colors.white,
    zIndex: theme.zIndex.drawer + 1,
    float: 'top',
    height: 50,
    paddingLeft: Layout.spacing.page,
    paddingRight: Layout.spacing.page,
    [theme.breakpoints.down('md')]: {
      paddingLeft: Layout.spacing.medium,
      paddingRight: Layout.spacing.medium,
    },
    transition: theme.transitions.create(['box-shadow'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  toolbar: {
    minHeight: 0,
    height: 50,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: Colors.black,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Colors.lightGray,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    height: 40,
    '&:hover': {
      backgroundColor: '#ebebeb',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 4,
      width: 350,
    },
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  searchIcon: {
    width: 50,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5c5c5c',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 50,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: 40,
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
    color: Colors.black,
  },
  createButton: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    height: 40,
    alignSelf: 'center',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    fontSize: 18,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: Colors.primaryDark,
      color: Colors.white,
    },
  },
  signIn: {
    alignSelf: 'center',
    fontWeight: 300,
    fontSize: 18,
    marginLeft: Layout.spacing.large,
    color: Colors.black,
    cursor: 'pointer',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    '&:hover': {
      borderBottomColor: Colors.black,
    },
    transition: theme.transitions.create(['border-bottom-color'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  moreIcon: {
    color: Colors.black,
  },
  menuItemIcon: {
    marginRight: Layout.spacing.medium,
  },
});

export default withStyles(styles)(TopBar);
