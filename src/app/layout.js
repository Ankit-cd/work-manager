import localFont from "next/font/local";
import "./globals.css";
import CustomNavabar from "@/components/CustomNavabar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import UserProvider from "@/context/userProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Work Manager",
  description: "You can add remove and see all of your working tasks that is pending or completed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <UserProvider>
        <ToastContainer/>
        <CustomNavabar/>
        <div className="p-2">{children}</div>
        <Footer/>
      </UserProvider>
        
      </body>
    </html>
  );
}
