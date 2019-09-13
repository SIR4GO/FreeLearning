import {IsUrl, IsDefined} from 'class-validator';

export class PostRequest {

    @IsDefined()
    private _title: string;

    @IsDefined()
    private _description: string;

    @IsUrl()
    private _photo_url: string;

    @IsUrl()
    private _video_embed: string;

    @IsDefined()
    private _tags: string;

    constructor() {
    }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get photo_url(): string {
    return this._photo_url;
  }

  set photo_url(value: string) {
    this._photo_url = value;
  }

  get video_embed(): string {
    return this._video_embed;
  }

  set video_embed(value: string) {
    this._video_embed = value;
  }

  get tags(): string {
    return this._tags;
  }

  set tags(value: string) {
    this._tags = value;
  }
}
