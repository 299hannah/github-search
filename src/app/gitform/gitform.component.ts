import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-gitform',
  templateUrl: './gitform.component.html',
  styleUrls: ['./gitform.component.css']
})
export class GitformComponent implements OnInit {
  username: string;
  githubserviceService:GithubserviceService;



submitUsername(){
  this.githubserviceService.getUserData(this.username);
}

  constructor(githubserviceService:GithubserviceService) {
    this.githubserviceService=githubserviceService;
   }

  ngOnInit(): void {
  }

}
