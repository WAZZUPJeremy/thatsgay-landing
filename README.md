
# thatsgay? – Landing (Next.js + Vercel)

## Local dev
```bash
pnpm i # ou npm i / yarn
pnpm dev # http://localhost:3000
```

## Google Sheets (Apps Script) – webhook
1. Crée un **Google Sheet** nommé `Leads (thatsgay?)` puis ajoute une feuille `Leads` (colonnes A: Timestamp, B: Email).
2. Ouvre **Extensions → Apps Script** et colle ce code :

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var email = data.email;
    var ts = new Date();
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    ss.appendRow([ts, email]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Déploie** → *Nouveau déploiement* → type **Application Web** → *Exécuter en tant que moi* → Accès : **Tout le monde** (ou *Toute personne disposant du lien*).4. Récupère l’URL de déploiement et mets-la dans `.env.local` :

```
APPS_SCRIPT_URL="https://script.google.com/macros/s/xxx/exec"
```

> Remarque : l’app appelle **/api/subscribe** (Next.js) qui forward vers Apps Script. Aucune CORS côté client.

## Déploiement Vercel
1. Push ce dossier dans un repo (GitHub/GitLab/Bitbucket).
2. Sur **Vercel**, *Add New Project* → importe le repo.
3. Dans **Environment Variables**, ajoute `APPS_SCRIPT_URL` avec l’URL du script.
4. *Deploy*. C’est tout 🎉

## Où changer les liens stores & réseaux
Dans `app/page.tsx`, section **CTASection** (chercher “App Store / Google Play / Discord”).

## Personnalisation rapide
- **Couleurs/typographies** : `StyleBrand()` dans `app/page.tsx`.
- **Roadmap** : tableau `items`.
- **Compteur live** : composant `LiveCounter()`.
- **Stickers** : `/public/assets/…`.

---

*Build 2025-08-09T12:16:37.687475Z*
