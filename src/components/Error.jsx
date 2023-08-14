const Error = ({ children }) => {
  return (
    <div
      className='text-center my-4 bg-red-600 text-white p-3 uppercase font-bold rounded-md'
      role='alert'
    >
      {children}
    </div>
  )
}

export default Error
