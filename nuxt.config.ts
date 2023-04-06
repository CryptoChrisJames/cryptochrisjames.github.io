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
    css: ["@/assets/styles/_variables.scss", "@/assets/styles/_colors.scss"],
    // vite: {
    //     css:{
    //         preprocessorOptions: {
    //             sass: {
    //                 additionalData: '@import "@/assets/styles/_variables.sass";',
    //             },
    //         }
    //     }
    // },
}
