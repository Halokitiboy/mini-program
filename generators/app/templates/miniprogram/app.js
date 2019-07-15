App({
  onLaunch(options) {
  },
  onError(err) {
    console.log('App.onError', err);
  },
  onPageNotFound(err) {
    console.log('App.onPageNotFound', err);
  },
});
