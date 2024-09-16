const header = {
  buttonLogo: {
    name: 'ZEN',
    sourceIcon: 'assets/icons/logo.svg'
  },
  langs: [
    {
      key: 'en',
      name: 'EN'
    },
    {
      key: 'ru',
      name: 'RU'
    }
  ], 

  nav: [
    {
      key: 'download',
      name: 'Download'
    },
    {
      key: 'warranty',
      name: 'Warranty'
    },
    {
      key: 'care',
      name: 'Care'
    },
    {
      key: 'cashback',
      name: 'Cashback'
    },
    {
      key: 'clients',
      name: 'Clients'
    }
  ]
}

const download = {
  title: 'Peaceful shopping mindful money',
  text: 'See how we can help with making your shopping experience and money management more ZEN.',
  links: [
    {
      name: 'apple',
      url: 'https://apple.com',
      sourceIcon: './assets/icons/apple.svg'
    },
    {
      name: 'google',
      url: 'https://google.com',
      sourceIcon: './assets/icons/google.svg'
    }
  ],
  imageBlock: {
    source: './assets/images/1.jpg',
    description: 'Bag and device'
  } 
};

const warranty = {
  title: '1-year warranty boost',
  texts: [
    {
      text1: 'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      text2: 'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.',
    }
  ],
  imageBlock: {
    source: './assets/images/2.jpg',
    description: 'Basket'
  }
};

const care = {
  title: 'ZEN Care',
  texts: [
    {
      text1: "Shopping online is usually a delightful experience. Until it's not.",
      text2: `Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.`,
      text3: 'But, here comes ZEN Care: a free, built-in shopping protection.'
    }
  ],
  imageBlock: {
    source: './assets/images/3.jpg',
    description: 'Card'
  }
};

const cashback = {
  title: 'and cashback!',
  texts: [
    {
      text1: 'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
      text2: 'We gave it a thought and made cashback way more friendly.',
      text3: 'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.'
    }
  ],
  buttonText: 'Order a consultation'
};

const clients = {
  brands: {
    rosegal: {
      lightsource: 'assets/brands/1_Sun.svg',
      darksource: 'assets/brands/1_Dark.svg',
      description: 'Brand 1'
    },
    gearbest: {
      lightsource: 'assets/brands/2_Sun.svg',
      darksource: 'assets/brands/2_Dark.svg',
      description: 'Brand 2'
    },
    allegro: {
      lightsource: 'assets/brands/3_Sun.svg',
      darksource: 'assets/brands/3_Dark.svg',
      description: 'Brand 3'
    },
    AliExpress: {
      lightsource: 'assets/brands/4_Sun.svg',
      darksource: 'assets/brands/4_Dark.svg',
      description: 'Brand 4'
    },
    bookingcom: {
      lightsource: 'assets/brands/5_Sun.svg',
      darksource: 'assets/brands/5_Dark.svg',
      description: 'Brand 5'
    },
    mediaMarket: {
      lightsource: 'assets/brands/6_Sun.svg',
      darksource: 'assets/brands/6_Dark.svg',
      description: 'Brand 6'
    },
    rtveuroagd: {
      lightsource: 'assets/brands/7_Sun.svg',
      darksource: 'assets/brands/7_Dark.svg',
      description: 'Brand 7'
    },
    groupon: {
      lightsource: 'assets/brands/8_Sun.svg',
      darksource: 'assets/brands/8_Dark.svg',
      description: 'Brand 8'
    }
  }
};

const footer = {
  Learn: {
    links: [
      {
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Help center'
        },  
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Join ZEN team'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Privacy Policy'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Cookies'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Terms of use'
        }
      }
    ]
  },
  Discover: {
    links: [
      {
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'For developers'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Apple Pay'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Google Pay'
        },
      }
    ]
  },
  Offer: {
    links: [
      {
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Business'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Personal'
        },
      }
    ]
  },
  Language: {
    links: [
      {
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'English'
        },
        url: 'http://example.com',
        content: {
          type: 'text',
          data: 'Polish'
        }
      }
    ]
  },
  FollowUs: {
    links: [
      {
        url: 'http://example.com',
        content: {
          type: 'imege',
          data: 'assets/icons/in.svg'    
        }
      }
    ]
  },
  Contact: {
    links: [
      {
        url: 'mailto:hello@zen.com',
        content: {
          type: 'email',
          data: 'hello@zen.com'
        }
      }
    ]
  },
  info: {
    texts: [
      'ZEN is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
      'Registration number of the company 304749651, VAT ID LT100011714916.',
      'License of electronic money institutions number LB000457.',
      'Share capital 2.185.000,00 EUR.',
      'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
      'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.'
    ]
  },
  Developer: {
    links: [
      {
        url: 'http://example.com',
        content: {
          type: 'imege',
          data: 'assets/icons/developer.svg'    
        }
      }
    ]
  }
}


