import { loadGapiInsideDOM } from 'gapi-script';
export const mountScripts = () => {
  return new Promise(async(resolve, reject) => {
    const script = document.createElement("script");
    const gapi = await loadGapiInsideDOM();
    resolve();
    // script.src = "https://apis.google.com/js/api.js";
    // script.async = true;
    // script.defer = true;
    // script.onload = () => {
    //   script.onload = () => { };
    //   resolve();
    // };
    // script.onreadystatechange = () => {
    //   if (script.readyState === "complete") script.onload();
    // };
    // document.body.appendChild(script);
  });
};

