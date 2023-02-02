import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mode=""
  constructor(private postService:PostService){}
  ngOnInit(): void {
    this.mode= this.postService.editMode
  }
}
