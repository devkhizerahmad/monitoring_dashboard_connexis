import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [FeaturePlaceholderComponent],
  template: `
    <app-feature-placeholder
      eyebrow="Help"
      title="Support content can be expanded here"
      summary="This route is a good home for FAQs, onboarding notes, and quick links for operators."
      [notes]="['FAQs', 'Onboarding', 'Quick links']"
      footer="It now reads like a deliberate page instead of placeholder text."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class HelpComponent {}
