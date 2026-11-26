meddo.pl – makieta nowej strony
===============================

Zawartość
---------
index.html         strona główna
system-ris.html    podstrona „System RIS” (wzór dla pozostałych podstron)
css/style.css      wspólne style obu stron
js/main.js         slider w sekcji „Jeden ekosystem” + atrapa formularza
img/               logo, favicon i zrzuty ekranu aplikacji
fonts/             Figtree (licencja SIL OFL, plik OFL.txt)

Uruchomienie
------------
Wystarczy wgrać cały folder na serwer (np. do katalogu /makieta/) i otworzyć
index.html. Nie wymaga budowania ani zależności zewnętrznych – fonty
i obrazki są lokalne. Działa też po otwarciu index.html bezpośrednio z dysku.

Do wiadomości
-------------
- Slider zatrzymuje odliczanie, gdy kursor jest nad przyciskami lub treścią slajdu.
- To makieta: formularz kontaktowy niczego nie wysyła, po kliknięciu
  „Wyślij wiadomość” pokazuje tylko komunikat.
- Działają linki: logo → strona główna, „System RIS” (menu, stopka, slajd)
  → podstrona RIS, kotwice do formularza, „Zaloguj się”, mail i telefon.
  Pozostałe linki (PACS, Teleradiologia, O nas, dokumenty, partnerzy)
  prowadzą na razie do „#”.
- Na ekranach węższych niż 960 px linki menu są ukryte (makieta nie ma
  jeszcze menu mobilnego).
- Zrzuty ekranu pochodzą ze starych broszur – do podmiany na aktualne,
  w proporcjach 3:2 (ok. 1240 × 827 px).
- Liczby w sekcji „Działamy w całej Polsce” ([XX], [XXX]) czekają na dane.
- Logo w img/meddo-logo.svg zostało wycięte z broszury – docelowo podmienić
  na oficjalny plik z design systemu.
