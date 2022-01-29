import './style.css'

function DownloadBtn(props) {
  return (
    <button className='download-btn'>
      <img src={props.icon} alt="icon" />
      {props.text}
    </button>
  );
}

export default DownloadBtn;
