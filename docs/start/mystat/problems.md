---
title: Nejčastější problémy
---

# Nejčastější problémy s MyStat

Přihlášení do MyStatu je pro nového lektora obvykle trochu komplikované.

## Nesprávné přihlašovací jméno nebo heslo

Ujistěte se, že se přihlašujete do administrátorské verze MyStatu, a tedy, že v URL je zmíněno slovo admin. Podobně tak se ujistěte, že máte vybránu správnou pobočku. Více informací naleznete v sekci [přihlášení](./).

## Nevidím seznam studentů

Seznam studentů se zobrazí až poté, co Vám budou přiděleny některé skupiny.

## Vidím seznam studentů, ale přesto se nemohu připojit

Do MyStatu budete mít přístup pouze po první přednášce, přesněji tedy poté, co v Logbooku označíte přítomnost svých studentů.

## Stránka se načte, ale je prázdná

Pokud je stránka celá bílá a přitom se zdá, že se "načetla", je to z toho důvodu, že se některý ze skriptů zasekl v cache paměti. Tento problém se častěji stává studentům, než lektorům.

Snadné řešení je změnit prohlížeč. Trochu komplikovanější, ale stabilnější řešení je smazat cache pomocí DevTools.

1. **Otevřte DevTools**, neboli vývojářské nástroje. Ty se dá otevřít mnoha způsoby, například pravým kliknutím na stránku a výběrem "Prozkoumat", nebo také zmáčknutím klávesy <kbd>F12</kbd>, anebo zmáčknutím <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>.
2. Zmáčkněte <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>. Měla by se otevřít vyhledávací nabídka ve které je napsáno **Run**.
3. Napište **Clear Site Data** a vyberte možnost Clear Site Data (including third-party cookies).
4. Obnovte stránku, například stisknutím klávesy <kbd>F5</kbd>.

<picture>
  <source srcset="/included/clear-site-data.avif" type="image/avif" />
  <source srcset="/included/clear-site-data.webp" type="image/webp" />
  <img loading="lazy" src="/included/clear-site-data.png" alt="Ukázka smazání dat webové stránky"/>
</picture>

## Problémy studentů

### Postupné odečítání diamantů

Na první hodině je vhodné studentům říci, že by si v MyStatu měli vyplnit profilovou fotografii a stejně tak ověřit e-mail. Pokud tak neudělají, může se stát, že po nějaké době — v řádů měsíců — se začnou pomalu odečítat diamanty za to, že si profil nevyplnili. V profilu by mělo být napsáno _"profil vyplněn ze 100 %"_.

<div class="picture-with-arrows">
  <picture>
    <source srcset="/included/mystat/no-photo.avif" type="image/avif" />
    <source srcset="/included/mystat/no-photo.webp" type="image/webp" />
    <img loading="lazy" src="/included/mystat/no-photo.png" alt="Ukázka odečítání diamantů"/>
  </picture>
  <div class="arrow-up" style={{top: "7.5%",  left: "7%"}}></div>
  <div class="arrow-right" style={{top: "13%",  left: "76%"}}></div>
  <div class="arrow-right" style={{top: "28%",  left: "67%"}}></div>
</div>
