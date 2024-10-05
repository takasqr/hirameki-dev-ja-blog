import type { ClassObject } from "../types/ClassObject";

// 深くマージする関数
export function deepMergeClassObject(target: ClassObject, source: ClassObject): ClassObject {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      target[key] = deepMergeClassObject(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}