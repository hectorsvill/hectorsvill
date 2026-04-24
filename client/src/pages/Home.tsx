import { Nav } from '@/components/Nav';
import { HeroDashboard } from '@/components/HeroDashboard';
import { Projects } from '@/components/Projects';
import { Fpv } from '@/components/Fpv';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroDashboard />
        <Projects />
        <Fpv />
      </main>
      <Footer />
    </>
  );
}
