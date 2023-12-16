# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


### TODO LIST:
- Rejestracja (request do api o stworzenie konta z danymi z formularza)
  <!-- po rejestracji przekierowani zostaniemy na stronę logowania -->
- Logowanie się (po wpisaniu maila/loginu i hasła, najlepiej żeby zapisywało się w localStorage token)
<!--  po zalogowaniu przekierowanie na stronę główną localStorage['token'] = zwrócony token przez logowanie -->
- Poprawienie styli kategorii w Categories.vue
- Dorobienie widoku który będzie pokazywał użytkownikowi wyświetlić jego wypożyczone książki i pozwoli na zarządzanie nimi  
- Dorobienie widoku dla admina który będzie akceptował (lub nie) wypożyczyć książke użytkownikowi, po tym jak będzie chciał ją wypożyczyć
- W ShoppingCart.vue znajduje się przycisk odpowiedzialny za request do bazy o prośbę o wypożyczenie książek które znajdują się w koszyku
- W BookItem.vue znajduje się kod który sprawdza czy dana książka znajduje się w koszyku. Jednak sprawdza tylko LocalStorage. Trzeba zaktualizować to żeby także sprawdzało bazkę i w razie czego aktualizowało


### TRIKI Z AFRYKI:
- Jeśli chcecie stworzyć widok (podstronę), trzeba ją dodać do routera. Tam trzeba zaimportować plik, ustalić mu ścieżkę i podać do jakiej nazwy ma sie odwoływać router-link jeśli chcecie wstawić linka do tej podstrony. (Twórzcie podstrony w /views)
- Komponenty jak sama nazwa wskazuje to tylko komponent a nie niezależna strona. Jednak gdy chcecie z niego z korzystać na danej stronie, to musicie zaimportować dany komponent, wtedy możecie wstawić html-owy tag z nazwą komponentu żeby się wyświetlił
- Jeśli chodzi o API, funkcje które będziecie wywoływać na stronach, znajdują się w /store/actions.js. W linku podajecie to co znajduje się po api/. następnie wywołujecie funkcję z pliku mutations.js która przypisze wynik requestu zmiennej znajdującej się w state.js
- Na każdej podstronie jeśli chcecie zrobić jakąś rzecz która ma się zmieniać dynamicznie (np. kolor przycisku gdy na niego klikasz), to musicie to zrobić wykorzystując znacznik script, jednak bez setup. wypisujecie ładnie export default{} a w środku data() i return dynamicznie zmienająca się zmienna (przykład w BookItem.vue)
- Gdy na stronie chcecie przypisać zmiennej wartość z requestu api - wykorzystajcie metodę computed - sprawia że zmienna aktualizuje się za każdym razem gdy zmienia się wartość źródła z której pobiera info (przykład BooksByCategories.vue linia 19 )