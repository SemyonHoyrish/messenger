import { useEffect, useRef } from "react";
import ChatMessage, { MessageOwner } from "./ChatMessage";
import Header from "./Header";
import MessageInput from "./MessageInput";
import { Page } from "../App";

type ChatPageProps = {
  chatID: number;
  setPage: any;
}

export default function ChatPage(props: ChatPageProps) {
  let bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'auto'});
  });

  const sendFunction = (text: string) => {
    console.log('done: ', text);
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut sint commodi animi placeat consequatur, modi id deleniti veniam quaerat odio consequuntur officiis, aliquid tempora suscipit quia fuga delectus dolorum?";

  return (
    <>
      <Header title="nickname" setPage={props.setPage} goBack />
      <ChatMessage owner={MessageOwner.User} text="some text text" />
      <ChatMessage owner={MessageOwner.User} text={lorem} />
      <ChatMessage owner={MessageOwner.Interlocutor} text="some text text" />
      <ChatMessage owner={MessageOwner.User} text="some text text" />
      <ChatMessage owner={MessageOwner.Interlocutor} text={lorem} />
      <ChatMessage owner={MessageOwner.Interlocutor} text={lorem} />
      <ChatMessage owner={MessageOwner.Interlocutor} text="some text text" />
      <div className="bottomRef" ref={bottomRef}></div>
      <MessageInput sendFunction={sendFunction} />
    </>
  );
}
