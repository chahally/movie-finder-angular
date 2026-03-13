import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {
  query = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.query.trim()) {
      this.search.emit(this.query);
    }
  }
}