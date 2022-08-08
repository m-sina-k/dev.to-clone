import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { debounce } from "lodash";

import { getAuthState } from "features/authSlice";
import { fetchSavedPosts, fetchUserInfo } from "helpers/firebaseMethods";

import { Container, Input, Block, Banner } from "components/layout";
import { GhostButton } from "components/utils/Buttons";
import { ReadingList } from "./ReadingList.style";
import { PostType } from "types/types";
import { ReactComponent as BookmarkIcon } from "assets/icons/reactions/bookmark.svg";

let allSavedPosts: any[] = [];

const Index = () => {
  const { currentUser } = useSelector(getAuthState);
  const [savedPosts, setSavedPosts] = useState<PostType[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setFetchLoading(true);
      const currentUserInfo = await fetchUserInfo(currentUser.id);
      if (currentUserInfo!.readingList.length) {
        let result = await fetchSavedPosts(currentUserInfo!.readingList);
        if (result) {
          setSavedPosts(result);
          allSavedPosts = result;
        } else setFetchError("خطا در بارگذاری پست های ذخیره شده.");
      }
      setFetchLoading(false);
    };

    fetchPosts();
  }, []);

  const formatPublishDate = (date: string) => {
    return new Date(date).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
    filterSavedPosts(query);
  };

  const filterSavedPosts = debounce((query: any) => {
    if (query !== "")
      setSavedPosts(savedPosts.filter((post) => post.postDetails.title.match(query)));
    else setSavedPosts(allSavedPosts);
  }, 700);

  return (
    <ReadingList>
      {fetchError && (
        <Banner variant="danger">
          <p>{fetchError}</p>
        </Banner>
      )}

      <Container pageContainer>
        <section className="heading">
          <h1>ذخیره ها ({savedPosts.length})</h1>
          <Input
            value={searchQuery}
            onChange={(e) => updateSearchQuery(e.target.value)}
            className="reading_list-search_input"
            placeholder="جستجو..."
          />
        </section>

        <Block className="reading-list_posts_container">
          {fetchLoading ? (
            <div className="loading_container">
              <Oval
                color="#3b49df"
                width={60}
                height={60}
                secondaryColor="#3b49df33"
                ariaLabel="لطفا صبر کنید..."
              />
            </div>
          ) : savedPosts.length > 0 ? (
            savedPosts.map((post) => {
              const { postDetails, author } = post;
              return (
                <Link to={`/post/${postDetails.id}`} key={postDetails.id} className="saved_post">
                  <section className="image_container">
                    <img
                      src={author.profilePic}
                      alt={author.username}
                      className="author_profile-pic"
                    />
                  </section>
                  <section className="post_details">
                    <h4 className="post_title">{postDetails.title}</h4>
                    <section className="details_container">
                      <span className="author_name">{author.name || author.username}</span>
                      <span className="publish_date">
                        {formatPublishDate(postDetails.publishDate)}
                      </span>
                      <section className="tags_container">
                        {postDetails.tags.length > 0 &&
                          postDetails.tags.map((tag) => (
                            <GhostButton key={tag.id} className="tag">
                              #{tag.name}
                            </GhostButton>
                          ))}
                      </section>
                    </section>
                  </section>
                </Link>
              );
            })
          ) : (
            <div className="empty_list_container">
              <h3 className="title">لیست ذخیره های شما خالی است</h3>
              <p className="text">
                برای ذخیره کردن پست روی علامت{" "}
                <span className="bold_text">
                  نشانه گذاری <BookmarkIcon />
                </span>
                کلیک کنید.
              </p>
            </div>
          )}
        </Block>
      </Container>
    </ReadingList>
  );
};

export default Index;
