import Container from "../components/common/Container";
import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Container>
          <Header />        
        </Container>
         {children}
          <Footer />
      </body>
    </html>
  );
}
