import icons from "url:../../img/icons.svg";
import GeneralViews from "./generalViews";

class ViewButtons extends GeneralViews {
  _sectionContainer = document.querySelector(".section__btn");

  evenHandlerBtns(handler) {
    this._sectionContainer.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".btn__columns");
      if (!btn) return;
      const actualPage = +btn.dataset.move;
      handler(actualPage);
    });
  }

  _createMarkupWords() {
    const currentPage = this._objectWord.search.page;
    const numPages = Math.ceil(
      this._objectWord.wordsList.length / this._objectWord.search.resultPerList
    );
    if (currentPage === 1 && numPages > 1) {
      return this._showMarkupButtons(currentPage + 1, icons, "right");
    }

    if (currentPage === numPages && numPages > 1) {
      return this._showMarkupButtons(currentPage - 1, icons, "left");
    }
    if (currentPage < numPages) {
      const hand = ["left", "right"];
      return [currentPage - 1, currentPage + 1]
        .map((el, i) => this._showMarkupButtons(el, icons, hand[i]))
        .join("");
    }
    return "";
  }

  _showMarkupButtons(currentPage, icons, direcction) {
    return `<button data-move="${currentPage}" class="btn__columns btn__direction__${direcction}">

    <svg class="btn__columns__icon">
<use href="${icons}#icon-arrow-${direcction}"></use>
 </svg>
     <p class= "btn__columns__span">row ${currentPage} </p>
 </button>`;
  }
}
export default new ViewButtons();
