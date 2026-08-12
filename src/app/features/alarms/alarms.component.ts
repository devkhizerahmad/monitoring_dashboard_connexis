import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

@Component({
  selector: 'app-alarms',
  standalone: true,
  imports: [FeaturePlaceholderComponent],
  template: `
    <app-feature-placeholder
      eyebrow="Alarms"
      title="Alarm workflow coming soon"
      summary="We can plug in critical alerts, acknowledgement flows, and escalation states here once the data source is connected."
      [notes]="['Critical alarms', 'Acknowledgements', 'Escalation states']"
      footer="The current route is now intentional and visually consistent with the rest of the dashboard."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class AlarmsComponent {}
