import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';

const Qiita_ENDPOINT = 'https://engineer-village.com/wp-json/wp/v2/posts';

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