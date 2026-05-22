    // BASE DE RÁDIOS: todas FUNCIONANDO (substituídas as que estavam offline por americanas de qualidade)
    const stations = [
        { country: "🇧🇷", name: "Antena 1", location: "São Paulo, BR", genre: "Pop / Hits", stream: "https://streaming.liveradios.com.br/antena1?random=1" },
        { country: "🥗", name: "SomaFM Groove Salad", location: "San Francisco, USA", genre: "Ambient / Downtempo", stream: "https://ice2.somafm.com/groovesalad-128-mp3" },
        { country: "📻", name: "WFMU Freeform", location: "Jersey City, USA", genre: "Eclectic", stream: "https://stream0.wfmu.org/freeform-128k" },
        // rádios americanas novas (funcionando) substituindo as quebradas:
        { country: "🇺🇸", name: "KEXP 90.3", location: "Seattle, USA", genre: "Alternative / Indie", stream: "https://kexp.streamguys1.com/kexp128.mp3" },
        { country: "🇺🇸", name: "KNKX Public Radio", location: "Tacoma, USA", genre: "Jazz / Blues", stream: "https://live.str3am.com:2199/knkx" },
        { country: "🇺🇸", name: "WBGO Jazz", location: "Newark, USA", genre: "Jazz", stream: "https://wbgo.streamguys1.com/wbgo128" },
        { country: "🇺🇸", name: "KCMP (The Current)", location: "Minneapolis, USA", genre: "Indie Rock", stream: "https://current.stream.publicradio.org/kcmp.mp3" },
        { country: "🇺🇸", name: "WWOZ New Orleans", location: "New Orleans, USA", genre: "Soul / Jazz / Blues", stream: "https://wwoz-sc.streamguys1.com/wwoz-hi.mp3" },
        { country: "🇮🇹", name: "Radio DeeJay", location: "Milano, IT", genre: "Pop / Dance", stream: "https://streamzen.live/radiodance?ver=682683" }, // atualizado com stream funcional
        { country: "🎷", name: "Jazz.FM91", location: "Toronto, CA", genre: "Jazz", stream: "https://jazzfm91.streamguys1.com/jazzfm91.mp3" }, 
        { country: "IT", name: "Radio 105", location: "Milano, IT", genre: "Pop / Hits", cover: "🇮🇹", stream: "http://icecast.unitedradio.it/Radio105.mp3" },
        //rádios Francesas        
       { "country": "🇫🇷", "name": "Magic Radio", "location": "Paris, França", "genre": "Pop, Rock, Soul (80s, 90s, 2000s)", "stream": "https://www.magicradio.fr/player" },
       { "country": "🇫🇷", "name": "Radio Cassette", "location": "Lyon, França", "genre": "Pop, Rock, Eletrônico (80s, 90s, 2000s)", "stream": "https://www.radiocassette.fr/" },
       { "country": "🇫🇷", "name": "Génération Hit 80", "location": "Chambly, França", "genre": "Pop, Rock, Dance (80s, 90s, 2000s)", "stream": "https://www.generationhit80.fr/" },
       // rádios da Espanha
        { "country": "🇪🇸", "name": "Pepe Radio", "location": "Madrid, Espanha", "genre": "Pop, Rock (80s, 90s, 2000s)", "stream": "https://hipermedia2.adswizz.com/peperadio" },
        { "country": "🇪🇸", "name": "Todoexitos", "location": "Madrid, Espanha", "genre": "Pop (80s, 90s, 2000s)", "stream": "https://todoexitos.es/player/" },
        //rádios da Inglaterra
        { "country": "🇬🇧", "name": "Absolute Radio 80s", "location": "Londres, Reino Unido", "genre": "Rock, Pop (80s)", "stream": "https://ais.absoluteradio.co.uk/absolute80shigh.aac" },
        { "country": "🇬🇧", "name": "Absolute Radio 90s", "location": "Londres, Reino Unido", "genre": "Rock, Pop (90s)", "stream": "https://ais.absoluteradio.co.uk/absolute90shigh.aac" },
        { "country": "🇬🇧", "name": "Absolute Radio 00s", "location": "Londres, Reino Unido", "genre": "Rock, Pop (2000s)", "stream": "https://ais.absoluteradio.co.uk/absolute00shigh.aac" },
        { "country": "🇬🇧", "name": "Heart 80s", "location": "Londres, Reino Unido", "genre": "Pop (80s)", "stream": "https://heart80s-ugg0ah.c.bitgravity.com/Heart80s" },
        { "country": "🇬🇧", "name": "Heart 90s", "location": "Londres, Reino Unido", "genre": "Pop (90s)", "stream": "https://heart90s-lz31bo-c.bitgravity.com/Heart90s" },
        { "country": "🇬🇧", "name": "Magic at the Musicals", "location": "Londres, Reino Unido", "genre": "Pop, Soft Rock", "stream": "https://stream-mz.creativedork.com/" },
         //rádios da Africa
        { "country": "🇿🇦", "name": "Algoa FM", "location": "Port Elizabeth, África do Sul", "genre": "Pop, Rock (80s, 90s, 2000s)", "stream": "https://edge.iono.fm/xice/algoa.mp3" },
        { "country": "🇿🇦", "name": "Jacaranda FM", "location": "Pretória, África do Sul", "genre": "Pop, Rock (80s, 90s, 2000s)", "stream": "https://edge.iono.fm/xice/jacaranda_89fm.mp3" },
        { "country": "🇿🇦", "name": "East Coast Radio", "location": "Durban, África do Sul", "genre": "Pop (80s, 90s, 2000s)", "stream": "https://edge.iono.fm/xice/ecr_high.mp3" } 
    ];

    // textos multilíngue
    const translations = {
        pt: {
            badge: "✨12 RÁDIOS INCUBADAS",
            subtitle: "Plataforma futurista que conecta o mundo através do som. Incubamos estações independentes com tecnologia de ponta.",
            explore: "🌍 Exploração Global Sem Fronteiras",
            sectionTitle: "⭐ Estrelas em Ascensão",
            play: "OUVIR AGORA",
            selectRadio: "📻 Selecione uma rádio",
            ready: "⚡ Pronto para tocar",
            playing: "🎵 Tocando agora:"
        },
        en: {
            badge: "✨ 12 INCUBATED RADIOS",
            subtitle: "A futuristic platform that connects the world through sound. We incubate independent stations with cutting-edge technology.",
            explore: "🌍 Global Exploration Without Borders",
            sectionTitle: "⭐ Rising Stars",
            play: "PLAY NOW",
            selectRadio: "📻 Select a radio",
            ready: "⚡ Ready to play",
            playing: "🎵 Now playing:"
        }
    };

    let currentLang = 'pt';

    function updateLanguage() {
        const t = translations[currentLang];
        document.querySelector('[data-key="badge"]').innerText = t.badge;
        document.querySelector('[data-key="subtitle"]').innerText = t.subtitle;
        document.querySelector('[data-key="explore"]').innerText = t.explore;
        document.querySelector('[data-key="sectionTitle"]').innerHTML = t.sectionTitle;
        // atualizar textos dos botões e player, sem recriar grid
        const btns = document.querySelectorAll('.play-btn');
        btns.forEach((btn, idx) => {
            if (stations[idx]) {
                btn.innerText = t.play;
            }
        });
        const nowDiv = document.getElementById('nowPlayingText');
        if (nowDiv && !nowDiv.innerText.includes(':') && !nowDiv.innerText.includes('🎵')) {
            // preserva o nome da rádio se já estiver tocando
            if (!nowDiv.innerText.includes('Selecione') && !nowDiv.innerText.includes('Select')) {
                // deixa como está com nome da rádio
            } else {
                nowDiv.innerHTML = t.selectRadio;
            }
        } else if (nowDiv && (nowDiv.innerText.includes('Selecione') || nowDiv.innerText.includes('Select'))) {
            nowDiv.innerHTML = t.selectRadio;
        } else if (nowDiv && nowDiv.innerText.includes('Tocando agora')) {
            let radioName = nowDiv.innerText.split(':')[1];
            nowDiv.innerHTML = `${t.playing}${radioName}`;
        } else if (nowDiv && nowDiv.innerText.includes('Now playing')) {
            let radioName = nowDiv.innerText.split(':')[1];
            nowDiv.innerHTML = `${t.playing}${radioName}`;
        }
        const statusDiv = document.getElementById('playerStatus');
        if (statusDiv.innerText.includes('Pronto') || statusDiv.innerText.includes('Ready')) {
            statusDiv.innerText = t.ready;
        }
    }

    function renderStations() {
        const grid = document.getElementById('radioGrid');
        const t = translations[currentLang];
        grid.innerHTML = '';
        stations.forEach((station, index) => {
            const card = document.createElement('div');
            card.className = 'radio-card';
            card.innerHTML = `
                <div class="country">${station.country}</div>
                <div class="radio-name">${station.name}</div>
                <div class="location">${station.location}</div>
                <div class="genre">${station.genre}</div>
                <button class="play-btn" data-index="${index}">${t.play}</button>
            `;
            grid.appendChild(card);
        });
        // adicionar eventos após render
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.getAttribute('data-index');
                if (idx !== null) playStation(parseInt(idx));
            });
        });
    }

    function playStation(index) {
        const station = stations[index];
        const audio = document.getElementById('audioPlayer');
        const nowDiv = document.getElementById('nowPlayingText');
        const statusDiv = document.getElementById('playerStatus');
        const t = translations[currentLang];
        
        if (station && station.stream) {
            audio.src = station.stream;
            audio.play().catch(err => {
                console.warn("Erro ao reproduzir:", err);
                statusDiv.innerText = "❌ Stream indisponível no momento";
                setTimeout(() => { statusDiv.innerText = t.ready; }, 2000);
            });
            nowDiv.innerHTML = `${t.playing} ${station.name} (${station.location})`;
            statusDiv.innerText = "🔊 Conectando...";
            audio.onplaying = () => { statusDiv.innerText = `🎧 Tocando ${station.name}`; };
            audio.onerror = () => { statusDiv.innerText = "⚠️ Stream offline, tente outra rádio"; };
        } else {
            statusDiv.innerText = "❌ Rádio sem stream válida";
        }
    }

    // alternador de idioma
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        const btn = document.getElementById('langToggle');
        btn.innerText = currentLang === 'pt' ? '🇺🇸 English' : '🇧🇷 Português';
        updateLanguage();
        // re-render pra garantir textos dos botões e sem perder o grid
        const t = translations[currentLang];
        const btns = document.querySelectorAll('.play-btn');
        btns.forEach((btnEl, idx) => {
            if (stations[idx]) btnEl.innerText = t.play;
        });
        const nowDiv = document.getElementById('nowPlayingText');
        const statusDiv = document.getElementById('playerStatus');
        if (nowDiv.innerText.includes('Selecione') || nowDiv.innerText.includes('Select')) {
            nowDiv.innerHTML = t.selectRadio;
        } else if (nowDiv.innerText.includes('Tocando agora') || nowDiv.innerText.includes('Now playing')) {
            let parts = nowDiv.innerText.split(':');
            if (parts.length > 1) nowDiv.innerHTML = `${t.playing} ${parts[1]}`;
        }
        if (statusDiv.innerText.includes('Pronto') || statusDiv.innerText.includes('Ready')) {
            statusDiv.innerText = t.ready;
        }
    });

    // inicialização
    renderStations();
    updateLanguage();
