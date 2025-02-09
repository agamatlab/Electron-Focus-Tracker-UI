const { ipcRenderer } = require('electron');

document.getElementById('myButton').addEventListener('click', () => {
  // Send a message to the main process to open a new page.
  ipcRenderer.send('open-new-page');
});