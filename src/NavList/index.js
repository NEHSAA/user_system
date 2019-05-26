import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const listItems = [
  { label: '會員資料', route: '/memberData' },
  { label: '入會審查', route: '/signUpReview' },
  { label: '繳費', route: '/payment' },
  { label: '捐款', route: '/donate' },
  { label: '領證', route: '/getCard' },
  { label: '領選票', route: '/getVotePaper' },
];

function NavList(props) {
  return (
    <div style={{ width: 320, height: '100%', borderRight: '1px gray solid' }}>
      <List component="nav">
        <ListItem button href="/">
          <ListItemIcon>
            <Avatar src="/img/logo.png" />
          </ListItemIcon>
          <ListItemText primary="NEHSAA Web System" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        { 
          listItems.map(e => (
            <ListItem key={e.route} button component={Link} to={e.route} >
              <ListItemText primary={e.label} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
}

export default NavList;
