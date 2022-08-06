import { useState, useEffect } from "react";
import { fetchPostById } from "helpers/firebaseMethods";
import { Container } from "components/layout";
import { useParams } from "react-router-dom";

import ReactionSidebar from "./reaction_sidebar/ReactionSidebar";
import PostContent from "./post_content";
import AuthorSidebar from "./author_sidebar";
import SinglePostSkeleton from "./single_post_skeleton";
import RequireAuthModal from "components/require_auth_modal";
import { Banner } from "components/layout";

import { PostType } from "types/types";
import { SinglePost } from "./SinglePost.style";

const Index = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState<PostType | null>(null);
  const [fetchError, setFetchError] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const fetchPost = async () => {
    setLoading(true);
    const response = await fetchPostById(postId);
    if (!!response) setCurrentPost(response);
    else setFetchError(true);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <>
      <RequireAuthModal showModal={showAuthModal} closeModal={closeAuthModal} />
      {fetchError && (
        <Banner variant="danger">
          <p>خطا در بارگذری پست، لطفا بعدا تلاش کنید.</p>
        </Banner>
      )}
      <Container pageContainer>
        {!!currentPost && !loading ? (
          <SinglePost>
            <div className="grid_container">
              <div className="post_content_container">
                {/* reaction sidebar */}
                <aside className="reactions_sidebar">
                  <ReactionSidebar post={currentPost} openModal={openAuthModal} />
                </aside>

                {/* post content */}
                <div className="post_content">
                  <PostContent post={currentPost} openModal={openAuthModal} />
                </div>
              </div>

              {/* author sidebar */}
              <aside className="author_sidebar">
                <AuthorSidebar post={currentPost} />
              </aside>
            </div>
          </SinglePost>
        ) : (
          <div className="grid_container">
            <SinglePostSkeleton />
          </div>
        )}
      </Container>
    </>
  );
};

export default Index;
