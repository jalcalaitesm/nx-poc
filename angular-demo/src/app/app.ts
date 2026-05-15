import { Component } from '@angular/core';
import { Button } from './button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Button],
  template: `
    <h1>NX + Angular</h1>

    <app-button label="Hello Angular" />
  `,
})
export class App {}