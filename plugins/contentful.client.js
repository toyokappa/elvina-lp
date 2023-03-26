import * as contentful from 'contentful'
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const ctfConfig = {
    space: config.ctf.spaceId,
    accessToken: config.ctf.accessToken,
  }

  return {
    provide: {
      contentful: contentful.createClient(ctfConfig)
    }
  }
})