export enum MessageOwner {
  User,
  Interlocutor
}

type ChatMessageProps = {
  owner: MessageOwner;
  text: string;
}

export default function ChatMessage(props: ChatMessageProps) {
  return (
    <div className={props.owner === MessageOwner.User
                  ? "message user_message"
                  : "message interlocutor_message"}>
      <p className="message-text">{props.text}</p>
    </div>
  );
}
