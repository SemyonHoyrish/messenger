import ChatSelectButton from "./ChatSelectButton";
import Header from "./Header"
import default_avatar from "../media/default_avatar.png";
import NewChatButton from "./NewChatButton";
import { useState } from "react";
import NewChatPopup from "./NewChatPopup";

type ChatsListPageProps = {
  setPage: any;
  setChatID: any;
}

export default function ChatsListPage(props: ChatsListPageProps) {
  let [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Header title="Chats" />
      <NewChatButton popupOpenFunction={() => {setIsPopupOpen(true)}} />
      {isPopupOpen && <NewChatPopup setIsPopupOpen={setIsPopupOpen} addChatFunction={() => {}}  />}
      <ChatSelectButton avatarURL={default_avatar}
                        nickname="name surname"
                        setPage={props.setPage}
                        setChatID={props.setChatID}
                      />
    </>
  );
}
