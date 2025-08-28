import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <title>Adam</title>
      </head>
      <body className="bg-white text-gray-800 overflow-x-hidden">
        <div className="overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
