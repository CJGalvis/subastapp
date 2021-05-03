import { Participations } from "./Participations";
import { PostProfile } from "./PostProfile";

export interface Profile {
    img: string;
    name: string;
    from: string;
    username: string;
    qualification: number;
    participations: Array<Participations>;
    posts: Array<PostProfile>;
    saved: Array<PostProfile>;
}