import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type CardVariant = 'stat' | 'metric' | 'fb' | 'highlight';

/**
 * White surface wrapper. The verbatim source classes (.stat-card,
 * .m-card, .fb-card, .h-card) are assigned per-variant; their CSS lives
 * in the owning feature's scss (see CSS DISTRIBUTION MAP).
 */
@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
})
export class CardComponent {
  variant = input<CardVariant>('stat');
  extra = input<string>('');

  classes = computed(() => {
    const base: Record<CardVariant, string> = {
      stat: 'stat-card',
      metric: 'm-card',
      fb: 'fb-card',
      highlight: 'h-card',
    };
    return `${base[this.variant()]} ${this.extra()}`.trim();
  });
}