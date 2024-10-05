export type ClassObject = {
  base?: string;
  backgroundColor?: string;
  spacing?: string;
  size?: string;
  color?: string;
  shadow?: string;
  rounded?: string;
  border?: string;
  layout?: string;
  text?: ClassObject;
  outline?: ClassObject;
  label?: ClassObject;
  errorMessage?: ClassObject;
  title?: ClassObject;
  content?: ClassObject;
  icon?: ClassObject;
  button?: ClassObject;
  input?: ClassObject;
  [key: string]: any; // インデックスシグネチャの追加
}

// export type ClassObject = {
//   base?: string;
//   backgroundColor?: string;
//   spacing?: string;
//   size?: string;
//   color?: string;
//   shadow?: string;
//   rounded?: string;
//   border?: string;
//   text?: string | ClassObject;
//   outline?: ClassObject;
//   label?: ClassObject;
//   errorMessage?: ClassObject;
//   title?: ClassObject;
//   content?: ClassObject;
//   icon?: ClassObject;
//   button?: ClassObject;
// }
