<template>
  <div ref="sceneContainer" class="scene-container"/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import * as random from 'maath/random';
import * as buffer from 'maath/buffer';
import * as misc from 'maath/misc';

const sceneContainer = ref(null);

let scene, camera, renderer, points, final, box, sphere;
const rotationAxis = new THREE.Vector3(0, 1, 0).normalize();
const q = new THREE.Quaternion();

// const height = window.innerHeight
const height = 300

const init = () => {
  // シーンとカメラの作成
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / height,
    0.1,
    1000
  );
  camera.position.z = 5;

  // レンダラーの作成
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, height);
  // 背景色を設定
  renderer.setClearColor(0xffffff, 1)
  
  sceneContainer.value.appendChild(renderer.domElement);

  // ポイントの初期化
  const pointCount = 5000;
  box = random.inBox(new Float32Array(pointCount * 3), { sides: [4, 4, 4] });
  sphere = random.inSphere(box.slice(0), { radius: 0.75 });
  final = box.slice(0);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(final, 3)
  );
  
  const material = new THREE.PointsMaterial({ size: 0.01, color: 0x9ca3af });
  points = new THREE.Points(geometry, material);
  scene.add(points);
};

const animate = () => {
  requestAnimationFrame(animate);

  const et = performance.now() * 0.001;
  const t = misc.remap(Math.sin(et), [-1, 1], [0, 1]);
  const t2 = misc.remap(Math.cos(et * 3), [-1, 1], [0, 1]);

  buffer.rotate(box, {
    q: q.setFromAxisAngle(rotationAxis, t2 * 0.1),
  });

  buffer.lerp(box, sphere, final, t);

  // ポイントの位置を更新
  points.geometry.attributes.position.array = final;
  points.geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
};

onMounted(() => {
  init();
  animate();

  window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
  }
});

const onWindowResize = () => {
  camera.aspect = window.innerWidth / height;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, height);
};
</script>
