// Matomo integration. This is mostly a generalized version of the basic matomo
// tracker code you'd insert in a JS page. However, since vuepress is SSR, it
// requires some special workarounds to make sure paq object storage happens
// correctly.

export default ({ router }) => {
  // Don't remove window typeof check, as this what makes sure the SSR parser
  // doesn't error out during builds.
  //if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  if (typeof window !== 'undefined') {

    // We're in SSR space here, meaning that we have to explictly attach _paq to
    // the window in order to store it globally.
    if (window._paq == undefined) {
      window._paq = [];
    }
      
    router.afterEach((to) => {
      // router.afterEach seems to fire before the actual navigation (?), so run
      // our push in the next loop, after the new document has been set.
      setTimeout(() => {
        // Use window global here, the convenience variable doesn't stick around
        // for some reason.
        var u="https://kpi.unik-name.com/";
        //window._paq.push(['setTrackerUrl', u+'matomo.php']);
        //window._paq.push(['setSiteId', '2']);
        window._paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
        window._paq.push(['setCustomUrl', to.fullPath]);
        window._paq.push(['setCookieDomain', '*.uns.network']);
        window._paq.push(["setDoNotTrack", true]);
        window._paq.push(['trackPageView']);
        window._paq.push(['enableLinkTracking']);
        }, 0);
    });
  }
}
