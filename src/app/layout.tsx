
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Web Agency</title>
    </head>
      <body className='bg-bg-main-color'>{children}</body>
    </html>
  );
}
