import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../githubservice.service';
import { User } from '../user';



@Component({
  selector: 'app-gitdetails',
  templateUrl: './gitdetails.component.html',
  styleUrls: ['./gitdetails.component.css']
})
export class GitDetailsComponent implements OnInit {
  user:User;
  repoDetails = [];
  githubserviceService: GithubserviceService;

  constructor(  githubserviceService: GithubserviceService ) {
    this.githubserviceService = githubserviceService
   }

  ngOnInit(){
    this.user = this.githubserviceService.user;
    this.repoDetails = this.githubserviceService.repoData;
  }

}