const state = {
    selected: 'volvo',
    quantity: 13,
    bus: ['SRS', 'volvo', 'Sugama', 'durgamba']
  };
  const newBus = {
    ...state,
    selected: 'SRS',
    quantity: 5,
    origin: 'imported from spain'
  };
  console.log(newBus);