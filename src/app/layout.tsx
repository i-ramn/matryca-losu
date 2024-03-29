import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Inder, Inter } from 'next/font/google/index';
import Head from 'next/head';

import { LanguageProvider } from '@/contexts/intlContext';
import { Reduxprovider } from '@/layouts/ReduxProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Matryca losu',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${Inter} ${Inder}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="md:text-md text-2xl">
        <Reduxprovider>
          {/* <PersistGate loading={null} persistor={persistor}>  */}
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </Reduxprovider>
      </body>
    </html>
  );
}
