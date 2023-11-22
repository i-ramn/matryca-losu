import { TopSection } from '@/app/Home/Main';
import { FreeCalulators } from '@/app/Home/FreeCalculators';
import { About } from '@/app/Home/About';
import { Advantages } from '@/app/Home/Adnvantages';
import { MoreAbout } from '@/app/Home/MoreAbout';
import { SocialMedia } from '@/app/Home/SocialMedia';
import { TwoWays } from './Home/TwoWays';
import { Payments } from '@/app/Home/Payments';

export default function Home() {
  return (
    <>
      <TopSection />
      <FreeCalulators />
      <About />
      <Advantages />
      <MoreAbout />
      <SocialMedia />
      <TwoWays />
      <Payments />
    </>
  );
}
