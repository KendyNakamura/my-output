import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

const NOTE_ENDPOINT = 'https://note.mu/api/v1/notes?urlname=kenjin';

class Index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: [],
      };
    }

    componentDidMount() {
      axios
        .get(NOTE_ENDPOINT)
        .then((results) => {
            const result = results.data.data;
            this.setState({
              notes: result.notes,
            });
          },
        )
        .catch(() => {
            console.log('通信に失敗しました。');
        });
    }

    render(){
      let data;
      let n = 0;
      data = this.state.notes.map((value) => (
        <Item key={n++} value={value} />
      ));
      
      return (
          <div>{data}</div>
      )
    }
}

export default Index;