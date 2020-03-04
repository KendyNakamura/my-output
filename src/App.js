import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import MemoIndex from './memo/Index';
import NoteIndex from './note/Index';
import QiitaIndex from './qiita/Index';
import WordpressIndex from './wordpress/Index';
import TwitterIndex from './twitter/Index';

class App extends Component {
  td = {
    width: "250px"
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>note</h1>
        <NoteIndex />
        <h1>Wordpress</h1>
        <WordpressIndex />
        <h1>Qiita</h1>
        <QiitaIndex />
        <h1>Twitter</h1>
        <TwitterIndex />
        <h1>Memo</h1>
        <MemoIndex />
      </div>
    );
  }
}

export default connect()(App);