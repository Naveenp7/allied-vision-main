import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from '../sections/footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="min-h-screen bg-canvas text-text-primary"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <Header />
      <main className="pt-16 pb-24 md:pt-0 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
