import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  posts: Observable<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts()
      .pipe(
        tap((item) => {console.log(item);})
      );
  }

  addItem() {
    this.postService.registPost();
    console.log('regist ok..');
  }
}
