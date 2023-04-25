import { useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";
function TopButton() {
  function TopHandler() {
    const topElement = document.documentElement;
    const scrollStep = topElement.scrollHeight / 125;
    const scrollInterval = setInterval(() => {
      if (topElement.scrollTop !== 0) {
        console.log(topElement.scrollTop, scrollStep)
        topElement.scrollTop -= scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  }

  return (
    <section>
      <div className="holder-top">
        <button className="holder-top-position" onClick={TopHandler}>
          <div className="icon-up">
            <BsChevronUp />
          </div>
          <span>top</span>
        </button>
      </div>
    </section>
  );
}

export default TopButton;
