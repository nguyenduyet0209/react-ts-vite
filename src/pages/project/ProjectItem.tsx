import { useInView } from 'react-intersection-observer'

interface ProjectItemType {
  icon: string
  title: string
  openLink: string
}

export const ProjectItem = ({
  icon,
  title,
  openLink,
}: ProjectItemType): JSX.Element => {
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 1000,
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div className='col-md-4 col-mt-6 col-mm-12'>
      <div
        className='project_item'
        ref={ref}
        style={{
          opacity: inView ? '1' : '0',
          transform: inView ? 'translateY(0px)' : 'translateY(50%)',
        }}
      >
        <div className='icon'>
          <a target='_blank' href={openLink} rel='noreferrer'>
            <img src={icon} alt={title} />
          </a>
        </div>
        <h3 className='title'>{title}</h3>
      </div>
    </div>
  )
}
