import Loader from '../../components/Loader';
import Circles from '../../components/Circles';
import Header from '../../components/Header';

import { Container, PageContent } from './styles';

export default function Marcos(): JSX.Element {
  return (
    <>
      <Loader />
      <Container>
        <PageContent>
          <Header />
          <Circles />
        </PageContent>
      </Container>
    </>
  );
}
