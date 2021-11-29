import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";
import {ModalService} from "../modal.service";


export interface IBlogCard {
  cardId: number
  title: string
  content: string
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  constructor(private CardService: CardService,
              private ModalService: ModalService) {
  }

  blogCards = this.CardService.getCards()
  title: string = 'Блог'
  newCard: IBlogCard = {
    cardId: Math.floor(Math.random() * 100 + Math.random() * 10),
    title: '',
    content: ''
  }

  ngOnInit(): void {
  }

  changeNewCardTitle(title: string) {
    this.newCard.title = title
  }

  changeNewCardContent(content: string) {
    this.newCard.content = content
  }

  onClose(id: string) {
    this.ModalService.close(id)
  }

  saveNewCard(modalId: string) {
    this.ModalService.close(modalId)
    this.CardService.addCard(this.newCard)
  }

  openModal(id: string) {
    this.ModalService.open(id);
  }

}

