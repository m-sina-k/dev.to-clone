import { Link } from "react-router-dom";

import { formatDate } from "helpers";
import { PostType } from "types/types";

import { Block } from "components/layout";
import { ButtonCTA } from "components/utils/Buttons";
import { AuthorSidebar } from "./AuthorSidebar.style";

interface PropTypes {
  post: PostType;
}

const Index: React.FC<PropTypes> = ({ post }) => {
  const { profilePic, username, name, registerDate, bio } = post.author;

  return (
    <AuthorSidebar>
      <Block className="author_details_block" p="0">
        <div className="author_details_container">
          <section className="brand_bg"></section>
          <div className="block_content">
            {/* user pic and name */}
            <Link to={`/user/@${username}`} className="author_details">
              <img src={profilePic} alt={username} className="profile_pic" />
              <h4 className="username">{name || `@${username}`}</h4>
            </Link>

            <ButtonCTA className="follow_button">دنبال کردن</ButtonCTA>

            {/* user bio */}
            <p className="user_bio">{bio ? bio : "۴۰۴ بیوگرافی پیدا نشد!"}</p>

            {/* user register date */}
            <section className="user_register_date">
              <h4 className="title">عضو از</h4>
              <p className="date">{formatDate(registerDate)}</p>
            </section>
          </div>
        </div>
      </Block>
    </AuthorSidebar>
  );
};

export default Index;
