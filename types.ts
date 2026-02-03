export interface Character {
  name: string;
  personality: string;
  description: string;
  color: string;
}

export interface IllustrationPrompt {
  id: string;
  title: string;
  prompt: string;
  context: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}