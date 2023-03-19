const path = require('path');
const sizeOf = require('image-size');

module.exports = function(context, options) {
  const { siteConfig } = context;
  const { baseUrl } = siteConfig;

  function getImageSize(src) {
    const imagePath = path.join(process.cwd(), 'static', src);
    const dimensions = sizeOf(imagePath);
    return {
      width: dimensions.width,
      height: dimensions.height,
    };
  }

  return {
    name: 'image-shadow',

    injectHtmlTags() {
      return {
        headTags: [
          `<style>
            .image-shadow {
              display: block;
              box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
              border: 1px solid #ddd;
            }
            .image-shadow-wrapper {
              display: flex;
              justify-content: center;
            }
            @media (max-width: 768px) {
              .image-shadow {
                width: 100%;
              }
            }
          </style>`,
        ],
      };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      const imageRegex = /<img src="([^"]*)" alt="([^"]*)" width="(\d*)" height="(\d*)" \/>/g;
      let matches;
      while ((matches = imageRegex.exec(content))) {
        const src = matches[1];
        const alt = matches[2];
        const width = matches[3];
        const height = matches[4];
        const size = getImageSize(src);
        const imageSize = { width: width || size.width, height: height || size.height };
        const wrapperClasses = ['image-shadow-wrapper'];
        if (!width) {
          wrapperClasses.push('full-width');
        }
        const html = `
          <div class="${wrapperClasses.join(' ')}">
            <img src="${baseUrl}${src}" alt="${alt}" class="image-shadow" style="width: ${imageSize.width}px; height: ${imageSize.height}px;">
          </div>
        `;
        content = content.replace(matches[0], html);
      }
      setGlobalData({ content });
    },
  };
};
