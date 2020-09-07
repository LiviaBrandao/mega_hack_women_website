// Compiled using marko@4.23.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/mega_hack_women_website$1.0.0/src/app/views/costumers/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title> Bora Mana</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css><link rel=stylesheet href=../views/css/style.css></head><body><div class=container-fluid> <header class=\"site-header py-3\"> <nav class=\"navbar navbar-expand-lg navbar-light bg\" style=\"background-color: #472585;\"><a class=navbar-brand href=#>Navbar</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarNav aria-controls=navbarNav aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarNav><ul class=navbar-nav><li class=\"nav-item active\"><a class=nav-link href=#>Home <span class=sr-only>(current)</span></a></li><li class=nav-item><a class=nav-link href=#>Features</a></li><li class=nav-item><a class=nav-link href=#>Pricing</a></li><li class=nav-item><a class=\"nav-link disabled\" href=#>Disabled</a></li></ul></div></nav> </header><body><div class=div-aleatoria>texto</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  _preferred_script_location_tag({}, out);

  out.w("</body></div> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/mega_hack_women_website$1.0.0/src/app/views/costumers/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
