"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <Header onBookClick={openModal} />
      <Hero onBookClick={openModal} />
      <Gallery />
      <About />
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
