
export interface Message {
  content: string;
  sender: 'user' | 'bot';
}

export type ResponseData = {
  [key: string]: string[];
};
