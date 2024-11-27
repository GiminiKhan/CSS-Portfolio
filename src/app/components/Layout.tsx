import React, { ReactNode } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import '@/app/styles/portfolio.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <main className="container">{children}</main>
    <Footer />
  </>
);

export default Layout;
