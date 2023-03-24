function DropdownMenu({ name, options, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        {options.map((option, index) => 
          <option value={option.value} key={`${index}-${option.value}`}>{option.text}</option>)}
      </select>
    </>
  )
}

export default DropdownMenu
