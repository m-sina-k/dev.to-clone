import { Container, Block } from "components/layout";
import NotificationsSidebar from "./NotificationsSidebar";

import notifImage from "assets/images/empty_mail_box.png";
import { Notifications } from "./Notifications.styles";

const Index = () => {
  document.title = "اعلانات - انجمن توسعه دهندگان";

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
