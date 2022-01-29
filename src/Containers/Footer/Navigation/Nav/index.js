import './style.css';

function Nav(props) {
  return (
    <div class='footer-navigate-box'>
      <h4>{props.title}</h4>
      <ol>
        {props.links.map((link) => (
          <li>
            <a href="#">{link}</a>
          </li>
        ))}
      </ol>

    </div>
  );
}

export default Nav;
