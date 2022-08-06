import { Link } from "react-router-dom";
import { Block } from "components/layout";
import { ButtonCTA } from "components/utils/Buttons";
import { AuthorSidebar } from "./AuthorSidebar.style";
import { PostType } from "types/types";

interface PropTypes {
  post: PostType;
}

const Index: React.FC<PropTypes> = ({ post }) => {
  const { profilePic, username, name, registerDate } = post.author;

  const formatAuthorRegisterDate = () => {
    return new Date(registerDate).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            <p className="user_bio">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با
            </p>

            {/* user register date */}
            <section className="user_register_date">
              <h4 className="title">عضو از</h4>
              {/* <p className="date">17 آبان 1398</p> */}
              <p className="date">{formatAuthorRegisterDate()}</p>
            </section>
          </div>
        </div>
      </Block>
    </AuthorSidebar>
  );
};

export default Index;
