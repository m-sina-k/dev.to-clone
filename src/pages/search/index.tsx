import { Container, Row, Block, ButtonTertiary } from "components";
import SearchInput from "components/utils/SearchInput";
import { Search } from "./Search.styles";

const index = () => {
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
            <h3 id="search_title">نتایج جستجو برای</h3>
            <section id="search_filters">
              <Row ai="center">
                <ButtonTertiary isActive>مرتبط ترین</ButtonTertiary>
                <ButtonTertiary>جدیدترین</ButtonTertiary>
                <ButtonTertiary>قدیمی ترین</ButtonTertiary>
              </Row>
            </section>
          </div>
          {/* search results */}
          <Block id="no_search_results">
            <p>نتایجه ای مطابق با کلمه جستجو شده یافت نشد.</p>
          </Block>
        </div>
      </Search>
    </Container>
  );
};

export default index;
