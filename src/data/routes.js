import { ReactComponent as HomeIcon } from "assets/icons/links/home.svg";
import { ReactComponent as ReadingListIcon } from "assets/icons/links/readinList.svg";
import { ReactComponent as TagsIcon } from "assets/icons/links/tags.svg";
import { ReactComponent as FaqIcon } from "assets/icons/links/faq.svg";

export const routes = [
  {
    id: 1,
    url: "/",
    text: "صفحه اصلی",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    url: "/reading-list",
    text: "ذخیره شده ها",
    icon: <ReadingListIcon />,
  },
  {
    id: 3,
    url: "/tags",
    text: "بندی ها اصلی",
    icon: <TagsIcon />,
  },
  {
    id: 4,
    url: "/faq",
    text: "سوالات متداول",
    icon: <FaqIcon />,
  },
];
