document.addEventListener("DOMContentLoaded", function () {
    const galleryData = {
      japanese_painting: [
        { src: "image/inside.jpg", alt: "inside", caption: "inside", year: "2025", size: "180 x 140mm" },
        { src: "image/vague.jpg", alt: "vague", caption: "vague", year: "2024", size: "273 x 190mm" },
        { src: "image/木の言語.jpg", alt: "木の言語", caption: "木の言語", year: "2024", size: "227 x 158mm" },
        { src: "image/絡まる.jpg", alt: "karamaru", caption: "絡まる", year: "2023", size: "250 x 250mm" },
        { src: "image/seimei.jpg", alt: "seimei", caption: "生命は叫び", year: "2023", size: "250 x 250mm" },
        { src: "image/鳴き.jpg", alt: "naki", caption: "鳴き", year: "2023", size: "250 x 250mm" },
        { src: "image/湿り.jpg", alt: "tree", caption: "湿り", year: "2023", size: "250 x 250mm" },
        { src: "image/蹌踉.jpg", alt: "蹌踉", caption: "蹌踉", year: "2023", size: "250 x 250mm" },
        { src: "image/ゆらゆら.jpg", alt: "ゆらゆら", caption: "ゆらゆら", year: "2023", size: "250 x 250mm" },
        { src: "image/夢を覆す.jpg", alt: "夢を覆す", caption: "夢を覆す", year: "2023", size: "400 x 300mm" },
        { src: "image/gulang.jpg", alt:"Voice of Gulang",caption:"Voice of Gulang", year: "2024", size: " " },
        { src: "image/歯のダンス.jpg", alt: "歯のダンス", caption: "歯のダンス", year: "2024", size: "227 x 158mm" },
        { src: "image/古着.jpg", alt: "古着", caption: "古着", year: "2025", size: "70 x 100mm" },
        { src: "image/眠い.png", alt: "眠い", caption: "眠い", year: "2025", size: "150 x 950mm" },
        { src: "image/a dream.png", alt: "a dream", caption: "a dream", year: "2025", size: "227 x 250mm" }
      ],
      water_color: [
        { src: "image/寂寞的夜晚.jpg", alt: "寂しい夜", caption: "寂しい夜", year: "2023", size: "185 x 131mm" },
        { src: "image/夜间飞行.jpg", alt: "fly", caption: "夜間飛行", year: "2023", size: "185 x 131mm" },
        { src: "image/夜间飞行2.jpg", alt: "fly2", caption: "夜間飛行2", year: "2023", size: "185 x 131mm" },
        { src: "image/一本の樹.jpg", alt: "一本の樹", caption: "一本の樹", year: "2024", size: "185 x 131mm" },
        { src: "image/夕燒.jpg", alt: "夕燒", caption: "夕燒", year: "2023", size: "185 x 131mm" },
        { src: "image/所沢の出口.jpg", alt: "所沢の出口", caption: "所沢の出口", year: "2023", size: "185 x 131mm" }
      ],
      print: [
        { src:"image/Primitive_Life.jpg", alt:"Primitive_Life",caption:"Primitive Life", year: "2021", size: " changeable"},
        { src:"image/tori.jpg", alt:"tori",caption:"鳥", year: "2024", size: "148 x 103mm"},
        { src:"image/nazo.jpg", alt:"nazo",caption:"謎", year: "2023", size: " "},
        { src: "image/Primitive Life2.jpg", alt: "Primitive Life2", caption: "Primitive Life2", year: "2021", size: " changeable" },
        { src:"image/tori2.jpg", alt:"tori2",caption:"鳥2", year: "2022", size: "148 x 103mm"},
        { src:"image/toritachi.jpg", alt:"toritachi",caption:"鳥たち", year: "2024", size: "changeable"},
        { src:"image/mokuhan.jpg", alt:"mokuhan",caption:"逃げてる親知らず", year: "", size: "227 x 158mm"},
        { src:"image/torino.jpg", alt:"torino",caption:"鳥の眺望", year: "2024", size: " "}
      ],
      oil_painting: [
        { src:"image/朝の海、廈門Early_Morning_Sea_In_Amoy,2022.jpg", alt:"朝の海",caption:"朝の海", year: "2022", size: " "},
        { src:"image/婺源の夕暮れ.jpg", alt:"婺源の夕暮れ",caption:"婺源の夕暮れ", year: "2022", size: " "}
      ],
      something_else: [
        { src:"image/梨の妖精.jpg", alt:"梨の妖精",caption:"梨の妖精", year: "2024", size: "changeable"},
        { src:"image/xiangsi.png", alt:"相思鳥",caption:"相思鳥", year: "2022", size: "changeable"},
        { src:"image/黒い太陽.jpg", alt:"黒い太陽",caption:"黒い太陽", year: "2024", size: "227 x 158mm"}
      ]
    };
  
    
    function renderGallery(images) {
      const container = document.getElementById("gallery-content");
      container.innerHTML = "";
  
      if (!images || images.length === 0) {
        container.innerHTML = "<p class='text-center'>まだ作品がありません</p>";
        return;
      }
  
      images.forEach(item => {
        const captionLines = [
          item.caption || "",
          `${item.year || "（年份待填）"} / ${item.size || "（尺寸待填）"}`
        ];
        const fullCaption = captionLines.join("<br>");

        const col = document.createElement("div");
        col.className = "col-sm-6 col-lg-4";
        col.innerHTML = `
                <a href="${item.src}" data-fancybox="gallery" data-caption="${fullCaption}">
                    <img src="${item.src}" alt="${item.alt}" class="img-fluid" loading="lazy">
                </a>

        `;
        container.appendChild(col);
      });
  
      Fancybox.bind("[data-fancybox]", {
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
            right: ["slideshow", "thumbs", "close"]
          }
        }
      });
    }
  
    const initialImages = [
        { src: "image/inside.jpg", alt: "inside", caption: "inside", year: "2025", size: "180 x 140mm" },
        { src: "image/a dream.png", alt: "a dream", caption: "a dream", year: "2025", size: "227 x 250mm" },
        { src: "image/眠い.png", alt: "眠い", caption: "眠い", year: "2025", size: "150 x 950mm" },
        { src: "image/絡まる.jpg", alt: "karamaru", caption: "絡まる", year: "2023", size: "250 x 250mm" },
        { src: "image/seimei.jpg", alt: "seimei", caption: "生命は叫び", year: "2023 ", size: "250 x 250mm" },
        { src: "image/鳴き.jpg", alt: "naki", caption: "鳴き", year: "2023", size: "250 x 250mm" },
        { src: "image/寂寞的夜晚.jpg", alt: "night", caption: "寂しい夜", year: "2023", size: "185 x 131mm" },
        { src: "image/夜间飞行.jpg", alt: "fly", caption: "夜間飛行", year: "2023", size: "185 x 131mm" },
        { src: "image/夜间飞行2.jpg", alt: "fly 2", caption: "夜間飛行2", year: "2023", size: "185 x 131mm" },
        { src: "image/湿り.jpg", alt: "tree", caption: "湿り", year: "2023", size: "250 x 250mm" },
        { src: "image/蹌踉.jpg", alt: "yume", caption: "蹌踉", year: "2023", size: "250 x 250mm" },
        { src: "image/ゆらゆら.jpg", alt: "ゆらゆら", caption: "ゆらゆら", year: "2023", size: "250 x 250mm" },
        { src: "image/夢を覆す.jpg", alt: "夢を覆す", caption: "夢を覆す", year: "2023", size: "400 x 300mm" },
        { src: "image/gulang.jpg", alt:"Voice of Gulang",caption:"Voice of Gulang", year: "2024", size: " "},
        { src: "image/vague.jpg", alt: "vague", caption: "vague", year: "2024", size: "273 x 190mm" },
        { src: "image/木の言語.jpg", alt: "木の言語", caption: "木の言語", year: "2024", size: "227 x 158mm" }
    ];
    renderGallery(initialImages);
  
    
    document.querySelectorAll(".nav-link[data-name]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const category = link.getAttribute("data-name").toLowerCase();
        const images = galleryData[category];
        renderGallery(images);
  
        const offcanvasEl = document.querySelector(".offcanvas.show");
        if (offcanvasEl) {
          bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
        }
      });
    });
  });
  
