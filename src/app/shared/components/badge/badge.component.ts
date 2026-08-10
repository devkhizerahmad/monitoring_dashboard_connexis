import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { AlertBadge } from '../../../core/models/alert.model';

/**
 * Circle + label badge (critical / minor / normal / upcoming).
 */
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
})
export class BadgeComponent {
  badge = input.required<AlertBadge>();

  lines = computed(() => this.badge().lines ?? [this.badge().label]);
}