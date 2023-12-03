import { About } from '@/app/Home/components/About';
import { Advantages } from '@/app/Home/components/Adnvantages';
import { FreeCalulators } from '@/app/Home/components/FreeCalculators';
import { TopSection } from '@/app/Home/components/Main';
import { MoreAbout } from '@/app/Home/components/MoreAbout';
import { Payments } from '@/app/Home/components/Payments';
import { SocialMedia } from '@/app/Home/components/SocialMedia';
import { TwoWays } from './Home/components/TwoWays';

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
