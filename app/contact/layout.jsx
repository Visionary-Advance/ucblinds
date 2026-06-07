import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact UC Blinds | Book a Free Consultation',
  description: 'Contact UC Blinds for blind cleaning, repair, installation, or new window coverings in Oregon. Book a free consultation — call 541-343-8000 today.',
  path: '/contact',
});

export default function ContactLayout({ children }) {
  return children;
}
