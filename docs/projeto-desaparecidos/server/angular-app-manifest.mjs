
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMZYTKO4.js",
      "chunk-T5OLOSR6.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EL3XAL2O.js",
      "chunk-T5OLOSR6.js"
    ],
    "route": "/detalhe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 78117, hash: '7d45d5432d187123dd59b43d0a9f2837696d703cc58f0422d0020f831554b0bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31230, hash: '20f3dee72ef4adeaaafaba551b5ec7590d3103ed0946933571e2c9fc4114765f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'detalhe/index.html': {size: 197373, hash: 'dcf8b7d3ae83d20bb35f9d323acf810cdd9905bc323cc49d761e61b60fc14f49', text: () => import('./assets-chunks/detalhe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 197373, hash: 'f46aa26a3478cade2f38f5fcf31512dc3f585f9a2bb364e3dd2d5f73144260a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TMA5GU7Q.css': {size: 88527, hash: '9NJrx7JJ3BU', text: () => import('./assets-chunks/styles-TMA5GU7Q_css.mjs').then(m => m.default)}
  },
};
