import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CoveredGLP — GLP-1 Insurance Denial Appeal Packets" },
      { name: "description", content: "GLP-1 denied by insurance? Upload your denial letter and receive a clear next-step plan, draft appeal letter, doctor message, call script, and document checklist." },
      { property: "og:title", content: "CoveredGLP — GLP-1 Insurance Denial Appeal Packets" },
      { property: "og:description", content: "GLP-1 denied by insurance? Get an appeal packet prepared for you in 24–48 hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "CoveredGLP — GLP-1 Insurance Denial Appeal Packets" },
      { name: "twitter:description", content: "GLP-1 denied by insurance? Get an appeal packet prepared for you in 24–48 hours." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c971532-180c-4629-b329-c7e17ef5ac99/id-preview-964d9938--2254c9dd-64d3-4e3f-b8c4-02da0d8def69.lovable.app-1777338906549.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c971532-180c-4629-b329-c7e17ef5ac99/id-preview-964d9938--2254c9dd-64d3-4e3f-b8c4-02da0d8def69.lovable.app-1777338906549.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
