export interface IDeck {
  success: boolean,
  deck_id: string,
  remaining: number,
  shuffled: boolean,
}

export interface ICard {
  image: string,
  value: string,
  suit: string,
  code: string
}

export interface ICards {
  success: boolean,
  deck_id: string,
  cards: ICard[],
  remaining: number,
}

export interface IError {
  status: number,
  statusText: string,
}