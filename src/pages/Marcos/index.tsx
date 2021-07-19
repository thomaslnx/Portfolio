import Loader from '../../components/Loader';
import Circles from '../../components/Circles';

import { Container, PageContent } from './styles';

export default function Marcos(): JSX.Element {
  return (
    <>
      <Loader />
      <Container>
        <PageContent>
          <Circles />
        </PageContent>
      </Container>
    </>
  );
}
