import { Container } from "components";
import NotificationsSidebar from "./NotificationsSidebar";

import notifImage from "assets/images/utils/empty_mail_box.png";
import { NotificationsStyle } from "./Notifications.styles";

const Notifications = () => {
  return (
    <NotificationsStyle>
      <Container pageContainer>
        <section className="heading">
          <h1>اعلانات</h1>
        </section>
        <div className="grid__container">
          <NotificationsSidebar />
          <section id="notifications_list">
            <img src={notifImage} alt="لیست-اعلانات-خالی-است" />
            <p>لیست اعلانات شما خالی است!</p>
          </section>
        </div>
      </Container>
    </NotificationsStyle>
  );
};

export default Notifications;
