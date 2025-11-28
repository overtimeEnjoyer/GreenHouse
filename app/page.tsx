import { AboutComplex } from "@/components/AboutComplex";
import { Apartments } from "@/components/Apartments";
import Header from "@/components/Header/Header";
import { Hero } from "@/components/Hero";
import { TechnicalOverview } from "@/components/TechnicalOverview";
import { Yard } from "@/components/Yard";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <AboutComplex />
        <TechnicalOverview />
        <Yard />
        <Apartments />
        <Location />
        <Contact />
        {/*  
         <Architecture />
        <WhyChoose />
         */}
   
      </main>
    </div>
  );
}
