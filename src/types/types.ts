export enum ThemeMode {
  Dark = "dark",
  Light = "light",
}

export interface PostTagsType {
  color: string;
  backColor: string;
  id: number;
  name: string;
}

export enum NewPostDisplayModeType {
  PreviewMode = "preview-mode",
  EditMode = "edit-mode",
}

export interface CommentType {
  id: string;
  writerName: string;
  writerProfilePic: string;
  writerUsername: string;
  text: string;
  likes: string[];
  submitDate: string;
}

export interface PostType {
  author: {
    id: string;
    name: string;
    username: string;
    profilePic: string;
    registerDate: string;
  };
  postDetails: {
    id: string;
    title: string;
    cover: string | null;
    tags: PostTagsType[];
    content: string;
    publishDate: string;
  };
  reactions: {
    hearts: string[];
    unicorns: string[];
    saves: string[];
    comments: CommentType[];
  };
}
