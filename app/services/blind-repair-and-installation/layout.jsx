import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Blind Repair & Installation | UC Blinds',
  description: 'Professional blind repair and installation across Oregon. Fix broken blinds or get expert installation from UC Blinds. Free consultation — call 541-343-8000.',
  path: '/services/blind-repair-and-installation',
});

export default function RepairLayout({ children }) {
  return children;
}
