// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed.",
  version: "0.3.7",
  name: "azeirah:marked",
  git: "https://github.com/azeirah/meteor-marked.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("templating", "client", {weak: true});

  api.add_files("marked/lib/marked.js");
  api.add_files("highlightjs/highlight.pack.js");
  api.add_files("highlightjs/zenburn.css");
  api.add_files('template-integration.js', 'client');
});
