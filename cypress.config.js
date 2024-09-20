/* eslint-disable no-unesed-vars */
/* eslint-disable no-undef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8f9zc9",
  e2e: {
   baseUrl: 'https://store.maringafc.com/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, // Habilita a gravação de vídeo
    videoCompression: 32, // Define a compressão do vídeo (0 para sem compressão)
    videoUploadOnPasses: true, // Define se os vídeos devem ser enviados mesmo quando os testes passam
    reporter: 'mochawesome',
    
  },
});
