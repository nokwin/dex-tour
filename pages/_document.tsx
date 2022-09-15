import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-screen">
      <Head />
      <body className="bg-custom-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
