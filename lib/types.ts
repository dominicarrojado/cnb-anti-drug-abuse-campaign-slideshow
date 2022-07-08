export enum FetchState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Entry = {
  imageUrl: string;
  name: string;
  message: string;
};
