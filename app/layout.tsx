import '@/app/ui/global.css';
import { lato } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
