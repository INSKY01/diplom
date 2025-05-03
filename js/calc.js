let currentStep = 1;
const totalSteps = 10;
let currentTotalPrice = 0;


let selections = {
    houseType: null,
    area: null,
    floor: null,
    roof: null,
    material: null,
    foundation: null,
    facade: null,
    electrical: null,
    wallFinish: null,
    additions: [],
    contact: {
        name: '',
        phone: '',
        email: '',
        comment: ''
    }
};

function setDefaultValues() {
    // Устанавливаем дефолтные значения для селекторов
    selections.houseType = adminData.houseTypes[0].id;
    selections.floor = adminData.floors[0].id;
    selections.roof = adminData.roofs[0].id;
    selections.material = adminData.materials[0].id;
    selections.foundation = adminData.foundations[0].id;
    selections.facade = adminData.facades[0].id;
    selections.electrical = adminData.electrical[0].id;
    selections.wallFinish = adminData.wallFinishes[0].id;
} 
function loadAdminData() {
    try {
        const savedData = localStorage.getItem('adminData');
        if (savedData) {
            adminData = JSON.parse(savedData);
        } else {
            console.error('No admin data found in localStorage');
        }
    } catch (error) {
        console.error('Error loading admin data:', error);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadAdminData();
    updateStepDisplay();
    initializeCalculator();
    document.getElementById('areaInput')?.addEventListener('input', calculateTotal);
});

document.addEventListener('DOMContentLoaded', function() {
    const contactName = document.getElementById('contactName');
    const contactPhone = document.getElementById('contactPhone');
    const contactEmail = document.getElementById('contactEmail');
    const contactComment = document.getElementById('contactComment');
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        // Фокус
        input.addEventListener('focus', function(e) {
            if (!e.target.value) {
                e.target.value = '+7 (';
            }
        });

        // Ввод
        input.addEventListener('input', function(e) {
            formatPhoneNumber(e.target);
            // Убираем проверку при вводе
            e.target.classList.remove('invalid');
        });

        // Потеря фокуса
        input.addEventListener('blur', function(e) {
            const digitsOnly = e.target.value.replace(/\D/g, '');
            // Проверяем только если поле не пустое
            if (digitsOnly.length > 0 && digitsOnly.length !== 11) {
                e.target.classList.add('invalid');
                showNotification('Введите номер телефона полностью', 'error');
            } else {
                e.target.classList.remove('invalid');
            }
        });
        
        // Обработка клавиш
        input.addEventListener('keydown', function(e) {
            // Разрешаем: backspace, delete, tab и escape
            if ([8, 9, 27, 46].indexOf(e.keyCode) !== -1 ||
                // Разрешаем: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Разрешаем: home, end, влево, вправо
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }
            // Запрещаем все, кроме цифр
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
                (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });

    if (contactName) {
        contactName.addEventListener('input', function(e) {
            const value = e.target.value.trim();
            if (value && !/^[а-яёА-ЯЁa-zA-Z\s-]+$/.test(value)) {
                e.target.classList.add('invalid');
                showNotification('Имя может содержать только буквы, пробелы и дефис', 'error');
            } else {
                e.target.classList.remove('invalid');
            }
        });
    }

    if (contactPhone) {
        contactPhone.addEventListener('input', function(e) {
            const value = e.target.value.trim();
            const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            if (value && !phoneRegex.test(value)) {
                e.target.classList.add('invalid');
            } else {
                e.target.classList.remove('invalid');
            }
        });
    }

    if (contactEmail) {
        contactEmail.addEventListener('input', function(e) {
            const value = e.target.value.trim();
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (value && !emailRegex.test(value)) {
                e.target.classList.add('invalid');
            } else {
                e.target.classList.remove('invalid');
            }
        });
    }

    if (contactComment) {
        contactComment.addEventListener('input', function(e) {
            const value = e.target.value.trim();
            if (value.length > 1000) {
                e.target.classList.add('invalid');
                showNotification('Комментарий не должен превышать 1000 символов', 'error');
            } else {
                e.target.classList.remove('invalid');
            }
        });
    }
});

function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, ''); // Оставляем только цифры
    let formattedValue = '';

    if (value.length === 0) {
        formattedValue = '';
    } else {
        // Если первая цифра 7 или 8, убираем её
        if (value[0] === '7' || value[0] === '8') {
            value = value.substring(1);
        }
        value = value.substring(0, 10); // Ограничиваем до 10 цифр

        // Форматируем как +7 (XXX) XXX-XX-XX
        formattedValue = '+7 (';
        if (value.length > 0) {
            formattedValue += value.substring(0, 3);
        }
        if (value.length > 3) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formattedValue += '-' + value.substring(8);
        }
    }

    input.value = formattedValue;
}

function validatePhone(phone) {
    const digitsOnly = phone.replace(/\D/g, '');
    // Проверяем, что номер состоит из 11 цифр и начинается с 7 или 8
    return digitsOnly.length === 11 && (digitsOnly[0] === '7' || digitsOnly[0] === '8');
}

window.addEventListener('storage', function(e) {
    if (e.key === 'adminData') {
        loadAdminData();
        renderCurrentStep();
    }
});


function nextStep() {
    if (currentStep < totalSteps) {
        if (validateCurrentStep()) {
            currentStep++;
            updateStepDisplay();
            renderCurrentStep();
            updateNavigationButtons();
        }
    } else if (currentStep === totalSteps) {
        // Заменяем submitRequest() на submitForm()
        if (validateContactForm()) {
            submitForm();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
        renderCurrentStep();
        updateNavigationButtons(); 
    }
}


function validateCurrentStep() {
    switch(currentStep) {
        case 1:
            const areaInput = document.getElementById('areaInput');
            const areaValue = areaInput ? parseFloat(areaInput.value) : 0;
            
            if (!selections.houseType) {
                showNotification('Пожалуйста, выберите тип дома', 'error');
                return false;
            }
            if (!areaValue || areaValue <= 0) {
                showNotification('Пожалуйста, укажите корректную площадь дома', 'error');
                return false;
            }
            selections.area = areaValue;
            break;
        case 2:
            if (!selections.floor) {
                showNotification('Пожалуйста, выберите этажность', 'error');
                return false;
            }
            break;
        case 3:
            if (!selections.roof) {
                showNotification('Пожалуйста, выберите тип крыши', 'error');
                return false;
            }
            break;
        case 4:
            if (!selections.material) {
                showNotification('Пожалуйста, выберите материал', 'error');
                return false;
            }
            break;
        case 5:
            if (!selections.foundation) {
                showNotification('Пожалуйста, выберите тип фундамента', 'error');
                return false;
            }
            break;
        case 6:
            if (!selections.facade) {
                showNotification('Пожалуйста, выберите технологию фасада', 'error');
                return false;
            }
            break;
        case 7:
            if (!selections.electrical) {
                showNotification('Пожалуйста, выберите вариант электрики', 'error'  );
                return false;
            }
            break;
        case 8:
            if (!selections.wallFinish) {
                showNotification('Пожалуйста, выберите отделку стен', 'error');
                return false;
            }
            break;
        case 9:
            
            return true;
        case 10:
            return validateContactForm();
    }
    return true;
}

function validateContactForm() {
    const name = document.getElementById('contactName')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const comment = document.getElementById('contactComment')?.value.trim();

    // Валидация имени
    if (!name) {
        showNotification('Пожалуйста, введите ваше имя', 'error');
        return false;
    }
    if (name.length < 2) {
        showNotification('Имя должно содержать минимум 2 символа', 'error');
        return false;
    }
    if (!/^[а-яёА-ЯЁa-zA-Z\s-]+$/.test(name)) {
        showNotification('Имя может содержать только буквы, пробелы и дефис', 'error');
        return false;
    }

    // Валидация телефона
    if (!phone) {
        showNotification('Пожалуйста, введите номер телефона', 'error');
        return false;
    }
    // Формат: +7(XXX)XXX-XX-XX или 8XXXXXXXXXX
    const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!phoneRegex.test(phone)) {
        showNotification('Пожалуйста, введите корректный номер телефона в формате +7(XXX)XXX-XX-XX или 8XXXXXXXXXX', 'error');
        return false;
    }

    // Валидация email
    if (!email) {
        showNotification('Пожалуйста, введите email', 'error');
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        showNotification('Пожалуйста, введите корректный email адрес', 'error');
        return false;
    }

    // Валидация комментария (необязательное поле)
    if (comment && comment.length > 1000) {
        showNotification('Комментарий не должен превышать 1000 символов', 'error');
        return false;
    }

    // Если все проверки пройдены, сохраняем данные
    selections.contact = {
        name,
        phone,
        email,
        comment
    };

    return true;
}


function updateStepDisplay() {
    console.log('Updating step display. Current step:', currentStep); 

    
    document.querySelectorAll('.step-content').forEach(step => {
        step.classList.remove('active');
    });

    
    const currentStepElement = document.getElementById(`step${currentStep}`);
    console.log('Current step element:', currentStepElement); 

    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }

    
    document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
        if (index + 1 < currentStep) {
            indicator.classList.add('completed');
            indicator.classList.remove('active');
        } else if (index + 1 === currentStep) {
            indicator.classList.add('active');
            indicator.classList.remove('completed');
        } else {
            indicator.classList.remove('active', 'completed');
        }
    });

    
    renderCurrentStep();
}


function renderCurrentStep() {
    switch(currentStep) {
        case 1:
            renderHouseTypes();
            
            const areaInput = document.getElementById('areaInput');
            if (areaInput) {
                areaInput.value = selections.area || '';
                areaInput.addEventListener('input', function() {
                    selections.area = parseFloat(this.value) || 0;
                    calculateTotal();
                });
            }
            break;
        case 2: 
            renderFloors();
            break;
        case 3: 
            renderRoofs();
            break;
        case 4:
            renderMaterials();
            break;
        case 5:
            console.log('Rendering foundations step'); 
            console.log('adminData:', adminData); 
            renderFoundations();
            break;
        case 6:
            renderFacades();
            break;
        case 7:
            renderElectrical();
            break;
        case 8:
            renderWallFinishes();
            break;
        case 9:
            renderAdditions();
            break;
        case 10:
            renderSummary();
            break;
    }
    updateTotalPrice();
}



function renderHouseTypes() {
    const container = document.getElementById('houseTypesContainer');
    if (!container) return;

    console.log('Current adminData.houseTypes:', adminData.houseTypes); 

    container.innerHTML = adminData.houseTypes.map(house => {
        
        const price = house.price || house.basePrice || 0;
        console.log(`House ${house.id} price:`, price); 
        
        return `
            <div class="option-card ${selections.houseType === house.id ? 'selected' : ''}" 
                 data-id="${house.id}"
                 onclick="selectHouseType(${house.id})">
                ${house.image ? 
                    `<img src="${house.image}" alt="${house.name}" class="option-image">` : 
                    '<div class="no-image">Нет изображения</div>'
                }
                <div class="option-info">
                    <h3>${house.name}</h3>
                    ${house.description ? `<p>${house.description}</p>` : ''}
                    <p class="price-info">Базовая цена: ${new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }).format(price)} за м²</p>
                </div>
            </div>
        `;
    }).join('');
}

function renderAreaStep() {
    const container = document.getElementById('areaContainer');
    console.log('Area container:', container); 

    if (!container) {
        console.error('Area container not found!');
        return;
    }

    container.innerHTML = `
        <div class="area-input-container">
            <label for="areaInput">Введите площадь дома (м²):</label>
            <input type="number" 
                   id="areaInput" 
                   min="1" 
                   step="1"
                   value="${selections.area || ''}" 
                   class="form-input"
                   required>
            <p class="help-text">Минимальная площадь: 1 м²</p>
        </div>
    `;

    const input = document.getElementById('areaInput');
    console.log('Area input:', input); 

    if (input) {
        input.addEventListener('input', function(e) {
            const value = parseFloat(e.target.value);
            console.log('Input value:', value); 
            
            if (!isNaN(value) && value > 0) {
                selections.area = value;
                console.log('Area saved:', selections.area); 
                updateTotalPrice();
            }
        });
    }
}

function renderFloors() {
    const container = document.getElementById('floorsContainer');
    if (!container) return;

    container.innerHTML = '';
    
    if (!adminData.floors || !Array.isArray(adminData.floors)) {
        console.error('Floors data is not available or not an array');
        return;
    }

    adminData.floors.forEach(floor => {
        const card = document.createElement('div');
        card.className = `option-card${selections.floor === floor.id ? ' selected' : ''}`;
        
        
        const imageHtml = floor.image ? 
            `<img src="${floor.image}" alt="${floor.name}" class="option-image">` : 
            '<div class="no-image">Нет изображения</div>';

        card.innerHTML = `
            ${imageHtml}
            <div class="option-info">
                <h3>${floor.name}</h3>
                ${floor.description ? `<p>${floor.description}</p>` : ''}
                <p class="multiplier-info">Коэффициент: ${floor.multiplier}x</p>
            </div>
        `;

        card.addEventListener('click', () => selectFloor(floor.id));
        container.appendChild(card);
    });
}

function renderRoofs() {
    const container = document.getElementById('roofsContainer');
    if (!container) return;

    container.innerHTML = adminData.roofs.map(roof => `
        <div class="option-card ${selections.roof === roof.id ? 'selected' : ''}"
             onclick="selectRoof(${roof.id})">
            ${roof.image ? `<img src="${roof.image}" alt="${roof.name}">` : ''}
            <h3>${roof.name}</h3>
            <p>Стоимость: ${roof.price.toLocaleString()} ₽</p>
            ${roof.description ? `<p class="description">${roof.description}</p>` : ''}
        </div>
    `).join('');
}

function renderMaterials() {
    const container = document.getElementById('materialsContainer');
    if (!container) return;

    container.innerHTML = adminData.materials.map(material => `
        <div class="option-card ${selections.material === material.id ? 'selected' : ''}"
             onclick="selectMaterial(${material.id})">
            ${material.image ? `<img src="${material.image}" alt="${material.name}">` : ''}
            <h3>${material.name}</h3>
            <p>Стоимость: ${material.price.toLocaleString()} ₽/м²</p>
            ${material.description ? `<p class="description">${material.description}</p>` : ''}
        </div>
    `).join('');
}

function renderFoundations() {
    console.log('Starting renderFoundations'); 
    
    const container = document.getElementById('foundationsContainer');
    console.log('Container:', container); 
    
    if (!container) {
        console.error('Foundations container not found');
        return;
    }

    if (!adminData.foundations || !Array.isArray(adminData.foundations)) {
        console.error('Foundations data is invalid:', adminData.foundations);
        return;
    }

    console.log('Foundations data:', adminData.foundations); 

    const html = adminData.foundations.map(foundation => `
        <div class="option-card ${selections.foundation === foundation.id ? 'selected' : ''}"
             onclick="selectFoundation(${foundation.id})">
            <div class="option-image">
                <img src="${foundation.image || 'img/image_placeholder.png'}" 
                     alt="${foundation.name}"
                     onerror="this.src='img/image_placeholder.png'">
            </div>
            <div class="option-info">
                <h3>${foundation.name}</h3>
                <p class="price">Стоимость: ${foundation.price.toLocaleString()} ₽/м²</p>
                <p class="description">${foundation.description || ''}</p>
            </div>
        </div>
    `).join('');

    console.log('Generated HTML:', html); 
    container.innerHTML = html;
}

function renderFacades() {
    const container = document.getElementById('facadesContainer');
    if (!container) return;

    container.innerHTML = adminData.facades.map(facade => `
        <div class="option-card ${selections.facade === facade.id ? 'selected' : ''}"
             onclick="selectFacade(${facade.id})">
            ${facade.image ? `<img src="${facade.image}" alt="${facade.name}">` : ''}
            <h3>${facade.name}</h3>
            <p>Стоимость: ${facade.price.toLocaleString()} ₽/м²</p>
            ${facade.description ? `<p class="description">${facade.description}</p>` : ''}
        </div>
    `).join('');
}

function renderElectrical() {
    const container = document.getElementById('electricalContainer');
    if (!container) return;

    container.innerHTML = adminData.electrical.map(item => `
        <div class="option-card ${selections.electrical === item.id ? 'selected' : ''}"
             onclick="selectElectrical(${item.id})">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
            <h3>${item.name}</h3>
            <p>Стоимость: ${item.price.toLocaleString()} ₽/точка</p>
            ${item.description ? `<p class="description">${item.description}</p>` : ''}
        </div>
    `).join('');
}

function renderWallFinishes() {
    const container = document.getElementById('wallFinishesContainer');
    if (!container) return;

    container.innerHTML = adminData.wallFinishes.map(finish => `
        <div class="option-card ${selections.wallFinish === finish.id ? 'selected' : ''}"
             onclick="selectWallFinish(${finish.id})">
            ${finish.image ? `<img src="${finish.image}" alt="${finish.name}">` : ''}
            <h3>${finish.name}</h3>
            <p>Стоимость: ${finish.price.toLocaleString()} ₽/м²</p>
            ${finish.description ? `<p class="description">${finish.description}</p>` : ''}
        </div>
    `).join('');
}

function renderAdditions() {
    const container = document.getElementById('additionsContainer');
    if (!container) return;

    container.innerHTML = adminData.additions.map(addition => `
        <div class="option-card ${selections.additions.includes(addition.id) ? 'selected' : ''}"
             onclick="toggleAddition(${addition.id})">
            ${addition.image ? `<img src="${addition.image}" alt="${addition.name}">` : ''}
            <h3>${addition.name}</h3>
            <p>Стоимость: ${addition.price.toLocaleString()} ₽ ${addition.perMeter ? '/м²' : ''}</p>
            ${addition.description ? `<p class="description">${addition.description}</p>` : ''}
        </div>
    `).join('');
}


function renderSummary() {
    
    document.getElementById('summaryHouseType').textContent = getSelectedName(adminData.houseTypes, selections.houseType);
    document.getElementById('summaryArea').textContent = selections.area ? `${selections.area} м²` : '-';
    document.getElementById('summaryFloors').textContent = getSelectedName(adminData.floors, selections.floor);
    document.getElementById('summaryRoof').textContent = getSelectedName(adminData.roofs, selections.roof);
    document.getElementById('summaryMaterial').textContent = getSelectedName(adminData.materials, selections.material);
    document.getElementById('summaryFoundation').textContent = getSelectedName(adminData.foundations, selections.foundation);
    document.getElementById('summaryFacade').textContent = getSelectedName(adminData.facades, selections.facade);
    document.getElementById('summaryElectrical').textContent = getSelectedName(adminData.electrical, selections.electrical);
    document.getElementById('summaryWallFinish').textContent = getSelectedName(adminData.wallFinishes, selections.wallFinish);
    
    
    const additionsText = selections.additions.length > 0 
        ? selections.additions.map(id => getSelectedName(adminData.additions, id)).join(', ')
        : '-';
    document.getElementById('summaryAdditions').textContent = additionsText;

    
    updatePriceDisplay(currentTotalPrice);
}


function selectHouseType(id) {
    console.log('Selecting house type with ID:', id); 
    
    
    const houseId = parseInt(id);
    
    
    const selectedHouse = adminData.houseTypes.find(house => house.id === houseId);
    if (!selectedHouse) {
        console.error('House type not found:', houseId);
        return;
    }

    
    selections.houseType = houseId;

    
    const cards = document.querySelectorAll('#houseTypesContainer .option-card');
    cards.forEach(card => {
        if (parseInt(card.getAttribute('data-id')) === houseId) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    
    calculateTotal();
}
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    
    if (prevBtn) {
        if (currentStep === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
    }

    
    if (nextBtn) {
        if (currentStep === totalSteps) {
            nextBtn.textContent = 'Отправить';
            nextBtn.classList.add('submit-btn'); 
        } else {
            nextBtn.textContent = 'Далее';
            nextBtn.classList.remove('submit-btn');
        }
    }

    
    document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
        if (index + 1 === currentStep) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
function initializeCalculator() {
    loadAdminData();
    setDefaultValues();
    
    const areaInput = document.getElementById('areaInput');
    if (areaInput) {
        areaInput.addEventListener('input', calculateTotal);
    }

    renderCurrentStep();
    updateStepDisplay();
    updateNavigationButtons();
}

function selectFloor(id) {
    selections.floor = id;
    renderFloors();
    updateTotalPrice();
}

function selectRoof(id) {
    selections.roof = id;
    renderRoofs();
    updateTotalPrice();
}

function selectMaterial(id) {
    selections.material = id;
    renderMaterials();
    updateTotalPrice();
}

function selectFoundation(id) {
    console.log('Selecting foundation:', id); 
    selections.foundation = id;
    renderFoundations();
    updateTotalPrice();
}

function selectFacade(id) {
    selections.facade = id;
    renderFacades();
    updateTotalPrice();
}

function selectElectrical(id) {
    selections.electrical = id;
    renderElectrical();
    updateTotalPrice();
}

function selectWallFinish(id) {
    selections.wallFinish = id;
    renderWallFinishes();
    updateTotalPrice();
}

function toggleAddition(id) {
    const index = selections.additions.indexOf(id);
    if (index === -1) {
        selections.additions.push(id);
    } else {
        selections.additions.splice(index, 1);
    }
    renderAdditions();
    updateTotalPrice();
}




function updateTotalPrice() {
    calculateTotal();
    if (currentStep === totalSteps) {
        renderSummary();
    }
}


function submitForm() {
    const request = {
        id: Date.now(),
        date: new Date().toISOString(),
        status: 'new',
        type: 'calculator',
        name: document.getElementById('contactName').value.trim(),
        phone: document.getElementById('contactPhone').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        comment: document.getElementById('contactComment')?.value.trim() || '',
        selections: {
            houseType: getSelectedName(adminData.houseTypes, selections.houseType),
            area: selections.area,
            floor: getSelectedName(adminData.floors, selections.floor),
            roof: getSelectedName(adminData.roofs, selections.roof),
            material: getSelectedName(adminData.materials, selections.material),
            foundation: getSelectedName(adminData.foundations, selections.foundation),
            facade: getSelectedName(adminData.facades, selections.facade),
            electrical: getSelectedName(adminData.electrical, selections.electrical),
            wallFinish: getSelectedName(adminData.wallFinishes, selections.wallFinish),
            additions: selections.additions.map(id => 
                getSelectedName(adminData.additions, id)
            )
        },
        totalPrice: currentTotalPrice
    };

    try {
        // Получаем существующие данные
        let adminData = JSON.parse(localStorage.getItem('adminData') || '{"requests":[]}');
        if (!adminData.requests) adminData.requests = [];
        
        // Добавляем новый запрос
        adminData.requests.push(request);
        
        // Сохраняем обновленные данные
        localStorage.setItem('adminData', JSON.stringify(adminData));

        showNotification('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        
        // Сбрасываем калькулятор
        setTimeout(() => {
            resetCalculator();
            window.location.href = 'calc.html'; // Перенаправляем на главную страницу
        }, 2000);
    } catch (error) {
        console.error('Error saving request:', error);
        showNotification('Произошла ошибка при сохранении заявки. Пожалуйста, попробуйте еще раз.', 'error');
    }
}

function resetCalculator() {
    currentStep = 1;
    selections = {
        houseType: null,
        area: null,
        floor: null,
        roof: null,
        material: null,
        foundation: null,
        facade: null,
        electrical: null,
        wallFinish: null,
        additions: [],
        contact: {
            name: '',
            phone: '',
            email: '',
            comment: ''
        }
    };
    
    updateStepDisplay();
    renderCurrentStep();
    updateNavigationButtons();
}


function setArea(value) {
    console.log('Setting area:', value); 
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
        selections.area = numValue;
        updateTotalPrice();
        console.log('Area set to:', selections.area); 
    }
}


let selectedHouseType = null;
let selectedFloor = null;
let selectedRoof = null;
let selectedMaterial = null;
let selectedFoundation = null;
let selectedFacade = null;
let selectedElectrical = null;
let selectedWallFinish = null;
let selectedAdditions = [];
let currentHousePrice = 0;
let currentArea = 0;

function calculateTotal() {
    try {
        
        const areaInput = document.getElementById('areaInput');
        const areaValue = areaInput ? parseFloat(areaInput.value) : 0;

        if (!areaValue || isNaN(areaValue)) {
            console.log('Invalid area value:', areaValue);
            updatePriceDisplay(0);
            return;
        }

        
        let totalPrice = 0;

        
        if (selections.houseType && adminData.houseTypes) {
            const houseType = adminData.houseTypes.find(h => h.id === selections.houseType);
            if (houseType) {
                totalPrice = houseType.price * areaValue;
            }
        }

        
        if (selections.floor && adminData.floors) {
            const floor = adminData.floors.find(f => f.id === selections.floor);
            if (floor && floor.multiplier) {
                totalPrice *= floor.multiplier;
            }
        }

        
        if (selections.roof && adminData.roofs) {
            const roof = adminData.roofs.find(r => r.id === selections.roof);
            if (roof) {
                totalPrice += roof.price;
            }
        }

        
        if (selections.material && adminData.materials) {
            const material = adminData.materials.find(m => m.id === selections.material);
            if (material) {
                totalPrice += material.price * areaValue;
            }
        }

        
        if (selections.foundation && adminData.foundations) {
            const foundation = adminData.foundations.find(f => f.id === selections.foundation);
            if (foundation) {
                totalPrice += foundation.price * areaValue;
            }
        }

        
        if (selections.facade && adminData.facades) {
            const facade = adminData.facades.find(f => f.id === selections.facade);
            if (facade) {
                totalPrice += facade.price * areaValue;
            }
        }

        
        if (selections.electrical && adminData.electrical) {
            const electrical = adminData.electrical.find(e => e.id === selections.electrical);
            if (electrical) {
                
                const pointsPerSquareMeter = 0.5; 
                const totalPoints = Math.ceil(areaValue * pointsPerSquareMeter);
                totalPrice += electrical.price * totalPoints;
            }
        }

        
        if (selections.wallFinish && adminData.wallFinishes) {
            const wallFinish = adminData.wallFinishes.find(w => w.id === selections.wallFinish);
            if (wallFinish) {
                
                const wallHeight = 2.7; 
                const perimeter = Math.ceil(Math.sqrt(areaValue) * 4);
                const floors = selections.floor ? 
                    adminData.floors.find(f => f.id === selections.floor)?.value || 1 : 1;
                const wallArea = perimeter * wallHeight * floors;
                totalPrice += wallFinish.price * wallArea;
            }
        }

        
        if (selections.additions && adminData.additions) {
            selections.additions.forEach(additionId => {
                const addition = adminData.additions.find(a => a.id === additionId);
                if (addition) {
                    totalPrice += addition.perMeter ? 
                        addition.price * areaValue : addition.price;
                }
            });
        }

        
        totalPrice = Math.round(totalPrice);
        
        console.log('Final total price:', totalPrice);
        currentTotalPrice = totalPrice;
        updatePriceDisplay(totalPrice);

    } catch (error) {
        console.error('Error calculating total price:', error);
        updatePriceDisplay(0);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const areaInput = document.getElementById('areaInput');
    if (areaInput) {
        areaInput.addEventListener('input', calculateTotal);
    }
});

function updateAreaDisplay() {
    const areaDisplay = document.getElementById('area_params');
    
    if (areaDisplay) {
        areaDisplay.textContent = `Площадь дома: ${currentArea.toFixed(1)} м²`;
    }
}
function updateAreaDisplay() {
    const areaDisplay = document.getElementById('area_params');
    const perimeterDisplay = document.getElementById('perimetr_params');
    
    if (areaDisplay) {
        areaDisplay.textContent = `Площадь дома: ${currentArea.toFixed(1)} м²`;
    }
    
    if (perimeterDisplay) {
        const width = parseFloat(document.getElementById('width')?.value) || 0;
        const length = parseFloat(document.getElementById('length')?.value) || 0;
        const perimeter = 2 * (width + length);
        perimeterDisplay.textContent = `Периметр дома: ${perimeter.toFixed(1)} м`;
    }
}


document.getElementById('width')?.addEventListener('input', calculateTotal);
document.getElementById('length')?.addEventListener('input', calculateTotal);



function submitRequest() {
    
    selections.contact = {
        name: document.getElementById('contactName').value,
        phone: document.getElementById('contactPhone').value,
        email: document.getElementById('contactEmail').value,
        comment: document.getElementById('contactComment').value
    };

    if (!validateContactForm()) return;

    
    const request = {
        id: Date.now(),
        date: new Date().toISOString(),
        status: 'new',
        type: 'calculator', 
        name: selections.contact.name,
        phone: selections.contact.phone,
        email: selections.contact.email,
        comment: selections.contact.comment,
        
        selections: {
            houseType: getSelectedName(adminData.houseTypes, selections.houseType),
            area: selections.area,
            floor: getSelectedName(adminData.floors, selections.floor),
            roof: getSelectedName(adminData.roofs, selections.roof),
            material: getSelectedName(adminData.materials, selections.material),
            foundation: getSelectedName(adminData.foundations, selections.foundation),
            facade: getSelectedName(adminData.facades, selections.facade),
            electrical: getSelectedName(adminData.electrical, selections.electrical),
            wallFinish: getSelectedName(adminData.wallFinishes, selections.wallFinish),
            additions: selections.additions.map(id => 
                getSelectedName(adminData.additions, id)
            )
        },
    };

    console.log('Sending request:', request); 

    try {
        
        const savedData = JSON.parse(localStorage.getItem('adminData') || '{}');
        if (!savedData.requests) savedData.requests = [];
        
        
        savedData.requests.push(request);
        
        
        localStorage.setItem('adminData', JSON.stringify(savedData));

        showNotification('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        resetCalculator();
    } catch (error) {
        console.error('Error saving request:', error);
        showNotification('Произошла ошибка при сохранении заявки. Пожалуйста, попробуйте еще раз.', 'error');
    }
}

function showNotification(message, type = 'error') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    
    if (notification && notificationMessage) {
        notification.className = `notification ${type}`;
        notificationMessage.textContent = message;
        notification.classList.remove('hidden');
        
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 5000);
    }
}

function getSelectedName(array, id) {
    if (!array || !id) return '-';
    const item = Array.isArray(array) ? array.find(i => i.id === id) : null;
    return item ? item.name : '-';
}

function updatePriceDisplay(price) {
    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);

    const priceElements = [
        document.getElementById('totalPrice'),
        document.getElementById('summaryPrice')
    ];

    priceElements.forEach(element => {
        if (element) {
            element.textContent = formattedPrice;
        }
    });
} 