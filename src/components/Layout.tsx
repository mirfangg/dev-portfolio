import { PropsWithChildren } from 'react';

import { Footer, Navbar } from '@/components';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
