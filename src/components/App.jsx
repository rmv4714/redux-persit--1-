import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { connect } from "react-redux"
function App(props) {

  //
  return (
    <div>
      <Header />
      <CreateArea />
      {props.todos.allTodoData?.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            dateTime = {noteItem.dateAndTime}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, null)(App);
