import { useState } from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import { menuList } from '../utils/menuList'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = (e: any) => {
    e.preventDefault()
    setIsOpenMenu(true)
    document.body.style.overflowY = 'hidden'
  }

  const handleCloseMenu = (e: any) => {
    e.preventDefault()
    setIsOpenMenu(false)
    document.body.style.overflowY = 'auto'
  }
  // mai sẽ làm nốt phần dự án đã làm
  // liên hệ

  const handleCloseMenuFromLink = () => {
    setIsOpenMenu(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <header>
      <nav className='main_menu'>
        <div className='container'>
          <div className='row items_center'>
            <div className='col-md-4 col-mm-8'>
              <div className='logo'>
                <Link to='/'>
                  <img src={logo} alt='nhatduyet.me' />
                </Link>
              </div>
            </div>
            <div className='col-md-8 col-mm-4'>
              <button className='btn_open' onClick={handleOpenMenu}>
                &#9776;
              </button>

              <div
                className={isOpenMenu ? 'modal_sidebar open' : 'modal_sidebar'}
              >
                <div className='modal_content'>
                  <div className='logo'>
                    <Link to='/'>
                      <img src={logo} alt='nhatduyet.me' />
                    </Link>
                  </div>
                  <ul className='menu_list'>
                    {menuList.map(menu => (
                      <li key={menu.id}>
                        <CustomLink
                          to={menu.to}
                          onClick={handleCloseMenuFromLink}
                        >
                          {menu.name}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                  <button className='btn_close' onClick={handleCloseMenu}>
                    &#10006;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function CustomLink({ children, to, ...props }: LinkProps): JSX.Element {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      style={{
        background: match ? '#f59330' : 'none',
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}
