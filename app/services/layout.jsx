import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Blind Cleaning, Repair & Installation Services | UC Blinds',
  description: 'Explore UC Blinds services: ultrasonic blind cleaning, repair, installation, and new window covering sales across Oregon. Free consultations available.',
  path: '/services',
});

export default function ServicesLayout({ children }) {
  return children;
}
