
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/projeto-desaparecidos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMZYTKO4.js",
      "chunk-T5OLOSR6.js"
    ],
    "route": "/projeto-desaparecidos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EL3XAL2O.js",
      "chunk-T5OLOSR6.js"
    ],
    "route": "/projeto-desaparecidos/detalhe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 78139, hash: 'bac9e3a7eb248917971de6669576042bb7aba3a0dc5297dd07008b43daf86c09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31252, hash: 'febae937358109624d2d8685d02ef32155f689092b5246c9035e185b24c5e27e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 197395, hash: '8261d13f93d3d3cae999c6002755e365b729970dace9d4ce4c521f8e6da25818', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detalhe/index.html': {size: 197395, hash: 'c1b82f6409b13518ce801818855950bd3498da67d2407ea2a7ec591595e79a57', text: () => import('./assets-chunks/detalhe_index_html.mjs').then(m => m.default)},
    'styles-TMA5GU7Q.css': {size: 88527, hash: '9NJrx7JJ3BU', text: () => import('./assets-chunks/styles-TMA5GU7Q_css.mjs').then(m => m.default)}
  },
};
