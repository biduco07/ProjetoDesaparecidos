
export default {
  basePath: '/ProjetoDesaparecidos',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
