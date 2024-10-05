<template>
  <button @click="clickFileInput" type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
    </svg>
    <span class="mt-2 block text-sm font-semibold text-gray-900">画像をアップロード</span>
  </button>
  <input type="file" ref="fileInput" class="hidden" @change="handleFileChange">
  <img v-if="imageUrl" :src="imageUrl" class="max-w-xs">

  <div>
    <button @click="annotateImage" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ログイン</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
// import { getStorage, ref as firebaseRef, uploadBytes } from "firebase/storage";
// @ts-ignore
import { getFunctions, httpsCallable } from "firebase/functions";
// @ts-ignore
// import { AuthStore } from '@/ui/stores/AuthStore'
// import dayjs from 'dayjs'

const fileInput = ref<HTMLInputElement | null>(null)
const imageUrl = ref<string | null>(null)

function clickFileInput() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileChange(event: Event) {
  const files = (event.target as HTMLInputElement).files
  if (files && files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => imageUrl.value = e.target?.result as string
    reader.readAsDataURL(files[0])
  }
}

// async function uploadImg() {
//   const storage = getStorage();

//   const uid: string = AuthStore().signinedUser ? AuthStore().signinedUser!.uid : ''
//   const dateTime = dayjs().format('YYYYMMDDhhmmss')

//   const storageRef = firebaseRef(storage, `data/${uid}/image_${dateTime}.jpg`);

//   if (imageUrl.value) {
//     const blob = await fetchImageAsBlob(imageUrl.value);
//     if (blob) {
//       // @ts-ignore
//       uploadBytes(storageRef, blob).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//       });
//     }
//   }
// }

// New method to fetch an image as a Blob from a URL
async function fetchImageAsBlob(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

async function annotateImage() {

  if (imageUrl.value) {
    const imageBlob = await fetchImageAsBlob(imageUrl.value);

    if (imageBlob) {

      const base64Image = await encodeImageToBase64(imageBlob);

      const functions = getFunctions();
      const annotateImage = httpsCallable(functions, 'annotateImage');
      annotateImage({ image: { content: base64Image.substring(22) }, features: [{ type: 'TEXT_DETECTION' }] })
        // @ts-ignore
        .then((result) => {
          // Read result of the Cloud Function.
          /** @type {any} */
          const data = result.data;
          console.log(data)
        });
    }
  }
}

/**
 * 画像ファイルをBase64にエンコードする。
 * @param imageFile - エンコードする画像のFileオブジェクト。
 * @returns Promise<string> - 操作が完了した際にBase64形式の文字列を解決するPromise。
 */
// function encodeImageToBase64(imageFile: File): Promise<string> {
function encodeImageToBase64(imageBlob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    // FileReaderインスタンスを作成
    const reader = new FileReader();

    // 読み込みが正常に完了した時のイベントハンドラ
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };

    // エラーが発生した時のイベントハンドラ
    reader.onerror = (error) => {
      reject(error);
    };

    // ファイルをData URLとして読み込む
    reader.readAsDataURL(imageBlob);
  });
}

</script>