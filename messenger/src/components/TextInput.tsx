type TextInputProps = {
  setValue: any;
  placeholder?: string;
}

export default function TextInput(props: TextInputProps) {
  return (
    <input className="input" type="text" placeholder={props.placeholder} onChange={(e) => {props.setValue(e.target.value);}} />
  );
}
