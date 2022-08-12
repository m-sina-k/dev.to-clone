import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

import { getAllPosts, getFetchLoadingStatus } from "features/fetchPostsSlice";
import { sortPostArray } from "helpers";
import { PostType, SortType } from "types/types";

import PostBlock from "components/postBlock";
import SearchInput from "components/utils/SearchInput";
import { Container, Row, Block } from "components/layout";
import { ButtonTertiary } from "components/utils/Buttons";

import { Search } from "./Search.styles";

const Index = () => {
  document.title = "جستجو - انجمن توسعه دهندگان";

  const { query } = useParams();

  const allPosts = useSelector(getAllPosts);
  const fetchLoading = useSelector(getFetchLoadingStatus);

  const [matchedPosts, setMatchedPosts] = useState<PostType[]>([]);
  const [sortedPosts, setSortedPosts] = useState<PostType[]>([]);
  const [filter, setFilter] = useState<SortType>(SortType.relevant);

  useEffect(() => {
    if (!query) setSortedPosts(allPosts);
    else if (!fetchLoading) {
      const filteredPosts = allPosts.filter((post: PostType) =>
        post.postDetails.title.toLowerCase().match(query!.toLowerCase() as string)
      );
      setMatchedPosts(filteredPosts);
      setSortedPosts(filteredPosts);
    }
  }, [query]);

  useEffect(() => {
    if (matchedPosts.length && sortedPosts.length) {
      const sortedArray = sortPostArray(filter, sortedPosts, matchedPosts) as PostType[];
      setSortedPosts(sortedArray);
    }
  }, [filter]);

  return (
    <Container pageContainer>
      <Search>
        <div id="search_heading">
          {/* search input */}
          <div id="search_input_container">
            <SearchInput />
          </div>

          {/* search heading */}
          <div id="search_heading">
            {query && <h3 id="search_title">نتایج جستجو برای "{query}"</h3>}
            <section id="search_filters">
              <Row ai="center">
                <ButtonTertiary
                  isActive={filter === SortType.relevant}
                  onClick={() => setFilter(SortType.relevant)}
                >
                  مرتبط
                </ButtonTertiary>
                <ButtonTertiary
                  isActive={filter === SortType.newest}
                  onClick={() => setFilter(SortType.newest)}
                >
                  جدیدترین
                </ButtonTertiary>
                <ButtonTertiary
                  isActive={filter === SortType.popular}
                  onClick={() => setFilter(SortType.popular)}
                >
                  محبوب ترین
                </ButtonTertiary>
              </Row>
            </section>
          </div>

          {/* search results */}
          <div id="results_container">
            {fetchLoading ? (
              <Block id="loading_container">
                <Oval
                  color="#3b49df"
                  width={55}
                  height={55}
                  secondaryColor="#3b49df33"
                  ariaLabel="لطفا صبر کنید..."
                />
              </Block>
            ) : sortedPosts.length > 0 ? (
              sortedPosts.map((post) => (
                <Block key={post.postDetails.id} p="0" className="post_block_container">
                  <PostBlock post={post} />
                </Block>
              ))
            ) : (
              <Block id="no_search_results">
                <p>نتیجه ای مطابق با کلمه جستجو شده یافت نشد.</p>
              </Block>
            )}
          </div>
        </div>
      </Search>
    </Container>
  );
};

export default Index;
