import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button class="btn">
      {{ label }}
    </button>
  `,
  styles: [`
    .btn {
      background: #0f62fe;
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      font-family: Arial, sans-serif;
    }

    .btn:hover {
      opacity: 0.9;
    }
  `]
})
export class Button {
  @Input() label = 'Hello Angular';
}