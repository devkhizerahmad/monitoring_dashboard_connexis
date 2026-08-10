import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { DonutPercent, DonutSegment } from '../../../core/models/fuel.model';

/**
 * Conic-gradient donut + hole + legend. The conic stop layout is driven
 * by the variant class (.donut.d1 / .donut.d2), VERBATIM from source.
 */
@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
})
export class DonutChartComponent {
  variant = input<'d1' | 'd2'>('d1');
  segments = input<DonutSegment[]>([]);
  centerLines = input<string[]>([]);
  percentLabels = input<DonutPercent[]>([]);
}