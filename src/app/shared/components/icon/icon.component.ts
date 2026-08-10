import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import type { IconName } from '../../../core/models/generator.model';

/**
 * Inline-SVG registry. Markup lifted VERBATIM from SOURCE_HTML — same
 * paths, same fills, same width/height/viewBox attributes. Icons that are
 * sized by descendant-SVG CSS in the source carry class hooks (b-logo,
 * chev, gen-ic) directly on the <svg>.
 */
const ICON_REGISTRY: Record<IconName, string> = {
  'target-logo': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#111" stroke-width="2.4"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#d32f2f" stroke-width="2.4"/><circle cx="12" cy="12" r="1.8" fill="#111"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 11l9-8 9 8v10h-6v-7h-6v7H3z"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M9 12h8M9 16h8"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M10 21h4"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>`,
  'bolt-fill': `<svg width="14" height="18" viewBox="0 0 14 18"><path d="M9 0L0 10h5l-2 8 9-10H7z" fill="#ffd54f"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9.5 10c0-3 5-3 5 0 0 2-2.5 2-2.5 4"/><circle cx="12" cy="16.6" r=".6"/></svg>`,
  chevron: `<svg class="chev" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#777" stroke-width="1.5"/></svg>`,
  gplay: `<svg viewBox="0 0 24 24"><path d="M3 2l13 10L3 22V2z" fill="#00d3ff"/><path d="M3 2l10 8 4-3L3 2z" fill="#00f076"/><path d="M3 22l14-5-4-3-10 8z" fill="#f44"/><path d="M17 10l4 2-4 2-1-2 1-2z" fill="#fc0"/></svg>`,
  apple: `<svg viewBox="0 0 24 24" fill="#fff"><path d="M16.5 3c.1 1.2-.4 2.4-1.2 3.2-.8.9-2 1.5-3.1 1.4-.1-1.2.4-2.4 1.2-3.2C14.2 3.6 15.4 3 16.5 3zM20 17.2c-.6 1.4-.9 2-1.7 3.2-1.1 1.7-2.6 3.7-4.5 3.7-1.7 0-2.1-1.1-4.4-1.1s-2.8 1.1-4.5 1.1c-1.9 0-3.3-1.8-4.4-3.5C-2.4 15.7-2.7 9.4 2 6.7c1.5-.9 3.2-.8 4.5-.1 1 .5 1.9.5 3 0 1.5-.8 3.4-.9 4.9.1-1.3.8-2.2 2.2-2 4 .2 2 1.5 3.6 3.6 4.5z" transform="scale(.82) translate(2.5 -1)"/></svg>`,
  'bank-logo': `<svg class="b-logo" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#7b1fa2"/><path d="M15 5.5a7 7 0 1 0 4.5 12A8.5 8.5 0 0 1 15 5.5z" fill="#fff"/><circle cx="16" cy="12" r="2.2" fill="#fff"/></svg>`,
  hourglass: `<svg width="24" height="28" viewBox="0 0 24 28" fill="#9e9e9e"><path d="M4 2h16v3H4zM4 23h16v3H4z"/><path d="M5 5h6v8H5zM13 5h6v8h-6zM5 15h6v8H5zM13 15h6v8h-6z" opacity=".55"/><path d="M12 5l-4 8h8zM12 23l4-8H8z"/></svg>`,
  thermo: `<svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="17" r="11" fill="none" stroke="#00bcd4" stroke-width="3"/><path d="M17 10v7" stroke="#00bcd4" stroke-width="3"/></svg>`,
  cloud: `<svg width="20" height="14" viewBox="0 0 24 16" style="margin-top:6px"><path d="M6 16a5 5 0 0 1 0-10 7 7 0 0 1 13 2 4 4 0 0 1-1 8z" fill="#b0bec5"/></svg>`,
  battery: `<svg width="14" height="24" viewBox="0 0 14 24"><rect x="4" y="2" width="6" height="14" rx="3" fill="#fff"/><circle cx="7" cy="18" r="5" fill="#e53935"/><rect x="6" y="8" width="2" height="9" fill="#e53935"/></svg>`,
  gauge: `<svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="17" r="13" fill="none" stroke="#241d4e" stroke-width="2.5"/><path d="M17 17l5-5" stroke="#ffd54f" stroke-width="2.5"/><circle cx="17" cy="17" r="2" fill="#ffd54f"/></svg>`,
  power: `<svg width="30" height="34" viewBox="0 0 30 34"><path d="M16 6l-9 13h6l-2 9 9-13h-6z" fill="#ffd54f"/><rect x="22" y="13" width="5" height="9" rx="1.5" fill="#e53935"/></svg>`,
  transformer: `<svg width="24" height="28" viewBox="0 0 30 34"><path d="M16 6l-9 13h6l-2 9 9-13h-6z" fill="#ffd54f"/><rect x="22" y="13" width="5" height="9" rx="1.5" fill="#43a047"/></svg>`,
  antenna: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 10a8 8 0 0 1 16 0M7.5 10a4.5 4.5 0 0 1 9 0M12 10v9"/><circle cx="12" cy="10" r="1.4"/></svg>`,
  drop: `<svg viewBox="0 0 14 18"><path d="M7 0C7 0 0 8.5 0 12.5A7 7 0 0 0 14 12.5C14 8.5 7 0 7 0z" fill="#f6b93b"/></svg>`,
  'gen-dark': `<svg class="gen-ic" viewBox="0 0 64 42"><rect x="2" y="6" width="60" height="28" rx="4" fill="#1e2530"/><rect x="8" y="0" width="48" height="7" rx="2" fill="#1e2530"/><circle cx="16" cy="20" r="4.5" fill="#fff"/><circle cx="30" cy="20" r="4.5" fill="#fff"/><circle cx="44" cy="20" r="4.5" fill="#fff"/><rect x="8" y="34" width="9" height="7" fill="#1e2530"/><rect x="47" y="34" width="9" height="7" fill="#1e2530"/></svg>`,
  'gen-green': `<svg class="gen-ic" viewBox="0 0 64 42"><rect x="2" y="6" width="60" height="28" rx="4" fill="#22c55e"/><rect x="8" y="0" width="48" height="7" rx="2" fill="#22c55e"/><circle cx="16" cy="20" r="4.5" fill="#fff"/><circle cx="30" cy="20" r="4.5" fill="#fff"/><circle cx="44" cy="20" r="4.5" fill="#fff"/><rect x="8" y="34" width="9" height="7" fill="#22c55e"/><rect x="47" y="34" width="9" height="7" fill="#22c55e"/></svg>`,
  'gen-red': `<svg class="gen-ic" viewBox="0 0 64 42"><rect x="2" y="6" width="60" height="28" rx="4" fill="#ef4444"/><rect x="8" y="0" width="48" height="7" rx="2" fill="#ef4444"/><circle cx="16" cy="20" r="4.5" fill="#fff"/><circle cx="30" cy="20" r="4.5" fill="#fff"/><circle cx="44" cy="20" r="4.5" fill="#fff"/><rect x="8" y="34" width="9" height="7" fill="#ef4444"/><rect x="47" y="34" width="9" height="7" fill="#ef4444"/></svg>`,
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span class="app-icon" [innerHTML]="safeSvg()"></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:contents' },
  styles: [
    `.app-icon{display:inline-block;line-height:0}` + `.app-icon svg{display:block}`,
  ],
})
export class IconComponent {
  private sanitizer = inject(DomSanitizer);

  name = input.required<IconName>();

  safeSvg = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(ICON_REGISTRY[this.name()] ?? ''),
  );
}