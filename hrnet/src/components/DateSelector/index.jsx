function DateSelector({ name, label }) {
  function showPicker(event) {
    event.target.showPicker()
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type='date' onClick={showPicker} onFocus={showPicker} />
    </>
  )
}

export default DateSelector
