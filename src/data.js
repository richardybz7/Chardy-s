const PRODUCTS_DATA = [
  {
    title: 'New',
    arrangement: 'A',
    items: [
      {
        id: 1,
        name: "Powdered sugar",
        remaining: 10,
        totalSaleCount: 10
      },
      {
        id: 2,
        name: "Cinnamon sugar",
        remaining: 5,
        totalSaleCount: 10
      },
      {
        id: 3,
        name: "Apple fritter",
        remaining: 10,
        totalSaleCount: 10
      },
      {
        id: 4,
        name: "Maple",
        remaining: 4,
        totalSaleCount: 10
      }
    ]
  },
  {
    title: 'Best Sellers',
    arrangement: 'B',
    items : [
      {
        id: 5,
        name: "Glazed",
        remaining: 10,
        totalSaleCount: 10
      },
      {
        id: 6,
        name: "Chocolate",
        remaining: 5,
        totalSaleCount: 10
      },
      {
        id: 7,
        name: "Jelly-filled",
        remaining: 10,
        totalSaleCount: 10
      },
      {
        id: 8,
        name: "Blueberry",
        remaining: 4,
        totalSaleCount: 10
      }
    ]
  },
  {
    title: 'Classics',
    arrangement: 'C',
    items : [
      {
        id: 9,
        name: "Vanilla sprinkle",
        remaining: 10,
        totalSaleCount: 10
      },
      {
        id: 10,
        name: "Chocolate sprinkle",
        remaining: 5,
        totalSaleCount: 10
      },
      {
        id: 11,
        name: "Strawberry filled",
        remaining: 10,
        totalSaleCount: 10
      },
      {
        id: 12,
        name: "Boston cream",
        remaining: 4,
        totalSaleCount: 10
      },
      {
        id: 13,
        name: "Nutty choco",
        remaining: 6,
        totalSaleCount: 10
      },
      {
        id: 14,
        name: "Bavarian filled",
        remaining: 7,
        totalSaleCount: 10
      },
      {
        id: 15,
        name: "Pineapple filled",
        remaining: 15,
        totalSaleCount: 5
      },
      {
        id: 16,
        name: "Tiramisu",
        remaining: 8,
        totalSaleCount: 4
      },
      {
        id: 16,
        name: "Alcapone",
        remaining: 11,
        totalSaleCount: 4
      }
    ]
  },
  {
    title: 'Drinks',
    arrangement: 'D',
    items : [
      {
        id: 17,
        name: "Chocolate",
        type: [
          'Hot choco',
          'Iced choco'
        ],
        remainingLiters: 20,
        totalSaleLiters: 10
      },
      {
        id: 18,
        name: "Coffee",
        type: [
          'Hot coffee',
          'Iced coffee'
        ],
        remainingLiters: 20,
        totalSaleLiters: 10
      }
    ]
  }
]

export default PRODUCTS_DATA;