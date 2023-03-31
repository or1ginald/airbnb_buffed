import "../globals.css";
import { Navbar } from "./components/Navbar/Navbar";

export const metadata = {
  title: "Airbnb",
  description: "Fullstack btw",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
