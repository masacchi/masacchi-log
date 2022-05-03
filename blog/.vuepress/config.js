const Token = require("markdown-it/lib/token");

module.exports = {
  title: "Masacchi-log",
  description: "勉強したことをアウトプットするためのブログ",
  base: "/",
  theme: "@vuepress/theme-blog",
  dest: "public",
  locales: {
    "/": {
      lang: "ja",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/icon-192x192.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  themeConfig: {
    dateFormat: "YYYY/MM/DD",
    smoothScroll: true,
    pwa: true,
    sitemap: {
      hostname: "https://blog.masacchi.dev",
    },
    feed: {
      canonical_base: "https://blog.masacchi.dev",
      rss: true,
      atom: true,
      json: true,
    },
  },
  markdown: {
    linkify: true,
    // TODO svgをobjectタグでレンダリングする
    extendMarkdown: (md) => {
      // md.renderer.rules.image = function (tokens, idx, options, env, slf) {
      //   const token = tokens[idx];
      //   const src = token.attrGet("src");
      //   // svgの場合はobjectタグで表示
      //   if (/\.svg$/.test(src)) {
      //     // token.hidden = true; // 元のタグを非表示
      //     const objectToken = new Token("image", "img", -1);
      //     objectToken.content = token.content;
      //     objectToken.block = true;
      //     objectToken.attrPush(["data", src]);
      //     objectToken.attrPush(["alt", token.content]);
      //     objectToken.attrPush(["type", "image/svg+xml"]);
      //     // 元のタグ(img)の後に、objectタグを追加
      //     // objectToken.children = [Object.assign({}, token)];
      //     tokens.splice(idx + 1, 0, objectToken);
      //   }
      //   // ----- original process[md.renderer.rules.image] -----
      //   // "alt" attr MUST be set, even if empty. Because it's mandatory and
      //   // should be placed on proper position for tests.
      //   //
      //   // Replace content with actual value
      //   token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(
      //     token.children,
      //     options,
      //     env
      //   );
      //   return slf.renderToken(tokens, idx, options);
      //   // -----------------------------------------------------
      // };
    },
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-191700964-1",
      },
    ],
  ],
};
