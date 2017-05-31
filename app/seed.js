  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/128.jpg',
      productImageUrl: 'app/images/yellow_pail.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/129.png',
      productImageUrl: 'images/supermajority.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/130.jpg',
      productImageUrl: 'images/tinhat.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/131.png',
      productImageUrl: 'images/haught_naught/.png',
    },
  ];

  export {products, generateVoteCount};
