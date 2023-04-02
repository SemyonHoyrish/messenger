import React, { useState } from 'react';
import './App.css';
import ErrorPage from './components/ErrorPage';
import ChatsListPage from './components/ChatsListPage';
import ChatPage from './components/ChatPage';
import AuthPage from './components/AuthPage';
import SettingsPage from './components/SettingsPage';

export enum Page {
  None,
  Auth,
  Settings,
  ChatsList,
  Chat,
}

function App() {
  // check for auth
  let [page, setPage] = useState(Page.Auth);
  let [chatID, setChatID] = useState(0);

  switch (page) {
    case Page.ChatsList:
      return (
        <ChatsListPage setPage={setPage} setChatID={setChatID} />
      );

    case Page.Chat:
      return (
        <ChatPage setPage={setPage} chatID={chatID} />
      );

    case Page.Auth:
      return (
        <AuthPage setPage={setPage} />
      );

    case Page.Settings:
      return (
        <SettingsPage setPage={setPage} />
      );
    
    default:
      return (
        <ErrorPage />
      );
  }
}

export default App;
