import icons from "url:../../img/icons.svg";
import { ARRAY_WORDS } from "../config";
export default class GeneralViews {
  arryWords = ARRAY_WORDS;
  _objectWord;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.errorMessage();
    this._objectWord = data;
    const markup = this._createMarkupWords();
    this._cleanContainer(this._sectionContainer);
    this._sectionContainer.insertAdjacentHTML("afterbegin", markup);
  }
  _cleanContainer(container) {
    container.textContent = "";
  }
  spiner(container = this._sectionContainer) {
    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._cleanContainer(container);
    container.insertAdjacentHTML("afterbegin", markup);
  }

  errorMessage(message = this._errorMessage) {
    const markup = `<div class="error">
       <svg>
         <use href="${icons}#icon-alert-triangle"></use>
       </svg>
       <p>${message}</p>
     </div>`;
    this._cleanContainer(this._sectionContainer);
    this._sectionContainer.insertAdjacentHTML("afterbegin", markup);
  }
  errorMessageHeader(message = this._errorMessage) {
    const markup = `<div class="search__error__header">
       <svg>
         <use href="${icons}#icon-alert-triangle"></use>
       </svg>
       <p>${message}</p>
     </div>`;
    this._cleanContainer(this._sectionContainerHeader);
    this._sectionContainerHeader.insertAdjacentHTML("afterbegin", markup);
  }
  successMessage(message = this._message) {
    const markup = `<div class=".message">
       <svg>
         <use href="${icons}#icon-smile"></use>
       </svg>
       <h3>${message}</h3>
     </div>;`;
    this._cleanContainer(this._sectionContainer);
    this._sectionContainer.insertAdjacentHTML("afterbegin", markup);
  }
}
