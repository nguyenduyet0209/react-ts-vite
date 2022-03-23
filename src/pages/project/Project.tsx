import { useEffect } from 'react'

import { Breadcrumb } from '../../components/Breadcrumb'
import { dataListProject } from '../../utils/dataList'
import { ProjectItem } from './ProjectItem'

import './style.scss'

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Breadcrumb pageTitle='Sản Phẩm' />

      <section className='project_page'>
        <div className='container'>
          <div className='row'>
            {dataListProject.map(item => (
              <ProjectItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                openLink={item.openLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectPage
