import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getAuthState } from "features/authSlice";
import { reactToPost } from "helpers/firebaseMethods";

import MoreOptions from "./MoreOptions";
import { ReactionSidebarStyle } from "./ReactionSidebar.style";
import { PostType } from "types/types";

import { ReactComponent as HeartIcon } from "assets/icons/reactions/heart.svg";
import { ReactComponent as UnicornIcon } from "assets/icons/reactions/unicorn.svg";
import { ReactComponent as BookmarkIcon } from "assets/icons/reactions/bookmark.svg";

interface PropTypes {
  post: PostType;
  openModal: () => void;
}

enum ReactionOperation {
  ADD = "add",
  REMOVE = "remove",
}

const ReactionSidebar: React.FC<PropTypes> = ({ post, openModal }) => {
  const { currentUser } = useSelector(getAuthState);

  const { hearts, unicorns, saves } = post.reactions;

  const [userLikedPost, setUserLikedPost] = useState(false);
  const [userSavedPost, setUserSavedPost] = useState(false);
  const [userUnicornedPost, setUserUnicornedPost] = useState(false);

  const [savesCount, setSavesCount] = useState(saves.length);
  const [heartsCount, setHeartsCount] = useState(hearts.length);
  const [unicornsCount, setUnicornsCount] = useState(unicorns.length);

  const activeLikeIconClass = userLikedPost ? "icon--heart--active" : "";
  const activeSaveIconClass = userSavedPost ? "icon--bookmark--active" : "";
  const activeUnicornIconClass = userUnicornedPost ? "icon--unicorn--active" : "";

  const likePostCallback = () => {
    if (!currentUser) {
      openModal();
      return;
    } else {
      if (userLikedPost) {
        likePost(ReactionOperation.REMOVE);
        setUserLikedPost(false);
      } else {
        likePost(ReactionOperation.ADD);
        setUserLikedPost(true);
      }
    }
  };

  const unicornPostCallback = () => {
    if (!currentUser) {
      openModal();
      return;
    } else {
      if (userUnicornedPost) {
        unicornPost(ReactionOperation.REMOVE);
        setUserUnicornedPost(false);
      } else {
        unicornPost(ReactionOperation.ADD);
        setUserUnicornedPost(true);
      }
    }
  };

  const savePostCallback = () => {
    if (!currentUser) {
      openModal();
      return;
    } else {
      if (userSavedPost) {
        savePost(ReactionOperation.REMOVE);
        setUserSavedPost(false);
      } else {
        savePost(ReactionOperation.ADD);
        setUserSavedPost(true);
      }
    }
  };

  const likePost = (operation: ReactionOperation) => {
    reactToPost(post.postDetails.id, "hearts", operation, currentUser.username);
    if (operation === ReactionOperation.ADD) setHeartsCount(heartsCount + 1);
    else if (operation === ReactionOperation.REMOVE && heartsCount > 0)
      setHeartsCount(heartsCount - 1);
  };

  const unicornPost = (operation: ReactionOperation) => {
    reactToPost(post.postDetails.id, "unicorns", operation, currentUser.username);
    if (operation === ReactionOperation.ADD) setUnicornsCount(unicornsCount + 1);
    else if (operation === ReactionOperation.REMOVE && unicornsCount !== 0)
      setUnicornsCount(unicornsCount - 1);
  };

  const savePost = (operation: ReactionOperation) => {
    reactToPost(post.postDetails.id, "saves", operation, currentUser.username, currentUser.id);
    if (operation === ReactionOperation.ADD) setSavesCount(savesCount + 1);
    else if (operation === ReactionOperation.REMOVE && savesCount > 0)
      setSavesCount(savesCount - 1);
  };

  const checkIfUserReactedToPost = () => {
    if (currentUser?.username) {
      if (hearts.indexOf(currentUser.username) > -1) setUserLikedPost(true);
      if (unicorns.indexOf(currentUser.username) > -1) setUserUnicornedPost(true);
      if (saves.indexOf(currentUser.username) > -1) setUserSavedPost(true);
    }
  };

  useEffect(() => {
    checkIfUserReactedToPost();
  }, []);

  return (
    <ReactionSidebarStyle>
      {/* heart button */}
      <button className="reaction_button" onClick={likePostCallback}>
        <span className={`icon icon--heart ${activeLikeIconClass}`}>
          <HeartIcon />
        </span>
        <span className="reaction_count">{heartsCount}</span>
      </button>

      {/* unicorn button */}
      <button className="reaction_button" onClick={unicornPostCallback}>
        <span className={`icon icon--unicorn ${activeUnicornIconClass}`}>
          <UnicornIcon />
        </span>
        <span className="reaction_count">{unicornsCount}</span>
      </button>

      {/* bookmark button */}
      <button className="reaction_button" onClick={savePostCallback}>
        <span className={`icon icon--bookmark ${activeSaveIconClass}`}>
          <BookmarkIcon />
        </span>
        <span className="reaction_count">{savesCount}</span>
      </button>

      {/* more options button */}
      <MoreOptions />
    </ReactionSidebarStyle>
  );
};

export default ReactionSidebar;
