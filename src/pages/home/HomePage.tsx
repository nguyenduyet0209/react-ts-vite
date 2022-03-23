import { useEffect } from 'react'
import './style.scss'

function HomePage() {
  useEffect(() => {
    document.title = 'Trang Chủ'
    window.scrollTo(0, 0)
  }, [])

  return (
    <article id='homepage'>
      <h1>Home page</h1>
    </article>
  )
}

export default HomePage
