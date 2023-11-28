import GeneralViews from "./generalViews";

class BookMarkViews extends GeneralViews {
  _sectionContainer = document.querySelector(".list__bookmark");
  _btnFolder = document.querySelector(".bookmark__btn");
  _btnDownload = document.querySelector(".btn__download");

  constructor() {
    super();
    this._movingFolder();
  }

  evenHandlerfolder(handler) {
    this._btnFolder.addEventListener("click", function (e) {
      const folder = document
        .querySelector(".list__bookmark")
        .classList.toggle("hidden");
      if (!folder) handler();
    });
  }
  evenPdfbtn(handler) {
    this._btnDownload.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  _createMarkupWords() {
    return this._pushWords(this._objectWord);
  }
  _pushWords(word) {
    this._btnDownload.classList.add("hidden");
    return word.wordsSaving.length > 0
      ? word.wordsSaving
          .map((el) => {
            document.querySelector(".btn__download").classList.remove("hidden");
            return `<ul class="bookmark__ul">
                        <li class="bookmark__list__li">
                          <a href="#${el[0]}" class="bookmark__list__name">
                             <span>
                                ${el[0].toUpperCase()}  
                             </span>
                          </a>
                       </li>
                      <li>
                        ${el[1]}
                      </li>         
                   </ul>`;
          })
          .join("")
      : `<ul class="bookmark__ul">
           <li>
            <p class="bookmark__announcement">Save a word</p>
          </li>
        </ul>`;
  }

  _movingFolder() {
    /*  The touchstart = mousedown, 
    the touchmove = mousemove and ltouchend = mouseup equivalent. */

    const div = document.querySelector(".bookmark__container");

    div.addEventListener("touchmove", touchXY);

    function touchXY(e) {
      [...e.changedTouches].forEach((touch) => {
        div.style.left = `${
          touch.pageX < 250 && touch.pageX > 20 ? touch.pageX - 40 : 100
        }px`;
        div.style.top = `${
          touch.pageY > 350 && touch.pageY < 830 ? touch.pageY - 40 : 500
        }px`;
      });
    }
    // Select the div element and assign it to a variable
    // Add an event listener for the mousedown event
    div.addEventListener("mousedown", dragStart);

    // Define the function that handles the start of the dragging operation
    function dragStart(event) {
      // Get the current position of the mouse pointer relative to the browser window
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      // Get the current position of the div element relative to the viewport
      let divX = div.getBoundingClientRect().left;
      let divY = div.getBoundingClientRect().top;

      // Calculate the difference between these positions
      let shiftX = mouseX - divX;
      let shiftY = mouseY - divY;

      // Add event listeners for the mousemove and mouseup events
      window.addEventListener("mousemove", dragMove);
      window.addEventListener("mouseup", dragEnd);

      // Define the function that handles the movement of the div element
      function dragMove(event) {
        // Get the current position of the mouse pointer relative to the document
        let mouseX = event.pageX;
        let mouseY = event.pageY;

        // Set the top and left CSS properties of the div element to the values of the mouse position minus the difference
        div.style.top = mouseY - shiftY + "px";
        div.style.left = mouseX - shiftX + "px";
      }
      div.ondragstart = function () {
        return false;
      };
      // Define the function that handles the end of the dragging operation
      function dragEnd() {
        // Remove the event listeners for the mousemove and mouseup events
        window.removeEventListener("mousemove", dragMove);
        window.removeEventListener("mouseup", dragEnd);
      }
    }
  }
}

export default new BookMarkViews();
