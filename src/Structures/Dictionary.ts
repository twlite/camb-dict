import Util from "../Util/Util";
import constants from "../Util/Constants";
import { Meaning } from "../Typings/Meaning";
import { AudioInterface } from "../Typings/Audio";
import { Pronounciation } from "../Typings/Pronounciation";

class Dictionary {

    /**
     * Search meaning of a word
     * @param word Word
     */
    meaning(word: string): Promise<Meaning> {
        return new Promise(async (resolve, reject) => {
            if (typeof word !== "string") reject(new Error("Word must be a string!"));

            const html = await Util.getHTML(`${constants.BASE_URL}${constants.DICT}${word.split(" ").join("-")}`);
            if (!html) return reject(new Error("Not found!"));
            const $ = Util.loadHTML(html);
            const definition = $('meta[itemprop="headline"]').attr("content");
            const m = definition.split("definition: 1. ")[1].split(" 2. ")[0] ? definition.split("definition: 1. ")[1].split(" 2. ")[0] : definition.split("definition: 1. ")[1];

            const pron: AudioInterface[] = [];
            const examples: string[] = [];

            $('source[type="audio/mpeg"]').each((i, elm) => {
                pron.push({
                    type: elm.attribs.type,
                    url: `${constants.BASE_URL}${elm.attribs.src}`
                });
            });

            $('source[type="audio/ogg"]').each((i, elm) => {
                pron.push({
                    type: elm.attribs.type,
                    url: `${constants.BASE_URL}${elm.attribs.src}`
                });
            });

            $('span[class="deg"]').each((i, elm) => {
                if ($(elm).text().length) examples.push($(elm).text().trim());
            });

            const obj = {
                word: definition.split("definition: ")[0].trim(),
                meaning: m.substring(0, m.lastIndexOf(". Learn more.")) || m,
                pronounciation: $('.dipa').first().text(),
                type: $('.dpos').eq(0).text().toUpperCase(),
                examples: examples,
                audio: pron
            };

            return resolve(obj);
        });
    }

    /**
     * Returns pronounciation of a word
     * @param word Word
     */
    pronounciation(word: string): Promise<Pronounciation> {
        return new Promise(async (resolve, reject) => {
            if (typeof word !== "string") reject(new Error("Word must be a string!"));

            const html = await Util.getHTML(`${constants.BASE_URL}${constants.PRON}${word.split(" ").join("-")}`);
            if (!html) return reject(new Error("Not found!"));
            const $ = Util.loadHTML(html);

            const pron: AudioInterface[] = [];

            $('source[type="audio/mpeg"]').each((i, elm) => {
                pron.push({
                    type: elm.attribs.type,
                    url: `${constants.BASE_URL}${elm.attribs.src}`
                });
            });

            $('source[type="audio/ogg"]').each((i, elm) => {
                pron.push({
                    type: elm.attribs.type,
                    url: `${constants.BASE_URL}${elm.attribs.src}`
                });
            });

            const obj = {
                word: $('meta[itemprop="transcript"]').attr("content"),
                audio: pron
            };

            return resolve(obj);
        });
    }

}

export default Dictionary;