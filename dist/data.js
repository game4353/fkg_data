import { IDHEADERS } from './manual/header.js';
async function loadTsv(tsvName) {
    return await new Promise((resolve, reject) => {
        fetch(`master/${tsvName}.tsv`).then(res => {
            resolve(res.text());
        }).catch(reject);
    });
}
function parseTsv(tsvString, idHeader) {
    const arr = tsvString.split('\n').map(r => r.split('\t'));
    const headers = arr.shift() ?? [];
    const idCol = headers.indexOf(idHeader);
    if (idCol === -1)
        throw new Error(`Unable to parse tsv with id '${idHeader}'`);
    const dict = {};
    for (const row of arr) {
        const o = {};
        for (let i = 0; i < headers.length; i++)
            o[headers[i]] = row[i];
        dict[o[idHeader]] = o;
    }
    return dict;
}
export const masterData = Object.fromEntries(await Promise.all(Object.entries(IDHEADERS).map(async (arr) => {
    const dataName = arr[0];
    const idHeader = arr[1];
    const tsvString = await loadTsv(dataName);
    const obj = parseTsv(tsvString, idHeader);
    return [dataName, obj];
})));
