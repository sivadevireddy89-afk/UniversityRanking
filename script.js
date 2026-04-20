// TRKM University Data - 6 Pillars Methodology
// Academic Excellence (20%), Research & Innovation (20%), Employability (20%)
// Global Engagement (15%), Social Impact (15%), Digital Readiness (10%)
const universities = [
    { rank: 1, name: "Massachusetts Institute of Technology", country: "USA", region: "north-america", countryCode: "us", score: 100, academic: 100, research: 100, employability: 98, global: 95, impact: 92, digital: 98, students: 11500, faculty: 1300 },
    { rank: 2, name: "Stanford University", country: "USA", region: "north-america", countryCode: "us", score: 98.2, academic: 98, research: 97, employability: 99, global: 88, impact: 94, digital: 97, students: 16000, faculty: 1100 },
    { rank: 3, name: "Imperial College London", country: "UK", region: "europe", countryCode: "gb", score: 97.5, academic: 96, research: 95, employability: 97, global: 98, impact: 93, digital: 95, students: 21000, faculty: 1800 },
    { rank: 4, name: "University of Oxford", country: "UK", region: "europe", countryCode: "gb", score: 97.1, academic: 99, research: 98, employability: 96, global: 97, impact: 95, digital: 90, students: 26000, faculty: 1900 },
    { rank: 5, name: "University of Cambridge", country: "UK", region: "europe", countryCode: "gb", score: 96.8, academic: 98, research: 97, employability: 95, global: 96, impact: 94, digital: 89, students: 24000, faculty: 1800 },
    { rank: 6, name: "Harvard University", country: "USA", region: "north-america", countryCode: "us", score: 96.5, academic: 99, research: 98, employability: 97, global: 85, impact: 96, digital: 88, students: 36000, faculty: 2400 },
    { rank: 7, name: "California Institute of Technology", country: "USA", region: "north-america", countryCode: "us", score: 95.2, academic: 97, research: 96, employability: 94, global: 82, impact: 91, digital: 95, students: 2300, faculty: 360 },
    { rank: 8, name: "ETH Zurich", country: "Switzerland", region: "europe", countryCode: "ch", score: 94.8, academic: 95, research: 94, employability: 93, global: 99, impact: 89, digital: 96, students: 24000, faculty: 1400 },
    { rank: 9, name: "National University of Singapore", country: "Singapore", region: "asia", countryCode: "sg", score: 94.1, academic: 94, research: 93, employability: 95, global: 97, impact: 88, digital: 94, students: 43000, faculty: 2900 },
    { rank: 10, name: "University College London", country: "UK", region: "europe", countryCode: "gb", score: 93.5, academic: 93, research: 92, employability: 94, global: 98, impact: 90, digital: 92, students: 46000, faculty: 2900 },
    { rank: 11, name: "Carnegie Mellon University", country: "USA", region: "north-america", countryCode: "us", score: 92.8, academic: 92, research: 91, employability: 96, global: 87, impact: 89, digital: 99, students: 15000, faculty: 1500 },
    { rank: 12, name: "University of Toronto", country: "Canada", region: "north-america", countryCode: "ca", score: 92.2, academic: 91, research: 90, employability: 93, global: 95, impact: 92, digital: 91, students: 97000, faculty: 5200 },
    { rank: 13, name: "University of Edinburgh", country: "UK", region: "europe", countryCode: "gb", score: 91.8, academic: 90, research: 89, employability: 91, global: 96, impact: 94, digital: 90, students: 43000, faculty: 3000 },
    { rank: 14, name: "Tsinghua University", country: "China", region: "asia", countryCode: "cn", score: 91.5, academic: 93, research: 91, employability: 89, global: 85, impact: 90, digital: 96, students: 50000, faculty: 3500 },
    { rank: 15, name: "Nanyang Technological University", country: "Singapore", region: "asia", countryCode: "sg", score: 91.1, academic: 89, research: 88, employability: 92, global: 98, impact: 87, digital: 97, students: 33000, faculty: 1800 },
    { rank: 16, name: "University of Melbourne", country: "Australia", region: "oceania", countryCode: "au", score: 90.8, academic: 88, research: 87, employability: 90, global: 94, impact: 93, digital: 89, students: 72000, faculty: 3500 },
    { rank: 17, name: "Georgia Institute of Technology", country: "USA", region: "north-america", countryCode: "us", score: 90.2, academic: 90, research: 89, employability: 95, global: 84, impact: 88, digital: 97, students: 40000, faculty: 2100 },
    { rank: 18, name: "University of California, Berkeley", country: "USA", region: "north-america", countryCode: "us", score: 89.8, academic: 91, research: 92, employability: 88, global: 83, impact: 95, digital: 90, students: 45000, faculty: 1800 },
    { rank: 19, name: "Technical University of Munich", country: "Germany", region: "europe", countryCode: "de", score: 89.5, academic: 87, research: 88, employability: 91, global: 93, impact: 90, digital: 93, students: 48000, faculty: 3200 },
    { rank: 20, name: "University of Hong Kong", country: "Hong Kong", region: "asia", countryCode: "hk", score: 89.1, academic: 86, research: 85, employability: 90, global: 96, impact: 88, digital: 91, students: 30000, faculty: 2400 },
    { rank: 21, name: "Peking University", country: "China", region: "asia", countryCode: "cn", score: 88.8, academic: 90, research: 87, employability: 86, global: 82, impact: 89, digital: 89, students: 46000, faculty: 3200 },
    { rank: 22, name: "University of Sydney", country: "Australia", region: "oceania", countryCode: "au", score: 88.4, academic: 85, research: 84, employability: 89, global: 93, impact: 91, digital: 88, students: 74000, faculty: 3600 },
    { rank: 23, name: "Princeton University", country: "USA", region: "north-america", countryCode: "us", score: 88.1, academic: 89, research: 90, employability: 87, global: 81, impact: 92, digital: 87, students: 8200, faculty: 940 },
    { rank: 24, name: "Delft University of Technology", country: "Netherlands", region: "europe", countryCode: "nl", score: 87.8, academic: 86, research: 87, employability: 88, global: 94, impact: 89, digital: 94, students: 27000, faculty: 2000 },
    { rank: 25, name: "University of British Columbia", country: "Canada", region: "north-america", countryCode: "ca", score: 87.5, academic: 84, research: 83, employability: 87, global: 92, impact: 93, digital: 88, students: 72000, faculty: 5500 }
];

// State
let currentPage = 1;
const itemsPerPage = 25;
let filteredUniversities = [...universities];
let compareList = [];
let currentView = 'table';

// DOM Elements
const rankingsBody = document.getElementById('rankingsBody');
const rankingsCards = document.getElementById('rankingsCards');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const countryFilter = document.getElementById('countryFilter');
const sortBy = document.getElementById('sortBy');
const currentPageEl = document.getElementById('currentPage');
const totalPagesEl = document.getElementById('totalPages');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const universityModal = document.getElementById('universityModal');
const modalContent = document.getElementById('modalContent');
const compareDrawer = document.getElementById('compareDrawer');
const compareUniversities = document.getElementById('compareUniversities');
const compareBtn = document.getElementById('compareBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRankings();
    setupEventListeners();
    updatePagination();
});

// Render Rankings
function renderRankings() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredUniversities.slice(startIndex, endIndex);
    
    if (currentView === 'table') {
        renderTable(pageData);
    } else {
        renderCards(pageData);
    }
}

// Render Table View
function renderTable(data) {
    rankingsBody.innerHTML = data.map(uni => `
        <tr onclick="openUniversityModal(${uni.rank})">
            <td class="rank-cell ${uni.rank <= 10 ? 'top-10' : ''}">${uni.rank}</td>
            <td class="university-cell">
                <div class="university-logo">${uni.name.charAt(0)}</div>
                <div class="university-info">
                    <h3>${uni.name}</h3>
                    <span>${uni.students.toLocaleString()} students • ${uni.faculty.toLocaleString()} faculty</span>
                </div>
            </td>
            <td class="country-cell">
                <img src="https://flagcdn.com/w40/${uni.countryCode}.png" alt="${uni.country}" class="country-flag-img">
                <span class="country-name">${uni.country}</span>
            </td>
            <td class="score-cell">
                ${uni.score}
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${uni.score}%"></div>
                </div>
            </td>
            <td class="metric-cell ${getMetricClass(uni.academic)}">${uni.academic}</td>
            <td class="metric-cell ${getMetricClass(uni.research)}">${uni.research}</td>
            <td class="metric-cell ${getMetricClass(uni.employability)}">${uni.employability}</td>
            <td class="metric-cell ${getMetricClass(uni.global)}">${uni.global}</td>
            <td class="metric-cell ${getMetricClass(uni.impact)}">${uni.impact}</td>
            <td class="metric-cell ${getMetricClass(uni.digital)}">${uni.digital}</td>
            <td>
                <button class="compare-btn ${isInCompareList(uni.rank) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleCompare(${uni.rank})"
                        title="Add to compare">
                    ⚖️
                </button>
            </td>
        </tr>
    `).join('');
}

// Render Cards View
function renderCards(data) {
    rankingsCards.innerHTML = data.map(uni => `
        <div class="university-card" onclick="openUniversityModal(${uni.rank})">
            <div class="card-header">
                <div class="card-rank ${uni.rank <= 10 ? 'top' : ''}">${uni.rank}</div>
                <div class="card-logo">
                    <img src="https://flagcdn.com/w40/${uni.countryCode}.png" alt="${uni.country}" style="width: 40px; height: 28px; border-radius: 3px; object-fit: cover;">
                </div>
                <div class="card-title">
                    <h3>${uni.name}</h3>
                    <span>${uni.country} • ${uni.students.toLocaleString()} students</span>
                </div>
            </div>
            <div class="card-score">
                <div class="card-score-value">${uni.score}</div>
                <div class="card-score-label">Overall Score</div>
            </div>
            <div class="card-metrics">
                <div class="card-metric">
                    <div class="card-metric-value">${uni.academic}</div>
                    <div class="card-metric-label">Academic</div>
                </div>
                <div class="card-metric">
                    <div class="card-metric-value">${uni.research}</div>
                    <div class="card-metric-label">Research</div>
                </div>
                <div class="card-metric">
                    <div class="card-metric-value">${uni.employability}</div>
                    <div class="card-metric-label">Employability</div>
                </div>
                <div class="card-metric">
                    <div class="card-metric-value">${uni.global}</div>
                    <div class="card-metric-label">Global</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Helper Functions
function getMetricClass(value) {
    if (value >= 90) return 'high';
    if (value >= 70) return 'medium';
    return 'low';
}

function isInCompareList(rank) {
    return compareList.some(uni => uni.rank === rank);
}

// Toggle Compare
function toggleCompare(rank) {
    const uni = universities.find(u => u.rank === rank);
    const index = compareList.findIndex(u => u.rank === rank);
    
    if (index > -1) {
        compareList.splice(index, 1);
    } else {
        if (compareList.length >= 4) {
            alert('You can compare up to 4 universities at a time.');
            return;
        }
        compareList.push(uni);
    }
    
    updateCompareDrawer();
    renderRankings();
}

// Update Compare Drawer
function updateCompareDrawer() {
    compareUniversities.innerHTML = compareList.map(uni => `
        <div class="compare-item">
            <div class="compare-item-logo">${uni.countryCode}</div>
            <div class="compare-item-info">
                <h4>${uni.name}</h4>
                <span>Rank #${uni.rank}</span>
            </div>
            <button class="compare-item-remove" onclick="toggleCompare(${uni.rank})">×</button>
        </div>
    `).join('');
    
    if (compareList.length > 0) {
        compareDrawer.classList.add('active');
    }
}

// Open University Modal
function openUniversityModal(rank) {
    const uni = universities.find(u => u.rank === rank);
    
    modalContent.innerHTML = `
        <div class="university-detail">
            <div class="detail-header">
                <div class="detail-rank">#${uni.rank}</div>
                <div class="detail-info">
                    <h2>${uni.name}</h2>
                    <span class="detail-country">${uni.countryCode} ${uni.country}</span>
                </div>
            </div>
            
            <div class="detail-score-section">
                <div class="detail-overall-score">
                    <span class="score-value">${uni.score}</span>
                    <span class="score-label">Overall Score</span>
                </div>
            </div>
            
            <div class="detail-metrics">
                <h3>TRKM Performance Indicators</h3>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <span class="metric-name">Academic Excellence (20%)</span>
                        <span class="metric-score">${uni.academic}</span>
                        <div class="metric-bar"><div style="width: ${uni.academic}%"></div></div>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Research & Innovation (20%)</span>
                        <span class="metric-score">${uni.research}</span>
                        <div class="metric-bar"><div style="width: ${uni.research}%"></div></div>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Employability (20%)</span>
                        <span class="metric-score">${uni.employability}</span>
                        <div class="metric-bar"><div style="width: ${uni.employability}%"></div></div>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Global Engagement (15%)</span>
                        <span class="metric-score">${uni.global}</span>
                        <div class="metric-bar"><div style="width: ${uni.global}%"></div></div>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Social Impact (15%)</span>
                        <span class="metric-score">${uni.impact}</span>
                        <div class="metric-bar"><div style="width: ${uni.impact}%"></div></div>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Digital Readiness (10%)</span>
                        <span class="metric-score">${uni.digital}</span>
                        <div class="metric-bar"><div style="width: ${uni.digital}%"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="detail-stats">
                <h3>University Statistics</h3>
                <div class="stats-row">
                    <div class="stat-item">
                        <span class="stat-value">${uni.students.toLocaleString()}</span>
                        <span class="stat-label">Total Students</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${uni.faculty.toLocaleString()}</span>
                        <span class="stat-label">Faculty Members</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${Math.round(uni.students / uni.faculty)}:1</span>
                        <span class="stat-label">Student/Faculty Ratio</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="btn btn-primary" onclick="toggleCompare(${uni.rank}); closeUniversityModal();">
                    ${isInCompareList(uni.rank) ? 'Remove from Compare' : 'Add to Compare'}
                </button>
                <button class="btn btn-outline" onclick="closeUniversityModal()">Close</button>
            </div>
        </div>
    `;
    
    universityModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close University Modal
function closeUniversityModal() {
    universityModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        filterUniversities();
    });
    
    // Filters
    regionFilter.addEventListener('change', filterUniversities);
    countryFilter.addEventListener('change', filterUniversities);
    sortBy.addEventListener('change', () => {
        sortUniversities();
        renderRankings();
    });
    
    // View Toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            
            if (currentView === 'table') {
                document.getElementById('rankingsTable').style.display = 'table';
                rankingsCards.style.display = 'none';
            } else {
                document.getElementById('rankingsTable').style.display = 'none';
                rankingsCards.style.display = 'grid';
            }
            
            renderRankings();
        });
    });
    
    // Pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderRankings();
            updatePagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderRankings();
            updatePagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Modal Close
    document.getElementById('modalClose').addEventListener('click', closeUniversityModal);
    universityModal.addEventListener('click', (e) => {
        if (e.target === universityModal) closeUniversityModal();
    });
    
    // Compare Drawer
    document.getElementById('compareClose').addEventListener('click', () => {
        compareDrawer.classList.remove('active');
    });
    
    compareBtn.addEventListener('click', () => {
        if (compareList.length < 2) {
            alert('Please select at least 2 universities to compare.');
            return;
        }
        alert(`Comparing ${compareList.length} universities. Feature coming soon!`);
    });
    
    // Mobile Menu - MEplace Style
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuClose = document.getElementById('menuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        menuToggle.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }

    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    menuClose.addEventListener('click', closeMobileMenu);

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Back to Top Button & Scroll Progress
    const backToTopBtn = document.getElementById('backToTop');
    const navProgressBar = document.getElementById('navProgressBar');
    
    // Scroll Spy - Highlight nav based on current section
    const sections = [
        { id: 'rankings', nav: 'Rankings' },
        { id: 'methodology', nav: 'Methodology' },
        { id: 'why-trkm', nav: 'Why TRKM' },
        { id: 'compare', nav: 'Compare' },
        { id: 'about', nav: 'About' },
        { id: 'learning-hub', nav: 'Learning Hub' }
    ];

    function updateActiveNav() {
        const scrollPos = window.scrollY + 150; // Offset for header

        sections.forEach((section, index) => {
            const el = document.getElementById(section.id) || (index === 0 ? document.querySelector('.hero-slider') : null);
            if (el) {
                const top = el.offsetTop;
                const bottom = top + el.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    // Remove active from all nav links
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        link.removeAttribute('aria-current');
                    });
                    // Add active to current section's nav link
                    const activeLink = Array.from(document.querySelectorAll('.nav-link')).find(
                        link => {
                            const textSpan = link.querySelector('.nav-text');
                            return textSpan && textSpan.textContent.trim() === section.nav;
                        }
                    );
                    if (activeLink) {
                        activeLink.classList.add('active');
                        activeLink.setAttribute('aria-current', 'page');
                    }
                }
            }
        });
    }

    window.addEventListener('scroll', () => {
        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Update nav progress bar
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (navProgressBar) {
            navProgressBar.style.width = scrollPercent + '%';
        }

        // Update active nav based on scroll position
        updateActiveNav();
    });

    // Initial check on load
    updateActiveNav();
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    prevBtn.addEventListener('click', () => {
        const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        showSlide(newIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-rotate slides every 5 seconds
    setInterval(() => {
        const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        showSlide(newIndex);
    }, 5000);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeUniversityModal();
            compareDrawer.classList.remove('active');
        }
    });
}

// Filter Universities
function filterUniversities() {
    const searchTerm = searchInput.value.toLowerCase();
    const region = regionFilter.value;
    const country = countryFilter.value;
    
    filteredUniversities = universities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm) ||
                            uni.country.toLowerCase().includes(searchTerm);
        const matchesRegion = region === 'all' || uni.region === region;
        const matchesCountry = country === 'all' || 
                              uni.country.toLowerCase().replace(/\s+/g, '-') === country;
        
        return matchesSearch && matchesRegion && matchesCountry;
    });
    
    sortUniversities();
    currentPage = 1;
    renderRankings();
    updatePagination();
}

// Sort Universities
function sortUniversities() {
    const sortValue = sortBy.value;
    
    filteredUniversities.sort((a, b) => {
        switch(sortValue) {
            case 'rank': return a.rank - b.rank;
            case 'academic': return b.academic - a.academic;
            case 'research': return b.research - a.research;
            case 'employability': return b.employability - a.employability;
            case 'global': return b.global - a.global;
            case 'impact': return b.impact - a.impact;
            case 'digital': return b.digital - a.digital;
            default: return a.rank - b.rank;
        }
    });
}

// Update Pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
    currentPageEl.textContent = currentPage;
    totalPagesEl.textContent = totalPages;
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Compare Section Functionality
let compareSlotA = null;
let compareSlotB = null;
let activeSlot = null;

function initCompareSection() {
    const addButtons = document.querySelectorAll('.compare-placeholder .btn');
    addButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => openUniversitySelector(index));
    });
}

function openUniversitySelector(slotIndex) {
    activeSlot = slotIndex;
    
    // Create modal if doesn't exist
    let modal = document.getElementById('universitySelectorModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'universitySelectorModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal modal-medium">
                <button class="modal-close" onclick="closeUniversitySelector()">&times;</button>
                <div class="modal-content">
                    <h3>Select University</h3>
                    <div class="search-box" style="margin: 1rem 0;">
                        <input type="text" id="compareSearchInput" placeholder="Search universities..." class="filter-select" style="width: 100%;">
                    </div>
                    <div class="university-list" id="universityList" style="max-height: 400px; overflow-y: auto;">
                        <!-- Universities populated here -->
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add search functionality
        document.getElementById('compareSearchInput').addEventListener('input', filterUniversityList);
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    renderUniversityList(universities);
}

function closeUniversitySelector() {
    const modal = document.getElementById('universitySelectorModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    activeSlot = null;
}

function renderUniversityList(data) {
    const list = document.getElementById('universityList');
    list.innerHTML = data.map(uni => `
        <div class="university-list-item" onclick="selectUniversityForCompare(${uni.rank})" style="
            padding: 1rem;
            border-bottom: 1px solid var(--gray-100);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: background-color 0.2s;
        " onmouseover="this.style.backgroundColor='var(--gray-50)'" onmouseout="this.style.backgroundColor=''">
            <span class="rank-badge" style="
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: ${uni.rank <= 10 ? 'var(--accent)' : 'var(--gray-200)'};
                color: ${uni.rank <= 10 ? 'white' : 'var(--gray-700)'};
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                font-size: 0.875rem;
            ">${uni.rank}</span>
            <div>
                <div style="font-weight: 600; color: var(--gray-900);">${uni.name}</div>
                <div style="font-size: 0.875rem; color: var(--gray-600);">${uni.country} • Score: ${uni.score}</div>
            </div>
        </div>
    `).join('');
}

function filterUniversityList() {
    const searchTerm = document.getElementById('compareSearchInput').value.toLowerCase();
    const filtered = universities.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm) ||
        uni.country.toLowerCase().includes(searchTerm)
    );
    renderUniversityList(filtered);
}

function selectUniversityForCompare(rank) {
    const uni = universities.find(u => u.rank === rank);
    if (!uni || activeSlot === null) return;
    
    if (activeSlot === 0) {
        compareSlotA = uni;
    } else {
        compareSlotB = uni;
    }
    
    updateCompareDisplay();
    closeUniversitySelector();
}

function updateCompareDisplay() {
    const slots = document.querySelectorAll('.compare-slot');
    
    // Update Slot A
    if (compareSlotA) {
        slots[0].innerHTML = `
            <div class="compare-selected" style="
                background: white;
                border-radius: var(--radius-lg);
                padding: 1.5rem;
                box-shadow: var(--shadow-sm);
                position: relative;
            ">
                <button onclick="clearCompareSlot(0)" style="
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    background: none;
                    border: none;
                    font-size: 1.25rem;
                    cursor: pointer;
                    color: var(--gray-400);
                ">&times;</button>
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                    <span class="rank-badge" style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: ${compareSlotA.rank <= 10 ? 'var(--accent)' : 'var(--gray-200)'};
                        color: ${compareSlotA.rank <= 10 ? 'white' : 'var(--gray-700)'};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                        font-size: 0.875rem;
                    ">${compareSlotA.rank}</span>
                    <h4 style="margin: 0; font-size: 1rem; color: var(--gray-900);">${compareSlotA.name}</h4>
                </div>
                <p style="margin: 0; font-size: 0.875rem; color: var(--gray-600);">${compareSlotA.country}</p>
            </div>
        `;
    }
    
    // Update Slot B
    if (compareSlotB) {
        slots[1].innerHTML = `
            <div class="compare-selected" style="
                background: white;
                border-radius: var(--radius-lg);
                padding: 1.5rem;
                box-shadow: var(--shadow-sm);
                position: relative;
            ">
                <button onclick="clearCompareSlot(1)" style="
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    background: none;
                    border: none;
                    font-size: 1.25rem;
                    cursor: pointer;
                    color: var(--gray-400);
                ">&times;</button>
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                    <span class="rank-badge" style="
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: ${compareSlotB.rank <= 10 ? 'var(--accent)' : 'var(--gray-200)'};
                        color: ${compareSlotB.rank <= 10 ? 'white' : 'var(--gray-700)'};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                        font-size: 0.875rem;
                    ">${compareSlotB.rank}</span>
                    <h4 style="margin: 0; font-size: 1rem; color: var(--gray-900);">${compareSlotB.name}</h4>
                </div>
                <p style="margin: 0; font-size: 0.875rem; color: var(--gray-600);">${compareSlotB.country}</p>
            </div>
        `;
    }
    
    // Update comparison table
    updateCompareTable();
}

function clearCompareSlot(slotIndex) {
    if (slotIndex === 0) {
        compareSlotA = null;
    } else {
        compareSlotB = null;
    }
    
    const slots = document.querySelectorAll('.compare-slot');
    slots[slotIndex].innerHTML = `
        <div class="compare-placeholder">
            <span class="compare-icon">🔍</span>
            <p>Search and select ${slotIndex === 0 ? 'first' : 'second'} university</p>
            <button class="btn btn-outline" onclick="openUniversitySelector(${slotIndex})">Add University</button>
        </div>
    `;
    
    updateCompareTable();
}

function updateCompareTable() {
    const uniA = compareSlotA;
    const uniB = compareSlotB;
    
    // Update headers
    const uniAHeader = document.querySelector('.feature-header .feature-uni-a');
    const uniBHeader = document.querySelector('.feature-header .feature-uni-b');
    
    if (uniAHeader) uniAHeader.textContent = uniA ? uniA.name : 'University A';
    if (uniBHeader) uniBHeader.textContent = uniB ? uniB.name : 'University B';
    
    // Update data rows
    const metrics = [
        { key: 'rank', label: 'Overall Rank' },
        { key: 'score', label: 'Overall Score' },
        { key: 'academic', label: 'Academic Excellence' },
        { key: 'research', label: 'Research Impact' },
        { key: 'employability', label: 'Employability Score' },
        { key: 'global', label: 'Global Engagement' },
        { key: 'impact', label: 'Social Impact' },
        { key: 'digital', label: 'Digital Readiness' }
    ];
    
    const rows = document.querySelectorAll('.feature-row:not(.feature-header)');
    rows.forEach((row, index) => {
        const metric = metrics[index];
        if (!metric) return;
        
        const uniAValue = row.querySelector('.feature-uni-a');
        const uniBValue = row.querySelector('.feature-uni-b');
        
        if (uniAValue) {
            uniAValue.textContent = uniA ? (metric.key === 'rank' ? `#${uniA[metric.key]}` : uniA[metric.key]) : '-';
            uniAValue.style.color = uniA ? 'var(--gray-900)' : 'var(--gray-500)';
            uniAValue.style.fontWeight = uniA ? '600' : '500';
        }
        
        if (uniBValue) {
            uniBValue.textContent = uniB ? (metric.key === 'rank' ? `#${uniB[metric.key]}` : uniB[metric.key]) : '-';
            uniBValue.style.color = uniB ? 'var(--gray-900)' : 'var(--gray-500)';
            uniBValue.style.fontWeight = uniB ? '600' : '500';
        }
    });
}

// Initialize compare section on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initCompareSection();
});
