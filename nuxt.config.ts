// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    modules: [
        '@nuxt/content'
    ],
    target: 'static',
    router: {
        base: '/cryptochrisjames.github.io/',
        options: { 
            strict: true, 
        }
    },
    css: ["@/assets/main.sass"],
    vite: {
        css: {
            // preprocessorOptions: {
            //     sass: {
            //         additionalData: '@import "@/assets/styles/_variables.sass"',
            //     },
            // },
        },
    },
}
