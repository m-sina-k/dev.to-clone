import {useState,useRef} from 'react'
import { useOnClickOutside } from "hooks/useClickOutside";

import Dropdown, { DdItem } from "components/utils/Dropdown";
import { StyledLink } from "components/layout";

import { ReactComponent as MoreIcon } from "assets/icons/reactions/more.svg";

const MoreOptions = () => {
    const showMoreOptionsBtnRef = useRef<HTMLDivElement>(null);
    const [showMoreOptions, setShowMoreOptions] = useState(false);

    const toggleShowMoreOptions = () => setShowMoreOptions(!showMoreOptions);
    const closeMoreOptions = () => setShowMoreOptions(false);
    useOnClickOutside(showMoreOptionsBtnRef, closeMoreOptions);

  return (
    <div
        className="more-options_button_container"
        ref={showMoreOptionsBtnRef}
      >
        <button className="reaction_button">
          <span className="icon icon--more" onClick={toggleShowMoreOptions}>
            <MoreIcon />
          </span>
        </button>
        <section className="more-options_container">
          {showMoreOptions && (
            <Dropdown>
              <DdItem>
                <StyledLink to="#">اشتراک گذاری در توییتر</StyledLink>
              </DdItem>
              <DdItem>
                <StyledLink to="#">اشتراک گذاری در فیسبوک</StyledLink>
              </DdItem>
              <DdItem>
                <StyledLink to="#">اشتراک گذاری در reddit</StyledLink>
              </DdItem>
              <DdItem>
                <StyledLink to="#">اشتراک گذاری در hacker news</StyledLink>
              </DdItem>
            </Dropdown>
          )}
        </section>
      </div>
  )
}

export default MoreOptions