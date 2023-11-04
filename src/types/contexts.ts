export interface Language {
  language: string;
  selectLanguage?: (language: string) => void;
}
