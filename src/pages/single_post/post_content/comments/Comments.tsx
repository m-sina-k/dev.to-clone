import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import TextareaAutosize from "react-textarea-autosize";

import { getAuthState } from "features/authSlice";
import { submitComment, updateComments } from "helpers/firebaseMethods";
import { ButtonCTA, GhostButton } from "components/utils/Buttons";

import { CommentsStyle } from "./Comments.style";
import { CommentType } from "types/types";
import logo from "assets/images/square-logo.png";
import { ReactComponent as HeartIcon } from "assets/icons/reactions/heartSmall.svg";

interface PropTypes {
  postId: string;
  postComments: CommentType[];
  openModal: () => void;
}

const Comments: React.FC<PropTypes> = ({ postId, postComments, openModal }) => {
  const { currentUser } = useSelector(getAuthState);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [commentText, setCommentText] = useState("");
  const [likedComments, setLikedComments] = useState<string[]>([]);
  const [comments, setComments] = useState<CommentType[]>(postComments);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const { displayName, username, photoURL } = currentUser;
    const comment: CommentType = {
      id: nanoid(),
      writerName: displayName || username,
      writerProfilePic: photoURL,
      writerUsername: username,
      text: commentText,
      likes: [],
      submitDate: new Date().toISOString().split("T")[0],
    };
    submitComment(postId, comment);
    setComments([...comments, comment]);
    setCommentText("");
  };

  const likeComment = (commentId: string, username: string) => {
    const selectedComment = comments.findIndex((item) => item.id === commentId);

    // if user already liked the comment, remove it
    if (likedComments.indexOf(commentId) > -1) {
      const tempLikedComments = likedComments.filter((items) => items !== commentId);
      const updatedLikedList: any = comments[selectedComment].likes.filter(
        (items) => items !== username
      );
      comments[selectedComment].likes = updatedLikedList;
      setLikedComments(tempLikedComments);
    } else {
      // like the comment
      comments[selectedComment].likes.push(username);
      setLikedComments([...likedComments, commentId]);
    }
    updateComments(postId, comments);
  };

  const formatCommentSubmitDate = (date: string) => {
    return new Date(date).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const heartClassName = (commentId: string) => {
    return likedComments.indexOf(commentId) > -1 ? "like_button--active" : "like_button";
  };

  // if comment input is empty,disable the submit button
  useEffect(() => {
    if (commentText.trim() !== "") setSubmitDisabled(false);
    else setSubmitDisabled(true);
  }, [commentText]);

  // check if user liked any comments
  useEffect(() => {
    if (currentUser) {
      let tempLikedComments: any = [];
      comments.map((comment) => {
        if (comment.likes.indexOf(currentUser.username) > -1) {
          tempLikedComments.push(comment.id);
        }
      });
      setLikedComments(tempLikedComments);
    }
  }, []);

  // prevent comment input from focusing if user is not authenticated
  const checkAuthStatus = (e: React.FormEvent) => {
    if (!currentUser) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <CommentsStyle>
      <div className="post_content_wrapper">
        <h2 className="heading">گفتوگو ({comments.length})</h2>

        {/* comment input */}
        <div className="comment_input_container">
          <img
            src={currentUser?.photoURL || logo}
            alt={currentUser?.username || "default_pic"}
            className="user_profile-pic"
          />
          <form action="#" className="comment_form" onSubmit={(e) => handleSubmitComment(e)}>
            <TextareaAutosize
              minRows={4}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="comment_input"
              placeholder="به گفتگو محلق شوید ..."
              onMouseDown={(e) => checkAuthStatus(e)}
            />
            <ButtonCTA className="submit_comment" disabled={submitDisabled}>
              ثبت دیدگاه
            </ButtonCTA>
          </form>
        </div>

        {/* submitted comment's */}
        <div className="submitted_comment_container">
          {comments.length > 0 &&
            comments.map((comment) => {
              return (
                <article className="submitted_comment" key={comment.id}>
                  <div className="flex_wrapper">
                    <img
                      src={comment.writerProfilePic}
                      alt={comment.writerUsername}
                      className="user_profile-pic"
                    />

                    <div className="comment_content_container">
                      <section className="comment_content">
                        {/* publisher profile link & publish date */}
                        <p className="publish_details">
                          <Link
                            to={`/@${comment.writerUsername}`}
                            className="publisher_profile_link"
                          >
                            {comment.writerName || `@${comment.writerUsername}`}
                          </Link>
                          •
                          <span className="publish_date">
                            {formatCommentSubmitDate(comment.submitDate)}
                          </span>
                        </p>

                        {/* comment text */}
                        <p className="comment_text">{comment.text}</p>
                      </section>

                      <GhostButton
                        className={`like_button ${heartClassName(comment.id)}`}
                        onClick={() => likeComment(comment.id, currentUser.username)}
                      >
                        <span className="heart_icon">
                          <HeartIcon />
                        </span>
                        {comment.likes.length}
                        <span className="text">پسند </span>
                      </GhostButton>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </CommentsStyle>
  );
};

export default Comments;
