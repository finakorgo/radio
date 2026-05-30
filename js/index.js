    // BASE DE RÁDIOS: todas FUNCIONANDO (substituídas as que estavam offline por americanas de qualidade)
    const stations = [
        { country: "🇧🇷", name: "Antena 1", location: "São Paulo, BR", genre: "Pop / Hits", stream: "https://antena1.com.br/stream" },
        { country: "🥗", name: "SomaFM Groove Salad", location: "San Francisco, USA", genre: "Ambient / Downtempo", stream: "https://ice2.somafm.com/groovesalad-128-mp3" },
        { country: "📻", name: "WFMU Freeform", location: "Jersey City, USA", genre: "Eclectic", stream: "https://stream0.wfmu.org/freeform-128k" },
        // rádios americanas novas (funcionando) substituindo as quebradas:
        { country: "🇺🇸", name: "KEXP 90.3", location: "Seattle, USA", genre: "Alternative / Indie", stream: "https://kexp.streamguys1.com/kexp128.mp3" },
        { country: "🇺🇸", name: "Power 97.7 Kpow FM", location: "Lamonte, Missouri", genre: "Rock / Pop", stream: "http://stream.radiojar.com/zwtcz3bkxy8uv" },
        { country: "🇺🇸", name: "RPS Rádio Popular de Source", location: "Soure,Portugal", genre: "Pop / Rock", stream: "https://nl.digitalrm.pt:8072/stream" },
        { country: "🇺🇸", name: "Xradio", location: "Matosinhos, Portugal", genre: "Indie Rock", stream: "https://radio.xradio.pt/listen/xradio/radio.mp3" },
        { country: "🇺🇸", name: "WWOZ New Orleans", location: "New Orleans, USA", genre: "Soul / Jazz / Blues", stream: "https://wwoz-sc.streamguys1.com/wwoz-hi.mp3" },
        { country: "US", name: "Rockway Radio", location: "Laurelville, US", genre: "Rock", stream: "https://streaming.live365.com/a03841" }, // atualizado com stream funcional
        { country: "🎷", name: "WTCS FM 96.1", location: "Thomaston ME, United States", genre: "Rock", stream: "https://fm96wtcs.out.airtime.pro/fm96wtcs_a" }, 
        { country: "IT", name: "Radio 105", location: "Milano, IT", genre: "Pop / Hits", cover: "🇮🇹", stream: "http://icecast.unitedradio.it/Radio105.mp3" },
        //rádios Francesas        
       { "country": "🇫🇷", "name": "Magic Radio", "location": "Paris, França", "genre": "Pop, Rock, Soul (80s, 90s, 2000s)", "stream": "https://magicradio.ice.infomaniak.ch/magicradio-high.mp3" },
       
       // rádios da Espanha
        { "country": "ES", "name": "Radio Morata", "location": "Madrid, Espanha", "genre": "variadas", "stream": "https://cervera.eldialdigital.com:25141/stream" },
        { "country": "🇪🇸", "name": "Radio Enlace", "location": "Madrid, Espanha", "genre": "Pop (80s, 90s, 2000s)", "stream": "https://cervera.eldialdigital.com:25121/stream" },
        { "country": "🇪🇸", "name": "Onda 4 Ronda", "location": "Madrid, Espanha", "genre": "Pop (80s, 90s, 2000s)", "stream": "https://cervera.eldialdigital.com:23161/stream" }
       
    ];

    // textos multilíngue
    const translations = {
        pt: {
            badge: "✨12 RÁDIOS INCUBADAS",
            one: "A FUTURA INCUBADORA DE RADIOS",
            subtitle: "Plataforma futurista que conecta o mundo através do som. Incubamos estações independentes com tecnologia de ponta.",
            explore: "🌍 Exploração Global Sem Fronteiras",
            sectionTitle: "⭐ Estrelas em Ascensão",
            play: "OUVIR AGORA",
            selectRadio: "📻 Selecione uma rádio",
            ready: "⚡ Pronto para tocar",
            playing: "🎵 Tocando agora:",
            final: "🌌 AETHER &hearts; frequências do amanhã."
        },
        en: {
            badge: "✨ 12 INCUBATED RADIOS",
            one: "THE FUTURE RADIO INCUBATOR",
            subtitle: "A futuristic platform that connects the world through sound. We incubate independent stations with cutting-edge technology.",
            explore: "🌍 Global Exploration Without Borders",
            sectionTitle: "⭐ Rising Stars",
            play: "PLAY NOW",
            selectRadio: "📻 Select a radio",
            ready: "⚡ Ready to play",
            playing: "🎵 Now playing:",
            final:  "🌌 AETHER &hearts; frequencies of tomorrow."
        }
    };

    let currentLang = 'pt';

   /* function updateLanguage() {
        const t = translations[currentLang];
        //document.querySelector('[data-key="badge"]').innerText = t.badge;      
        document.querySelector('[data-key="one"]').innerText = t.one;
        document.querySelector('[data-key="subtitle"]').innerText = t.subtitle;
        document.querySelector('[data-key="explore"]').innerText = t.explore;
        document.querySelector('[data-key="sectionTitle"]').innerHTML = t.sectionTitle;
        document.querySelector('[data-key="final"]').innerHTML = t.final;
        // atualizar textos dos botões e player, sem recriar grid
        const btns = document.querySelectorAll('.play-btn');
        btns.forEach((btn, idx) => {
            if (stations[idx]) {
                btn.innerText = t.play;
            }
        });*/


    function updateLanguage() {
    const t = translations[currentLang];
    
    // Verificar se elemento existe antes de atualizar
    const badge = document.querySelector('[data-key="badge"]');
    if (badge) badge.innerText = t.badge;
    
    const one = document.querySelector('[data-key="one"]');
    if (one) one.innerText = t.one;
    
    const subtitle = document.querySelector('[data-key="subtitle"]');
    if (subtitle) subtitle.innerText = t.subtitle;
    
    const explore = document.querySelector('[data-key="explore"]');
    if (explore) explore.innerText = t.explore;
    
    const sectionTitle = document.querySelector('[data-key="sectionTitle"]');
    if (sectionTitle) sectionTitle.innerHTML = t.sectionTitle;
    
    const final = document.querySelector('[data-key="final"]');
    if (final) final.innerHTML = t.final;
    
    // Agora os botões serão atualizados mesmo se elementos data-key faltarem
    const btns = document.querySelectorAll('.play-btn');
    btns.forEach((btn, idx) => {
        if (stations[idx]) {
            btn.innerText = t.play;
        }
    });
//==^.^==
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
