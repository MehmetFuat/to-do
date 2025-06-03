
    function kayitOl() {
      const kullaniciAdi = document.getElementById('kullaniciAdi').value.trim();
      if (kullaniciAdi) {
        if (!localStorage.getItem(kullaniciAdi)) {
          localStorage.setItem(kullaniciAdi, JSON.stringify([]));
          localStorage.setItem("aktifKullanici", kullaniciAdi); // AKTİF KULLANICIYI BELİRLE
          window.location.href = "ana.html";
        } else {
          alert("Bu kullanıcı zaten var.");
        }
      } else {
        alert("Lütfen bir kullanıcı adı girin.");
      }
    }

    function girisYap() {
      const kullaniciAdi = document.getElementById('kullaniciAdi').value.trim();
      if (kullaniciAdi && localStorage.getItem(kullaniciAdi)) {
        localStorage.setItem("aktifKullanici", kullaniciAdi); // AKTİF KULLANICIYI BELİRLE
        window.location.href = "ana.html";
      } else {
        alert("Kullanıcı bulunamadı.");
      }
    }
