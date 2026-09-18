document.addEventListener("DOMContentLoaded", function () {
  var repoBtn = document.querySelector(".md-header__source");
  if (repoBtn) repoBtn.style.display = "none";

  var STORAGE_KEY = "bliss_page_history";
  var MAX_ENTRIES = 20;

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveHistory(h) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
  }

  function recordPage() {
    var raw = document.title.split(" - ");
    var title = raw[0].trim();
    var url = window.location.pathname;
    var h = loadHistory().filter(function (e) { return e.url !== url; });
    h.unshift({ title: title, url: url });
    if (h.length > MAX_ENTRIES) h = h.slice(0, MAX_ENTRIES);
    saveHistory(h);
  }

  var ICON_CLOCK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>';
  var ICON_PAGE  = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>';

  function renderDropdown() {
    var h = loadHistory();
    dropdown.innerHTML = "";

    var hdr = document.createElement("div");
    hdr.className = "bh-header";

    var lbl = document.createElement("span");
    lbl.className = "bh-label";
    lbl.innerHTML = ICON_CLOCK + "<span>History</span>";

    var clr = document.createElement("button");
    clr.className = "bh-clear";
    clr.textContent = "Clear";
    clr.addEventListener("click", function (e) {
      e.stopPropagation();
      saveHistory([]);
      renderDropdown();
    });

    hdr.appendChild(lbl);
    hdr.appendChild(clr);
    dropdown.appendChild(hdr);

    if (h.length === 0) {
      var empty = document.createElement("div");
      empty.className = "bh-empty";
      empty.textContent = "No history yet";
      dropdown.appendChild(empty);
      return;
    }

    var list = document.createElement("div");
    list.className = "bh-list";

    h.forEach(function (entry) {
      var item = document.createElement("a");
      item.className = "bh-item";
      item.href = entry.url;

      var icon = document.createElement("span");
      icon.className = "bh-item-icon";
      icon.innerHTML = ICON_PAGE;

      var text = document.createElement("span");
      text.className = "bh-item-text";
      text.textContent = entry.title;

      item.appendChild(icon);
      item.appendChild(text);
      item.addEventListener("click", function () {
        dropdown.classList.remove("bh-open");
      });
      list.appendChild(item);
    });

    dropdown.appendChild(list);
  }

  var header = document.querySelector(".md-header__inner");
  if (!header) return;

  var wrapper = document.createElement("div");
  wrapper.className = "bh-wrapper";

  var btn = document.createElement("button");
  btn.className = "md-header__button md-icon bh-btn";
  btn.setAttribute("aria-label", "History");
  btn.title = "History";
  btn.innerHTML = ICON_CLOCK;

  var dropdown = document.createElement("div");
  dropdown.className = "bh-dropdown";

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    renderDropdown();
    dropdown.classList.toggle("bh-open");
  });

  document.addEventListener("click", function () {
    dropdown.classList.remove("bh-open");
  });

  wrapper.appendChild(btn);
  wrapper.appendChild(dropdown);

  header.appendChild(wrapper);

  recordPage();
});
