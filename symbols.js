// Responsive tabel of symbols

const values = [{
        matrix: 'Morfeusz, Neo, Trynity',
        gnoza: 'Trójca Święta',
        buddyzm: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Trzy_cia%C5%82a_Buddy" target="blank">Trzy ciała Buddy</a> - dharmakaja, sambhogakaja, nirmanakaja.',
        mitologia: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Trimurti" target="blank">Trimurti</a> – w hinduizmie wyobrażenie trzech aspektów boga w formach Brahmy, Wisznu i Śiwy.',
    },
    {
        matrix: 'Morfeusz ogłasza przyjście Wybrańca',
        gnoza: 'Jan Chrzciciel ogłasza przyjście Chrystusa',
        buddyzm: '',
        mitologia: 'w mitologii greckiej bóg marzeń sennych',
    },
    {
        matrix: 'Morfeusz jako dowódca i opiekun załogi statku',
        gnoza: 'Bóg Ojciec',
        buddyzm: 'buddyjski nauczyciel - Mistrz Zen',
        mitologia: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Brahma" target="blank">Brahma</a> - najwyższy bóg w trójcy hinduistycznej',
    },
    {
        matrix: 'Neo',
        gnoza: 'Jezus Chrystus i gnostycki Wyzwoliciel, Syn Człowieczy',
        buddyzm: 'Budda',
        mitologia: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Wisznu" target="blank">Wisznu</a> - najpopularniejszy z bogów w trójcy hinduistycznej, odpowiednik chrześcijańskiego Chrystusa',
    },
    {
        matrix: 'Trynity',
        gnoza: 'Duch Święty/pneuma, pierwiastek żeński w Trójcy Świętej',
        buddyzm: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Dakini" target="blank">Dakini</a> - personifikacja żeńskiego aspektu oświecenia',
        mitologia: '<a class="text-link" href="https://pl.wikipedia.org/wiki/%C5%9Aiwa" target="blank">Śiwa</a> - jeden z bogów trójcy hinduistycznej, pierwiastek żeński w postaci <a class="text-link" href="https://pl.wikipedia.org/wiki/%C5%9Aakti" target="blank">Śakti</a> - odpowiednik chrześcijańskiego Ducha Św.',
    },
    {
        matrix: 'Wyrocznia',
        gnoza: 'starotestamentowy prorok',
        buddyzm: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Bodhisattwa" target="blank">Bodhisattwa</a> wskazujący drogę',
        mitologia: 'Wyrocznia Delficka - "Poznaj siebie"',
    },
    {
        matrix: 'Architekt',
        gnoza: 'gnostycki Demiurg',
        buddyzm: '',
        mitologia: '',
    },
    {
        matrix: 'Cypher',
        gnoza: 'Judasz',
        buddyzm: '',
        mitologia: '',
    },
    {
        matrix: 'Niobe ',
        gnoza: '',
        buddyzm: '',
        mitologia: 'w mitologii greckiej <a class="text-link" href="https://pl.wikipedia.org/wiki/Niobe_(c%C3%B3rka_Tantala)" target="blank">królowa Teb</a>, która rzuciła wyzwanie bogom',
    },
    {
        matrix: 'Persefona',
        gnoza: '',
        buddyzm: '',
        mitologia: 'w mitologii greckiej <a class="text-link" href="https://pl.wikipedia.org/wiki/Persefona_(c%C3%B3rka_Zeusa)" target="blank">córka</a> Zeusa, którą porwał i poślubił Hades - bóg świata podziemnego ',
    },
    {
        matrix: 'Serafin',
        gnoza: 'istota biblijna - w klasyfikacji aniołów będąca na pierwszym miejscu',
        buddyzm: '',
        mitologia: '',
    },
    {
        matrix: 'Rama-Kandra',
        gnoza: '',
        buddyzm: '',
        mitologia: 'w mitologii hinduistycznej <a class="text-link" href="https://pl.wikipedia.org/wiki/Rama_(b%C3%B3g)" target="blank">inkarnacja</a> boga Wisznu',
    },
    {
        matrix: 'Sati',
        gnoza: '',
        buddyzm: '',
        mitologia: 'w mitologii hinduistycznej jedna z form <a class="text-link" href="https://pl.wikipedia.org/wiki/Uma" target="blank">Dewi</a>',
    },
    {
        matrix: 'Kali - kapitan statku Brahma',
        gnoza: '',
        buddyzm: '',
        mitologia: 'hinduska <a class="text-link" href="https://pl.wikipedia.org/wiki/Kali" target="blank">boginii</a> śmierci',
    },
    {
        matrix: 'niewolnicy sztucznej inteligencji',
        gnoza: 'niewolnicy Demiurga i Archontów',
        buddyzm: 'istoty uwięzione w samsarze z powodu niewiedzy',
        mitologia: 'ludzie przykusi do skały w <a class="text-link" href="https://pl.wikipedia.org/wiki/Jaskinia_plato%C5%84ska" target="blank">jaskini platońskiej</a>',
    },
    {
        matrix: 'ludzie ślepi na Rzeczywistość',
        gnoza: 'ludzie nie dostrzegający swej prawdziwej natury',
        buddyzm: 'świat Maji jako iluzja',
        mitologia: 'cienie w jaskini platońskiej jako fałszywy obraz Rzeczywistości',
    },
    {
        matrix: 'śmierć Neo pod koniec trylogii',
        gnoza: 'śmierć Jezusa na krzyżu i zmartwychwstanie - wyzwolenie gnostyka z materii',
        buddyzm: 'Oświecienie - Nirwana',
        mitologia: 'Oświecenie',
    },
    {
        matrix: 'Zion - ostatnie miasto ludzkości',
        gnoza: 'Syjon - Ziemia Obiecana, biblijne miasto Boga',
        buddyzm: '',
        mitologia: '',
    },
    {
        matrix: 'statek Nabuchodonozor',
        gnoza: 'Nabuchodonozor - władca babiloński znany z Biblii',
        buddyzm: '',
        mitologia: '',
    },
    {
        matrix: 'statek Logos',
        gnoza: 'Słowo - Syn Boży',
        buddyzm: '',
        mitologia: '<a class="text-link" href="https://pl.wikipedia.org/wiki/Logos_(filozofia)" target="blank">Logos</a> - Słowo',
    },
    {
        matrix: 'statek Ozyrys',
        gnoza: '',
        buddyzm: '',
        mitologia: '<a class="text-link" text-link" href="https://pl.wikipedia.org/wiki/Ozyrys" target="blank">Ozyrys</a> to egipski bóg śmierci i odrodzonego życia',
    },
    {
        matrix: 'statek Brahma',
        gnoza: '',
        buddyzm: '',
        mitologia: 'najwyższy bóg w trójcy hinduistycznej',
    },
]

const valuesContainer = document.querySelector('.app--values');

const desktopViewport = window.matchMedia('screen and (min-width: 800px)');

const drawValues = (isDesktop) => {
    if (isDesktop) {
        drawDesktopValues();
    } else {
        drawMobileValues();
    }
}

const drawMobileValues = () => {
    valuesContainer.innerHTML = '';

    let list = document.createElement('ul');
    list.classList.add("ul-table");

    values.forEach(value => {
        let element = document.createElement('li')
        element.classList.add("li-table");

        let matrix = document.createElement('div');
        matrix.innerHTML = `<strong>Matrix: </strong>${value.matrix}`;
        let gnoza = document.createElement('div');
        gnoza.innerHTML = `<strong>Gnoza/Chrześcijaństwo: </strong>${value.gnoza}`;
        let buddyzm = document.createElement('div');
        buddyzm.innerHTML = `<strong>Buddyzm: </strong>${value.buddyzm}`;
        let mitologia = document.createElement('div');
        mitologia.innerHTML = `<strong>Mitologia: </strong>${value.mitologia}`;

        element.appendChild(matrix);
        element.appendChild(gnoza);
        element.appendChild(buddyzm);
        element.appendChild(mitologia);

        list.appendChild(element);
    })

    valuesContainer.appendChild(list);
}

const drawDesktopValues = () => {
    valuesContainer.innerHTML = '';

    let table = document.createElement('table');

    let thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Matrix</th><th>Gnoza/Chrześcijaństwo</th><th>Buddyzm</th><th>Mitologia</th></tr>';

    let tbody = document.createElement('tbody');

    values.forEach(value => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${value.matrix}</td><td>${value.gnoza}</td><td>${value.buddyzm}</td><td>${value.mitologia}</td>`;
        tbody.appendChild(row);
    })

    table.appendChild(thead);
    table.appendChild(tbody);

    valuesContainer.appendChild(table);
}

drawValues(desktopViewport.matches);

desktopViewport.addListener(isDesktop => {
    drawValues(isDesktop.matches);
})
