---
title: Nejčastější problémy
---

# Nejčastější problémy s MyStat

## Nesprávné přihlašovací jméno nebo heslo

Ujistěte se, že se přihlašujete do administrátorské verze MyStatu, a tedy, že v URL je zmíněno slovo admin. Podobně tak se ujistěte, že máte vybránu správnou pobočku. Více informací naleznete v sekci [přihlášení](./).

## Nevidím seznam studentů

Seznam studentů se zobrazí až poté, co Vám budou přiděleny některé skupiny.

## Vidím seznam studentů, ale přesto se nemohu připojit

Do MyStatu budete mít přístup pouze po první přednášce, přesněji tedy poté, co v Logbooku označíte přítomnost svých studentů.

## Stránka se načte ale je prázdná

Pokud je stránka celá bílá a přitom se zdá, že se "načetla", je to z toho důvodu, že se některý ze skriptů zasekl v cache paměti. Tento problém se častěji stává studentům, než lektorům.

Snadné řešení je změnit prohlížeč. Trochu komplikovanější, ale stabilnější řešení je smazat cache pomocí DevTools.

1. **Otevřte DevTools**, neboli vývojářské nástroje. Ty se dá otevřít mnoha způsoby, například pravým kliknutím na stránku a výběrem "Prozkoumat", nebo také zmáčknutím klávesy <kbd>F12</kbd>, anebo zmáčknutím <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>.
2. Zmáčkněte <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>. Měla by se otevřít vyhledávací nabídka ve které je napsáno **Run**.
3. Napište **Clear Site Data** a vyberte možnost Clear Site Data (including third-party cookies).
4. Obnovte stránku, například stisknutím klávesy <kbd>F5</kbd>.

<picture>
  <source srcset="/included/clear-site-data.avif" type="image/avif" />
  <source srcset="/included/clear-site-data.webp" type="image/webp" />
  <img src="/included/clear-site-data.png" alt="Ukázka smazání dat webové stránky" />
</picture>
