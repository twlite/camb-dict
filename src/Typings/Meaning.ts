import { AudioInterface } from "./Audio";

export interface Meaning {
    word: string;
    meaning: string;
    pronounciation: string;
    type: string;
    examples: string[];
    audio: AudioInterface[];
}