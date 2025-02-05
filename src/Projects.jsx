import { useFetchProjects } from './fetchProjects';

export default function Projects() {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className='projects'>
        <h2>loading...</h2>
      </section>
    );
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
        <div className='projects-center'>
          {projects.map((project) => {
            const { id, title, img, url } = project;
            return (
              <a
                key={id}
                href={url}
                target='_blank'
                rel='noreferrer'
                className='project'
              >
                <img src={img} alt={title} className='img' />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
