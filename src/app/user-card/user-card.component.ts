import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = {id:1,name:'vladimir abraamyan', email:'vova.abraamyan@mail.ru'}
  user1 = {id:2,name:'Maik TYson'}
@Output() deleteUserEvent = new EventEmitter<number>();

deleteUser(){
  this.deleteUserEvent.emit(this.user.id)
}
}
