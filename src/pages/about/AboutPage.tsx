import { useEffect } from 'react'

function AboutPage() {
  useEffect(() => {
    document.title = 'Giới thiệu'
    window.scrollTo(0, 0)
  }, [])

  return (
    <article id='about-us'>
      <h1>About Us</h1>
    </article>
  )
}

export default AboutPage
