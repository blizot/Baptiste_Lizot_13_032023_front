function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p>© {year} WealthHealth</p>
    </footer>
  )
}

export default Footer
