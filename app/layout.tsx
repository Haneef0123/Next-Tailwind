import { Header } from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className=" pt-navigation-height bg-page-gradient">
            {children}
          </main>
          <Footer />
          {/* <CopyrightLinearBanner /> */}
        </div>
        {/* <AnalyticsWrapper /> */}
      </body>
    </html>
  );
}
