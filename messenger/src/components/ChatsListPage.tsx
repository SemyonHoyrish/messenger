import ChatSelectButton from "./ChatSelectButton";
import Header from "./Header"
import default_avatar from "../media/default_avatar.png";

type ChatsListPageProps = {
  setPage: any;
  setChatID: any;
}

export default function ChatsListPage(props: ChatsListPageProps) {
  return (
    <>
      <Header title="Chats" />
      <ChatSelectButton avatarURL={default_avatar}
                        nickname="name surname"
                        setPage={props.setPage}
                        setChatID={props.setChatID}
                      />
    </>
  );
}
