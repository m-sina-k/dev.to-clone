import { ReactComponent as ProfileIcon } from "assets/icons/links/profile.svg";
import { ReactComponent as CustomIcon } from "assets/icons/links/customization.svg";

export const settingSections = [
  {
    id: 'profile',
    url: "/settings/profile",
    text: "پروفایل",
    icon: <ProfileIcon />,
  },
  {
    id: 'customization',
    url: "/settings/customization",
    text: "شخصی سازی",
    icon: <CustomIcon />,
  },
];
