import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
    render(){
        return (
            <p><a target="blank" href={'https://note.com/kenjin/n/' + this.props.value.key}>{this.props.value.name}</a></p>
        );
    }
}
export default connect()(Item);