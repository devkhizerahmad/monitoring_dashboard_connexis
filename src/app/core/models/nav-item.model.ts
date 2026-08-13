/**
 * Sidebar navigation model.
 */

export interface NavItem {
  symbol: string;
  label: string;
  route: string;
}

export interface StoreBadge {
  img: string;
  line1: string;
  line2: string;
  href: string;
}
