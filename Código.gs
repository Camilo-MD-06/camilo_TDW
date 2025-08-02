function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle("Valle Grande")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
