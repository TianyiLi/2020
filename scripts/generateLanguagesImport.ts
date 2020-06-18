import { camelCase } from 'lodash'
import path from 'path'
import fs from 'fs'

const languagesDir = path.join(__dirname, '../languages/')
const targetFilename = path.join(__dirname, '../src/utils/language/languages.ts')
const languages = fs.readdirSync(languagesDir)
  .map((filename) => filename.split('.'))
  .map((splitted) => splitted.slice(0, splitted.length - 1).join(''))

const defaultLanguage = languages
  .find((language) => JSON.parse(fs.readFileSync(path.join(__dirname, '../languages/', `${language}.json`)).toString()).isDefault)

if (!defaultLanguage) {
  throw new Error('There are no language that is set as default.')
}

if (!languages.includes(defaultLanguage)) throw new Error('Invalid default language.')

const result = `
// !WARNING! This file is auto-generated by /scripts/generateLanguagesImport, so all your modifications would be replaced.

import { LanguagePackSet } from '.'
${languages.map((language) => `import ${camelCase(language)} from '@/../languages/${language}.json'`).join('\n')}

export type LanguageType = ${languages.map((language) => `'${language}'`).join(' | ')}

export const defaultLanguageType: LanguageType = '${defaultLanguage}'

export const availableLanguageTypes: LanguageType[] = [${languages.map((language) => `'${language}'`).join(', ')}]

export const languagePackSet: LanguagePackSet = {
  ${languages.map((language) => `${language === camelCase(language) ? language : `'${language}'`}: ${camelCase(language)}`).join(',\n  ')}
}
`.trimStart()

fs.writeFileSync(targetFilename, result)