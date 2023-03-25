import DateSelector from '../../components/DateSelector'
import DepartmentDropdown from '../../components/DepartmentDropdown'
import StateDropdown from '../../components/StateDropdown'
import Notification from '../../components/Notification'

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

    const notification = document.getElementById('created-employee-notification')
    notification.classList.add('visible')
    setTimeout(() => {
      notification.classList.remove('visible')
    }, 1500);

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

        <DateSelector name='birthDate' label='Date of Birth' />

        <fieldset className='home__form-address-area'>
          <legend>Address</legend>

          <label htmlFor='addressStreet'>Street</label>
          <input name='addressStreet' id='addressStreet' type='text' />

          <label htmlFor='addressCity'>City</label>
          <input name='addressCity' id='addressCity' type='text' />

          <StateDropdown />

          <label htmlFor='addressZipCode'>Zip Code</label>
          <input name='addressZipCode' id='addressZipCode' type='number' />
        </fieldset>

        <DateSelector name='startDate' label='Start Date' />

        <DepartmentDropdown />

        <button className='home__form-button'>Create Employee</button>
      </form>

      <Notification message='Employee created!' id='created-employee' />
    </main>
  )
}

export default Home
