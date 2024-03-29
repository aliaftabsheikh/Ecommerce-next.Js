import { Navbar } from "@/components";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "900"],
});
export const metadata = {
  title: "Ecommerce Hackathon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ShoppingCartProvider>
          <Navbar />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
