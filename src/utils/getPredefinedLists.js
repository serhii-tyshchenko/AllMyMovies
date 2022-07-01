const getPredefinedLists = (dic) => [
  { id: 'favourites', title: dic.FAVOURITES, icon: 'heart' },
  { id: 'watched', title: dic.WATCHED, icon: 'history' },
  { id: 'watch-later', title: dic.WATCH_LATER, icon: 'clock' },
];

export default getPredefinedLists;
