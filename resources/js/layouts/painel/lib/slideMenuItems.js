module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'item',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    badge: {
      type: 'String',
      data: 'new'
    },
    router: {
      name: 'painel.dashboard'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-clipboard',
    name: 'Pedidos',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Novos Pedidos',
        router: {
          name: 'painel.pedidos.novos'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Pedidos Finalizados',
        router: {
          name: 'painel.pedidos.finalizados'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Pedidos Cancelados',
        router: {
          name: 'painel.pedidos.cancelados'
        }
      },
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-users',
    name: 'Clientes Cadastrados',
    router: {
      name: 'painel.clientes'
    }
  },
  {
    type: 'item',
    isHeader: true,
    name: 'CONFIGURAÇÕES'
  },
  {
    type: 'tree',
    icon: 'fa fa-cutlery',
    name: 'Cardapio',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Produtos',
        router: {
          name: 'painel.cardapio.produtos'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Categorias',
        router: {
          name: 'painel.cardapio.categorias'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Opcionais',
        router: {
          name: 'painel.cardapio.opcionais'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Cobranças Extras',
        router: {
          name: 'painel.cardapio.extras'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Promoções',
        router: {
          name: 'painel.cardapio.promocoes'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Monte seu Prato',
        router: {
          name: 'painel.cardapio.montarprato'
        }
      },
      {
        type: 'tree',
        icon: 'fa fa-cutlery',
        name: 'Pizzas',
        items: [
          {
            type: 'item',
            icon: 'fa fa-circle-o',
            name: 'Tamanho',
            router: {
              name: 'painel.cardapio.pizza.tamanhos'
            }
          },
          {
            type: 'item',
            icon: 'fa fa-circle-o',
            name: 'Bordas',
            router: {
              name: 'painel.cardapio.pizza.bordas'
            }
          },
          {
            type: 'item',
            icon: 'fa fa-circle-o',
            name: 'Massas',
            router: {
              name: 'painel.cardapio.pizza.massas'
            }
          },
          {
            type: 'item',
            icon: 'fa fa-circle-o',
            name: 'Sabores',
            router: {
              name: 'painel.cardapio.pizza.sabores'
            }
          }
        ]
      }
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-map-o',
    name: 'Cadastro de Bairros',
    router: {
      name: 'painel.bairros'
    }
  },
  {
    type: 'item',
    icon: 'fa fa-user-plus',
    name: 'Usuarios Adm',
    router: {
      name: 'painel.admins'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-cog',
    name: 'Config. do Sistema',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Estabelecimento',
        router: {
          name: 'painel.config.loja'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Aparencia',
        badge: {
          type: 'String',
          data: '1'
        },
        router: {
          name: 'painel.config.layout'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Expediente',
        badge: {
          type: 'String',
          data: '1'
        },
        router: {
          name: 'painel.config.expediente'
        }
      },
    ]
  }
]
