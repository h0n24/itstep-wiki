---
title: Nejčastější problémy
---

# Nejčastější problémy s e-mailem

Nejčastější problémy souvisí se špatně zadanou URL adresou.

|                               | URL adresa                                                      | Více info                     |
| ----------------------------- | --------------------------------------------------------------- | ----------------------------- |
| ✔️ Správná URL pro přihlášení | [login.microsoftonline.com](https://login.microsoftonline.com/) | [postup přihlášení](../email) |
| ❌ Špatná URL                 | account.microsoft.com                                           | viz níže                      |
| ❌ Špatná URL                 | login.live.com                                                  | viz níže                      |

## Špatná URL: account.microsoft.com

Použije-li se nesprávná adresa, tj. [account.microsoft.com](https://account.microsoft.com/), zobrazí se chybové hlášení:

```txt
AADSTS50020: User account 'jmeno@itstep.academy' from identity provider 'https://sts.windows.net/1c2aa41e-5b92-4906-827e-0c10f9d73859/' does not exist in tenant 'Microsoft' and cannot access the application '71dada86-21db-493b-93e4-1a902601f30f'(OneRenderFramework [wsfed enabled]) in that tenant. The account needs to be added as an external user in the tenant first. Sign out and sign in again with a different Azure Active Directory user account.
```

### Celá chyba pak vypadá takto:

<picture>
  <source srcset="/included/email/wrong-link-account.avif" type="image/avif" />
  <source srcset="/included/email/wrong-link-account.webp" type="image/webp" />
  <img loading="lazy" src="/included/email/wrong-link-account.jpg" alt="Ukázka špatně zadané adresy - případ account.microsoft.com" />
</picture>

## Špatná URL: login.live.com

Použije-li se nesprávná adresa, tj. [login.live.com](https://login.live.com/), zobrazí se chybové hlášení:

```txt
Tento účet neexistuje. Zadejte jiný účet nebo získejte nový.
```

### Celá chyba pak vypadá takto:

<picture>
  <source srcset="/included/email/wrong-link-live.avif" type="image/avif" />
  <source srcset="/included/email/wrong-link-live.webp" type="image/webp" />
  <img loading="lazy" src="/included/email/wrong-link-live.png" alt="Ukázka špatně zadané adresy - případ login.live.com" />
</picture>
