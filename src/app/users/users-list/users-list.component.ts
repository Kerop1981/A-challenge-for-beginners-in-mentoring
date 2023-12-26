import { Component } from '@angular/core';
import { UsersApiService } from '../../users-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../../user-modal/user-modal.component'
import{ UserCardComponent} from '../../user-card/user-card.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  standalone:true,
  imports:[UserCardComponent,CommonModule]
})


export class UsersListComponent {
  userList: any[] = [];

  constructor(
    private usersApiService: UsersApiService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersApiService.getUsers().subscribe((data: any[]) => {
      this.userList = data;
    });
  }

  deleteUser(userId: number) {
    console.log(`Удален пользователь с ID ${userId}`);
  }

  editUser(user: any) {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg' });
    modalRef.componentInstance.user = { ...user };
    modalRef.result.then(
      (result) => {
        console.log('Редактирование завершено', result);
      },
      (reason) => {
        console.log('Редактирование отменено', reason);
      }
    );
  }

  openUserModal() {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg' });
    modalRef.result.then(
      (result) => {
        console.log('Добавление завершено', result);
      },
      (reason) => {
        console.log('Добавление отменено', reason);
      }
    );
  }
}