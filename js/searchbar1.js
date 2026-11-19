
  // S E A R C H  B A R
  // Seznam webkamer: každý má název (co se ukáže) a URL (kam se odkáže)
  const webkamery = [
    { nazev: "Praha - Karlův most", url: "https://webcam.csvts.cz/" },
    { nazev: "Brno - Malinovského náměstí", url: "https://www.brno.cz/online-web-kamera" },
    { nazev: "Praha - Václavské náměstí", url: "https://www.worldcamera.net/kamera/webcam_prague_vaclav.jpg?dummy=1661769288506" },
    { nazev: "Praha - Podolí", url: "https://www.holidayinfo.cz/cz/camera/podoli" },
    { nazev: "Praha - Zbraslav", url: "https://www.southprague.net/kamera/Zbraslav1-640.jpg" },
    { nazev: "Trutnov - Krakonošovo náměstí", url: "https://kamery.humlnet.cz/images/webcams/trutnov/1024x768.jpg?1477422588981" },
    { nazev: "Česká Lípa - náměstí", url: "https://kamera.mucl.cz/current0.jpg" },
    { nazev: "Litoměřice - Mírové náměstí", url: "https://kamery.humlnet.cz/images/webcams/litomerice/1024x768.jpg?1480084344834" },
    { nazev: "Děčín - Masarykovo náměstí", url: "https://mmdecin.jaw.cz/kamera1b/webcam.jpg" },
    { nazev: "Sněžka", url: "https://kamery.humlnet.cz/show_webcam.php?url=/images/webcams/snezka2/1024x768.jpg" },
    { nazev: "Pardubice - Třída Míru", url: "https://www.kve.cz/webkamery/" },
    { nazev: "Svatý Petr", url: "https://www.holidayinfo.cz/cs/camera/svpetr/2104" },
    { nazev: "Výrovka", url: "https://www.vyrovka.cz/webkamery/" },
    { nazev: "Praha - Modřany", url: "http://www.cloud.matejov.org/kamera_modrany/last_img.php" },
    { nazev: "Seč - autokemp", url: "https://mestosec.cz/webcam-image-prehrada.asp?t=9/5/2023%202:23:52%20PM&dummy=0" },
    { nazev: "Lipno - Skiareál", url: "https://www.holidayinfo.cz/cs/camera/kramolin" },
    { nazev: "Doprava ČR - dálnice", url: "https://extranet.uamk.cz/kamery/?a=D0" },
    { nazev: "Karlovy Vary - výhled na město", url: "https://www.feratel.com/cs/webove-kamery/cesko/karlovy-vary/karlovy-vary-hotel-thermal" },
    { nazev: "České budějovice - radnice", url: "https://stream.c-budejovice.cz/webkamera-4-radnice.html" },
    { nazev: "Plzeň - Náměstí republiky", url: "https://webkamery.plzen.eu/kamera1.html" },
    { nazev: "Hradec Králové - náměstí", url: "https://www.youtube.com/watch?v=K3MQ5-Q9oWg" },
    { nazev: "Vrchlabí - Náměstí T.G.Masaryka", url: "https://webkamery-krkonose.cz/kamera/1-vrchlab-nmst-t-g-masaryka" },
    { nazev: "Jičín - Valdštejnovo náměstí", url: "https://www.youtube.com/watch?v=FKjpjThN5SQ" },
    { nazev: "Zlín - náměstí Míru", url: "https://www.youtube.com/watch?v=YS-Qq5XbgaE" },
    
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

