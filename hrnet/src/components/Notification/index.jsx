function Notification({ message, id }) {
  return (
    <div className='notification' id={`${id}-notification`}>
      <p>{message}</p>
    </div>
  )
}

export default Notification
