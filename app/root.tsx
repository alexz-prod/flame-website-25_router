import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './css/index.css';
import Footer from './sections/Footer';
import { PageNav } from './components/PageNav';

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    sizes: '32',
    href: '/favicon-32x32.webp',
  },
  {
    rel: 'icon',
    sizes: '192',
    href: '/favicon-192x192.webp',
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'FlameAcademy – Die Jüngerschaftsschule des Gebetshaus Augsburg' },
    {
      name: 'description',
      content:
        'Die Jüngerschaftsschule des Gebetshauses — Du bist zu mehr berufen, als zu einem netten Leben mit Sonntagsbesuch in der Kirche. Gott ruft dich, Teil seiner Special Forces auf der Erde zu werden. In der FlameAcademy bilden wir dich aus zum Profi im Gebet, Kämpfer im Lobpreis und Nachfolger in Leidenschaft.',
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <a id="top" />
        {children}
        <Footer />
        <PageNav />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
