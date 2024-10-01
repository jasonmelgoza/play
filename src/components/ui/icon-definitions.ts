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
  Copy,
  Clipboard,
  File,
  FileCheck,
  Folder,
  FolderCheck,
  Github,
  Mail,
  User,
  X
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
  | 'copy'
  | 'file'
  | 'fileCheck'
  | 'folder'
  | 'folderCheck'
  | 'github'
  | 'mail'
  | 'user'
  | 'x';

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
  copy: Copy,
  clipboard: Clipboard,
  file: File,
  fileCheck: FileCheck,
  folder: Folder,
  folderCheck: FolderCheck,
  github: Github,
  mail: Mail,
  user: User,
  x: X
} as const;
