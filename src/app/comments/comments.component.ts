import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEqffjJCMc6Fs5oHJ-pMSFkC53sAiEg0RFMCb_YK0ZQ&s" alt="">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit incidunt rem? Nulla, temporibus. Modi nostrum odit eum atque? Soluta molestias distinctio magnam cumque dignissimos reiciendis accusamus praesentium veritatis obcaecati.</p>
  `,
  styles: `
  img {
    width: 100%,
    height: auto;
  }`
})
export class CommentsComponent {

}
