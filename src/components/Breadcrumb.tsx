import { Link } from 'react-router-dom'

interface BreadcrumbType {
  pageTitle: string
  parentLink?: string
  parentTitle?: string
}

export const Breadcrumb = ({
  pageTitle,
  parentLink,
  parentTitle,
}: BreadcrumbType): JSX.Element => {
  return (
    <div
      id='nnd_breadcrumb'
      style={{
        backgroundImage:
          "url('http://blog.nhatduyet.me/wp-content/uploads/2021/12/breadcumb-banner.png')",
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='breadcrumb-content'>
              <h1 className='page-title'>{pageTitle}</h1>
              <ul className='breadcrumb'>
                <li>
                  <Link to='/'>Trang chủ</Link>
                </li>
                {parentLink && parentTitle && (
                  <li>
                    <Link to={parentLink}>{parentTitle}</Link>
                  </li>
                )}
                <li>{pageTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
