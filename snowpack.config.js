module.exports={
  mount:{
    public:{url:'/', static:true},
    src:{url:'/dist'}
  },
  optimize:{
    minify:true
  },
  plugins:[
    '@snowpack/plugin-sass'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  rollup: {
      plugins: [require('rollup-plugin-sass')()],
    },
}