import { GetServerSideProps, GetStaticProps } from 'next';
import { PrismaClient, Cantante, Cancion } from '@prisma/client';

type HomeProps = {
  cantantes: CantanteWithCanciones[];
};

type CantanteWithCanciones = Cantante & {
  cancion: Cancion[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const prisma = new PrismaClient();

  const cantantes = await prisma.cantante.findMany({
    include: {
      cancion: true,
    },
  });

  return {
    props: {
      cantantes,
    },
  };
};

const Home: React.FC<HomeProps> = ({ cantantes }) => {
  return (
    <div>
      <h1>Cantantes y canciones</h1>
      {cantantes.map((cantante) => (
        <div key={cantante.idcantante}>
          <h2>{cantante.nombre}</h2>
          <ul>
            {cantante.cancion.map((cancion) => (
              <li key={cancion.idcancion}>{cancion.nombre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
