export interface Post {
  id: number;
  title: string;
  slug?: string;
  content: string;
  thumbnail?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
