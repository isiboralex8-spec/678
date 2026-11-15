import FeaturedStays from '../components/FeaturedStays';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ResortExperiences from '../components/ResortExperiences';
import ScrollToTop from '../components/ScrollToTop';
import SearchBar from '../components/SearchBar';
import SummerOffer from '../components/SummerOffer';
import TrustStats from '../components/TrustStats';
import { useEffect, useState } from 'react';

export default function Home() {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('mrstudio-wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('mrstudio-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleFavorite = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedStays wishlist={wishlist} onToggleFavorite={toggleFavorite} />
        <ResortExperiences />
        <SummerOffer />
        <TrustStats />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
