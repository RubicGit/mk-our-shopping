import Categories from '@/components/Categories';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import ForYou from '@/components/ForYou';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Categories />
      <ForYou />
      <Testimonials />
      <Footer />
    </>
  );
}
