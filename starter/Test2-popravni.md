## 2. Test - popracni  (JS DOM)

### Zadaci:

1. Klikom na submit dugme "Dodaj" omoguciti ispis casa na stranici i sacuvati ga u niz, cas sadrzi sledece informacije:

- Naziv predmeta
- Ime i prezime profesora
- Datum odrzavanja casa
- Vreme odrzavanja casa

2. Pored informacija za svaki cas na stranici se prikazuju i dugmici obrisi i izmeni profesora:
 - na klik na dugme obrisi se brise cas sa stranice i iz niza
 - na klik na dugme izmeni Profesora omoguciti promenu imena i prezimena profesora (dodatnih 10 poena)

 3. Provera unosa:
 - Unos za Naziv predmeta ne sme biti prazno polje
 - Unis za Profesora mora imati izmedju 3 i 20 karaktera
Ukoliko uslovi nisu ispunjeni ispisati poruku o gresci.


Izgled jednog objekta :
```
{
 id: 0,
 predmet: 'Matematika',
 profesor: 'Pera Peric',
 datum: '21-Jan-2021',
 vreme: '10:30'
}
```

** Napomena: format vremena i datuma je proizvoljan (za prikaz na stranici i u nizu) **