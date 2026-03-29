import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Issues from "@/components/Issues";
import GetInvolved from "@/components/GetInvolved";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Issues />
        <GetInvolved />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
