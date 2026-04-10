/* ═══════════════════════════════════════════════════════════════════════════
   MONTOYA COACHING - QUIZ LOGIC V4.1
   Version optimisée avec corrections
   ═══════════════════════════════════════════════════════════════════════════ */

// CONFIGURATION
const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNGJiMzMwNDJjMjdkNGNiODllOGNiYWJkMDAxNTM2NDcxNTQxZDFjZmE1MTk1YTdjMjBhMDYyYzQzZmE5ZjUwMTE1MGY4MDhjYzJkMzQxNGIiLCJpYXQiOjE3Njg2ODE4OTYuNDMyOTE4LCJuYmYiOjE3Njg2ODE4OTYuNDMyOTIsImV4cCI6NDkyNDM1NTQ5Ni40MjYyNTEsInN1YiI6IjE2ODI2MjQiLCJzY29wZXMiOltdfQ.p27dK3BbF9QpAltwrgQEBLHMq4LzoQMvCBx2ToT2KDzMptPjZFpdPMRiz1M-oIHkyGyHrvLG3oc4zV0IF15SwWYy6p3Lr1I4XfHkEC4l0h2tzehbs9ly3SrsgvFfSKSg6mWjxuEvKhe95DlAG2x-u1RfW8uu8Y_6xWkoZe0ALoLF7NrbKd1ToVZ9B588XU1QUJY_5Enxse3rTmlM2isAmPMx4-we-mratwNJNJY5hyjtzlfIyl8E1ZeNrw4qS4ZX42GMkhd3uZg6-jYhoBvLf9QrOF8wxawaSXiAPFCfAe0EfRcbybfXLGnYBCxlHlV_yVADHG4g6E5mAC3EgHdGqjzMrjQXk-p2aN6aNosNXjg7FLfAC8gyvWQbwQQVWa2LZ28eQRPaVat5wrVUusA-bpFsZ042ZYcPiJNnRsRt-1YkEKoptdA7wPrtuVbeqyPGI4LdQJywzPjyCdErAzSYtURYBqkDj3e8g3CF9iNVWfeY69-VcmqRaF0OnylOy2dZtqVJntyxsP5QG8h3RUiT75qoLzNJ-ET4duLqmCsH8hBNFko00Zcij3aU3YAiBug0ZGRGUV66-aNvAy6rtpML-OD1Ktzfnj-lCoJ9RzxGgCIQXP992KkFaY-t5mn9Hb5f3VqdrAwkyf2c0pUny385pNLI799U3gTr_eptTKhcyzA';
const MAILERLITE_GROUP_ID = '179231788491605801';

// PROGRAMMES
const PROGRAMMES = {
    JANA: {
        key: 'JANA',
        titre: 'JANA Postpartum',
        sous_titre: 'Programme de récupération post accouchement en 12 semaines',
        lien_info: 'https://www.montoyacoaching.fr/postpartum-programme',
        lien_paiement: 'https://www.montoyacoaching.fr/product-page/jana-post-partum-12-semaines-de-programme',
        prix: '149€',
        image: 'https://static.wixstatic.com/media/885b87_d15be53def6d4d33a5e99a0ebc510755~mv2.png',
        isOnApp: true
    },
    GROSSESSE: {
        key: 'GROSSESSE',
        titre: 'MKC Grossesse',
        sous_titre: 'Programme sportif et nutritionnel adapté à chaque trimestre',
        lien_info: 'https://www.montoyacoaching.fr/product-page/makeachamp-grossesse',
        lien_paiement: 'https://www.montoyacoaching.fr/product-page/makeachamp-grossesse',
        prix: '159€',
        image: 'https://static.wixstatic.com/media/885b87_cdef4b59a53e46498aa1324aef18632c~mv2.jpg',
        isOnApp: true
    },
    MKC_SANS_DIAG: {
        key: 'MKC_SANS_DIAG',
        titre: 'MKC Transformation',
        sous_titre: 'Programme complet perte de gras et définition musculaire',
        lien_info: 'https://www.montoyacoaching.fr/pertedepoids',
        lien_paiement: 'https://buy.stripe.com/14AfZgh2S9cj6x54mc3840g',
        prix: '195€',
        prix_mensuel: '48,75€/mois en 4x sans frais',
        image_light: 'https://static.wixstatic.com/media/885b87_a2f7d6f7352f4a22959411b5c8a90def~mv2.webp',
        image_heavy: 'https://static.wixstatic.com/media/885b87_e29b40ae0d2a4606bc8844f510e97a42~mv2.jpg',
        isOnApp: true
    },
    MKC_AVEC_DIAG: {
        key: 'MKC_AVEC_DIAG',
        titre: 'MKC Transformation + Diagnostic Nutritionnel',
        sous_titre: 'Programme complet avec plan nutritionnel personnalisé par ta coach',
        lien_info: 'https://www.montoyacoaching.fr/pertedepoids',
        lien_paiement: 'https://www.montoyacoaching.fr/',
        prix: '240€',
        prix_mensuel: '60€/mois en 4x sans frais',
        isOnApp: true
    }
};

const EBOOKS = {
    DECLIC: {
        titre: 'Ebook DÉCLIC',
        sous_titre: 'Le guide complet pour débloquer ta perte de poids',
        prix: '39,90€',
        lien: 'https://www.montoyacoaching.fr/ebooks-fitness-nutrition',
        image: 'https://static.wixstatic.com/media/885b87_dd05d8d97dd04144923d61f7c6325917~mv2.jpg'
    },
    FESSIERS: {
        titre: 'Ebook FESSIERS',
        sous_titre: 'Les solutions pour débloquer tes résultats',
        prix: '39,90€',
        lien: 'https://www.montoyacoaching.fr/ebooks-fitness-nutrition',
        image: 'https://static.wixstatic.com/media/9b535b_7e6002bae33f4f2ebbb5366dd4fe28ae~mv2.png'
    },
    GROSSESSE: {
        titre: 'Manuel Essentiel Grossesse',
        sous_titre: 'Sport, nutrition et conseils précieux',
        prix: '29,90€',
        prix_barre: '49,90€',
        lien: 'https://www.montoyacoaching.fr/ebooks-fitness-nutrition',
        image: 'https://static.wixstatic.com/media/885b87_cdef4b59a53e46498aa1324aef18632c~mv2.jpg'
    }
};

// IMAGES TRANSFORMATION
const IMAGES_TRANSFORMATION = {
    postpartum_03: 'https://static.wixstatic.com/media/885b87_9c9ad37cc61440e3b0b78eeff6e2422b~mv2.jpg',
    grossesse: 'https://static.wixstatic.com/media/885b87_cdef4b59a53e46498aa1324aef18632c~mv2.jpg',
    definition_light: 'https://static.wixstatic.com/media/885b87_a2f7d6f7352f4a22959411b5c8a90def~mv2.webp',
    perte_poids_heavy: 'https://static.wixstatic.com/media/885b87_e29b40ae0d2a4606bc8844f510e97a42~mv2.jpg',
    perte_poids_heavy_2: 'https://static.wixstatic.com/media/885b87_d61b61682e1c4727923bb21fb83c704d~mv2.jpg'
};

// STATE
const quizState = {
    currentStep: 0,
    answers: {},
    stepsOrder: []
};

let currentFeatureSlide = 0;

// STEPS ORDER BUILDER
function buildStepsOrder() {
    const a = quizState.answers;
    const objectif = a.objectif_principal;
    
    let steps = ['0', '1'];
    
    if (objectif === 'enceinte') {
        steps.push('1a', 'msg_grossesse', '2', '4', '8', '9', '10', '12', 'loading', 'result');
    } else if (objectif === 'post_partum') {
        steps.push('1b');
        
        if (a.delai_post_partum === 'moins_3_mois') {
            steps.push('msg_pp_03', '2', '4', '8', '9', '10', '12', 'loading', 'result');
        } else {
            steps.push('2', '3', '4', '5', '6', '7', 'msg_progression', '8', '9', '10', '11', '12', 'loading', 'result');
        }
    } else {
        steps.push('2', '4', '5', '6', '7', 'msg_progression', '8', '9', '10', '11', '12', 'loading', 'result');
    }
    
    quizState.stepsOrder = steps;
    return steps;
}

function getCurrentStepId() {
    return quizState.stepsOrder[quizState.currentStep] || '0';
}

// NAVIGATION
function showStep(stepIndex) {
    buildStepsOrder();
    
    const stepId = quizState.stepsOrder[stepIndex];
    if (!stepId) return;
    
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    
    const targetStep = document.querySelector(`.step[data-step="${stepId}"]`);
    if (targetStep) {
        targetStep.classList.add('active');
        targetStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    updateProgress();
    updateNavButtons(stepId);
    
    if (stepId === 'loading') {
        startLoading();
    } else if (stepId === 'result') {
        showResult();
    } else if (stepId === 'msg_progression') {
        updateProgressionDisplay();
    }
    
    populateDynamicContent();
}

function nextStep() {
    saveCurrentAnswers();
    if (!validateCurrentStep()) return;
    
    buildStepsOrder();
    
    if (quizState.currentStep < quizState.stepsOrder.length - 1) {
        quizState.currentStep++;
        showStep(quizState.currentStep);
    }
}

function prevStep() {
    if (quizState.currentStep > 0) {
        quizState.currentStep--;
        showStep(quizState.currentStep);
    }
}

function restartQuiz() {
    quizState.currentStep = 0;
    quizState.answers = {};
    buildStepsOrder();
    showStep(0);
    
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
}

function saveCurrentAnswers() {
    const currentStepId = getCurrentStepId();
    const currentStep = document.querySelector(`.step[data-step="${currentStepId}"]`);
    if (!currentStep) return;
    
    currentStep.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        quizState.answers[input.name] = input.value;
    });
    
    const checkboxGroups = {};
    currentStep.querySelectorAll('input[type="checkbox"]').forEach(input => {
        if (!checkboxGroups[input.name]) checkboxGroups[input.name] = [];
        if (input.checked) checkboxGroups[input.name].push(input.value);
    });
    Object.entries(checkboxGroups).forEach(([name, values]) => {
        quizState.answers[name] = values;
    });
    
    currentStep.querySelectorAll('input[type="text"], input[type="number"], input[type="email"]').forEach(input => {
        if (input.value) quizState.answers[input.name || input.id] = input.value;
    });
}

function validateCurrentStep() {
    const currentStepId = getCurrentStepId();
    const currentStep = document.querySelector(`.step[data-step="${currentStepId}"]`);
    if (!currentStep) return true;
    
    if (currentStep.classList.contains('interstitial')) return true;
    
    const radios = currentStep.querySelectorAll('input[type="radio"]');
    if (radios.length > 0) {
        const radioNames = [...new Set([...radios].map(r => r.name))];
        for (const name of radioNames) {
            if (!currentStep.querySelector(`input[name="${name}"]:checked`)) {
                showValidationError('Merci de sélectionner une option');
                return false;
            }
        }
    }
    
    const requiredInputs = currentStep.querySelectorAll('input[required]');
    for (const input of requiredInputs) {
        if (!input.value.trim()) {
            showValidationError('Merci de remplir tous les champs');
            input.focus();
            return false;
        }
        if (input.type === 'email' && !isValidEmail(input.value)) {
            showValidationError('Merci d\'entrer une adresse email valide');
            input.focus();
            return false;
        }
    }
    
    return true;
}

function showValidationError(message) {
    alert(message);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateNavButtons(stepId) {
    const btnBack = document.getElementById('btnBack');
    const btnNext = document.getElementById('btnNext');
    const nav = document.getElementById('quizNavigation');
    const progress = document.getElementById('progressContainer');
    
    if (stepId === '0' || stepId === 'loading' || stepId === 'result') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
    
    if (stepId === '0' || stepId === 'result') {
        progress.style.display = 'none';
    } else {
        progress.style.display = 'flex';
    }
    
    btnBack.style.display = quizState.currentStep <= 1 ? 'none' : 'flex';
    
    if (stepId === '12') {
        btnNext.innerHTML = 'Découvrir mon programme <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    } else {
        btnNext.innerHTML = 'Continuer <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    }
    
    const currentStep = document.querySelector(`.step[data-step="${stepId}"]`);
    if (currentStep && currentStep.classList.contains('interstitial')) {
        nav.style.display = 'none';
    }
}

function updateProgress() {
    const mainSteps = quizState.stepsOrder.filter(s => 
        !s.startsWith('msg') && s !== 'loading' && s !== 'result' && s !== '0'
    );
    const currentMainIndex = mainSteps.indexOf(getCurrentStepId());
    const progress = Math.max(0, ((currentMainIndex + 1) / mainSteps.length) * 100);
    
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${Math.max(1, currentMainIndex + 1)} / ${mainSteps.length}`;
}

// DYNAMIC CONTENT
function populateDynamicContent() {
    const prenom = quizState.answers.prenom || '';
    
    document.querySelectorAll('#prenomDisplay1, #loadingPrenom, #resultPrenom').forEach(el => {
        if (el) el.textContent = prenom;
    });
}

function updateProgressionDisplay() {
    const poidsActuel = parseFloat(quizState.answers.poids_actuel) || 0;
    const poidsObjectif = parseFloat(quizState.answers.poids_objectif) || 0;
    const objectif = quizState.answers.objectif_principal;
    const isPriseMasse = objectif === 'prise_masse';
    const deltaPoids = Math.abs(poidsObjectif - poidsActuel);
    const prenom = quizState.answers.prenom || '';

    document.getElementById('prenomDisplay1').textContent = prenom;
    document.getElementById('poidsActuelDisplay').textContent = poidsActuel + ' kg';
    document.getElementById('poidsObjectifDisplay').textContent = poidsObjectif + ' kg';

    let weeksText = '8 à 12';
    let messageProgression = '';

    if (isPriseMasse) {
        // Prise de masse : 0,1 à 0,3 kg/semaine réaliste
        if (deltaPoids > 0) {
            const minWeeks = Math.ceil(deltaPoids / 0.3);
            const maxWeeks = Math.ceil(deltaPoids / 0.1);
            const cappedMax = Math.min(maxWeeks, 52); // max 1 an affiché
            weeksText = `${minWeeks} à ${cappedMax}`;
        }
        messageProgression = `💪 En prise de masse progressive (0,1 à 0,3 kg par semaine), tu peux atteindre ton objectif en <strong>${weeksText} semaines</strong> !`;
    } else {
        // Perte de poids / recomposition : 0,4 à 1,5 kg/semaine
        if (deltaPoids > 0 && poidsActuel > poidsObjectif) {
            const minWeeks = Math.ceil(deltaPoids / 1.5);
            const maxWeeks = Math.ceil(deltaPoids / 0.4);
            weeksText = `${minWeeks} à ${maxWeeks}`;
        }
        messageProgression = `💪 En perdant entre 0,4 kg et 1,5 kg par semaine, tu peux atteindre ton objectif en <strong>${weeksText} semaines</strong> !`;
    }

    const weeksEl = document.getElementById('weeksEstimate');
    if (weeksEl) weeksEl.innerHTML = messageProgression;

    drawProgressionChart(poidsActuel, poidsObjectif, parseInt(weeksText.split(' ')[0]) || 12, isPriseMasse);

    const imageContainer = document.getElementById('dynamicTransfoImage');
    let imageSrc = IMAGES_TRANSFORMATION.definition_light;

    if (!isPriseMasse) {
        if (deltaPoids > 10) {
            imageSrc = IMAGES_TRANSFORMATION.perte_poids_heavy;
        } else if (deltaPoids > 5) {
            imageSrc = IMAGES_TRANSFORMATION.perte_poids_heavy_2;
        }
    }

    if (imageContainer) {
        imageContainer.innerHTML = `<img src="${imageSrc}" alt="Transformation" class="transformation-photo">`;
    }
}

function drawProgressionChart(poidsActuel, poidsObjectif, weeks, isPriseMasse) {
    const canvas = document.getElementById('progressCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    
    const numPoints = Math.min(weeks, 12) || 12;
    const delta = Math.abs(poidsObjectif - poidsActuel);
    const points = [];
    
    for (let i = 0; i <= numPoints; i++) {
        const progress = i / numPoints;
        let poids;
        if (isPriseMasse) {
            poids = poidsActuel + (delta * progress); // courbe montante
        } else {
            poids = poidsActuel - (delta * progress); // courbe descendante
        }
        const minPoids = Math.min(poidsActuel, poidsObjectif);
        const maxPoids = Math.max(poidsActuel, poidsObjectif);
        const range = maxPoids - minPoids || 1;
        points.push({
            x: padding.left + (chartWidth * progress),
            y: padding.top + chartHeight - (chartHeight * ((poids - minPoids) / range))
        });
    }
    
    ctx.strokeStyle = '#E8E4DE';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }
    
    const gradient = ctx.createLinearGradient(padding.left, 0, width - padding.right, 0);
    gradient.addColorStop(0, '#FDCB6E');
    gradient.addColorStop(1, '#E17055');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        const xc = (points[i].x + points[i-1].x) / 2;
        const yc = (points[i].y + points[i-1].y) / 2;
        ctx.quadraticCurveTo(points[i-1].x, points[i-1].y, xc, yc);
    }
    ctx.lineTo(points[points.length-1].x, points[points.length-1].y);
    ctx.stroke();
    
    const lastPoint = points[points.length - 1];
    ctx.fillStyle = '#E17055';
    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y - 8);
    ctx.lineTo(lastPoint.x + 10, lastPoint.y);
    ctx.lineTo(lastPoint.x, lastPoint.y + 8);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#636E72';
    ctx.font = '12px Nunito, sans-serif';
    ctx.textAlign = 'center';
    
    ctx.fillText('Départ', padding.left, height - 10);
    ctx.fillText(`Semaine ${numPoints}`, width - padding.right, height - 10);
    
    ctx.textAlign = 'right';
    ctx.fillText(poidsActuel + ' kg', padding.left - 5, padding.top + 10);
    ctx.fillText(poidsObjectif + ' kg', padding.left - 5, height - padding.bottom);
}

// LOADING
function startLoading() {
    const loadingBar = document.getElementById('loadingBar');
    const loadingText = document.getElementById('loadingText');
    const loadingPrenom = document.getElementById('loadingPrenom');
    
    if (loadingPrenom) loadingPrenom.textContent = quizState.answers.prenom || '';
    
    const messages = [
        'Analyse de tes objectifs...',
        'Calcul de ton profil...',
        'Recherche du programme idéal...',
        'Préparation de ta recommandation...'
    ];
    
    let progress = 0;
    let msgIndex = 0;
    
    const interval = setInterval(() => {
        progress += 2;
        if (loadingBar) loadingBar.style.width = `${progress}%`;
        
        if (progress % 25 === 0 && msgIndex < messages.length) {
            if (loadingText) loadingText.textContent = messages[msgIndex++];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => nextStep(), 500);
        }
    }, 50);
}

// RECOMMENDATION ENGINE
function getRecommendation() {
    const a = quizState.answers;
    
    if (a.objectif_principal === 'enceinte') {
        return {
            programme: PROGRAMMES.GROSSESSE,
            type: 'grossesse',
            showDiagnostic: false,
            showEbooks: false,
            showFeatures: true
        };
    }
    
    if (a.objectif_principal === 'post_partum' && a.delai_post_partum === 'moins_3_mois') {
        return {
            programme: PROGRAMMES.JANA,
            type: 'jana',
            showDiagnostic: false,
            showEbooks: false,
            showFeatures: true
        };
    }
    
    const hasSymptoms = a.problematiques && 
        (a.problematiques.includes('diastasis') || 
         a.problematiques.includes('fuites_urinaires') || 
         a.problematiques.includes('pression_perineale'));
    
    if (a.objectif_principal === 'post_partum' && hasSymptoms) {
        return {
            programme: PROGRAMMES.JANA,
            type: 'jana_symptoms',
            showDiagnostic: false,
            showEbooks: false,
            showFeatures: true,
            symptomWarning: true
        };
    }
    
    if (a.budget === 'moins_40') {
        return {
            programme: null,
            type: 'ebooks',
            showDiagnostic: false,
            showEbooks: true,
            showFeatures: false,
            idealProgramme: determineIdealProgramme(a)
        };
    }
    
    if (a.budget === '40_59' || a.niveau_nutrition === 'maitrise' || a.niveau_nutrition === 'bonnes_bases') {
        return {
            programme: PROGRAMMES.MKC_SANS_DIAG,
            type: 'mkc',
            showDiagnostic: true,
            showEbooks: false,
            showFeatures: true
        };
    }
    
    if (a.budget === '60_plus' || a.budget === 'paiement_unique' || 
        a.niveau_nutrition === 'perdue' || a.niveau_nutrition === 'pas_resultats') {
        return {
            programme: PROGRAMMES.MKC_AVEC_DIAG,
            type: 'mkc_diag',
            showDiagnostic: false,
            showEbooks: false,
            showFeatures: true
        };
    }
    
    return {
        programme: PROGRAMMES.MKC_SANS_DIAG,
        type: 'mkc',
        showDiagnostic: true,
        showEbooks: false,
        showFeatures: true
    };
}

function determineIdealProgramme(answers) {
    if (answers.niveau_nutrition === 'perdue' || answers.niveau_nutrition === 'pas_resultats') {
        return PROGRAMMES.MKC_AVEC_DIAG;
    }
    return PROGRAMMES.MKC_SANS_DIAG;
}

// SHOW RESULT
function showResult() {
    const recommendation = getRecommendation();
    const a = quizState.answers;
    
    document.getElementById('resultPrenom').textContent = a.prenom || '';
    
    if (recommendation.showEbooks) {
        showEbookResult(recommendation);
        return;
    }
    
    const prog = recommendation.programme;
    
    document.getElementById('programTitle').textContent = prog.titre;
    document.getElementById('programSubtitle').textContent = prog.sous_titre;
    
    const priceEl = document.getElementById('programPrice');
    if (prog.prix_mensuel) {
        priceEl.innerHTML = `<span class="price-monthly">${prog.prix_mensuel}</span><span class="price-total">(soit ${prog.prix} au total)</span>`;
    } else {
        priceEl.textContent = prog.prix;
    }
    
    const imageContainer = document.getElementById('resultImage');
    let resultImage = prog.image;
    
    if (recommendation.type === 'mkc' || recommendation.type === 'mkc_diag') {
        const deltaPoids = (parseFloat(a.poids_actuel) || 0) - (parseFloat(a.poids_objectif) || 0);
        if (deltaPoids > 10) {
            resultImage = IMAGES_TRANSFORMATION.perte_poids_heavy;
        } else if (deltaPoids > 5) {
            resultImage = IMAGES_TRANSFORMATION.perte_poids_heavy_2;
        } else {
            resultImage = IMAGES_TRANSFORMATION.definition_light;
        }
    }
    
    if (recommendation.type === 'jana' || recommendation.type === 'jana_symptoms') {
        resultImage = PROGRAMMES.JANA.image;
    }
    
    imageContainer.innerHTML = `<img src="${resultImage}" alt="${prog.titre}" class="result-main-image">`;
    imageContainer.style.display = 'block';
    
    document.getElementById('resultMessage').innerHTML = buildResultMessage(recommendation);
    document.getElementById('resultMessage').style.display = 'block';
    
    const warningEl = document.getElementById('problematiqueWarning');
    if (recommendation.symptomWarning) {
        warningEl.style.display = 'block';
        warningEl.innerHTML = `<p>⚠️ <strong>Note importante :</strong> Tu as mentionné des symptômes (diastasis, fuites urinaires ou pression périnéale). Il est recommandé de consulter un professionnel de santé (sage femme, kiné spécialisé) en parallèle du programme pour un suivi adapté.</p>`;
    } else {
        warningEl.style.display = 'none';
    }
    
    const engagementBox = document.getElementById('engagementBox');
    engagementBox.style.display = (recommendation.type === 'mkc' || recommendation.type === 'mkc_diag') ? 'block' : 'none';
    
    const featuresCarousel = document.getElementById('featuresCarousel');
    featuresCarousel.style.display = recommendation.showFeatures ? 'block' : 'none';
    if (recommendation.showFeatures) {
        initFeaturesCarousel();
    }
    
    buildCTA(recommendation);
    
    const diagOption = document.getElementById('diagnosticOption');
    if (recommendation.showDiagnostic) {
        diagOption.style.display = 'block';
        document.getElementById('diagnosticButton').href = PROGRAMMES.MKC_AVEC_DIAG.lien_paiement;
    } else {
        diagOption.style.display = 'none';
    }
    
    document.getElementById('ebookSection').style.display = 'none';
    document.getElementById('resultCard').style.display = 'block';
    
    sendToMailerLite(recommendation);
}

function showEbookResult(recommendation) {
    const a = quizState.answers;
    
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('resultMessage').style.display = 'none';
    document.getElementById('engagementBox').style.display = 'none';
    document.getElementById('diagnosticOption').style.display = 'none';
    document.getElementById('resultImage').style.display = 'none';
    document.getElementById('featuresCarousel').style.display = 'none';
    
    const ebookSection = document.getElementById('ebookSection');
    ebookSection.style.display = 'block';
    
    const ebookGrid = document.getElementById('ebookGrid');
    let ebooksHtml = '';
    
    if (a.objectif_principal === 'perte_poids_10kg' || a.objectif_principal === 'recomposition') {
        ebooksHtml += buildEbookCard(EBOOKS.DECLIC);
    }
    
    if (a.zones && a.zones.includes('fessiers')) {
        ebooksHtml += buildEbookCard(EBOOKS.FESSIERS);
    } else if (a.objectif_principal === 'prise_masse') {
        ebooksHtml += buildEbookCard(EBOOKS.FESSIERS);
    }
    
    if (!ebooksHtml) {
        ebooksHtml = buildEbookCard(EBOOKS.DECLIC) + buildEbookCard(EBOOKS.FESSIERS);
    }
    
    ebookGrid.innerHTML = ebooksHtml;
    
    const ideal = recommendation.idealProgramme;
    document.getElementById('idealProgram').innerHTML = `<strong>${ideal.titre}</strong> à ${ideal.prix_mensuel || ideal.prix}`;
    
    sendToMailerLite(recommendation);
}

function buildEbookCard(ebook) {
    const priceHtml = ebook.prix_barre 
        ? `<span class="price-barred">${ebook.prix_barre}</span> <span class="price">${ebook.prix}</span>`
        : `<span class="price">${ebook.prix}</span>`;
    
    return `
        <div class="ebook-card">
            <img src="${ebook.image}" alt="${ebook.titre}" class="ebook-image">
            <h4>${ebook.titre}</h4>
            <p>${ebook.sous_titre}</p>
            <div class="ebook-price">${priceHtml}</div>
            <a href="${ebook.lien}" class="btn-primary btn-ebook" target="_blank">Je le veux</a>
        </div>
    `;
}

function buildResultMessage(recommendation) {
    const a = quizState.answers;
    const prenom = a.prenom || '';
    
    if (recommendation.type === 'grossesse') {
        return `
            <p>Félicitations ${prenom} pour ta grossesse ! 🤰</p>
            <p>Le programme <strong>MKC Grossesse</strong> t'accompagne trimestre par trimestre pour rester active en toute sécurité, maintenir ta masse musculaire et préparer ton corps à l'accouchement.</p>
            <p>💡 Rappel : pendant la grossesse, l'objectif n'est pas de perdre du poids mais de garder un corps fort et mobile pour toi et ton bébé.</p>
        `;
    }
    
    if (recommendation.type === 'jana' || recommendation.type === 'jana_symptoms') {
        return `
            <p>${prenom}, le programme <strong>JANA Postpartum</strong> est fait pour toi.</p>
            <p>Il va te permettre de :</p>
            <ul>
                <li>🔹 Reconnecter et renforcer ton périnée en douceur</li>
                <li>🔹 Travailler tes abdominaux profonds via des exercices de respiration</li>
                <li>🔹 Éviter les fuites urinaires et le diastasis</li>
                <li>🔹 Retrouver un ventre plat progressivement</li>
            </ul>
        `;
    }
    
    if (recommendation.type === 'mkc_diag') {
        return `
            <p>${prenom}, d'après tes réponses, tu as besoin d'un cadre nutritionnel clair pour obtenir des résultats.</p>

            <p>🎯 <strong>Objectifs du programme</strong></p>
            <ul>
                <li>✅ Perte de masse grasse</li>
                <li>✅ Fessiers plus galbés</li>
                <li>✅ Abdos plus dessinés</li>
                <li>✅ Silhouette globalement plus définie</li>
            </ul>

            <p>📋 <strong>Contenu inclus</strong></p>
            <ul>
                <li>✅ Programme sportif structuré sur 12 semaines (13 semaines d'accès)</li>
                <li>✅ 4 séances par semaine (adaptables à 3)</li>
                <li>✅ Réalisable en salle ou à la maison</li>
                <li>✅ +300 recettes rapides et équilibrées</li>
            </ul>

            <p>🥗 <strong>Diagnostic nutritionnel personnalisé</strong> <em>(sous réserve de places disponibles)</em></p>
            <ul>
                <li>✅ Calcul précis de tes calories et macros (protéines, glucides, lipides)</li>
                <li>✅ Programme nutritionnel personnalisé par ta coach</li>
                <li>✅ Analyse morphologique si tu fournis des photos</li>
            </ul>
            <p><em>Diagnostic livré sous 48 à 72h après inscription.</em></p>

            <p><em>⚠️ Programme sans suivi personnalisé continu.</em></p>
        `;
    }
    
    return `
        <p>${prenom}, le programme <strong>MKC Transformation</strong> correspond à ton profil.</p>

        <p>🎯 <strong>Objectifs du programme</strong></p>
        <ul>
            <li>✅ Perte de masse grasse</li>
            <li>✅ Fessiers plus galbés</li>
            <li>✅ Abdos plus dessinés</li>
            <li>✅ Silhouette globalement plus définie</li>
        </ul>

        <p>📋 <strong>Contenu inclus</strong></p>
        <ul>
            <li>✅ Programme sportif structuré sur 12 semaines (13 semaines d'accès, dont 1 semaine d'adaptation à l'app)</li>
            <li>✅ Démarrage immédiat après achat</li>
            <li>✅ 4 séances par semaine (adaptables à 3 selon tes disponibilités)</li>
            <li>✅ Réalisable en salle ou à la maison</li>
            <li>✅ Méthode nutritionnelle complète : calcul des calories, répartition protéines / glucides / lipides</li>
            <li>✅ Accès à +300 recettes rapides et équilibrées</li>
        </ul>

        <p>🏠 <strong>Matériel à la maison</strong> : élastiques, bouteilles d'eau, haltères légers</p>

        <p><em>⚠️ Programme sans suivi personnalisé. Tu gères ton parcours en autonomie avec tous les outils fournis.</em></p>
    `;
}

function buildCTA(recommendation) {
    const ctaContainer = document.getElementById('resultCtaContainer');
    const prog = recommendation.programme;
    
    if (!prog) {
        ctaContainer.innerHTML = '';
        return;
    }
    
    let ctaHtml = `
        <a href="${prog.lien_paiement}" class="btn-primary btn-result" target="_blank">
            Commencer ma transformation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </a>
    `;
    
    if (prog.lien_info && prog.lien_info !== prog.lien_paiement) {
        ctaHtml += `<a href="${prog.lien_info}" class="btn-secondary btn-info" target="_blank">En savoir plus sur le programme</a>`;
    }
    
    ctaContainer.innerHTML = ctaHtml;
}

// FEATURES CAROUSEL
function initFeaturesCarousel() {
    currentFeatureSlide = 0;
    updateFeaturesCarousel();
    
    setInterval(() => {
        slideFeatures(1);
    }, 5000);
}

function slideFeatures(direction) {
    currentFeatureSlide += direction;
    if (currentFeatureSlide > 2) currentFeatureSlide = 0;
    if (currentFeatureSlide < 0) currentFeatureSlide = 2;
    updateFeaturesCarousel();
}

function updateFeaturesCarousel() {
    const track = document.getElementById('featuresTrack');
    const dots = document.querySelectorAll('#carouselDots .dot');
    
    if (track) {
        track.style.transform = `translateX(-${currentFeatureSlide * 100}%)`;
    }
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentFeatureSlide);
    });
}

// MAILERLITE
// IDs des groupes de segmentation par type de prospect
// ⚠️ IMPORTANT : Crée ces 3 groupes dans MailerLite et remplace les IDs ci-dessous
const MAILERLITE_SEGMENT_GROUPS = {
    'prospect_jana': '',        // TODO: Mettre l'ID du groupe "Prospect JANA"
    'prospect_grossesse': '',   // TODO: Mettre l'ID du groupe "Prospect Grossesse"
    'prospect_mkc90': ''        // TODO: Mettre l'ID du groupe "Prospect MAKEACHAMP 90 jours"
};

function getProspectSegment(recommendation) {
    if (!recommendation.programme) return 'prospect_mkc90'; // Ebooks = prospects MKC par défaut
    
    switch (recommendation.programme.key) {
        case 'JANA': return 'prospect_jana';
        case 'GROSSESSE': return 'prospect_grossesse';
        case 'MKC_SANS_DIAG':
        case 'MKC_AVEC_DIAG':
        default: return 'prospect_mkc90';
    }
}

async function sendToMailerLite(recommendation) {
    const a = quizState.answers;
    const segment = getProspectSegment(recommendation);
    
    // Groupes : le groupe principal + le groupe de segment (si l'ID existe)
    const groups = [MAILERLITE_GROUP_ID];
    const segmentGroupId = MAILERLITE_SEGMENT_GROUPS[segment];
    if (segmentGroupId) {
        groups.push(segmentGroupId);
    }
    
    const subscriberData = {
        email: a.email,
        fields: {
            name: a.prenom || '',
            quiz_objectif: a.objectif_principal || '',
            quiz_age: a.tranche_age || '',
            quiz_delai_pp: a.delai_post_partum || '',
            quiz_trimestre: a.trimestre_grossesse || '',
            quiz_problematiques: (a.problematiques || []).join(', '),
            quiz_niveau_sport: a.niveau_sport || '',
            quiz_niveau_nutrition: a.niveau_nutrition || '',
            quiz_budget: a.budget || '',
            quiz_programme_recommande: recommendation.programme ? recommendation.programme.key : 'EBOOKS',
            quiz_segment: segment,
            quiz_poids_actuel: a.poids_actuel || '',
            quiz_poids_objectif: a.poids_objectif || '',
            quiz_date: new Date().toISOString().split('T')[0]
        },
        groups: groups,
        status: 'active'
    };
    
    try {
        const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`
            },
            body: JSON.stringify(subscriberData)
        });
        
        if (!response.ok) {
            console.error('MailerLite error:', await response.text());
        } else {
            console.log('MailerLite: subscriber added to segment', segment);
        }
    } catch (error) {
        console.error('MailerLite error:', error);
    }
}

// CAROUSEL ACCUEIL
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    
    const slides = track.innerHTML;
    track.innerHTML = slides + slides;
    
    let scrollPos = 0;
    
    setInterval(() => {
        scrollPos += 1;
        if (scrollPos >= track.scrollWidth / 2) {
            scrollPos = 0;
        }
        track.style.transform = `translateX(-${scrollPos}px)`;
    }, 30);
}

// OPTION CARDS
function initOptionCards() {
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function() {
            const input = this.querySelector('input');
            if (!input) return;
            
            if (input.type === 'radio') {
                this.closest('.options-grid').querySelectorAll('.option-card').forEach(c => {
                    c.classList.remove('selected');
                });
                this.classList.add('selected');
                input.checked = true;
            } else if (input.type === 'checkbox') {
                if (this.classList.contains('exclusive')) {
                    if (!input.checked) {
                        this.closest('.options-grid').querySelectorAll('.option-card:not(.exclusive) input').forEach(cb => {
                            cb.checked = false;
                            cb.closest('.option-card').classList.remove('selected');
                        });
                    }
                } else {
                    const exclusive = this.closest('.options-grid').querySelector('.option-card.exclusive input');
                    if (exclusive) {
                        exclusive.checked = false;
                        exclusive.closest('.option-card').classList.remove('selected');
                    }
                }
                input.checked = !input.checked;
                this.classList.toggle('selected', input.checked);
            }
        });
    });
}

// INIT
document.addEventListener('DOMContentLoaded', function() {
    buildStepsOrder();
    showStep(0);
    initCarousel();
    initOptionCards();
    
    document.querySelectorAll('#carouselDots .dot').forEach(dot => {
        dot.addEventListener('click', function() {
            currentFeatureSlide = parseInt(this.dataset.index);
            updateFeaturesCarousel();
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const btnNext = document.getElementById('btnNext');
            const nav = document.getElementById('quizNavigation');
            if (btnNext && nav.style.display !== 'none') {
                nextStep();
            }
        }
    });
});
