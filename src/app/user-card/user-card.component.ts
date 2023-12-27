import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone:true,
  imports:[],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input()
  user!: { id: number; name: string; email: string; }; 
  @Output() deleteUserEvent = new EventEmitter<number>();

  constructor(){
    this.user = { id: 1, name: '', email: '' }; 
  }

  deleteUser(): void {
    this.deleteUserEvent.emit(this.user.id);
  }
}
