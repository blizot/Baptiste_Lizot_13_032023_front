import './style.css'

function Notification({ message, id }) {
  return (
    <div className='notification__container'>
      <div className='notification' id={`${id}-notification`}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Notification
