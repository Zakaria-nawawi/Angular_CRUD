import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   posts:Post[];
  constructor(private postService:PostService,private router:Router){}

  ngOnInit(): void {
   this.posts= this.postService.getAllPosts()
  }

  deletePost(index:number){
    this.postService.deletePost(index);
    this.router.navigate(['/'])
  }

}
