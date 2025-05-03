<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>Админ-панель</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        body {
            background-color: #f0f2f5;
            color: #333;
        }
        
        .admin-layout {
            display: flex;
            min-height: 100vh;
        }
        
        .sidebar {
            width: 250px;
            background-color: #ffffff;
            padding: 20px;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        }
        
        .logo-container {
            margin-bottom: 30px;
            text-align: center;
            padding: 20px 0;
        }
        
        .logo-container img {
            max-width: 200px;
            height: auto;
        }
        
        .nav-buttons {
            flex-grow: 1;
        }
        
        .nav-button {
            width: 100%;
            padding: 15px 20px;
            margin-bottom: 15px;
            background: #f8f9fa;
            border: none;
            color: #333;
            text-align: left;
            border-radius: 8px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
        }
        
        .nav-button i {
            margin-right: 15px;
            width: 20px;
            font-size: 18px;
        }
        
        .nav-button:hover {
            background: #e9ecef;
            transform: translateX(5px);
        }
        
        .nav-button.active {
            background: #4CAF50;
            color: white;
        }
        
        .main-content {
            flex-grow: 1;
            padding: 30px;
            background-color: #f0f2f5;
        }
        
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .card {
            background: #ffffff;
            border: none;
            border-radius: 10px;
            margin-bottom: 20px;
            height: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .card-body {
            padding: 20px;
            color: #333;
            display: flex;
            flex-direction: column;
        }
        
        .card-img-container {
            position: relative;
            width: 100%;
            padding-top: 75%; /* Соотношение сторон 4:3 */
            margin-bottom: 15px;
            overflow: hidden;
            border-radius: 5px;
        }
        
        .card-img-top {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        
        .card-title {
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .card-text {
            color: #666;
            margin-bottom: 10px;
        }
        
        .btn-group {
            margin-top: auto;
            display: flex;
            gap: 10px;
        }
        
        .btn-group .btn {
            flex: 1;
            padding: 8px 16px;
            border-radius: 5px;
        }
        
        .btn-primary {
            background-color: #4CAF50;
            border: none;
            transition: all 0.3s;
        }
        
        .btn-primary:hover {
            background-color: #45a049;
            transform: translateY(-2px);
        }
        
        .btn-danger {
            background-color: #dc3545;
            border: none;
            transition: all 0.3s;
        }
        
        .btn-danger:hover {
            background-color: #c82333;
            transform: translateY(-2px);
        }
        
        .modal-content {
            background-color: #ffffff;
            color: #333;
            border-radius: 10px;
        }
        
        .modal-header {
            border-bottom-color: #e9ecef;
        }
        
        .modal-footer {
            border-top-color: #e9ecef;
        }
        
        .form-control {
            background-color: #f8f9fa;
            border-color: #e9ecef;
            color: #333;
        }
        
        .form-control:focus {
            background-color: #ffffff;
            border-color: #4CAF50;
            color: #333;
            box-shadow: 0 0 0 0.25rem rgba(76, 175, 80, 0.25);
        }
        
        .btn-close {
            filter: none;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="admin-layout">
        <div class="sidebar">
            <div class="logo-container">
                <a href="<?php echo e(url('/')); ?>">
                    <img src="<?php echo e(asset('icons/logo.svg')); ?>" alt="Логотип" width="200">
                </a>
            </div>
            <div class="nav-buttons">
                <button class="nav-button" onclick="showTab('types')">
                    <i class="fas fa-home"></i> Типы домов
                </button>
                <button class="nav-button active" onclick="showTab('floors')">
                    <i class="fas fa-layer-group"></i> Этажи
                </button>
                <button class="nav-button" onclick="showTab('roofs')">
                    <i class="fas fa-home"></i> Крыши
                </button>
                <button class="nav-button" onclick="showTab('materials')">
                    <i class="fas fa-cubes"></i> Материалы
                </button>
                <button class="nav-button" onclick="showTab('foundations')">
                    <i class="fas fa-square"></i> Фундаменты
                </button>
                <button class="nav-button" onclick="showTab('facades')">
                    <i class="fas fa-building"></i> Фасады
                </button>
                <button class="nav-button" onclick="showTab('electrical')">
                    <i class="fas fa-bolt"></i> Электрика
                </button>
                <button class="nav-button" onclick="showTab('wall-finishes')">
                    <i class="fas fa-paint-roller"></i> Отделка стен
                </button>
                <button class="nav-button" onclick="showTab('additions')">
                    <i class="fas fa-plus-circle"></i> Дополнения
                </button>
            </div>
        </div>

        <div class="main-content">
            <div id="types" class="tab-content">
                <div class="section-header">
                    <h2>Типы домов</h2>
                    <button class="btn btn-primary" onclick="showAddModal('types')">
                        <i class="fas fa-plus"></i> Добавить тип дома
                    </button>
                </div>
                <div class="grid" id="types-container"></div>
            </div>

            <div id="floors" class="tab-content active">
                <div class="section-header">
                    <h2>Этажи</h2>
                    <button class="btn btn-primary" onclick="showAddModal('floors')">
                        <i class="fas fa-plus"></i> Добавить этаж
                    </button>
                </div>
                <div class="grid" id="floors-container"></div>
            </div>

            <div id="roofs" class="tab-content">
                <div class="section-header">
                    <h2>Крыши</h2>
                    <button class="btn btn-primary" onclick="showAddModal('roofs')">
                        <i class="fas fa-plus"></i> Добавить крышу
                    </button>
                </div>
                <div class="grid" id="roofs-container"></div>
            </div>

            <div id="materials" class="tab-content">
                <div class="section-header">
                    <h2>Материалы</h2>
                    <button class="btn btn-primary" onclick="showAddModal('materials')">
                        <i class="fas fa-plus"></i> Добавить материал
                    </button>
                </div>
                <div class="grid" id="materials-container"></div>
            </div>

            <div id="foundations" class="tab-content">
                <div class="section-header">
                    <h2>Фундаменты</h2>
                    <button class="btn btn-primary" onclick="showAddModal('foundations')">
                        <i class="fas fa-plus"></i> Добавить фундамент
                    </button>
                </div>
                <div class="grid" id="foundations-container"></div>
            </div>

            <div id="facades" class="tab-content">
                <div class="section-header">
                    <h2>Фасады</h2>
                    <button class="btn btn-primary" onclick="showAddModal('facades')">
                        <i class="fas fa-plus"></i> Добавить фасад
                    </button>
                </div>
                <div class="grid" id="facades-container"></div>
            </div>

            <div id="electrical" class="tab-content">
                <div class="section-header">
                    <h2>Электрика</h2>
                    <button class="btn btn-primary" onclick="showAddModal('electrical')">
                        <i class="fas fa-plus"></i> Добавить электрику
                    </button>
                </div>
                <div class="grid" id="electrical-container"></div>
            </div>

            <div id="wall-finishes" class="tab-content">
                <div class="section-header">
                    <h2>Отделка стен</h2>
                    <button class="btn btn-primary" onclick="showAddModal('wall-finishes')">
                        <i class="fas fa-plus"></i> Добавить отделку
                    </button>
                </div>
                <div class="grid" id="wall-finishes-container"></div>
            </div>

            <div id="additions" class="tab-content">
                <div class="section-header">
                    <h2>Дополнения</h2>
                    <button class="btn btn-primary" onclick="showAddModal('additions')">
                        <i class="fas fa-plus"></i> Добавить дополнение
                    </button>
                </div>
                <div class="grid" id="additions-container"></div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">Редактировать</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="editForm">
                        <input type="hidden" id="itemId">
                        <input type="hidden" id="itemType">
                        <div class="mb-3">
                            <label for="name" class="form-label">Название</label>
                            <input type="text" class="form-control" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Цена</label>
                            <input type="number" class="form-control" id="price" step="0.01">
                        </div>
                        <div class="mb-3">
                            <label for="multiplier" class="form-label">Множитель</label>
                            <input type="number" class="form-control" id="multiplier" step="0.01">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Описание</label>
                            <textarea class="form-control" id="description"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Изображение (URL)</label>
                            <input type="text" class="form-control" id="image">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-primary" onclick="saveItem()">Сохранить</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        const modal = new bootstrap.Modal(document.getElementById('editModal'));
        const types = ['types', 'floors', 'roofs', 'materials', 'foundations', 'facades', 'electrical', 'wall-finishes', 'additions'];
        
        document.addEventListener('DOMContentLoaded', () => {
            types.forEach(type => loadData(type));
        });

        function showTab(type) {
            // Скрыть все вкладки
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Показать выбранную вкладку
            document.getElementById(type).classList.add('active');
            
            // Обновить активную кнопку
            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('active');
                if (button.textContent.toLowerCase().includes(type.replace('-', ' '))) {
                    button.classList.add('active');
                }
            });
        }

        function loadData(type) {
            const container = document.getElementById(`${type}-container`);
            if (!container) {
                console.error(`Container for ${type} not found`);
                return;
            }

            fetch(`/${type}`)
                .then(response => response.json())
                .then(data => {
                    container.innerHTML = '';
                    data.forEach(item => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                ${item.price ? `<p class="card-text">Цена: ${item.price}</p>` : ''}
                                ${item.multiplier ? `<p class="card-text">Множитель: ${item.multiplier}</p>` : ''}
                                ${item.description ? `<p class="card-text">${item.description}</p>` : ''}
                                ${item.image ? `
                                    <div class="card-img-container">
                                        <img src="${item.image}" class="card-img-top" alt="${item.name}">
                                    </div>
                                ` : ''}
                                <div class="btn-group">
                                    <button class="btn btn-primary btn-sm" onclick="editItem('${type}', ${item.id})">
                                        <i class="fas fa-edit"></i> Редактировать
                                    </button>
                                    <button class="btn btn-danger btn-sm" onclick="deleteItem('${type}', ${item.id})">
                                        <i class="fas fa-trash"></i> Удалить
                                    </button>
                                </div>
                            </div>
                        `;
                        container.appendChild(card);
                    });
                })
                .catch(error => console.error('Error loading data:', error));
        }

        function showAddModal(type) {
            document.getElementById('modalTitle').textContent = 'Добавить';
            document.getElementById('itemId').value = '';
            document.getElementById('itemType').value = type;
            document.getElementById('name').value = '';
            document.getElementById('price').value = '';
            document.getElementById('multiplier').value = '';
            document.getElementById('description').value = '';
            document.getElementById('image').value = '';
            
            // Show/hide fields based on type
            document.getElementById('price').parentElement.style.display = 
                type === 'floors' ? 'none' : 'block';
            document.getElementById('multiplier').parentElement.style.display = 
                type === 'floors' ? 'block' : 'none';
            
            modal.show();
        }

        function editItem(type, id) {
            fetch(`/${type}/${id}/edit`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('modalTitle').textContent = 'Редактировать';
                    document.getElementById('itemId').value = data.id;
                    document.getElementById('itemType').value = type;
                    document.getElementById('name').value = data.name;
                    document.getElementById('price').value = data.price || '';
                    document.getElementById('multiplier').value = data.multiplier || '';
                    document.getElementById('description').value = data.description || '';
                    document.getElementById('image').value = data.image || '';
                    
                    // Show/hide fields based on type
                    document.getElementById('price').parentElement.style.display = 
                        type === 'floors' ? 'none' : 'block';
                    document.getElementById('multiplier').parentElement.style.display = 
                        type === 'floors' ? 'block' : 'none';
                    
                    modal.show();
                })
                .catch(error => console.error('Error loading item:', error));
        }

        function saveItem() {
            const id = document.getElementById('itemId').value;
            const type = document.getElementById('itemType').value;
            const data = {
                name: document.getElementById('name').value,
                price: document.getElementById('price').value,
                multiplier: document.getElementById('multiplier').value,
                description: document.getElementById('description').value,
                image: document.getElementById('image').value,
            };

            const method = id ? 'PUT' : 'POST';
            const url = id ? `/${type}/${id}` : `/${type}`;

            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                modal.hide();
                loadData(type);
            })
            .catch(error => console.error('Error saving item:', error));
        }

        function deleteItem(type, id) {
            if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
                fetch(`/${type}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        loadData(type);
                    }
                })
                .catch(error => console.error('Error deleting item:', error));
            }
        }
    </script>
</body>
</html><?php /**PATH /Users/admin/Desktop/mysite-main-backup 3/my-laravel-project/resources/views/admin.blade.php ENDPATH**/ ?>