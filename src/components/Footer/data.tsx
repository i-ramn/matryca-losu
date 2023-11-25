import Instagram from '@/public/icons/Instagram.svg';
import Facebook from '@/public/icons/facebook.svg';
import TikTok from '@/public/icons/tiktok.svg';
import { MessageIds } from '@/types/i18n';

interface FooterNav {
  title: MessageIds;
  href: string;
}

interface SocialMedias extends Omit<FooterNav, 'title'> {
  imageSrc: string;
}

export const socialMedias: SocialMedias[] = [
  { imageSrc: TikTok, href: '' },
  { imageSrc: Instagram, href: '' },
  { imageSrc: Facebook, href: '' },
];

export const siteMap: FooterNav[] = [
  {
    title: 'footer.faq',
    href: '',
  },
  {
    title: 'footer.contact',
    href: '',
  },
  {
    title: 'footer.regulations',
    href: '',
  },
  {
    title: 'footer.privacy-policy',
    href: '',
  },
];

export const footerNav: FooterNav[] = [
  { title: 'calculator', href: '' },
  { title: 'navigation.AboutTheMethod', href: '' },
  { title: 'footer.chose', href: '' },
  { title: 'footer.what-is', href: '' },
];
