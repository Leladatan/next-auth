import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from "@/components/Header";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next-auth',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
            <Header />
            <main className="bg-neutral-600 p-6 h-full">
                {children}
            </main>
        </AuthProvider>
      </body>
    </html>
  )
}
