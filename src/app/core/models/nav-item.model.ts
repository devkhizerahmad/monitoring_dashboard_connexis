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
  icon: IconName;
  line1: string;
  line2: string;
}