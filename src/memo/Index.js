import React, { Component } from "react";
import { connect } from 'react-redux';
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';
import PersistForm from './PersistForm';

class Index extends Component {
    render() {
        return(
            <div>
                <AddForm />
                <hr />
                <table><tbody><tr>
                <td style={this.td}><FindForm /></td>
                <td style={this.td}><DelForm /></td>
                <td style={this.td}><PersistForm /></td>
                </tr></tbody></table>
                <Memo />
            </div>
        )
    }
}

export default connect()(Index);