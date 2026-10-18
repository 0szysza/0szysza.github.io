# Sejm Tracker

Wersja serwisu DawidStats w stylistyce CCU Tracker, opublikowana w katalogu `/sejm/` strony 0szysza.github.io.

Kod i dane przeniesiono za zgodą autora, potwierdzoną przez właściciela tej strony. Autor oryginalnych narzędzi i modeli: [DawidStats](https://dawidstats.pl/).

## Zawartość

- Strona główna: średnie sondażowe, skład parlamentu i sonda poparcia.
- Historia wyborów i panel wyników: Sejm, Senat, wybory prezydenckie, Europarlament i sejmiki.
- Sondaże: średnie, trendy, rozkład mandatów i mapy.
- Kalkulatory Sejmu, Senatu, Europarlamentu, sejmików i wyborów prezydenckich.
- Oryginalne ustawienia, modele, scenariusze, importy i eksporty oraz symulacje nocy wyborczej.

Pliki `ccu-theme.css` i `ccu-ui.js` zawierają wspólną warstwę prezentacji. Obliczenia pozostają w oryginalnych stronach i skryptach, z dostosowaną paletą interfejsu. Barwy ugrupowań zachowano.

## Dane i zapis

Kopia danych pochodzi z 18 października 2026 r. Strona nie aktualizuje zestawień z serwisu źródłowego automatycznie. Plik `source-manifest.json` zawiera spis plików źródłowych i ich sumy kontrolne.

Tak jak w oryginale, zapis scenariuszy i głos w sondzie korzystają z pamięci przeglądarki. Sonda nie jest centralnym badaniem i nie stanowi sondażu opinii publicznej.

Muzyka nocy wyborczej: Sascha Ende, CC BY 4.0. Informacje o autorze, źródle i licencji znajdują się w `assets/election-night/music/CREDITS.html`.

Istniejące w oryginale pozycje oznaczone jako przyszłe lub nieaktywne zachowują ten sam stan.

## Publikacja

Istniejący workflow repozytorium publikuje cały katalog strony po zmianie gałęzi `main`. Serwis nie wymaga kluczy API, kont użytkowników ani serwera aplikacyjnego.
