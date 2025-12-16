import { Component } from '@angular/core';
import { ConfigService } from '../../../../Config-Service';
import { user } from '../../../../core/Users/users-model';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users:user[]=[];
  constructor(private ConfigService: ConfigService){}
  ngOnInit(){
    this.users=this.ConfigService.getUsers();
  }
}
