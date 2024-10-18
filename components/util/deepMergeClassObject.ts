import type { ClassObject } from "../types/ClassObject";

// 深くマージする関数
export function deepMergeClassObject(target: ClassObject, source: ClassObject): ClassObject {
  for (const key in source) {
    if (
      source[key] !== undefined && 
      target[key] !== undefined && 
      typeof source[key] === 'object' && 
      !Array.isArray(source[key]) &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      target[key] = deepMergeClassObject(target[key] as ClassObject, source[key] as ClassObject);
    } else if (source[key] !== undefined) {
      target[key] = source[key];
    }
  }
  return target;
}