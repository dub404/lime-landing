import { getAds } from "./getAds.js";
import { UI } from "./ui.js";

export const insertAdsDataToHtml = async () => {
  try {
    const ads = await getAds();

    if (ads) {
      UI.advertising.container.innerHTML = `
        <div class="advertising">
          <img class="advertising-image" src="${ads.file ?? ''}" />
          <div class="advertising-content">
            <div>
              <div class="adertising-title">${ads.header ?? ''}</div>
              <pre class="adertising-text">${ads.description ?? ''}</pre>
            </div>
            <a class="adertising-link" href="${ads.link ?? ''}">Подробнее</a>
          </div>
        </div>
      `;
    }
  } catch (err) { }
};