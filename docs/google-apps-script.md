Paste this into a Google Apps Script project bound to your Google Sheet, then deploy it as a web app:

Current deployment reference:

```text
Deployment ID: AKfycbxpKTipmov5C8t5OKesaEI0cjV54645q-kB3YWbSuHVA_bsaEAsKwbRfJtte-ZBESY
Web app URL: https://script.google.com/macros/s/AKfycbxpKTipmov5C8t5OKesaEI0cjV54645q-kB3YWbSuHVA_bsaEAsKwbRfJtte-ZBESY/exec
```

```javascript
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
      payload.selectedPackage || payload.tier || '',
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
```

Expected sheet headers:

```text
Timestamp | First name | Email | What was denied | Insurance company | What happened | Selected package | Denial letter available | Short description | Email status | Source
```

If your sheet already exists, insert the new `Selected package` column between `What happened` and `Denial letter available`.

After updating the script, redeploy the Apps Script web app so `GOOGLE_APPS_SCRIPT_URL` points to the latest deployed version.
