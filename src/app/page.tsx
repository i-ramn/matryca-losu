import { TopSection } from '@/app/Home/Main';
import { FreeCalulators } from '@/app/Home/FreeCalculators';
import { About } from './Home/About';
import { Advantages } from './Home/Adnvantages';
import { MoreAbout } from './Home/MoreAbout';

export default function Home() {
  return (
    <>
      <TopSection />
      <FreeCalulators />
      <About />
      <Advantages />
      <MoreAbout />
    </>
  );
}
