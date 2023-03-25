function DateSelector({ name, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type='date' />
    </>
  )
}

export default DateSelector
