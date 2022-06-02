---
sidebar_position: 1
title: Přihlášení do MyStatu
---

# MyStat

MyStat je systém pro studenty. Lektoři ho typicky nevyužívají, jen v případech, kdy je třeba studentům ukázat, jak se v něm pracuje.

## Přihlášení

Přihlášení pro lektora může být trochu matoucí. Nachází se totiž na úplně jiné URL adrese než přihlašování pro studenty.

### Krok první

Pokud v URL adrese nevidíte zmíněno slovo _admin_, pak se přihlašujete jako student. Na správné adrese je pod logem MyStatu napsáno **"Přihlášení pro učitele"**. Stejně tak se tam nachází roletkové _menu s výběrem pobočky_.

URL adresa k systému a stejně tak uživatelské jméno a heslo, Vám byla zaslána spolu s uvítacím emailem.

### Krok druhý

Poté, co se úspěšně přihlásíte je třeba vybrat studenta, na kterého se budete přihlašovat. Lektoři jako takoví nemají účet na MyStatu, ten mají jen studenti. Lektoři se tedy mohou přihlašovat jen na někoho jiného.

Pokud systém MyStat ukazujete v hodině ostatním studentům, **vždy požádejte studenta o svolení**, jestli se můžete přihlásit na jeho účet a ukázat jej.

## Co je dobré studentům ukázat

## Časté problémy

### Nesprávné přihlašovací jméno nebo heslo

Ujistěte se, že se přihlašujete do administrátorské verze MyStatu, a tedy, že v URL je zmíněno slovo admin. Podobně tak se ujistěte, že máte vybránu správnou pobočku.

### Nevidím seznam studentů

Seznam studentů se zobrazí až poté, co Vám budou přiděleny některé skupiny.

### Vidím seznam studentů, ale přesto se nemohu připojit

Do MyStatu budete mít přístup pouze po první přednášce, přesněji tedy poté, co v Logbooku označíte přítomnost svých studentů.

### Stránka se načte ale je prázdná

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
