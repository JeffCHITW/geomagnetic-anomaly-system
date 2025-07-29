console.log('script.js loaded');

function showLogin() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

// Sample data
const sampleData = [
    {
        id: 'GM001',
        roadName: '中山路',
        section: 'A1-北段~A1-南段',
        code: 'A1-001',
        reason: '磁場波動',
        status: '待確認',
        vendorReason: '感測器異常',
        note: '需要進一步檢測',
        uploadedImages: [
            {
                name: '現場照片 - 有車狀態',
                src: 'https://via.placeholder.com/800x600/4B5EAA/FFFFFF?text=現場照片-有車狀態'
            },
            {
                name: 'APP截圖 - 異常顯示',
                src: 'https://via.placeholder.com/800x600/FF6B6B/FFFFFF?text=APP截圖-異常顯示'
            },
            {
                name: '感測器特寫',
                src: 'https://via.placeholder.com/800x600/4ECDC4/FFFFFF?text=感測器特寫'
            }
        ],
        history: [
            {
                time: '2024-06-01 10:00',
                action: '建立',
                user: '工程師',
                status: '待確認',
                note: '建立回報'
            }
        ],
        reviewStatus: '通過'
    },
    {
        id: 'GM002',
        roadName: '民生路',
        section: 'B2-北段~B2-南段',
        code: 'B2-002',
        reason: '設備故障',
        status: '已修復',
        vendorReason: '電池電壓低',
        note: '已更換感測器',
        uploadedImages: [
            {
                name: '電池電壓檢測',
                src: 'https://via.placeholder.com/800x600/FFA500/FFFFFF?text=電池電壓檢測'
            },
            {
                name: '更換後測試',
                src: 'https://via.placeholder.com/800x600/32CD32/FFFFFF?text=更換後測試'
            }
        ],
        history: [],
        reviewStatus: '不通過'
    },
    {
        id: 'GM003',
        roadName: '中正路',
        section: 'C3-東段~C3-西段',
        code: 'C3-003',
        reason: '干擾源',
        status: '無法修復',
        status2: '無法修復',
        note: '附近有大型機械',
        uploadedImages: [
            {
                name: '干擾源現場',
                src: 'https://via.placeholder.com/800x600/8B4513/FFFFFF?text=干擾源現場'
            },
            {
                name: '大型機械位置',
                src: 'https://via.placeholder.com/800x600/DC143C/FFFFFF?text=大型機械位置'
            },
            {
                name: '磁場檢測結果',
                src: 'https://via.placeholder.com/800x600/696969/FFFFFF?text=磁場檢測結果'
            }
        ],
        history: [],
        reviewStatus: null
    },
    {
        id: 'GM004',
        roadName: '和平路',
        section: 'A1-南段~B2-北段',
        code: 'A1-004',
        reason: '磁場波動',
        status: '待確認',
        status2: '待確認',
        note: '持續監測中',
        uploadedImages: [
            {
                name: '監測設備狀態',
                src: 'https://via.placeholder.com/800x600/9370DB/FFFFFF?text=監測設備狀態'
            },
            {
                name: '磁場波動圖表',
                src: 'https://via.placeholder.com/800x600/20B2AA/FFFFFF?text=磁場波動圖表'
            }
        ],
        history: [],
        reviewStatus: '通過'
    },
    {
        id: 'GM005',
        roadName: '自由路',
        section: 'B2-北段~B2-南段',
        code: 'B2-005',
        reason: '設備故障',
        status: '已修復',
        status2: '已修復',
        note: '系統重啟完成',
        uploadedImages: [
            {
                name: '系統重啟過程',
                src: 'https://via.placeholder.com/800x600/00CED1/FFFFFF?text=系統重啟過程'
            },
            {
                name: '重啟後測試',
                src: 'https://via.placeholder.com/800x600/32CD32/FFFFFF?text=重啟後測試'
            },
            {
                name: '系統狀態確認',
                src: 'https://via.placeholder.com/800x600/FFD700/FFFFFF?text=系統狀態確認'
            }
        ],
        history: [],
        reviewStatus: '通過'
    },
    { 
        id: 'GM006', 
        roadName: '中興路', 
        section: 'C3-西段~A1-東段', 
        code: 'C3-006', 
        reason: '干擾源', 
        status: '待確認', 
        status2: '待確認', 
        note: '等待現場勘查', 
        uploadedImages: [
            {
                name: '現場勘查照片',
                src: 'https://via.placeholder.com/800x600/6A5ACD/FFFFFF?text=現場勘查照片'
            }
        ],
        reviewStatus: null
    },
    { 
        id: 'GM007', 
        roadName: '中華路', 
        section: 'A1-東段~B2-西段', 
        code: 'A1-007', 
        reason: '磁場波動', 
        status: '已處理', 
        status2: '已處理', 
        note: '調整完成', 
        uploadedImages: [
            {
                name: '調整前後對比',
                src: 'https://via.placeholder.com/800x600/98FB98/FFFFFF?text=調整前後對比'
            }
        ],
        reviewStatus: '通過'
    },
    { 
        id: 'GM008', 
        roadName: '中正路', 
        section: 'B2-西段~C3-南段', 
        code: 'B2-008', 
        reason: '設備故障', 
        status: '無法修復', 
        status2: '無法修復', 
        note: '需要更換設備', 
        uploadedImages: [
            {
                name: '設備損壞狀況',
                src: 'https://via.placeholder.com/800x600/CD5C5C/FFFFFF?text=設備損壞狀況'
            }
        ],
        reviewStatus: '不通過'
    },
    { 
        id: 'GM009', 
        roadName: '中興路', 
        section: 'C3-南段~A1-西段', 
        code: 'C3-009', 
        reason: '干擾源', 
        status: '待確認', 
        status2: '待確認', 
        note: '等待專家評估', 
        uploadedImages: [
            {
                name: '專家評估現場',
                src: 'https://via.placeholder.com/800x600/4682B4/FFFFFF?text=專家評估現場'
            }
        ],
        reviewStatus: null
    },
    { 
        id: 'GM010', 
        roadName: '中華路', 
        section: 'A1-西段~B2-東段', 
        code: 'A1-010', 
        reason: '磁場波動', 
        status: '已處理', 
        status2: '已處理', 
        note: '系統優化完成', 
        uploadedImages: [
            {
                name: '優化後測試',
                src: 'https://via.placeholder.com/800x600/90EE90/FFFFFF?text=優化後測試'
            }
        ],
        reviewStatus: '通過'
    }
];

// State management
let state = {
    data: [...sampleData],
    selectedRows: new Set(),
    sortConfig: { key: null, direction: 'asc' }
};

// Admin state management
let adminState = {
    selectedRows: new Set()
};

// DOM Elements (將在 DOMContentLoaded 中初始化)
let tableBody, selectAllCheckbox, batchEditBtn, selectedCountSpan, batchEditModal, singleEditModal, imagePreviewModal;

// Initialize the table
function initializeTable() {
    renderTable();
    setupEventListeners();
}

// Render table rows
function renderTable() {
    tableBody.innerHTML = '';
    const thead = document.querySelector('thead tr');
    if (thead) {
        thead.innerHTML = `
            <th><input type="checkbox" id="selectAll" class="form-check-input"></th>
            <th>道路名稱</th>
            <th>路段起迄</th>
            <th>車格代碼</th>
            <th>監測異常原因</th>
            <th>修復狀況</th>
            <th>廠商檢測異常原因</th>
            <th>圖片</th>
            <th>備註</th>
            <th>審核狀態</th>
            <th>操作</th>
        `;
    }
    state.data.forEach((row, index) => {
        // 處理新的圖片資料結構
        let imgCount = 0;
        let imgHtml = '無圖片';
        
        if (row.uploadedImages && row.uploadedImages.length > 0) {
            imgCount = row.uploadedImages.length;
            imgHtml = `<a href="#" class="image-count-link" data-index="${index}">${imgCount} 張</a>`;
        } else if (row.images) {
            const imagesArr = Object.values(row.images).filter(img => img);
            imgCount = imagesArr.length;
            if (imgCount > 0) {
                imgHtml = `<a href="#" class="image-count-link" data-index="${index}">${imgCount} 張</a>`;
            }
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="form-check-input row-checkbox" data-index="${index}"></td>
            <td>${row.roadName || ''}</td>
            <td>${row.section || ''}</td>
            <td>${row.code || ''}</td>
            <td>${row.reason}</td>
            <td>${row.status}</td>
            <td>${row.vendorReason || ''}</td>
            <td>${imgHtml}</td>
            <td>${row.note}</td>
            <td>${row.reviewStatus ? `<span class="badge ${row.reviewStatus === '通過' ? 'bg-success' : 'bg-danger'}">${row.reviewStatus}</span>` : '<span class="text-muted">未審核</span>'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary edit-btn" data-index="${index}">編輯</button>
            </td>
        `;
        if (state.selectedRows.has(index)) {
            tr.classList.add('selected');
            tr.querySelector('.row-checkbox').checked = true;
        }
        tableBody.appendChild(tr);
    });

    // 綁定圖片數量點擊事件，彈出 modal 輪播
    document.querySelectorAll('.image-count-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const idx = parseInt(this.dataset.index);
            showImageGalleryModal(idx);
        });
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
        const vendorReason = document.getElementById('batchVendorReason').value;
        const note = document.getElementById('batchNote').value;

        state.selectedRows.forEach(index => {
            state.data[index].status = status;
            state.data[index].vendorReason = vendorReason;
            state.data[index].note = note;
        });

        batchEditModal.hide();
        renderTable();
        showToast(`已更新 ${state.selectedRows.size} 筆回報`);
        state.selectedRows.clear();
        updateUI();
    });

    // Confirm single edit
    const confirmSingleEditBtn = document.getElementById('confirmSingleEdit');
    confirmSingleEditBtn.addEventListener('click', () => {
        const index = parseInt(document.getElementById('singleEditModal').dataset.index);
        const status = document.getElementById('singleStatus').value;
        const vendorReason = document.getElementById('singleVendorReason').value;
        const note = document.getElementById('singleNote').value;
        const now = new Date();
        const time = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0') + ' ' + String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');

        state.data[index].status = status;
        state.data[index].vendorReason = vendorReason;
        state.data[index].note = note;

        // 更新圖片（新的上傳方式）
        if (typeof window.uploadedImages !== 'undefined' && window.uploadedImages.length > 0) {
            // 將上傳的圖片資料儲存到 state
            state.data[index].uploadedImages = window.uploadedImages.map(img => ({
                name: img.name,
                src: img.src
            }));
            // 清空上傳的圖片列表
            window.uploadedImages = [];
            const singleImagePreview = document.getElementById('singleImagePreview');
            if (singleImagePreview) {
                singleImagePreview.innerHTML = '';
            }
        }

        // 新增歷程記錄
        state.data[index].history = state.data[index].history || [];
        state.data[index].history.push({
            time,
            action: '儲存/送出',
            user: '工程師',
            status,
            note
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
    if (document.getElementById('singleVendorReason')) {
        document.getElementById('singleVendorReason').value = row.vendorReason || '';
    }
    if (document.getElementById('singleNote')) {
        document.getElementById('singleNote').value = row.note || '';
    }
    document.getElementById('singleEditModal').dataset.index = index;
    
    // 顯示已上傳的圖片
    const singleImagePreview = document.getElementById('singleImagePreview');
    if (singleImagePreview && row.uploadedImages) {
        singleImagePreview.innerHTML = '';
        row.uploadedImages.forEach((imageData, idx) => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'position-relative d-inline-block m-2';
            imageContainer.innerHTML = `
                <img src="${imageData.src}" class="img-thumbnail" style="max-width: 120px; max-height: 120px;" alt="${imageData.name}">
                <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1" style="font-size: 0.75rem;">${imageData.name}</div>
            `;
            singleImagePreview.appendChild(imageContainer);
        });
    }
    
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
        case '已修復': return 'resolved';
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

// 單筆編輯 modal 下方新增歷程記錄區塊
function renderHistory(history) {
    if (!history || history.length === 0) {
        return '<div class="text-muted">尚無歷程記錄</div>';
    }
    return `
        <table class="table table-sm table-bordered mt-3 bg-white history-table">
            <thead>
                <tr>
                    <th>時間</th>
                    <th>動作</th>
                    <th>執行者</th>
                    <th>狀態</th>
                    <th>備註</th>
                </tr>
            </thead>
            <tbody>
                ${history.slice().reverse().map(h => `
                    <tr>
                        <td>${h.time}</td>
                        <td>${h.action}</td>
                        <td>${h.user}</td>
                        <td>${h.status}</td>
                        <td>${h.note || ''}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// 假資料 for 業者異常回報審核（欄位與業者主畫面一致）
const adminVendorList = [
    {
        id: 'GM001',
        location: 'A1-北段',
        reason: '磁場波動',
        status: '待確認',
        images: {
            'with-car': 'https://via.placeholder.com/60x60?text=有車',
            'without-car': 'https://via.placeholder.com/60x60?text=無車',
            'with-car-app': 'https://via.placeholder.com/60x60?text=有車+APP',
            'without-car-app': 'https://via.placeholder.com/60x60?text=無車+APP'
        },
        reviewStatus: '未審核'
    },
    {
        id: 'GM005',
        location: 'B2-北段',
        reason: '設備故障',
        status: '已處理',
        images: {
            'with-car': 'https://via.placeholder.com/60x60?text=有車',
            'without-car': null,
            'with-car-app': 'https://via.placeholder.com/60x60?text=有車+APP',
            'without-car-app': null
        },
        reviewStatus: '未審核'
    }
];

function renderAdminVendorTable() {
    const tbody = document.getElementById('adminVendorTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    adminVendorList.forEach((row, idx) => {
        let imgHtml = '無圖片';
        if (row.images && Object.values(row.images).some(img => img)) {
            imgHtml = Object.entries(row.images)
                .filter(([key, img]) => img)
                .map(([key, img]) =>
                    `<div class="image-preview-container d-inline-block me-1 mb-1">
                        <img src="${img}" class="image-preview" alt="${key}" style="max-width:60px;max-height:60px;cursor:pointer;" onclick="showPreviewImage('${img}')">
                    </div>`
                ).join('');
        }
        tbody.innerHTML += `
            <tr>
                <td>${row.id}</td>
                <td>${row.location}</td>
                <td>${row.reason}</td>
                <td>${row.status}</td>
                <td>${imgHtml}</td>
                <td>${row.reviewStatus ? `<span class="badge ${row.reviewStatus === '通過' ? 'bg-success' : row.reviewStatus === '不通過' ? 'bg-danger' : 'bg-secondary'}">${row.reviewStatus}</span>` : '<span class="text-muted">未審核</span>'}</td>
                <td>
                    <button class="btn btn-success btn-sm me-2 vendor-approve-btn" data-index="${idx}">通過</button>
                    <button class="btn btn-danger btn-sm vendor-reject-btn" data-index="${idx}">不通過</button>
                </td>
            </tr>
        `;
    });
}

// 圖片預覽功能
window.showPreviewImage = function(imgUrl) {
    const modal = document.getElementById('imagePreviewModal');
    if (modal) {
        document.getElementById('previewImage').src = imgUrl;
        const bsModal = bootstrap.Modal.getOrCreateInstance(modal);
        bsModal.show();
    }
};

// 輪播 modal
window.showImageGalleryModal = function(rowIndex) {
    const row = state.data[rowIndex];
    let imagesArr = [];
    let modalTitle = '圖片瀏覽';
    
    // 處理新的圖片資料結構
    if (row.uploadedImages && row.uploadedImages.length > 0) {
        imagesArr = row.uploadedImages.map(img => ({
            src: img.src,
            name: img.name
        }));
        modalTitle = `圖片瀏覽 (${imagesArr.length} 張)`;
    } else if (row.images) {
        imagesArr = Object.values(row.images).filter(img => img).map(img => ({
            src: img,
            name: '圖片'
        }));
        modalTitle = `圖片瀏覽 (${imagesArr.length} 張)`;
    }
    
    if (imagesArr.length === 0) {
        showToast('沒有圖片可瀏覽');
        return;
    }
    
    const modalHtml = `
        <div class="modal fade" id="galleryModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${modalTitle}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                ${imagesArr.map((img, i) => `
                                    <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="${i}" 
                                            class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}" 
                                            aria-label="Slide ${i + 1}"></button>
                                `).join('')}
                            </div>
                            <div class="carousel-inner">
                                ${imagesArr.map((img, i) => `
                                    <div class="carousel-item${i === 0 ? ' active' : ''}">
                                        <div class="text-center mb-3">
                                            <h6 class="text-dark fw-bold">${img.name}</h6>
                                        </div>
                                        <img src="${img.src}" class="d-block w-100" style="max-height:400px;object-fit:contain;" alt="${img.name}">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    // 移除舊 modal
    const old = document.getElementById('galleryModal');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
};

// 假資料 for 承辦地磁列表
const adminAnomalyList = [
    {
        roadName: '中山路',
        section: 'A1-北段~A1-南段',
        code: 'A1-001',
        reason: '磁場波動',
        status: '待確認',
        vendorReason: '感測器異常',
        note: '需要進一步檢測',
        reviewStatus: '通過',
        images: {
            'with-car': 'https://via.placeholder.com/60x60?text=有車',
            'without-car': 'https://via.placeholder.com/60x60?text=無車',
            'with-car-app': 'https://via.placeholder.com/60x60?text=有車+APP',
            'without-car-app': 'https://via.placeholder.com/60x60?text=無車+APP'
        }
    },
    {
        roadName: '民生路',
        section: 'B2-北段~B2-南段',
        code: 'B2-002',
        reason: '設備故障',
        status: '已處理',
        vendorReason: '電池電壓低',
        note: '已更換感測器',
        reviewStatus: '不通過',
        images: {
            'with-car': 'https://via.placeholder.com/60x60?text=有車',
            'without-car': null,
            'with-car-app': 'https://via.placeholder.com/60x60?text=有車+APP',
            'without-car-app': null
        }
    },
    {
        roadName: '中正路',
        section: 'C3-東段~C3-西段',
        code: 'C3-003',
        reason: '訊號干擾',
        status: '待確認',
        vendorReason: '環境電磁干擾',
        note: '需重新檢測訊號強度',
        reviewStatus: null, // 未審核
        images: {
            'with-car': 'https://via.placeholder.com/60x60?text=有車',
            'without-car': 'https://via.placeholder.com/60x60?text=無車',
            'with-car-app': null,
            'without-car-app': null
        }
    },
    {
        roadName: '復興路',
        section: 'D4-南段~D4-北段',
        code: 'D4-004',
        reason: '硬體損壞',
        status: '已修復',
        vendorReason: '感測器老化',
        note: '已更換新感測器',
        reviewStatus: '通過',
        images: {
            'with-car': null,
            'without-car': 'https://via.placeholder.com/60x60?text=無車',
            'with-car-app': null,
            'without-car-app': 'https://via.placeholder.com/60x60?text=無車+APP'
        }
    }
];

function renderAdminAnomalyTable() {
    const tbody = document.getElementById('adminAnomalyTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    adminAnomalyList.forEach((row, idx) => {
        const imagesArr = row.images ? Object.values(row.images).filter(img => img) : [];
        const imgCount = imagesArr.length;
        const imgHtml = imgCount > 0
            ? `<a href="#" class="admin-image-count-link" data-index="${idx}">${imgCount} 張</a>`
            : '無圖片';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="form-check-input admin-row-checkbox" data-index="${idx}"></td>
            <td>${row.roadName || ''}</td>
            <td>${row.section || ''}</td>
            <td>${row.code || ''}</td>
            <td>${row.reason || ''}</td>
            <td>${row.status || ''}</td>
            <td>${row.vendorReason || ''}</td>
            <td>${imgHtml}</td>
            <td>${row.note || ''}</td>
            <td>${row.reviewStatus ? `<span class="badge ${row.reviewStatus === '通過' ? 'bg-success' : 'bg-danger'}">${row.reviewStatus}</span>` : '<span class="text-muted">未審核</span>'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary admin-review-btn" data-index="${idx}">審核</button>
                <button class="btn btn-sm btn-outline-info admin-notify-btn" data-index="${idx}">通知上傳</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    // 綁定圖片數量點擊事件，彈出 modal 輪播
    document.querySelectorAll('.admin-image-count-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const idx = parseInt(this.dataset.index);
            showAdminImageGalleryModal(idx);
        });
    });
}

window.showAdminImageGalleryModal = function(rowIndex) {
    const row = adminAnomalyList[rowIndex];
    const imagesArr = row.images ? Object.values(row.images).filter(img => img) : [];
    const modalHtml = `
        <div class="modal fade" id="adminGalleryModal" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">圖片瀏覽 (${imagesArr.length} 張)</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div id="adminGalleryCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${imagesArr.map((img, i) => `
                                    <div class="carousel-item${i === 0 ? ' active' : ''}">
                                        <img src="${img}" class="d-block w-100" style="max-height:500px;object-fit:contain;">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#adminGalleryCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#adminGalleryCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    // 移除舊 modal
    const old = document.getElementById('adminGalleryModal');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('adminGalleryModal'));
    modal.show();
};

function showMain(role) {
    const loginPage = document.getElementById('loginPage');
    if (loginPage) loginPage.remove(); // 直接移除登入頁
    document.getElementById('mainApp').style.display = 'block';
    document.getElementById('adminVendorPanel').style.display = 'none';
    if (role === 'admin') {
        document.querySelector('.container-fluid').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        renderAdminAnomalyTable(); // 承辦登入時渲染地磁列表
    } else {
        document.querySelector('.container-fluid').style.display = 'block';
        document.getElementById('adminPanel').style.display = 'none';
        initializeTable(); // 只在業者登入時初始化表格
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始化 DOM 元素
    tableBody = document.getElementById('anomalyTableBody');
    selectAllCheckbox = document.getElementById('selectAll');
    batchEditBtn = document.getElementById('batchEditBtn');
    selectedCountSpan = document.getElementById('selectedCount');
    batchEditModal = new bootstrap.Modal(document.getElementById('batchEditModal'));
    singleEditModal = new bootstrap.Modal(document.getElementById('singleEditModal'));
    imagePreviewModal = new bootstrap.Modal(document.getElementById('imagePreviewModal'));
    
    showLogin();
    document.getElementById('loginBtn').addEventListener('click', function() {
        const acc = document.getElementById('loginAccount').value.trim();
        const pwd = document.getElementById('loginPassword').value.trim();
        const err = document.getElementById('loginError');
        if (acc === 'admin' && pwd === 'admin') {
            showMain('admin');
        } else if (acc === 'idiot' && pwd === 'idiot') {
            showMain('user');
        } else {
            err.textContent = '帳號或密碼錯誤';
            err.style.display = 'block';
        }
    });
    // 支援 Enter 快速登入
    document.getElementById('loginPassword').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') document.getElementById('loginBtn').click();
    });

    // 單一圖片上傳預覽（帶名稱）
    window.uploadedImages = [];
    const singleImageInput = document.getElementById('singleImageUpload');
    const singleImageName = document.getElementById('singleImageName');
    const singleImagePreview = document.getElementById('singleImagePreview');
    const addImageBtn = document.getElementById('addImageBtn');
    
    if (singleImageInput && singleImageName && singleImagePreview && addImageBtn) {
        // 新增圖片按鈕事件
        addImageBtn.addEventListener('click', function() {
            const file = singleImageInput.files[0];
            const imageName = singleImageName.value.trim();
            
            if (!file) {
                showToast('請選擇圖片檔案');
                return;
            }
            
            if (!imageName) {
                showToast('請輸入圖片名稱');
                return;
            }
            
            if (window.uploadedImages.length >= 15) {
                showToast('最多只能上傳 15 張圖片');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = {
                    file: file,
                    name: imageName,
                    src: e.target.result
                };
                window.uploadedImages.push(imageData);
                renderImagePreview();
                
                // 清空輸入欄位
                singleImageInput.value = '';
                singleImageName.value = '';
            };
            reader.readAsDataURL(file);
        });
        
        // 渲染圖片預覽
        function renderImagePreview() {
            singleImagePreview.innerHTML = '';
            window.uploadedImages.forEach((imageData, index) => {
                const imageContainer = document.createElement('div');
                imageContainer.className = 'position-relative d-inline-block m-2';
                imageContainer.innerHTML = `
                    <img src="${imageData.src}" class="img-thumbnail" style="max-width: 120px; max-height: 120px;" alt="${imageData.name}">
                    <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1" style="font-size: 0.75rem;">${imageData.name}</div>
                    <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0" onclick="removeImage(${index})" style="font-size: 0.5rem;">×</button>
                `;
                singleImagePreview.appendChild(imageContainer);
            });
        }
        
        // 移除圖片函數（設為全域函數）
        window.removeImage = function(index) {
            window.uploadedImages.splice(index, 1);
            renderImagePreview();
        };
    }

    // 承辦地磁列表審核按鈕事件
    let currentAdminReviewIndex = null;
    document.getElementById('adminAnomalyTableBody').addEventListener('click', function(e) {
        if (e.target.classList.contains('admin-review-btn')) {
            currentAdminReviewIndex = parseInt(e.target.dataset.index);
            document.getElementById('adminReviewStatus').value = '通過';
            document.getElementById('adminReviewNote').value = '';
            const modal = new bootstrap.Modal(document.getElementById('adminReviewModal'));
            modal.show();
        }
    });
    // 審核確認按鈕
    document.getElementById('adminReviewConfirm').addEventListener('click', function() {
        const status = document.getElementById('adminReviewStatus').value;
        const note = document.getElementById('adminReviewNote').value;
        // 這裡可進行資料更新或送出
        // 例如 adminAnomalyList[currentAdminReviewIndex].reviewStatus = status;
        // adminAnomalyList[currentAdminReviewIndex].reviewNote = note;
        bootstrap.Modal.getInstance(document.getElementById('adminReviewModal')).hide();
        showToast('審核完成');
        // 若需即時刷新表格可呼叫 renderAdminAnomalyTable();
    });
    // 返回地磁列表
    document.getElementById('backToAdminList').addEventListener('click', function() {
        document.getElementById('adminVendorPanel').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
    });

    // 操作欄位通知廠商上傳圖片按鈕
    document.getElementById('adminAnomalyTableBody').addEventListener('click', function(e) {
        if (e.target.classList.contains('admin-notify-btn')) {
            showToast('已通知廠商上傳圖片');
        }
    });
    
    // 承辦批量審核功能
    const adminSelectAll = document.getElementById('adminSelectAll');
    const adminBatchReviewBtn = document.getElementById('adminBatchReviewBtn');
    const adminSelectedCount = document.getElementById('adminSelectedCount');
    
    if (adminSelectAll && adminBatchReviewBtn && adminSelectedCount) {
        // 全選 checkbox
        adminSelectAll.addEventListener('change', function(e) {
            const checkboxes = document.querySelectorAll('.admin-row-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = e.target.checked;
                const index = parseInt(checkbox.dataset.index);
                if (e.target.checked) {
                    adminState.selectedRows.add(index);
                } else {
                    adminState.selectedRows.delete(index);
                }
            });
            updateAdminUI();
        });
        
        // 個別 checkbox
        document.getElementById('adminAnomalyTableBody').addEventListener('change', function(e) {
            if (e.target.classList.contains('admin-row-checkbox')) {
                const index = parseInt(e.target.dataset.index);
                if (e.target.checked) {
                    adminState.selectedRows.add(index);
                } else {
                    adminState.selectedRows.delete(index);
                }
                updateAdminUI();
            }
        });
        
        // 批量審核按鈕
        adminBatchReviewBtn.addEventListener('click', function() {
            if (adminState.selectedRows.size === 0) {
                showToast('請選擇要審核的項目');
                return;
            }
            
            document.getElementById('batchReviewCount').textContent = adminState.selectedRows.size;
            document.getElementById('adminBatchReviewStatus').value = '通過';
            document.getElementById('adminBatchReviewNote').value = '';
            
            const modal = new bootstrap.Modal(document.getElementById('adminBatchReviewModal'));
            modal.show();
        });
        
        // 批量審核確認
        document.getElementById('adminBatchReviewConfirm').addEventListener('click', function() {
            const status = document.getElementById('adminBatchReviewStatus').value;
            const note = document.getElementById('adminBatchReviewNote').value;
            
            // 批量更新選中的項目
            adminState.selectedRows.forEach(index => {
                if (adminAnomalyList[index]) {
                    adminAnomalyList[index].reviewStatus = status;
                    adminAnomalyList[index].reviewNote = note;
                }
            });
            
            // 關閉模態框
            bootstrap.Modal.getInstance(document.getElementById('adminBatchReviewModal')).hide();
            showToast(`已批量審核 ${adminState.selectedRows.size} 筆資料`);
            
            // 清空選擇
            adminState.selectedRows.clear();
            updateAdminUI();
            
            // 重新渲染表格
            renderAdminAnomalyTable();
        });
        
        // 更新承辦 UI
        function updateAdminUI() {
            adminBatchReviewBtn.disabled = adminState.selectedRows.size === 0;
            adminSelectedCount.textContent = `已選擇 ${adminState.selectedRows.size} 筆`;
            adminSelectAll.checked = adminState.selectedRows.size === adminAnomalyList.length;
        }
    }
}); 