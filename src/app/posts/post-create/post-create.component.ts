import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{

  newPost:Post
  nom=""
  prenom=""
  email=""
  tele=""
  mode="create"
  postIndex=0
  


  constructor(private postService :PostService,
    private router:Router,private ActiveRoute:ActivatedRoute,
     private fb:FormBuilder){}

     ngOnInit(): void {

      this.ActiveRoute.paramMap.subscribe(param =>{
        if(param.has('postIndex')){
          this.postService.editMode="edit"
          this.mode=this.postService.editMode
          this.postIndex = +param.get('postIndex')!
          const fpost = this.postService.getPostByIndex(this.postIndex)
          this.f.post.controls.nomInput.setValue(fpost.nom)
          this.f.post.controls.prenomInput.setValue(fpost.prenom)
          this.f.post.controls.emailInput.setValue(fpost.email)
          this.f.post.controls.teleInput.setValue(fpost.tele)
        }
        else{
          this.postService.editMode="create"
          this.mode=this.postService.editMode
        }

        
      })
  
  
    }

  fg =this.fb.group({
    post:this.fb.group({
      nomInput:['',[Validators.required,Validators.minLength(3)]],
      prenomInput:['',[Validators.required,Validators.minLength(3)]],
      emailInput:['',[Validators.required,Validators.minLength(3)]],
      teleInput:['',[Validators.required,Validators.minLength(9)]]
    })
  })

  get f(){return this.fg.controls}

  onAddNewPost(newPost:any){
    this.newPost = new Post(
      newPost.nomInput.value,
      newPost.prenomInput.value,
      newPost.emailInput.value,
      newPost.teleInput.value
      
    )
    
      this.postService.addNewPost(this.newPost)
      this.router.navigate(['/'])
  }

  onEditPost(newPost:any){
    this.newPost= new Post(
      newPost.nomInput.value,
      newPost.prenomInput.value,
      newPost.emailInput.value,
      newPost.teleInput.value
    )

    this.postService.updatePost(this.postIndex,this.newPost)
    this.router.navigate(['/'])
  }
}


