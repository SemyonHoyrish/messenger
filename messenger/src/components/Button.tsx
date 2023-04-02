type ButtonProps = {
  onClick: any;
  children: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="button" onClick={props.onClick}>{props.children}</button>
  );
}
