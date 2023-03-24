import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
  const error = useRouteError()
  console.error(error)

  if (!isRouteErrorResponse(error)) { 
    return <p>Oops!</p>
  }

  return (
    <>
      <Header />
      <main>
        <h1>{error.status === 404 ? error.status : 'Oops!'}</h1>
        <p>{error.status === 404 ? 'This page doesn\'t exist' : 'Sorry, an unexpected error has occured:'}</p>
        {error.status !== 404 && 
          <p>{error.statusText || error.message}</p>
        }
        <Link to='/'>Go back to home page</Link>
      </main>
      <Footer />
    </>
  )
}

export default Error
