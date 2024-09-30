import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Banknote,
  Book,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Check,
  Chrome,
  File,
  FileCheck,
  Folder,
  FolderCheck,
  Github,
  Mail,
  User,
} from 'lucide-react';

export type IconName =
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'banknote'
  | 'book'
  | 'bookOpen'
  | 'bookmark'
  | 'bookmarkCheck'
  | 'check'
  | 'chrome'
  | 'file'
  | 'fileCheck'
  | 'folder'
  | 'folderCheck'
  | 'github'
  | 'mail'
  | 'user';

export const iconMap = {
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  banknote: Banknote,
  book: Book,
  bookOpen: BookOpen,
  bookmark: Bookmark,
  bookmarkCheck: BookmarkCheck,
  check: Check,
  chrome: Chrome,
  file: File,
  fileCheck: FileCheck,
  folder: Folder,
  folderCheck: FolderCheck,
  github: Github,
  mail: Mail,
  user: User,
} as const;
