import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  styles: [`
    nav { display: flex; gap: 1.5rem; padding: 1rem 2rem; background: #f1f5f9; border-bottom: 1px solid #e2e8f0; }
    a { text-decoration: none; color: #3b82f6; font-family: sans-serif; }
    a:hover { text-decoration: underline; }
  `],
  template: `
    <nav>
      <a routerLink="/fleet">Part 1 — Fleet Status</a>
      <a routerLink="/vehicle/VH-42">Part 2 — Vehicle Detail</a>
      <a routerLink="/tracker">Part 3 — Live Tracker</a>
    </nav>
    <router-outlet />
  `,
})
export class AppShell {}

bootstrapApplication(AppShell, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],
});
