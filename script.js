/* ==============================
   DIGITAL CLOCK
============================== */

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

}

updateClock();

setInterval(updateClock, 1000);


/* ==============================
   SIDEBAR MOBILE
============================== */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", function() {

    sidebar.classList.toggle("open");

});


// Menutup sidebar setelah menu diklik
document.querySelectorAll(".menu-link").forEach(link => {

    link.addEventListener("click", function() {

        document.querySelectorAll(".menu-link").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        sidebar.classList.remove("open");

    });

});


/* ==============================
   SEARCH DEVICE
============================== */

const searchInput = document.getElementById("searchInput");

const statusFilter = document.getElementById("statusFilter");

const rows = document.querySelectorAll("#deviceTable tr");

const emptyMessage = document.getElementById("emptyMessage");


function filterDevices() {

    const searchValue = searchInput.value.toLowerCase();

    const selectedStatus = statusFilter.value;

    let visibleCount = 0;

    rows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        const deviceStatus = row.dataset.status;

        const matchSearch = rowText.includes(searchValue);

        const matchStatus =
            selectedStatus === "all" ||
            selectedStatus === deviceStatus;

        if (matchSearch && matchStatus) {

            row.style.display = "";

            visibleCount++;

        } else {

            row.style.display = "none";

        }

    });

    emptyMessage.style.display =
        visibleCount === 0 ? "block" : "none";

}


searchInput.addEventListener("input", filterDevices);

statusFilter.addEventListener("change", filterDevices);


/* ==============================
   DETAIL DEVICE MODAL
============================== */

const detailModal = document.getElementById("detailModal");


function showDetail(name, ip, status) {

    document.getElementById("detailName").textContent = name;

    document.getElementById("detailIP").textContent = ip;

    document.getElementById("detailStatus").textContent = status;

    detailModal.classList.add("show");

}


function closeModal() {

    detailModal.classList.remove("show");

}


// Tutup modal jika klik bagian luar
detailModal.addEventListener("click", function(event) {

    if (event.target === detailModal) {

        closeModal();

    }

});


// Tutup modal dengan tombol Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* ==============================
   TOAST NOTIFICATION
============================== */

let toastTimeout;

function showToast(message) {

    const toast = document.getElementById("toast");

    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(function() {

        toast.classList.remove("show");

    }, 3000);

}


/* ==============================
   REFRESH DASHBOARD
============================== */

console.log("NetMonitor Dashboard berhasil dimuat!");

console.log("Status: Demo mode");