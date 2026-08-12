import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="placeholder-shell">
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h1>{{ title() }}</h1>
      <p class="summary">{{ summary() }}</p>

      <div class="notes" *ngIf="notes().length">
        <span class="note" *ngFor="let note of notes()">{{ note }}</span>
      </div>

      <div class="footer-copy">{{ footer() }}</div>
    </section>
  `,
  styles: [
    `
      .placeholder-shell {
        min-height: 260px;
        border-radius: 12px;
        padding: 28px;
        background:
          radial-gradient(circle at top left, rgba(61, 90, 254, 0.14), transparent 30%),
          linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 247, 247, 0.92));
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
        color: #222;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 14px;
      }
      .eyebrow {
        margin: 0;
        font-size: 11px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #6f7481;
        font-weight: 800;
      }
      h1 {
        margin: 0;
        font-size: clamp(28px, 4vw, 42px);
        line-height: 1;
        letter-spacing: -0.03em;
      }
      .summary {
        margin: 0;
        max-width: 62ch;
        color: #555;
        font-size: 14px;
        line-height: 1.6;
      }
      .notes {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .note {
        border-radius: 999px;
        padding: 7px 12px;
        background: rgba(37, 99, 235, 0.08);
        color: #244a9a;
        font-size: 12px;
        font-weight: 700;
      }
      .footer-copy {
        margin-top: 4px;
        font-size: 12px;
        color: #7a808b;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePlaceholderComponent {
  eyebrow = input('Coming Soon');
  title = input.required<string>();
  summary = input.required<string>();
  notes = input<string[]>([]);
  footer = input('The layout is ready, and this section can be wired up next.');
}
