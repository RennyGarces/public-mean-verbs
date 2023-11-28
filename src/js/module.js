import { async } from "regenerator-runtime";
import { jsPDF } from "jspdf";
import {
  API_URL,
  YOUTUBE_KEY,
  YOUTUBE_URL,
  RESULT_PER_LIST,
} from "./config.js";
import { getJSONfromAPI } from "./helper.js";
import { getYoutubefromAPI } from "./helper.js";
import wordsViews from "./views/wordsViews.js";
export const objectWords = {
  wordFeatures: {},
  wordsList: [],
  search: {
    resultPerList: RESULT_PER_LIST,
  },
  wordsSaving: [],
};

export const loadWords = async function (id) {
  try {
    const data = await getJSONfromAPI(`${API_URL}/${id}`);
    /////////////////////////////////////////////////////////////////////

    objectWords.wordFeatures = {
      saved: false,
      meaning: data[0].meanings,
      phonetics: data[0].phonetics,
      sourceUrls: data[0].sourceUrls,
      word: data[0].word,
    };
    if (objectWords.wordsSaving.some((el) => el[0] === id)) {
      objectWords.wordFeatures.saved = true;
    } else {
      objectWords.wordFeatures.saved = false;
    }
    objectWords.search.page = 1;
    createList(objectWords.wordFeatures.meaning);
  } catch (err) {
    throw err;
  }
};

export const loadVideo = async function (word) {
  try {
    const data = await getYoutubefromAPI(`${YOUTUBE_URL}${word}${YOUTUBE_KEY}`);
    objectWords.wordFeatures.videoUrl = data.items[0].id.videoId;
  } catch (err) {
    throw err;
  }
};

const createList = function (object) {
  let sum = 0;
  const arrayMoreLength = object
    .map((el) => {
      el.definitions.length > sum && (sum = el.definitions.length);
      return el.definitions;
    })
    .filter((el) => el.length === sum);
  let words = arrayMoreLength[0]
    .map((el) => {
      el.definition.length > sum && (sum = el.definition.length);
      return el.definition;
    })
    .filter((el) => el.length === sum)
    .join("")
    .split(" ")
    .filter(
      (word) =>
        !/[.,\/#!$%\^&\*;:{}=\-_`~()""'`’]/g.test(word) &&
        word.length > 1 &&
        word === word.toLowerCase() &&
        word.length < 15 &&
        isNaN(word)
    );
  [...new Set(words)].map((el) => objectWords.wordsList.unshift(el));
};

export const getListColumn = function (page = objectWords.search.page) {
  objectWords.search.page = page;
  const incial = (page - 1) * objectWords.search.resultPerList;
  const end = page * objectWords.search.resultPerList;
  return objectWords.wordsList.slice(incial, end);
};
const persistBookmarks = function () {
  localStorage.setItem("wordsSaving", JSON.stringify(objectWords.wordsSaving));
};
export const storeWords = function (id) {
  const wordElements = [id.word, id.meaning[0].definitions[0].definition];
  objectWords.wordsSaving.unshift(wordElements);
  if (id.word === objectWords.wordFeatures.word)
    objectWords.wordFeatures.saved = true;
  persistBookmarks();
};

export const deleteWords = function (id) {
  const indexElement = objectWords.wordsSaving.findIndex(
    (el) => el[0] === id.word
  );
  if (indexElement > -1) objectWords.wordsSaving.splice(indexElement, 1);
  if (id.word === objectWords.wordFeatures.word)
    objectWords.wordFeatures.saved = false;
  persistBookmarks();
};

export const createPdf = function (words) {
  const wordsPrint = words
    .map((el, i) => {
      const paragraph = el[1]
        .split(" ")
        .map((el, i) => ((i + 1) % 8 == 0 ? el + "\n" : el))
        .join(" ");
      return `
      ${i + 1}) ${el[0].toUpperCase()}\n
     ${paragraph}\n`;
    })
    .join("");

  const doc = new jsPDF();
  doc.text(`${wordsPrint}`, 10, 10);
  doc.save("a4.pdf");
};

const init = function () {
  const storage = localStorage.getItem("wordsSaving");
  if (storage) objectWords.wordsSaving = JSON.parse(storage);
};
init();
