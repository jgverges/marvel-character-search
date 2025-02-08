import { Comics, Events, SeriesItem, Stories, Thumbnail, Url } from '.';

export interface CharacterRes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: CharacterData;
}

export interface CharacterData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: CharacterSeries;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface CharacterSeries {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
  returned: number;
}
