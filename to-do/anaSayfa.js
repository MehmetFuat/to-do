const aktifKullanici = localStorage.getItem("aktifKullanici");
    if (!aktifKullanici) window.location.href = "index.html";
    let gorevler = JSON.parse(localStorage.getItem(aktifKullanici)) || [];

    function gorevleriGoster() {
      ["gunluk", "egitim", "uyaninca", "yatmadan"].forEach(kat => {
        document.getElementById(`liste-${kat}`).innerHTML = "";
      });

      gorevler.forEach((gorev, indeks) => {
        const li = document.createElement("li");
        if (document.body.classList.contains("karanlik")) li.classList.add("karanlik");
        li.innerHTML = `<span>${gorev.metin}</span> <span>(${gorev.tarih || 'tarih yok'} ${gorev.saat || ''})</span>`;
        const silButon = document.createElement("button");
        silButon.textContent = "Sil";
        silButon.className = "silButonu";
        silButon.onclick = () => gorevSil(indeks);
        li.appendChild(silButon);
        document.getElementById(`liste-${gorev.kategori}`).appendChild(li);
      });
    }

    function gorevEkle() {
      const metin = document.getElementById("gorevMetni").value.trim();
      const tarih = document.getElementById("tarih").value;
      const saat = document.getElementById("saat").value;
      const kategori = document.getElementById("kategori").value;

      if (!metin) {
        alert("Görev tanımı boş bırakılamaz.");
        return;
      }

      gorevler.push({ metin, tarih, saat, kategori });
      localStorage.setItem(aktifKullanici, JSON.stringify(gorevler));
      gorevleriGoster();

      document.getElementById("gorevMetni").value = "";
      document.getElementById("tarih").value = "";
      document.getElementById("saat").value = "";
      document.getElementById("kategori").value = "gunluk";
    }

    function gorevSil(indeks) {
      gorevler.splice(indeks, 1);
      localStorage.setItem(aktifKullanici, JSON.stringify(gorevler));
      gorevleriGoster();
    }

    function cikisYap() {
      localStorage.removeItem("aktifKullanici");
      window.location.href = "index.html";
    }

    document.getElementById("karanlikModButonu").onclick = () => {
      document.body.classList.toggle("karanlik");
      const simge = document.getElementById("karanlikModButonu");
      simge.textContent = document.body.classList.contains("karanlik") ? "☀️" : "🌙";

      const liElemanlari = document.querySelectorAll("li");
      liElemanlari.forEach(li => li.classList.toggle("karanlik"));
    };

    gorevleriGoster();
    const karanlikModButonu = document.getElementById("karanlikModButonu");

  karanlikModButonu.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

 
  