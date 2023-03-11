"use client";
import dynamic from "next/dynamic";
import { CarouselItems } from "@/components/CarouselItems";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <section className="game-section">
      <h2 className="line-title">trending games</h2>
      <OwlCarousel
        autoPlay
        className="custom-carousel owl-theme"
        autoWidth
        callbacks
        loop
      >
        <CarouselItems />
      </OwlCarousel>
    </section>
  );
}
