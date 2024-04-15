import "./index.css";

export default function DividerVertical(props) {
    return (
        <div
            id={props.id}
            className="DividerVertical"
            style={{ height: props.height }}
        ></div>
    );
}
