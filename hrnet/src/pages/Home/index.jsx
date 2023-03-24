function Home() {
  function handleSubmit(event) {
    event.preventDefault()

    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const birthDate = event.target.birthDate.value
    const startDate = event.target.startDate.value
    const addressStreet = event.target.addressStreet.value
    const addressCity = event.target.addressCity.value
    const addressState = event.target.addressState.value
    const addressZipCode = event.target.addressZipCode.value
    const department = event.target.department.value

    const employee = {
      firstName,
      lastName,
      birthDate,
      address: {
        street: addressStreet,
        city: addressCity,
        state: addressState,
        zipCode: addressZipCode,
      },
      startDate,
      department,
    }

    console.log(employee)
  }

  return (
    <main className='home'>
      <h2 className='home__title'>Create Employee</h2>
      <form method='post' className='home__form' onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input name='firstName' id='firstName' type='text' />

        <label htmlFor='lastName'>Last Name</label>
        <input name='lastName' id='lastName' type='text' />

        {/* to be replaced with date selector component */}
        <label htmlFor='birthDate'>Date of Birth</label>
        <input name='birthDate' id='birthDate' type='text' />

        <fieldset className='home__form-address-area'>
          <legend>Address</legend>

          <label htmlFor='addressStreet'>Street</label>
          <input name='addressStreet' id='addressStreet' type='text' />

          <label htmlFor='addressCity'>City</label>
          <input name='addressCity' id='addressCity' type='text' />

          {/* to be replaced with dropdown menu component */}
          <label htmlFor='addressState'>State</label>
          <input name='addressState' id='addressState' type='text' />

          <label htmlFor='addressZipCode'>Zip Code</label>
          <input name='addressZipCode' id='addressZipCode' type='text' />
        </fieldset>

        {/* to be replaced with date selector component */}
        <label htmlFor='startDate'>Start Date</label>
        <input name='startDate' id='startDate' type='text' />

        {/* to be replaced with dropdown menu component */}
        <label htmlFor='department'>Department</label>
        <input name='department' id='department' type='text' />

        <button className='home__form-button'>Create Employee</button>
      </form>
    </main>
  )
}

export default Home
