import plusIcon from "../media/add.png"

type NewChatButtonProps = {
  popupOpenFunction: any
}

export default function NewChatButton(props: NewChatButtonProps) {
  return (
    <div className="NewChatButton" onClick={props.popupOpenFunction}>
      <img src={plusIcon} alt="add" />
    </div>
  );
}
