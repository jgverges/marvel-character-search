import { Comics, SeriesItem, Stories, Thumbnail, Url } from '.';

export interface DetailRes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DetailData;
}

export interface DetailData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Detail[];
}

export interface Detail {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: DetailSeries;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface DetailItem {
  resourceURI: string;
  name: string;
}

export interface DetailSeries {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
  returned: number;
}

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
