# CambDict
Unofficial cambridge dictionary api.

# Installation

```sh
$ npm i camb-dict
```

# Example

## Get Meaning
```js
const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();

dictionary.meaning("dictionary")
    .then(console.log)
    .catch(console.error);

```

### Response

```js
{
  word: 'dictionary',
  meaning: 'a book that contains a list of words in alphabetical order and explains their meanings, or gives…',
  pronounciation: 'ˈdɪk.ʃən.ər.i',
  type: 'NOUN',
  examples: [
    'I recently heard a radio presenter refer to dictionaries as babble-babble.',
    'The most common results, then, are books that are something like dictionaries, something like encyclopedias and, often, something like cabinets of curiosities.',
    'The divergence can most easily be seen if we compare the definitions of abduction in some recent dictionaries of linguistics and of philosophy.',
    'Since its (activity) meaning is predictable, the supine nominal is seldom listed in dictionaries, and when it is listed, it is not polysemous.',
    'Events are simply property lists or dictionaries; they can have named properties whose values are arbitrary.',
    'We can distinguish between this kind of understanding and the kind of understanding that involves interpretation manuals, dictionaries, inferences and explanations.',
    'Conventional orthography does not systematically represent distinctions in syllabicity like those illustrated in (5), and standard dictionaries ignore them.',
    'The success of this technique depends heavily on the compatibility between the two tag dictionaries being used.',
    'Many sense inventories have been taken from traditional paper-based (and from machine-readable) dictionaries.',
    'Electronic dictionaries covering almost the entire vocabulary are being developed for different languages.',
    "In some instances, the program was used creatively, in combination with external tools such as the users' own dictionaries, knowledge of other languages, or teachers.",
    'The three most crucial explicit lexical instruction and learning strategies are acquiring decontextualised lexis, using dictionaries and inferring from context.',
    "In chap. 5, data confirm the functions of c'est-à-dire as identified in dictionaries.",
    'Japanese grammar dictionaries and reference books have various different systems of wakachigaki.',
    'The annotated bilingual corpus is used in our translation aid system that integrates bilingual corpus, mono-lingual corpus and hand-compiled dictionaries.'
  ],
  audio: [
    {
      type: 'audio/mpeg',
      url: 'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdia/ukdiaph030.mp3'
    },
    {
      type: 'audio/mpeg',
      url: 'https://dictionary.cambridge.org/media/english/us_pron/d/dic/dicti/dictionary.mp3'
    },
    {
      type: 'audio/mpeg',
      url: 'https://dictionary.cambridge.org/media/english/us_pron/d/dic/dicti/dictionary.mp3'
    },
    {
      type: 'audio/ogg',
      url: 'https://dictionary.cambridge.org/media/english/uk_pron_ogg/u/ukd/ukdia/ukdiaph030.ogg'
    },
    {
      type: 'audio/ogg',
      url: 'https://dictionary.cambridge.org/media/english/us_pron_ogg/d/dic/dicti/dictionary.ogg'
    },
    {
      type: 'audio/ogg',
      url: 'https://dictionary.cambridge.org/media/english/us_pron_ogg/d/dic/dicti/dictionary.ogg'
    }
  ]
}
```

## Get Pronounciation

```js
const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();

dictionary.pronounciation("dictionary")
    .then(console.log)
    .catch(console.error);

```

### Response

```js
{
  word: 'dictionary',
  audio: [
    {
      type: 'audio/mpeg',
      url: 'https://dictionary.cambridge.org/media/english/uk_pron/u/ukd/ukdia/ukdiaph030.mp3'
    },
    {
      type: 'audio/mpeg',
      url: 'https://dictionary.cambridge.org/media/english/us_pron/d/dic/dicti/dictionary.mp3'
    },
    {
      type: 'audio/ogg',
      url: 'https://dictionary.cambridge.org/media/english/uk_pron_ogg/u/ukd/ukdia/ukdiaph030.ogg'
    },
    {
      type: 'audio/ogg',
      url: 'https://dictionary.cambridge.org/media/english/us_pron_ogg/d/dic/dicti/dictionary.ogg'
    }
  ]
}
```

# Join My Discord
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)