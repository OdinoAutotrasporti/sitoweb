# Odino Autotrasporti — Sito Web

## Panoramica del Progetto

Sito web statico per **Odino Autotrasporti Srl**, azienda di trasporto merci su strada con sede a Cuneo (CN), attiva dal 1987 in Piemonte, Liguria e tutta Italia.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS
**Export:** Sito completamente statico (`output: 'export'` in `next.config.js`)
**Lingua:** Italiano
**Nessun backend, nessun database, nessuna autenticazione.**

Company name: Odino Autotrasporti
Logo: Logo.png (da usare in produzione al posto di logo-placeholder.svg)
Obiettivi: Velocità, semplicità, credibilità istituzionale. Nessun acquisto online.

---

## Palette Colori (token Tailwind)

| Token     | Hex       | Utilizzo                                      |
|-----------|-----------|-----------------------------------------------|
| `navy`    | `#1B2A41` | Testo, bordi, elementi strutturali            |
| `silver`  | `#D1D5D8` | Sfondi medi, toni intermedi                   |
| `gold`    | `#A88E5E` | Accenti, CTA, linee decorative                |
| `light`   | `#F4F5F6` | Highlights luminosi, sezioni pulite           |

---

## Font Stack e Variabili CSS

| Variabile CSS        | Font Google             | Utilizzo                        |
|----------------------|-------------------------|---------------------------------|
| `--font-display`     | Cormorant Garamond      | Heading display, titoli sezioni |
| `--font-condensed`   | Barlow Condensed        | Nav, label, statistiche, badge  |
| `--font-body`        | Barlow                  | Testo corpo, descrizioni        |

Configurati in `app/layout.tsx` con `next/font/google`.
Esposti via classi Tailwind: `font-display`, `font-condensed`, `font-body`.

---

## Mappa Sezioni → Componenti

| Sezione         | Componente               | Anchor ID         |
|-----------------|--------------------------|-------------------|
| Navigazione     | `Navbar.tsx`             | —                 |
| Hero            | `Hero.tsx`               | `#hero`           |
| Chi Siamo       | `ChiSiamo.tsx`           | `#chi-siamo`      |
| Servizi         | `Servizi.tsx`            | `#servizi`        |
| Flotta          | `Flotta.tsx`             | `#flotta`         |
| Certificazioni  | `Certificazioni.tsx`     | `#certificazioni` |
| Contatti        | `Contatti.tsx`           | `#contatti`       |
| Footer          | `Footer.tsx`             | —                 |

Assemblati in `app/page.tsx`. Separatori gold tra le sezioni via `.section-divider` (definito in `globals.css`).

---

## Come Aggiungere una Nuova Sezione

1. Crea `components/NuovaSezione.tsx` seguendo il pattern esistente:
   - `'use client'` se usa hooks
   - `useRef` + `IntersectionObserver` per animazione scroll-triggered
   - `id="nome-sezione"` sull'elemento `<section>`
   - `aria-labelledby` con heading interno
2. Importa e aggiungi il componente in `app/page.tsx` tra due `<Divider />`
3. Aggiungi il link di navigazione in `components/Navbar.tsx` (array `navLinks`)
4. Aggiorna questa tabella nel CLAUDE.md

---

## Come Aggiornare i Dati di Contatto

I recapiti appaiono in due luoghi:

1. **`components/Contatti.tsx`** — sezione principale con indirizzo, telefono, email, orari
2. **`components/Footer.tsx`** — colonna recapiti nel footer

Aggiorna entrambi i file. I campi da modificare sono:
- Indirizzo: `Via Roma 14, Cuneo (CN) 12100`
- Telefono: `+39 0171 000000`
- Email: `info@odinoautotrasporti.it`
- Orari: `Lun–Ven 7:00 – 18:00`
- P.IVA: `IT00000000000`

---

## Deploy

### Vercel (raccomandato)
```bash
npm install -g vercel
vercel --prod
```
Vercel rileva automaticamente Next.js con `output: 'export'` e serve la cartella `out/`.

### Deploy Statico Manuale
```bash
npm run build
# La cartella `out/` contiene il sito statico completo
# Carica il contenuto di `out/` su qualsiasi hosting statico:
# GitHub Pages, Netlify, server Apache/Nginx
```

### Build Locale
```bash
npm install
npm run dev     # sviluppo su http://localhost:3000
npm run build   # build statica → cartella out/
```

---

## Struttura File

```
app/
  layout.tsx        ← root layout, font Google, metadata SEO
  page.tsx          ← homepage con tutte le sezioni
  globals.css       ← variabili CSS font, base resets, .section-divider
components/
  Navbar.tsx        ← navbar fissa, blur, hamburger mobile
  Hero.tsx          ← fullscreen hero con texture metallica CSS
  ChiSiamo.tsx      ← stat counter animati + testo aziendale
  Servizi.tsx       ← 4 card servizi con icone SVG inline
  Flotta.tsx        ← 4 card veicoli con illustrazioni SVG
  Certificazioni.tsx← 4 badge certificazioni con bordi gold
  Contatti.tsx      ← form contatto + recapiti + mappa placeholder
  Footer.tsx        ← footer dark con nav, recapiti, P.IVA
public/
  logo-placeholder.svg  ← logo SVG testuale provvisorio
  Logo.png              ← logo definitivo (da sostituire al placeholder)
next.config.js      ← output: 'export', images unoptimized
tailwind.config.ts  ← colori custom, font family, keyframes
tsconfig.json
```
## Final git commit instruction
at the end of each amendment or modification to the website, when completed all the step, give a suggestion on the best git commit description to adopt