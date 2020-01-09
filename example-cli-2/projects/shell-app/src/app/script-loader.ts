const scriptCache = new Map<string, Promise<any>>();

/**
 * Load an external script.
 *
 * @param url Absolute URL of script to load
 * @param name Name of global variable that the script is expected to define
 * @param module Name of the global variable property that the script is expected to define
 */
export function loadScript(url, name, module): Promise<any> {
  let promise;
  if (scriptCache.has(url)) {
    // TODO: normalize URL
    promise = scriptCache.get(url);
  } else {
    promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.onerror = event => reject(new Error(`Failed to load '${url}'`));
      script.onload = resolve;
      script.async = true;
      script.src = url;

      if (document.currentScript) {
        document.currentScript.parentNode.insertBefore(script, document.currentScript);
      } else {
        (document.head || document.getElementsByTagName('head')[0]).appendChild(script);
      }
    });

    scriptCache.set(url, promise);
  }

  return promise.then(() => {
    if (window[name] === undefined) {
      throw new Error(`"${name}" was not created by "${url}"`);
    }
    if (window[name][module] === undefined) {
      throw new Error(`"${module}" is not exported from "${name}" (${url})`);
    }
    return window[name][module];
  });
}
