class GetWord {
  _searchForm = document.querySelector(".search");

  _sectionContainerHeader = document.querySelector(".search__error__container");
  getValueSearch() {
    const wordValue = this._searchForm.querySelector(".search__field").value;
    this.#clearInput();
    this._sectionContainerHeader.textContent = "";
    if (Array.from(wordValue).every((el) => el.match(/[a-z]/i)))
      return wordValue;
  }
  #clearInput() {
    this._searchForm.querySelector(".search__field").value = "";
  }
  showWordFromSearch(handle) {
    this._searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      handle();
    });
  }
}

export default new GetWord();
