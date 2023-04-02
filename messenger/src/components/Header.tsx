type HeaderProps = {
  title: string;
  goBackFunction?: any;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="topRef"></div>
      <header className={"header" + (props.goBackFunction ? " cursorPointer" : "")} onClick={props.goBackFunction}>
        <p className="header-title">{props.title}</p>
      </header>
    </>
    
  );
}
