import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error.message)

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-400'>
        Oops!
      </h1>
      <p className='text-center text-3xl font-extrabold mt-20 text-blue-400'>
        Sorry, an unexpected error has occurred in CRM - Clientes.
      </p>
      <p className='text-center'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
