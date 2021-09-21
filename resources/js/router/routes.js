function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/page2', name: 'page2', component: page('page2.vue') },

  { path: '/painel/pagina1', name: 'pagina1', component: page('painel/pagina1.vue') },
  { path: '/painel/pagina2', name: 'pagina2', component: page('painel/pagina2.vue') },
  { path: '/painel/pagina3', name: 'pagina3', component: page('painel/pagina3.vue') },

  // Painel
    { path: '/painel/dashboard', name: 'painel.dashboard', component: page('painel/dashboard.vue') },
    { path: '/painel/pedidos/novos', name: 'painel.pedidos.novos', component: page('painel/pedidos/novos.vue') },
    { path: '/painel/pedidos/finalizados', name: 'painel.pedidos.finalizados', component: page('painel/pedidos/finalizados.vue') },
    { path: '/painel/pedidos/cancelados', name: 'painel.pedidos.cancelados', component: page('painel/pedidos/cancelados.vue') },
    { path: '/painel/cardapio/produtos', name: 'painel.cardapio.produtos', component: page('painel/cardapio/produtos.vue') },
    { path: '/painel/cardapio/categorias', name: 'painel.cardapio.categorias', component: page('painel/cardapio/categorias.vue') },
    { path: '/painel/cardapio/opcionais', name: 'painel.cardapio.opcionais', component: page('painel/cardapio/opcionais.vue') },
    { path: '/painel/cardapio/extras', name: 'painel.cardapio.extras', component: page('painel/cardapio/extras.vue') },
    { path: '/painel/cardapio/promocoes', name: 'painel.cardapio.promocoes', component: page('painel/cardapio/promocoes.vue') },
    { path: '/painel/cardapio/montarprato', name: 'painel.cardapio.montarprato', component: page('painel/cardapio/montarprato.vue') },
    { path: '/painel/cardapio/pizza/tamanhos', name: 'painel.cardapio.pizza.tamanhos', component: page('painel/cardapio/pizza/tamanhos.vue') },
    { path: '/painel/cardapio/pizza/bordas', name: 'painel.cardapio.pizza.bordas', component: page('painel/cardapio/pizza/bordas.vue') },
    { path: '/painel/cardapio/pizza/massas', name: 'painel.cardapio.pizza.massas', component: page('painel/cardapio/pizza/massas.vue') },
    { path: '/painel/cardapio/pizza/sabores', name: 'painel.cardapio.pizza.sabores', component: page('painel/cardapio/pizza/sabores.vue') },
    { path: '/painel/clientes', name: 'painel.clientes', component: page('painel/clientes.vue') },
    { path: '/painel/bairros', name: 'painel.bairros', component: page('painel/bairros.vue') },
    { path: '/painel/admins', name: 'painel.admins', component: page('painel/admins.vue') },
    { path: '/painel/config/loja', name: 'painel.config.loja', component: page('painel/config/loja.vue') },
    { path: '/painel/config/layout', name: 'painel.config.layout', component: page('painel/config/layout.vue') },
    { path: '/painel/config/expediente', name: 'painel.config.expediente', component: page('painel/config/expediente.vue') },


  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
