import React from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import FoodCategorySection from '@/components/FoodCategorySection';
import RestaurantSection from '@/components/RestaurantSection';
import AppDownloadSection from '@/components/AppDownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <FoodCategorySection />
      <RestaurantSection />
      <AppDownloadSection />
      <Footer />
    </main>
  );
}
