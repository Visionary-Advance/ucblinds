import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Ultrasonic Blind Cleaning | UC Blinds',
  description: "Restore your blinds with UC Blinds' eco-friendly ultrasonic cleaning. Deep, gentle cleaning with convenient pickup across Oregon. Call 541-343-8000.",
  path: '/services/ultra-sonic-blind-cleaning',
});

export default function CleaningLayout({ children }) {
  return children;
}
