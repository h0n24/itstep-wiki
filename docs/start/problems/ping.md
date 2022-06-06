---
sidebar_position: 1
title: "Ping ⁠– je server online?"
---

# Příkaz ping – je server online?

Jak zjistit, zda je server dostupný? Mnohdy server vypadá nedostupný, ale chyba nemusí být jen jednostranná. Jak na to?

## Obvyklé důvody nedostupnosti serveru

- Server je skutečně nedostupný nebo se restartuje.
- Máte potíže na Vaší straně, na Vaší síti nebo na Vašem počítači.
- Máte špatně nastavenou VPN či jiné problémy s VPN.

## Postup přes příkaz ping

Následující postup funguje na Windows. Způsobů, jak dosáhnout stejného výsledku je mnohem více, níže je zmíněn nejrychlejší postup, který funguje všude.

1. Zmáčkněte na klávesnici <kbd>Win</kbd>+<kbd>R</kbd>
2. Do nově otevřeného okna (Spustit) napište:

```
cmd.exe
```

3. Do příkazového řádku (černý terminál) napište adresu URL, například:

```
ping google.com
```

nebo

```
ping www.google.com
```

### Ukázka úspěšného spojení

<picture>
  <img loading="lazy" src="/included/ping-online.png" alt="Ukázka úspěšného příkazu ping." />
</picture>

### Ukázka neúspěšného spojení (server je offline)

Chybové hlášky jsou obvykle dvojí, buď "Ping request could not find host ...", nebo "Ping request timed out."
<picture>
<img loading="lazy" src="/included/ping-offline.png" alt="Ukázka neúspěšného příkazu ping." />
</picture>

### Vylepšení

V případě, že chcete, aby se ping do nekonečna opakoval, přidejte za příkaz ještě parametr **-t**. Například:

```
ping docs.google.com -t
```
