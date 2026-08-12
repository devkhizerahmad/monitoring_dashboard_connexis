/**
 * Sidebar navigation model.
 */
import type { IconName } from './generator.model';

export interface NavItem {
  icon: IconName;
  label: string;
  route: string;
}

export interface StoreBadge {
  img: string;
  line1: string;
  line2: string;
  href: string;
}
