// Sample data
const sampleData = [
    { 
        id: 'GM001', 
        location: 'A1-北段', 
        reason: '磁場波動', 
        status: '待確認', 
        note: '需要進一步檢測',
        images: {
            'with-car': null,
            'without-car': null,
            'with-car-app': null,
            'without-car-app': null
        }
    },
    { 
        id: 'GM002', 
        location: 'B2-南段', 
        reason: '設備故障', 
        status: '已處理', 
        note: '已更換感測器',
        images: {
            'with-car': null,
            'without-car': null,
            'with-car-app': null,
            'without-car-app': null
        }
    },
    { 
        id: 'GM003', 
        location: 'C3-東段', 
        reason: '干擾源', 
        status: '無法修復', 
        note: '附近有大型機械',
        images: {
            'with-car': null,
            'without-car': null,
            'with-car-app': null,
            'without-car-app': null
        }
    },
    { 
        id: 'GM004', 
        location: 'A1-南段', 
        reason: '磁場波動', 
        status: '待確認', 
        note: '持續監測中',
        images: {
            'with-car': null,
            'without-car': null,
            'with-car-app': null,
            'without-car-app': null
        }
    },
    { 
        id: 'GM005', 
        location: 'B2-北段', 
        reason: '設備故障', 
        status: '已處理', 
        note: '系統重啟完成',
        images: {
            'with-car': null,
            'without-car': null,
            'with-car-app': null,
            'without-car-app': null
        }
    },
    { id: 'GM006', location: 'C3-西段', reason: '干擾源', status: '待確認', note: '等待現場勘查', image: null },
    { id: 'GM007', location: 'A1-東段', reason: '磁場波動', status: '已處理', note: '調整完成', image: null },
    { id: 'GM008', location: 'B2-西段', reason: '設備故障', status: '無法修復', note: '需要更換設備', image: null },
    { id: 'GM009', location: 'C3-南段', reason: '干擾源', status: '待確認', note: '等待專家評估', image: null },
    { id: 'GM010', location: 'A1-西段', reason: '磁場波動', status: '已處理', note: '系統優化完成', image: null }
];

// State management
let state = {
    data: [...sampleData],
    selectedRows: new Set(),
    sortConfig: { key: null, direction: 'asc' }
};

// DOM Elements
const tableBody = document.getElementById('anomalyTableBody');
const selectAllCheckbox = document.getElementById('selectAll');
const batchEditBtn = document.getElementById('batchEditBtn');
const selectedCountSpan = document.getElementById('selectedCount');
const batchEditModal = new bootstrap.Modal(document.getElementById('batchEditModal'));
const singleEditModal = new bootstrap.Modal(document.getElementById('singleEditModal'));
const imagePreviewModal = new bootstrap.Modal(document.getElementById('imagePreviewModal'));

// Initialize the table
function initializeTable() {
    renderTable();
    setupEventListeners();
}

// Render table rows
function renderTable() {
    tableBody.innerHTML = '';
    state.data.forEach((row, index) => {
        // 確保每個資料項目都有 images 物件
        if (!row.images) {
            row.images = {
                'with-car': null,
                'without-car': null,
                'with-car-app': null,
                'without-car-app': null
            };
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <input type="checkbox" class="form-check-input row-checkbox" data-index="${index}">
            </td>
            <td>${row.id}</td>
            <td>${row.location}</td>
            <td>${row.reason}</td>
            <td><span class="status-badge status-${getStatusClass(row.status)}">${row.status}</span></td>
            <td>
                ${Object.values(row.images).some(img => img) ? 
                    `<div class="image-preview-container">
                        <img src="${Object.values(row.images).find(img => img) || ''}" 
                             class="image-preview" 
                             data-index="${index}" 
                             alt="異常圖片">
                        <span class="image-count">${Object.values(row.images).filter(img => img).length}/4</span>
                    </div>` 
                    : '無圖片'}
            </td>
            <td>${row.note}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary edit-btn" data-index="${index}">
                    編輯
                </button>
            </td>
        `;
        if (state.selectedRows.has(index)) {
            tr.classList.add('selected');
            tr.querySelector('.row-checkbox').checked = true;
        }
        tableBody.appendChild(tr);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Select all checkbox
    selectAllCheckbox.addEventListener('change', (e) => {
        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked;
            const index = parseInt(checkbox.dataset.index);
            if (e.target.checked) {
                state.selectedRows.add(index);
            } else {
                state.selectedRows.delete(index);
            }
        });
        updateUI();
    });

    // Individual row checkboxes
    tableBody.addEventListener('change', (e) => {
        if (e.target.classList.contains('row-checkbox')) {
            const index = parseInt(e.target.dataset.index);
            if (e.target.checked) {
                state.selectedRows.add(index);
            } else {
                state.selectedRows.delete(index);
            }
            updateUI();
        }
    });

    // Row click for selection
    tableBody.addEventListener('click', (e) => {
        const tr = e.target.closest('tr');
        if (tr && !e.target.classList.contains('row-checkbox') && !e.target.classList.contains('edit-btn')) {
            const checkbox = tr.querySelector('.row-checkbox');
            checkbox.checked = !checkbox.checked;
            const index = parseInt(checkbox.dataset.index);
            if (checkbox.checked) {
                state.selectedRows.add(index);
            } else {
                state.selectedRows.delete(index);
            }
            updateUI();
        }
    });

    // Edit button click
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const index = parseInt(e.target.dataset.index);
            openSingleEditModal(index);
        }
    });

    // Batch edit button
    batchEditBtn.addEventListener('click', () => {
        batchEditModal.show();
    });

    // Image preview click
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('image-preview')) {
            const index = parseInt(e.target.dataset.index);
            const images = state.data[index].images;
            const firstImage = Object.values(images).find(img => img);
            if (firstImage) {
                document.getElementById('previewImage').src = firstImage;
                imagePreviewModal.show();
            }
        }
    });

    // Remove image
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-image')) {
            const index = parseInt(e.target.dataset.index);
            const type = e.target.dataset.type;
            if (type) {
                state.data[index].images[type] = null;
                renderTable();
                showToast('圖片已移除');
            }
        }
    });

    // Image upload handlers
    document.querySelectorAll('.image-upload-item input[type="file"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const type = e.target.dataset.type;
            const previewContainer = e.target.nextElementSibling;
            handleImageUpload(e.target.files[0], previewContainer, type);
        });
    });

    // Confirm batch edit
    document.getElementById('confirmBatchEdit').addEventListener('click', () => {
        const status = document.getElementById('batchStatus').value;
        const note = document.getElementById('batchNote').value;
        
        state.selectedRows.forEach(index => {
            state.data[index].status = status;
            state.data[index].note = note;
        });

        batchEditModal.hide();
        renderTable();
        showToast(`已更新 ${state.selectedRows.size} 筆回報`);
        state.selectedRows.clear();
        updateUI();
    });

    // Confirm single edit
    document.getElementById('confirmSingleEdit').addEventListener('click', () => {
        const index = parseInt(document.getElementById('singleEditModal').dataset.index);
        const status = document.getElementById('singleStatus').value;
        const note = document.getElementById('singleNote').value;

        state.data[index].status = status;
        state.data[index].note = note;

        // 更新圖片
        document.querySelectorAll('.image-upload-item').forEach(item => {
            const type = item.querySelector('input').dataset.type;
            const preview = item.querySelector('.image-preview img');
            if (preview) {
                state.data[index].images[type] = preview.src;
            }
        });

        singleEditModal.hide();
        renderTable();
        showToast('回報已更新');
    });

    // Table header sorting
    document.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const key = th.dataset.sort;
            if (state.sortConfig.key === key) {
                state.sortConfig.direction = state.sortConfig.direction === 'asc' ? 'desc' : 'asc';
            } else {
                state.sortConfig.key = key;
                state.sortConfig.direction = 'asc';
            }
            sortData();
            renderTable();
        });
    });
}

// Update UI elements
function updateUI() {
    batchEditBtn.disabled = state.selectedRows.size === 0;
    selectedCountSpan.textContent = `已選擇 ${state.selectedRows.size} 筆`;
    selectAllCheckbox.checked = state.selectedRows.size === state.data.length;
}

// Open single edit modal
function openSingleEditModal(index) {
    const row = state.data[index];
    document.getElementById('singleStatus').value = row.status;
    document.getElementById('singleNote').value = row.note;
    document.getElementById('singleEditModal').dataset.index = index;
    
    // 清除並重新設置圖片預覽
    document.querySelectorAll('.image-upload-item').forEach(item => {
        const type = item.querySelector('input').dataset.type;
        const previewContainer = item.querySelector('.image-preview');
        previewContainer.innerHTML = '';
        
        if (row.images[type]) {
            previewContainer.innerHTML = `
                <div class="image-preview-container">
                    <img src="${row.images[type]}" class="image-preview" alt="當前圖片">
                    <span class="remove-image">&times;</span>
                </div>
            `;
        }
    });
    
    singleEditModal.show();
}

// Sort data
function sortData() {
    if (!state.sortConfig.key) return;

    state.data.sort((a, b) => {
        const aValue = a[state.sortConfig.key];
        const bValue = b[state.sortConfig.key];
        
        if (aValue < bValue) return state.sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return state.sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });
}

// Get status class for styling
function getStatusClass(status) {
    switch (status) {
        case '待確認': return 'pending';
        case '已處理': return 'resolved';
        case '無法修復': return 'unresolved';
        default: return 'pending';
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Handle image upload
function handleImageUpload(file, previewContainer, type) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const imageUrl = e.target.result;
        previewContainer.innerHTML = `
            <div class="image-preview-container">
                <img src="${imageUrl}" class="image-preview" alt="預覽圖片">
                <span class="remove-image">&times;</span>
            </div>
        `;

        // 添加刪除圖片的事件監聽器
        previewContainer.querySelector('.remove-image').addEventListener('click', () => {
            previewContainer.innerHTML = '';
            if (type) {
                const index = parseInt(document.getElementById('singleEditModal').dataset.index);
                state.data[index].images[type] = null;
            }
        });
    };
    reader.readAsDataURL(file);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeTable); 