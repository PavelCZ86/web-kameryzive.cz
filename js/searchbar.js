
  // S E A R C H  B A R
  // Seznam webkamer: každý má název (co se ukáže) a URL (kam se odkáže)
  const webkamery = [
    { nazev: "Praha - Karlův most", url: "https://webcam.csvts.cz/" },
    { nazev: "Brno - Malinovského náměstí", url: "https://www.brno.cz/online-web-kamera" },
    { nazev: "Praha - Staroměstké náměstí", url: "https://www.earthcam.com/czechrepublic/prague/?cam=grandhotel_str" },
    { nazev: "Praha - Letiště Ruzyně", url: "https://www.earthcam.com/czechrepublic/prague/?cam=grandhotel_str" },
    { nazev: "Praha - Podolí", url: "https://www.holidayinfo.cz/cz/camera/podoli" },
    { nazev: "Máchovo jezero - Doksy", url: "http://www.doksy.com/vismo/osnova.asp?id_org=2821&p1=69&id_osnovy=13157" },
    { nazev: "Sněžka", url: "https://kamery.humlnet.cz/show_webcam.php?url=/images/webcams/snezka2/1024x768.jpg" },
    { nazev: "Pardubice - Třída Míru", url: "https://www.kve.cz/webkamery/" },
    { nazev: "Svatý Petr", url: "https://www.holidayinfo.cz/cs/camera/svpetr/2104" },
    { nazev: "Výrovka", url: "https://www.youtube.com/watch?v=nywiRyu-n0w" },
    { nazev: "Praha - Modřany", url: "http://www.cloud.matejov.org/kamera_modrany/last_img.php" },
    { nazev: "Lysá Hora (JV)", url: "https://www.chmi.cz/files/portal/docs/meteo/kam/prohlizec.html?cam=lysa_hora2" },
    { nazev: "Seč - autokemp", url: "https://mestosec.cz/webcam-image-prehrada.asp?t=9/5/2023%202:23:52%20PM&dummy=0" },
    { nazev: "Lipno - Loděnice", url: "https://www.holidayinfo.cz/cs/camera/kramolin" },
    { nazev: "Milešovka", url: "https://www.chmi.cz/files/portal/docs/meteo/kam/milesovka.jpg?t=1694000870" },
    { nazev: "Praha - doprava", url: "https://www.tsk-praha.cz/wps/portal/root/aktualni-doprava/dopravni-kamery" },
  ];

  const searchInput = document.getElementById("search");
  const suggestionsContainer = document.getElementById("suggestions");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    suggestionsContainer.innerHTML = "";

    if (query.length > 0) {
      const filtered = webkamery.filter(kamera =>
        kamera.nazev.toLowerCase().includes(query)
      );

      filtered.forEach(kamera => {
        const a = document.createElement("a");
        a.classList.add("list-group-item", "list-group-item-action");
        a.textContent = kamera.nazev;   // co se zobrazí
        a.href = kamera.url;            // kam odkáže

        suggestionsContainer.appendChild(a);
      });
    }
  });

  // Kliknutí mimo dropdown ho skryje
  document.addEventListener("click", function(e) {
    if (!searchInput.contains(e.target)) {
      suggestionsContainer.innerHTML = "";
    }
  });

