import i18n from 'i18n-js';
import {ImageSourcePropType} from 'react-native';
import {ITheme} from './theme';

export * from './components';
export * from './theme';

export interface IUser {
  id        ?:Number;      
  email     ?:String;   
  name      ?:String;
  password  ?:String;
  about     ?:String;
  phone     ?:String;
  role      ?:String;
  articles  ?:IArticle[];
  likes     ?:ILike[];
  views     ?:IView[];
  messages  ?:IMessage[];
  changePasswords?:String;
  profile   ?:IProfile;
  expoPushToken ?:String;
  createdAt ?:String;
}
export interface IProfile{}
export interface ICategory {
  id?: number;
  name?: string;
}
export interface IArticleOptions {
  id?: number;
  title?: string;
  description?: string;
  type?: 'room' | 'apartment' | 'house'; // private room | entire apartment | entire house
  sleeping?: {total?: number; type?: 'sofa' | 'bed'};
  guests?: number;
  price?: number;
  user?: IUser;
  image?: string;
}
export interface IArticle {
  id ?: number;
  title?: String;
  price?: number;     
  description ?:  String;   
  supplier?:  Boolean;   
  published?: Boolean;  
  images?:  IImage; 
  likes?: ILike[]; 
  views?: IView[]; 
  chats?: IChat[]; 
  messages?:  IMessage[]; 
  category?: ICategory; 
  createdAt?: String; 
  location?: ILocation;
  user?: IUser;
  offers?: number;
  onPress?: (event?: any) => void;
}
export interface ILike {
  id?: number;
  articles?:IArticle;
  user?: IUser;
}
export interface IView {
  id?: number;
  articles?:IArticle;
  user?: IUser;
  anonym?: String;
}
export interface IChat {

}
export interface IMessage {
  id?: number;
  article?: IArticle;
  user?: IUser;
  chats?: IChat;
  content?:String;
  createdAt      ?:String;
}
export interface IImage {
  id?: number;
  fileName?: string;
  article?:IArticle;

}
export interface IProduct {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  timestamp?: number;
  linkLabel?: string;
  type: 'vertical' | 'horizontal';
}
export interface ILocation {
  id?: number;
  city?: string;
  country?: string;
}
export interface IUseData {
  isDark: boolean;
  handleIsDark: (isDark?: boolean) => void;
  theme: ITheme;
  setTheme: (theme?: ITheme) => void;
  user: IUser;
  users: IUser[];
  handleUser: (data?: IUser) => void;
  handleUsers: (data?: IUser[]) => void;
  basket: IBasket;
  handleBasket: (data?: IBasket) => void;
  following: IProduct[];
  setFollowing: (data?: IProduct[]) => void;
  trending: IProduct[];
  setTrending: (data?: IProduct[]) => void;
  categories: ICategory[];
  setCategories: (data?: ICategory[]) => void;
  recommendations: IArticle[];
  setRecommendations: (data?: IArticle[]) => void;
  articles: IArticle[];
  setArticles: (data?: IArticle[]) => void;
  article: IArticle;
  handleArticle: (data?: IArticle) => void;
  notifications: INotification[];
  handleNotifications: (data?: INotification[]) => void;
}

export interface ITranslate {
  locale: string;
  setLocale: (locale?: string) => void;
  t: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
  translate: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
}
export interface IExtra {
  id?: number;
  name?: string;
  time?: string;
  image: ImageSourcePropType;
  saved?: boolean;
  booked?: boolean;
  available?: boolean;
  onBook?: () => void;
  onSave?: () => void;
  onTimeSelect?: (id?: number) => void;
}

export interface IBasketItem {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  stock?: boolean;
  price?: number;
  qty?: number;
  qtys?: number[];
  size?: number | string;
  sizes?: number[] | string[];
}

export interface IBasket {
  subtotal?: number;
  items?: IBasketItem[];
  recommendations?: IBasketItem[];
}
export interface IAddArticle{
  id?: number;
  title?: string;
  description?: string;
  categoryId?: number;
  userId?: number;
  location?:JSON;
  images?:[];
  supplier?: number;
  price?: number;

}
export interface ILogin {
  email?: string;
  password?: string;
}
export interface ISearch {
  q?: string; 
  orderBy?: string;
  gte?: number; 
  lte?: number; 
  categoryId?: number;
}
export interface INotification {
  id?: number;
  subject?: string;
  message?: string;
  read?: boolean;
  business?: boolean;
  createdAt?: number | Date;
  type:
    | 'document'
    | 'documentation'
    | 'payment'
    | 'notification'
    | 'profile'
    | 'extras'
    | 'office';
}
