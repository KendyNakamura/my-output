import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import MemoIndex from './memo/Index';
import NoteIndex from './note/Index';

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
        <h1>Memo</h1>
        <MemoIndex />
      </div>
    );
  }
}

export default connect()(App);