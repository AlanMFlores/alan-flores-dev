import { useRouter } from 'next/router';
import Header from '@component/components/sections/Header';
import Footer from '@component/components/sections/Footer';

const ProjectDetails = ({project}) => {
  const router = useRouter();
  const { slug } = router.query;

  // Lógica para obtener los detalles del proyecto según el "slug" recibido

  return (
    <>
      <Header/>
        <div>
          {/* Muestra los detalles del proyecto */}
          <h1>{project.title}</h1>
          {/* Otros elementos de detalles del proyecto */}
        </div>
      <Footer/>
    </>
  );
};

export async function getStaticProps(context) {
  const { slug } = context.params;

  const res = await fetch('../../data/projects.json')
  const data = await res.json();

  const project = data.find((project) => project.slug === slug)

  return {
    props: {
      project,
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('../../data/projects.json')
  const data = await res.json();

  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default ProjectDetails;
