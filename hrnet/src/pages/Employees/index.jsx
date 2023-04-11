import DataTable from '../../components/DataTable'

import data from '../../assets/mock/employees'

function Employees() {
  const tableLayout = [{
    key: 'firstName',
    header: 'First Name',
  }, {
    key: 'lastName',
    header: 'Last Name',
  }, {
    key: 'startDate',
    header: 'Start Date',
  }, {
    key: 'department',
    header: 'Department',
  }, {
    key: 'birthDate',
    header: 'Date of Birth',
  }, {
    key: 'addressStreet',
    header: 'Street',
  }, {
    key: 'addressCity',
    header: 'City',
  }, {
    key: 'addressState',
    header: 'State',
  }, {
    key: 'addressZipCode',
    header: 'Zip Code',
  },
]

  return (
    <main className='employees'>
      <h2 className='employees__title'>Current Employees</h2>
      <DataTable data={data} layout={tableLayout}/>
    </main>
  )
}

export default Employees
