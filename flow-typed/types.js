// @flow

export type Show = {
  title: string,
  poster: string,
  rating: string,
  year: string,
  description: string,
  imdbID: string,
  trailer: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
