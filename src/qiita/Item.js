import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
    render(){
        return (
            <p><a target="blank" href={this.props.value.url}>{this.props.value.title}</a></p>
        );
    }
}
export default connect()(Item);