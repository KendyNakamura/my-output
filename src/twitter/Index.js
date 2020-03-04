import React, { Component } from 'react';

class TwitterIndex extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
      };
    }

    componentDidMount() {
      const script = document.createElement("script");

      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
  
      document.body.appendChild(script);
    }

    render(){
      return (
        <div>
          <a 
            class="twitter-timeline" 
            href="https://twitter.com/kenjinnnn?ref_src=twsrc%5Etfw" 
            width="300" 
            data-height="500">
              Tweets by kenjinnnn
          </a>
        </div>
      )
    }
}

export default TwitterIndex;