import GeneralViews from "./generalViews";

class SearchWorld extends GeneralViews {
  _sectionContainer = document.querySelector(".section__one");
  _moveScrollPostion = document.getElementById("scroll");
  _sectionContainerHeader = document.querySelector(".search__error__container");
  _errorMessage = `Please try again, we can't ge that word.`;

  constructor() {
    super();
    this._wordsFirsTime();
  }

  _wordsFirsTime() {
    const markup = this._pushWords(this.arryWords);
    this._cleanContainer(this._sectionContainer);
    this._sectionContainer.insertAdjacentHTML("afterbegin", markup);
  }

  _createMarkupWords() {
    this._cleanScrollBar();
    return this._pushWords(this._objectWord);
  }
  _pushWords(array = this.arryWords) {
    this.arryWords = array;
    return array
      .map(
        (el) => `<ul class="section__one__ul__words">
           <li class="section__one__li__words">
             <a  href="#${el}"><span>${el}</span></a>
           </li>
          </ul>`
      )
      .join("");
  }
  _cleanScrollBar() {
    return (this._moveScrollPostion.scrollLeft = 0);
  }
}
export default new SearchWorld();
