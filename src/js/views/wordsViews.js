import icons from "url:../../img/icons.svg";
import iconSave from "url:../../img/icons-saved.png";
import GeneralViews from "./generalViews";
class wordViews extends GeneralViews {
  _sectionContainer = document.querySelector(".section__two");
  _errorMessage = `Sorry,maybe you notice that some important words are missing. 
  This is due to problems with the server or because 
  our collaborators have not included the word yet, please try other word.`;

  constructor() {
    super();
    this._styckyNavigation();
  }

  evenHandlersPublisher(handler) {
    /* . The hashchange event is fired when the fragment identifier of the URL changes 
    (the part after the # symbol)The load event is fired 
    when a resource and its dependent resources have 
    finished loading. */
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  avenHandlerStoreWord(handler) {
    this._sectionContainer.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn__save");
      if (!btn) return;
      handler();
    });
  }
  _createMarkupWords() {
    let objectWord = this._objectWord.wordFeatures;

    return `<section class="section__two">
        <div class="section__two video__audio">
        <div>
        <iframe  class="you__tube" src="https://www.youtube.com/embed/${
          objectWord.videoUrl
        }" 
        title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        </div>
        <audio controls class ="audio">
              audio
              <source src="${objectWord.phonetics
                .map((el) => el.audio)
                .find((el) => el.length > 10)}" type="audio/mp3" />
        </audio>
        </div>
        <div class="word__container">
          <div class="word__phrase  word__container__words">
           
            <p class="word__title">${objectWord.word}</p>
          </div>          
          <div class="word__phrase  word__container__words">
            <p class="word__title">${objectWord.phonetics.map((el) => {
              if (el.text) return el.text;
            })}</p>
         
            <p><a class="word__sourceUrls" href="https://www.merriam-webster.com/assets/mw/static/pdf/help/guide-to-pronunciation.pdf" 
            target ="blank">
             how to read phonetics? check here</a></p>
         </div>
            <div class=" word__synAnt">
             ${this._cardExemples()} 
             <button class="btn__save">
                 <img class="btn__save__icon btn__save${
                   this._objectWord.wordFeatures.saved ? "__saved" : ""
                 }"
                  src="${iconSave}" alt="icon-saved" 
                 >
                   <p class="word__title">${
                     !this._objectWord.wordFeatures.saved
                       ? "Save this word!"
                       : "this Word was saved "
                   }</p>   
               </button>
             
           </div>
              
          <div class="word__meaning section__two__flex">
          
            <ul class="word__meaning__ul section__two__flex"><p class="word__title"> Definitions</p> 
            ${objectWord.meaning
              .map((el) => {
                return `<li> ${Object.entries(...el.definitions)[0][1]}</li>`;
              })
              .join(" ")}
              </ul>
              <ul class="word__meaning__ul section__two__flex "><p class="word__title"> Examples
              </p> 
             
              ${objectWord.meaning
                .map((el) => {
                  if (el.definitions[0].example)
                    return `<li>${el.definitions[0].example}</li>`;
                })
                .join(" ")}
                 <p><a  class="word__sourceUrls" href="https://en.wikipedia.org/wiki/${
                   objectWord.word
                 }" target ="blank">Check your word (${
      objectWord.word
    })in wikipedia</a></p>
                </ul>
              
          </div>
          <div class="word__source word__container__words">
            <svg class="word__info-icon">
              <use href="${icons}#icon-upload-cloud"></use>
            </svg>
            <a target="_blank" href="${
              objectWord.sourceUrls
            }" class="word__sourceUrls"> ${objectWord.sourceUrls[0]}</a>
          </div>
        </div>
      </section>`;
  }

  _cardExemples() {
    let card = [];
    const objectWord = this._objectWord.wordFeatures;
    if (objectWord.meaning.find((el) => el.synonyms.length > 0))
      card.push(
        `<div class="word__synAnt__div">
              <p class="word__synAnt__div__synonyms"> Synonyms:
           ${objectWord.meaning
             .reduce((acc, el) => {
               if (el.synonyms.length > 0) acc = el.synonyms;
               return acc;
             }, [])
             .slice(0, 5)}
        </p> </div>`
      );
    if (objectWord.meaning.find((el) => el.antonyms.length > 0))
      card.push(`<div class="word__synAnt__div">
              <p class="word__synAnt__div__antonyms"> Antonyms:
           ${objectWord.meaning
             .reduce((acc, el) => {
               if (el.antonyms.length > 0) acc = el.antonyms;
               return acc;
             }, [])
             .slice(0, 5)}
        </p> </div>`);
    return card.join("");
  }
  _styckyNavigation() {
    const header = document.querySelector(".nav__header");
    const search = document.querySelector(".container__search");
    const styckyNavigation = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        search.classList.add("search__floating");
      } else {
        search.classList.remove("search__floating");
      }
    };

    const headerObserver = new IntersectionObserver(styckyNavigation, {
      root: null,
      threshold: 0.5,
    });
    headerObserver.observe(header);
  }
}

export default new wordViews();
