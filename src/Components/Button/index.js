import './style.css'

function Button(props) {
  const color = props.color;

  const getColorClass = (color) => {
    if (color === "primary") { return "button--primary" }
    if (color === "secondary") { return "button--secondary" }
  }

  return (
    <button className={`button ${getColorClass(color)}`}>
      {props.textButton}
    </button>
  );
}

export default Button;
