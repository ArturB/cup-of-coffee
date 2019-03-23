# CupOfCoffee


## Informacje o aplikacji

Aplikacja została stworzona z wykorzystaniem technologii MEAN stack ze szczegółowym naciskiem na Angular 7 w ramach nauki i udoskonalenia wiedzy dotyczącej wybranych technologii.

Każdy użytkownik ma możliwość:
* przeglądania dostępnych artykułów, 
* wyświetlanie artykułów z wybranej kategorii (nauka, sztuka, filozofia itd.),
* wyszukiwanie artykułów na podstawie wprowadzonego tytułu artykułu i wyboru kategorii

Zalogowani użytkownicy mają dodatkowe możliwości: 
* polubienie istniejących artykułów,
* dodawanie własnych artykułów (w tym również dodawanie artykułó pozostając anonimem),
* przechowywanie artykułów własnoręcznie dodanych i tych polubionych na swoim koncie,
* edycja i usuwanie swoich artykułów


## Szczegółowe inforamcje

### Rejestracja i logowanie użytkownika

Rejestrując się użytkownik podaje username, email oraz hasło, które jest szyfrowane za pomocą dodatkowego modułu [bcryptjs](https://www.npmjs.com/package/bcryptjs). Walidacja danych została zrealizowana zarówno po stronie klienta (z wykorzystaniem Reactive Forms) jak i po stronie serwera. Po stronie serwera również jet sprawdzane czy wprowadzone username i email są unikalne. W przypadku błędów weryfikacji lub innych błędów pochodzących z serwera po stronie użytkownika wyświetla się odpowiedni komunikat zawierający informacje o błędzie.

Po zalogowaniu w Local Storage jest zapisywany token (moduł [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)), na podstawie którego następuje późniejsza weryfikacja użytkownika potrzebna do wykonania tych zapytań do serwera, które wymagają bycia zalogowanym.

Po zalogowaniu zmienia się wygląd menu nawigacji: znikają przyciski Zarejestruj, Zaloguj, pojawiają się natomiast przyciski Moje konto oraz Wyloguj. Po wylogowaniu następuje odwrotna zmiana.


### Strona główna

Na stronie głównej aplikacji znajdują się 4 ostatnio dodane artykuły z każdej kategorii. Jeśli w danej kategorii nie ma żadnych artykułów wyświetlany jest odpowiedni komunikat. Celem zobaczenia większej ilości artykułów użytkownik może naisnąć na wybraną kategorię, przycisk Zobacz więcej lub wybrać kategorię z menu nawigacji.

### Wygląd artykułu

Każdy artykuł posiada tytuł, kategorię, treść, autora, datę utworzenia/ modyfikacji, liczbę lajków oraz pewiem zestaw kolorystyczny.
Jeśli postawić lajk próbuje niezweryfikowany użytkownik wyświetla się komunikat informujący o tym, że konieczne jest zalogowanie żeby wykonać dane działanie.
Zestaw kolorystyczny obejmuje kolor tła artykułu, kolor tytułu oraz ikonkę i jest dobierany przez użytkownika podczas tworzenia artykułu.


### Dodawanie artykułów

Jak już było wspomniane, tylko zweryfikowani użytkownicy mają dostęp do widoku dodawania artykułów. Zrealizowano to zostało za pomocą AuthGuard.
Formularz dodawania i edycji artykułu (jest to ten sam komponent) został zrealizowany za pomocą Reactive Forms. W formularzu edycji w odróżnieniu od formularza dodawania artykułu wszystkie pola są już wypełnone przez dane otrzymane dzięki temu, że w url w tym przypadku przesyłane jest id wybranego artykułu. W formularzu konieczne jest wypełnienie wszystkich pól. W przypadku braku wypełnienia któregoś z pól lub niepoprawności wypełnienia (np. przekroczenia liczby znaków w tytule) wyświetlany jest odpowiedni komunikat. Ponadto pzycisk zatwierdzający formularz jest zablokowany do momentu popranego wypełnienia wszystkuch pól. Po stronie serwera dodatkowo jest sprawdzane czy tytuł artykułu jest unikalny.
Podczas tworzenia/ edycji artykułu użytkownik podaje tytuł, treść, wybiera kategorię, zestaw kolorystyczny (jestem dumna z tego pomysłu :D) i wybiera czy chce, żeby na artykule było widoczne jego username czy po prostu Anonim.


### Konto użytkownika

Po wyborze zakładki Moje konto wyświetlana jet inforamcja o użytkowniku (username i email) oraz 2 opcje: Moje artykuły i Ulubione artykuły. Jak same nazwy mówią pierwsza opcja umożliwia wyświetlenie artykułów dodanych przez danego użytkownika, każdy z których ma przycisk Edytuj i Usuń, natomiast druga opcja pozwala na wyświetlenie polubionych przez użytkownika artykułów. Artykuły w tych dwóch przypadkach można sortować według kategorii. Jeśli użytkownik nie ma artykułów z którejść kategorii to jest wyświetlany komunikat z tą smutną informacją.

Po naciśnięciu przycisku Edytuj użytkownik jest przekierowywany na stronę edycji artykułu, z tym że w url wysyłany jest id wybranego artykułu dzięki czemu możliwe jest auto uzupełnienie pól formularza edycji przez dane artykułu.

Naciśnięcie przycisku Usuń wywołuje wyświetlenie modal window przez które użytkownik ma potwierdzić, że na pewno chce usunąć wybrany artykuł.

## Dodatkowe moduły dodane do aplikacji
* [bootstrap](https://www.npmjs.com/package/bootstrap) i [font-awesome](https://www.npmjs.com/package/font-awesome)
* [express](https://www.npmjs.com/package/express), [cors](https://www.npmjs.com/package/cors), [mongoose](https://www.npmjs.com/package/mongoose) oraz [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator)
* [ng2-slim-loading-bar](https://www.npmjs.com/package/ng2-slim-loading-bar)
* [ngx-color-picker](https://www.npmjs.com/package/ngx-color-picker) zastosowany w formularzu dodawania/ edycji arykułów do wyboru koloru tła i tytułu artykułu
