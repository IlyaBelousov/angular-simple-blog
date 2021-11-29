import {Injectable} from '@angular/core';
import {IBlogCard} from "./blog/blog.component";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  blogCards: IBlogCard[] = [
    {
      cardId: 1,
      title: 'Title1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam.'
    },
    {
      cardId: 2,
      title: 'Title2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam.'
    },
    {
      cardId: 3,
      title: 'Title3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam.'
    },
    {
      cardId: 4,
      title: 'Title4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam.'
    },
    {
      cardId: 5,
      title: 'Title5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam.'
    },
  ]


  getCards() {
    return this.blogCards
  }

  addCard(card: IBlogCard) {
    this.blogCards.push(card)
  }

  changeCardTitle(card: IBlogCard | undefined) {
    if (card) {
      this.blogCards.forEach(c => c.cardId === card.cardId ? c.title = card.title : c)
    }

  }

  changeCardContent(card: IBlogCard | undefined) {
    if (card) {
      this.blogCards.forEach(c => c.cardId === card.cardId ? c.content = card.content : c)
    }
  }

  deleteCard(card: IBlogCard | undefined) {
    if (card) {
      this.blogCards = this.blogCards.filter(c => c.cardId !== card.cardId)
    }

  }
}
