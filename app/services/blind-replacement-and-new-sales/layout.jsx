import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'New Blind Sales & Replacement | UC Blinds',
  description: 'Shop new window coverings with expert sales and replacement from UC Blinds. Quality blinds and shades installed across Oregon. Call 541-343-8000.',
  path: '/services/blind-replacement-and-new-sales',
});

export default function ReplacementLayout({ children }) {
  return children;
}
