export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  const map: Record<string, string> = {
    aGCj1IV: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }

  if (!id || !map[id]) {
    setResponseStatus(event, 404)
    return { ok: false }
  }

  setHeader(event, 'Cache-Control', 'public, max-age=86400')

  return { url: map[id] }
})