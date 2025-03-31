
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ProjetoDesaparecidos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-UMZYTKO4.js",
      "chunk-T5OLOSR6.js"
    ],
    "route": "/ProjetoDesaparecidos"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EL3XAL2O.js",
      "chunk-T5OLOSR6.js"
    ],
    "route": "/ProjetoDesaparecidos/detalhe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 78138, hash: 'afd847ae0d7e86fe9a41caee0b25e56bb2caba46897dc813af9d152e74d2c50e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31251, hash: '609d4c9f98126d516280d14dfb09f0b209ab1b014fb54f7c59d17965c510aea2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 197496, hash: 'd733a71f0f3e8f293045d0e692c8f50081bc064fd58412987b9bd600bf82decb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detalhe/index.html': {size: 197496, hash: '175c4b42145128e00b23adf5a99914869f4c769f9e101c4729c6bee68049a16c', text: () => import('./assets-chunks/detalhe_index_html.mjs').then(m => m.default)},
    'styles-TMA5GU7Q.css': {size: 88527, hash: '9NJrx7JJ3BU', text: () => import('./assets-chunks/styles-TMA5GU7Q_css.mjs').then(m => m.default)}
  },
};
