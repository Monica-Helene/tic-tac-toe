# Tic-tac-toe i React

<details>
    <summary><strong>Table of Contents</strong></summary>
    <ul>
        <li><a href="#beskrivelse">Beskrivelse</a></li>
            <ul>
            <li><a href="#hovedfunksjoner">Hovedfunksjoner</a></li>
            <li><a href="#valg-av-verktøy">Valg av verktøy</a></li>
            </ul>
        <li><a href="#installasjon-og-kjøring-av-programmet">Installasjon og kjøring av programmet</a></li>
            <ul>
            <li><a href="#1-klon-prosjektet">1. Klon prosjektet</a></li>
            <li><a href="#2-installer-nødvendige-verktøy">2. Installer nødvendige verktøy</a></li>
            <li><a href="#3-kjør-programmet-i-utviklingsmodus">3. Kjør programmet i utviklingsmodus</a></li>
            <li><a href="#4bygg-programmet-for-produksjon">4. Bygg programmet for produksjon
            </ul>
        <li><a href="#test-av-appen">Test av appen</a></li>    
        <li><a href="#lære-mer">Lær mer</a></li>
    </ul>
</details>

## Beskrivelse
Denne applikasjonen er et klassisk Tic-Tac-Toe-spill, hvor to spillere kan spille det velkjente kryss- og sirkelspillet. Spillet består av et 3x3 rutenett hvor spillerne turer om å plassere henholdsvis et kryss (X) eller en sirkel (O) i ledige ruter. Målet er å få tre av sine symboler på rad, enten horisontalt, vertikalt eller diagonalt.

### Hovedfunksjoner
1. Spillere skriver inn navn de vil spille under.
2. Visning av vinner når en spiller har fått 3 på rad eller uavgjort ved spill der ingen vinner.
3. Mulighet for å starte spillet på nytt etter at spillet er ferdig.

### Valg av verktøy
- React: Kjører raskt og gjør appen effektiv, selv når den blir stor. Det er også et stort felleskap rundt React som gjør det lett å finne løsninger og hjelp på nettet.
- CSS: For å style applikasjonen og gjøre den brukervennlig og visuelt tiltalende.
- JavaScript: For den generelle logikken bak spillmekanikken, som å sjekke om noen har vunnet, bytte mellom spillerne og oppdatere tilstanden.
- Vitest: Er raskere og lettere å konfigurere enn mange andre testverktøy.


## Installasjon og kjøring av programmet
 ### 1. Klon prosjektet
Først må du klone prosjektet til din lokale maskin ved å bruke Git. Åpne terminalen og kjør følgende kommando:
`git clone https://github.com/Monica-Helene/tic-tac-toe.git`

### 2. Installer nødvendige verktøy <br/>
Naviger til prosjektmappen i terminalen: <br/>
Deretter, installer alle nødvendige avhengigheter ved å bruke npm: <br/>
`npm install` <br/>
Dette vil laste ned og installere alle avhengigheter som er listet i `package.json-filen`.

### 3. Kjør programmet i utviklingsmodus
For å starte programmet i utviklingsmodus, kan du bruke følgende kommando: <br/>
`npm start` <br/>
Dette vil starte en lokal server, og du kan åpne applikasjonen i nettleseren din ved å gå til `http://localhost:3000` (eller en annen port hvis du har konfigurert det annerledes).

### 4.Bygg programmet for produksjon
Hvis du ønsker å bygge prosjektet for produksjon, kan du bruke kommandoen:<br/>
`npm run build` <br/>
Dette vil lage en optimalisert versjon av applikasjonen som kan deployeres til produksjon.


## Test av appen
Før vi begynner, må vi installere noen verktøy for testing. Åpne terminalen og kjør denne kommandoen: <br/>
`vnpm install --save-dev vitest @testing-library/react @testing-library/jest-dom `<br/>
1. Lag en testfil i prosjektet ditt. For eksempel: TicTac.test.tsx. <br/>
2. Skriv en enkel test
I testfilen kan du skrive en veldig enkel test for å sjekke om komponenten din (f.eks. TicTac) rendres riktig. Slik ser en enkel test ut:
javascript
3. For å kjøre testene, bruk kommandoen:<br/>
`npx vitest` <br/>
Testene vil kjøres, og du vil få en oppsummering i terminalen.

## Lære mer?
Du kan lære mer i <a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank">Create React App-dokumentasjonen</a>.

For å lære React, sjekk ut <a href="https://reactjs.org/" target="_blank">React-dokumentasjonen</a>.

### Kodesplitting
Denne delen har blitt flyttet hit: <br/> 
<a href="https://facebook.github.io/create-react-app/docs/code-splitting" target="_blank">https://facebook.github.io/create-react-app/docs/code-splitting</a>

### Analyse av bundle-størrelse
<p>Denne delen har blitt flyttet hit:<br/>
<a href="https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size" target="_blank">https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size</a></p>

### Lage en progressiv webapp
Denne delen har blitt flyttet hit: <br/>
<a href="https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app" target="_blank">https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app</a>

### Avansert konfigurasjon
Denne delen har blitt flyttet hit: <br/>
<a href="https://facebook.github.io/create-react-app/docs/advanced-configuration" target="_blank">https://facebook.github.io/create-react-app/docs/advanced-configuration</a>

### Distribusjon
Denne delen har blitt flyttet hit: <br/>
<a href="https://facebook.github.io/create-react-app/docs/deployment" target="_blank">https://facebook.github.io/create-react-app/docs/deployment</a>

### `npm run build` mislykkes i å minifisere
Denne delen har blitt flyttet hit: <br/>
<a href="https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify" target="_blank">https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify</a>
