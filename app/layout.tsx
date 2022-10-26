import '@styles/minireset.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Server</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
