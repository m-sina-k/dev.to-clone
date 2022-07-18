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

export interface PostType {
  authorId: string;
  authorName: string;
  authorUsername: string;
  authorProfilePic: string;
  postId: string;
  title: string;
  cover: string | null;
  tags: PostTagsType[];
  content: string;
  publishDate: string;
  reactions: {
    hearts: number;
    unicorns: number;
    comments: object[];
  };
}
