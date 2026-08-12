import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

@Component({
  selector: 'app-outage',
  standalone: true,
  imports: [FeaturePlaceholderComponent],
  template: `
    <app-feature-placeholder
      eyebrow="Outage"
      title="Outage history and recovery can live here"
      summary="A proper outage page should show event timelines, affected assets, and recovery progress."
      [notes]="['Incident timeline', 'Affected assets', 'Recovery status']"
      footer="This gives the route real UX value while the backend integration is still pending."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class OutageComponent {}
