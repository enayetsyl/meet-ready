import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import LeftSideBer from "@/components/LeftSideBer/LeftSideBer";
import Container from "@/components/container/Container";
import Footer from "@/components/Footer/Footer";
import BottomBar from "@/components/BottomBar/BottomBar";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "MeetReady",
  description: "Generated by Tech Army",
};

export default  async function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className="">
       <main className="flex flex-col bg-purple-100">
          <Navbar />
          <div className="flex flex-row">
            <LeftSideBer />
            <Container>{children}</Container>
          </div>
          <BottomBar/>
          <Footer />
        </main>
      </body>
    </html>
  );
}
