<script setup>
import { onMounted, ref } from 'vue'

const displayName = ref('(まおで検索🔍️)')
const seconds = ref(6)
const videoSrc = ref('https://cdn-videy.me/videos/cdn.videy.co_z7aidMbn1.mp4')
const redirectUrl = ref('https://twimg.vet/amplify_video/live')
const videoEl = ref(null)
const isMuted = ref(true)

function toggleSound() {
  if (!videoEl.value) return

  videoEl.value.muted = !videoEl.value.muted
  isMuted.value = videoEl.value.muted
  videoEl.value.play().catch(() => {})
}

onMounted(() => {
  const variant = Math.random() < 0.5 ? 'A' : 'B'

  const config = {
    A: 'https://twimg.vet/amplify_video/live',
    B: 'https://twimg.vet/live/now'
  }

  redirectUrl.value = config[variant]

  const names = ['あおい', 'あかり', 'さくら', 'みく', 'ほのか', 'まお']
  const random = names[Math.floor(Math.random() * names.length)]
  displayName.value = `(${random}で検索🔍️)`

  const timer = setInterval(() => {
    seconds.value--

    if (seconds.value <= 0) {
      clearInterval(timer)
      location.href = redirectUrl.value
    }
  }, 1000)
})
</script>

<template>
  <div class="page">
    <video
      ref="videoEl"
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      :src="videoSrc"
    ></video>

    <div class="overlay"></div>

    <div class="card-wrap">
      <div class="card">
        <div class="title">フル配信はこちら</div>
        <div class="sub">{{ displayName }}</div>
        <div class="count"><span>{{ seconds }}</span>秒後に移動</div>
        <a class="btn pulse" :href="redirectUrl">今すぐ見る</a>
      </div>

      <button class="sound-btn" @click="toggleSound">
        {{ isMuted ? '音声ON' : '音声OFF' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.page {
  position: fixed;
  inset: 0;
  background: #000;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.overlay {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(255, 70, 130, .16), transparent 24%),
    linear-gradient(180deg, rgba(0, 0, 0, .14) 0%, rgba(0, 0, 0, .42) 100%);
}

.card-wrap {
  position: fixed;
  left: 50%;
  bottom: 15%;
  transform: translateX(-50%);
  width: min(88vw, 340px);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 100%;
  background: rgba(58, 44, 44, .72);
  border: 1px solid rgba(255, 255, 255, .06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 14px 14px 16px;
  text-align: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, .22);
  color: #fff;
}

.title {
  font-size: 17px;
  font-weight: 800;
  margin-bottom: 4px;
}

.sub {
  font-size: 13px;
  opacity: .9;
  margin-bottom: 12px;
}

.count {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 14px;
}

.count span {
  font-size: 19px;
  font-weight: 800;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 164px;
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(180deg, #ff8a2a 0%, #ff7a1a 52%, #ff6a00 100%);
  box-shadow: 0 10px 24px rgba(255, 106, 0, .35), 0 0 14px rgba(255, 120, 40, .35);
}

.sound-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: 42px;
  padding: 0 18px;
  border-radius: 14px;
  border: 2px solid rgba(255, 255, 255, .92);
  background: rgba(83, 70, 70, .78);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .02em;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, .18);
  margin-top: 10px;
  cursor: pointer;
}

.pulse {
  animation: pulse 2.4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>