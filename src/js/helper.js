import { TIMEOUT_SEC } from "./config.js";
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Sorry we  have had issues with the server`));
    }, sec * 1000);
  });
};

export const getJSONfromAPI = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error(`Sorry we can't find your word error: ${res.status}`);
    return data;
    /////////////////////////////////////
  } catch (err) {
    throw err;
  }
};

export const getYoutubefromAPI = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error(`Sorry we can't find your word error: ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
