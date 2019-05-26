import React from 'react';
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import axios from '../util/axios';

class TopAppBar extends React.Component {
  state = {
    modalOpen: false,
    id: '',
    loading: false,
    loginError: false,
  }
  
  login = () => {
    this.setState({
      loading: true,
    });
    axios({
      url: '/member',
      params: {
        rocid: this.state.id
      },
    }).then((response) => {
      this.props.login(response.data[0]);
      this.setState({
        loading:false,
        modalOpen:false,
      });
    }).catch((e) => {
      console.error(e);
      this.setState({
        loading: false,
        loginError: true,
      });
    });
    // this.props.login({
    //   rocid: 'A123456789',
    //   name: '張晴',
    //   birthdate: '2000-01-02',
    //   memberStatus: '永久會員',
    //   membershipYearList: [2018],
    //   memberCardStatus: 'received',
    //   memberCardCount: 1,
    // });
  }

  openModal = (open) => () => {
    this.setState({
      modalOpen: open,
    });
  }

  handleIdChange = (event) => {
    const { value: id } = event.target;
    this.setState({
      id,
    });
  }

  render() {
    const { user } = this.props;
    const { modalOpen, loading, loginError } = this.state;
    return (
      <AppBar position="static" color="default" >
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            NEHSAA Web System
          </Typography>
          {user.id ? (
            <Typography>
              {user.id}
            </Typography>
          ) : (
            <Button color="inherit" onClick={this.openModal(true)}>選擇會員</Button>
          )}
        </Toolbar>
        <Modal
          open={modalOpen}
          onClose={this.openModal(false)}
        >
          <Card style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 8,
            outline: 'none',
          }}>
            <CardContent>
              <TextField error={loginError} helperText={loginError&&'something wrong'} disabled={loading} style={{ width: 240 }} label="身分證字號" InputLabelProps={{ shrink: true }} onChange={this.handleIdChange} />
            </CardContent>
            <CardActions>
              <Button disabled={loading} onClick={this.login}>確定</Button>
            </CardActions>
          </Card>
        </Modal>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: data => dispatch({ type: 'LOGIN', data }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopAppBar);
