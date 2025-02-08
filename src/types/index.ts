export interface Events {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

export interface Item4 {
  resourceURI: string;
  name: string;
}
export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}
export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: string;
}
export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Url {
  type: string;
  url: string;
}
export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}
export interface ComicItem {
  resourceURI: string;
  name: string;
}
export interface SeriesItem {
  resourceURI: string;
  name: string;
}

export * from './Character';
export * from './CharacterComics';
export * from './CharacterDetail';
