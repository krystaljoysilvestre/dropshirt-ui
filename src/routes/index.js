import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Catalog, Product } from 'components/pages';
import { PublicLayout } from 'components/templates';

export const AppRouter = () => {
  const wrap = (component) => (
    <PublicLayout>
      {component}
    </PublicLayout>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={wrap(<Catalog />)} />
        <Route path="product/:productId" element={wrap(<Product />)} />
      </Routes>
    </BrowserRouter>
  )
}
