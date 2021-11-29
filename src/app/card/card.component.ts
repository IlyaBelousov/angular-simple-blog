import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBlogCard} from "../blog/blog.component";
import {CardService} from "../card.service";
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private CardService: CardService,
              private ModalService: ModalService) {
  }

  card: IBlogCard | undefined;
  blogCards = this.CardService.getCards()


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('cardId'));
    this.card = this.blogCards.find(c => c.cardId === cardIdFromRoute)
  }

  onCardTitleChange() {

  }

  onCardContentChange() {

  }

  openModal(modalId: string) {
    this.ModalService.open(modalId)
  }

  saveCardChanges() {
    this.CardService.changeCardTitle(this.card)
    this.CardService.changeCardContent(this.card)
  }

  deleteCard(modalId: string) {
    this.CardService.deleteCard(this.card)
    this.ModalService.close(modalId)
  }

  cancelDelete(modelId: string) {
    this.ModalService.close(modelId)
  }
}
