import * as contentful from 'contentful'
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const ctfConfig = {
    space: config.public.ctf.spaceId,
    accessToken: config.public.ctf.accessToken,
  }

  return {
    provide: {
      contentful: contentful.createClient(ctfConfig)
    }
  }
})