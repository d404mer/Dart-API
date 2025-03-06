window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // Подключаем локальный YAML-файл с документацией
  window.ui = SwaggerUIBundle({
    url: "./openapi.yaml",  // Укажи путь к своему YAML файлу
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
