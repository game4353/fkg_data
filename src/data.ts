import { Data, DataName, IDHEADERS } from './manual/header.js'

async function loadTsv (tsvName: string): Promise<string> {
  return await new Promise((resolve, reject) => {
    fetch(`master/${tsvName}.tsv`).then(res => {
      resolve(res.text())
    }).catch(reject)
  })
}

function parseTsv (tsvString: string, idHeader: string): any {
  const arr = tsvString.split('\n').map(r => r.split('\t'))
  const headers = arr.shift() ?? []
  const idCol = headers.indexOf(idHeader)
  if (idCol === -1) throw new Error(`Unable to parse tsv with id '${idHeader}'`)
  const dict: any = {}
  for (const row of arr) {
    const o: any = {}
    for (let i = 0; i < headers.length; i++) o[headers[i]] = row[i]
    dict[o[idHeader]] = o
  }
  return dict
}

export const masterData: { 
  [T in DataName]: { [key: string | number]: Data<T> } 
} = Object.fromEntries(await Promise.all(Object.entries(IDHEADERS).map(async arr => {
  const dataName = arr[0] as DataName
  const idHeader = arr[1]
  const tsvString = await loadTsv(dataName)
  const obj = parseTsv(tsvString, idHeader)
  return [dataName, obj]
})))