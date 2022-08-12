import { ReactComponent as HomeIcon } from "assets/icons/links/home.svg";
import { ReactComponent as ReadingListIcon } from "assets/icons/links/readingList.svg";
import { ReactComponent as TagsIcon } from "assets/icons/links/tags.svg";
import { ReactComponent as FaqIcon } from "assets/icons/links/faq.svg";
import { ReactComponent as PodcastIcon } from "assets/icons/links/podcasts.svg";
import { ReactComponent as VideoIcon } from "assets/icons/links/videos.svg";
import { ReactComponent as AboutIcon } from "assets/icons/links/about.svg";
import { ReactComponent as ContactIcon } from "assets/icons/links/contact.svg";

import { FaTwitter, FaTwitch, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

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
    url: "#",
    text: "پادکست",
    icon: <PodcastIcon />,
  },
  {
    id: 4,
    url: "#",
    text: "ویدئو",
    icon: <VideoIcon />,
  },
  {
    id: 5,
    url: "#",
    text: "دسته بندی ها",
    icon: <TagsIcon />,
  },
  {
    id: 6,
    url: "#",
    text: "سوالات متداول",
    icon: <FaqIcon />,
  },
  {
    id: 7,
    url: "#",
    text: "درباره ما",
    icon: <AboutIcon />,
  },
  {
    id: 8,
    url: "#",
    text: "تماس با ما",
    icon: <ContactIcon />,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com",
  },
  {
    id: 3,
    icon: <FaGithub />,
    url: "https://www.github.com/m-sina-k/dev.to-clone",
  },
  {
    id: 4,
    icon: <BsInstagram />,
    url: "https://www.instagram.com/",
  },
  {
    id: 5,
    icon: <FaTwitch />,
    url: "https://www.twitch.com",
  },
];
