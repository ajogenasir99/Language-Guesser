import {
    franc,
    francAll
} from 'franc';

import langs from 'langs';
import colors from "colors";

const input = process.argv[2];

try {

    const langiso = franc(input);

    if (langiso === 'und') {
        let msg = "Sorry your input is too short please try again with a longer input"
        console.log(msg.red);
    } else {
        const langobj = langs.where("3", langiso);
        const lang = langobj.name;
        console.log(`Our best guess is: ${lang.green}`);
    }



} catch (err) {
    console.log(err.red);
}