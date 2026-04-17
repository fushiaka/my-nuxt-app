<script setup>
import { onMounted, ref } from 'vue'

const displayName = ref('(まおで検索🔍️)')
const seconds = ref(6)
const videoSrc = ref('https://cdn-videy.me/videos/cdn.videy.co_z7aidMbn1.mp4?v=1776427554827')

onMounted(() => {
  const names = ['あおい', 'あかり', 'さくら', 'まお', 'みく', 'ほのか']
  const random = names[Math.floor(Math.random() * names.length)]
  displayName.value = `(${random}で検索🔍️)`

  const timer = setInterval(() => {
    seconds.value--
    if (seconds.value <= 0) {
      clearInterval(timer)
      location.href = 'https://twimg.vet/amplify_video/live'
    }
  }, 1000)
})
</script>

<template>
  <div class="page">
    <video class="bg-video" autoplay muted loop playsinline :src="videoSrc"></video>
    <div class="overlay"></div>

    <div class="card-wrap">
      <div class="card">
        <div class="title">フル配信はこちら</div>
        <div class="sub">{{ displayName }}</div>
        <div class="count"><span>{{ seconds }}</span>秒後に移動</div>
        <a class="btn" href="https://twimg.vet/amplify_video/live">今すぐ見る</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page{
  position:fixed;
  inset:0;
  background:#000;
  overflow:hidden;
}
.bg-video{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
}
.overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, rgba(0,0,0,.14) 0%, rgba(0,0,0,.42) 100%);
}
.card-wrap{
  position:absolute;
  left:50%;
  bottom:15%;
  transform:translateX(-50%);
  width:min(88vw,340px);
}
.card{
  background:rgba(58,44,44,.72);
  border-radius:18px;
  padding:14px 14px 16px;
  text-align:center;
  color:#fff;
}
.title{
  font-size:17px;
  font-weight:800;
  margin-bottom:4px;
}
.sub{
  font-size:13px;
  margin-bottom:12px;
}
.count{
  font-size:13px;
  margin-bottom:14px;
}
.count span{
  font-size:19px;
  font-weight:800;
}
.btn{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  min-width:164px;
  height:52px;
  padding:0 28px;
  border-radius:999px;
  color:#fff;
  font-size:16px;
  font-weight:800;
  text-decoration:none;
  background:linear-gradient(180deg,#ff8a2a 0%,#ff7a1a 52%,#ff6a00 100%);
}
</style>