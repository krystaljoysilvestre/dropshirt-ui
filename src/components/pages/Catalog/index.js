import { Container } from './style';

import { Search, Pagination } from 'components/UI/atoms';
import { Filters } from 'components/UI/molecules';
import { Gallery } from 'components/UI/organisms';

const Catalog = () => {
  return (
    <Container>
      <Search label="All Products" />
      <Filters />
      <Gallery loading />
      <Pagination />
    </Container>
  )
};

export default Catalog;
