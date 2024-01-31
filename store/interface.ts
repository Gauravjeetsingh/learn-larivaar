import {Action} from 'easy-peasy';

export interface StoreProperties {
  fontSize: number;
  keepScreenAwake: boolean;
  larivaar: boolean;
  larivaarAssist: boolean;
  darkTheme: boolean;
  leftHandedMode: boolean;
  swipeNavigation: boolean;
  currentAng: number;
  angsPerDay: number;
  currentAngForToday: number;
  completionDate: Date | null;
  databaseDownloaded: boolean;
}

export interface StoreInterface extends StoreProperties {
  setFontSize: Action<StoreInterface, number>;
  setLarivaar: Action<StoreInterface, boolean>;
  setLarivaarAssist: Action<StoreInterface, boolean>;
  setKeepScreenAwake: Action<StoreInterface, boolean>;
  setDarkTheme: Action<StoreInterface, boolean>;
  setLeftHandedMode: Action<StoreInterface, boolean>;
  setSwipeNavigation: Action<StoreInterface, boolean>;
  setCurrentAng: Action<StoreInterface, number>;
  setAngsPerDay: Action<StoreInterface, number>;
  setCurrentAngForToday: Action<StoreInterface, number>;
  setCompletitionDate: Action<StoreInterface, Date | null>;
  setDatabaseDownloaded: Action<StoreInterface, boolean>;
}
