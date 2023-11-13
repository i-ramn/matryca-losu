import { TopSection } from '@/app/Home/Main';
import { FreeCalulators } from '@/app/Home/FreeCalculators';
import { About } from './Home/FreeCalculators/About';
import { Advantages } from './Home/Adnvantages';

export default function Home() {
  return (
    <>
      <TopSection />
      <FreeCalulators />
      <About />
      <Advantages />
    </>
  );
}
