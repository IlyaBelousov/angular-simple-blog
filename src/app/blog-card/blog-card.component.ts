import {Component, Input, OnInit} from '@angular/core';
import {IBlogCard} from "../blog/blog.component";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent implements OnInit {
  @Input() iterCard: IBlogCard | undefined

  constructor() {
  }

  ngOnInit(): void {
  }

}
