# Data Table React Component

This component renders a data table.

## Features

* search filter
* results sorting
* modulable length
* navigation shortcuts

## Setup

```javascript
import DataTable from 'data-table-by-blizot'
```

In order to use the component, you must feed it two props:
* `data`: an array of objects containing the data to display
* `layout`: an array of objects with two fields:
  * `key`: the key corresponding to the data's key
  * `header`: the table's header text for the key

Example:
The following code...
```javascript
const data = [{
    firstName: 'Bob',
    lastName: 'Smith',
  }, {
    firstName: 'Alice',
    lastName: 'Jones',
  },
]

const layout = [{
    key: 'firstName',
    header: 'First Name',
  }, {
    key: 'lastName',
    header: 'Last Name',
  },
]

// ...

<DataTable data={data} layout={layout} />
```
...wil render the following table:
| First Name | Last Name |
| ---------- | --------- |
| Bob        | Smith     |
| Alice      | Jones     |

## Styling

You can use the following classes to edit the colors, text, and more:
* `datatable__length-selector`
* `datatable__search-bar`
* `datatable__head`, and `top` in case you want to lower the table's head sticky position
* `datatable__body`
* `datatable__body--highlight`
* `datatable__bottom-actions`
* `datatable__bottom--page-indicator`
* `datatable__seek-input`
* `datatable__shortcuts`
* `datatable__shortcuts-modal`
