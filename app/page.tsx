import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Recommendations } from "@/components/Sections/Recommendations";
import { About } from "@/components/Sections/About";
import { Features } from "@/components/Sections/Features";
import { Menu } from "@/components/Sections/Menu";
import { BuildYourBowl } from "@/components/Sections/BuildYourBowl";
import { Subscriptions } from "@/components/Sections/Subscriptions";
import { Events } from "@/components/Sections/Events";
import { Testimonials } from "@/components/Sections/Testimonials";
import { Membership } from "@/components/Sections/Membership";
import { Contact } from "@/components/Sections/Contact";
import { Map } from "@/components/Sections/Map";
import { Footer } from "@/components/Sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white  transition-colors duration-500">
      <Navbar />
      <Hero />
      <Recommendations />
      <About />
      <Features />
      <Menu />
      <BuildYourBowl />
      <Subscriptions />
      <Events />
      <Testimonials />
      <Membership />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
}
