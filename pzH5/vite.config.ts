// import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { VantResolver } from '@vant/auto-import-resolver';

// export default {
//   server:{
//     port:4500
//   },
//   plugins: [
//     vue(),
//     AutoImport({
//       resolvers: [VantResolver()],
//     }),
//     Components({
//       resolvers: [VantResolver()],
//     }),
//   ],
// };
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default {
  server: {
    port: 4500,
    host: '0.0.0.0', // 允许局域网访问
    proxy: {
      '/api': {
        target: 'http://10.5.80.15:8088',
        changeOrigin: true,
        rewrite: (path:any) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({ resolvers: [VantResolver()] }),
    Components({ resolvers: [VantResolver()] })
  ]
}