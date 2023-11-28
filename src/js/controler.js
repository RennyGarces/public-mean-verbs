import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./module.js";
import wordsViews from "./views/wordsViews.js";
import searchWorld from "./views/searchWorld.js";
import getWord from "./views/getWord.js";
import viewButtons from "./views/viewButtons.js";
import bookmarkViews from "./views/bookmarkViews.js";
/* 
if (module.hot) {
  module.hot.accept();
}
 */

//remember to insert your api key in config.js
const showWord = async function () {
  try {
    wordsViews.spiner();
    let id = window.location.hash.slice(1);
    if (!id || id.length === 0) id = "welcome";
    await model.loadWords(id);
    const word = model.objectWords;
    await model.loadVideo(id);

    wordsViews.render(word);
  } catch (err) {
    console.error(err, "bad request 👎 👎 👎");
    wordsViews.errorMessage();
  }
};

const showResult = async function () {
  try {
    let id = getWord.getValueSearch();
    await model.loadWords(id);
    await model.loadVideo(id);

    const word = model.objectWords;
    if (!word) return;
    wordsViews.render(word);
    searchWorld.render(model.getListColumn());
    viewButtons.render(word);
  } catch (err) {
    console.error(err, "bad request 👎 👎 👎");
    searchWorld.errorMessageHeader();
    searchWorld.wordsFirsTime();
    console.clear();
  }
};
const passListwords = function (actualpage) {
  searchWorld.render(model.getListColumn(actualpage));
  const word = model.objectWords;
  if (!word) return;
  viewButtons.render(word);
};

const bookmarkStoreWords = function () {
  if (!model.objectWords.wordFeatures.saved) {
    model.storeWords(model.objectWords.wordFeatures);
  } else {
    model.deleteWords(model.objectWords.wordFeatures);
  }
  bookmarkViews.render(model.objectWords);
  wordsViews.render(model.objectWords);
};
const showFolder = function () {
  bookmarkViews.render(model.objectWords);
};
const printList = function () {
  model.createPdf(model.objectWords.wordsSaving);
};
const init = function () {
  wordsViews.evenHandlersPublisher(showWord);
  wordsViews.avenHandlerStoreWord(bookmarkStoreWords);
  viewButtons.evenHandlerBtns(passListwords);
  getWord.showWordFromSearch(showResult);
  bookmarkViews.evenHandlerfolder(showFolder);
  bookmarkViews.evenPdfbtn(printList);
};
init();
