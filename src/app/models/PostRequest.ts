import {IsUrl, IsDefined} from 'class-validator';

export class PostRequest {

    @IsDefined()
    public title: string;

    @IsDefined()
    public description: string;

    @IsUrl()
    public photo_url: string;

    @IsUrl()
    public video_embed: string;

    @IsDefined()
    public tags: string;

    constructor() {
    }
}
