import React from 'react';
import { connect } from 'react-redux'

const MemberData = (props) => {
  return (
    <div>
      {Object.entries(props.user).map(e => (
        <div>
          {`${e[0]}: ${e[1]}`}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  // login: data => dispatch('LOGIN', { data }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberData);
