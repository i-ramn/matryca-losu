import { TopSection } from '@/app/Home/Main';
import { FreeCalulators } from '@/app/Home/FreeCalculators';
import { About } from './Home/FreeCalculators/About';

export default function Home() {
  return (
    <>
      <TopSection />
      <FreeCalulators />
      <About />
    </>
  );
}
