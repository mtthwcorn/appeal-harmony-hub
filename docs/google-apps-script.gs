const SHEET_NAME = 'Intake';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found.`);
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.firstName || '',
      payload.email || '',
      payload.medication || '',
      payload.insuranceCompany || '',
      payload.denialType || '',
      payload.hasDenialLetter || '',
      payload.description || '',
      payload.emailStatus || '',
      payload.source || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          ok: false,
          error: error instanceof Error ? error.message : String(error),
        }),
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
