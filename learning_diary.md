# Oppimispäiväkirja – Task 02 Render Frontend

* Tehtävässä tavoitteena oli rakentaa mobiiliystävällinen frontend sentimenttianalyysipalvelulle.
* Aluksi backendia ei vielä ollut käytössä, joten frontend tehtiin ensin valmiiksi tulevaa integraatiota varten.
* Sentimenttituloksen sai tässä vaiheessa toteuttaa staattisena tai satunnaistettuna.

* Aloitin tehtävän luomalla uuden Vite-projektin Reactilla ja JavaScript-versiolla.
* Tämän kautta sain projektille valmiin rakenteen, jossa on mukana build-prosessi.
    * Tämä oli tärkeä osa tehtävää, koska tehtävänannossa edellytettiin, että web-sovelluksessa täytyy olla build-vaihe.

* Projektin rakenteen kanssa tuli alussa hieman sekaannusta, koska Vite-projekti muodostui ensin ylimääräisen alikansion sisään.
* Jouduin tarkistamaan kansiorakenteen ja siistimään sen, jotta tiedostot tulivat oikeaan paikkaan.
* Tämä oli hyödyllinen vaihe, koska siinä oppi taas käytännössä, kuinka tärkeää on tietää missä package.json oikeasti sijaitsee. npm-komennot eivät toimi, jos niitä ajetaan väärästä kansiosta.

* Tehtävän aikana tuli myös vastaan ongelma npm:n kanssa.
* Node.js löytyi koneelta, mutta npm ei ensin näyttänyt toimivan odotetusti PowerShellissä.
* Tätä selvittäessä huomasin, että node toimi normaalisti, mutta npm-komento ei palauttanut versiota samalla tavalla.
* Lopulta ongelma tarkentui siihen, että npm piti ajaa oikeassa ympäristössä ja oikeasta kansiosta.
    * Kun vaihdoin komentokehotteeseen ja siirryin projektikansioon, npm-komennot toimivat normaalisti. Tämä auttoi ymmärtämään paremmin eroa ympäristöongelman ja projektikansion ongelman välillä.

* Kun kehityspalvelin saatiin käyntiin, muokkasin oletus-Vite-sivun tehtävän mukaiseen muotoon.
* Rakensin ensin yksinkertaisen sentimenttianalyysin käyttöliittymän, jossa näytettiin analysoitava teksti, sentimentin tulos ja luottamusarvo.
* Vaikka tulos ei vielä tässä vaiheessa tullut oikeasta backendista, käyttöliittymä toimi hyvänä pohjana myöhempää integraatiota varten.
    * Samalla poistin Viten oletustyylejä, jotta ulkoasu vastasi paremmin tehtävän tavoitetta eikä mukana ollut turhia demokomponentteja.

* Tehtävän myöhemmässä vaiheessa frontend päivitettiin käyttämään oikeaa backendia, joka oli julkaistu CSC Rahdissa HTTPS:n yli.
* Tämä muutti frontendin roolin pelkästä käyttöliittymäpohjasta oikeasti toimivaksi asiakassovellukseksi, joka lähettää tekstin analysoitavaksi backendille ja näyttää sieltä saadun vastauksen käyttäjälle.
    * Tämä oli mielestäni yksi tehtävän tärkeimmistä vaiheista, koska siinä frontend ja backend yhdistyivät ensimmäistä kertaa samaan toimivaan kokonaisuuteen.

* Frontendiin lisättiin tekstikenttä, analysointinappi sekä tulosalueet sentimentille, positive scorelle ja negative scorelle.
* Käyttöliittymästä tehtiin sellainen, että käyttäjä voi kirjoittaa oman tekstin ja lähettää sen backendille analysoitavaksi.
* Tämän jälkeen frontend näyttää backendin palauttaman sentimenttituloksen suoraan selaimessa.
    * Tämä teki sovelluksesta paljon aidomman tuntuisen kuin alkuperäinen staattinen demo.

* Integraatiovaiheessa tuli vastaan myös käytännön ongelma, koska frontend ei aluksi saanut yhteyttä backendin APIin selaimesta.
* Ongelma liittyi CORS-asetuksiin, eli backend ei vielä sallinut pyyntöjä eri originista tulevalta frontendilta.
    * Tämä oli hyvä oppi siitä, että pelkkä toimiva backend ei vielä riitä, vaan selaimen tietoturvakäytännöt täytyy huomioida myös frontendin ja backendin välisessä yhteydessä.

* Kun CORS otettiin backendissa käyttöön ja uusi versio buildattiin Rahdissa, frontendin Analyze-painike alkoi toimia oikein.
* Tämän jälkeen selain pystyi lähettämään tekstin Rahdissa olevaan backend-osoitteeseen ja vastaanottamaan sieltä sentimenttituloksen ilman virheitä.
    * Tämä vahvisti, että frontend käytti oikeaa HTTPS-backendia eikä pelkkää paikallista testiversiota.

## Testasin frontendin toimintaa paikallisesti seuraavilla komennoilla:

* npm run dev

* npm run build

## Testasin frontendin ja backendin integraatiota selaimessa siten, että:

* kirjoitin tekstin käyttöliittymän tekstikenttään

* painoin Analyze sentiment -painiketta

* tarkistin, että frontend lähetti pyynnön Rahdissa olevaan backend-osoitteeseen

* varmistin, että selain näytti backendin palauttaman sentimentin sekä pisteet oikein

* Näillä testeillä varmistin, että frontend toimii sekä lokaalisti kehityspalvelimella että build-vaiheen näkökulmasta oikein.
* Samalla varmistin, että integraatio oikeaan backend-palveluun toimii käytännössä eikä vain teoriassa.

## Tämän tehtävän kautta opin paljon enemmän käytännön frontend deployment -asioista kuin pelkästään teoriasta lukemalla olisi voinut oppia. Erityisesti ymmärsin paremmin eron näiden välillä:

* framework-pohjainen frontend verrattuna staattiseen HTML-sivuun

* Vite-projektin rakenne ja se, mistä npm-komentoja täytyy ajaa

* kehityspalvelimen ja build-vaiheen rooli frontend-kehityksessä

* frontendin rakentaminen ensin ilman backendia ja myöhempi integrointi oikeaan palveluun

* HTTPS-yhteyden määrittäminen backendille frontend-koodissa

* CORSin vaikutus frontendin ja backendin väliseen kommunikointiin selaimessa

* frontendin muuttaminen staattisesta näkymästä aidosti dynaamiseksi käyttöliittymäksi

* backendin palauttaman JSON-datan näyttäminen React-komponentin tilan kautta käyttöliittymässä

## Kokonaisuutena tehtävä oli erittäin opettavainen.
* Vaikka matkan varrella tuli useita pieniä ongelmia, juuri niiden ratkaiseminen auttoi ymmärtämään paremmin modernin frontend-kehityksen käytännön puolta.
* Lopputuloksena sain toimivan React- ja Vite-pohjaisen frontendin, joka käynnistyy lokaalisti, menee läpi build-vaiheesta ja käyttää oikeaa Rahdissa julkaistua backendia HTTPS-yhteyden kautta.
* Tämä tehtävä tuntui hyvältä jatkumolta aiempaan GitHub Pages -tehtävään, koska ensin opeteltiin staattisen sivun julkaisu ja sen jälkeen siirryttiin build-prosessia hyödyntävään framework-projektiin sekä oikeaan backend-integraatioon.

##  Tekoälyn käyttö
Tekoälyä (OpenAI ChatGPT, malli GPT-5.4) käytettiin projekteissa oppimisen ja virheenkorjauksen tukena. Lisäksi tekoälyä hyödynnettiin tekstin ja dokumentaation selkeyttämiseen, jotta projektin rakenne ja selitykset olisivat mahdollisimman ymmärrettäviä. Tekoälyn käyttö rajoittui oppimisen ja tekijän oman työn tukemiseen, eikä sitä käytetty tehtävän automaattiseen ratkaisemiseen.