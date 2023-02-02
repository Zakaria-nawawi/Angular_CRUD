import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  editMode="create"
  posts:Post[]=[
    {
      nom:"ahmed", 
      prenom:"fariss",
      email:"ahmed@gmail.com",
      tele:"+212 612 345 789"
    },
    {
      nom:"mohamed", 
      prenom:"dawi",
      email:"dawi@gmail.com",
      tele:"+212 666 000 222"
    }
  ]

  constructor() { }

  getAllPosts(){
    return this.posts
  }

  updatePost(index:number,newPost:Post){
    this.posts[index] = newPost
  }

  getPostByIndex(index:number){
    return this.posts[index]
  }



  deletePost(index:number){
    this.posts.splice(index,1)
  }

  addNewPost(post:Post){
    this.posts.push(post);
  }
}
