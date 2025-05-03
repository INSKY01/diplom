let adminData = {};

const defaultAdminData = {
    houseTypes: [
        {
            id: 1,
            name: "Каркасный дом",
            description: "Современный деревянный каркасный дом с отличной теплоизоляцией",
            price: 25000,
            image: "img/carc-house.png"
        },
        {
            id: 2,
            name: "Дом из бруса",
            description: "Классический дом из строганного бруса",
            price: 30000,
            image: "img/brus-house.png"
        },
        {
            id: 3,
            name: "Дом из бревна",
            description: "Традиционный дом из оцилиндрованного бревна",
            price: 35000,
            image: "img/brev-house.jpg"
        },
        {
            id: 4,
            name: "Дом из лафета",
            description: "Премиальный дом из лафета ручной рубки",
            price: 40000,
            image: "img/lafet-house.jpg"
        }
    ],
    floors: [
        { 
            id: 1, 
            name: 'Одноэтажный', 
            value: 1, 
            multiplier: 1,
            image: 'img/1floor.jpg',
            description: 'Одноэтажный дом - классическое решение для небольшой семьи'
        },
        { 
            id: 2, 
            name: 'Двухэтажный', 
            value: 2, 
            multiplier: 1.8,
            image: 'img/2floor.jpg',
            description: 'Двухэтажный дом - оптимальное использование земельного участка'
        },
        {
            id: 3,
            name: "Одноэтажный с мансардой",
            value: 3, 
            multiplier: 1.3,
            image: "img/3floor.jpg",
            description: 'Компактный дом с жилой мансардой - экономичный и функциональный вариант'
        },
        {
            id: 4,
            name: "Двухэтажный с цоколем",
            value: 4, 
            multiplier: 2.1,
            image: "img/4floor.jpg",
            description: 'Двухэтажный дом с цокольным этажом - подходит для любых грунтов'
        }
    ],
    roofs: [
        {
            id: 1,
            name: "Двускатная",
            description: "Классическая двускатная крыша",
            price: 280000,  
            image: "img/1roof.jpg"
        },
        {
            id: 2,
            name: "Четырехскатная",
            description: "Традиционная четырехскатная крыша",
            price: 350000,  
            image: "img/2roof.jpg"
        },
        {
            id: 3,
            name: "Мансардная",
            description: "Крыша с жилой мансардой",
            price: 420000,  
            image: "img/3roof.jpg"
        },
        {
            id: 4,
            name: "Многощипцовая",
            description: "Сложная многощипцовая крыша",
            price: 520000,  
            image: "img/4roof.jpg"
        }
    ],
    materials: [
        {
            id: 1,
            name: "Профилированный брус",
            description: "Сухой профилированный брус 145х145",
            price: 28000,   
            image: "img/prof-brus.png"
        },
        {
            id: 2,
            name: "Клееный брус",
            description: "Премиальный клееный брус 200х200",
            price: 42000,   
            image: "img/kleenyj-brus.jpg"
        },
        {
            id: 3,
            name: "Оцилиндрованное бревно",
            description: "Оцилиндрованное бревно диаметром 240мм",
            price: 32000,   
            image: "img/ocil-brus.jpg"
        },
        {
            id: 4,
            name: "Лафет",
            description: "Лафет ручной рубки 240х240",
            price: 45000,   
            image: "img/lafet-brus.png"
        }
    ],
    foundations: [
        {
            id: 1,
            name: "Ленточный",
            description: "Классический ленточный фундамент",
            price: 12000,   
            image: "img/fund1.jpg"
        },
        {
            id: 2,
            name: "Свайно-винтовой",
            description: "Современный свайно-винтовой фундамент",
            price: 8000,    
            image: "img/fund2.jpg"
        },
        {
            id: 3,
            name: "Свайно-ростверковый",
            description: "Надежный свайно-ростверковый фундамент",
            price: 15000,   
            image: "img/fund3.jpg"
        },
        {
            id: 4,
            name: "Монолитная плита",
            description: "Усиленная монолитная плита",
            price: 18000,   
            image: "img/fund4.jpeg"
        }
    ],
    facades: [
        {
            id: 1,
            name: "Натуральное дерево",
            description: "Фасад из натурального дерева с защитной пропиткой",
            price: 3500,    
            image: "img/fas1.png"
        },
        {
            id: 2,
            name: "Имитация бруса",
            description: "Фасад из имитации бруса с покраской",
            price: 2800,    
            image: "img/fas2.jpg"
        },
        {
            id: 3,
            name: "Блок-хаус",
            description: "Фасад из блок-хауса под бревно",
            price: 3200,    
            image: "img/fas3.jpg"
        },
        {
            id: 4,
            name: "Планкен",
            description: "Современный фасад из планкена",
            price: 4500,    
            image: "img/fas4.jpg"
        }
    ],
    electrical: [
        {
            id: 1,
            name: "Базовый",
            description: "Базовая электрика для небольшого дома",
            price: 1200,    
            sockets: 10,
            switches: 5,
            lights: 8,
            image: "img/elec1.jpg"
        },
        {
            id: 2,
            name: "Стандарт",
            description: "Стандартный пакет электрики",
            price: 1800,    
            sockets: 15,
            switches: 8,
            lights: 12,
            image: "img/elec2.jpg"
        },
        {
            id: 3,
            name: "Комфорт",
            description: "Расширенный пакет электрики",
            price: 2500,    
            sockets: 20,
            switches: 12,
            lights: 16,
            image: "img/elec3.jpg"
        },
        {
            id: 4,
            name: "Премиум",
            description: "Премиальный пакет с системой умный дом",
            price: 3500,    
            sockets: 25,
            switches: 15,
            lights: 20,
            image: "img/elec4.jpg"
        }
    ],
    wallFinishes: [
        {
            id: 1,
            name: "Шлифовка",
            description: "Шлифовка стен с защитной пропиткой",
            price: 800,     
            image: "img/wall1.jpg"
        },
        {
            id: 2,
            name: "Покраска",
            description: "Шлифовка и покраска стен",
            price: 1200,    
            image: "img/wall2.jpg"
        },
        {
            id: 3,
            name: "Вагонка",
            description: "Отделка стен вагонкой",
            price: 2200,    
            image: "img/wall3.jpg"
        },
        {
            id: 4,
            name: "Имитация бруса",
            description: "Отделка стен имитацией бруса",
            price: 2500,    
            image: "img/wall4.jpg"
        }
    ],
    additions: [
        {
            id: 1,
            name: "Терраса",
            description: "Открытая терраса из дерева",
            price: 15000,
            category: "design",
            image: "img/add1.jpg"
        },
        {
            id: 2,
            name: "Крыльцо",
            description: "Деревянное крыльцо с навесом",
            price: 8000,
            category: "design",
            image: "img/add2.jpg"
        },
        {
            id: 3,
            name: "Балкон",
            description: "Деревянный балкон с резными элементами",
            price: 12000,
            category: "design",
            image: "img/add3.jpg"
        },
        {
            id: 4,
            name: "Веранда",
            description: "Закрытая веранда с панорамными окнами",
            price: 20000,
            category: "design",
            image: "img/add4.jpg"
        }
    ],
    requests: []
};

function initializeAdminData() {
    if (!localStorage.getItem('adminData')) {
        localStorage.setItem('adminData', JSON.stringify(defaultAdminData));
    }
}



function loadAdminData() {
    try {
        const savedData = localStorage.getItem('adminData');
        if (savedData) {
            adminData = JSON.parse(savedData);
            
            renderAllSections();
        }
    } catch (error) {
        console.error('Error loading admin data:', error);
    }
}

function saveData() {
    try {
        localStorage.setItem('adminData', JSON.stringify(adminData));
        
        renderAllSections();
    } catch (error) {
        console.error('Error saving data:', error);
        showNotification('Ошибка при сохранении данных', 'error');
    }
}
function showAddRequestForm() {
    const html = `
        <div class="form-group">
            <label>Имя:</label>
            <input type="text" id="requestName" class="form-input">
        </div>
        <div class="form-group">
            <label>Телефон:</label>
            <input type="text" id="requestPhone" class="form-input">
        </div>
        <div class="form-group">
            <label>Email:</label>
            <input type="email" id="requestEmail" class="form-input">
        </div>
        <div class="form-group">
            <label>Комментарий:</label>
            <textarea id="requestComment" class="form-input"></textarea>
        </div>
    `;

    showModal('Добавить заявку', html, () => {
        const name = document.getElementById('requestName').value;
        const phone = document.getElementById('requestPhone').value;
        const email = document.getElementById('requestEmail').value;
        const comment = document.getElementById('requestComment').value;

        if (name && phone && email) {
            const newRequest = {
                id: Date.now(),
                date: new Date().toISOString(),
                status: 'new',
                name,
                phone,
                email,
                comment,
                selections: {},
                totalPrice: 0
            };
            adminData.requests.push(newRequest);
            saveData();
            renderRequests();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });
}

function showTab(tabName) {

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });


    const selectedTab = document.getElementById(`${tabName}Tab`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }


    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    renderAllSections();
}


function handleLogin(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const loginPage = document.getElementById('loginPage');
    const adminLayout = document.querySelector('.admin-layout');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    if (password === 'Respons1') { 
        localStorage.setItem('adminAuthenticated', 'true');
        
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
        loginPage.style.display = 'none';
        adminLayout.style.display = 'flex';
        
        loadAdminData();
        renderAllSections();
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

function checkAuth() {
    const loginPage = document.getElementById('loginPage');
    const adminLayout = document.querySelector('.admin-layout');
    
    if (!loginPage || !adminLayout) {
        console.error('Не найдены необходимые элементы для авторизации');
        return;
    }

    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    
    if (isAuthenticated) {
        loginPage.style.display = 'none';
        adminLayout.style.display = 'flex';
        loadAdminData();
        renderAllSections();
    } else {
        loginPage.style.display = 'flex';
        adminLayout.style.display = 'none';
    }
}
function logout() {
    localStorage.removeItem('adminAuthenticated');
    const loginPage = document.getElementById('loginPage');
    const adminLayout = document.querySelector('.admin-layout');
    
    if (loginPage && adminLayout) {
        loginPage.style.display = 'flex';
        adminLayout.style.display = 'none';
    }
    
    
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.value = '';
    }
}


function showModal(title, content, onSave) {
    
    let modal = document.getElementById('adminModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'adminModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <span class="close-modal" onclick="closeModal()">&times;</span>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal()">Отмена</button>
                <button class="btn btn-primary" onclick="handleModalSave()">Сохранить</button>
            </div>
        </div>
    `;

    
    modal.onSave = onSave;

    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function handleModalSave() {
    const modal = document.getElementById('adminModal');
    if (modal && modal.onSave) {
        modal.onSave();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('adminModal');
    if (event.target === modal) {
        closeModal();
    }
}


function addImagePreview(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    if (input && preview) {
        input.addEventListener('input', function() {
            const imageUrl = this.value;
            if (imageUrl) {
                preview.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
            } else {
                preview.innerHTML = '';
            }
        });
    }
}


function renderAllSections() {
    const currentTab = document.querySelector('.tab-content.active')?.id;
    
    switch(currentTab?.replace('Tab', '')) {
        case 'houseTypes':
            renderHouseTypes();
            break;
        case 'floors':
            renderFloorsAdmin();
            break;
        case 'roofs':
            renderRoofs();
            break;
        case 'materials':
            renderMaterials();
            break;
        case 'foundations':
            renderFoundations();
            break;
        case 'facades':
            renderFacades();
            break;
        case 'electrical':
            renderElectrical();
            break;
        case 'wallFinishes':
            renderWallFinishes();
            break;
        case 'additions':
            renderAdditions();
            break;
        case 'requests':
            renderRequests();
            break;
    }
}


function renderHouseTypes() {
    const container = document.getElementById('houseTypesContainer');
    if (!container) return;

    
    if (!adminData.houseTypes) {
        adminData.houseTypes = [];
    }

    container.innerHTML = adminData.houseTypes.map(house => {
        
        const formattedPrice = typeof house.price === 'number' ? 
            house.price.toLocaleString() : 
            '0';

        return `
            <div class="card">
                ${house.image ? `
                    <img src="${house.image}" alt="${house.name}" class="card-image">
                ` : ''}
                <div class="card-content">
                    <h3>${house.name || 'Без названия'}</h3>
                    <p>Стоимость: ${formattedPrice} ₽</p>
                    ${house.description ? `<p>${house.description}</p>` : ''}
                    <div class="card-actions">
                        <button onclick="editHouseType(${house.id})" class="btn btn-edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteHouseType(${house.id})" class="btn btn-delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function showAddHouseTypeForm() {
    const html = `
        <div class="form-group">
            <label for="houseTypeName">Название:</label>
            <input type="text" id="houseTypeName" class="form-input" required>
        </div>
        <div class="form-group">
            <label for="houseTypePrice">Стоимость:</label>
            <input type="number" id="houseTypePrice" class="form-input" required>
        </div>
        <div class="form-group">
            <label for="houseTypeImage">URL изображения:</label>
            <input type="text" id="houseTypeImage" class="form-input">
        </div>
        <div class="form-group">
            <label for="houseTypeDescription">Описание:</label>
            <textarea id="houseTypeDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить тип дома', html, () => {
        const name = document.getElementById('houseTypeName')?.value;
        const priceInput = document.getElementById('houseTypePrice')?.value;
        const price = priceInput ? parseFloat(priceInput) : 0;
        const image = document.getElementById('houseTypeImage')?.value || '';
        const description = document.getElementById('houseTypeDescription')?.value || '';

        if (!name || isNaN(price)) {
            showNotification('Заполните корректно обязательные поля: Название и Стоимость', 'error');
            return;
        }

        const newHouseType = {
            id: Date.now(),
            name,
            price,
            image,
            description
        };

        if (!adminData.houseTypes) {
            adminData.houseTypes = [];
        }

        adminData.houseTypes.push(newHouseType);
        saveData();
        renderHouseTypes();
        closeModal();
    });

    addImagePreview('houseTypeImage', 'imagePreview');
}

function editHouseType(id) {
    const house = adminData.houseTypes.find(h => h.id === id);
    if (!house) return;

    const html = `
        <div class="form-group">
            <label for="houseTypeName">Название:</label>
            <input type="text" id="houseTypeName" class="form-input" value="${house.name || ''}" required>
        </div>
        <div class="form-group">
            <label for="houseTypePrice">Стоимость:</label>
            <input type="number" id="houseTypePrice" class="form-input" value="${house.price || 0}" required>
        </div>
        <div class="form-group">
            <label for="houseTypeImage">URL изображения:</label>
            <input type="text" id="houseTypeImage" class="form-input" value="${house.image || ''}">
        </div>
        <div class="form-group">
            <label for="houseTypeDescription">Описание:</label>
            <textarea id="houseTypeDescription" class="form-input">${house.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${house.image ? `<img src="${house.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать тип дома', html, () => {
        const name = document.getElementById('houseTypeName')?.value;
        const priceInput = document.getElementById('houseTypePrice')?.value;
        const price = priceInput ? parseFloat(priceInput) : 0;
        const image = document.getElementById('houseTypeImage')?.value || '';
        const description = document.getElementById('houseTypeDescription')?.value || '';

        if (!name || isNaN(price)) {
            showNotification('Заполните корректно обязательные поля: Название и Стоимость', 'error');
            return;
        }

        const index = adminData.houseTypes.findIndex(h => h.id === id);
        if (index !== -1) {
            adminData.houseTypes[index] = { ...house, name, price, image, description };
            saveData();
            renderHouseTypes();
            closeModal();
        }
    });

    addImagePreview('houseTypeImage', 'imagePreview');
}

function deleteHouseType(id) {
    if (confirm('Вы уверены, что хотите удалить этот тип дома?')) {
        adminData.houseTypes = adminData.houseTypes.filter(h => h.id !== id);
        saveData();
        renderHouseTypes();
    }
}


function renderFloors() {
    const container = document.getElementById('floorsContainer');
    if (!container) return;

    container.innerHTML = adminData.floors.map(floor => `
        <div class="card">
            <div class="card-content">
                <h3>${floor.name}</h3>
                <p>Множитель: ${floor.multiplier}x</p>
                <div class="card-actions">
                    <button onclick="editFloor(${floor.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteFloor(${floor.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddFloorForm(floor = null) {
    const isEdit = !!floor;
    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="floorName" class="form-input" value="${isEdit ? floor.name : ''}">
        </div>
        <div class="form-group">
            <label>Множитель:</label>
            <input type="number" id="floorMultiplier" class="form-input" step="0.1" value="${isEdit ? floor.multiplier : '1.0'}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="floorImage" class="form-input" value="${isEdit ? floor.image || '' : ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="floorDescription" class="form-input">${isEdit ? floor.description || '' : ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${isEdit && floor.image ? `<img src="${floor.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal(isEdit ? 'Редактировать этаж' : 'Добавить этаж', html, () => {
        const name = document.getElementById('floorName').value;
        const multiplier = parseFloat(document.getElementById('floorMultiplier').value);
        const image = document.getElementById('floorImage').value;
        const description = document.getElementById('floorDescription').value;

        if (name && multiplier) {
            const newFloor = {
                id: isEdit ? floor.id : Date.now(),
                name,
                multiplier,
                image,
                description
            };

            if (isEdit) {
                const index = adminData.floors.findIndex(f => f.id === floor.id);
                adminData.floors[index] = newFloor;
            } else {
                adminData.floors.push(newFloor);
            }

            saveData();
            renderFloorsAdmin();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('floorImage', 'imagePreview');
}
function renderFloorsAdmin() {
    const container = document.getElementById('floorsContainer');
    if (!container) return;

    container.innerHTML = adminData.floors.map(floor => `
        <div class="card">
            ${floor.image ? 
                `<img src="${floor.image}" alt="${floor.name}" class="card-image">` : 
                '<div class="no-image">Нет изображения</div>'
            }
            <div class="card-content">
                <h3>${floor.name}</h3>
                <p>Множитель: ${floor.multiplier || 1}x</p>
                ${floor.description ? `<p class="description">${floor.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editFloor(${floor.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteFloor(${floor.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function editFloor(id) {
    const floor = adminData.floors.find(f => f.id === id);
    if (!floor) return;
    showAddFloorForm(floor);
}

function deleteFloor(id) {
    if (confirm('Вы уверены, что хотите удалить этот этаж?')) {
        adminData.floors = adminData.floors.filter(f => f.id !== id);
        saveData();
        renderFloorsAdmin();
    }
}

function renderRoofs() {
    const container = document.getElementById('roofsContainer');
    if (!container) return;

    container.innerHTML = adminData.roofs.map(roof => `
        <div class="card">
            ${roof.image ? `<img src="${roof.image}" alt="${roof.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${roof.name}</h3>
                <p>Стоимость: ${roof.price.toLocaleString()} ₽</p>
                ${roof.description ? `<p>${roof.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editRoof(${roof.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteRoof(${roof.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddRoofForm() {
    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="roofName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость:</label>
            <input type="number" id="roofPrice" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="roofImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="roofDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить крышу', html, () => {
        const name = document.getElementById('roofName').value;
        const price = parseFloat(document.getElementById('roofPrice').value);
        const image = document.getElementById('roofImage').value;
        const description = document.getElementById('roofDescription').value;

        if (name && price) {
            const newRoof = {
                id: Date.now(),
                name,
                price,
                image,
                description
            };
            adminData.roofs.push(newRoof);
            saveData();
            renderRoofs();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('roofImage', 'imagePreview');
}

function editRoof(id) {
    const roof = adminData.roofs.find(r => r.id === id);
    if (!roof) return;

    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="roofName" class="form-input" value="${roof.name}">
        </div>
        <div class="form-group">
            <label>Стоимость:</label>
            <input type="number" id="roofPrice" class="form-input" value="${roof.price}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="roofImage" class="form-input" value="${roof.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="roofDescription" class="form-input">${roof.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${roof.image ? `<img src="${roof.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать крышу', html, () => {
        const name = document.getElementById('roofName').value;
        const price = parseFloat(document.getElementById('roofPrice').value);
        const image = document.getElementById('roofImage').value;
        const description = document.getElementById('roofDescription').value;

        if (name && price) {
            const index = adminData.roofs.findIndex(r => r.id === id);
            adminData.roofs[index] = { ...roof, name, price, image, description };
            saveData();
            renderRoofs();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('roofImage', 'imagePreview');
}

function deleteRoof(id) {
    if (confirm('Вы уверены, что хотите удалить этот тип крыши?')) {
        adminData.roofs = adminData.roofs.filter(r => r.id !== id);
        saveData();
        renderRoofs();
    }
}


function renderMaterials() {
    const container = document.getElementById('materialsContainer');
    if (!container) return;

    container.innerHTML = adminData.materials.map(material => `
        <div class="card">
            ${material.image ? `<img src="${material.image}" alt="${material.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${material.name}</h3>
                <p>Стоимость: ${material.price.toLocaleString()} ₽/м²</p>
                ${material.description ? `<p>${material.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editMaterial(${material.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteMaterial(${material.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddMaterialForm() {
    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="materialName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="materialPrice" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="materialImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="materialDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить материал', html, () => {
        const name = document.getElementById('materialName').value;
        const price = parseFloat(document.getElementById('materialPrice').value);
        const image = document.getElementById('materialImage').value;
        const description = document.getElementById('materialDescription').value;

        if (name && price) {
            const newMaterial = {
                id: Date.now(),
                name,
                price,
                image,
                description
            };
            adminData.materials.push(newMaterial);
            saveData();
            renderMaterials();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('materialImage', 'imagePreview');
}

function editMaterial(id) {
    const material = adminData.materials.find(m => m.id === id);
    if (!material) return;

    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="materialName" class="form-input" value="${material.name}">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="materialPrice" class="form-input" value="${material.price}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="materialImage" class="form-input" value="${material.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="materialDescription" class="form-input">${material.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${material.image ? `<img src="${material.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать материал', html, () => {
        const name = document.getElementById('materialName').value;
        const price = parseFloat(document.getElementById('materialPrice').value);
        const image = document.getElementById('materialImage').value;
        const description = document.getElementById('materialDescription').value;

        if (name && price) {
            const index = adminData.materials.findIndex(m => m.id === id);
            adminData.materials[index] = { ...material, name, price, image, description };
            saveData();
            renderMaterials();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('materialImage', 'imagePreview');
}

function deleteMaterial(id) {
    if (confirm('Вы уверены, что хотите удалить этот материал?')) {
        adminData.materials = adminData.materials.filter(m => m.id !== id);
        saveData();
        renderMaterials();
    }
}


function renderFoundations() {
    const container = document.getElementById('foundationsContainer');
    if (!container) return;

    container.innerHTML = adminData.foundations.map(foundation => `
        <div class="card">
            ${foundation.image ? `<img src="${foundation.image}" alt="${foundation.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${foundation.name}</h3>
                <p>Стоимость: ${foundation.price.toLocaleString()} ₽/м²</p>
                ${foundation.description ? `<p>${foundation.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editFoundation(${foundation.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteFoundation(${foundation.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddFoundationForm() {
    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="foundationName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="foundationPrice" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="foundationImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="foundationDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить фундамент', html, () => {
        const name = document.getElementById('foundationName').value;
        const price = parseFloat(document.getElementById('foundationPrice').value);
        const image = document.getElementById('foundationImage').value;
        const description = document.getElementById('foundationDescription').value;

        if (name && price) {
            const newFoundation = {
                id: Date.now(),
                name,
                price,
                image,
                description
            };
            adminData.foundations.push(newFoundation);
            saveData();
            renderFoundations();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('foundationImage', 'imagePreview');
}

function editFoundation(id) {
    const foundation = adminData.foundations.find(f => f.id === id);
    if (!foundation) return;

    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="foundationName" class="form-input" value="${foundation.name}">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="foundationPrice" class="form-input" value="${foundation.price}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="foundationImage" class="form-input" value="${foundation.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="foundationDescription" class="form-input">${foundation.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${foundation.image ? `<img src="${foundation.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать фундамент', html, () => {
        const name = document.getElementById('foundationName').value;
        const price = parseFloat(document.getElementById('foundationPrice').value);
        const image = document.getElementById('foundationImage').value;
        const description = document.getElementById('foundationDescription').value;

        if (name && price) {
            const index = adminData.foundations.findIndex(f => f.id === id);
            adminData.foundations[index] = { ...foundation, name, price, image, description };
            saveData();
            renderFoundations();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('foundationImage', 'imagePreview');
}

function deleteFoundation(id) {
    if (confirm('Вы уверены, что хотите удалить этот фундамент?')) {
        adminData.foundations = adminData.foundations.filter(f => f.id !== id);
        saveData();
        renderFoundations();
    }
}


function renderFacades() {
    const container = document.getElementById('facadesContainer');
    if (!container) return;

    container.innerHTML = adminData.facades.map(facade => `
        <div class="card">
            ${facade.image ? `<img src="${facade.image}" alt="${facade.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${facade.name}</h3>
                <p>Стоимость: ${facade.price.toLocaleString()} ₽/м²</p>
                ${facade.description ? `<p>${facade.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editFacade(${facade.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteFacade(${facade.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddFacadeForm() {
    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="facadeName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="facadePrice" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="facadeImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="facadeDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить фасад', html, () => {
        const name = document.getElementById('facadeName').value;
        const price = parseFloat(document.getElementById('facadePrice').value);
        const image = document.getElementById('facadeImage').value;
        const description = document.getElementById('facadeDescription').value;

        if (name && price) {
            const newFacade = {
                id: Date.now(),
                name,
                price,
                image,
                description
            };
            adminData.facades.push(newFacade);
            saveData();
            renderFacades();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('facadeImage', 'imagePreview');
}

function editFacade(id) {
    const facade = adminData.facades.find(f => f.id === id);
    if (!facade) return;

    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="facadeName" class="form-input" value="${facade.name}">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="facadePrice" class="form-input" value="${facade.price}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="facadeImage" class="form-input" value="${facade.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="facadeDescription" class="form-input">${facade.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${facade.image ? `<img src="${facade.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать фасад', html, () => {
        const name = document.getElementById('facadeName').value;
        const price = parseFloat(document.getElementById('facadePrice').value);
        const image = document.getElementById('facadeImage').value;
        const description = document.getElementById('facadeDescription').value;

        if (name && price) {
            const index = adminData.facades.findIndex(f => f.id === id);
            adminData.facades[index] = { ...facade, name, price, image, description };
            saveData();
            renderFacades();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('facadeImage', 'imagePreview');
}

function deleteFacade(id) {
    if (confirm('Вы уверены, что хотите удалить этот фасад?')) {
        adminData.facades = adminData.facades.filter(f => f.id !== id);
        saveData();
        renderFacades();
    }
}


function renderElectrical() {
    const container = document.getElementById('electricalContainer');
    if (!container) return;

    container.innerHTML = adminData.electrical.map(item => `
        <div class="card">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>Стоимость: ${item.price.toLocaleString()} ₽</p>
                ${item.description ? `<p>${item.description}</p>` : ''}
                <div class="details">
                    <p>Розетки: ${item.sockets} шт.</p>
                    <p>Выключатели: ${item.switches} шт.</p>
                    <p>Точки освещения: ${item.lights} шт.</p>
                </div>
                <div class="card-actions">
                    <button onclick="editElectrical(${item.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteElectrical(${item.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddElectricalForm() {
    const html = `
        <div class="form-group">
            <label>Название пакета:</label>
            <input type="text" id="electricalName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость:</label>
            <input type="number" id="electricalPrice" class="form-input">
        </div>
        <div class="form-group">
            <label>Количество розеток:</label>
            <input type="number" id="electricalSockets" class="form-input">
        </div>
        <div class="form-group">
            <label>Количество выключателей:</label>
            <input type="number" id="electricalSwitches" class="form-input">
        </div>
        <div class="form-group">
            <label>Количество точек освещения:</label>
            <input type="number" id="electricalLights" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="electricalImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="electricalDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить электрический пакет', html, () => {
        const name = document.getElementById('electricalName').value;
        const price = parseFloat(document.getElementById('electricalPrice').value);
        const sockets = parseInt(document.getElementById('electricalSockets').value);
        const switches = parseInt(document.getElementById('electricalSwitches').value);
        const lights = parseInt(document.getElementById('electricalLights').value);
        const image = document.getElementById('electricalImage').value;
        const description = document.getElementById('electricalDescription').value;

        if (name && price && sockets && switches && lights) {
            const newElectrical = {
                id: Date.now(),
                name,
                price,
                sockets,
                switches,
                lights,
                image,
                description
            };
            adminData.electrical.push(newElectrical);
            saveData();
            renderElectrical();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('electricalImage', 'imagePreview');
}

function editElectrical(id) {
    const item = adminData.electrical.find(e => e.id === id);
    if (!item) return;

    const html = `
        <div class="form-group">
            <label>Название пакета:</label>
            <input type="text" id="electricalName" class="form-input" value="${item.name}">
        </div>
        <div class="form-group">
            <label>Стоимость:</label>
            <input type="number" id="electricalPrice" class="form-input" value="${item.price}">
        </div>
        <div class="form-group">
            <label>Количество розеток:</label>
            <input type="number" id="electricalSockets" class="form-input" value="${item.sockets}">
        </div>
        <div class="form-group">
            <label>Количество выключателей:</label>
            <input type="number" id="electricalSwitches" class="form-input" value="${item.switches}">
        </div>
        <div class="form-group">
            <label>Количество точек освещения:</label>
            <input type="number" id="electricalLights" class="form-input" value="${item.lights}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="electricalImage" class="form-input" value="${item.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="electricalDescription" class="form-input">${item.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${item.image ? `<img src="${item.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать электрический пакет', html, () => {
        const name = document.getElementById('electricalName').value;
        const price = parseFloat(document.getElementById('electricalPrice').value);
        const sockets = parseInt(document.getElementById('electricalSockets').value);
        const switches = parseInt(document.getElementById('electricalSwitches').value);
        const lights = parseInt(document.getElementById('electricalLights').value);
        const image = document.getElementById('electricalImage').value;
        const description = document.getElementById('electricalDescription').value;

        if (name && price && sockets && switches && lights) {
            const index = adminData.electrical.findIndex(e => e.id === id);
            adminData.electrical[index] = { ...item, name, price, sockets, switches, lights, image, description };
            saveData();
            renderElectrical();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('electricalImage', 'imagePreview');
}

function deleteElectrical(id) {
    if (confirm('Вы уверены, что хотите удалить этот электрический пакет?')) {
        adminData.electrical = adminData.electrical.filter(e => e.id !== id);
        saveData();
        renderElectrical();
    }
}


function renderWallFinishes() {
    const container = document.getElementById('wallFinishesContainer');
    if (!container) return;

    container.innerHTML = adminData.wallFinishes.map(finish => `
        <div class="card">
            ${finish.image ? `<img src="${finish.image}" alt="${finish.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${finish.name}</h3>
                <p>Стоимость: ${finish.price.toLocaleString()} ₽/м²</p>
                ${finish.description ? `<p>${finish.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editWallFinish(${finish.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteWallFinish(${finish.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddWallFinishForm() {
    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="wallFinishName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="wallFinishPrice" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="wallFinishImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="wallFinishDescription" class="form-input"></textarea>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить отделку стен', html, () => {
        const name = document.getElementById('wallFinishName').value;
        const price = parseFloat(document.getElementById('wallFinishPrice').value);
        const image = document.getElementById('wallFinishImage').value;
        const description = document.getElementById('wallFinishDescription').value;

        if (name && price) {
            const newWallFinish = {
                id: Date.now(),
                name,
                price,
                image,
                description
            };
            adminData.wallFinishes.push(newWallFinish);
            saveData();
            renderWallFinishes();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('wallFinishImage', 'imagePreview');
}

function editWallFinish(id) {
    const finish = adminData.wallFinishes.find(f => f.id === id);
    if (!finish) return;

    const html = `
        <div class="form-group">
            <label>Название:</label>
            <input type="text" id="wallFinishName" class="form-input" value="${finish.name}">
        </div>
        <div class="form-group">
            <label>Стоимость за м²:</label>
            <input type="number" id="wallFinishPrice" class="form-input" value="${finish.price}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="wallFinishImage" class="form-input" value="${finish.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="wallFinishDescription" class="form-input">${finish.description || ''}</textarea>
        </div>
        <div class="image-preview" id="imagePreview">
            ${finish.image ? `<img src="${finish.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать отделку стен', html, () => {
        const name = document.getElementById('wallFinishName').value;
        const price = parseFloat(document.getElementById('wallFinishPrice').value);
        const image = document.getElementById('wallFinishImage').value;
        const description = document.getElementById('wallFinishDescription').value;

        if (name && price) {
            const index = adminData.wallFinishes.findIndex(f => f.id === id);
            adminData.wallFinishes[index] = { ...finish, name, price, image, description };
            saveData();
            renderWallFinishes();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('wallFinishImage', 'imagePreview');
}

function deleteWallFinish(id) {
    if (confirm('Вы уверены, что хотите удалить этот вариант о��делки стен?')) {
        adminData.wallFinishes = adminData.wallFinishes.filter(f => f.id !== id);
        saveData();
        renderWallFinishes();
    }
}


function renderAdditions() {
    const container = document.getElementById('additionsContainer');
    if (!container) return;

    container.innerHTML = adminData.additions.map(addition => `
        <div class="card">
            ${addition.image ? `<img src="${addition.image}" alt="${addition.name}" class="card-image">` : ''}
            <div class="card-content">
                <h3>${addition.name}</h3>
                <p>Стоимость: ${addition.price.toLocaleString()} ₽</p>
                ${addition.description ? `<p>${addition.description}</p>` : ''}
                <div class="card-actions">
                    <button onclick="editAddition(${addition.id})" class="btn btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteAddition(${addition.id})" class="btn btn-delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAddAdditionForm() {
    const html = `
        <div class="form-group">
            <label>Название опции:</label>
            <input type="text" id="additionName" class="form-input">
        </div>
        <div class="form-group">
            <label>Стоимость:</label>
            <input type="number" id="additionPrice" class="form-input">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="additionImage" class="form-input">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="additionDescription" class="form-input"></textarea>
        </div>
        <div class="form-group">
            <label>Категория:</label>
            <select id="additionCategory" class="form-input">
                <option value="comfort">Комфорт</option>
                <option value="security">Безопасность</option>
                <option value="design">Дизайн</option>
                <option value="other">Другое</option>
            </select>
        </div>
        <div class="image-preview" id="imagePreview"></div>
    `;

    showModal('Добавить дополнительную опцию', html, () => {
        const name = document.getElementById('additionName').value;
        const price = parseFloat(document.getElementById('additionPrice').value);
        const image = document.getElementById('additionImage').value;
        const description = document.getElementById('additionDescription').value;
        const category = document.getElementById('additionCategory').value;

        if (name && price) {
            const newAddition = {
                id: Date.now(),
                name,
                price,
                image,
                description,
                category
            };
            adminData.additions.push(newAddition);
            saveData();
            renderAdditions();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('additionImage', 'imagePreview');
}

function editAddition(id) {
    const addition = adminData.additions.find(a => a.id === id);
    if (!addition) return;

    const html = `
        <div class="form-group">
            <label>Название опции:</label>
            <input type="text" id="additionName" class="form-input" value="${addition.name}">
        </div>
        <div class="form-group">
            <label>Стоимость:</label>
            <input type="number" id="additionPrice" class="form-input" value="${addition.price}">
        </div>
        <div class="form-group">
            <label>URL изображения:</label>
            <input type="text" id="additionImage" class="form-input" value="${addition.image || ''}">
        </div>
        <div class="form-group">
            <label>Описание:</label>
            <textarea id="additionDescription" class="form-input">${addition.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label>Категория:</label>
            <select id="additionCategory" class="form-input">
                <option value="comfort" ${addition.category === 'comfort' ? 'selected' : ''}>Комфорт</option>
                <option value="security" ${addition.category === 'security' ? 'selected' : ''}>Безопасность</option>
                <option value="design" ${addition.category === 'design' ? 'selected' : ''}>Дизайн</option>
                <option value="other" ${addition.category === 'other' ? 'selected' : ''}>Другое</option>
            </select>
        </div>
        <div class="image-preview" id="imagePreview">
            ${addition.image ? `<img src="${addition.image}" alt="Preview">` : ''}
        </div>
    `;

    showModal('Редактировать дополнительную опцию', html, () => {
        const name = document.getElementById('additionName').value;
        const price = parseFloat(document.getElementById('additionPrice').value);
        const image = document.getElementById('additionImage').value;
        const description = document.getElementById('additionDescription').value;
        const category = document.getElementById('additionCategory').value;

        if (name && price) {
            const index = adminData.additions.findIndex(a => a.id === id);
            adminData.additions[index] = { ...addition, name, price, image, description, category };
            saveData();
            renderAdditions();
            closeModal();
        } else {
            showNotification('Заполните обязательные поля', 'error');
        }
    });

    addImagePreview('additionImage', 'imagePreview');
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
function deleteAddition(id) {
    if (confirm('Вы уверены, что хотите удалить эту дополнительную опцию?')) {
        adminData.additions = adminData.additions.filter(a => a.id !== id);
        saveData();
        renderAdditions();
    }
}


function renderRequests() {
    const container = document.getElementById('requestsContainer');
    if (!container) return;

    const sortedRequests = adminData.requests.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = sortedRequests.map((request, index) => {
        const isContactForm = request.type === 'contact';
        const requestDate = new Date(request.date).toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        
        const displayValue = (value) => value || 'Не указано';

        return `
        <div class="request-card ${request.status || 'new'}" data-id="${request.id}">
            <div class="request-header" onclick="toggleRequestDetails(${index})">
                <div class="request-basic-info">
                    <h3>Заявка #${request.id} ${isContactForm ? '(Обратная связь)' : '(Калькулятор)'}</h3>
                    <p>Дата: ${requestDate}</p>
                    <p>Статус: <span class="status-badge ${request.status}">${getStatusName(request.status)}</span></p>
                </div>
                <div class="request-controls">
                    <select class="status-select" onchange="updateRequestStatus(${request.id}, this.value)" onclick="event.stopPropagation()">
                        <option value="new" ${request.status === 'new' ? 'selected' : ''}>Новая</option>
                        <option value="processing" ${request.status === 'processing' ? 'selected' : ''}>В обработке</option>
                        <option value="contacted" ${request.status === 'contacted' ? 'selected' : ''}>Связались</option>
                        <option value="completed" ${request.status === 'completed' ? 'selected' : ''}>Завершена</option>
                        <option value="cancelled" ${request.status === 'cancelled' ? 'selected' : ''}>Отменена</option>
                    </select>
                    <button class="btn btn-delete" onclick="deleteRequest(${request.id}); event.stopPropagation();">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="request-details">
                <div class="contact-info">
                    <h4>Контактная информация:</h4>
                    <p><strong>Имя:</strong> ${displayValue(request.name)}</p>
                    <p><strong>Телефон:</strong> ${displayValue(request.phone)}</p>
                    <p><strong>Email:</strong> ${displayValue(request.email)}</p>
                    ${request.comment ? `<p><strong>Комментарий:</strong> ${request.comment}</p>` : ''}
                </div>
                ${!isContactForm && request.selections ? `
                <div class="order-details">
                    <h3>Параметры заказа:</h3>
                    <div class="order-specifications">
                        <p><strong>Тип дома:</strong> ${displayValue(request.selections.houseType)}</p>
                        <p><strong>Площадь:</strong> ${request.selections.area ? request.selections.area + ' м²' : 'Не указано'}</p>
                        <p><strong>Этажность:</strong> ${displayValue(request.selections.floor)}</p>
                        <p><strong>Крыша:</strong> ${displayValue(request.selections.roof)}</p>
                        <p><strong>Материал:</strong> ${displayValue(request.selections.material)}</p>
                        <p><strong>Фундамент:</strong> ${displayValue(request.selections.foundation)}</p>
                        <p><strong>Фасад:</strong> ${displayValue(request.selections.facade)}</p>
                        <p><strong>Электрика:</strong> ${displayValue(request.selections.electrical)}</p>
                        <p><strong>Отделка стен:</strong> ${displayValue(request.selections.wallFinish)}</p>
                    </div>
                    ${request.selections.additions && request.selections.additions.length > 0 ? `
                    <div class="additional-options">
                        <h5>Дополнительные опции:</h5>
                        <ul>
                            ${request.selections.additions.map(addition => `<li>${addition}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    ${request.totalPrice ? `
                    <div class="total-price">
                        <h5>Предварительная стоимость:</h5>
                        <p>${new Intl.NumberFormat('ru-RU', {
                            style: 'currency',
                            currency: 'RUB',
                            minimumFractionDigits: 0
                        }).format(request.totalPrice)}</p>
                    </div>
                    ` : ''}
                </div>
                ` : ''}
            </div>
        </div>
        `;
    }).join('');

    if (sortedRequests.length === 0) {
        container.innerHTML = `
            <div class="no-requests">
                <i class="fas fa-inbox"></i>
                <p>Нет активных заявок</p>
            </div>
        `;
    }
}


function validateRequestData(request) {
    const defaultRequest = {
        id: Date.now(),
        date: new Date().toISOString(),
        status: 'new',
        name: '',
        phone: '',
        email: '',
        comment: '',
        selections: {
            houseType: '',
            area: '',
            floor: '',
            roof: '',
            material: '',
            foundation: '',
            facade: '',
            electrical: '',
            wallFinish: '',
            additions: []
        },
        totalPrice: 0
    };

    return { ...defaultRequest, ...request };
}

function toggleRequestDetails(index) {
    const requestCards = document.querySelectorAll('.request-card');
    if (requestCards[index]) {
        requestCards[index].classList.toggle('expanded');
    }
}

function updateRequestStatus(id, newStatus) {
    console.log('Updating status:', id, newStatus);
    const request = adminData.requests.find(r => r.id === id);
    if (!request) {
        console.error('Request not found:', id);
        return;
    }

    request.status = newStatus;
    
    saveData();
    renderRequests();
}
function deleteRequest(id) {
    if (confirm('Вы уверены, что хотите удалить эту заявку?')) {
        console.log('Deleting request:', id);
        adminData.requests = adminData.requests.filter(r => r.id !== id);
        saveData();
        renderRequests();
    }
}

function getStatusName(status) {
    const statusMap = {
        'new': 'Новая',
        'processing': 'В обработке',
        'contacted': 'Связались',
        'completed': 'Завершена',
        'cancelled': 'Отменена'
    };
    return statusMap[status] || status;
}


document.addEventListener('DOMContentLoaded', function() {
    
    if (document.getElementById('loginContainer')) {
        checkAuth();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    initializeAdminData();
    loadAdminData();
    checkAuth();
    showTab('houseTypes');
});
window.addEventListener('storage', function(e) {
    if (e.key === 'adminData') {
        loadAdminData();
    }
});
