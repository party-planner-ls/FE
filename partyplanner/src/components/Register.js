import {React, Component} from 'react';
import Register from '../Actions';
import connect from 'react-redux';

class Registration extends Component {
    state = {
        credentials: {
            userName: '',
            password: ''
        }
    };

    addUser = e => {
        e.preventDefault();
        this.props.addUser(this.state.credentials).then(() => {
            
        });
    };

    render() {
        return()
    }
}

const mapStateToProps = ({registering, err}) => ({
    registering,
    err
})

export default connect (
    mapStateToProps,
    Register
)(Registration);