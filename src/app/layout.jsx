import localFont from "next/font/local";
import "../../public/css/globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const firaCode = localFont({
  src: [
    { path: "../../public/fonts/FiraCode-VF.woff2", format: "woff2" },
    { path: "../../public/fonts/FiraCode-VF.woff", format: "woff" }
  ],
  variable: "--font-fira-code",
  weight: "300 700",
});

export const metadata = {
  title: "Fabrício Dev",
  description: "Fabrício Radtke - Tech Lead Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
