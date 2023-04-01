import React, { useState } from 'react';
import './App.css';
import ErrorPage from './components/ErrorPage';
import ChatsListPage from './components/ChatsListPage';

export enum Page {
  None,
  Auth,
  ChatsList,
  Chat,
}

function App() {
  // check for auth
  let [page, setPage] = useState(Page.ChatsList);
  let [chatID, setChatID] = useState(0);

  switch (page) {
    case Page.ChatsList:
      return (
        <ChatsListPage setPage={setPage} setChatID={setChatID} />
      )
    
    default:
      return (
        <ErrorPage />
      )
  }
}

export default App;
