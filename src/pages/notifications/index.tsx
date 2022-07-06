import { Container,Block } from "components";
import NotificationsSidebar from "./NotificationsSidebar";

import notifImage from "assets/images/utils/empty_mail_box.png";
import { Notifications } from "./Notifications.styles";

const Index = () => {
  return (
    <Notifications>
      <Container pageContainer>
        <section className="heading">
          <h1>اعلانات</h1>
        </section>
        <div className="grid__container">
          <NotificationsSidebar />
          <Block id="notifications_list">
            <img src={notifImage} alt="لیست-اعلانات-خالی-است" />
            <p>لیست اعلانات شما خالی است!</p>
          </Block>
        </div>
      </Container>
    </Notifications>
  );
};

export default Index;
