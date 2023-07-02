const random = () => {
    const assets = [
      { image: '/assets/A.jpg' },
      { image: '/assets/T.jpg' },
      { image: '/assets/M.jpg'},
      { image: '/assets/J.jpg' },
      { image: '/assets/Q.jpg' },
      { image: '/assets/V.jpg' },
      { image: '/assets/G.jpg'},
      { image: '/assets/D.jpg' },
    ];

    return [...assets, ...assets].sort(
        () => Math.random() - 0.5).map(
            (card) => (
                { ...card, id: Math.random() }
                ));
  };
  
  export default random;