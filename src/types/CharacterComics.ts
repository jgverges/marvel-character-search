import { Events, Stories, Thumbnail, Url } from '.';

export interface ComicsRes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ComicData;
}

export interface ComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: ComicsSeries;
  variants: ComicVariant[];
  collections: ComicCollection[];
  collectedIssues: CollectedIssue[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}
export interface ComicVariant {
  resourceURI: string;
  name: string;
}
export interface ComicCollection {
  resourceURI: string;
  name: string;
}

export interface CollectedIssue {
  resourceURI: string;
  name: string;
}
export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface ComicsSeries {
  resourceURI: string;
  name: string;
}

export interface Date {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Image {
  path: string;
  extension: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: CharactersItem[];
  returned: number;
}

export interface CharactersItem {
  resourceURI: string;
  name: string;
}
