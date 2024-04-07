export default function Input(props) {
    return (
        <input
            className="winCl-Input"
            placeholder={props.placeholder}
            value={props.value}
            type={props.type}
            style={{ width: props.width }}
            onInput={props.onInput}
        />
    );
}
