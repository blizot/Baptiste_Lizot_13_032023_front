import DropdownMenu from '../DropdownMenu'

function DepartmentDropdown() {
  const options = [
    {
      text: 'Sales',
      value: 'Sales',
    },
    {
      text: 'Marketing',
      value: 'Marketing',
    },
    {
      text: 'Engineering',
      value: 'Engineering',
    },
    {
      text: 'Human Resources',
      value: 'Human Resources',
    },
    {
      text: 'Legal',
      value: 'Legal',
    },
  ]

  return <DropdownMenu name='department' label='Department' options={options} />
}

export default DepartmentDropdown
