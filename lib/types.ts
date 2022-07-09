export enum FetchState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum Color {
  VIOLET = 'violet',
  CYAN = 'cyan',
  RED = 'red',
  YELLOW = 'yellow',
}

export enum Direction {
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
  LEFT = 'left',
}

export type Entry = {
  imageUrl: string;
  name: string;
  message: string;
  bgColor: Color;
  bgDirection: Direction;
  animationDelay: number;
};
