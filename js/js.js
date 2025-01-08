window.addEventListener('wheel', function(event) {
    if (event.ctrlKey === true) {
      event.preventDefault();
    }
  }, { passive: false });
 
let isWhiteLogoAndSocial = false

const BackgroundColor = document.getElementById("BackgroundColor");
const Logo = document.getElementById("Logo");
const TextTitle = document.getElementById("TextTitle");
const ParagraphDescription = document.getElementById("ParagraphDescription");
const ParagraphStructure = document.getElementById("ParagraphStructure");
const BackgroundItemOne = document.getElementById("BackgroundItemOne");
const BackgroundItemTwo = document.getElementById("BackgroundItemTwo");
const BackgroundItemThree = document.getElementById("BackgroundItemThree");
const BackgroundItemFour = document.getElementById("BackgroundItemFour");
const BackgroundItemFive = document.getElementById("BackgroundItemFive");
const imagePot = document.getElementById("imagePot");
const imageBackgroundOne = document.getElementById("imageBackgroundOne");
const imageBackgroundTwo = document.getElementById("imageBackgroundTwo");
const BackgroundColorTable = document.getElementById("BackgroundColorTable");
const TableStructure = document.getElementById("TableStructure");
const ButtonOriginal = document.getElementById("ButtonOriginal");
const ButtonExtra = document.getElementById("ButtonExtra");
const ButtonLychee = document.getElementById("ButtonLychee");
const ButtonMango = document.getElementById("ButtonMango");
const ButtonPeach = document.getElementById("ButtonPeach");
const ButtonOrange = document.getElementById("ButtonOrange");
const ButtonDragonFruit = document.getElementById("ButtonDragonFruit");
const iconsSocialVk = document.getElementById("iconsSocialVk");
const iconsSocialTelegram = document.getElementById("iconsSocialTelegram");
const iconsSocialYoutube = document.getElementById("iconsSocialYoutube");

ButtonOriginal.addEventListener("click", chageOriginalTaste)
ButtonExtra.addEventListener("click", changeExtraTaste)
ButtonLychee.addEventListener("click", changeLycheeTaste)
ButtonMango.addEventListener("click", changeMangoTaste)
ButtonPeach.addEventListener("click", changePeachTaste)
ButtonOrange.addEventListener("click", changeOrangeTaste)
ButtonDragonFruit.addEventListener("click", changeDragonFruitTaste)

function chageOriginalTaste() {
  if (isWhiteLogoAndSocial === false) {
    changeLogo("/icons/logo energy two.png")
    changeIconsSocialVk("/icons/вк-бел.png")
    changeIconsSocialTelegram("/icons/Телега-Бел.png")
    changeIconsSocialYoutube("/icons/Ютуб-Бел.png")
    isWhiteLogoAndSocial = true
  } 
  changeBackgroundColor("#051608")
  changeImagePot("/img/ОРИГИНАЛ/banka-2.png")
  changeTextTitle("ОРИГИНАЛ")
  changeParagraphDescription("Ищешь подзарядку? Она уже ждёт тебя в банке Gorilla Energy. Неважно, на что нужны силы, главное, что твоя энергия уже стремится в космос.")
  changeParagraphStructure(`Пищевая ценность на 100 мл (средние значения):
  энергетическая ценность 210 кДж (50 ккал)
  углеводы ................................. 12 г
  Витамины на 100 см3:
  Витамин В3 .............................. 8 мг (44)*
  Витамин В5 .............................. 2 мг (33)*
  Витамин В6 .............................. 1 мг (50)*
  Витамин В7 .............................. 25 мкг (50)*
  Витамин В12 ............................. 1 мкг (100)*`)

  changeBackgroundColorTable("#051608")
  changeTableStructure(`

  • Кофеин не более 32 мг на 100 мл
  • Таурин, L-карнитин
  • Витамины B3, B5, B6, B7, B12`)
  showBackgroundItems()
  changeBackgroundItemOne("/img/ОРИГИНАЛ/молнии.png", "900px", "900px", "-155px", "100px", "-50deg")
  changeBackgroundItemTwo ("/img/ОРИГИНАЛ/молнии 2.png", "900px", "900px", "280px", '', "-190deg")
  hideBackgroundItem(BackgroundItemThree)
  hideBackgroundItem(BackgroundItemFour)
  changeImagesBackground("/img/ОРИГИНАЛ/Фон 2.png", "/img/ОРИГИНАЛ/Фон 1.png")

}

function changeExtraTaste() {
  if (isWhiteLogoAndSocial === false) {
    changeLogo("/icons/logo energy two.png")
    changeIconsSocialVk("/icons/вк-бел.png")
    changeIconsSocialTelegram("/icons/Телега-Бел.png")
    changeIconsSocialYoutube("/icons/Ютуб-Бел.png")
    isWhiteLogoAndSocial = true
  } 
  changeBackgroundColor("#1E1E1E")
  changeImagePot("/img/EXTRA/banka-3.png")
  changeTextTitle("EXTRA")
  changeParagraphDescription("Вот это мощный движ! Переходи на extra-уровень энергии, если всегда хочешь быть в центре событий и готов создавать бэнгеры днём и ночью.")
  changeParagraphStructure(`
  Пищевая ценность на 100 мл (средние значения):
энергетическая ценность 80 кДж (20 ккал)
углеводы .................................. 4,3 г
Витамины на 100 см3:
Витамин В2 ............................... 0,9 мг (56)*
Витамин В3 ............................... 10,8 мг (60)*
Витамин В5 ............................... 1,5 мг (25)*
Витамин В6 ............................... 0,9 мг (45)*
Витамин В12 ............................. 1,4 мкг (140)*

*- процент от рекомендованного суточного потребления.
  `)
  changeBackgroundColorTable("#1E1E1E")
  changeTableStructure(`

  • Максимум кофеина
  • В 7 раз больше таурина
  • В 3 раза больше L-карнитина
  • Витамины B2, B3, B5, B6, B12
  `)
  showBackgroundItems()
  changeBackgroundItemOne("/img/EXTRA/кофе 3.png", "1450px", "971px", "-30px", "-90px", "-230deg")
  changeBackgroundItemTwo("/img/EXTRA/коффе 2.png", "650px", "450px", "1588px", "-500px", "56deg")
  hideBackgroundItem(BackgroundItemThree)
  hideBackgroundItem(BackgroundItemFour)
  changeImagesBackground("/img/EXTRA/Фон 32.png", "/img/EXTRA/Фон extra.png")

}

function changeLycheeTaste() {
  if (isWhiteLogoAndSocial === true) {
    changeLogo("/icons/logo energy.png")
    changeIconsSocialVk("/icons/vk (1).png")
    changeIconsSocialTelegram("/icons/telegram (1).png")
    changeIconsSocialYoutube("/icons/youtube (2).png")
    isWhiteLogoAndSocial = false
  } 
  changeBackgroundColor("#CC385C")
  changeImagePot("/img/ГРУША-ЛИЧИ/banka-4.png")
  changeTextTitle("ЛИЧИ - ГРУША")
  changeParagraphDescription("Поймай тропический вайб, чтобы раздать шума по максимуму. Мощная энергия + вкус личи и груши = самый лютый тандем, который только можно себе представить.")
  changeParagraphStructure(`
  Пищевая ценность на 100 мл (средние значения):
энергетическая ценность 85 кДж (20 ккал)
углеводы ................................. 4,8 г
Витамины на 100 см3:
витамин В3 .............................. 2,88 мг (16)*
витамин В5 .............................. 0,96 мг (16)*
витамин В6 .............................. 0,32 мг (16)*
витамин В7 .............................. 24 мкг (48)*
витамин В9 .............................. 45 мкг (22)*
витамин В12 ............................ 0,16 мкг (16)*

* - процент от рекомендованного суточного потребления.
  `)
  changeBackgroundColorTable("#CC385C")
  changeTableStructure(`
  • Кофеин не более 30 мг на 100 мл
  • Таурин
  • Витамины B3, B5, B6, B7, B9, B12
  • Содержит сок из белого винограда
  • С натуральным ароматом и вкусом Личи и Груши
  `)
  showBackgroundItems()
  changeBackgroundItemOne("/img/ГРУША-ЛИЧИ/Груша 4.png", "750px", "771px", "-235px", "390px", "-42deg")
  changeBackgroundItemTwo("/img/ГРУША-ЛИЧИ/Груша 3.png", "650px", "671px", "785px", "180px", "130deg")
  changeBackgroundItemThree("/img/ГРУША-ЛИЧИ/Личи.png", "350px", "371px", "280px", "-550px", "130deg")
  changeBackgroundItemFour("/img/ГРУША-ЛИЧИ/Личи 2.png", "450px", "471px", "980px", "-820px", "25deg")
  changeImagesBackground("/img/ГРУША-ЛИЧИ/Фон 2.png", "/img/ГРУША-ЛИЧИ/Фон личи.png")
}

function changeMangoTaste() {
  if (isWhiteLogoAndSocial === true) {
    changeLogo("/icons/logo energy.png")
    changeIconsSocialVk("/icons/vk (1).png")
    changeIconsSocialTelegram("/icons/telegram (1).png")
    changeIconsSocialYoutube("/icons/youtube (2).png")
    isWhiteLogoAndSocial = false
  }
  changeBackgroundColor("#4266E8")
  changeImagePot("/img/МАНГО-КОКОС/banka-5.png")
  changeTextTitle("МАНГО - КОКОС")
  changeParagraphDescription("Сёрфить по волнам энергии — легко. Главное, чтобы под рукой была Gorilla Energy с манго и кокосом, а рядом компания, с которой любое море по колено.")
  changeParagraphStructure(`
  Пищевая ценность на 100 мл (средние значения):
  энергетическая ценность 85 кДж/20 ккал
  углеводы ................................. 4,9 г
  Витамины на 100 см3:
  витамин В3 .............................. 3,8 мг (21,3)*
  витамин В5 .............................. 1,1 мг (18,3)*
  витамин В6 .............................. 0,78 мг (39)*
  витамин В7 .............................. 30 мкг (60)*
  витамин В12 ............................. 0,86 мкг (86)*
  
  * - процент от рекомендованного суточного потребления.
  `)
  changeBackgroundColorTable("#4266E8")
  changeTableStructure(`
  • Кофеин не более 30 мг на 100 мл
• Таурин, L-карнитин
• Витамины B3, B5, B6, B7, B12
• Содержит сок из белого винограда
• Содержит пюре из манго и кокосовую воду
  `)
  showBackgroundItems()
  changeBackgroundItemOne("/img/МАНГО-КОКОС/кокос.png", "550px", "571px", "-170px", "390px", "15deg")
  changeBackgroundItemTwo("/img/МАНГО-КОКОС/кокос 2.png", "450px", "471px", "1100px", "430px", "-40deg")
  changeBackgroundItemThree("/img/МАНГО-КОКОС/Манго 2.png", "450px", "471px", "580px", "-300px", "-25deg")
  changeBackgroundItemFour("/img/МАНГО-КОКОС/манго 1.png", "450px", "471px", "800px", "-700px", "60deg")
  changeImagesBackground("/img/МАНГО-КОКОС/Фон манго 2.png", "/img/МАНГО-КОКОС/Фон манго.png")

}

function changePeachTaste() {
  if (isWhiteLogoAndSocial === true) {
    changeLogo("/icons/logo energy.png")
    changeIconsSocialVk("/icons/vk (1).png")
    changeIconsSocialTelegram("/icons/telegram (1).png")
    changeIconsSocialYoutube("/icons/youtube (2).png")
    isWhiteLogoAndSocial = false
  }
  changeBackgroundColor("#682369")
  changeImagePot("/img/ПЕРСИК-АБРИКОС/banka-6.png")
  changeTextTitle("ПЕРСИК - АБРИКОС")
  changeParagraphDescription("Яркий фруктовый заряд персика и абрикоса в одной банке. Gorilla Peach-Apricot обеспечит летнее настроение на весь день!")
  changeParagraphStructure(`
  Пищевая ценность на 100 мл (средние значения): энергетическая ценность 85 кДж/20 ккал
углеводы .................................. 5 г
Витамины на 100 см3:
витамин В3 .............................. 3,83 мг (21,2)*
витамин В5 .............................. 1,1 мг (18,3)*
витамин В6 .............................. 0,78 мг (39)*
витамин В12 ............................ 0,85 мкг (85)*

* - процент от рекомендованного суточного потребления.
  `)
  changeBackgroundColorTable("#682369")
  changeTableStructure(`
  • Кофеин - не более 30 МГ на 100 МЛ
• Таурин, L-Карнитин
• Витамины B3, B5, B6, B12
• Содержит натуральный сок (10%);
• Трендовый вкус сочного персика и абрикоса.
  `)
  showBackgroundItems()
  changeBackgroundItemOne("/img/ПЕРСИК-АБРИКОС/Персик 2.png", "650px", "471px", "-170px", "490px", "15deg")
  changeBackgroundItemTwo("/img/ПЕРСИК-АБРИКОС/Абрикос.png", "650px", "380px", "900px", "430px", "-40deg")
  changeBackgroundItemThree("/img/ПЕРСИК-АБРИКОС/персик.png", "450px", "380px", "190px", "-220px", "280deg")
  hideBackgroundItem(BackgroundItemFour)
  changeImagesBackground("/img/ПЕРСИК-АБРИКОС/Фон персика.png", "/img/ПЕРСИК-АБРИКОС/Фон персика 2.png")
}

function changeOrangeTaste() {
  if (isWhiteLogoAndSocial === true) {
    changeLogo("/icons/logo energy.png")
    changeIconsSocialVk("/icons/vk (1).png")
    changeIconsSocialTelegram("/icons/telegram (1).png")
    changeIconsSocialYoutube("/icons/youtube (2).png")
    isWhiteLogoAndSocial = false
  }
  changeBackgroundColor("#E86042")
  changeImagePot("/img/АПЕЛЬСИН/banka-7.png")
  changeTextTitle("АПЕЛЬСИН")
  changeParagraphDescription("Коллаб апельсинового сока и неудержимой энергии. Эти ребята отлично работают в команде — спорим, смогут зарядить тебя на весь день?")
  changeParagraphStructure(`
  Пищевая ценность на 100 мл (средние значения):
  энергетическая ценность 85 кДж/20 ккал
  углеводы ................................. 4,8 г
  Витамины на 100 см3:
  Витамин В3 .............................. 2,88 мг (14,4)*
  Витамин В5 .............................. 0,96 мг (19,2)*
  Витамин В6 .............................. 0,32 мг (16)*
  Витамин В7 .............................. 24 мкг (48)*
  Витамин В9 .............................. 45,2 мкг (11,3)*
  Витамин В12 ............................ 0,16 мкг (5,3)*
  Витамин А ............................... 52,5 мкг (5,8)*
  Витамин Е ................................ 0,6 мг (4)*
  `)
  changeBackgroundColorTable("#E86042")
  changeTableStructure(`

  • Кофеин не более 30 мг на 100 мл
  • Таурин, L-карнитин
  • Витамины B3, B5, B6, B7, B9, B12
  • Содержит сок апельсина
  `)
  showBackgroundItems()
  changeBackgroundItemOne("/img/АПЕЛЬСИН/Апельсин 3.png", "650px", "671px", "-170px", "490px", "45deg")
  changeBackgroundItemTwo("/img/АПЕЛЬСИН/апельсин.png", "450px", "480px", "980px", "300px", "40deg")
  changeBackgroundItemThree("/img/АПЕЛЬСИН/апельсин 2.png", "350px", "380px", "560px", "-450px", "280deg")
  hideBackgroundItem(BackgroundItemFour)
  changeImagesBackground("/img/АПЕЛЬСИН/Фон апельсина 2.png", "/img/АПЕЛЬСИН/Фон пельсина.png")
}

function changeDragonFruitTaste() {
  if (isWhiteLogoAndSocial === true) {
    changeLogo("/icons/logo energy.png")
    changeIconsSocialVk("/icons/vk (1).png")
    changeIconsSocialTelegram("/icons/telegram (1).png")
    changeIconsSocialYoutube("/icons/youtube (2).png")
    isWhiteLogoAndSocial = false
  }
  changeBackgroundColor("#04A5AF")
  changeImagePot("/img/ПИТАЯ-АНАНАС/banka-1.png")
  changeTextTitle("ПИТАЙЯ - АНАНАС")
  changeParagraphDescription(`
  Сладкая питайя и сочный ананас — экзотический микс, который даст мощный импульс твоей энергии.
  Готов это проверить?`)
  changeParagraphStructure(`Пищевая ценность на 100 мл (средние значения): энергетическая ценность 90 кДж/20 ккал 
  углеводы ................................. 4,9 г 
  Витамины на 100 см3: 
  Витамин В3 .............................. 8 мг (44)* 
  Витамин В5 .............................. 2 мг (33)* 
  Витамин В6 .............................. 1 мг (50)* 
  Витамин В12 ............................. 1 мкг (100)* 
                                    
  * - процент от рекомендованного суточного потребления.`)
  changeBackgroundColorTable("")
  changeTableStructure(`
  • Кофеин - не более 30 МГ на 100 МЛ
  • Таурин, L-Карнитин
  • Витамины B3, B5, B6, B12
  • Содержит натуральный сок (10%)
  • Экзотический вкус питайи и ананаса
  `)
  showBackgroundItems()
  changeBackgroundItemOne("/img/ПИТАЯ-АНАНАС/фрукт 1.png", "400px", "481px", "-120px", "450px", "0deg")
  changeBackgroundItemTwo("/img/ПИТАЯ-АНАНАС/фрукт 2.png", "350px", "255px", "1200px", "-300px", "0deg")
  changeBackgroundItemThree("/img/ПИТАЯ-АНАНАС/фрукт 3.png", "420px", "374px", "700px", "460px", "0deg")
  hideBackgroundItem(BackgroundItemFour)
  changeImagesBackground("/img/ПИТАЯ-АНАНАС/фон банки 1.png", "/img/ПИТАЯ-АНАНАС/фон банки 2.png")
}

function changeBackgroundColor(color) {
  BackgroundColor.style.backgroundColor = color;
}
function changeLogo(img) {
  Logo.src = img
}
function changeTextTitle(text) {
  TextTitle.textContent = text;
}
function changeParagraphDescription(text) {
  ParagraphDescription.textContent = text;
  ParagraphDescription.style.marginBottom = "25px"
}
function changeParagraphStructure(text) {
  ParagraphStructure.textContent = text;
  ParagraphStructure.style.marginBottom = "35px"
}

function changeBackgroundItemOne (img, width, height, left, top, rotate) {
  BackgroundItemOne.src = img;
  BackgroundItemOne.style.width = width;
  BackgroundItemOne.style.height = height;
  BackgroundItemOne.style.left = left;
  BackgroundItemOne.style.top = top;
  BackgroundItemOne.style.rotate = rotate;
  BackgroundItemOne.style.zIndex = '-2';
}

function changeBackgroundItemTwo (img, width, height, left, top, rotate) {
  BackgroundItemTwo.src = img;
  BackgroundItemTwo.style.width = width;
  BackgroundItemTwo.style.height = height;
  BackgroundItemTwo.style.left = left;
  BackgroundItemTwo.style.top = top;
  BackgroundItemTwo.style.rotate = rotate;
  BackgroundItemTwo.style.zIndex = '-2';
}

function changeBackgroundItemThree (img, width, height, left, top, rotate) {
  BackgroundItemThree.src = img;
  BackgroundItemThree.style.width = width;
  BackgroundItemThree.style.height = height;
  BackgroundItemThree.style.left = left;
  BackgroundItemThree.style.top = top;
  BackgroundItemThree.style.rotate = rotate;
}

function changeBackgroundItemFour (img, width, height, left, top, rotate) {
  BackgroundItemFour.src = img;
  BackgroundItemFour.style.width = width;
  BackgroundItemFour.style.height = height;
  BackgroundItemFour.style.left = left;
  BackgroundItemFour.style.top = top;
  BackgroundItemFour.style.rotate = rotate;
  BackgroundItemFour.style.zIndex = '-2';
}

function changeImagePot(img) {
  imagePot.src = img;
}

function showBackgroundItems () {
  BackgroundItemOne.style.display = "inline-block"
  BackgroundItemTwo.style.display = "inline-block"
  BackgroundItemThree.style.display = "inline-block"
  BackgroundItemFour.style.display = "inline-block"
}
function hideBackgroundItem (item) {
  item.style.display = "none"
}

function changeImagesBackground(imgBackgroundOne, imgBackgroundTwo) {
  imageBackgroundOne.src = imgBackgroundOne
  imageBackgroundTwo.src = imgBackgroundTwo
}

function changeBackgroundColorTable(color) {
  BackgroundColorTable.style.backgroundColor = color;
}

function changeTableStructure(text) {
  TableStructure.textContent = text; 
}


function changeIconsSocialVk(img) {
  iconsSocialVk.src = img;
}

function changeIconsSocialTelegram(img) {
  iconsSocialTelegram.src = img;
}

function changeIconsSocialYoutube(img) {
  iconsSocialYoutube.src = img;
}

