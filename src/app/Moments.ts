export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  created_ad?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];

}