# CupOfCoffee


## Informacje o aplikacji

Aplikacja została stworzona z wykorzystaniem technologii MEAN stack ze szczegółowym naciskiem na Angular 7 w ramach nauki i udoskonalenia wiedzy dotyczącej wybranych technologii.

Każdy użytkownik ma możliwość:
* przeglądania dostępnych artykułów, 
* wyświetlania artykułów z wybranej kategorii (nauka, sztuka, filozofia itd.),
* wyszukiwania artykułów na podstawie wprowadzonego tytułu artykułu i wyboru kategorii

Zalogowani użytkownicy mają dodatkowe możliwości: 
* polubienie istniejących artykułów,
* dodawanie własnych artykułów (w tym również dodawanie artykułów pozostając anonimem),
* przechowywanie artykułów własnoręcznie dodanych i tych polubionych na swoim koncie,
* edycja i usuwanie swoich artykułów


## Szczegółowe inforamcje

### Rejestracja i logowanie użytkownika

Rejestrując się użytkownik podaje username, email oraz hasło, które jest szyfrowane za pomocą dodatkowego modułu [bcryptjs](https://www.npmjs.com/package/bcryptjs). Walidacja danych została zrealizowana zarówno po stronie klienta (z wykorzystaniem Reactive Forms) jak i po stronie serwera. Po stronie serwera również jet sprawdzane czy wprowadzone username i email są unikalne. W przypadku błędów weryfikacji lub innych błędów pochodzących z serwera po stronie użytkownika wyświetla się odpowiedni komunikat zawierający informacje o błędzie.

Po zalogowaniu w Local Storage jest zapisywany token (moduł [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)), na podstawie którego następuje późniejsza weryfikacja użytkownika potrzebna do wykonania tych zapytań do serwera, które wymagają bycia zalogowanym.

Po zalogowaniu zmienia się wygląd menu nawigacji: znikają przyciski "Zarejestruj", "Zaloguj", pojawiają się natomiast przyciski "Moje konto" oraz "Wyloguj". Po wylogowaniu następuje odwrotna zmiana.


### Strona główna

Na stronie głównej aplikacji znajdują się 4 ostatnio dodane artykuły z każdej kategorii. Jeśli w danej kategorii nie ma żadnych artykułów wyświetlany jest odpowiedni komunikat. Celem zobaczenia większej ilości artykułów użytkownik może naisnąć na wybraną kategorię, przycisk "Zobacz więcej" lub wybrać kategorię z menu nawigacji.

### Wygląd artykułu

Każdy artykuł posiada tytuł, kategorię, treść, autora, datę utworzenia/ modyfikacji, liczbę lajków oraz pewiem zestaw kolorystyczny.
Jeśli postawić lajk próbuje niezweryfikowany użytkownik wyświetla się komunikat informujący o tym, że konieczne jest zalogowanie żeby wykonać dane działanie.
Zestaw kolorystyczny obejmuje kolor tła artykułu, kolor tytułu oraz ikonkę i jest dobierany przez użytkownika podczas tworzenia artykułu (jestem dumna z tego pomysłu :D).


### Dodawanie artykułów

Jak już było wspomniane, tylko zweryfikowani użytkownicy mają dostęp do widoku dodawania artykułów. Zrealizowano to zostało za pomocą AuthGuard.
Formularz dodawania i edycji artykułu (jest to ten sam komponent) został zrealizowany za pomocą Reactive Forms. W formularzu edycji w odróżnieniu od formularza dodawania artykułu wszystkie pola są już wypełnione przez dane otrzymane dzięki temu, że w url w tym przypadku przesyłane jest id wybranego artykułu. W formularzu konieczne jest wypełnienie wszystkich pól. W przypadku braku wypełnienia któregoś z pól lub niepoprawności wypełnienia (np. przekroczenia liczby znaków w tytule) wyświetlany jest odpowiedni komunikat. Ponadto przycisk zatwierdzający formularz jest zablokowany do momentu popranego wypełnienia wszystkich pól. Po stronie serwera dodatkowo jest sprawdzana unikalność tytułu artykułu.
Podczas tworzenia/ edycji artykułu użytkownik podaje tytuł, treść, wybiera kategorię, zestaw kolorystyczny oraz zaznacza czy chce, żeby na artykule było widoczne jego username czy po prostu Anonim.


### Konto użytkownika

W zakładce "Moje konto" wyświetlana jest informacja o użytkowniku (username i email) oraz 2 opcje: "Moje artykuły" i "Ulubione artykuły". Jak same nazwy mówią, pierwsza opcja umożliwia wyświetlenie artykułów dodanych przez danego użytkownika, każdy z których ma przycisk "Edytuj" i "Usuń", natomiast druga opcja pozwala na wyświetlenie polubionych przez użytkownika artykułów. Artykuły w tych dwóch przypadkach można sortować według kategorii. Jeśli użytkownik nie ma artykułów z którejś kategorii to jest wyświetlany komunikat z tą smutną informacją.

Naciśnięcie przycisku "Edytuj" powoduje przekierowanie użytkownika na stronę edycji artykułu, z tym że w url wysyłany jest id wybranego artykułu, dzięki czemu możliwe jest auto uzupełnienie pól formularza edycji przez dane artykułu.

Naciśnięcie przycisku "Usuń" wywołuje wyświetlanie modal window, przez które użytkownik ma potwierdzić, że na pewno chce usunąć wybrany artykuł.


### Not Found

Użytkownik zostaje przekierowany na stronę "404" nie tylko w przypadku podania niepoprawnego adresu URL, ale również np. w przypadku, gdy próbuję postawić lajka artykułówi, który z kolei chcwilę temu został usunięty przez autora. W takich przypadkach na stronie "404" dodatkowo jest wyświetlany komunikat (zależy od parametrów przekazanych w URL) informujący o tym, dlaczego użytkownik został przekierowany na tą stronę.


## Dodatkowe moduły dodane do aplikacji
* [bootstrap](https://www.npmjs.com/package/bootstrap) i [font-awesome](https://www.npmjs.com/package/font-awesome)
* [express](https://www.npmjs.com/package/express), [cors](https://www.npmjs.com/package/cors), [mongoose](https://www.npmjs.com/package/mongoose) oraz [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator)
* [ng2-slim-loading-bar](https://www.npmjs.com/package/ng2-slim-loading-bar)
* [ngx-color-picker](https://www.npmjs.com/package/ngx-color-picker) zastosowany w formularzu dodawania/ edycji arykułów do wyboru koloru tła i tytułu artykułu
