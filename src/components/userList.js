import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import PropTypes from 'prop-types';
import React from 'react';

class userList extends React.Component {
    componentWillMount() {
        this.props.userActions.fetchUser();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
        if(!this.props.user){
            return (
                <div>
                    Loading User...
                </div>
            )
        }else{
            return (
                <div className="">
                    {
                        this.props.user.map((item, index) => {
                            return (
                                this.renderData(item)
                            );
                        })
                    }
                </div>
            )
        }
    }
}

userList.propTypes = {
    userActions: PropTypes.object,
    user: PropTypes.array
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(userList);