import { useState,useRef } from "react";
import { useSelector } from "react-redux";
import { getAuthState } from "features/authSlice";
import styled from "styled-components";
import DashboardDd from "./DashboardDd";
import { useOnClickOutside } from "hooks/useClickOutside";


const ProfBtn = styled.section`
  border-radius: 999px;
  width: 35px;
  height: 35px;
  align-self: center;
  position: relative;

  .dd_btn {
    background-color: transparent;
  }
`;

const ProfileButton = () => {
  const { currentUser } = useSelector(getAuthState);
  const { photoURL, displayName, username } = currentUser;
  const [showDd, setShowDd] = useState(false);
  const toggleShowDd = () => setShowDd(!showDd);

  const closeDd = () => setShowDd(false);
  const ddRef = useRef<HTMLButtonElement | null>(null);
  useOnClickOutside(ddRef, closeDd);

  return (
    <ProfBtn className="profile__button">
      <button className="dd_btn" ref={ddRef}>
        <img
          src={photoURL}
          alt={displayName}
          onClick={toggleShowDd}
        />
        {showDd && (
          <DashboardDd
            username={username}
            displayName={displayName}
            onClose={closeDd}
          />
        )}
      </button>
    </ProfBtn>
  );
};

export default ProfileButton;
