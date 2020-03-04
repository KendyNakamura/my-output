import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

const Qiita_ENDPOINT = 'https://qiita.com/api/v2/users/village_21/items';

class QiitaIndex extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
      };
    }

    componentDidMount() {
      axios
        .get(Qiita_ENDPOINT, { params: {
            "per_page": "10",
            "token": "cbfd387e16dce4f909cf605262f32ce1e06966cf"
          }}
        )
        .then((results) => {
            const result = results.data;
            this.setState({
              posts: result,
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
      data = this.state.posts.map((value) => (
        <Item key={n++} value={value} />
      ));
      
      return (
          <div>{data}</div>
      )
    }
}

export default QiitaIndex;