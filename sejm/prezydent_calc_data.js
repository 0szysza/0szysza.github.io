// prezydent_calc_data.js - Dane powiatów, województw i rozkładów dla Kalkulatora Wyborów Prezydenckich

const PARTY_CANDIDATES_POOL = {
  PiS: [
    {
      id: "nawrocki",
      name: "Karol Nawrocki",
      partyName: "Prawo i Sprawiedliwość",
      partyShort: "PiS",
      partyColor: "#004494",
      partyLightColor: "#1e88e5",
      photoUrl: "Zdjęcia do prezydent/Nawrocki.png",
      photoFallback: "https://img.dorzeczy.pl/img/nawrocki-jutro-zaczynamy-nowy-rozdzial-w-historii-polski/63/12/b3c289c111866a9197e4186556d1.webp",
      initials: "KN",
      roleDesc: "Prezes IPN • Obywatelski kandydat z poparciem PiS",
      profileDesc: "Domyślny rozkład poparcia PiS (ogólnokrajowy wzorzec)",
      distributionKey: "PiS",
      defaultSupport: 26.0
    },
    {
      id: "czarnek",
      name: "Przemysław Czarnek",
      partyName: "Prawo i Sprawiedliwość",
      partyShort: "PiS",
      partyColor: "#004494",
      partyLightColor: "#1e88e5",
      photoUrl: "Zdjęcia do prezydent/Czarnek.png",
      photoFallback: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Przemys%C5%82aw_Czarnek_Sejm_2019.jpg/500px-Przemys%C5%82aw_Czarnek_Sejm_2019.jpg",
      initials: "PC",
      roleDesc: "Poseł PiS • Były Minister Edukacji i Nauki",
      profileDesc: "Wzrost na wschodzie i wsiach (bastiony Brauna) • Spadek w miastach • Lokalny bonus w lubelskim (+1%)",
      distributionKey: "PiS",
      defaultSupport: 26.0
    },
    {
      id: "kaczynski",
      name: "Jarosław Kaczyński",
      partyName: "Prawo i Sprawiedliwość",
      partyShort: "PiS",
      partyColor: "#004494",
      partyLightColor: "#1e88e5",
      photoUrl: "Zdjęcia do prezydent/Kaczynski.png",
      photoFallback: "",
      initials: "JK",
      roleDesc: "Prezes Prawa i Sprawiedliwości • Były Premier RP",
      profileDesc: "Mocny na wschodzie i wsiach • Wyraźny spadek w dużych miastach",
      distributionKey: "PiS",
      defaultSupport: 26.0
    },
    {
      id: "bochenski",
      name: "Tobiasz Bocheński",
      partyName: "Prawo i Sprawiedliwość",
      partyShort: "PiS",
      partyColor: "#004494",
      partyLightColor: "#1e88e5",
      photoUrl: "Zdjęcia do prezydent/Bochenski.png",
      photoFallback: "",
      initials: "TB",
      roleDesc: "Poseł do PE • Były Wojewoda Mazowiecki i Łódzki",
      profileDesc: "Wyższe poparcie w miastach i na zachodzie • Lekko niższe na wsi • Lokalny bonus w Warszawie i Łodzi (+1%)",
      distributionKey: "PiS",
      defaultSupport: 26.0
    },
    {
      id: "jaki",
      name: "Patryk Jaki",
      partyName: "Prawo i Sprawiedliwość",
      partyShort: "PiS",
      partyColor: "#004494",
      partyLightColor: "#1e88e5",
      photoUrl: "Zdjęcia do prezydent/Jaki.png",
      photoFallback: "",
      initials: "PJ",
      roleDesc: "Poseł do PE • Były Wiceminister Sprawiedliwości",
      profileDesc: "Mniejsze miasta kosztem wsi i metropolii • Lokalny bonus na Śląsku i Opolszczyźnie (+1%)",
      distributionKey: "PiS",
      defaultSupport: 26.0
    },
    {
      id: "tarczynski",
      name: "Dominik Tarczyński",
      partyName: "Prawo i Sprawiedliwość",
      partyShort: "PiS",
      partyColor: "#004494",
      partyLightColor: "#1e88e5",
      photoUrl: "Zdjęcia do prezydent/Tarczynski.png",
      photoFallback: "",
      initials: "DT",
      roleDesc: "Poseł do PE • Wiceprzewodniczący delegacji EKR",
      profileDesc: "Mniejsze miasta kosztem wsi i metropolii • Lokalny bonus w Świętokrzyskiem (+1%)",
      distributionKey: "PiS",
      defaultSupport: 26.0
    }
  ],
  KO: [
    {
      id: "trzaskowski",
      name: "Rafał Trzaskowski",
      partyName: "Koalicja Obywatelska",
      partyShort: "KO",
      partyColor: "#ff5757",
      partyLightColor: "#ff7b7b",
      photoUrl: "Zdjęcia do prezydent/Trzaskowski.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rafa%C5%82_Trzaskowski_2023.jpg/480px-Rafa%C5%82_Trzaskowski_2023.jpg",
      initials: "RT",
      roleDesc: "Prezydent m.st. Warszawy • Wiceprzewodniczący PO",
      profileDesc: "Domyślny rozkład poparcia KO (ogólnokrajowy wzorzec)",
      distributionKey: "KO",
      defaultSupport: 30.0
    },
    {
      id: "tusk",
      name: "Donald Tusk",
      partyName: "Koalicja Obywatelska",
      partyShort: "KO",
      partyColor: "#ff5757",
      partyLightColor: "#ff7b7b",
      photoUrl: "Zdjęcia do prezydent/Tusk.png",
      photoFallback: "",
      initials: "DT",
      roleDesc: "Prezes Rady Ministrów • Przewodniczący PO",
      profileDesc: "Mocny w bastionach KO i metropoliach • Słabszy w regionach konserwatywnych • Lokalny bonus na Pomorzu (+1%)",
      distributionKey: "KO",
      defaultSupport: 30.0
    },
    {
      id: "sikorski",
      name: "Radosław Sikorski",
      partyName: "Koalicja Obywatelska",
      partyShort: "KO",
      partyColor: "#ff5757",
      partyLightColor: "#ff7b7b",
      photoUrl: "Zdjęcia do prezydent/Sikorski.png",
      photoFallback: "",
      initials: "RS",
      roleDesc: "Minister Spraw Zagranicznych • Wiceprzewodniczący PO",
      profileDesc: "Otwarcie na elektorat konserwatywny, wschód i wsie • Mniejszy udział metropolii i bastionów • Lokalny bonus w kujawsko-pomorskim (+1%)",
      distributionKey: "KO",
      defaultSupport: 30.0
    },
    {
      id: "marchewka",
      name: "Arkadiusz Marchewka",
      partyName: "Koalicja Obywatelska",
      partyShort: "KO",
      partyColor: "#ff5757",
      partyLightColor: "#ff7b7b",
      photoUrl: "Zdjęcia do prezydent/Marchewka.png",
      photoFallback: "",
      initials: "AM",
      roleDesc: "Sekretarz Stanu w Ministerstwie Infrastruktury • Poseł KO",
      profileDesc: "Umiarkowany kandydat • Wyższe poparcie w średnich miastach powiatowych • Mniejszy udział metropolii • Lokalny bonus w zachodniopomorskim (+1%)",
      distributionKey: "KO",
      defaultSupport: 30.0
    }
  ],
  Konfederacja: [
    {
      id: "mentzen",
      name: "Sławomir Mentzen",
      partyName: "Konfederacja",
      partyShort: "Konf.",
      partyColor: "#16325c",
      partyLightColor: "#295696",
      photoUrl: "Zdjęcia do prezydent/Mentzen.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/S%C5%82awomir_Mentzen_Sejm_2023.jpg/480px-S%C5%82awomir_Mentzen_Sejm_2023.jpg",
      initials: "SM",
      roleDesc: "Poseł na Sejm • Prezes Nowej Nadziei",
      profileDesc: "Domyślny rozkład poparcia Konfederacji (ogólnokrajowy wzorzec)",
      distributionKey: "Konfederacja",
      defaultSupport: 14.0
    },
    {
      id: "bosak",
      name: "Krzysztof Bosak",
      partyName: "Konfederacja",
      partyShort: "Konf.",
      partyColor: "#16325c",
      partyLightColor: "#295696",
      photoUrl: "Zdjęcia do prezydent/Bosak.png",
      photoFallback: "",
      initials: "KB",
      roleDesc: "Wicemarszałek Sejmu • Lider Ruchu Narodowego",
      profileDesc: "Silniejszy na wsiach i na wschodzie • Niższe poparcie w metropoliach i na zachodzie • Lokalny bonus w Świętokrzyskiem i Podlaskiem (+1%)",
      distributionKey: "Konfederacja",
      defaultSupport: 14.0
    }
  ],
  KoronaPolska: [
    {
      id: "braun",
      name: "Grzegorz Braun",
      partyName: "Konfederacja Korony Polskiej",
      partyShort: "Korona",
      partyColor: "#d25f17",
      partyLightColor: "#e87a33",
      photoUrl: "Zdjęcia do prezydent/Braun.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grzegorz_Braun_Sejm_2019.jpg/480px-Grzegorz_Braun_Sejm_2019.jpg",
      initials: "GB",
      roleDesc: "Poseł do PE • Prezes Konfederacji Korony Polskiej",
      profileDesc: "Domyślny rozkład poparcia Korony (ogólnokrajowy wzorzec)",
      distributionKey: "KoronaPolska",
      defaultSupport: 6.0
    },
    {
      id: "fritz",
      name: "Roman Fritz",
      partyName: "Konfederacja Korony Polskiej",
      partyShort: "Korona",
      partyColor: "#d25f17",
      partyLightColor: "#e87a33",
      photoUrl: "Zdjęcia do prezydent/Fritz.png",
      photoFallback: "",
      initials: "RF",
      roleDesc: "Poseł na Sejm • Wiceprezes Konfederacji Korony Polskiej",
      profileDesc: "Minimalnie wyższe poparcie w większych ośrodkach miejskich • Mniejszy udział wsi • Lokalny bonus na Śląsku i w Rybniku (+1%)",
      distributionKey: "KoronaPolska",
      defaultSupport: 6.0
    }
  ],
  RozwojPlus: [
    {
      id: "morawiecki",
      name: "Mateusz Morawiecki",
      partyName: "Rozwój+",
      partyShort: "Rozwój+",
      partyColor: "#0284c7",
      partyLightColor: "#38bdf8",
      photoUrl: "Zdjęcia do prezydent/Morawiecki.png",
      photoFallback: "",
      initials: "MM",
      roleDesc: "Były Premier RP • Lider Ruchu Społecznego Rozwój+",
      distributionKey: "RozwojPlus",
      defaultSupport: 6.0
    }
  ],
  Razem: [
    {
      id: "zandberg",
      name: "Adrian Zandberg",
      partyName: "Partia Razem",
      partyShort: "Razem",
      partyColor: "#8c276f",
      partyLightColor: "#b83d95",
      photoUrl: "Zdjęcia do prezydent/Zandberg.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adrian_Zandberg_Sejm_2020.jpg/480px-Adrian_Zandberg_Sejm_2020.jpg",
      initials: "AZ",
      roleDesc: "Poseł na Sejm • Współprzewodniczący Partii Razem",
      profileDesc: "Domyślny rozkład poparcia Razem (ogólnokrajowy wzorzec)",
      distributionKey: "Razem",
      defaultSupport: 4.0
    },
    {
      id: "owca",
      name: "Aleksandra Owca",
      partyName: "Partia Razem",
      partyShort: "Razem",
      partyColor: "#8c276f",
      partyLightColor: "#b83d95",
      photoUrl: "Zdjęcia do prezydent/Owca.png",
      photoFallback: "",
      initials: "AO",
      roleDesc: "Współprzewodnicząca Partii Razem • Radna m. Krakowa",
      profileDesc: "Minimalnie wyższe poparcie w aglomeracjach • Lekko więcej w Krakowie (+1%) • Mniejszy udział wsi",
      distributionKey: "Razem",
      defaultSupport: 4.0
    }
  ],
  Lewica: [
    {
      id: "biejat",
      name: "Magdalena Biejat",
      partyName: "Nowa Lewica",
      partyShort: "Lewica",
      partyColor: "#d31c3f",
      partyLightColor: "#f03a5e",
      photoUrl: "Zdjęcia do prezydent/Biejat.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Magdalena_Biejat_Sejm_2020.jpg/480px-Magdalena_Biejat_Sejm_2020.jpg",
      initials: "MB",
      roleDesc: "Wicemarszałek Senatu • Nowa Lewica",
      profileDesc: "Domyślny rozkład poparcia Lewicy (ogólnokrajowy wzorzec)",
      distributionKey: "Lewica",
      defaultSupport: 5.0
    },
    {
      id: "dziemianowicz",
      name: "Agnieszka Dziemianowicz-Bąk",
      partyName: "Nowa Lewica",
      partyShort: "Lewica",
      partyColor: "#d31c3f",
      partyLightColor: "#f03a5e",
      photoUrl: "Zdjęcia do prezydent/Dziemianowicz.png",
      photoFallback: "",
      initials: "ADB",
      roleDesc: "Minister Rodziny, Pracy i Polityki Społecznej • Nowa Lewica",
      profileDesc: "Bardziej otwarta na prowincję • Wyższe poparcie w mniejszych miastach i na wsi • Mniejszy udział metropolii • Lokalny bonus na Pomorzu i Dolnym Śląsku (+1%)",
      distributionKey: "Lewica",
      defaultSupport: 5.0
    },
    {
      id: "czarzasty",
      name: "Włodzimierz Czarzasty",
      partyName: "Nowa Lewica",
      partyShort: "Lewica",
      partyColor: "#d31c3f",
      partyLightColor: "#f03a5e",
      photoUrl: "Zdjęcia do prezydent/Czarzasty.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/W%C5%82odzimierz_Czarzasty_2025_%28cropped%29.jpg/500px-W%C5%82odzimierz_Czarzasty_2025_%28cropped%29.jpg",
      initials: "WC",
      roleDesc: "Wicemarszałek Sejmu • Współprzewodniczący Nowej Lewicy",
      profileDesc: "Bardziej skupiony na średnich miastach kosztem metropolii • Lokalny bonus w Zagłębiu Dąbrowskim (+1%)",
      distributionKey: "Lewica",
      defaultSupport: 5.0
    }
  ],
  PL2050: [
    {
      id: "pelczynska",
      name: "Katarzyna Pełczyńska-Nałęcz",
      partyName: "Polska 2050",
      partyShort: "PL2050",
      partyColor: "#e5aa00",
      partyLightColor: "#ffd043",
      photoUrl: "Zdjęcia do prezydent/Pelczynska.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Katarzyna_Pe%C5%82czy%C5%84ska-Na%C5%82%C4%99cz_2024.jpg/480px-Katarzyna_Pe%C5%82czy%C5%84ska-Na%C5%82%C4%99cz_2024.jpg",
      initials: "KPN",
      roleDesc: "Minister Funduszy i Polityki Regionalnej",
      profileDesc: "Silnie skupiona na największych miastach i metropoliach • Wyraźnie niższy udział wsi • Lokalny bonus w Warszawie i na Mazowszu (+1%)",
      distributionKey: "PL2050",
      defaultSupport: 4.0
    },
    {
      id: "holownia",
      name: "Szymon Hołownia",
      partyName: "Polska 2050",
      partyShort: "PL2050",
      partyColor: "#e5aa00",
      partyLightColor: "#ffd043",
      photoUrl: "Zdjęcia do prezydent/Holownia.png",
      photoFallback: "",
      initials: "SH",
      roleDesc: "Marszałek Sejmu • Przewodniczący Polski 2050",
      profileDesc: "Domyślny rozkład poparcia Polski 2050 (ogólnokrajowy wzorzec)",
      distributionKey: "PL2050",
      defaultSupport: 4.0
    }
  ],
  PSL: [
    {
      id: "kosiniak",
      name: "Władysław Kosiniak-Kamysz",
      partyName: "Polskie Stronnictwo Ludowe",
      partyShort: "PSL",
      partyColor: "#39b54a",
      partyLightColor: "#52c963",
      photoUrl: "Zdjęcia do prezydent/Kosiniak.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/W%C5%82adys%C5%82aw_Kosiniak-Kamysz_Sejm_2023.jpg/480px-W%C5%82adys%C5%82aw_Kosiniak-Kamysz_Sejm_2023.jpg",
      initials: "WKK",
      roleDesc: "Wiceprezes Rady Ministrów • Prezes PSL",
      profileDesc: "Domyślny rozkład poparcia PSL (ogólnokrajowy wzorzec)",
      distributionKey: "PSL",
      defaultSupport: 5.0
    },
    {
      id: "motyka",
      name: "Miłosz Motyka",
      partyName: "Polskie Stronnictwo Ludowe",
      partyShort: "PSL",
      partyColor: "#39b54a",
      partyLightColor: "#52c963",
      photoUrl: "Zdjęcia do prezydent/Motyka.png",
      photoFallback: "",
      initials: "MM",
      roleDesc: "Podsekretarz Stanu w MKiŚ • Rzecznik PSL",
      profileDesc: "Skupiony bardziej na średnich miastach kosztem dużych metropolii i wsi • Lokalny bonus w Małopolsce (+1%)",
      distributionKey: "PSL",
      defaultSupport: 5.0
    },
    {
      id: "sobkowiak",
      name: "Magdalena Sobkowiak-Czarnecka",
      partyName: "Polskie Stronnictwo Ludowe",
      partyShort: "PSL",
      partyColor: "#39b54a",
      partyLightColor: "#52c963",
      photoUrl: "Zdjęcia do prezydent/Sobkowiak.png",
      photoFallback: "",
      initials: "MSC",
      roleDesc: "Sekretarz Stanu w KPRM • Pełnomocnik Rządu",
      profileDesc: "Elektorat bardziej skupiony na miastach kosztem wsi, szczególnie w największych aglomeracjach • Lokalny bonus w Wielkopolsce (+1%)",
      distributionKey: "PSL",
      defaultSupport: 5.0
    },
    {
      id: "augustyniak",
      name: "Mirosław Augustyniak",
      partyName: "Polskie Stronnictwo Ludowe",
      partyShort: "PSL",
      partyColor: "#39b54a",
      partyLightColor: "#52c963",
      photoUrl: "Zdjęcia do prezydent/Augustyniak.png",
      photoFallback: "",
      initials: "MA",
      roleDesc: "Starosta Makowski • Wieloletni Radny Sejmiku Mazowieckiego",
      profileDesc: "Ekstremalnie silna baza wiejska • Bardzo wysokie poparcie na wsi kosztem miast i metropolii • Lokalny bonus na Mazowszu i Kurpiach (+1%)",
      distributionKey: "PSL",
      defaultSupport: 5.0
    }
  ]
,
  NF: [
    {
      id: "senyszyn",
      name: "Joanna Senyszyn",
      partyName: "Nowa Fala",
      partyShort: "Nowa Fala",
      partyColor: "#ff66c4",
      partyLightColor: "#ff8cd4",
      photoUrl: "Zdjęcia do prezydent/Senyszyn.png",
      photoFallback: "",
      initials: "JS",
      roleDesc: "Posłanka na Sejm IV, V, VI i IX kadencji • Była eurodeputowana",
      profileDesc: "Ogólnokrajowy rozkład Nowej Fali z wyborów sejmowych",
      distributionKey: "NF",
      defaultSupport: 1.5
    }
  ],
  RDiP: [
    {
      id: "maciak",
      name: "Maciej Maciak",
      partyName: "Ruch Dobrobytu i Pokoju",
      partyShort: "RDiP",
      partyColor: "#2e8b57",
      partyLightColor: "#3cb371",
      photoUrl: "Zdjęcia do prezydent/Maciak.png",
      photoFallback: "",
      initials: "MM",
      roleDesc: "Założyciel i lider Ruchu Dobrobytu i Pokoju",
      profileDesc: "Rozkład Ruchu Dobrobytu i Pokoju z wyborów sejmowych",
      distributionKey: "RDiP",
      defaultSupport: 1.0
    }
  ],
  BS: [
    {
      id: "woch",
      name: "Marek Woch",
      partyName: "Bezpartyjni Samorządowcy",
      partyShort: "BS",
      partyColor: "#0094ff",
      partyLightColor: "#38bdf8",
      photoUrl: "Zdjęcia do prezydent/Woch.png",
      photoFallback: "",
      initials: "MW",
      roleDesc: "Kandydat Bezpartyjnych Samorządowców w wyborach 2025",
      profileDesc: "Rozkład poparcia z panelu wyborczego 2025",
      distributionKey: "Woch",
      defaultSupport: 1.0
    }
  ]
,
  Niezalezni: [
    {
      id: "brzoska",
      name: "Rafał Brzoska",
      partyName: "Kandydat niezależny",
      partyShort: "Niezależny",
      partyColor: "#a855f7",
      partyLightColor: "#c084fc",
      photoUrl: "Zdjęcia do prezydent/Brzoska.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rafa%C5%82_Brzoska.png",
      initials: "RB",
      roleDesc: "Przedsiębiorca, twórca grupy InPost",
      profileDesc: "Rozkład poparcia wyliczony z transferów partyjnych z kalkulatora sejmowego",
      distributionKey: "Brzoska",
      defaultSupport: 11.5
    },
    {
      id: "matysiak",
      name: "Paulina Matysiak",
      partyName: "Kandydatka niezależna",
      partyShort: "Niezależna",
      partyColor: "#e11d48",
      partyLightColor: "#fb7185",
      photoUrl: "Zdjęcia do prezydent/Matysiak.png",
      photoFallback: "https://upload.wikimedia.org/wikipedia/commons/6/65/Paulina_Matysiak_Sejm_2019.jpg",
      initials: "PM",
      roleDesc: "Posłanka na Sejm IX i X kadencji • Ruch Tak dla Rozwoju",
      profileDesc: "Rozkład poparcia wyliczony z transferów: Rozwój+ 35%, Razem 22%, Nowa Lewica 8%, PiS 6%, PSL 6%, PL2050 5%, Inni 5%, Konfederacja 4%, KO 1.5%, Korona 1% oraz 10% niezdecydowanych.",
      distributionKey: "Matysiak",
      defaultSupport: 6.5
    }
  ]
};

const CANDIDATES_CONFIG = [
  {
    id: "nawrocki",
    name: "Karol Nawrocki",
    partyName: "Prawo i Sprawiedliwość",
    partyShort: "PiS",
    partyColor: "#004494",
    partyLightColor: "#1e88e5",
    photoUrl: "Zdjęcia do prezydent/Nawrocki.png",
    photoFallback: "https://img.dorzeczy.pl/img/nawrocki-jutro-zaczynamy-nowy-rozdzial-w-historii-polski/63/12/b3c289c111866a9197e4186556d1.webp",
    initials: "KN",
    distributionKey: "PiS",
    defaultSupport: 25.0
  },
  {
    id: "trzaskowski",
    name: "Rafał Trzaskowski",
    partyName: "Koalicja Obywatelska",
    partyShort: "KO",
    partyColor: "#ff5757",
    partyLightColor: "#ff7b7b",
    photoUrl: "Zdjęcia do prezydent/Trzaskowski.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rafa%C5%82_Trzaskowski_2023.jpg/480px-Rafa%C5%82_Trzaskowski_2023.jpg",
    initials: "RT",
    distributionKey: "KO",
    defaultSupport: 29.0
  },
  {
    id: "mentzen",
    name: "Sławomir Mentzen",
    partyName: "Konfederacja",
    partyShort: "Konf.",
    partyColor: "#16325c",
    partyLightColor: "#295696",
    photoUrl: "Zdjęcia do prezydent/Mentzen.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/S%C5%82awomir_Mentzen_Sejm_2023.jpg/480px-S%C5%82awomir_Mentzen_Sejm_2023.jpg",
    initials: "SM",
    distributionKey: "Konfederacja",
    defaultSupport: 13.5
  },
  {
    id: "braun",
    name: "Grzegorz Braun",
    partyName: "Konfederacja Korony Polskiej",
    partyShort: "Korona",
    partyColor: "#d25f17",
    partyLightColor: "#e87a33",
    photoUrl: "Zdjęcia do prezydent/Braun.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grzegorz_Braun_Sejm_2019.jpg/480px-Grzegorz_Braun_Sejm_2019.jpg",
    initials: "GB",
    distributionKey: "KoronaPolska",
    defaultSupport: 5.5
  },
  {
    id: "morawiecki",
    name: "Mateusz Morawiecki",
    partyName: "Rozwój+",
    partyShort: "Rozwój+",
    partyColor: "#0284c7",
    partyLightColor: "#38bdf8",
    photoUrl: "Zdjęcia do prezydent/Morawiecki.png",
    photoFallback: "",
    initials: "MM",
    distributionKey: "RozwojPlus",
    defaultSupport: 5.5
  },
  {
    id: "zandberg",
    name: "Adrian Zandberg",
    partyName: "Partia Razem",
    partyShort: "Razem",
    partyColor: "#8c276f",
    partyLightColor: "#b83d95",
    photoUrl: "Zdjęcia do prezydent/Zandberg.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adrian_Zandberg_Sejm_2020.jpg/480px-Adrian_Zandberg_Sejm_2020.jpg",
    initials: "AZ",
    distributionKey: "Razem",
    defaultSupport: 4.5
  },
  {
    id: "biejat",
    name: "Magdalena Biejat",
    partyName: "Nowa Lewica",
    partyShort: "Lewica",
    partyColor: "#d31c3f",
    partyLightColor: "#f03a5e",
    photoUrl: "Zdjęcia do prezydent/Biejat.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Magdalena_Biejat_Sejm_2020.jpg/480px-Magdalena_Biejat_Sejm_2020.jpg",
    initials: "MB",
    distributionKey: "Lewica",
    defaultSupport: 5.0
  },
  {
    id: "pelczynska",
    name: "Katarzyna Pełczyńska-Nałęcz",
    partyName: "Polska 2050",
    partyShort: "PL2050",
    partyColor: "#e5aa00",
    partyLightColor: "#ffd043",
    photoUrl: "Zdjęcia do prezydent/Pelczynska.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Katarzyna_Pe%C5%82czy%C5%84ska-Na%C5%82%C4%99cz_2024.jpg/480px-Katarzyna_Pe%C5%82czy%C5%84ska-Na%C5%82%C4%99cz_2024.jpg",
    initials: "KPN",
    distributionKey: "PL2050",
    defaultSupport: 4.0
  },
  {
    id: "kosiniak",
    name: "Władysław Kosiniak-Kamysz",
    partyName: "Polskie Stronnictwo Ludowe",
    partyShort: "PSL",
    partyColor: "#39b54a",
    partyLightColor: "#52c963",
    photoUrl: "Zdjęcia do prezydent/Kosiniak.png",
    photoFallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/W%C5%82adys%C5%82aw_Kosiniak-Kamysz_Sejm_2023.jpg/480px-W%C5%82adys%C5%82aw_Kosiniak-Kamysz_Sejm_2023.jpg",
    initials: "WKK",
    distributionKey: "PSL",
    defaultSupport: 4.5
  },
  {
    id: "senyszyn",
    name: "Joanna Senyszyn",
    partyName: "Nowa Fala",
    partyShort: "Nowa Fala",
    partyColor: "#ff66c4",
    partyLightColor: "#ff8cd4",
    photoUrl: "Zdjęcia do prezydent/Senyszyn.png",
    photoFallback: "",
    initials: "JS",
    distributionKey: "NF",
    defaultSupport: 1.5
  },
  {
    id: "maciak",
    name: "Maciej Maciak",
    partyName: "Ruch Dobrobytu i Pokoju",
    partyShort: "RDiP",
    partyColor: "#2e8b57",
    partyLightColor: "#3cb371",
    photoUrl: "Zdjęcia do prezydent/Maciak.png",
    photoFallback: "",
    initials: "MM",
    distributionKey: "RDiP",
    defaultSupport: 1.0
  },
  {
    id: "woch",
    name: "Marek Woch",
    partyName: "Bezpartyjni Samorządowcy",
    partyShort: "BS",
    partyColor: "#0094ff",
    partyLightColor: "#38bdf8",
    photoUrl: "Zdjęcia do prezydent/Woch.png",
    photoFallback: "",
    initials: "MW",
    distributionKey: "Woch",
    defaultSupport: 1.0
  }
];

// CANDIDATE_VIEWS_DATA - Poglądy i profile medialne kandydatów
// Skale:
// - aborcja: 0 (za) - 10 (przeciw)
// - lgbt: 0 (za) - 10 (przeciw)
// - gospodarka: 0 (socjalizm) - 10 (kapitalizm)
// - kosmopolityzmNacjonalizm: 0 (kosmopolityzm) - 10 (nacjonalizm)
// - geopolityka: UE, Rosja, USA: 0 (anty) - 10 (pro)
// - medialnosc: tradycyjne, internetowe (media społecznościowe)
const CANDIDATE_VIEWS_DATA = {
  "nawrocki": {
    "aborcja": {
      "kandydat": 8.5,
      "elektorat": 6.8,
      "roznica": 1.7,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.2
    },
    "lgbt": {
      "kandydat": 8.6,
      "elektorat": 7.9,
      "roznica": 0.7,
      "wagaOpis": "Średnia",
      "wagaElektorat": 4.8
    },
    "gospodarka": {
      "kandydat": 6.2,
      "elektorat": 5.8,
      "roznica": 0.4,
      "waga": 7.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.2,
      "elektorat": 8.5,
      "roznica": -0.3,
      "waga": 8.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 2.2,
        "elektorat": 1.8,
        "waga": 8.7
      },
      "rosja": {
        "kandydat": 0.8,
        "elektorat": 0.6,
        "waga": 9.0
      },
      "usa": {
        "kandydat": 9.0,
        "elektorat": 9.2,
        "waga": 8.5
      }
    },
    "medialnosc": {
      "tradycyjne": 95.0,
      "internetowe": 78.0
    }
  },
  "czarnek": {
    "aborcja": {
      "kandydat": 9.3,
      "elektorat": 6.8,
      "roznica": 2.5,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.4
    },
    "lgbt": {
      "kandydat": 9.5,
      "elektorat": 7.9,
      "roznica": 1.6,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.2
    },
    "gospodarka": {
      "kandydat": 7.2,
      "elektorat": 5.7,
      "roznica": 1.5,
      "waga": 7.8
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.5,
      "elektorat": 8.5,
      "roznica": 0.0,
      "waga": 8.7
    },
    "geopolityka": {
      "ue": {
        "kandydat": 1.8,
        "elektorat": 1.7,
        "waga": 8.8
      },
      "rosja": {
        "kandydat": 0.7,
        "elektorat": 0.5,
        "waga": 9.1
      },
      "usa": {
        "kandydat": 8.8,
        "elektorat": 9.0,
        "waga": 8.4
      }
    },
    "medialnosc": {
      "tradycyjne": 62.0,
      "internetowe": 55.0
    }
  },
  "kaczynski": {
    "aborcja": {
      "kandydat": 8.4,
      "elektorat": 6.8,
      "roznica": 1.6,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.1
    },
    "lgbt": {
      "kandydat": 8.8,
      "elektorat": 7.9,
      "roznica": 0.9,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.0
    },
    "gospodarka": {
      "kandydat": 5.5,
      "elektorat": 5.6,
      "roznica": -0.1,
      "waga": 8.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.7,
      "elektorat": 8.6,
      "roznica": 0.1,
      "waga": 8.8
    },
    "geopolityka": {
      "ue": {
        "kandydat": 2.0,
        "elektorat": 1.6,
        "waga": 9.0
      },
      "rosja": {
        "kandydat": 0.5,
        "elektorat": 0.4,
        "waga": 9.3
      },
      "usa": {
        "kandydat": 9.2,
        "elektorat": 9.3,
        "waga": 8.8
      }
    },
    "medialnosc": {
      "tradycyjne": 85.0,
      "internetowe": 48.0
    }
  },
  "bochenski": {
    "aborcja": {
      "kandydat": 6.7,
      "elektorat": 6.8,
      "roznica": -0.1,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.8
    },
    "lgbt": {
      "kandydat": 8.1,
      "elektorat": 7.9,
      "roznica": 0.2,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.5
    },
    "gospodarka": {
      "kandydat": 6.8,
      "elektorat": 6.0,
      "roznica": 0.8,
      "waga": 7.2
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 7.8,
      "elektorat": 8.4,
      "roznica": -0.6,
      "waga": 8.0
    },
    "geopolityka": {
      "ue": {
        "kandydat": 2.5,
        "elektorat": 2.0,
        "waga": 8.3
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 0.7,
        "waga": 8.8
      },
      "usa": {
        "kandydat": 8.7,
        "elektorat": 8.9,
        "waga": 8.2
      }
    },
    "medialnosc": {
      "tradycyjne": 28.0,
      "internetowe": 22.0
    }
  },
  "jaki": {
    "aborcja": {
      "kandydat": 9.2,
      "elektorat": 7.0,
      "roznica": 2.2,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.3
    },
    "lgbt": {
      "kandydat": 9.2,
      "elektorat": 8.0,
      "roznica": 1.2,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.6
    },
    "gospodarka": {
      "kandydat": 6.5,
      "elektorat": 6.1,
      "roznica": 0.4,
      "waga": 7.4
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.0,
      "elektorat": 8.5,
      "roznica": -0.5,
      "waga": 8.3
    },
    "geopolityka": {
      "ue": {
        "kandydat": 2.3,
        "elektorat": 1.9,
        "waga": 8.5
      },
      "rosja": {
        "kandydat": 0.9,
        "elektorat": 0.6,
        "waga": 8.9
      },
      "usa": {
        "kandydat": 8.9,
        "elektorat": 9.1,
        "waga": 8.3
      }
    },
    "medialnosc": {
      "tradycyjne": 58.0,
      "internetowe": 82.0
    }
  },
  "tarczynski": {
    "aborcja": {
      "kandydat": 9.8,
      "elektorat": 6.9,
      "roznica": 2.9,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.5
    },
    "lgbt": {
      "kandydat": 9.4,
      "elektorat": 7.9,
      "roznica": 1.5,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.4
    },
    "gospodarka": {
      "kandydat": 7.0,
      "elektorat": 6.3,
      "roznica": 0.7,
      "waga": 6.8
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.8,
      "elektorat": 8.6,
      "roznica": 0.2,
      "waga": 8.9
    },
    "geopolityka": {
      "ue": {
        "kandydat": 1.5,
        "elektorat": 1.4,
        "waga": 9.0
      },
      "rosja": {
        "kandydat": 0.6,
        "elektorat": 0.5,
        "waga": 9.2
      },
      "usa": {
        "kandydat": 9.3,
        "elektorat": 9.4,
        "waga": 8.9
      }
    },
    "medialnosc": {
      "tradycyjne": 52.0,
      "internetowe": 85.0
    }
  },
  "trzaskowski": {
    "aborcja": {
      "kandydat": 2.2,
      "elektorat": 2.4,
      "roznica": -0.2,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 7.6
    },
    "lgbt": {
      "kandydat": 2.1,
      "elektorat": 2.8,
      "roznica": -0.7,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 6.8
    },
    "gospodarka": {
      "kandydat": 6.8,
      "elektorat": 6.5,
      "roznica": 0.3,
      "waga": 7.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.8,
      "elektorat": 2.5,
      "roznica": 0.3,
      "waga": 7.0
    },
    "geopolityka": {
      "ue": {
        "kandydat": 8.0,
        "elektorat": 8.3,
        "waga": 8.0
      },
      "rosja": {
        "kandydat": 0.5,
        "elektorat": 0.4,
        "waga": 8.5
      },
      "usa": {
        "kandydat": 8.5,
        "elektorat": 8.3,
        "waga": 7.8
      }
    },
    "medialnosc": {
      "tradycyjne": 78.0,
      "internetowe": 65.0
    }
  },
  "tusk": {
    "aborcja": {
      "kandydat": 2.4,
      "elektorat": 2.4,
      "roznica": 0.0,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 7.5
    },
    "lgbt": {
      "kandydat": 2.9,
      "elektorat": 2.8,
      "roznica": 0.1,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 6.5
    },
    "gospodarka": {
      "kandydat": 6.5,
      "elektorat": 6.4,
      "roznica": 0.1,
      "waga": 7.2
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.5,
      "elektorat": 2.5,
      "roznica": 0.0,
      "waga": 7.2
    },
    "geopolityka": {
      "ue": {
        "kandydat": 8.2,
        "elektorat": 8.4,
        "waga": 8.2
      },
      "rosja": {
        "kandydat": 0.4,
        "elektorat": 0.3,
        "waga": 8.7
      },
      "usa": {
        "kandydat": 8.7,
        "elektorat": 8.5,
        "waga": 8.0
      }
    },
    "medialnosc": {
      "tradycyjne": 92.0,
      "internetowe": 88.0
    }
  },
  "sikorski": {
    "aborcja": {
      "kandydat": 2.8,
      "elektorat": 2.6,
      "roznica": 0.2,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.8
    },
    "lgbt": {
      "kandydat": 3.5,
      "elektorat": 2.9,
      "roznica": 0.6,
      "wagaOpis": "Średnia",
      "wagaElektorat": 4.5
    },
    "gospodarka": {
      "kandydat": 7.0,
      "elektorat": 6.6,
      "roznica": 0.4,
      "waga": 6.9
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 3.0,
      "elektorat": 2.7,
      "roznica": 0.3,
      "waga": 7.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 7.8,
        "elektorat": 8.1,
        "waga": 8.1
      },
      "rosja": {
        "kandydat": 0.3,
        "elektorat": 0.3,
        "waga": 9.0
      },
      "usa": {
        "kandydat": 8.8,
        "elektorat": 8.6,
        "waga": 8.3
      }
    },
    "medialnosc": {
      "tradycyjne": 82.0,
      "internetowe": 60.0
    }
  },
  "marchewka": {
    "aborcja": {
      "kandydat": 2.3,
      "elektorat": 2.4,
      "roznica": -0.1,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 7.4
    },
    "lgbt": {
      "kandydat": 2.7,
      "elektorat": 2.8,
      "roznica": -0.1,
      "wagaOpis": "Średnia",
      "wagaElektorat": 6.2
    },
    "gospodarka": {
      "kandydat": 6.7,
      "elektorat": 6.5,
      "roznica": 0.2,
      "waga": 6.8
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.7,
      "elektorat": 2.6,
      "roznica": 0.1,
      "waga": 6.8
    },
    "geopolityka": {
      "ue": {
        "kandydat": 7.9,
        "elektorat": 8.2,
        "waga": 7.8
      },
      "rosja": {
        "kandydat": 0.6,
        "elektorat": 0.5,
        "waga": 8.3
      },
      "usa": {
        "kandydat": 8.4,
        "elektorat": 8.2,
        "waga": 7.5
      }
    },
    "medialnosc": {
      "tradycyjne": 25.0,
      "internetowe": 18.0
    }
  },
  "mentzen": {
    "aborcja": {
      "kandydat": 9.4,
      "elektorat": 5.8,
      "roznica": 3.6,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 1.8
    },
    "lgbt": {
      "kandydat": 8.9,
      "elektorat": 6.7,
      "roznica": 2.2,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 2.2
    },
    "gospodarka": {
      "kandydat": 9.0,
      "elektorat": 8.7,
      "roznica": 0.3,
      "waga": 9.2
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.5,
      "elektorat": 8.8,
      "roznica": -0.3,
      "waga": 8.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 1.5,
        "elektorat": 1.2,
        "waga": 8.8
      },
      "rosja": {
        "kandydat": 3.5,
        "elektorat": 4.0,
        "waga": 7.5
      },
      "usa": {
        "kandydat": 7.0,
        "elektorat": 6.5,
        "waga": 7.0
      }
    },
    "medialnosc": {
      "tradycyjne": 55.0,
      "internetowe": 96.0
    }
  },
  "bosak": {
    "aborcja": {
      "kandydat": 9.1,
      "elektorat": 6.2,
      "roznica": 2.9,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.6
    },
    "lgbt": {
      "kandydat": 9.3,
      "elektorat": 7.4,
      "roznica": 1.9,
      "wagaOpis": "Niska",
      "wagaElektorat": 4.6
    },
    "gospodarka": {
      "kandydat": 8.5,
      "elektorat": 8.3,
      "roznica": 0.2,
      "waga": 8.9
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 8.3,
      "elektorat": 8.7,
      "roznica": -0.4,
      "waga": 8.4
    },
    "geopolityka": {
      "ue": {
        "kandydat": 1.7,
        "elektorat": 1.4,
        "waga": 8.6
      },
      "rosja": {
        "kandydat": 3.2,
        "elektorat": 3.8,
        "waga": 7.3
      },
      "usa": {
        "kandydat": 7.2,
        "elektorat": 6.8,
        "waga": 7.1
      }
    },
    "medialnosc": {
      "tradycyjne": 60.0,
      "internetowe": 72.0
    }
  },
  "braun": {
    "aborcja": {
      "kandydat": 10.0,
      "elektorat": 8.6,
      "roznica": 1.4,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.3
    },
    "lgbt": {
      "kandydat": 10.0,
      "elektorat": 9.2,
      "roznica": 0.8,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 8.9
    },
    "gospodarka": {
      "kandydat": 9.3,
      "elektorat": 8.8,
      "roznica": 0.5,
      "waga": 8.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 9.7,
      "elektorat": 9.5,
      "roznica": 0.2,
      "waga": 9.2
    },
    "geopolityka": {
      "ue": {
        "kandydat": 0.3,
        "elektorat": 0.2,
        "waga": 9.5
      },
      "rosja": {
        "kandydat": 7.5,
        "elektorat": 7.8,
        "waga": 8.0
      },
      "usa": {
        "kandydat": 2.5,
        "elektorat": 2.0,
        "waga": 8.5
      }
    },
    "medialnosc": {
      "tradycyjne": 48.0,
      "internetowe": 90.0
    }
  },
  "fritz": {
    "aborcja": {
      "kandydat": 9.9,
      "elektorat": 8.6,
      "roznica": 1.3,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.2
    },
    "lgbt": {
      "kandydat": 9.9,
      "elektorat": 9.2,
      "roznica": 0.7,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 8.7
    },
    "gospodarka": {
      "kandydat": 9.1,
      "elektorat": 8.7,
      "roznica": 0.4,
      "waga": 8.4
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 9.5,
      "elektorat": 9.4,
      "roznica": 0.1,
      "waga": 9.0
    },
    "geopolityka": {
      "ue": {
        "kandydat": 0.5,
        "elektorat": 0.3,
        "waga": 9.3
      },
      "rosja": {
        "kandydat": 7.2,
        "elektorat": 7.5,
        "waga": 7.8
      },
      "usa": {
        "kandydat": 2.7,
        "elektorat": 2.2,
        "waga": 8.3
      }
    },
    "medialnosc": {
      "tradycyjne": 15.0,
      "internetowe": 25.0
    }
  },
  "biejat": {
    "aborcja": {
      "kandydat": 1.0,
      "elektorat": 1.2,
      "roznica": -0.2,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 8.8
    },
    "lgbt": {
      "kandydat": 0.8,
      "elektorat": 1.4,
      "roznica": -0.6,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 8.5
    },
    "gospodarka": {
      "kandydat": 2.8,
      "elektorat": 2.5,
      "roznica": 0.3,
      "waga": 7.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 1.8,
      "elektorat": 2.0,
      "roznica": -0.2,
      "waga": 5.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 8.2,
        "elektorat": 8.0,
        "waga": 6.5
      },
      "rosja": {
        "kandydat": 0.7,
        "elektorat": 0.8,
        "waga": 7.0
      },
      "usa": {
        "kandydat": 5.5,
        "elektorat": 5.2,
        "waga": 5.5
      }
    },
    "medialnosc": {
      "tradycyjne": 42.0,
      "internetowe": 58.0
    }
  },
  "dziemianowicz": {
    "aborcja": {
      "kandydat": 1.0,
      "elektorat": 1.3,
      "roznica": -0.3,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 8.9
    },
    "lgbt": {
      "kandydat": 0.8,
      "elektorat": 1.4,
      "roznica": -0.6,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 8.6
    },
    "gospodarka": {
      "kandydat": 2.5,
      "elektorat": 2.3,
      "roznica": 0.2,
      "waga": 7.3
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 1.7,
      "elektorat": 2.0,
      "roznica": -0.3,
      "waga": 5.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 8.3,
        "elektorat": 8.1,
        "waga": 6.3
      },
      "rosja": {
        "kandydat": 0.8,
        "elektorat": 0.9,
        "waga": 6.8
      },
      "usa": {
        "kandydat": 5.3,
        "elektorat": 5.0,
        "waga": 5.3
      }
    },
    "medialnosc": {
      "tradycyjne": 35.0,
      "internetowe": 40.0
    }
  },
  "czarzasty": {
    "aborcja": {
      "kandydat": 1.4,
      "elektorat": 1.5,
      "roznica": -0.1,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 7.8
    },
    "lgbt": {
      "kandydat": 1.3,
      "elektorat": 1.5,
      "roznica": -0.2,
      "wagaOpis": "Wysoka",
      "wagaElektorat": 7.5
    },
    "gospodarka": {
      "kandydat": 2.7,
      "elektorat": 2.6,
      "roznica": 0.1,
      "waga": 6.8
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.0,
      "elektorat": 2.1,
      "roznica": -0.1,
      "waga": 5.8
    },
    "geopolityka": {
      "ue": {
        "kandydat": 8.0,
        "elektorat": 7.9,
        "waga": 6.8
      },
      "rosja": {
        "kandydat": 0.9,
        "elektorat": 1.0,
        "waga": 7.2
      },
      "usa": {
        "kandydat": 5.8,
        "elektorat": 5.5,
        "waga": 5.8
      }
    },
    "medialnosc": {
      "tradycyjne": 58.0,
      "internetowe": 35.0
    }
  },
  "zandberg": {
    "aborcja": {
      "kandydat": 1.0,
      "elektorat": 0.9,
      "roznica": 0.1,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.2
    },
    "lgbt": {
      "kandydat": 0.7,
      "elektorat": 1.0,
      "roznica": -0.3,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.1
    },
    "gospodarka": {
      "kandydat": 2.0,
      "elektorat": 1.8,
      "roznica": 0.2,
      "waga": 8.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.5,
      "elektorat": 2.3,
      "roznica": 0.2,
      "waga": 6.0
    },
    "geopolityka": {
      "ue": {
        "kandydat": 7.2,
        "elektorat": 7.0,
        "waga": 6.5
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 1.1,
        "waga": 7.5
      },
      "usa": {
        "kandydat": 4.5,
        "elektorat": 4.2,
        "waga": 6.0
      }
    },
    "medialnosc": {
      "tradycyjne": 45.0,
      "internetowe": 62.0
    }
  },
  "owca": {
    "aborcja": {
      "kandydat": 1.0,
      "elektorat": 0.9,
      "roznica": 0.1,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.1
    },
    "lgbt": {
      "kandydat": 0.5,
      "elektorat": 1.0,
      "roznica": -0.5,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.2
    },
    "gospodarka": {
      "kandydat": 2.2,
      "elektorat": 2.0,
      "roznica": 0.2,
      "waga": 7.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.2,
      "elektorat": 2.3,
      "roznica": -0.1,
      "waga": 5.8
    },
    "geopolityka": {
      "ue": {
        "kandydat": 7.5,
        "elektorat": 7.3,
        "waga": 6.3
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 1.1,
        "waga": 7.3
      },
      "usa": {
        "kandydat": 4.8,
        "elektorat": 4.5,
        "waga": 5.8
      }
    },
    "medialnosc": {
      "tradycyjne": 12.0,
      "internetowe": 20.0
    }
  },
  "pelczynska": {
    "aborcja": {
      "kandydat": 3.8,
      "elektorat": 4.1,
      "roznica": -0.3,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.6
    },
    "lgbt": {
      "kandydat": 3.2,
      "elektorat": 3.9,
      "roznica": -0.7,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.5
    },
    "gospodarka": {
      "kandydat": 6.2,
      "elektorat": 6.0,
      "roznica": 0.2,
      "waga": 6.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 3.5,
      "elektorat": 3.8,
      "roznica": -0.3,
      "waga": 6.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.8,
        "elektorat": 6.5,
        "waga": 6.8
      },
      "rosja": {
        "kandydat": 1.2,
        "elektorat": 1.3,
        "waga": 7.5
      },
      "usa": {
        "kandydat": 7.5,
        "elektorat": 7.3,
        "waga": 7.0
      }
    },
    "medialnosc": {
      "tradycyjne": 30.0,
      "internetowe": 28.0
    }
  },
  "holownia": {
    "aborcja": {
      "kandydat": 5.4,
      "elektorat": 4.2,
      "roznica": 1.2,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.3
    },
    "lgbt": {
      "kandydat": 5.1,
      "elektorat": 4.1,
      "roznica": 1.0,
      "wagaOpis": "Średnia",
      "wagaElektorat": 4.9
    },
    "gospodarka": {
      "kandydat": 6.3,
      "elektorat": 6.1,
      "roznica": 0.2,
      "waga": 6.7
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 3.8,
      "elektorat": 4.0,
      "roznica": -0.2,
      "waga": 6.8
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.5,
        "elektorat": 6.2,
        "waga": 7.0
      },
      "rosja": {
        "kandydat": 1.3,
        "elektorat": 1.4,
        "waga": 7.3
      },
      "usa": {
        "kandydat": 7.8,
        "elektorat": 7.5,
        "waga": 7.2
      }
    },
    "medialnosc": {
      "tradycyjne": 55.0,
      "internetowe": 45.0
    }
  },
  "kosiniak": {
    "aborcja": {
      "kandydat": 6.8,
      "elektorat": 5.5,
      "roznica": 1.3,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.2
    },
    "lgbt": {
      "kandydat": 7.1,
      "elektorat": 6.2,
      "roznica": 0.9,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.4
    },
    "gospodarka": {
      "kandydat": 5.8,
      "elektorat": 5.5,
      "roznica": 0.3,
      "waga": 7.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 4.2,
      "elektorat": 4.5,
      "roznica": -0.3,
      "waga": 6.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.2,
        "elektorat": 5.9,
        "waga": 6.8
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 1.1,
        "waga": 8.0
      },
      "usa": {
        "kandydat": 8.2,
        "elektorat": 8.0,
        "waga": 7.8
      }
    },
    "medialnosc": {
      "tradycyjne": 80.0,
      "internetowe": 50.0
    }
  },
  "motyka": {
    "aborcja": {
      "kandydat": 6.6,
      "elektorat": 5.5,
      "roznica": 1.1,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.1
    },
    "lgbt": {
      "kandydat": 7.3,
      "elektorat": 6.2,
      "roznica": 1.1,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.3
    },
    "gospodarka": {
      "kandydat": 5.9,
      "elektorat": 5.6,
      "roznica": 0.3,
      "waga": 6.8
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 4.0,
      "elektorat": 4.4,
      "roznica": -0.4,
      "waga": 6.3
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.3,
        "elektorat": 6.0,
        "waga": 6.5
      },
      "rosja": {
        "kandydat": 1.1,
        "elektorat": 1.2,
        "waga": 7.8
      },
      "usa": {
        "kandydat": 8.0,
        "elektorat": 7.8,
        "waga": 7.5
      }
    },
    "medialnosc": {
      "tradycyjne": 22.0,
      "internetowe": 18.0
    }
  },
  "sobkowiak": {
    "aborcja": {
      "kandydat": 4.8,
      "elektorat": 5.2,
      "roznica": -0.4,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.0
    },
    "lgbt": {
      "kandydat": 5.0,
      "elektorat": 6.0,
      "roznica": -1.0,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.0
    },
    "gospodarka": {
      "kandydat": 5.7,
      "elektorat": 5.5,
      "roznica": 0.2,
      "waga": 6.9
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 3.9,
      "elektorat": 4.3,
      "roznica": -0.4,
      "waga": 6.2
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.4,
        "elektorat": 6.1,
        "waga": 6.5
      },
      "rosja": {
        "kandydat": 1.2,
        "elektorat": 1.3,
        "waga": 7.7
      },
      "usa": {
        "kandydat": 7.9,
        "elektorat": 7.7,
        "waga": 7.4
      }
    },
    "medialnosc": {
      "tradycyjne": 35.0,
      "internetowe": 30.0
    }
  },
  "augustyniak": {
    "aborcja": {
      "kandydat": 7.2,
      "elektorat": 6.0,
      "roznica": 1.2,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.4
    },
    "lgbt": {
      "kandydat": 7.8,
      "elektorat": 6.5,
      "roznica": 1.3,
      "wagaOpis": "Niska",
      "wagaElektorat": 3.8
    },
    "gospodarka": {
      "kandydat": 5.6,
      "elektorat": 5.4,
      "roznica": 0.2,
      "waga": 6.7
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 4.1,
      "elektorat": 4.4,
      "roznica": -0.3,
      "waga": 6.4
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.1,
        "elektorat": 5.8,
        "waga": 6.7
      },
      "rosja": {
        "kandydat": 1.1,
        "elektorat": 1.2,
        "waga": 7.9
      },
      "usa": {
        "kandydat": 8.1,
        "elektorat": 7.9,
        "waga": 7.6
      }
    },
    "medialnosc": {
      "tradycyjne": 10.0,
      "internetowe": 12.0
    }
  },
  "morawiecki": {
    "aborcja": {
      "kandydat": 6.4,
      "elektorat": 6.2,
      "roznica": 0.2,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 2.2
    },
    "lgbt": {
      "kandydat": 7.2,
      "elektorat": 6.4,
      "roznica": 0.8,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 1.9
    },
    "gospodarka": {
      "kandydat": 5.5,
      "elektorat": 5.2,
      "roznica": 0.3,
      "waga": 7.8
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 7.5,
      "elektorat": 7.8,
      "roznica": -0.3,
      "waga": 7.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 3.5,
        "elektorat": 3.0,
        "waga": 7.5
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 0.8,
        "waga": 8.5
      },
      "usa": {
        "kandydat": 8.5,
        "elektorat": 8.7,
        "waga": 8.0
      }
    },
    "medialnosc": {
      "tradycyjne": 65.0,
      "internetowe": 42.0
    }
  },
  "woch": {
    "aborcja": {
      "kandydat": 8.8,
      "elektorat": 4.9,
      "roznica": 3.9,
      "wagaOpis": "Niska",
      "wagaElektorat": 2.8
    },
    "lgbt": {
      "kandydat": 8.7,
      "elektorat": 5.3,
      "roznica": 3.4,
      "wagaOpis": "Niska",
      "wagaElektorat": 2.4
    },
    "gospodarka": {
      "kandydat": 6.0,
      "elektorat": 5.8,
      "roznica": 0.2,
      "waga": 6.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 5.0,
      "elektorat": 5.2,
      "roznica": -0.2,
      "waga": 5.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 5.5,
        "elektorat": 5.2,
        "waga": 5.5
      },
      "rosja": {
        "kandydat": 2.5,
        "elektorat": 2.8,
        "waga": 6.0
      },
      "usa": {
        "kandydat": 6.5,
        "elektorat": 6.3,
        "waga": 5.8
      }
    },
    "medialnosc": {
      "tradycyjne": 18.0,
      "internetowe": 15.0
    }
  },
  "senyszyn": {
    "aborcja": {
      "kandydat": 0.5,
      "elektorat": 0.6,
      "roznica": -0.1,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.4
    },
    "lgbt": {
      "kandydat": 0.4,
      "elektorat": 0.7,
      "roznica": -0.3,
      "wagaOpis": "Bardzo wysoka",
      "wagaElektorat": 9.0
    },
    "gospodarka": {
      "kandydat": 3.5,
      "elektorat": 3.2,
      "roznica": 0.3,
      "waga": 6.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 1.5,
      "elektorat": 1.8,
      "roznica": -0.3,
      "waga": 5.0
    },
    "geopolityka": {
      "ue": {
        "kandydat": 8.5,
        "elektorat": 8.3,
        "waga": 6.0
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 1.1,
        "waga": 6.5
      },
      "usa": {
        "kandydat": 4.0,
        "elektorat": 3.8,
        "waga": 5.0
      }
    },
    "medialnosc": {
      "tradycyjne": 25.0,
      "internetowe": 22.0
    }
  },
  "maciak": {
    "aborcja": {
      "kandydat": 6.0,
      "elektorat": 5.5,
      "roznica": 0.5,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 1.2
    },
    "lgbt": {
      "kandydat": 7.0,
      "elektorat": 6.5,
      "roznica": 0.5,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 1.5
    },
    "gospodarka": {
      "kandydat": 4.0,
      "elektorat": 3.8,
      "roznica": 0.2,
      "waga": 5.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 6.5,
      "elektorat": 6.8,
      "roznica": -0.3,
      "waga": 7.0
    },
    "geopolityka": {
      "ue": {
        "kandydat": 4.0,
        "elektorat": 3.7,
        "waga": 7.0
      },
      "rosja": {
        "kandydat": 3.0,
        "elektorat": 3.3,
        "waga": 6.5
      },
      "usa": {
        "kandydat": 6.0,
        "elektorat": 5.8,
        "waga": 6.5
      }
    },
    "medialnosc": {
      "tradycyjne": 12.0,
      "internetowe": 18.0
    }
  },
  "brzoska": {
    "aborcja": {
      "kandydat": 4.0,
      "elektorat": 3.5,
      "roznica": 0.5,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 1.4
    },
    "lgbt": {
      "kandydat": 3.8,
      "elektorat": 3.4,
      "roznica": 0.4,
      "wagaOpis": "Bardzo niska",
      "wagaElektorat": 1.6
    },
    "gospodarka": {
      "kandydat": 8.2,
      "elektorat": 7.5,
      "roznica": 0.7,
      "waga": 8.5
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 4.5,
      "elektorat": 4.8,
      "roznica": -0.3,
      "waga": 5.5
    },
    "geopolityka": {
      "ue": {
        "kandydat": 6.0,
        "elektorat": 5.8,
        "waga": 5.5
      },
      "rosja": {
        "kandydat": 2.0,
        "elektorat": 2.2,
        "waga": 6.0
      },
      "usa": {
        "kandydat": 7.5,
        "elektorat": 7.3,
        "waga": 6.5
      }
    },
    "medialnosc": {
      "tradycyjne": 40.0,
      "internetowe": 55.0
    }
  },
  "matysiak": {
    "aborcja": null,
    "lgbt": {
      "kandydat": 1.2,
      "elektorat": 2.1,
      "roznica": -0.9,
      "wagaOpis": "Średnia",
      "wagaElektorat": 5.2
    },
    "gospodarka": {
      "kandydat": 3.0,
      "elektorat": 2.8,
      "roznica": 0.2,
      "waga": 7.0
    },
    "kosmopolityzmNacjonalizm": {
      "kandydat": 2.8,
      "elektorat": 3.0,
      "roznica": -0.2,
      "waga": 5.8
    },
    "geopolityka": {
      "ue": {
        "kandydat": 7.3,
        "elektorat": 7.0,
        "waga": 6.0
      },
      "rosja": {
        "kandydat": 1.0,
        "elektorat": 1.1,
        "waga": 7.0
      },
      "usa": {
        "kandydat": 5.0,
        "elektorat": 4.8,
        "waga": 5.5
      }
    },
    "medialnosc": {
      "tradycyjne": 20.0,
      "internetowe": 35.0
    }
  }
};


// Wskaźnik niepopularności ogólnokrajowej (odsetek nieufności / negatywnego elektoratu na podstawie badań CBOS, IBRiS, United Surveys)
const CANDIDATE_UNPOPULARITY_DATA = {
  // PiS
  nawrocki: 35.0,
  czarnek: 53.0,
  kaczynski: 59.0,
  bochenski: 37.0,
  jaki: 48.0,
  tarczynski: 50.0,
  // KO
  trzaskowski: 41.0,
  tusk: 52.0,
  sikorski: 39.0,
  marchewka: 28.0,
  // Konfederacja
  mentzen: 45.0,
  bosak: 46.0,
  // Korona Polska
  braun: 61.0,
  fritz: 32.0,
  // Rozwój+
  morawiecki: 52.0,
  // Razem
  zandberg: 38.0,
  owca: 27.0,
  // Nowa Lewica
  biejat: 33.0,
  dziemianowicz: 32.0,
  czarzasty: 45.0,
  // Polska 2050
  pelczynska: 31.0,
  holownia: 49.0,
  // PSL
  kosiniak: 34.0,
  motyka: 28.0,
  sobkowiak: 26.0,
  augustyniak: 27.0,
  // Inne
  senyszyn: 46.0,
  maciak: 48.0,
  woch: 25.0,
  // Niezależni
  brzoska: 26.0,
  matysiak: 29.0
};

function getCandidateUnpopularity(candId) {
  if (!candId) return 35.0;
  if (typeof CANDIDATES_CONFIG !== 'undefined') {
    const c = CANDIDATES_CONFIG.find(x => x.id === candId);
    if (c && c.niepopularnosc !== undefined) return c.niepopularnosc;
  }
  if (typeof CANDIDATE_VIEWS_DATA !== 'undefined' && CANDIDATE_VIEWS_DATA[candId] && CANDIDATE_VIEWS_DATA[candId].niepopularnosc !== undefined) {
    return CANDIDATE_VIEWS_DATA[candId].niepopularnosc;
  }
  if (CANDIDATE_UNPOPULARITY_DATA[candId] !== undefined) {
    return CANDIDATE_UNPOPULARITY_DATA[candId];
  }
  return 35.0;
}

// Automatyczne powiazanie danych views oraz wskaźników niepopularności z obiektami kandydatow
for (const cid in CANDIDATE_UNPOPULARITY_DATA) {
  if (typeof CANDIDATE_VIEWS_DATA !== 'undefined' && CANDIDATE_VIEWS_DATA[cid]) {
    CANDIDATE_VIEWS_DATA[cid].niepopularnosc = CANDIDATE_UNPOPULARITY_DATA[cid];
  }
}
if (typeof PARTY_CANDIDATES_POOL !== 'undefined') {
  for (const party in PARTY_CANDIDATES_POOL) {
    PARTY_CANDIDATES_POOL[party].forEach(cand => {
      cand.views = CANDIDATE_VIEWS_DATA[cand.id] || null;
      cand.niepopularnosc = CANDIDATE_UNPOPULARITY_DATA[cand.id] !== undefined ? CANDIDATE_UNPOPULARITY_DATA[cand.id] : 35.0;
    });
  }
}
if (typeof CANDIDATES_CONFIG !== 'undefined') {
  CANDIDATES_CONFIG.forEach(cand => {
    cand.views = CANDIDATE_VIEWS_DATA[cand.id] || null;
    cand.niepopularnosc = CANDIDATE_UNPOPULARITY_DATA[cand.id] !== undefined ? CANDIDATE_UNPOPULARITY_DATA[cand.id] : 35.0;
  });
}

if (typeof window !== 'undefined') {
  window.CANDIDATE_UNPOPULARITY_DATA = CANDIDATE_UNPOPULARITY_DATA;
  window.getCandidateUnpopularity = getCandidateUnpopularity;
}

// Wskaźnik zaufania ogólnokrajowego (odsetek deklaracji zaufania w badaniach CBOS, IBRiS, United Surveys)
const CANDIDATE_TRUST_DATA = {
  // PiS
  nawrocki: 35.0,
  czarnek: 26.0,
  kaczynski: 30.0,
  bochenski: 25.0,
  jaki: 31.0,
  tarczynski: 27.0,
  // KO
  trzaskowski: 48.0,
  tusk: 39.0,
  sikorski: 42.0,
  marchewka: 24.0,
  // Konfederacja
  mentzen: 34.0,
  bosak: 37.0,
  // Korona Polska
  braun: 19.0,
  fritz: 22.0,
  // Rozwój+
  morawiecki: 35.0,
  // Razem
  zandberg: 32.0,
  owca: 24.0,
  // Nowa Lewica
  biejat: 30.0,
  dziemianowicz: 34.0,
  czarzasty: 30.0,
  // Polska 2050
  pelczynska: 31.0,
  holownia: 41.0,
  // PSL
  kosiniak: 43.0,
  motyka: 25.0,
  sobkowiak: 24.0,
  augustyniak: 24.0,
  // Inne
  senyszyn: 25.0,
  maciak: 20.0,
  woch: 21.0,
  // Niezależni
  brzoska: 42.0,
  matysiak: 31.0
};

function getCandidateTrust(candId) {
  if (!candId) return 35.0;
  if (typeof CANDIDATES_CONFIG !== 'undefined') {
    const c = CANDIDATES_CONFIG.find(x => x.id === candId);
    if (c && c.zaufanie !== undefined) return c.zaufanie;
  }
  if (typeof CANDIDATE_VIEWS_DATA !== 'undefined' && CANDIDATE_VIEWS_DATA[candId] && CANDIDATE_VIEWS_DATA[candId].zaufanie !== undefined) {
    return CANDIDATE_VIEWS_DATA[candId].zaufanie;
  }
  if (CANDIDATE_TRUST_DATA[candId] !== undefined) {
    return CANDIDATE_TRUST_DATA[candId];
  }
  return 35.0;
}

// Automatyczne powiązanie danych zaufania z obiektami kandydatów
for (const cid in CANDIDATE_TRUST_DATA) {
  if (typeof CANDIDATE_VIEWS_DATA !== 'undefined' && CANDIDATE_VIEWS_DATA[cid]) {
    CANDIDATE_VIEWS_DATA[cid].zaufanie = CANDIDATE_TRUST_DATA[cid];
  }
}
if (typeof PARTY_CANDIDATES_POOL !== 'undefined') {
  for (const party in PARTY_CANDIDATES_POOL) {
    PARTY_CANDIDATES_POOL[party].forEach(cand => {
      cand.zaufanie = CANDIDATE_TRUST_DATA[cand.id] !== undefined ? CANDIDATE_TRUST_DATA[cand.id] : 35.0;
    });
  }
}
if (typeof CANDIDATES_CONFIG !== 'undefined') {
  CANDIDATES_CONFIG.forEach(cand => {
    cand.zaufanie = CANDIDATE_TRUST_DATA[cand.id] !== undefined ? CANDIDATE_TRUST_DATA[cand.id] : 35.0;
  });
}

if (typeof window !== 'undefined') {
  window.CANDIDATE_TRUST_DATA = CANDIDATE_TRUST_DATA;
  window.getCandidateTrust = getCandidateTrust;
}

function getCandidateViews(candId) {
  return CANDIDATE_VIEWS_DATA[candId] || null;
}




// Domyslne wartosci frekwencji i przeplywow dla II tury
const DEFAULT_TURNOUT_R1 = 60.0;
const DEFAULT_TURNOUT_R2 = 70.0;
const DEFAULT_ROUND2_PAIR = ["nawrocki", "trzaskowski"];

// Ideologiczne pozycjonowanie na osi (-1.0 lewica do +1.0 prawica)
const CANDIDATE_SPECTRUM = {
  "braun": 1.0,
  "nawrocki": 0.8,
  "mentzen": 0.65,
  "kosiniak": 0.1,
  "pelczynska": -0.2,
  "trzaskowski": -0.55,
  "biejat": -0.85,
  "zandberg": -0.95
};

// Indeksy aprobaty / sympatii (skala 0-100) każdego kandydata w oczach poszczególnych elektoratów z I tury
const CANDIDATE_APPROVAL_MATRIX = {
  nawrocki: {
    nawrocki: 95, czarnek: 80, kaczynski: 70, bochenski: 93, jaki: 75, tarczynski: 82, trzaskowski: 8, tusk: 3,
    sikorski: 13, marchewka: 14, mentzen: 75, bosak: 85, braun: 50, fritz: 52, morawiecki: 75, zandberg: 14,
    owca: 11, pelczynska: 24, holownia: 25, kosiniak: 45, motyka: 33, sobkowiak: 24, augustyniak: 53, senyszyn: 10,
    maciak: 5, woch: 44, brzoska: 58, matysiak: 21, biejat: 10, dziemianowicz: 12, czarzasty: 6
  },
  czarnek: {
    nawrocki: 90, czarnek: 95, kaczynski: 73, bochenski: 80, jaki: 87, tarczynski: 88, trzaskowski: 3, tusk: 1,
    sikorski: 7, marchewka: 9, mentzen: 75, bosak: 79, braun: 55, fritz: 54, morawiecki: 66, zandberg: 8,
    owca: 6, pelczynska: 14, holownia: 15, kosiniak: 35, motyka: 20, sobkowiak: 15, augustyniak: 44, senyszyn: 6,
    maciak: 10, woch: 49, brzoska: 48, matysiak: 12, biejat: 6, dziemianowicz: 6, czarzasty: 4
  },
  kaczynski: {
    nawrocki: 95, czarnek: 95, kaczynski: 95, bochenski: 90, jaki: 90, tarczynski: 90, trzaskowski: 2, tusk: 1,
    sikorski: 4, marchewka: 5, mentzen: 61, bosak: 68, braun: 51, fritz: 50, morawiecki: 70, zandberg: 7,
    owca: 5, pelczynska: 12, holownia: 14, kosiniak: 25, motyka: 18, sobkowiak: 13, augustyniak: 28, senyszyn: 5,
    maciak: 5, woch: 49, brzoska: 46, matysiak: 9, biejat: 5, dziemianowicz: 5, czarzasty: 3
  },
  bochenski: {
    nawrocki: 88, czarnek: 85, kaczynski: 72, bochenski: 95, jaki: 85, tarczynski: 85, trzaskowski: 9, tusk: 4,
    sikorski: 14, marchewka: 11, mentzen: 70, bosak: 72, braun: 54, fritz: 50, morawiecki: 75, zandberg: 16,
    owca: 13, pelczynska: 28, holownia: 30, kosiniak: 41, motyka: 33, sobkowiak: 28, augustyniak: 41, senyszyn: 12,
    maciak: 15, woch: 45, brzoska: 63, matysiak: 20, biejat: 12, dziemianowicz: 12, czarzasty: 10
  },
  jaki: {
    nawrocki: 90, czarnek: 92, kaczynski: 80, bochenski: 85, jaki: 95, tarczynski: 85, trzaskowski: 4, tusk: 2,
    sikorski: 6, marchewka: 5, mentzen: 73, bosak: 79, braun: 56, fritz: 55, morawiecki: 60, zandberg: 9,
    owca: 7, pelczynska: 15, holownia: 16, kosiniak: 28, motyka: 20, sobkowiak: 15, augustyniak: 31, senyszyn: 7,
    maciak: 24, woch: 41, brzoska: 51, matysiak: 12, biejat: 7, dziemianowicz: 7, czarzasty: 5
  },
  tarczynski: {
    nawrocki: 93, czarnek: 88, kaczynski: 72, bochenski: 82, jaki: 88, tarczynski: 95, trzaskowski: 4, tusk: 2,
    sikorski: 7, marchewka: 5, mentzen: 75, bosak: 84, braun: 58, fritz: 58, morawiecki: 70, zandberg: 8,
    owca: 6, pelczynska: 16, holownia: 17, kosiniak: 30, motyka: 21, sobkowiak: 16, augustyniak: 32, senyszyn: 7,
    maciak: 22, woch: 43, brzoska: 55, matysiak: 12, biejat: 7, dziemianowicz: 7, czarzasty: 5
  },
  trzaskowski: {
    nawrocki: 9, czarnek: 4, kaczynski: 2, bochenski: 11, jaki: 5, tarczynski: 6, trzaskowski: 95, tusk: 82,
    sikorski: 90, marchewka: 90, mentzen: 23, bosak: 14, braun: 3, fritz: 2, morawiecki: 10, zandberg: 55,
    owca: 68, pelczynska: 82, holownia: 84, kosiniak: 74, motyka: 73, sobkowiak: 76, augustyniak: 64, senyszyn: 81,
    maciak: 2, woch: 10, brzoska: 76, matysiak: 15, biejat: 81, dziemianowicz: 81, czarzasty: 79
  },
  tusk: {
    nawrocki: 5, czarnek: 3, kaczynski: 1, bochenski: 7, jaki: 3, tarczynski: 3, trzaskowski: 92, tusk: 95,
    sikorski: 92, marchewka: 90, mentzen: 14, bosak: 11, braun: 2, fritz: 1, morawiecki: 6, zandberg: 42,
    owca: 64, pelczynska: 64, holownia: 75, kosiniak: 78, motyka: 69, sobkowiak: 73, augustyniak: 60, senyszyn: 77,
    maciak: 2, woch: 10, brzoska: 74, matysiak: 15, biejat: 77, dziemianowicz: 77, czarzasty: 75
  },
  sikorski: {
    nawrocki: 9, czarnek: 5, kaczynski: 3, bochenski: 11, jaki: 6, tarczynski: 6, trzaskowski: 90, tusk: 90,
    sikorski: 95, marchewka: 90, mentzen: 21, bosak: 17, braun: 4, fritz: 3, morawiecki: 14, zandberg: 42,
    owca: 68, pelczynska: 64, holownia: 70, kosiniak: 80, motyka: 74, sobkowiak: 76, augustyniak: 67, senyszyn: 73,
    maciak: 2, woch: 15, brzoska: 78, matysiak: 15, biejat: 73, dziemianowicz: 73, czarzasty: 71
  },
  marchewka: {
    nawrocki: 10, czarnek: 4, kaczynski: 3, bochenski: 12, jaki: 5, tarczynski: 5, trzaskowski: 92, tusk: 85,
    sikorski: 88, marchewka: 95, mentzen: 18, bosak: 15, braun: 3, fritz: 2, morawiecki: 9, zandberg: 33,
    owca: 68, pelczynska: 78, holownia: 80, kosiniak: 73, motyka: 72, sobkowiak: 75, augustyniak: 63, senyszyn: 76,
    maciak: 2, woch: 31, brzoska: 75, matysiak: 21, biejat: 76, dziemianowicz: 76, czarzasty: 74
  },
  mentzen: {
    nawrocki: 80, czarnek: 62, kaczynski: 51, bochenski: 75, jaki: 69, tarczynski: 73, trzaskowski: 13, tusk: 5,
    sikorski: 35, marchewka: 18, mentzen: 95, bosak: 90, braun: 70, fritz: 70, morawiecki: 56, zandberg: 11,
    owca: 9, pelczynska: 15, holownia: 16, kosiniak: 43, motyka: 36, sobkowiak: 32, augustyniak: 42, senyszyn: 10,
    maciak: 35, woch: 54, brzoska: 84, matysiak: 12, biejat: 10, dziemianowicz: 10, czarzasty: 8
  },
  bosak: {
    nawrocki: 85, czarnek: 70, kaczynski: 60, bochenski: 71, jaki: 79, tarczynski: 80, trzaskowski: 14, tusk: 9,
    sikorski: 35, marchewka: 14, mentzen: 80, bosak: 95, braun: 68, fritz: 68, morawiecki: 59, zandberg: 8,
    owca: 8, pelczynska: 15, holownia: 16, kosiniak: 44, motyka: 37, sobkowiak: 30, augustyniak: 45, senyszyn: 9,
    maciak: 30, woch: 52, brzoska: 74, matysiak: 12, biejat: 9, dziemianowicz: 9, czarzasty: 7
  },
  braun: {
    nawrocki: 69, czarnek: 67, kaczynski: 54, bochenski: 60, jaki: 69, tarczynski: 65, trzaskowski: 5, tusk: 2,
    sikorski: 12, marchewka: 4, mentzen: 72, bosak: 75, braun: 95, fritz: 90, morawiecki: 46, zandberg: 6,
    owca: 4, pelczynska: 9, holownia: 11, kosiniak: 22, motyka: 16, sobkowiak: 11, augustyniak: 25, senyszyn: 4,
    maciak: 62, woch: 48, brzoska: 44, matysiak: 6, biejat: 4, dziemianowicz: 4, czarzasty: 2
  },
  fritz: {
    nawrocki: 69, czarnek: 67, kaczynski: 54, bochenski: 60, jaki: 69, tarczynski: 65, trzaskowski: 5, tusk: 2,
    sikorski: 6, marchewka: 4, mentzen: 72, bosak: 75, braun: 95, fritz: 95, morawiecki: 46, zandberg: 6,
    owca: 4, pelczynska: 9, holownia: 11, kosiniak: 22, motyka: 16, sobkowiak: 11, augustyniak: 25, senyszyn: 4,
    maciak: 62, woch: 48, brzoska: 44, matysiak: 6, biejat: 4, dziemianowicz: 4, czarzasty: 2
  },
  morawiecki: {
    nawrocki: 89, czarnek: 68, kaczynski: 65, bochenski: 85, jaki: 72, tarczynski: 74, trzaskowski: 11, tusk: 5,
    sikorski: 16, marchewka: 12, mentzen: 68, bosak: 70, braun: 33, fritz: 33, morawiecki: 95, zandberg: 18,
    owca: 15, pelczynska: 33, holownia: 35, kosiniak: 49, motyka: 40, sobkowiak: 34, augustyniak: 48, senyszyn: 14,
    maciak: 16, woch: 48, brzoska: 67, matysiak: 19, biejat: 14, dziemianowicz: 14, czarzasty: 12
  },
  zandberg: {
    nawrocki: 11, czarnek: 6, kaczynski: 3, bochenski: 11, jaki: 8, tarczynski: 7, trzaskowski: 71, tusk: 55,
    sikorski: 60, marchewka: 58, mentzen: 8, bosak: 8, braun: 2, fritz: 1, morawiecki: 16, zandberg: 95,
    owca: 94, pelczynska: 58, holownia: 51, kosiniak: 32, motyka: 27, sobkowiak: 36, augustyniak: 33, senyszyn: 74,
    maciak: 8, woch: 24, brzoska: 18, matysiak: 54, biejat: 74, dziemianowicz: 74, czarzasty: 55
  },
  owca: {
    nawrocki: 11, czarnek: 6, kaczynski: 3, bochenski: 11, jaki: 8, tarczynski: 7, trzaskowski: 71, tusk: 55,
    sikorski: 60, marchewka: 58, mentzen: 8, bosak: 8, braun: 2, fritz: 1, morawiecki: 16, zandberg: 95,
    owca: 94, pelczynska: 58, holownia: 51, kosiniak: 32, motyka: 27, sobkowiak: 36, augustyniak: 33, senyszyn: 74,
    maciak: 8, woch: 24, brzoska: 18, matysiak: 54, biejat: 74, dziemianowicz: 74, czarzasty: 55
  },
  pelczynska: {
    nawrocki: 17, czarnek: 8, kaczynski: 5, bochenski: 19, jaki: 10, tarczynski: 10, trzaskowski: 79, tusk: 68,
    sikorski: 77, marchewka: 79, mentzen: 28, bosak: 24, braun: 6, fritz: 4, morawiecki: 31, zandberg: 69,
    owca: 69, pelczynska: 95, holownia: 89, kosiniak: 76, motyka: 70, sobkowiak: 73, augustyniak: 55, senyszyn: 60,
    maciak: 6, woch: 30, brzoska: 74, matysiak: 34, biejat: 73, dziemianowicz: 73, czarzasty: 55
  },
  holownia: {
    nawrocki: 18, czarnek: 9, kaczynski: 6, bochenski: 21, jaki: 11, tarczynski: 11, trzaskowski: 82, tusk: 70,
    sikorski: 85, marchewka: 85, mentzen: 26, bosak: 23, braun: 5, fritz: 4, morawiecki: 24, zandberg: 55,
    owca: 56, pelczynska: 80, holownia: 95, kosiniak: 83, motyka: 75, sobkowiak: 86, augustyniak: 65, senyszyn: 55,
    maciak: 6, woch: 47, brzoska: 73, matysiak: 35, biejat: 71, dziemianowicz: 71, czarzasty: 55
  },
  kosiniak: {
    nawrocki: 45, czarnek: 18, kaczynski: 14, bochenski: 47, jaki: 22, tarczynski: 25, trzaskowski: 74, tusk: 60,
    sikorski: 76, marchewka: 77, mentzen: 37, bosak: 40, braun: 11, fritz: 9, morawiecki: 36, zandberg: 37,
    owca: 37, pelczynska: 81, holownia: 84, kosiniak: 95, motyka: 91, sobkowiak: 88, augustyniak: 75, senyszyn: 35,
    maciak: 10, woch: 54, brzoska: 71, matysiak: 20, biejat: 57, dziemianowicz: 57, czarzasty: 41
  },
  motyka: {
    nawrocki: 22, czarnek: 12, kaczynski: 9, bochenski: 24, jaki: 14, tarczynski: 14, trzaskowski: 77, tusk: 72,
    sikorski: 75, marchewka: 68, mentzen: 32, bosak: 29, braun: 8, fritz: 6, morawiecki: 28, zandberg: 57,
    owca: 56, pelczynska: 82, holownia: 85, kosiniak: 92, motyka: 95, sobkowiak: 89, augustyniak: 84, senyszyn: 62,
    maciak: 8, woch: 51, brzoska: 72, matysiak: 43, biejat: 62, dziemianowicz: 62, czarzasty: 41
  },
  sobkowiak: {
    nawrocki: 19, czarnek: 10, kaczynski: 7, bochenski: 21, jaki: 11, tarczynski: 11, trzaskowski: 80, tusk: 75,
    sikorski: 77, marchewka: 70, mentzen: 28, bosak: 25, braun: 6, fritz: 4, morawiecki: 24, zandberg: 63,
    owca: 64, pelczynska: 86, holownia: 88, kosiniak: 87, motyka: 86, sobkowiak: 95, augustyniak: 76, senyszyn: 68,
    maciak: 7, woch: 47, brzoska: 73, matysiak: 38, biejat: 68, dziemianowicz: 68, czarzasty: 55
  },
  augustyniak: {
    nawrocki: 33, czarnek: 24, kaczynski: 19, bochenski: 34, jaki: 24, tarczynski: 24, trzaskowski: 68, tusk: 62,
    sikorski: 69, marchewka: 62, mentzen: 41, bosak: 40, braun: 16, fritz: 13, morawiecki: 42, zandberg: 42,
    owca: 40, pelczynska: 73, holownia: 75, kosiniak: 91, motyka: 85, sobkowiak: 80, augustyniak: 95, senyszyn: 48,
    maciak: 13, woch: 56, brzoska: 66, matysiak: 33, biejat: 32, dziemianowicz: 33, czarzasty: 21
  },
  senyszyn: {
    nawrocki: 16, czarnek: 4, kaczynski: 2, bochenski: 11, jaki: 5, tarczynski: 5, trzaskowski: 81, tusk: 74,
    sikorski: 71, marchewka: 68, mentzen: 11, bosak: 9, braun: 2, fritz: 1, morawiecki: 12, zandberg: 78,
    owca: 80, pelczynska: 72, holownia: 71, kosiniak: 60, motyka: 61, sobkowiak: 67, augustyniak: 52, senyszyn: 95,
    maciak: 6, woch: 28, brzoska: 48, matysiak: 32, biejat: 85, dziemianowicz: 82, czarzasty: 70
  },
  maciak: {
    nawrocki: 52, czarnek: 48, kaczynski: 42, bochenski: 44, jaki: 50, tarczynski: 48, trzaskowski: 16, tusk: 10,
    sikorski: 14, marchewka: 12, mentzen: 48, bosak: 51, braun: 72, fritz: 70, morawiecki: 28, zandberg: 18,
    owca: 16, pelczynska: 14, holownia: 13, kosiniak: 18, motyka: 16, sobkowiak: 14, augustyniak: 21, senyszyn: 14,
    maciak: 95, woch: 42, brzoska: 24, matysiak: 36, biejat: 14, dziemianowicz: 14, czarzasty: 12
  },
  woch: {
    nawrocki: 58, czarnek: 49, kaczynski: 45, bochenski: 56, jaki: 51, tarczynski: 52, trzaskowski: 7, tusk: 5,
    sikorski: 10, marchewka: 12, mentzen: 70, bosak: 68, braun: 51, fritz: 48, morawiecki: 52, zandberg: 27,
    owca: 25, pelczynska: 56, holownia: 58, kosiniak: 66, motyka: 61, sobkowiak: 58, augustyniak: 66, senyszyn: 26,
    maciak: 38, woch: 95, brzoska: 74, matysiak: 52, biejat: 26, dziemianowicz: 26, czarzasty: 12
  },
  brzoska: {
    nawrocki: 54, czarnek: 41, kaczynski: 38, bochenski: 58, jaki: 46, tarczynski: 48, trzaskowski: 75, tusk: 60,
    sikorski: 75, marchewka: 67, mentzen: 78, bosak: 65, braun: 32, fritz: 28, morawiecki: 56, zandberg: 18,
    owca: 16, pelczynska: 72, holownia: 72, kosiniak: 71, motyka: 68, sobkowiak: 71, augustyniak: 62, senyszyn: 34,
    maciak: 14, woch: 68, brzoska: 100, matysiak: 36, biejat: 34, dziemianowicz: 34, czarzasty: 32
  },
  matysiak: {
    nawrocki: 21, czarnek: 12, kaczynski: 9, bochenski: 15, jaki: 9, tarczynski: 12, trzaskowski: 33, tusk: 15,
    sikorski: 20, marchewka: 30, mentzen: 7, bosak: 9, braun: 5, fritz: 2, morawiecki: 22, zandberg: 64,
    owca: 62, pelczynska: 48, holownia: 49, kosiniak: 54, motyka: 51, sobkowiak: 49, augustyniak: 45, senyszyn: 50,
    maciak: 25, woch: 45, brzoska: 38, matysiak: 95, biejat: 50, dziemianowicz: 50, czarzasty: 35
  },
  biejat: {
    nawrocki: 16, czarnek: 4, kaczynski: 2, bochenski: 11, jaki: 5, tarczynski: 5, trzaskowski: 81, tusk: 74,
    sikorski: 71, marchewka: 68, mentzen: 11, bosak: 9, braun: 2, fritz: 1, morawiecki: 12, zandberg: 78,
    owca: 80, pelczynska: 72, holownia: 71, kosiniak: 60, motyka: 61, sobkowiak: 67, augustyniak: 52, senyszyn: 100,
    maciak: 6, woch: 28, brzoska: 35, matysiak: 32, biejat: 95, dziemianowicz: 90, czarzasty: 85
  },
  dziemianowicz: {
    nawrocki: 16, czarnek: 4, kaczynski: 2, bochenski: 11, jaki: 5, tarczynski: 5, trzaskowski: 81, tusk: 74,
    sikorski: 71, marchewka: 68, mentzen: 11, bosak: 9, braun: 2, fritz: 1, morawiecki: 12, zandberg: 78,
    owca: 80, pelczynska: 72, holownia: 71, kosiniak: 60, motyka: 61, sobkowiak: 67, augustyniak: 52, senyszyn: 100,
    maciak: 6, woch: 28, brzoska: 48, matysiak: 32, biejat: 90, dziemianowicz: 95, czarzasty: 85
  },
  czarzasty: {
    nawrocki: 16, czarnek: 4, kaczynski: 2, bochenski: 11, jaki: 5, tarczynski: 5, trzaskowski: 81, tusk: 80,
    sikorski: 71, marchewka: 85, mentzen: 11, bosak: 9, braun: 2, fritz: 1, morawiecki: 12, zandberg: 66,
    owca: 67, pelczynska: 72, holownia: 71, kosiniak: 60, motyka: 61, sobkowiak: 67, augustyniak: 52, senyszyn: 80,
    maciak: 6, woch: 28, brzoska: 48, matysiak: 32, biejat: 90, dziemianowicz: 90, czarzasty: 90
  },
  newVoters: {
    nawrocki: 44, czarnek: 39, kaczynski: 30, bochenski: 42, jaki: 40, tarczynski: 41, morawiecki: 38, trzaskowski: 48,
    tusk: 39, sikorski: 48, marchewka: 45, mentzen: 45, bosak: 44, braun: 15, fritz: 15, kosiniak: 48,
    motyka: 44, sobkowiak: 45, augustyniak: 36, pelczynska: 40, holownia: 48, biejat: 38, dziemianowicz: 40, czarzasty: 29,
    zandberg: 35, owca: 34, senyszyn: 30, maciak: 5, woch: 12, brzoska: 55, matysiak: 45
  }
};

// Generator rozkładu normalnego (Box-Muller)
function gaussianRandom(mean = 0, stdev = 1) {
  const u1 = Math.max(1e-15, 1.0 - Math.random());
  const u2 = 1.0 - Math.random();
  const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
  return mean + stdev * randStdNormal;
}

// MODEL BEHAWIORALNY MONTE CARLO (1000 symulacji na każdy elektorat)
// Chęć oddania głosu zależy od aprobaty kandydatów oraz różnicy aprobaty (mobilizacja przeciwko gorszemu kandydatowi)

function getCandidateBasePartyId(candId) {
  if (typeof CANDIDATES_CONFIG !== 'undefined') {
    const c = CANDIDATES_CONFIG.find(x => x.id === candId);
    if (c && (c.isEdited || c.isCustom)) return candId;
  }
  const pis = ['nawrocki', 'czarnek', 'kaczynski', 'bochenski', 'jaki', 'tarczynski'];
  if (pis.includes(candId)) return 'nawrocki';
  const ko = ['trzaskowski', 'tusk', 'sikorski', 'marchewka'];
  if (ko.includes(candId)) return 'trzaskowski';
  const konf = ['mentzen', 'bosak'];
  if (konf.includes(candId)) return 'mentzen';
  const korona = ['braun', 'fritz'];
  if (korona.includes(candId)) return 'braun';
  const rozw = ['morawiecki'];
  if (rozw.includes(candId)) return 'morawiecki';
  const razem = ['zandberg', 'owca'];
  if (razem.includes(candId)) return 'zandberg';
  const lew = ['biejat', 'dziemianowicz', 'czarzasty'];
  if (lew.includes(candId)) return 'biejat';
  const pl = ['pelczynska', 'holownia'];
  if (pl.includes(candId)) return 'pelczynska';
  const psl = ['kosiniak', 'motyka', 'sobkowiak', 'augustyniak'];
  if (psl.includes(candId)) return 'kosiniak';
  return candId;
}

function isCandidatePisAffiliated(id) {
  if (!id) return false;
  if (typeof CANDIDATES_CONFIG !== 'undefined') {
    const c = CANDIDATES_CONFIG.find(x => x.id === id);
    if (c && (c.isEdited || c.isCustom)) {
      return (c.partyShort === 'PiS' || c.partyName === 'Prawo i Sprawiedliwość' || c.partyKey === 'PiS' || c.distributionKey === 'PiS');
    }
    if (c && (c.partyShort === 'PiS' || c.partyName === 'Prawo i Sprawiedliwość' || c.distributionKey === 'PiS')) return true;
  }
  const pis = ['nawrocki', 'czarnek', 'kaczynski', 'bochenski', 'jaki', 'tarczynski'];
  if (pis.includes(id)) return true;
  const base = (typeof getCandidateBasePartyId === 'function') ? getCandidateBasePartyId(id) : id;
  if (base !== id && pis.includes(base)) return true;
  return false;
}

function isCandidateKoAffiliated(id) {
  if (!id) return false;
  if (typeof CANDIDATES_CONFIG !== 'undefined') {
    const c = CANDIDATES_CONFIG.find(x => x.id === id);
    if (c && (c.isEdited || c.isCustom)) {
      return (c.partyShort === 'KO' || c.partyName === 'Koalicja Obywatelska' || c.partyKey === 'KO' || c.distributionKey === 'KO');
    }
    if (c && (c.partyShort === 'KO' || c.partyName === 'Koalicja Obywatelska' || c.distributionKey === 'KO')) return true;
  }
  const ko = ['trzaskowski', 'tusk', 'sikorski', 'marchewka'];
  if (ko.includes(id)) return true;
  const base = (typeof getCandidateBasePartyId === 'function') ? getCandidateBasePartyId(id) : id;
  if (base !== id && ko.includes(base)) return true;
  return false;
}

// DYNAMICZNY MODEL APROBATY ELEKTORATÓW W II TURZE
// Aprobata bezpośrednio powiązana z bliskością ideologiczną, wagami spraw,
// wskaźnikami medialności (tradycyjna vs internetowa) oraz asymetrią geopolityczną
const DEFAULT_ELECTORATE_WEIGHTS = {
  aborcja: 5.6,
  lgbt: 5.4,
  gospodarka: 7.3,
  kosmopolityzmNacjonalizm: 7.1,
  ue: 7.5,
  rosja: 7.8,
  usa: 7.2
};

function extractElectorateProfile(id) {
  if (id === 'newVoters') {
    return {
      aborcja: 5.71, w_aborcja: 5.6,
      lgbt: 5.83, w_lgbt: 5.4,
      gospodarka: 6.77, w_gospodarka: 7.3,
      kosmopolityzmNacjonalizm: 5.45, w_kosmo: 7.1,
      ue: 4.86, w_ue: 7.5,
      rosja: 1.73, w_rosja: 7.8,
      usa: 7.35, w_usa: 7.2,
      trad: 50.0, net: 50.0
    };
  }
  const viewsData = (typeof CANDIDATE_VIEWS_DATA !== 'undefined') ? CANDIDATE_VIEWS_DATA : {};
  const c = viewsData[id];
  if (!c) {
    const baseId = (typeof getCandidateBasePartyId === 'function') ? getCandidateBasePartyId(id) : id;
    if (viewsData[baseId]) return extractElectorateProfile(baseId);
    return null;
  }
  const defW = DEFAULT_ELECTORATE_WEIGHTS;
  if (c.aborcja && typeof c.aborcja === 'object' && c.aborcja.kandydat !== undefined) {
    return {
      aborcja: c.aborcja.elektorat !== undefined ? c.aborcja.elektorat : c.aborcja.kandydat,
      w_aborcja: c.aborcja.wagaElektorat || c.aborcja.waga || defW.aborcja,
      lgbt: c.lgbt.elektorat !== undefined ? c.lgbt.elektorat : c.lgbt.kandydat,
      w_lgbt: c.lgbt.wagaElektorat || c.lgbt.waga || defW.lgbt,
      gospodarka: c.gospodarka.elektorat !== undefined ? c.gospodarka.elektorat : c.gospodarka.kandydat,
      w_gospodarka: c.gospodarka.waga || defW.gospodarka,
      kosmopolityzmNacjonalizm: c.kosmopolityzmNacjonalizm.elektorat !== undefined ? c.kosmopolityzmNacjonalizm.elektorat : c.kosmopolityzmNacjonalizm.kandydat,
      w_kosmo: c.kosmopolityzmNacjonalizm.waga || defW.kosmopolityzmNacjonalizm,
      ue: (c.geopolityka && c.geopolityka.ue) ? (c.geopolityka.ue.elektorat !== undefined ? c.geopolityka.ue.elektorat : c.geopolityka.ue.kandydat) : 5.0,
      w_ue: (c.geopolityka && c.geopolityka.ue && c.geopolityka.ue.waga) ? c.geopolityka.ue.waga : defW.ue,
      rosja: (c.geopolityka && c.geopolityka.rosja) ? (c.geopolityka.rosja.elektorat !== undefined ? c.geopolityka.rosja.elektorat : c.geopolityka.rosja.kandydat) : 1.5,
      w_rosja: (c.geopolityka && c.geopolityka.rosja && c.geopolityka.rosja.waga) ? c.geopolityka.rosja.waga : defW.rosja,
      usa: (c.geopolityka && c.geopolityka.usa) ? (c.geopolityka.usa.elektorat !== undefined ? c.geopolityka.usa.elektorat : c.geopolityka.usa.kandydat) : 7.0,
      w_usa: (c.geopolityka && c.geopolityka.usa && c.geopolityka.usa.waga) ? c.geopolityka.usa.waga : defW.usa,
      trad: (c.medialnosc && c.medialnosc.tradycyjne !== undefined) ? c.medialnosc.tradycyjne : (c.mediaTradycyjne || 50.0),
      net: (c.medialnosc && c.medialnosc.internetowe !== undefined) ? c.medialnosc.internetowe : (c.mediaInternetowe || 50.0)
    };
  } else {
    // Profil nowo utworzonych kandydatów (posiadają takie same standardowe wagi)
    return {
      aborcja: c.aborcja !== undefined ? c.aborcja : 5.0,
      w_aborcja: defW.aborcja,
      lgbt: c.lgbt !== undefined ? c.lgbt : 5.0,
      w_lgbt: defW.lgbt,
      gospodarka: c.gospodarka !== undefined ? c.gospodarka : 5.0,
      w_gospodarka: defW.gospodarka,
      kosmopolityzmNacjonalizm: c.kosmopolityzmNacjonalizm !== undefined ? c.kosmopolityzmNacjonalizm : 5.0,
      w_kosmo: defW.kosmopolityzmNacjonalizm,
      ue: c.ue !== undefined ? c.ue : 5.0,
      w_ue: defW.ue,
      rosja: c.rosja !== undefined ? c.rosja : 1.5,
      w_rosja: defW.rosja,
      usa: c.usa !== undefined ? c.usa : 7.0,
      w_usa: defW.usa,
      trad: c.mediaTradycyjne !== undefined ? c.mediaTradycyjne : ((c.medialnosc && c.medialnosc.tradycyjne) || 50.0),
      net: c.mediaInternetowe !== undefined ? c.mediaInternetowe : ((c.medialnosc && c.medialnosc.internetowe) || 50.0)
    };
  }
}

function extractCandidateProfile(id) {
  const viewsData = (typeof CANDIDATE_VIEWS_DATA !== 'undefined') ? CANDIDATE_VIEWS_DATA : {};
  const c = viewsData[id];
  const unpop = (typeof getCandidateUnpopularity === 'function') ? getCandidateUnpopularity(id) : 35.0;
  const trust = (typeof getCandidateTrust === 'function') ? getCandidateTrust(id) : 35.0;
  if (!c) {
    const baseId = (typeof getCandidateBasePartyId === 'function') ? getCandidateBasePartyId(id) : id;
    if (viewsData[baseId]) return extractCandidateProfile(baseId);
    return null;
  }
  if (c.aborcja && typeof c.aborcja === 'object' && c.aborcja.kandydat !== undefined) {
    return {
      aborcja: c.aborcja.kandydat,
      lgbt: c.lgbt.kandydat,
      gospodarka: c.gospodarka.kandydat,
      kosmopolityzmNacjonalizm: c.kosmopolityzmNacjonalizm.kandydat,
      ue: (c.geopolityka && c.geopolityka.ue) ? c.geopolityka.ue.kandydat : 5.0,
      rosja: (c.geopolityka && c.geopolityka.rosja) ? c.geopolityka.rosja.kandydat : 1.5,
      usa: (c.geopolityka && c.geopolityka.usa) ? c.geopolityka.usa.kandydat : 7.0,
      trad: (c.medialnosc && c.medialnosc.tradycyjne !== undefined) ? c.medialnosc.tradycyjne : (c.mediaTradycyjne || 50.0),
      net: (c.medialnosc && c.medialnosc.internetowe !== undefined) ? c.medialnosc.internetowe : (c.mediaInternetowe || 50.0),
      niepopularnosc: c.niepopularnosc !== undefined ? c.niepopularnosc : unpop,
      zaufanie: c.zaufanie !== undefined ? c.zaufanie : trust
    };
  } else {
    return {
      aborcja: c.aborcja !== undefined ? c.aborcja : 5.0,
      lgbt: c.lgbt !== undefined ? c.lgbt : 5.0,
      gospodarka: c.gospodarka !== undefined ? c.gospodarka : 5.0,
      kosmopolityzmNacjonalizm: c.kosmopolityzmNacjonalizm !== undefined ? c.kosmopolityzmNacjonalizm : 5.0,
      ue: c.ue !== undefined ? c.ue : 5.0,
      rosja: c.rosja !== undefined ? c.rosja : 1.5,
      usa: c.usa !== undefined ? c.usa : 7.0,
      trad: c.mediaTradycyjne !== undefined ? c.mediaTradycyjne : ((c.medialnosc && c.medialnosc.tradycyjne) || 50.0),
      net: c.mediaInternetowe !== undefined ? c.mediaInternetowe : ((c.medialnosc && c.medialnosc.internetowe) || 50.0),
      niepopularnosc: c.niepopularnosc !== undefined ? c.niepopularnosc : unpop,
      zaufanie: c.zaufanie !== undefined ? c.zaufanie : trust
    };
  }
}

function calculateCandidateApproval(elecId, candId) {
  if (elecId === candId) return 95.0;

  // 1. Sprawdzenie stałych, ręcznie zdefiniowanych aprobat w macierzy (dla istniejących nieedytowanych kandydatów):
  const isCustomElec = (typeof CANDIDATES_CONFIG !== 'undefined') && CANDIDATES_CONFIG.some(c => c.id === elecId && (c.isCustom || c.isEdited));
  const isCustomCand = (typeof CANDIDATES_CONFIG !== 'undefined') && CANDIDATES_CONFIG.some(c => c.id === candId && (c.isCustom || c.isEdited));

  if (!isCustomElec && !isCustomCand && typeof CANDIDATE_APPROVAL_MATRIX !== 'undefined') {
    if (CANDIDATE_APPROVAL_MATRIX[elecId] && CANDIDATE_APPROVAL_MATRIX[elecId][candId] !== undefined) {
      return CANDIDATE_APPROVAL_MATRIX[elecId][candId];
    }
  }

  // 2. Dynamiczny mechanizm aprobaty (tylko w przypadku nowo utworzonych kandydatów):
  const elec = extractElectorateProfile(elecId);
  const cand = extractCandidateProfile(candId);

  if (!elec || !cand) {
    const matrixRow = (typeof CANDIDATE_APPROVAL_MATRIX !== 'undefined') ? (CANDIDATE_APPROVAL_MATRIX[elecId] || {}) : {};
    return matrixRow[candId] !== undefined ? matrixRow[candId] : 30.0;
  }

  // 1. Bliskość ideologiczna ważona wagami spraw danego elektoratu
  const axes = [
    { key: 'aborcja', wKey: 'w_aborcja' },
    { key: 'lgbt', wKey: 'w_lgbt' },
    { key: 'gospodarka', wKey: 'w_gospodarka' },
    { key: 'kosmopolityzmNacjonalizm', wKey: 'w_kosmo' },
    { key: 'ue', wKey: 'w_ue' },
    { key: 'rosja', wKey: 'w_rosja' },
    { key: 'usa', wKey: 'w_usa' }
  ];

  let totW = 0.0;
  let weightedDist = 0.0;
  for (let i = 0; i < axes.length; i++) {
    const ax = axes[i];
    const w = elec[ax.wKey] || 6.0;
    const diff = Math.abs((elec[ax.key] !== undefined ? elec[ax.key] : 5.0) - (cand[ax.key] !== undefined ? cand[ax.key] : 5.0));
    weightedDist += w * diff;
    totW += w;
  }
  const avgDist = totW > 0 ? (weightedDist / totW) : 5.0; // skala [0, 10]
  const baseApproval = 93.0 * Math.exp(-0.28 * avgDist);

  // 2. Wskaźniki popularności w mediach tradycyjnych i internecie:
  // Wyborcy z wysokim elektoratem tradycyjnym preferują podobnych medialnie kandydatów (wpływ mały).
  // Wyborcy z wysokim internetowym preferują podobnych internetowo (wpływ wyraźnie silniejszy w II turze).
  const tradImp = elec.trad / 100.0;
  const netImp = elec.net / 100.0;
  const diffTrad = Math.abs(elec.trad - cand.trad) / 100.0;
  const diffNet = Math.abs(elec.net - cand.net) / 100.0;

  const tradEffect = (0.5 - diffTrad) * tradImp * 10.0;   // [-5.0, +5.0]
  const netEffect = (0.5 - diffNet) * netImp * 15.0;     // [-7.5, +7.5]

  // 3. Asymetria geopolityczna:
  // Wyborcy prozachodni i proeuropejscy rzadziej i niechętnie oddają głos na kandydata prorosyjskiego,
  // zwłaszcza gdy jest znacznie prorosyjski (w przeciwieństwie do prorosyjskich wyborców oceniających kandydata zachodniego).
  let geoPenalty = 0.0;
  const isProWest = (elec.ue >= 5.0) || (elec.rosja <= 2.5);
  const candRusExcess = Math.max(0.0, cand.rosja - 2.0);

  if (isProWest && candRusExcess > 0) {
    const prowestScore = (Math.max(0.0, elec.ue - 3.5) / 6.5) * (Math.max(0.0, 4.0 - elec.rosja) / 4.0);
    // Nieliniowa kara rosnąca gwałtownie przy wyraźnym prorosyjskim nastawieniu kandydata
    geoPenalty = 5.5 * prowestScore * Math.pow(candRusExcess, 1.45);
  }

  // 4. Wskaźniki niepopularności (nieufność, która zniechęca) oraz zaufania (zaufanie, które zachęca):
  // Własny elektorat kandydata pozostaje lojalny.
  // Jednak dla obcych elektoratów (zwłaszcza wyborców innych partii oraz nowych wyborców):
  // - Nieufność (niepopularność) powyżej poziomu neutralnego (35%) stanowi potężną barierę i zniechęca,
  // - Zaufanie ogólnokrajowe powyżej poziomu neutralnego (35%) zachęca i buduje aprobatę.
  const candBaseParty = (typeof getCandidateBasePartyId === 'function') ? getCandidateBasePartyId(candId) : candId;
  const elecBaseParty = (typeof getCandidateBasePartyId === 'function') ? getCandidateBasePartyId(elecId) : elecId;
  const isOwnElectorate = (elecId === candId || elecBaseParty === candBaseParty);

  let unpopAdjustment = 0.0;
  let trustAdjustment = 0.0;
  const candUnpop = cand.niepopularnosc !== undefined ? cand.niepopularnosc : ((typeof getCandidateUnpopularity === 'function') ? getCandidateUnpopularity(candId) : 35.0);
  const unpopDelta = candUnpop - 35.0; // punkt neutralny = 35%

  const candTrust = cand.zaufanie !== undefined ? cand.zaufanie : ((typeof getCandidateTrust === 'function') ? getCandidateTrust(candId) : 35.0);
  const trustDelta = candTrust - 35.0; // punkt neutralny = 35%

  if (!isOwnElectorate) {
    if (elecId === 'newVoters') {
      unpopAdjustment = -0.70 * unpopDelta;
      trustAdjustment = 0.55 * trustDelta;
    } else {
      // Nieufność, która zniechęca:
      if (unpopDelta > 0) {
        // Silne zniechęcanie wyborców innych partii proporcjonalnie do niepopularności
        unpopAdjustment = -0.88 * unpopDelta;
      } else {
        // Wyraźny bonus za niski negatywny elektorat / brak uprzedzeń
        unpopAdjustment = 0.48 * (-unpopDelta);
      }

      // Zaufanie, które zachęca:
      if (trustDelta > 0) {
        trustAdjustment = 0.65 * trustDelta;
      } else {
        // Brak zaufania studzi entuzjazm
        trustAdjustment = 0.40 * trustDelta;
      }
    }
  }

  // 5. Głęboka polaryzacja plemienna PiS vs KO ("wojna polsko-polska"):
  // Elektoraty PiS i KO cechuje skrajnie silna wzajemna niechęć tożsamościowa i wrogość plemienna,
  // wykraczająca poza sam dystans programowy. Aprobata kandydatów PiS wśród wyborców KO
  // oraz kandydatów KO wśród wyborców PiS wynosi zaledwie kilka procent.
  let tribalPenalty = 0.0;
  const isElecPis = isCandidatePisAffiliated(elecId);
  const isElecKo = isCandidateKoAffiliated(elecId);
  const isCandPis = isCandidatePisAffiliated(candId);
  const isCandKo = isCandidateKoAffiliated(candId);

  if ((isElecPis && isCandKo) || (isElecKo && isCandPis)) {
    tribalPenalty = 34.0;
  }

  const finalApproval = baseApproval + tradEffect + netEffect - geoPenalty + unpopAdjustment + trustAdjustment - tribalPenalty;
  return Math.max(1.0, Math.min(95.0, Math.round(finalApproval * 10) / 10));
}

if (typeof window !== 'undefined') {
  window.isCandidatePisAffiliated = isCandidatePisAffiliated;
  window.isCandidateKoAffiliated = isCandidateKoAffiliated;
  window.extractCandidateProfile = extractCandidateProfile;
  window.extractElectorateProfile = extractElectorateProfile;
  window.calculateCandidateApproval = calculateCandidateApproval;
  window.getCandidateTrust = getCandidateTrust;
  window.CANDIDATE_TRUST_DATA = CANDIDATE_TRUST_DATA;
}

function simulateElectorateFlows(candA_id, candB_id, n_sim = 1000) {
  const flows = {};
  const allElecs = (typeof CANDIDATES_CONFIG !== 'undefined') ? [...CANDIDATES_CONFIG.map(c => c.id), 'newVoters'] : ['nawrocki', 'trzaskowski', 'mentzen', 'braun', 'morawiecki', 'zandberg', 'biejat', 'pelczynska', 'kosiniak', 'newVoters'];

  // 1. Obliczenie ogólnej polaryzacji / różnicy poglądowej między finalistami II tury
  let distAB = 4.0;
  const candAProf = (typeof extractCandidateProfile === 'function') ? extractCandidateProfile(candA_id) : null;
  const candBProf = (typeof extractCandidateProfile === 'function') ? extractCandidateProfile(candB_id) : null;
  if (candAProf && candBProf) {
    const axesKeys = ['aborcja', 'lgbt', 'gospodarka', 'kosmopolityzmNacjonalizm', 'ue', 'rosja', 'usa'];
    const axesW = [1.25, 1.25, 0.75, 1.15, 1.0, 0.8, 0.6];
    let sumW = 0.0, sumD = 0.0;
    for (let k = 0; k < axesKeys.length; k++) {
      const ax = axesKeys[k];
      const w = axesW[k];
      const vA = candAProf[ax] !== undefined ? candAProf[ax] : 5.0;
      const vB = candBProf[ax] !== undefined ? candBProf[ax] : 5.0;
      sumD += w * Math.abs(vA - vB);
      sumW += w;
    }
    distAB = sumW > 0 ? (sumD / sumW) : 4.0;
  }

  // 2. Wskaźniki niepopularności (nieufność) oraz zaufania ogólnokrajowego finalistów
  const unpopA = (typeof getCandidateUnpopularity === 'function') ? getCandidateUnpopularity(candA_id) : 35.0;
  const unpopB = (typeof getCandidateUnpopularity === 'function') ? getCandidateUnpopularity(candB_id) : 35.0;
  const maxUnpop = Math.max(unpopA, unpopB);

  const trustA = (typeof getCandidateTrust === 'function') ? getCandidateTrust(candA_id) : 35.0;
  const trustB = (typeof getCandidateTrust === 'function') ? getCandidateTrust(candB_id) : 35.0;
  const maxTrust = Math.max(trustA, trustB);

  // Zniechęcenie pojedynkiem o wysokiej nieufności (zmęczenie "wyborem między dżumą a cholerą"):
  // Gdy obaj kandydaci budzą powszechną nieufność, zniechęca to ogół wyborców do pójścia na wybory.
  const duelFatiguePenalty = Math.max(0.0, Math.min(unpopA, unpopB) - 35.0) * 0.35;

  // Waga kontrastu (mobilizacja przeciwko gorszemu kandydatowi) rośnie wraz z różnicą poglądową
  const alpha = 0.02 + 0.008 * distAB;
  const sigma_v = 15.0;    // Rozrzut indywidualnych ocen wyborców w danym elektoracie
  const sVal = 26.0;

  allElecs.forEach(elecId => {
    if (elecId === candA_id || elecId === candB_id) return;

    const matrixRow = (typeof CANDIDATE_APPROVAL_MATRIX !== 'undefined' && CANDIDATE_APPROVAL_MATRIX[elecId]) ? CANDIDATE_APPROVAL_MATRIX[elecId] : {};

    // Aprobata (z macierzy ręcznej dla standardowych kandydatów, bądź dynamiczna dla nowych)
    const muA = (typeof calculateCandidateApproval === 'function')
      ? calculateCandidateApproval(elecId, candA_id)
      : (matrixRow[candA_id] !== undefined ? matrixRow[candA_id] : 30);
    const muB = (typeof calculateCandidateApproval === 'function')
      ? calculateCandidateApproval(elecId, candB_id)
      : (matrixRow[candB_id] !== undefined ? matrixRow[candB_id] : 30);

    // Wskaźniki kandydata preferowanego w danym elektoracie:
    const favCandUnpop = muA >= muB ? unpopA : unpopB;
    const favCandTrust = muA >= muB ? trustA : trustB;

    // 1) Zniechęcenie do mobilizacji przez niepopularność kandydata:
    // Im wyższa niepopularność kandydata (np. Kaczyński 59%, Braun 61%, Czarnek 53%),
    // tym silniej zniechęca to wyborców do pójścia do urn (wzrost demobilizacji / spadek frekwencji).
    const unpopDemobPenalty = Math.max(0.0, favCandUnpop - 35.0) * 0.90;

    // 2) Zaufanie społeczne do preferowanego kandydata zachęca do mobilizacji:
    const trustMobBonus = Math.max(0.0, favCandTrust - 35.0) * 0.30;

    // 3) Kontrast kandydatów i polaryzacja wyboru:
    const candContrastBonus = 0.6 * distAB;
    const electorateGapBonus = 0.05 * Math.abs(muA - muB);

    // Sprawdzenie czy dany elektorat jest macierzysty dla jednego z finalistów
    const isElecOwnA = (elecId === candA_id || (typeof getCandidateBasePartyId === 'function' && getCandidateBasePartyId(elecId) === getCandidateBasePartyId(candA_id)));
    const isElecOwnB = (elecId === candB_id || (typeof getCandidateBasePartyId === 'function' && getCandidateBasePartyId(elecId) === getCandidateBasePartyId(candB_id)));
    const isForeign = !isElecOwnA && !isElecOwnB;

    // Naturalna demobilizacja dla elektoratów obcych (trzecich partii):
    // Wyborcy, których kandydat odpadł, nie mobilizują się w 95-99% do urn.
    // Bazowy poziom absencji wynosi ok. 7-10% dla elektoratów sprzyjających i rośnie przy słabszej sympatii do faworyta.
    const foreignBase = isForeign ? 9.5 : 0.0;
    const maxMu = Math.max(muA, muB);
    const alienationDemob = Math.max(0.0, (85.0 - maxMu) * 0.35);

    const rawDemob = foreignBase + alienationDemob + unpopDemobPenalty + duelFatiguePenalty - trustMobBonus - candContrastBonus - electorateGapBonus;
    const minDemob = isForeign ? 7.0 : 2.0;
    const maxDemob = 85.0;
    const targetDemobPct = Math.min(maxDemob, Math.max(minDemob, rawDemob));

    // Różnica niepopularności (zniechęca) oraz zaufania (zachęca) w przypadku nowo utworzonych lub edytowanych kandydatów:
    const isCustomA = (typeof CANDIDATES_CONFIG !== 'undefined') && CANDIDATES_CONFIG.some(c => c.id === candA_id && (c.isCustom || c.isEdited));
    const isCustomB = (typeof CANDIDATES_CONFIG !== 'undefined') && CANDIDATES_CONFIG.some(c => c.id === candB_id && (c.isCustom || c.isEdited));
    const hasCustomFinalist = isCustomA || isCustomB;

    const unpopGap = (unpopA - unpopB);
    const trustGap = (trustA - trustB);
    let unpopShift = 0.0;
    let trustShift = 0.0;
    if (isForeign) {
      if (hasCustomFinalist) {
        unpopShift = 0.60 * unpopGap;
        trustShift = 0.50 * trustGap;
      }
    }

    let countA = 0;
    let countB = 0;
    let countDemob = 0;

    for (let i = 0; i < n_sim; i++) {
      const vA = Math.min(100, Math.max(0, gaussianRandom(muA, sigma_v)));
      const vB = Math.min(100, Math.max(0, gaussianRandom(muB, sigma_v)));

      // Bezpośredni wpływ różnicy zaufania (zachęca) i niepopularności (zniechęca) na postrzeganą wartość kandydatów
      const netCandShift = trustShift - unpopShift;
      const vA_eff = vA + 0.5 * netCandShift;
      const vB_eff = vB - 0.5 * netCandShift;
      const diff = vA_eff - vB_eff;
      const uA = vA_eff + alpha * diff;
      const uB = vB_eff - alpha * diff;

      // Wybór z miękką krzywą logistyczną
      const probA = 1.0 / (1.0 + Math.exp(-Math.max(-15, Math.min(15, (uA - uB) / sVal))));

      if (elecId === 'newVoters') {
        if (Math.random() < probA) countA++;
        else countB++;
      } else {
        if (Math.random() < (targetDemobPct / 100.0)) {
          countDemob++;
        } else if (Math.random() < probA) {
          countA++;
        } else {
          countB++;
        }
      }
    }

    if (elecId === 'newVoters') {
      const total = countA + countB > 0 ? (countA + countB) : 1;
      const pA = Math.round((countA / total) * 1000) / 10;
      const pB = Math.round((100.0 - pA) * 10) / 10;
      flows.newVoters = { a: pA, b: pB };
    } else {
      const pA = Math.round((countA / n_sim) * 1000) / 10;
      const pB = Math.round((countB / n_sim) * 1000) / 10;
      const pDemob = Math.round((100.0 - pA - pB) * 10) / 10;
      flows[elecId] = { a: pA, b: pB, demob: pDemob };
    }
  });

  return flows;
}

function getSmartDefaultFlows(candA_id, candB_id) {
  return simulateElectorateFlows(candA_id, candB_id, 1000);
}

function simulateElectorateDecision(elecId, candA_id, candB_id, n_sim = 1000) {
  const all = simulateElectorateFlows(candA_id, candB_id, n_sim);
  return all[elecId] || { a: 40.0, b: 40.0, demob: 20.0 };
}

if (typeof window !== 'undefined') {
  window.simulateElectorateFlows = simulateElectorateFlows;
  window.getSmartDefaultFlows = getSmartDefaultFlows;
  window.simulateElectorateDecision = simulateElectorateDecision;
}

const VOIVODESHIPS = {
  "dolnośląskie": { id: "voiv1", name: "Dolnośląskie" },
  "kujawsko-pomorskie": { id: "voiv2", name: "Kujawsko-Pomorskie" },
  "lubelskie": { id: "voiv3", name: "Lubelskie" },
  "lubuskie": { id: "voiv4", name: "Lubuskie" },
  "łódzkie": { id: "voiv5", name: "Łódzkie" },
  "małopolskie": { id: "voiv6", name: "Małopolskie" },
  "mazowieckie": { id: "voiv7", name: "Mazowieckie" },
  "opolskie": { id: "voiv8", name: "Opolskie" },
  "podkarpackie": { id: "voiv9", name: "Podkarpackie" },
  "podlaskie": { id: "voiv10", name: "Podlaskie" },
  "pomorskie": { id: "voiv11", name: "Pomorskie" },
  "śląskie": { id: "voiv12", name: "Śląskie" },
  "świętokrzyskie": { id: "voiv13", name: "Świętokrzyskie" },
  "warmińsko-mazurskie": { id: "voiv14", name: "Warmińsko-Mazurskie" },
  "wielkopolskie": { id: "voiv15", name: "Wielkopolskie" },
  "zachodniopomorskie": { id: "voiv16", name: "Zachodniopomorskie" }
};

const POWIAT_TO_OKREG = {"powiat bolesławiecki": "1", "powiat dzierżoniowski": "2", "powiat głogowski": "1", "powiat górowski": "3", "powiat jaworski": "1", "powiat karkonoski": "1", "powiat kamiennogórski": "1", "powiat kłodzki": "2", "powiat legnicki": "1", "powiat lubański": "1", "powiat lubiński": "1", "powiat lwówecki": "1", "powiat milicki": "3", "powiat oleśnicki": "3", "powiat oławski": "3", "powiat polkowicki": "1", "powiat strzeliński": "3", "powiat średzki (dolnośląskie)": "3", "powiat świdnicki (dolnośląskie)": "2", "powiat trzebnicki": "3", "powiat wałbrzyski": "2", "powiat wołowski": "3", "powiat wrocławski": "3", "powiat ząbkowicki": "2", "powiat zgorzelecki": "1", "powiat złotoryjski": "1", "powiat jelenia góra": "1", "powiat legnica": "1", "powiat wrocław": "3", "powiat wałbrzych": "2", "powiat aleksandrowski": "5", "powiat brodnicki": "5", "powiat bydgoski": "4", "powiat chełmiński": "5", "powiat golubsko-dobrzyński": "5", "powiat grudziądzki": "5", "powiat inowrocławski": "4", "powiat lipnowski": "5", "powiat mogileński": "4", "powiat nakielski": "4", "powiat radziejowski": "5", "powiat rypiński": "5", "powiat sępoleński": "4", "powiat świecki": "4", "powiat toruński": "5", "powiat tucholski": "4", "powiat wąbrzeski": "5", "powiat włocławski": "5", "powiat żniński": "4", "powiat bydgoszcz": "4", "powiat grudziądz": "5", "powiat toruń": "5", "powiat włocławek": "5", "powiat bialski": "7", "powiat biłgorajski": "7", "powiat chełmski": "7", "powiat hrubieszowski": "7", "powiat janowski": "6", "powiat krasnostawski": "7", "powiat kraśnicki": "6", "powiat lubartowski": "6", "powiat lubelski": "6", "powiat łęczyński": "6", "powiat łukowski": "6", "powiat opolski (lubelskie)": "6", "powiat parczewski": "7", "powiat puławski": "6", "powiat radzyński": "7", "powiat rycki": "6", "powiat świdnicki (lubelskie)": "6", "powiat tomaszowski (lubelskie)": "7", "powiat włodawski": "7", "powiat zamojski": "7", "powiat biała podlaska": "7", "powiat chełm": "7", "powiat lublin": "6", "powiat zamość": "7", "powiat gorzowski": "8", "powiat krośnieński (lubuskie)": "8", "powiat międzyrzecki": "8", "powiat nowosolski": "8", "powiat słubicki": "8", "powiat strzelecko-drezdenecki": "8", "powiat sulęciński": "8", "powiat świebodziński": "8", "powiat zielonogórski": "8", "powiat żagański": "8", "powiat żarski": "8", "powiat wschowski": "8", "powiat gorzów wielkopolski": "8", "powiat zielona góra": "8", "powiat bełchatowski": "10", "powiat kutnowski": "11", "powiat łaski": "11", "powiat łęczycki": "11", "powiat łowicki": "11", "powiat łódzki wschodni": "9", "powiat opoczyński": "10", "powiat pabianicki": "11", "powiat pajęczański": "11", "powiat piotrkowski": "10", "powiat poddębicki": "11", "powiat radomszczański": "10", "powiat rawski": "10", "powiat sieradzki": "11", "powiat skierniewicki": "10", "powiat tomaszowski (łódzkie)": "10", "powiat wieluński": "11", "powiat wieruszowski": "11", "powiat zduńskowolski": "11", "powiat zgierski": "11", "powiat brzeziński": "9", "powiat łódź": "9", "powiat piotrków trybunalski": "10", "powiat skierniewice": "10", "powiat bocheński": "15", "powiat brzeski (małopolskie)": "15", "powiat chrzanowski": "12", "powiat dąbrowski": "15", "powiat gorlicki": "14", "powiat krakowski": "13", "powiat limanowski": "14", "powiat miechowski": "13", "powiat myślenicki": "12", "powiat nowosądecki": "14", "powiat nowotarski": "14", "powiat olkuski": "13", "powiat oświęcimski": "12", "powiat proszowicki": "15", "powiat suski": "12", "powiat tarnowski": "15", "powiat tatrzański": "14", "powiat wadowicki": "12", "powiat wielicki": "15", "powiat kraków": "13", "powiat nowy sącz": "14", "powiat tarnów": "15", "powiat białobrzeski": "17", "powiat ciechanowski": "16", "powiat garwoliński": "18", "powiat gostyniński": "16", "powiat grodziski (mazowieckie)": "20", "powiat grójecki": "17", "powiat kozienicki": "17", "powiat legionowski": "20", "powiat lipski": "17", "powiat łosicki": "18", "powiat makowski": "18", "powiat miński": "18", "powiat mławski": "16", "powiat nowodworski (mazowieckie)": "20", "powiat ostrołęcki": "18", "powiat ostrowski (mazowieckie)": "18", "powiat otwocki": "20", "powiat piaseczyński": "20", "powiat płocki": "16", "powiat płoński": "16", "powiat pruszkowski": "20", "powiat przasnyski": "16", "powiat przysuski": "17", "powiat pułtuski": "18", "powiat radomski": "17", "powiat siedlecki": "18", "powiat sierpecki": "16", "powiat sochaczewski": "16", "powiat sokołowski": "18", "powiat szydłowiecki": "17", "powiat warszawski zachodni": "20", "powiat węgrowski": "18", "powiat wołomiński": "20", "powiat wyszkowski": "18", "powiat zwoleński": "17", "powiat żuromiński": "16", "powiat żyrardowski": "16", "powiat ostrołęka": "18", "powiat płock": "16", "powiat radom": "17", "powiat siedlce": "18", "powiat warszawa": "19", "powiat brzeski (opolskie)": "21", "powiat głubczycki": "21", "powiat kędzierzyńsko-kozielski": "21", "powiat kluczborski": "21", "powiat krapkowicki": "21", "powiat namysłowski": "21", "powiat nyski": "21", "powiat oleski": "21", "powiat opolski (opolskie)": "21", "powiat prudnicki": "21", "powiat strzelecki": "21", "powiat opole": "21", "powiat bieszczadzki": "22", "powiat brzozowski": "22", "powiat dębicki": "23", "powiat jarosławski": "22", "powiat jasielski": "22", "powiat kolbuszowski": "23", "powiat krośnieński (podkarpackie)": "22", "powiat leżajski": "23", "powiat lubaczowski": "22", "powiat łańcucki": "23", "powiat mielecki": "23", "powiat niżański": "23", "powiat przemyski": "22", "powiat przeworski": "22", "powiat ropczycko-sędziszowski": "23", "powiat rzeszowski": "23", "powiat sanocki": "22", "powiat stalowowolski": "23", "powiat strzyżowski": "23", "powiat tarnobrzeski": "23", "powiat leski": "22", "powiat krosno": "22", "powiat przemyśl": "22", "powiat rzeszów": "23", "powiat tarnobrzeg": "23", "powiat augustowski": "24", "powiat białostocki": "24", "powiat bielski (podlaskie)": "24", "powiat grajewski": "24", "powiat hajnowski": "24", "powiat kolneński": "24", "powiat łomżyński": "24", "powiat moniecki": "24", "powiat sejneński": "24", "powiat siemiatycki": "24", "powiat sokólski": "24", "powiat suwalski": "24", "powiat wysokomazowiecki": "24", "powiat zambrowski": "24", "powiat białystok": "24", "powiat łomża": "24", "powiat suwałki": "24", "powiat bytowski": "26", "powiat chojnicki": "26", "powiat człuchowski": "26", "powiat gdański": "25", "powiat kartuski": "26", "powiat kościerski": "26", "powiat kwidzyński": "25", "powiat lęborski": "26", "powiat malborski": "25", "powiat nowodworski (pomorskie)": "25", "powiat pucki": "26", "powiat słupski": "26", "powiat starogardzki": "25", "powiat tczewski": "25", "powiat wejherowski": "26", "powiat sztumski": "25", "powiat gdańsk": "25", "powiat gdynia": "26", "powiat słupsk": "26", "powiat sopot": "25", "powiat będziński": "32", "powiat bielski (śląskie)": "27", "powiat cieszyński": "27", "powiat częstochowski": "28", "powiat gliwicki": "29", "powiat kłobucki": "28", "powiat lubliniecki": "28", "powiat mikołowski": "30", "powiat myszkowski": "28", "powiat pszczyński": "27", "powiat raciborski": "30", "powiat rybnicki": "30", "powiat tarnogórski": "29", "powiat bieruńsko-lędziński": "31", "powiat wodzisławski": "30", "powiat zawierciański": "32", "powiat żywiecki": "27", "powiat bielsko-biała": "27", "powiat bytom": "29", "powiat chorzów": "31", "powiat częstochowa": "28", "powiat dąbrowa górnicza": "32", "powiat gliwice": "29", "powiat jastrzębie-zdrój": "30", "powiat jaworzno": "32", "powiat katowice": "31", "powiat mysłowice": "31", "powiat piekary śląskie": "31", "powiat ruda śląska": "31", "powiat rybnik": "30", "powiat siemianowice śląskie": "31", "powiat sosnowiec": "32", "powiat świętochłowice": "31", "powiat tychy": "31", "powiat zabrze": "29", "powiat żory": "30", "powiat buski": "33", "powiat jędrzejowski": "33", "powiat kazimierski": "33", "powiat kielecki": "33", "powiat konecki": "33", "powiat opatowski": "33", "powiat ostrowiecki": "33", "powiat pińczowski": "33", "powiat sandomierski": "33", "powiat skarżyski": "33", "powiat starachowicki": "33", "powiat staszowski": "33", "powiat włoszczowski": "33", "powiat kielce": "33", "powiat bartoszycki": "34", "powiat braniewski": "34", "powiat działdowski": "34", "powiat elbląski": "34", "powiat ełcki": "35", "powiat giżycki": "35", "powiat iławski": "34", "powiat kętrzyński": "35", "powiat lidzbarski": "34", "powiat mrągowski": "35", "powiat nidzicki": "35", "powiat nowomiejski": "34", "powiat olecki": "35", "powiat olsztyński": "35", "powiat ostródzki": "34", "powiat piski": "35", "powiat szczycieński": "35", "powiat gołdapski": "35", "powiat węgorzewski": "35", "powiat elbląg": "34", "powiat olsztyn": "35", "powiat chodzieski": "38", "powiat czarnkowsko-trzcianecki": "38", "powiat gnieźnieński": "37", "powiat gostyński": "36", "powiat grodziski (wielkopolskie)": "38", "powiat jarociński": "36", "powiat kaliski": "36", "powiat kępiński": "36", "powiat kolski": "37", "powiat koniński": "37", "powiat kościański": "36", "powiat krotoszyński": "36", "powiat leszczyński": "36", "powiat międzychodzki": "38", "powiat nowotomyski": "38", "powiat obornicki": "38", "powiat ostrowski (wielkopolskie)": "36", "powiat ostrzeszowski": "36", "powiat pilski": "38", "powiat pleszewski": "36", "powiat poznański": "39", "powiat rawicki": "36", "powiat słupecki": "37", "powiat szamotulski": "38", "powiat średzki (wielkopolskie)": "37", "powiat śremski": "37", "powiat turecki": "37", "powiat wągrowiecki": "38", "powiat wolsztyński": "38", "powiat wrzesiński": "37", "powiat złotowski": "38", "powiat kalisz": "36", "powiat konin": "37", "powiat leszno": "36", "powiat poznań": "39", "powiat białogardzki": "40", "powiat choszczeński": "40", "powiat drawski": "40", "powiat goleniowski": "41", "powiat gryficki": "41", "powiat gryfiński": "41", "powiat kamieński": "41", "powiat kołobrzeski": "40", "powiat koszaliński": "40", "powiat myśliborski": "41", "powiat policki": "41", "powiat pyrzycki": "41", "powiat sławieński": "40", "powiat stargardzki": "41", "powiat szczecinecki": "40", "powiat świdwiński": "40", "powiat wałecki": "40", "powiat łobeski": "41", "powiat koszalin": "40", "powiat szczecin": "41", "powiat świnoujście": "41"};

const POWIAT_INFO = {"powiat bolesławiecki": {"name": "bolesławiecki", "woj": "dolnośląskie", "okr": "1"}, "powiat dzierżoniowski": {"name": "dzierżoniowski", "woj": "dolnośląskie", "okr": "2"}, "powiat głogowski": {"name": "głogowski", "woj": "dolnośląskie", "okr": "1"}, "powiat górowski": {"name": "górowski", "woj": "dolnośląskie", "okr": "3"}, "powiat jaworski": {"name": "jaworski", "woj": "dolnośląskie", "okr": "1"}, "powiat karkonoski": {"name": "karkonoski", "woj": "dolnośląskie", "okr": "1"}, "powiat kamiennogórski": {"name": "kamiennogórski", "woj": "dolnośląskie", "okr": "1"}, "powiat kłodzki": {"name": "kłodzki", "woj": "dolnośląskie", "okr": "2"}, "powiat legnicki": {"name": "legnicki", "woj": "dolnośląskie", "okr": "1"}, "powiat lubański": {"name": "lubański", "woj": "dolnośląskie", "okr": "1"}, "powiat lubiński": {"name": "lubiński", "woj": "dolnośląskie", "okr": "1"}, "powiat lwówecki": {"name": "lwówecki", "woj": "dolnośląskie", "okr": "1"}, "powiat milicki": {"name": "milicki", "woj": "dolnośląskie", "okr": "3"}, "powiat oleśnicki": {"name": "oleśnicki", "woj": "dolnośląskie", "okr": "3"}, "powiat oławski": {"name": "oławski", "woj": "dolnośląskie", "okr": "3"}, "powiat polkowicki": {"name": "polkowicki", "woj": "dolnośląskie", "okr": "1"}, "powiat strzeliński": {"name": "strzeliński", "woj": "dolnośląskie", "okr": "3"}, "powiat średzki (dolnośląskie)": {"name": "średzki (dolnośląskie)", "woj": "dolnośląskie", "okr": "3"}, "powiat świdnicki (dolnośląskie)": {"name": "świdnicki (dolnośląskie)", "woj": "dolnośląskie", "okr": "2"}, "powiat trzebnicki": {"name": "trzebnicki", "woj": "dolnośląskie", "okr": "3"}, "powiat wałbrzyski": {"name": "wałbrzyski", "woj": "dolnośląskie", "okr": "2"}, "powiat wołowski": {"name": "wołowski", "woj": "dolnośląskie", "okr": "3"}, "powiat wrocławski": {"name": "wrocławski", "woj": "dolnośląskie", "okr": "3"}, "powiat ząbkowicki": {"name": "ząbkowicki", "woj": "dolnośląskie", "okr": "2"}, "powiat zgorzelecki": {"name": "zgorzelecki", "woj": "dolnośląskie", "okr": "1"}, "powiat złotoryjski": {"name": "złotoryjski", "woj": "dolnośląskie", "okr": "1"}, "powiat jelenia góra": {"name": "Jelenia Góra", "woj": "dolnośląskie", "okr": "1"}, "powiat legnica": {"name": "Legnica", "woj": "dolnośląskie", "okr": "1"}, "powiat wrocław": {"name": "Wrocław", "woj": "dolnośląskie", "okr": "3"}, "powiat wałbrzych": {"name": "Wałbrzych", "woj": "dolnośląskie", "okr": "2"}, "powiat aleksandrowski": {"name": "aleksandrowski", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat brodnicki": {"name": "brodnicki", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat bydgoski": {"name": "bydgoski", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat chełmiński": {"name": "chełmiński", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat golubsko-dobrzyński": {"name": "golubsko-dobrzyński", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat grudziądzki": {"name": "grudziądzki", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat inowrocławski": {"name": "inowrocławski", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat lipnowski": {"name": "lipnowski", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat mogileński": {"name": "mogileński", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat nakielski": {"name": "nakielski", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat radziejowski": {"name": "radziejowski", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat rypiński": {"name": "rypiński", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat sępoleński": {"name": "sępoleński", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat świecki": {"name": "świecki", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat toruński": {"name": "toruński", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat tucholski": {"name": "tucholski", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat wąbrzeski": {"name": "wąbrzeski", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat włocławski": {"name": "włocławski", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat żniński": {"name": "żniński", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat bydgoszcz": {"name": "Bydgoszcz", "woj": "kujawsko-pomorskie", "okr": "4"}, "powiat grudziądz": {"name": "Grudziądz", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat toruń": {"name": "Toruń", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat włocławek": {"name": "Włocławek", "woj": "kujawsko-pomorskie", "okr": "5"}, "powiat bialski": {"name": "bialski", "woj": "lubelskie", "okr": "7"}, "powiat biłgorajski": {"name": "biłgorajski", "woj": "lubelskie", "okr": "7"}, "powiat chełmski": {"name": "chełmski", "woj": "lubelskie", "okr": "7"}, "powiat hrubieszowski": {"name": "hrubieszowski", "woj": "lubelskie", "okr": "7"}, "powiat janowski": {"name": "janowski", "woj": "lubelskie", "okr": "6"}, "powiat krasnostawski": {"name": "krasnostawski", "woj": "lubelskie", "okr": "7"}, "powiat kraśnicki": {"name": "kraśnicki", "woj": "lubelskie", "okr": "6"}, "powiat lubartowski": {"name": "lubartowski", "woj": "lubelskie", "okr": "6"}, "powiat lubelski": {"name": "lubelski", "woj": "lubelskie", "okr": "6"}, "powiat łęczyński": {"name": "łęczyński", "woj": "lubelskie", "okr": "6"}, "powiat łukowski": {"name": "łukowski", "woj": "lubelskie", "okr": "6"}, "powiat opolski (lubelskie)": {"name": "opolski (lubelskie)", "woj": "lubelskie", "okr": "6"}, "powiat parczewski": {"name": "parczewski", "woj": "lubelskie", "okr": "7"}, "powiat puławski": {"name": "puławski", "woj": "lubelskie", "okr": "6"}, "powiat radzyński": {"name": "radzyński", "woj": "lubelskie", "okr": "7"}, "powiat rycki": {"name": "rycki", "woj": "lubelskie", "okr": "6"}, "powiat świdnicki (lubelskie)": {"name": "świdnicki (lubelskie)", "woj": "lubelskie", "okr": "6"}, "powiat tomaszowski (lubelskie)": {"name": "tomaszowski (lubelskie)", "woj": "lubelskie", "okr": "7"}, "powiat włodawski": {"name": "włodawski", "woj": "lubelskie", "okr": "7"}, "powiat zamojski": {"name": "zamojski", "woj": "lubelskie", "okr": "7"}, "powiat biała podlaska": {"name": "Biała Podlaska", "woj": "lubelskie", "okr": "7"}, "powiat chełm": {"name": "Chełm", "woj": "lubelskie", "okr": "7"}, "powiat lublin": {"name": "Lublin", "woj": "lubelskie", "okr": "6"}, "powiat zamość": {"name": "Zamość", "woj": "lubelskie", "okr": "7"}, "powiat gorzowski": {"name": "gorzowski", "woj": "lubuskie", "okr": "8"}, "powiat krośnieński (lubuskie)": {"name": "krośnieński (lubuskie)", "woj": "lubuskie", "okr": "8"}, "powiat międzyrzecki": {"name": "międzyrzecki", "woj": "lubuskie", "okr": "8"}, "powiat nowosolski": {"name": "nowosolski", "woj": "lubuskie", "okr": "8"}, "powiat słubicki": {"name": "słubicki", "woj": "lubuskie", "okr": "8"}, "powiat strzelecko-drezdenecki": {"name": "strzelecko-drezdenecki", "woj": "lubuskie", "okr": "8"}, "powiat sulęciński": {"name": "sulęciński", "woj": "lubuskie", "okr": "8"}, "powiat świebodziński": {"name": "świebodziński", "woj": "lubuskie", "okr": "8"}, "powiat zielonogórski": {"name": "zielonogórski", "woj": "lubuskie", "okr": "8"}, "powiat żagański": {"name": "żagański", "woj": "lubuskie", "okr": "8"}, "powiat żarski": {"name": "żarski", "woj": "lubuskie", "okr": "8"}, "powiat wschowski": {"name": "wschowski", "woj": "lubuskie", "okr": "8"}, "powiat gorzów wielkopolski": {"name": "Gorzów Wielkopolski", "woj": "lubuskie", "okr": "8"}, "powiat zielona góra": {"name": "Zielona Góra", "woj": "lubuskie", "okr": "8"}, "powiat bełchatowski": {"name": "bełchatowski", "woj": "łódzkie", "okr": "10"}, "powiat kutnowski": {"name": "kutnowski", "woj": "łódzkie", "okr": "11"}, "powiat łaski": {"name": "łaski", "woj": "łódzkie", "okr": "11"}, "powiat łęczycki": {"name": "łęczycki", "woj": "łódzkie", "okr": "11"}, "powiat łowicki": {"name": "łowicki", "woj": "łódzkie", "okr": "11"}, "powiat łódzki wschodni": {"name": "łódzki wschodni", "woj": "łódzkie", "okr": "9"}, "powiat opoczyński": {"name": "opoczyński", "woj": "łódzkie", "okr": "10"}, "powiat pabianicki": {"name": "pabianicki", "woj": "łódzkie", "okr": "11"}, "powiat pajęczański": {"name": "pajęczański", "woj": "łódzkie", "okr": "11"}, "powiat piotrkowski": {"name": "piotrkowski", "woj": "łódzkie", "okr": "10"}, "powiat poddębicki": {"name": "poddębicki", "woj": "łódzkie", "okr": "11"}, "powiat radomszczański": {"name": "radomszczański", "woj": "łódzkie", "okr": "10"}, "powiat rawski": {"name": "rawski", "woj": "łódzkie", "okr": "10"}, "powiat sieradzki": {"name": "sieradzki", "woj": "łódzkie", "okr": "11"}, "powiat skierniewicki": {"name": "skierniewicki", "woj": "łódzkie", "okr": "10"}, "powiat tomaszowski (łódzkie)": {"name": "tomaszowski (łódzkie)", "woj": "łódzkie", "okr": "10"}, "powiat wieluński": {"name": "wieluński", "woj": "łódzkie", "okr": "11"}, "powiat wieruszowski": {"name": "wieruszowski", "woj": "łódzkie", "okr": "11"}, "powiat zduńskowolski": {"name": "zduńskowolski", "woj": "łódzkie", "okr": "11"}, "powiat zgierski": {"name": "zgierski", "woj": "łódzkie", "okr": "11"}, "powiat brzeziński": {"name": "brzeziński", "woj": "łódzkie", "okr": "9"}, "powiat łódź": {"name": "Łódź", "woj": "łódzkie", "okr": "9"}, "powiat piotrków trybunalski": {"name": "Piotrków Trybunalski", "woj": "łódzkie", "okr": "10"}, "powiat skierniewice": {"name": "Skierniewice", "woj": "łódzkie", "okr": "10"}, "powiat bocheński": {"name": "bocheński", "woj": "małopolskie", "okr": "15"}, "powiat brzeski (małopolskie)": {"name": "brzeski (małopolskie)", "woj": "małopolskie", "okr": "15"}, "powiat chrzanowski": {"name": "chrzanowski", "woj": "małopolskie", "okr": "12"}, "powiat dąbrowski": {"name": "dąbrowski", "woj": "małopolskie", "okr": "15"}, "powiat gorlicki": {"name": "gorlicki", "woj": "małopolskie", "okr": "14"}, "powiat krakowski": {"name": "krakowski", "woj": "małopolskie", "okr": "13"}, "powiat limanowski": {"name": "limanowski", "woj": "małopolskie", "okr": "14"}, "powiat miechowski": {"name": "miechowski", "woj": "małopolskie", "okr": "13"}, "powiat myślenicki": {"name": "myślenicki", "woj": "małopolskie", "okr": "12"}, "powiat nowosądecki": {"name": "nowosądecki", "woj": "małopolskie", "okr": "14"}, "powiat nowotarski": {"name": "nowotarski", "woj": "małopolskie", "okr": "14"}, "powiat olkuski": {"name": "olkuski", "woj": "małopolskie", "okr": "13"}, "powiat oświęcimski": {"name": "oświęcimski", "woj": "małopolskie", "okr": "12"}, "powiat proszowicki": {"name": "proszowicki", "woj": "małopolskie", "okr": "15"}, "powiat suski": {"name": "suski", "woj": "małopolskie", "okr": "12"}, "powiat tarnowski": {"name": "tarnowski", "woj": "małopolskie", "okr": "15"}, "powiat tatrzański": {"name": "tatrzański", "woj": "małopolskie", "okr": "14"}, "powiat wadowicki": {"name": "wadowicki", "woj": "małopolskie", "okr": "12"}, "powiat wielicki": {"name": "wielicki", "woj": "małopolskie", "okr": "15"}, "powiat kraków": {"name": "Kraków", "woj": "małopolskie", "okr": "13"}, "powiat nowy sącz": {"name": "Nowy Sącz", "woj": "małopolskie", "okr": "14"}, "powiat tarnów": {"name": "Tarnów", "woj": "małopolskie", "okr": "15"}, "powiat białobrzeski": {"name": "białobrzeski", "woj": "mazowieckie", "okr": "17"}, "powiat ciechanowski": {"name": "ciechanowski", "woj": "mazowieckie", "okr": "16"}, "powiat garwoliński": {"name": "garwoliński", "woj": "mazowieckie", "okr": "18"}, "powiat gostyniński": {"name": "gostyniński", "woj": "mazowieckie", "okr": "16"}, "powiat grodziski (mazowieckie)": {"name": "grodziski (mazowieckie)", "woj": "mazowieckie", "okr": "20"}, "powiat grójecki": {"name": "grójecki", "woj": "mazowieckie", "okr": "17"}, "powiat kozienicki": {"name": "kozienicki", "woj": "mazowieckie", "okr": "17"}, "powiat legionowski": {"name": "legionowski", "woj": "mazowieckie", "okr": "20"}, "powiat lipski": {"name": "lipski", "woj": "mazowieckie", "okr": "17"}, "powiat łosicki": {"name": "łosicki", "woj": "mazowieckie", "okr": "18"}, "powiat makowski": {"name": "makowski", "woj": "mazowieckie", "okr": "18"}, "powiat miński": {"name": "miński", "woj": "mazowieckie", "okr": "18"}, "powiat mławski": {"name": "mławski", "woj": "mazowieckie", "okr": "16"}, "powiat nowodworski (mazowieckie)": {"name": "nowodworski (mazowieckie)", "woj": "mazowieckie", "okr": "20"}, "powiat ostrołęcki": {"name": "ostrołęcki", "woj": "mazowieckie", "okr": "18"}, "powiat ostrowski (mazowieckie)": {"name": "ostrowski (mazowieckie)", "woj": "mazowieckie", "okr": "18"}, "powiat otwocki": {"name": "otwocki", "woj": "mazowieckie", "okr": "20"}, "powiat piaseczyński": {"name": "piaseczyński", "woj": "mazowieckie", "okr": "20"}, "powiat płocki": {"name": "płocki", "woj": "mazowieckie", "okr": "16"}, "powiat płoński": {"name": "płoński", "woj": "mazowieckie", "okr": "16"}, "powiat pruszkowski": {"name": "pruszkowski", "woj": "mazowieckie", "okr": "20"}, "powiat przasnyski": {"name": "przasnyski", "woj": "mazowieckie", "okr": "16"}, "powiat przysuski": {"name": "przysuski", "woj": "mazowieckie", "okr": "17"}, "powiat pułtuski": {"name": "pułtuski", "woj": "mazowieckie", "okr": "18"}, "powiat radomski": {"name": "radomski", "woj": "mazowieckie", "okr": "17"}, "powiat siedlecki": {"name": "siedlecki", "woj": "mazowieckie", "okr": "18"}, "powiat sierpecki": {"name": "sierpecki", "woj": "mazowieckie", "okr": "16"}, "powiat sochaczewski": {"name": "sochaczewski", "woj": "mazowieckie", "okr": "16"}, "powiat sokołowski": {"name": "sokołowski", "woj": "mazowieckie", "okr": "18"}, "powiat szydłowiecki": {"name": "szydłowiecki", "woj": "mazowieckie", "okr": "17"}, "powiat warszawski zachodni": {"name": "warszawski zachodni", "woj": "mazowieckie", "okr": "20"}, "powiat węgrowski": {"name": "węgrowski", "woj": "mazowieckie", "okr": "18"}, "powiat wołomiński": {"name": "wołomiński", "woj": "mazowieckie", "okr": "20"}, "powiat wyszkowski": {"name": "wyszkowski", "woj": "mazowieckie", "okr": "18"}, "powiat zwoleński": {"name": "zwoleński", "woj": "mazowieckie", "okr": "17"}, "powiat żuromiński": {"name": "żuromiński", "woj": "mazowieckie", "okr": "16"}, "powiat żyrardowski": {"name": "żyrardowski", "woj": "mazowieckie", "okr": "16"}, "powiat ostrołęka": {"name": "Ostrołęka", "woj": "mazowieckie", "okr": "18"}, "powiat płock": {"name": "Płock", "woj": "mazowieckie", "okr": "16"}, "powiat radom": {"name": "Radom", "woj": "mazowieckie", "okr": "17"}, "powiat siedlce": {"name": "Siedlce", "woj": "mazowieckie", "okr": "18"}, "powiat warszawa": {"name": "Warszawa", "woj": "mazowieckie", "okr": "19"}, "powiat brzeski (opolskie)": {"name": "brzeski (opolskie)", "woj": "opolskie", "okr": "21"}, "powiat głubczycki": {"name": "głubczycki", "woj": "opolskie", "okr": "21"}, "powiat kędzierzyńsko-kozielski": {"name": "kędzierzyńsko-kozielski", "woj": "opolskie", "okr": "21"}, "powiat kluczborski": {"name": "kluczborski", "woj": "opolskie", "okr": "21"}, "powiat krapkowicki": {"name": "krapkowicki", "woj": "opolskie", "okr": "21"}, "powiat namysłowski": {"name": "namysłowski", "woj": "opolskie", "okr": "21"}, "powiat nyski": {"name": "nyski", "woj": "opolskie", "okr": "21"}, "powiat oleski": {"name": "oleski", "woj": "opolskie", "okr": "21"}, "powiat opolski (opolskie)": {"name": "opolski (opolskie)", "woj": "opolskie", "okr": "21"}, "powiat prudnicki": {"name": "prudnicki", "woj": "opolskie", "okr": "21"}, "powiat strzelecki": {"name": "strzelecki", "woj": "opolskie", "okr": "21"}, "powiat opole": {"name": "Opole", "woj": "opolskie", "okr": "21"}, "powiat bieszczadzki": {"name": "bieszczadzki", "woj": "podkarpackie", "okr": "22"}, "powiat brzozowski": {"name": "brzozowski", "woj": "podkarpackie", "okr": "22"}, "powiat dębicki": {"name": "dębicki", "woj": "podkarpackie", "okr": "23"}, "powiat jarosławski": {"name": "jarosławski", "woj": "podkarpackie", "okr": "22"}, "powiat jasielski": {"name": "jasielski", "woj": "podkarpackie", "okr": "22"}, "powiat kolbuszowski": {"name": "kolbuszowski", "woj": "podkarpackie", "okr": "23"}, "powiat krośnieński (podkarpackie)": {"name": "krośnieński (podkarpackie)", "woj": "podkarpackie", "okr": "22"}, "powiat leżajski": {"name": "leżajski", "woj": "podkarpackie", "okr": "23"}, "powiat lubaczowski": {"name": "lubaczowski", "woj": "podkarpackie", "okr": "22"}, "powiat łańcucki": {"name": "łańcucki", "woj": "podkarpackie", "okr": "23"}, "powiat mielecki": {"name": "mielecki", "woj": "podkarpackie", "okr": "23"}, "powiat niżański": {"name": "niżański", "woj": "podkarpackie", "okr": "23"}, "powiat przemyski": {"name": "przemyski", "woj": "podkarpackie", "okr": "22"}, "powiat przeworski": {"name": "przeworski", "woj": "podkarpackie", "okr": "22"}, "powiat ropczycko-sędziszowski": {"name": "ropczycko-sędziszowski", "woj": "podkarpackie", "okr": "23"}, "powiat rzeszowski": {"name": "rzeszowski", "woj": "podkarpackie", "okr": "23"}, "powiat sanocki": {"name": "sanocki", "woj": "podkarpackie", "okr": "22"}, "powiat stalowowolski": {"name": "stalowowolski", "woj": "podkarpackie", "okr": "23"}, "powiat strzyżowski": {"name": "strzyżowski", "woj": "podkarpackie", "okr": "23"}, "powiat tarnobrzeski": {"name": "tarnobrzeski", "woj": "podkarpackie", "okr": "23"}, "powiat leski": {"name": "leski", "woj": "podkarpackie", "okr": "22"}, "powiat krosno": {"name": "Krosno", "woj": "podkarpackie", "okr": "22"}, "powiat przemyśl": {"name": "Przemyśl", "woj": "podkarpackie", "okr": "22"}, "powiat rzeszów": {"name": "Rzeszów", "woj": "podkarpackie", "okr": "23"}, "powiat tarnobrzeg": {"name": "Tarnobrzeg", "woj": "podkarpackie", "okr": "23"}, "powiat augustowski": {"name": "augustowski", "woj": "podlaskie", "okr": "24"}, "powiat białostocki": {"name": "białostocki", "woj": "podlaskie", "okr": "24"}, "powiat bielski (podlaskie)": {"name": "bielski (podlaskie)", "woj": "podlaskie", "okr": "24"}, "powiat grajewski": {"name": "grajewski", "woj": "podlaskie", "okr": "24"}, "powiat hajnowski": {"name": "hajnowski", "woj": "podlaskie", "okr": "24"}, "powiat kolneński": {"name": "kolneński", "woj": "podlaskie", "okr": "24"}, "powiat łomżyński": {"name": "łomżyński", "woj": "podlaskie", "okr": "24"}, "powiat moniecki": {"name": "moniecki", "woj": "podlaskie", "okr": "24"}, "powiat sejneński": {"name": "sejneński", "woj": "podlaskie", "okr": "24"}, "powiat siemiatycki": {"name": "siemiatycki", "woj": "podlaskie", "okr": "24"}, "powiat sokólski": {"name": "sokólski", "woj": "podlaskie", "okr": "24"}, "powiat suwalski": {"name": "suwalski", "woj": "podlaskie", "okr": "24"}, "powiat wysokomazowiecki": {"name": "wysokomazowiecki", "woj": "podlaskie", "okr": "24"}, "powiat zambrowski": {"name": "zambrowski", "woj": "podlaskie", "okr": "24"}, "powiat białystok": {"name": "Białystok", "woj": "podlaskie", "okr": "24"}, "powiat łomża": {"name": "Łomża", "woj": "podlaskie", "okr": "24"}, "powiat suwałki": {"name": "Suwałki", "woj": "podlaskie", "okr": "24"}, "powiat bytowski": {"name": "bytowski", "woj": "pomorskie", "okr": "26"}, "powiat chojnicki": {"name": "chojnicki", "woj": "pomorskie", "okr": "26"}, "powiat człuchowski": {"name": "człuchowski", "woj": "pomorskie", "okr": "26"}, "powiat gdański": {"name": "gdański", "woj": "pomorskie", "okr": "25"}, "powiat kartuski": {"name": "kartuski", "woj": "pomorskie", "okr": "26"}, "powiat kościerski": {"name": "kościerski", "woj": "pomorskie", "okr": "26"}, "powiat kwidzyński": {"name": "kwidzyński", "woj": "pomorskie", "okr": "25"}, "powiat lęborski": {"name": "lęborski", "woj": "pomorskie", "okr": "26"}, "powiat malborski": {"name": "malborski", "woj": "pomorskie", "okr": "25"}, "powiat nowodworski (pomorskie)": {"name": "nowodworski (pomorskie)", "woj": "pomorskie", "okr": "25"}, "powiat pucki": {"name": "pucki", "woj": "pomorskie", "okr": "26"}, "powiat słupski": {"name": "słupski", "woj": "pomorskie", "okr": "26"}, "powiat starogardzki": {"name": "starogardzki", "woj": "pomorskie", "okr": "25"}, "powiat tczewski": {"name": "tczewski", "woj": "pomorskie", "okr": "25"}, "powiat wejherowski": {"name": "wejherowski", "woj": "pomorskie", "okr": "26"}, "powiat sztumski": {"name": "sztumski", "woj": "pomorskie", "okr": "25"}, "powiat gdańsk": {"name": "Gdańsk", "woj": "pomorskie", "okr": "25"}, "powiat gdynia": {"name": "Gdynia", "woj": "pomorskie", "okr": "26"}, "powiat słupsk": {"name": "Słupsk", "woj": "pomorskie", "okr": "26"}, "powiat sopot": {"name": "Sopot", "woj": "pomorskie", "okr": "25"}, "powiat będziński": {"name": "będziński", "woj": "śląskie", "okr": "32"}, "powiat bielski (śląskie)": {"name": "bielski (śląskie)", "woj": "śląskie", "okr": "27"}, "powiat cieszyński": {"name": "cieszyński", "woj": "śląskie", "okr": "27"}, "powiat częstochowski": {"name": "częstochowski", "woj": "śląskie", "okr": "28"}, "powiat gliwicki": {"name": "gliwicki", "woj": "śląskie", "okr": "29"}, "powiat kłobucki": {"name": "kłobucki", "woj": "śląskie", "okr": "28"}, "powiat lubliniecki": {"name": "lubliniecki", "woj": "śląskie", "okr": "28"}, "powiat mikołowski": {"name": "mikołowski", "woj": "śląskie", "okr": "30"}, "powiat myszkowski": {"name": "myszkowski", "woj": "śląskie", "okr": "28"}, "powiat pszczyński": {"name": "pszczyński", "woj": "śląskie", "okr": "27"}, "powiat raciborski": {"name": "raciborski", "woj": "śląskie", "okr": "30"}, "powiat rybnicki": {"name": "rybnicki", "woj": "śląskie", "okr": "30"}, "powiat tarnogórski": {"name": "tarnogórski", "woj": "śląskie", "okr": "29"}, "powiat bieruńsko-lędziński": {"name": "bieruńsko-lędziński", "woj": "śląskie", "okr": "31"}, "powiat wodzisławski": {"name": "wodzisławski", "woj": "śląskie", "okr": "30"}, "powiat zawierciański": {"name": "zawierciański", "woj": "śląskie", "okr": "32"}, "powiat żywiecki": {"name": "żywiecki", "woj": "śląskie", "okr": "27"}, "powiat bielsko-biała": {"name": "Bielsko-Biała", "woj": "śląskie", "okr": "27"}, "powiat bytom": {"name": "Bytom", "woj": "śląskie", "okr": "29"}, "powiat chorzów": {"name": "Chorzów", "woj": "śląskie", "okr": "31"}, "powiat częstochowa": {"name": "Częstochowa", "woj": "śląskie", "okr": "28"}, "powiat dąbrowa górnicza": {"name": "Dąbrowa Górnicza", "woj": "śląskie", "okr": "32"}, "powiat gliwice": {"name": "Gliwice", "woj": "śląskie", "okr": "29"}, "powiat jastrzębie-zdrój": {"name": "Jastrzębie-Zdrój", "woj": "śląskie", "okr": "30"}, "powiat jaworzno": {"name": "Jaworzno", "woj": "śląskie", "okr": "32"}, "powiat katowice": {"name": "Katowice", "woj": "śląskie", "okr": "31"}, "powiat mysłowice": {"name": "Mysłowice", "woj": "śląskie", "okr": "31"}, "powiat piekary śląskie": {"name": "Piekary Śląskie", "woj": "śląskie", "okr": "31"}, "powiat ruda śląska": {"name": "Ruda Śląska", "woj": "śląskie", "okr": "31"}, "powiat rybnik": {"name": "Rybnik", "woj": "śląskie", "okr": "30"}, "powiat siemianowice śląskie": {"name": "Siemianowice Śląskie", "woj": "śląskie", "okr": "31"}, "powiat sosnowiec": {"name": "Sosnowiec", "woj": "śląskie", "okr": "32"}, "powiat świętochłowice": {"name": "Świętochłowice", "woj": "śląskie", "okr": "31"}, "powiat tychy": {"name": "Tychy", "woj": "śląskie", "okr": "31"}, "powiat zabrze": {"name": "Zabrze", "woj": "śląskie", "okr": "29"}, "powiat żory": {"name": "Żory", "woj": "śląskie", "okr": "30"}, "powiat buski": {"name": "buski", "woj": "świętokrzyskie", "okr": "33"}, "powiat jędrzejowski": {"name": "jędrzejowski", "woj": "świętokrzyskie", "okr": "33"}, "powiat kazimierski": {"name": "kazimierski", "woj": "świętokrzyskie", "okr": "33"}, "powiat kielecki": {"name": "kielecki", "woj": "świętokrzyskie", "okr": "33"}, "powiat konecki": {"name": "konecki", "woj": "świętokrzyskie", "okr": "33"}, "powiat opatowski": {"name": "opatowski", "woj": "świętokrzyskie", "okr": "33"}, "powiat ostrowiecki": {"name": "ostrowiecki", "woj": "świętokrzyskie", "okr": "33"}, "powiat pińczowski": {"name": "pińczowski", "woj": "świętokrzyskie", "okr": "33"}, "powiat sandomierski": {"name": "sandomierski", "woj": "świętokrzyskie", "okr": "33"}, "powiat skarżyski": {"name": "skarżyski", "woj": "świętokrzyskie", "okr": "33"}, "powiat starachowicki": {"name": "starachowicki", "woj": "świętokrzyskie", "okr": "33"}, "powiat staszowski": {"name": "staszowski", "woj": "świętokrzyskie", "okr": "33"}, "powiat włoszczowski": {"name": "włoszczowski", "woj": "świętokrzyskie", "okr": "33"}, "powiat kielce": {"name": "Kielce", "woj": "świętokrzyskie", "okr": "33"}, "powiat bartoszycki": {"name": "bartoszycki", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat braniewski": {"name": "braniewski", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat działdowski": {"name": "działdowski", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat elbląski": {"name": "elbląski", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat ełcki": {"name": "ełcki", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat giżycki": {"name": "giżycki", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat iławski": {"name": "iławski", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat kętrzyński": {"name": "kętrzyński", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat lidzbarski": {"name": "lidzbarski", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat mrągowski": {"name": "mrągowski", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat nidzicki": {"name": "nidzicki", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat nowomiejski": {"name": "nowomiejski", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat olecki": {"name": "olecki", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat olsztyński": {"name": "olsztyński", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat ostródzki": {"name": "ostródzki", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat piski": {"name": "piski", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat szczycieński": {"name": "szczycieński", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat gołdapski": {"name": "gołdapski", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat węgorzewski": {"name": "węgorzewski", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat elbląg": {"name": "Elbląg", "woj": "warmińsko-mazurskie", "okr": "34"}, "powiat olsztyn": {"name": "Olsztyn", "woj": "warmińsko-mazurskie", "okr": "35"}, "powiat chodzieski": {"name": "chodzieski", "woj": "wielkopolskie", "okr": "38"}, "powiat czarnkowsko-trzcianecki": {"name": "czarnkowsko-trzcianecki", "woj": "wielkopolskie", "okr": "38"}, "powiat gnieźnieński": {"name": "gnieźnieński", "woj": "wielkopolskie", "okr": "37"}, "powiat gostyński": {"name": "gostyński", "woj": "wielkopolskie", "okr": "36"}, "powiat grodziski (wielkopolskie)": {"name": "grodziski (wielkopolskie)", "woj": "wielkopolskie", "okr": "38"}, "powiat jarociński": {"name": "jarociński", "woj": "wielkopolskie", "okr": "36"}, "powiat kaliski": {"name": "kaliski", "woj": "wielkopolskie", "okr": "36"}, "powiat kępiński": {"name": "kępiński", "woj": "wielkopolskie", "okr": "36"}, "powiat kolski": {"name": "kolski", "woj": "wielkopolskie", "okr": "37"}, "powiat koniński": {"name": "koniński", "woj": "wielkopolskie", "okr": "37"}, "powiat kościański": {"name": "kościański", "woj": "wielkopolskie", "okr": "36"}, "powiat krotoszyński": {"name": "krotoszyński", "woj": "wielkopolskie", "okr": "36"}, "powiat leszczyński": {"name": "leszczyński", "woj": "wielkopolskie", "okr": "36"}, "powiat międzychodzki": {"name": "międzychodzki", "woj": "wielkopolskie", "okr": "38"}, "powiat nowotomyski": {"name": "nowotomyski", "woj": "wielkopolskie", "okr": "38"}, "powiat obornicki": {"name": "obornicki", "woj": "wielkopolskie", "okr": "38"}, "powiat ostrowski (wielkopolskie)": {"name": "ostrowski (wielkopolskie)", "woj": "wielkopolskie", "okr": "36"}, "powiat ostrzeszowski": {"name": "ostrzeszowski", "woj": "wielkopolskie", "okr": "36"}, "powiat pilski": {"name": "pilski", "woj": "wielkopolskie", "okr": "38"}, "powiat pleszewski": {"name": "pleszewski", "woj": "wielkopolskie", "okr": "36"}, "powiat poznański": {"name": "poznański", "woj": "wielkopolskie", "okr": "39"}, "powiat rawicki": {"name": "rawicki", "woj": "wielkopolskie", "okr": "36"}, "powiat słupecki": {"name": "słupecki", "woj": "wielkopolskie", "okr": "37"}, "powiat szamotulski": {"name": "szamotulski", "woj": "wielkopolskie", "okr": "38"}, "powiat średzki (wielkopolskie)": {"name": "średzki (wielkopolskie)", "woj": "wielkopolskie", "okr": "37"}, "powiat śremski": {"name": "śremski", "woj": "wielkopolskie", "okr": "37"}, "powiat turecki": {"name": "turecki", "woj": "wielkopolskie", "okr": "37"}, "powiat wągrowiecki": {"name": "wągrowiecki", "woj": "wielkopolskie", "okr": "38"}, "powiat wolsztyński": {"name": "wolsztyński", "woj": "wielkopolskie", "okr": "38"}, "powiat wrzesiński": {"name": "wrzesiński", "woj": "wielkopolskie", "okr": "37"}, "powiat złotowski": {"name": "złotowski", "woj": "wielkopolskie", "okr": "38"}, "powiat kalisz": {"name": "Kalisz", "woj": "wielkopolskie", "okr": "36"}, "powiat konin": {"name": "Konin", "woj": "wielkopolskie", "okr": "37"}, "powiat leszno": {"name": "Leszno", "woj": "wielkopolskie", "okr": "36"}, "powiat poznań": {"name": "Poznań", "woj": "wielkopolskie", "okr": "39"}, "powiat białogardzki": {"name": "białogardzki", "woj": "zachodniopomorskie", "okr": "40"}, "powiat choszczeński": {"name": "choszczeński", "woj": "zachodniopomorskie", "okr": "40"}, "powiat drawski": {"name": "drawski", "woj": "zachodniopomorskie", "okr": "40"}, "powiat goleniowski": {"name": "goleniowski", "woj": "zachodniopomorskie", "okr": "41"}, "powiat gryficki": {"name": "gryficki", "woj": "zachodniopomorskie", "okr": "41"}, "powiat gryfiński": {"name": "gryfiński", "woj": "zachodniopomorskie", "okr": "41"}, "powiat kamieński": {"name": "kamieński", "woj": "zachodniopomorskie", "okr": "41"}, "powiat kołobrzeski": {"name": "kołobrzeski", "woj": "zachodniopomorskie", "okr": "40"}, "powiat koszaliński": {"name": "koszaliński", "woj": "zachodniopomorskie", "okr": "40"}, "powiat myśliborski": {"name": "myśliborski", "woj": "zachodniopomorskie", "okr": "41"}, "powiat policki": {"name": "policki", "woj": "zachodniopomorskie", "okr": "41"}, "powiat pyrzycki": {"name": "pyrzycki", "woj": "zachodniopomorskie", "okr": "41"}, "powiat sławieński": {"name": "sławieński", "woj": "zachodniopomorskie", "okr": "40"}, "powiat stargardzki": {"name": "stargardzki", "woj": "zachodniopomorskie", "okr": "41"}, "powiat szczecinecki": {"name": "szczecinecki", "woj": "zachodniopomorskie", "okr": "40"}, "powiat świdwiński": {"name": "świdwiński", "woj": "zachodniopomorskie", "okr": "40"}, "powiat wałecki": {"name": "wałecki", "woj": "zachodniopomorskie", "okr": "40"}, "powiat łobeski": {"name": "łobeski", "woj": "zachodniopomorskie", "okr": "41"}, "powiat koszalin": {"name": "Koszalin", "woj": "zachodniopomorskie", "okr": "40"}, "powiat szczecin": {"name": "Szczecin", "woj": "zachodniopomorskie", "okr": "41"}, "powiat świnoujście": {"name": "Świnoujście", "woj": "zachodniopomorskie", "okr": "41"}};

const procentyPowiaty = {"powiat bolesławiecki": {"KO": 0.0022185, "PiS": 0.0020472, "RozwojPlus": 0.00185468, "Konfederacja": 0.0023084, "KoronaPolska": 0.00224472, "PL2050": 0.00172847, "PSL": 0.00179423, "Razem": 0.00159629, "Lewica": 0.00165308, "BS": 0.00445655, "NF": 0.0017143, "MN": 0.0, "WiR": 0.00153287, "RDiP": 0.0024745, "PPS": 0.00212846, "Inni": 0.00185188, "Woch": 0.00212342, "Brzoska": 0.00216305, "Matysiak": 0.00166165}, "powiat dzierżoniowski": {"KO": 0.00249315, "PiS": 0.00206063, "RozwojPlus": 0.00285197, "Konfederacja": 0.00208927, "KoronaPolska": 0.00222863, "PL2050": 0.00176627, "PSL": 0.00186768, "Razem": 0.00161309, "Lewica": 0.00190508, "BS": 0.00224559, "NF": 0.00178304, "MN": 0.0, "WiR": 0.00169213, "RDiP": 0.00192461, "PPS": 0.00259885, "Inni": 0.00197155, "Woch": 0.0018944, "Brzoska": 0.00232177, "Matysiak": 0.00174009}, "powiat głogowski": {"KO": 0.00224289, "PiS": 0.00221702, "RozwojPlus": 0.001973, "Konfederacja": 0.0020214, "KoronaPolska": 0.00180221, "PL2050": 0.00196547, "PSL": 0.00158133, "Razem": 0.00183033, "Lewica": 0.00188338, "BS": 0.00298594, "NF": 0.00176348, "MN": 0.0, "WiR": 0.00183148, "RDiP": 0.00211707, "PPS": 0.00200326, "Inni": 0.00184201, "Woch": 0.00192429, "Brzoska": 0.00213211, "Matysiak": 0.00186606}, "powiat górowski": {"KO": 0.00063418, "PiS": 0.00072694, "RozwojPlus": 0.00102437, "Konfederacja": 0.00083895, "KoronaPolska": 0.00085203, "PL2050": 0.00056594, "PSL": 0.00052493, "Razem": 0.00056778, "Lewica": 0.00071019, "BS": 0.00129356, "NF": 0.00071938, "MN": 0.0, "WiR": 0.00074984, "RDiP": 0.00093481, "PPS": 0.00056535, "Inni": 0.00064274, "Woch": 0.00071737, "Brzoska": 0.00070469, "Matysiak": 0.00061097}, "powiat jaworski": {"KO": 0.00108592, "PiS": 0.00128399, "RozwojPlus": 0.00112551, "Konfederacja": 0.00111837, "KoronaPolska": 0.00125028, "PL2050": 0.00093166, "PSL": 0.00094442, "Razem": 0.00083855, "Lewica": 0.00097545, "BS": 0.00175734, "NF": 0.00085707, "MN": 0.0, "WiR": 0.00088256, "RDiP": 0.00118226, "PPS": 0.00104716, "Inni": 0.00097532, "Woch": 0.00120202, "Brzoska": 0.00110573, "Matysiak": 0.00088926}, "powiat karkonoski": {"KO": 0.00215216, "PiS": 0.00116594, "RozwojPlus": 0.0011096, "Konfederacja": 0.0012331, "KoronaPolska": 0.00135649, "PL2050": 0.00135867, "PSL": 0.00137575, "Razem": 0.00121742, "Lewica": 0.00160244, "BS": 0.0024202, "NF": 0.00164578, "MN": 0.0, "WiR": 0.00140679, "RDiP": 0.00153969, "PPS": 0.00175285, "Inni": 0.00145435, "Woch": 0.00143239, "Brzoska": 0.00173844, "Matysiak": 0.00123771}, "powiat kamiennogórski": {"KO": 0.00112202, "PiS": 0.00092456, "RozwojPlus": 0.00083648, "Konfederacja": 0.0008858, "KoronaPolska": 0.00086651, "PL2050": 0.0008295, "PSL": 0.00076223, "Razem": 0.00071261, "Lewica": 0.00101042, "BS": 0.00139046, "NF": 0.00087783, "MN": 0.0, "WiR": 0.00069012, "RDiP": 0.00090732, "PPS": 0.00097317, "Inni": 0.00069878, "Woch": 0.00085254, "Brzoska": 0.00101039, "Matysiak": 0.00074708}, "powiat kłodzki": {"KO": 0.00424723, "PiS": 0.00309269, "RozwojPlus": 0.00432617, "Konfederacja": 0.0031029, "KoronaPolska": 0.00376292, "PL2050": 0.00304014, "PSL": 0.00316072, "Razem": 0.00233934, "Lewica": 0.00306863, "BS": 0.00376874, "NF": 0.0030031, "MN": 0.0, "WiR": 0.003152, "RDiP": 0.00357428, "PPS": 0.00402922, "Inni": 0.00302844, "Woch": 0.00347971, "Brzoska": 0.00378707, "Matysiak": 0.002565}, "powiat legnicki": {"KO": 0.001243, "PiS": 0.00148544, "RozwojPlus": 0.00131559, "Konfederacja": 0.00154352, "KoronaPolska": 0.00132913, "PL2050": 0.00119011, "PSL": 0.00112827, "Razem": 0.00100962, "Lewica": 0.00093445, "BS": 0.00235545, "NF": 0.00096721, "MN": 0.0, "WiR": 0.00122762, "RDiP": 0.00184213, "PPS": 0.00145691, "Inni": 0.001242, "Woch": 0.00126739, "Brzoska": 0.00132033, "Matysiak": 0.00106308}, "powiat lubański": {"KO": 0.00143276, "PiS": 0.00116506, "RozwojPlus": 0.00105677, "Konfederacja": 0.00113869, "KoronaPolska": 0.00103386, "PL2050": 0.00101134, "PSL": 0.00109923, "Razem": 0.00086584, "Lewica": 0.00113099, "BS": 0.002747, "NF": 0.00110431, "MN": 0.0, "WiR": 0.0009821, "RDiP": 0.00134723, "PPS": 0.00145691, "Inni": 0.00103952, "Woch": 0.00098982, "Brzoska": 0.00128799, "Matysiak": 0.00091364}, "powiat lubiński": {"KO": 0.00256665, "PiS": 0.00293801, "RozwojPlus": 0.00258424, "Konfederacja": 0.0026457, "KoronaPolska": 0.00238391, "PL2050": 0.00220145, "PSL": 0.00195644, "Razem": 0.00218297, "Lewica": 0.00211368, "BS": 0.00784021, "NF": 0.00201887, "MN": 0.0, "WiR": 0.00219645, "RDiP": 0.00239202, "PPS": 0.00254391, "Inni": 0.00237782, "Woch": 0.00229005, "Brzoska": 0.00257527, "Matysiak": 0.00225213}, "powiat lwówecki": {"KO": 0.00110071, "PiS": 0.00097686, "RozwojPlus": 0.00087444, "Konfederacja": 0.00084584, "KoronaPolska": 0.00113523, "PL2050": 0.00076514, "PSL": 0.00099001, "Razem": 0.0007315, "Lewica": 0.00086573, "BS": 0.00156619, "NF": 0.00085153, "MN": 0.0, "WiR": 0.00103518, "RDiP": 0.00101729, "PPS": 0.00106423, "Inni": 0.00081483, "Woch": 0.00073986, "Brzoska": 0.00100824, "Matysiak": 0.0007656}, "powiat milicki": {"KO": 0.00079338, "PiS": 0.00082552, "RozwojPlus": 0.00117958, "Konfederacja": 0.00102844, "KoronaPolska": 0.00086168, "PL2050": 0.00081929, "PSL": 0.00075637, "Razem": 0.00071261, "Lewica": 0.00074515, "BS": 0.00127148, "NF": 0.00088217, "MN": 0.0, "WiR": 0.00076312, "RDiP": 0.00126474, "PPS": 0.00080272, "Inni": 0.0007024, "Woch": 0.001003, "Brzoska": 0.00086062, "Matysiak": 0.00075357}, "powiat oleśnicki": {"KO": 0.00291041, "PiS": 0.00220119, "RozwojPlus": 0.00322725, "Konfederacja": 0.00278489, "KoronaPolska": 0.00204278, "PL2050": 0.00271733, "PSL": 0.00232802, "Razem": 0.00228897, "Lewica": 0.00296855, "BS": 0.00414952, "NF": 0.00324217, "MN": 0.0, "WiR": 0.00262777, "RDiP": 0.00321685, "PPS": 0.002119, "Inni": 0.00271196, "Woch": 0.00266565, "Brzoska": 0.00277992, "Matysiak": 0.00237497}, "powiat oławski": {"KO": 0.00207183, "PiS": 0.00175026, "RozwojPlus": 0.0025247, "Konfederacja": 0.00206102, "KoronaPolska": 0.00207335, "PL2050": 0.00179589, "PSL": 0.00148534, "Razem": 0.00191219, "Lewica": 0.00185444, "BS": 0.00330922, "NF": 0.00229592, "MN": 0.0, "WiR": 0.00184475, "RDiP": 0.0024745, "PPS": 0.00184279, "Inni": 0.00225907, "Woch": 0.00216365, "Brzoska": 0.00202959, "Matysiak": 0.00194361}, "powiat polkowicki": {"KO": 0.00111193, "PiS": 0.00186643, "RozwojPlus": 0.00161183, "Konfederacja": 0.00169719, "KoronaPolska": 0.00166222, "PL2050": 0.00124017, "PSL": 0.00132322, "Razem": 0.001166, "Lewica": 0.00112737, "BS": 0.00268534, "NF": 0.00090511, "MN": 0.0, "WiR": 0.00126744, "RDiP": 0.00142971, "PPS": 0.00126911, "Inni": 0.00138027, "Woch": 0.00123343, "Brzoska": 0.00135329, "Matysiak": 0.00123251}, "powiat strzeliński": {"KO": 0.00102071, "PiS": 0.00114813, "RozwojPlus": 0.00160362, "Konfederacja": 0.00115971, "KoronaPolska": 0.00105156, "PL2050": 0.00089386, "PSL": 0.00068304, "Razem": 0.00079657, "Lewica": 0.00078374, "BS": 0.00185722, "NF": 0.00110435, "MN": 0.0, "WiR": 0.00092901, "RDiP": 0.0014572, "PPS": 0.00072072, "Inni": 0.00102783, "Woch": 0.00102876, "Brzoska": 0.00106828, "Matysiak": 0.00086944}, "powiat średzki (dolnośląskie)": {"KO": 0.00151066, "PiS": 0.00133337, "RozwojPlus": 0.00193319, "Konfederacja": 0.00177368, "KoronaPolska": 0.00140637, "PL2050": 0.00138421, "PSL": 0.00116, "Razem": 0.00131818, "Lewica": 0.00140108, "BS": 0.0019741, "NF": 0.00167471, "MN": 0.0, "WiR": 0.00147314, "RDiP": 0.0014572, "PPS": 0.00156659, "Inni": 0.00149158, "Woch": 0.00155076, "Brzoska": 0.00154568, "Matysiak": 0.00136806}, "powiat świdnicki (dolnośląskie)": {"KO": 0.00433586, "PiS": 0.00319859, "RozwojPlus": 0.00448357, "Konfederacja": 0.00339851, "KoronaPolska": 0.00325283, "PL2050": 0.00310042, "PSL": 0.0030837, "Razem": 0.00289348, "Lewica": 0.00329169, "BS": 0.00351844, "NF": 0.00310335, "MN": 0.0, "WiR": 0.00292638, "RDiP": 0.00368425, "PPS": 0.00456645, "Inni": 0.00321236, "Woch": 0.00323235, "Brzoska": 0.00390901, "Matysiak": 0.00304715}, "powiat trzebnicki": {"KO": 0.00235265, "PiS": 0.00207748, "RozwojPlus": 0.00298461, "Konfederacja": 0.00242726, "KoronaPolska": 0.00224794, "PL2050": 0.00210236, "PSL": 0.00165438, "Razem": 0.00220291, "Lewica": 0.00225113, "BS": 0.00555347, "NF": 0.00262761, "MN": 0.0, "WiR": 0.00247515, "RDiP": 0.0019521, "PPS": 0.00204994, "Inni": 0.00228618, "Woch": 0.00239712, "Brzoska": 0.00233583, "Matysiak": 0.00224744}, "powiat wałbrzyski": {"KO": 0.00157635, "PiS": 0.00088674, "RozwojPlus": 0.00128682, "Konfederacja": 0.00104429, "KoronaPolska": 0.00125189, "PL2050": 0.00115231, "PSL": 0.00108629, "Razem": 0.00089733, "Lewica": 0.00119248, "BS": 0.00123964, "NF": 0.00112047, "MN": 0.0, "WiR": 0.00106173, "RDiP": 0.00159468, "PPS": 0.00173256, "Inni": 0.00117459, "Woch": 0.00119495, "Brzoska": 0.00133936, "Matysiak": 0.0009449}, "powiat wołowski": {"KO": 0.00115259, "PiS": 0.00112015, "RozwojPlus": 0.00158155, "Konfederacja": 0.00114317, "KoronaPolska": 0.00121971, "PL2050": 0.00088977, "PSL": 0.00079443, "Razem": 0.00093301, "Lewica": 0.00112255, "BS": 0.00196891, "NF": 0.00127923, "MN": 0.0, "WiR": 0.00104845, "RDiP": 0.0014572, "PPS": 0.00097103, "Inni": 0.00116614, "Woch": 0.00105729, "Brzoska": 0.00114993, "Matysiak": 0.00099063}, "powiat wrocławski": {"KO": 0.00593253, "PiS": 0.00325964, "RozwojPlus": 0.00502209, "Konfederacja": 0.00500198, "KoronaPolska": 0.00401073, "PL2050": 0.00580038, "PSL": 0.00425336, "Razem": 0.0053892, "Lewica": 0.00580929, "BS": 0.00736653, "NF": 0.00663058, "MN": 0.0, "WiR": 0.00520246, "RDiP": 0.00412416, "PPS": 0.00563627, "Inni": 0.00583614, "Woch": 0.00489584, "Brzoska": 0.00532572, "Matysiak": 0.00527963}, "powiat ząbkowicki": {"KO": 0.00141374, "PiS": 0.00142463, "RozwojPlus": 0.0019406, "Konfederacja": 0.00137126, "KoronaPolska": 0.00144177, "PL2050": 0.00117377, "PSL": 0.00130022, "Razem": 0.00093406, "Lewica": 0.00112617, "BS": 0.00149469, "NF": 0.00101584, "MN": 0.0, "WiR": 0.001002, "RDiP": 0.00181463, "PPS": 0.0017057, "Inni": 0.00116724, "Woch": 0.001428, "Brzoska": 0.00141092, "Matysiak": 0.00103911}, "powiat zgorzelecki": {"KO": 0.0021959, "PiS": 0.00200956, "RozwojPlus": 0.0018046, "Konfederacja": 0.00200589, "KoronaPolska": 0.00223104, "PL2050": 0.0014455, "PSL": 0.00155405, "Razem": 0.00153647, "Lewica": 0.00204012, "BS": 0.00371354, "NF": 0.00173099, "MN": 0.0, "WiR": 0.00188456, "RDiP": 0.00241951, "PPS": 0.00233334, "Inni": 0.00182966, "Woch": 0.00194354, "Brzoska": 0.00207811, "Matysiak": 0.00160682}, "powiat złotoryjski": {"KO": 0.0010438, "PiS": 0.00103323, "RozwojPlus": 0.00091395, "Konfederacja": 0.00087719, "KoronaPolska": 0.00095823, "PL2050": 0.00077638, "PSL": 0.00076426, "Razem": 0.00057828, "Lewica": 0.0008187, "BS": 0.00131801, "NF": 0.00080132, "MN": 0.0, "WiR": 0.00079629, "RDiP": 0.00107228, "PPS": 0.0008935, "Inni": 0.00070372, "Woch": 0.00098836, "Brzoska": 0.0009765, "Matysiak": 0.0006395}, "powiat jelenia góra": {"KO": 0.00277317, "PiS": 0.00135202, "RozwojPlus": 0.00129006, "Konfederacja": 0.00124998, "KoronaPolska": 0.00149889, "PL2050": 0.00145163, "PSL": 0.00139064, "Razem": 0.001378, "Lewica": 0.00198345, "BS": 0.00276242, "NF": 0.00210347, "MN": 0.0, "WiR": 0.0013537, "RDiP": 0.00167716, "PPS": 0.00216261, "Inni": 0.0015778, "Woch": 0.0014087, "Brzoska": 0.00212105, "Matysiak": 0.00141005}, "powiat legnica": {"KO": 0.00255738, "PiS": 0.00204508, "RozwojPlus": 0.00184969, "Konfederacja": 0.00182053, "KoronaPolska": 0.00177566, "PL2050": 0.00199509, "PSL": 0.00172653, "Razem": 0.00187966, "Lewica": 0.00205098, "BS": 0.00376133, "NF": 0.00199132, "MN": 0.0, "WiR": 0.00161913, "RDiP": 0.00263947, "PPS": 0.00248131, "Inni": 0.00208399, "Woch": 0.00190565, "Brzoska": 0.00224906, "Matysiak": 0.0018995}, "powiat wrocław": {"KO": 0.02396429, "PiS": 0.01073801, "RozwojPlus": 0.0168902, "Konfederacja": 0.01422041, "KoronaPolska": 0.01171921, "PL2050": 0.02007762, "PSL": 0.01496483, "Razem": 0.04103662, "Lewica": 0.02931655, "BS": 0.02713875, "NF": 0.02890476, "MN": 0.0, "WiR": 0.01697435, "RDiP": 0.01759644, "PPS": 0.02935521, "Inni": 0.02252285, "Woch": 0.02065852, "Brzoska": 0.01994357, "Matysiak": 0.03695699}, "powiat wałbrzych": {"KO": 0.00319059, "PiS": 0.00158347, "RozwojPlus": 0.00230174, "Konfederacja": 0.00157178, "KoronaPolska": 0.00174026, "PL2050": 0.00190928, "PSL": 0.00174003, "Razem": 0.00162568, "Lewica": 0.00222822, "BS": 0.00221474, "NF": 0.00224321, "MN": 0.0, "WiR": 0.00148642, "RDiP": 0.00211707, "PPS": 0.0030152, "Inni": 0.00192006, "Woch": 0.00221816, "Brzoska": 0.00251539, "Matysiak": 0.00170675}, "powiat aleksandrowski": {"KO": 0.00146138, "PiS": 0.00147869, "RozwojPlus": 0.00204753, "Konfederacja": 0.00145946, "KoronaPolska": 0.0012712, "PL2050": 0.00120748, "PSL": 0.00137803, "Razem": 0.00083331, "Lewica": 0.0013432, "BS": 0.00138186, "NF": 0.00123022, "MN": 0.0, "WiR": 0.00112145, "RDiP": 0.00140222, "PPS": 0.00153056, "Inni": 0.00114247, "Woch": 0.00135226, "Brzoska": 0.00146737, "Matysiak": 0.00097074}, "powiat brodnicki": {"KO": 0.00161538, "PiS": 0.00176807, "RozwojPlus": 0.00248561, "Konfederacja": 0.00216231, "KoronaPolska": 0.00193979, "PL2050": 0.00179181, "PSL": 0.00275588, "Razem": 0.0011597, "Lewica": 0.00136732, "BS": 0.00123464, "NF": 0.00136176, "MN": 0.0, "WiR": 0.00171867, "RDiP": 0.00153969, "PPS": 0.00183442, "Inni": 0.00163282, "Woch": 0.0017991, "Brzoska": 0.0018199, "Matysiak": 0.00130871}, "powiat bydgoski": {"KO": 0.00409145, "PiS": 0.00213504, "RozwojPlus": 0.00327853, "Konfederacja": 0.00329033, "KoronaPolska": 0.00271217, "PL2050": 0.00409132, "PSL": 0.00368891, "Razem": 0.00295855, "Lewica": 0.00367512, "BS": 0.0028599, "NF": 0.00357812, "MN": 0.0, "WiR": 0.00311882, "RDiP": 0.00302439, "PPS": 0.00435036, "Inni": 0.00349812, "Woch": 0.00338559, "Brzoska": 0.003629, "Matysiak": 0.0029922}, "powiat chełmiński": {"KO": 0.00114429, "PiS": 0.00097228, "RozwojPlus": 0.0014023, "Konfederacja": 0.00139641, "KoronaPolska": 0.00089869, "PL2050": 0.00111554, "PSL": 0.00116103, "Razem": 0.00091727, "Lewica": 0.00109964, "BS": 0.00089247, "NF": 0.00098272, "MN": 0.0, "WiR": 0.00102855, "RDiP": 0.00123725, "PPS": 0.00118168, "Inni": 0.00103378, "Woch": 0.00123018, "Brzoska": 0.00118078, "Matysiak": 0.00096675}, "powiat golubsko-dobrzyński": {"KO": 0.00078785, "PiS": 0.00103206, "RozwojPlus": 0.00144678, "Konfederacja": 0.0014381, "KoronaPolska": 0.00097191, "PL2050": 0.00092246, "PSL": 0.00127643, "Razem": 0.00068847, "Lewica": 0.0008609, "BS": 0.00073104, "NF": 0.00068987, "MN": 0.0, "WiR": 0.00092237, "RDiP": 0.00109978, "PPS": 0.00105226, "Inni": 0.00080377, "Woch": 0.00102395, "Brzoska": 0.00099786, "Matysiak": 0.00077164}, "powiat grudziądzki": {"KO": 0.00073029, "PiS": 0.00085669, "RozwojPlus": 0.00121111, "Konfederacja": 0.0012045, "KoronaPolska": 0.0008641, "PL2050": 0.00089692, "PSL": 0.00115437, "Razem": 0.0006381, "Lewica": 0.00088381, "BS": 0.00073307, "NF": 0.0006478, "MN": 0.0, "WiR": 0.00093565, "RDiP": 0.00109978, "PPS": 0.00105226, "Inni": 0.00084927, "Woch": 0.00098478, "Brzoska": 0.00088432, "Matysiak": 0.00070264}, "powiat inowrocławski": {"KO": 0.00414593, "PiS": 0.00303816, "RozwojPlus": 0.00438102, "Konfederacja": 0.00342745, "KoronaPolska": 0.00320939, "PL2050": 0.00359178, "PSL": 0.00362445, "Razem": 0.00281582, "Lewica": 0.00369923, "BS": 0.00459099, "NF": 0.0036128, "MN": 0.0, "WiR": 0.00353024, "RDiP": 0.00360177, "PPS": 0.00402394, "Inni": 0.00503671, "Woch": 0.00382307, "Brzoska": 0.00383402, "Matysiak": 0.00298087}, "powiat lipnowski": {"KO": 0.00106136, "PiS": 0.00156185, "RozwojPlus": 0.00214681, "Konfederacja": 0.00170201, "KoronaPolska": 0.00120201, "PL2050": 0.00148943, "PSL": 0.00216584, "Razem": 0.00088263, "Lewica": 0.00129497, "BS": 0.0009869, "NF": 0.00094001, "MN": 0.0, "WiR": 0.0011679, "RDiP": 0.00222705, "PPS": 0.00119294, "Inni": 0.00122588, "Woch": 0.0012521, "Brzoska": 0.00134081, "Matysiak": 0.00102186}, "powiat mogileński": {"KO": 0.00094883, "PiS": 0.00097164, "RozwojPlus": 0.00137711, "Konfederacja": 0.00116729, "KoronaPolska": 0.00113201, "PL2050": 0.00121565, "PSL": 0.00120303, "Razem": 0.00071891, "Lewica": 0.00119369, "BS": 0.00104263, "NF": 0.00086588, "MN": 0.0, "WiR": 0.00092901, "RDiP": 0.00082483, "PPS": 0.00115934, "Inni": 0.0010475, "Woch": 0.00108944, "Brzoska": 0.0010362, "Matysiak": 0.00079588}, "powiat nakielski": {"KO": 0.00211687, "PiS": 0.001659, "RozwojPlus": 0.00241025, "Konfederacja": 0.00218505, "KoronaPolska": 0.0017121, "PL2050": 0.00230463, "PSL": 0.00211856, "Razem": 0.00153122, "Lewica": 0.00211368, "BS": 0.00174908, "NF": 0.00187257, "MN": 0.0, "WiR": 0.00159922, "RDiP": 0.00230953, "PPS": 0.00235809, "Inni": 0.00172003, "Woch": 0.00197605, "Brzoska": 0.00208464, "Matysiak": 0.00162896}, "powiat radziejowski": {"KO": 0.00061467, "PiS": 0.00112381, "RozwojPlus": 0.0015088, "Konfederacja": 0.00104153, "KoronaPolska": 0.00082065, "PL2050": 0.00076412, "PSL": 0.00101626, "Razem": 0.0005342, "Lewica": 0.0007982, "BS": 0.00070261, "NF": 0.00055036, "MN": 0.0, "WiR": 0.00069012, "RDiP": 0.00217206, "PPS": 0.00080467, "Inni": 0.00075322, "Woch": 0.00083646, "Brzoska": 0.00081663, "Matysiak": 0.0006361}, "powiat rypiński": {"KO": 0.00079257, "PiS": 0.00104208, "RozwojPlus": 0.0014333, "Konfederacja": 0.00111216, "KoronaPolska": 0.00104593, "PL2050": 0.00087139, "PSL": 0.00121891, "Razem": 0.00060976, "Lewica": 0.00082835, "BS": 0.00071784, "NF": 0.00068571, "MN": 0.0, "WiR": 0.00083611, "RDiP": 0.00101729, "PPS": 0.00101287, "Inni": 0.00080377, "Woch": 0.00108896, "Brzoska": 0.00093189, "Matysiak": 0.00069903}, "powiat sępoleński": {"KO": 0.00084411, "PiS": 0.00081885, "RozwojPlus": 0.00116469, "Konfederacja": 0.00104946, "KoronaPolska": 0.00089145, "PL2050": 0.00091838, "PSL": 0.0007835, "Razem": 0.0006423, "Lewica": 0.00086332, "BS": 0.00076895, "NF": 0.00075057, "MN": 0.0, "WiR": 0.00075648, "RDiP": 0.00170465, "PPS": 0.00114246, "Inni": 0.00089025, "Woch": 0.00107457, "Brzoska": 0.0008974, "Matysiak": 0.00069858}, "powiat świecki": {"KO": 0.0021759, "PiS": 0.00189527, "RozwojPlus": 0.00272374, "Konfederacja": 0.00247136, "KoronaPolska": 0.00228092, "PL2050": 0.00223822, "PSL": 0.0021769, "Razem": 0.00167081, "Lewica": 0.0022246, "BS": 0.00174624, "NF": 0.00193557, "MN": 0.0, "WiR": 0.00184475, "RDiP": 0.00269445, "PPS": 0.00266762, "Inni": 0.00201033, "Woch": 0.00211602, "Brzoska": 0.00223298, "Matysiak": 0.00178427}, "powiat toruński": {"KO": 0.00295366, "PiS": 0.00214617, "RozwojPlus": 0.00317461, "Konfederacja": 0.00341195, "KoronaPolska": 0.00238954, "PL2050": 0.00307488, "PSL": 0.00338504, "Razem": 0.00270877, "Lewica": 0.00290706, "BS": 0.00229058, "NF": 0.00256233, "MN": 0.0, "WiR": 0.00240879, "RDiP": 0.00255698, "PPS": 0.00342688, "Inni": 0.00266661, "Woch": 0.0029149, "Brzoska": 0.00297497, "Matysiak": 0.00273825}, "powiat tucholski": {"KO": 0.00090721, "PiS": 0.00117771, "RozwojPlus": 0.0016383, "Konfederacja": 0.00139813, "KoronaPolska": 0.00138867, "PL2050": 0.00113086, "PSL": 0.00112513, "Razem": 0.00069162, "Lewica": 0.00091396, "BS": 0.00100475, "NF": 0.00080536, "MN": 0.0, "WiR": 0.0012608, "RDiP": 0.00134723, "PPS": 0.00128316, "Inni": 0.00106201, "Woch": 0.00129698, "Brzoska": 0.00108906, "Matysiak": 0.00079537}, "powiat wąbrzeski": {"KO": 0.00068996, "PiS": 0.00061215, "RozwojPlus": 0.00088826, "Konfederacja": 0.00091578, "KoronaPolska": 0.00067985, "PL2050": 0.00073041, "PSL": 0.00121019, "Razem": 0.00047752, "Lewica": 0.00066919, "BS": 0.00058787, "NF": 0.00058892, "MN": 0.0, "WiR": 0.00066358, "RDiP": 0.00076984, "PPS": 0.00084406, "Inni": 0.00066728, "Woch": 0.00080834, "Brzoska": 0.00075222, "Matysiak": 0.00052936}, "powiat włocławski": {"KO": 0.00163554, "PiS": 0.0021282, "RozwojPlus": 0.00291567, "Konfederacja": 0.00213992, "KoronaPolska": 0.00181348, "PL2050": 0.00183471, "PSL": 0.00210852, "Razem": 0.00118699, "Lewica": 0.00201239, "BS": 0.00171793, "NF": 0.00144051, "MN": 0.0, "WiR": 0.00179166, "RDiP": 0.00382173, "PPS": 0.00187944, "Inni": 0.00182997, "Woch": 0.00208217, "Brzoska": 0.00187281, "Matysiak": 0.0013792}, "powiat żniński": {"KO": 0.00157749, "PiS": 0.00144753, "RozwojPlus": 0.00206987, "Konfederacja": 0.00183776, "KoronaPolska": 0.00170406, "PL2050": 0.00179589, "PSL": 0.00160283, "Razem": 0.00119328, "Lewica": 0.00171457, "BS": 0.00142143, "NF": 0.00141242, "MN": 0.0, "WiR": 0.00156605, "RDiP": 0.00156718, "PPS": 0.00182906, "Inni": 0.00149263, "Woch": 0.00157476, "Brzoska": 0.001647, "Matysiak": 0.00129077}, "powiat bydgoszcz": {"KO": 0.01186328, "PiS": 0.00556291, "RozwojPlus": 0.0084486, "Konfederacja": 0.00635946, "KoronaPolska": 0.00518538, "PL2050": 0.00929307, "PSL": 0.00829764, "Razem": 0.00923982, "Lewica": 0.01062384, "BS": 0.00702001, "NF": 0.0104097, "MN": 0.0, "WiR": 0.00723301, "RDiP": 0.00860576, "PPS": 0.01161596, "Inni": 0.00868481, "Woch": 0.00862215, "Brzoska": 0.00957079, "Matysiak": 0.00904204}, "powiat grudziądz": {"KO": 0.00277252, "PiS": 0.00136485, "RozwojPlus": 0.00205462, "Konfederacja": 0.00168789, "KoronaPolska": 0.00129534, "PL2050": 0.00200735, "PSL": 0.00215121, "Razem": 0.00161833, "Lewica": 0.0023283, "BS": 0.00138491, "NF": 0.00231466, "MN": 0.0, "WiR": 0.00143333, "RDiP": 0.00153969, "PPS": 0.00211015, "Inni": 0.00169601, "Woch": 0.00188741, "Brzoska": 0.00228447, "Matysiak": 0.00167403}, "powiat toruń": {"KO": 0.00690039, "PiS": 0.00335027, "RozwojPlus": 0.00508398, "Konfederacja": 0.00430257, "KoronaPolska": 0.00285618, "PL2050": 0.00517008, "PSL": 0.00518226, "Razem": 0.00752599, "Lewica": 0.00661473, "BS": 0.00400242, "NF": 0.00603583, "MN": 0.0, "WiR": 0.00395493, "RDiP": 0.00412416, "PPS": 0.00736019, "Inni": 0.00475187, "Woch": 0.00530893, "Brzoska": 0.00573911, "Matysiak": 0.00707809}, "powiat włocławek": {"KO": 0.00336605, "PiS": 0.00181688, "RozwojPlus": 0.00264787, "Konfederacja": 0.00166446, "KoronaPolska": 0.00172095, "PL2050": 0.00210542, "PSL": 0.00197051, "Razem": 0.00184083, "Lewica": 0.00311565, "BS": 0.00197989, "NF": 0.00283133, "MN": 0.0, "WiR": 0.00181157, "RDiP": 0.00709356, "PPS": 0.00227333, "Inni": 0.0023456, "Woch": 0.00220647, "Brzoska": 0.00270171, "Matysiak": 0.0019395}, "powiat bialski": {"KO": 0.00133894, "PiS": 0.00363555, "RozwojPlus": 0.00337271, "Konfederacja": 0.00333408, "KoronaPolska": 0.00526262, "PL2050": 0.00235775, "PSL": 0.00401622, "Razem": 0.00159524, "Lewica": 0.00158315, "BS": 0.00336615, "NF": 0.00161728, "MN": 0.0, "WiR": 0.00337098, "RDiP": 0.00420665, "PPS": 0.00144352, "Inni": 0.00188434, "Woch": 0.00491868, "Brzoska": 0.00227795, "Matysiak": 0.00184296}, "powiat biłgorajski": {"KO": 0.00116852, "PiS": 0.00380008, "RozwojPlus": 0.00347282, "Konfederacja": 0.00297749, "KoronaPolska": 0.00452323, "PL2050": 0.00167535, "PSL": 0.00420568, "Razem": 0.00119433, "Lewica": 0.00098027, "BS": 0.00187315, "NF": 0.00134441, "MN": 0.0, "WiR": 0.0028003, "RDiP": 0.00332683, "PPS": 0.00084073, "Inni": 0.00125077, "Woch": 0.0022528, "Brzoska": 0.0020888, "Matysiak": 0.0014972}, "powiat chełmski": {"KO": 0.00084574, "PiS": 0.00237721, "RozwojPlus": 0.0022024, "Konfederacja": 0.00224948, "KoronaPolska": 0.003318, "PL2050": 0.00135458, "PSL": 0.00205002, "Razem": 0.0009498, "Lewica": 0.00106468, "BS": 0.00173138, "NF": 0.00102565, "MN": 0.0, "WiR": 0.0017054, "RDiP": 0.00214457, "PPS": 0.00071383, "Inni": 0.00099701, "Woch": 0.00199617, "Brzoska": 0.0014612, "Matysiak": 0.00112418}, "powiat hrubieszowski": {"KO": 0.00080655, "PiS": 0.00194809, "RozwojPlus": 0.00180204, "Konfederacja": 0.00168478, "KoronaPolska": 0.00226564, "PL2050": 0.00099806, "PSL": 0.00189261, "Razem": 0.00061921, "Lewica": 0.0008175, "BS": 0.00124584, "NF": 0.00093095, "MN": 0.0, "WiR": 0.00143997, "RDiP": 0.00134723, "PPS": 0.00062817, "Inni": 0.00065813, "Woch": 0.00143721, "Brzoska": 0.00121629, "Matysiak": 0.00078634}, "powiat janowski": {"KO": 0.00035661, "PiS": 0.00225696, "RozwojPlus": 0.00182269, "Konfederacja": 0.00135127, "KoronaPolska": 0.00203151, "PL2050": 0.00055368, "PSL": 0.00078347, "Razem": 0.00048487, "Lewica": 0.0003786, "BS": 0.00058627, "NF": 0.00045049, "MN": 0.0, "WiR": 0.00140679, "RDiP": 0.00120976, "PPS": 0.00030296, "Inni": 0.0008417, "Woch": 0.00092794, "Brzoska": 0.0008761, "Matysiak": 0.00065613}, "powiat krasnostawski": {"KO": 0.00092379, "PiS": 0.00200166, "RozwojPlus": 0.00185587, "Konfederacja": 0.00169271, "KoronaPolska": 0.0020299, "PL2050": 0.00111962, "PSL": 0.00170717, "Razem": 0.00092041, "Lewica": 0.00088261, "BS": 0.00148798, "NF": 0.00107507, "MN": 0.0, "WiR": 0.00182484, "RDiP": 0.00178714, "PPS": 0.00078997, "Inni": 0.00073998, "Woch": 0.00158801, "Brzoska": 0.00128351, "Matysiak": 0.00104314}, "powiat kraśnicki": {"KO": 0.00119535, "PiS": 0.0035615, "RozwojPlus": 0.00294057, "Konfederacja": 0.00235009, "KoronaPolska": 0.00354891, "PL2050": 0.00166411, "PSL": 0.00248825, "Razem": 0.00118174, "Lewica": 0.00130582, "BS": 0.00152667, "NF": 0.0014803, "MN": 0.0, "WiR": 0.00246188, "RDiP": 0.00181463, "PPS": 0.00095216, "Inni": 0.00189126, "Woch": 0.00240828, "Brzoska": 0.00185751, "Matysiak": 0.00142657}, "powiat lubartowski": {"KO": 0.00113958, "PiS": 0.0032152, "RozwojPlus": 0.00270566, "Konfederacja": 0.00289928, "KoronaPolska": 0.0036358, "PL2050": 0.00184901, "PSL": 0.00254948, "Razem": 0.00162463, "Lewica": 0.00127086, "BS": 0.00185325, "NF": 0.00145381, "MN": 0.0, "WiR": 0.00249506, "RDiP": 0.00274944, "PPS": 0.001082, "Inni": 0.00216071, "Woch": 0.00279566, "Brzoska": 0.00190697, "Matysiak": 0.00177602}, "powiat lubelski": {"KO": 0.0025847, "PiS": 0.00576462, "RozwojPlus": 0.00492238, "Konfederacja": 0.00557598, "KoronaPolska": 0.00591673, "PL2050": 0.00452446, "PSL": 0.00581739, "Razem": 0.00343083, "Lewica": 0.00277925, "BS": 0.00397012, "NF": 0.00326343, "MN": 0.0, "WiR": 0.00619119, "RDiP": 0.00511396, "PPS": 0.0023429, "Inni": 0.00497066, "Woch": 0.00531589, "Brzoska": 0.00385918, "Matysiak": 0.00365424}, "powiat łęczyński": {"KO": 0.00073159, "PiS": 0.00199467, "RozwojPlus": 0.00169163, "Konfederacja": 0.00208445, "KoronaPolska": 0.00250942, "PL2050": 0.00108183, "PSL": 0.00124769, "Razem": 0.00093616, "Lewica": 0.00076927, "BS": 0.00117648, "NF": 0.00091859, "MN": 0.0, "WiR": 0.00183148, "RDiP": 0.00181463, "PPS": 0.00062901, "Inni": 0.0013498, "Woch": 0.00183699, "Brzoska": 0.00124919, "Matysiak": 0.00104764}, "powiat łukowski": {"KO": 0.00106754, "PiS": 0.00434994, "RozwojPlus": 0.00360002, "Konfederacja": 0.00354666, "KoronaPolska": 0.00501401, "PL2050": 0.00186331, "PSL": 0.0025849, "Razem": 0.00144622, "Lewica": 0.00128292, "BS": 0.00239624, "NF": 0.00136859, "MN": 0.0, "WiR": 0.00271404, "RDiP": 0.00269445, "PPS": 0.00088292, "Inni": 0.00244042, "Woch": 0.00376804, "Brzoska": 0.0021886, "Matysiak": 0.00174424}, "powiat opolski (lubelskie)": {"KO": 0.00074102, "PiS": 0.00213217, "RozwojPlus": 0.00177784, "Konfederacja": 0.00168134, "KoronaPolska": 0.00206852, "PL2050": 0.00106957, "PSL": 0.00158036, "Razem": 0.00082386, "Lewica": 0.00081388, "BS": 0.00089908, "NF": 0.00092542, "MN": 0.0, "WiR": 0.00184475, "RDiP": 0.00167716, "PPS": 0.00059727, "Inni": 0.00116247, "Woch": 0.00138434, "Brzoska": 0.00118732, "Matysiak": 0.00095847}, "powiat parczewski": {"KO": 0.00047499, "PiS": 0.00106979, "RozwojPlus": 0.00100301, "Konfederacja": 0.00106014, "KoronaPolska": 0.00145464, "PL2050": 0.00067014, "PSL": 0.00144843, "Razem": 0.00050481, "Lewica": 0.00046904, "BS": 0.0009372, "NF": 0.00055711, "MN": 0.0, "WiR": 0.00080957, "RDiP": 0.00126474, "PPS": 0.00038705, "Inni": 0.00053207, "Woch": 0.00114156, "Brzoska": 0.00073693, "Matysiak": 0.00057668}, "powiat puławski": {"KO": 0.00229151, "PiS": 0.00381902, "RozwojPlus": 0.0032539, "Konfederacja": 0.00304191, "KoronaPolska": 0.00361488, "PL2050": 0.00264072, "PSL": 0.00350249, "Razem": 0.00223754, "Lewica": 0.00222219, "BS": 0.00249559, "NF": 0.00279723, "MN": 0.0, "WiR": 0.00446589, "RDiP": 0.00382173, "PPS": 0.00162445, "Inni": 0.00312815, "Woch": 0.00359017, "Brzoska": 0.00271906, "Matysiak": 0.0023932}, "powiat radzyński": {"KO": 0.00063337, "PiS": 0.00212644, "RozwojPlus": 0.00195262, "Konfederacja": 0.00181605, "KoronaPolska": 0.00267677, "PL2050": 0.00101032, "PSL": 0.0024405, "Razem": 0.00081651, "Lewica": 0.00080303, "BS": 0.00265478, "NF": 0.00077671, "MN": 0.0, "WiR": 0.0016125, "RDiP": 0.0019796, "PPS": 0.00076776, "Inni": 0.00138338, "Woch": 0.00429043, "Brzoska": 0.00120707, "Matysiak": 0.00097059}, "powiat rycki": {"KO": 0.00086216, "PiS": 0.00213199, "RozwojPlus": 0.00178606, "Konfederacja": 0.00160726, "KoronaPolska": 0.00185612, "PL2050": 0.00140361, "PSL": 0.00189755, "Razem": 0.00088788, "Lewica": 0.00092722, "BS": 0.00099548, "NF": 0.00106848, "MN": 0.0, "WiR": 0.00163904, "RDiP": 0.00118226, "PPS": 0.00062612, "Inni": 0.00120866, "Woch": 0.00128309, "Brzoska": 0.00125179, "Matysiak": 0.00101698}, "powiat świdnicki (lubelskie)": {"KO": 0.00129487, "PiS": 0.0024264, "RozwojPlus": 0.00206024, "Konfederacja": 0.00193354, "KoronaPolska": 0.00224955, "PL2050": 0.00166411, "PSL": 0.002439, "Razem": 0.00154592, "Lewica": 0.00136611, "BS": 0.00158175, "NF": 0.00161777, "MN": 0.0, "WiR": 0.00228935, "RDiP": 0.00167716, "PPS": 0.00103584, "Inni": 0.00196568, "Woch": 0.00221209, "Brzoska": 0.00164548, "Matysiak": 0.00162014}, "powiat tomaszowski (lubelskie)": {"KO": 0.0010303, "PiS": 0.00295358, "RozwojPlus": 0.00269532, "Konfederacja": 0.0021947, "KoronaPolska": 0.00285458, "PL2050": 0.00123404, "PSL": 0.00247789, "Razem": 0.00092146, "Lewica": 0.00097786, "BS": 0.00209522, "NF": 0.00119033, "MN": 0.0, "WiR": 0.00220972, "RDiP": 0.00186962, "PPS": 0.00074238, "Inni": 0.00095117, "Woch": 0.00177864, "Brzoska": 0.00162597, "Matysiak": 0.00115417}, "powiat włodawski": {"KO": 0.00069321, "PiS": 0.00108016, "RozwojPlus": 0.00102285, "Konfederacja": 0.00095402, "KoronaPolska": 0.00132994, "PL2050": 0.00095311, "PSL": 0.00165212, "Razem": 0.00050901, "Lewica": 0.00068245, "BS": 0.00090835, "NF": 0.00079577, "MN": 0.0, "WiR": 0.00112145, "RDiP": 0.00079734, "PPS": 0.00044416, "Inni": 0.00055662, "Woch": 0.00111172, "Brzoska": 0.00084838, "Matysiak": 0.00058955}, "powiat zamojski": {"KO": 0.00117438, "PiS": 0.00397066, "RozwojPlus": 0.0036103, "Konfederacja": 0.00291547, "KoronaPolska": 0.00482333, "PL2050": 0.00176014, "PSL": 0.00334416, "Razem": 0.00134126, "Lewica": 0.00127448, "BS": 0.00288186, "NF": 0.00139933, "MN": 0.0, "WiR": 0.00330462, "RDiP": 0.00277694, "PPS": 0.00105012, "Inni": 0.00128679, "Woch": 0.00291398, "Brzoska": 0.0020914, "Matysiak": 0.00163464}, "powiat biała podlaska": {"KO": 0.00120397, "PiS": 0.00158325, "RozwojPlus": 0.00150813, "Konfederacja": 0.00135989, "KoronaPolska": 0.00226483, "PL2050": 0.00147819, "PSL": 0.00198934, "Razem": 0.00103901, "Lewica": 0.00116234, "BS": 0.00171632, "NF": 0.0013907, "MN": 0.0, "WiR": 0.00139352, "RDiP": 0.00175964, "PPS": 0.00098032, "Inni": 0.00106414, "Woch": 0.00224613, "Brzoska": 0.0013408, "Matysiak": 0.00111257}, "powiat chełm": {"KO": 0.0014422, "PiS": 0.00149304, "RozwojPlus": 0.00143893, "Konfederacja": 0.00128926, "KoronaPolska": 0.00193416, "PL2050": 0.00126979, "PSL": 0.00184291, "Razem": 0.0008396, "Lewica": 0.00106709, "BS": 0.00142525, "NF": 0.00159327, "MN": 0.0, "WiR": 0.00157268, "RDiP": 0.0014847, "PPS": 0.00083121, "Inni": 0.00082511, "Woch": 0.00133729, "Brzoska": 0.00142184, "Matysiak": 0.00093815}, "powiat lublin": {"KO": 0.00929175, "PiS": 0.00906031, "RozwojPlus": 0.00806391, "Konfederacja": 0.00800945, "KoronaPolska": 0.0087182, "PL2050": 0.01010725, "PSL": 0.01272655, "Razem": 0.01148051, "Lewica": 0.00854513, "BS": 0.0083111, "NF": 0.01146754, "MN": 0.0, "WiR": 0.01183161, "RDiP": 0.0089082, "PPS": 0.00649491, "Inni": 0.01073939, "Woch": 0.01080493, "Brzoska": 0.00907106, "Matysiak": 0.0110081}, "powiat zamość": {"KO": 0.00138723, "PiS": 0.0017286, "RozwojPlus": 0.00163636, "Konfederacja": 0.00126721, "KoronaPolska": 0.0020299, "PL2050": 0.00132189, "PSL": 0.00244599, "Razem": 0.0009456, "Lewica": 0.00108879, "BS": 0.00141898, "NF": 0.00155099, "MN": 0.0, "WiR": 0.00159259, "RDiP": 0.00151219, "PPS": 0.00074238, "Inni": 0.0008333, "Woch": 0.00140081, "Brzoska": 0.00144363, "Matysiak": 0.00105032}, "powiat gorzowski": {"KO": 0.00218744, "PiS": 0.00133667, "RozwojPlus": 0.00132512, "Konfederacja": 0.00199073, "KoronaPolska": 0.00177083, "PL2050": 0.00168046, "PSL": 0.0015271, "Razem": 0.00155641, "Lewica": 0.00164464, "BS": 0.00233918, "NF": 0.00156321, "MN": 0.0, "WiR": 0.00130061, "RDiP": 0.00142971, "PPS": 0.0027187, "Inni": 0.00174462, "Woch": 0.00164655, "Brzoska": 0.00196523, "Matysiak": 0.00155794}, "powiat krośnieński (lubuskie)": {"KO": 0.00153066, "PiS": 0.0009686, "RozwojPlus": 0.00093961, "Konfederacja": 0.00114558, "KoronaPolska": 0.00104351, "PL2050": 0.00124323, "PSL": 0.0010513, "Razem": 0.00087109, "Lewica": 0.00104056, "BS": 0.00149175, "NF": 0.00107423, "MN": 0.0, "WiR": 0.00064367, "RDiP": 0.00112727, "PPS": 0.00150726, "Inni": 0.00103457, "Woch": 0.0007861, "Brzoska": 0.00131857, "Matysiak": 0.00090362}, "powiat międzyrzecki": {"KO": 0.00166546, "PiS": 0.00101959, "RozwojPlus": 0.00099982, "Konfederacja": 0.00130993, "KoronaPolska": 0.00119638, "PL2050": 0.00129635, "PSL": 0.0013256, "Razem": 0.00086794, "Lewica": 0.00118525, "BS": 0.00183719, "NF": 0.00116943, "MN": 0.0, "WiR": 0.00110818, "RDiP": 0.00123725, "PPS": 0.00173968, "Inni": 0.00111265, "Woch": 0.00128786, "Brzoska": 0.00145026, "Matysiak": 0.00091788}, "powiat nowosolski": {"KO": 0.00232566, "PiS": 0.00175502, "RozwojPlus": 0.00165951, "Konfederacja": 0.00188841, "KoronaPolska": 0.00178934, "PL2050": 0.00179078, "PSL": 0.00166777, "Razem": 0.00157635, "Lewica": 0.0014481, "BS": 0.00228614, "NF": 0.0016332, "MN": 0.0, "WiR": 0.00140015, "RDiP": 0.00134723, "PPS": 0.00240175, "Inni": 0.0015421, "Woch": 0.00171734, "Brzoska": 0.00207672, "Matysiak": 0.00160885}, "powiat słubicki": {"KO": 0.00136398, "PiS": 0.00080519, "RozwojPlus": 0.00079625, "Konfederacja": 0.0011132, "KoronaPolska": 0.00099524, "PL2050": 0.00101645, "PSL": 0.00092074, "Razem": 0.00092776, "Lewica": 0.00099354, "BS": 0.00134813, "NF": 0.00097003, "MN": 0.0, "WiR": 0.00068349, "RDiP": 0.00090732, "PPS": 0.00140161, "Inni": 0.00094673, "Woch": 0.00100087, "Brzoska": 0.00118893, "Matysiak": 0.00092917}, "powiat strzelecko-drezdenecki": {"KO": 0.00122413, "PiS": 0.00095391, "RozwojPlus": 0.00090272, "Konfederacja": 0.00101948, "KoronaPolska": 0.00104271, "PL2050": 0.00101134, "PSL": 0.00121167, "Razem": 0.0007462, "Lewica": 0.00105021, "BS": 0.0010842, "NF": 0.00087965, "MN": 0.0, "WiR": 0.00062376, "RDiP": 0.00071486, "PPS": 0.00123961, "Inni": 0.00077593, "Woch": 0.00088177, "Brzoska": 0.00112259, "Matysiak": 0.00078937}, "powiat sulęciński": {"KO": 0.00087842, "PiS": 0.00074765, "RozwojPlus": 0.00070483, "Konfederacja": 0.00093507, "KoronaPolska": 0.00079973, "PL2050": 0.00064256, "PSL": 0.00060479, "Razem": 0.00052685, "Lewica": 0.00055344, "BS": 0.00146846, "NF": 0.00061413, "MN": 0.0, "WiR": 0.00066358, "RDiP": 0.00063237, "PPS": 0.00097901, "Inni": 0.00069785, "Woch": 0.00064554, "Brzoska": 0.00084357, "Matysiak": 0.0005637}, "powiat świebodziński": {"KO": 0.00155732, "PiS": 0.00110829, "RozwojPlus": 0.00106677, "Konfederacja": 0.00139572, "KoronaPolska": 0.00120684, "PL2050": 0.00124425, "PSL": 0.0012101, "Razem": 0.00096449, "Lewica": 0.0010912, "BS": 0.00171945, "NF": 0.0010994, "MN": 0.0, "WiR": 0.00110154, "RDiP": 0.00140222, "PPS": 0.00169038, "Inni": 0.00113461, "Woch": 0.00145245, "Brzoska": 0.00141538, "Matysiak": 0.00100229}, "powiat zielonogórski": {"KO": 0.00232338, "PiS": 0.00135898, "RozwojPlus": 0.00134876, "Konfederacja": 0.00189392, "KoronaPolska": 0.00165578, "PL2050": 0.00191235, "PSL": 0.00166492, "Razem": 0.00153437, "Lewica": 0.00171216, "BS": 0.00268074, "NF": 0.00165178, "MN": 0.0, "WiR": 0.00139352, "RDiP": 0.00217206, "PPS": 0.00235949, "Inni": 0.00169338, "Woch": 0.0016919, "Brzoska": 0.00202873, "Matysiak": 0.00154489}, "powiat żagański": {"KO": 0.00190938, "PiS": 0.0015778, "RozwojPlus": 0.00147196, "Konfederacja": 0.00155455, "KoronaPolska": 0.00176601, "PL2050": 0.00147308, "PSL": 0.00148208, "Razem": 0.00126045, "Lewica": 0.00137696, "BS": 0.00200021, "NF": 0.00135492, "MN": 0.0, "WiR": 0.00128734, "RDiP": 0.00175964, "PPS": 0.00206367, "Inni": 0.00139326, "Woch": 0.00162854, "Brzoska": 0.00174004, "Matysiak": 0.00131076}, "powiat żarski": {"KO": 0.00259137, "PiS": 0.00172776, "RozwojPlus": 0.001655, "Konfederacja": 0.00189047, "KoronaPolska": 0.00210473, "PL2050": 0.00188477, "PSL": 0.00173256, "Razem": 0.00150499, "Lewica": 0.00172181, "BS": 0.00240258, "NF": 0.00181677, "MN": 0.0, "WiR": 0.00152623, "RDiP": 0.00263947, "PPS": 0.00259896, "Inni": 0.00180562, "Woch": 0.00189487, "Brzoska": 0.00223697, "Matysiak": 0.00156124}, "powiat wschowski": {"KO": 0.00083826, "PiS": 0.00093266, "RozwojPlus": 0.00085251, "Konfederacja": 0.00093094, "KoronaPolska": 0.00086249, "PL2050": 0.00081418, "PSL": 0.00080321, "Razem": 0.00069897, "Lewica": 0.00067763, "BS": 0.00092636, "NF": 0.0006079, "MN": 0.0, "WiR": 0.00072994, "RDiP": 0.00074235, "PPS": 0.00105649, "Inni": 0.00074421, "Woch": 0.00081981, "Brzoska": 0.00086098, "Matysiak": 0.00072594}, "powiat gorzów wielkopolski": {"KO": 0.00389079, "PiS": 0.00208255, "RozwojPlus": 0.00205432, "Konfederacja": 0.00236077, "KoronaPolska": 0.00223989, "PL2050": 0.00275922, "PSL": 0.00248282, "Razem": 0.00227532, "Lewica": 0.0028118, "BS": 0.00363039, "NF": 0.00274741, "MN": 0.0, "WiR": 0.00203055, "RDiP": 0.00277694, "PPS": 0.00389492, "Inni": 0.00261815, "Woch": 0.00262809, "Brzoska": 0.00316753, "Matysiak": 0.00230149}, "powiat zielona góra": {"KO": 0.00552373, "PiS": 0.0022619, "RozwojPlus": 0.00233788, "Konfederacja": 0.00277766, "KoronaPolska": 0.00240804, "PL2050": 0.00406476, "PSL": 0.00317674, "Razem": 0.00392094, "Lewica": 0.00382825, "BS": 0.00459168, "NF": 0.00391991, "MN": 0.0, "WiR": 0.00279367, "RDiP": 0.00252949, "PPS": 0.00618398, "Inni": 0.00338432, "Woch": 0.00344044, "Brzoska": 0.00425737, "Matysiak": 0.00375792}, "powiat bełchatowski": {"KO": 0.00181457, "PiS": 0.00394976, "RozwojPlus": 0.00333193, "Konfederacja": 0.00387294, "KoronaPolska": 0.0033172, "PL2050": 0.00216161, "PSL": 0.00283129, "Razem": 0.00204338, "Lewica": 0.00253569, "BS": 0.00489736, "NF": 0.00216765, "MN": 0.0, "WiR": 0.00395493, "RDiP": 0.00316186, "PPS": 0.00153423, "Inni": 0.00285341, "Woch": 0.00258992, "Brzoska": 0.00261347, "Matysiak": 0.00224833}, "powiat kutnowski": {"KO": 0.00196369, "PiS": 0.00299676, "RozwojPlus": 0.00256157, "Konfederacja": 0.00216851, "KoronaPolska": 0.00229862, "PL2050": 0.00192052, "PSL": 0.00219647, "Razem": 0.00163198, "Lewica": 0.00199189, "BS": 0.00193621, "NF": 0.00200481, "MN": 0.0, "WiR": 0.00250833, "RDiP": 0.0024745, "PPS": 0.00148171, "Inni": 0.00192514, "Woch": 0.00214721, "Brzoska": 0.00214654, "Matysiak": 0.00177319}, "powiat łaski": {"KO": 0.00109291, "PiS": 0.00160971, "RozwojPlus": 0.00139467, "Konfederacja": 0.0013716, "KoronaPolska": 0.00141361, "PL2050": 0.00120441, "PSL": 0.00169264, "Razem": 0.00105055, "Lewica": 0.00124192, "BS": 0.00114171, "NF": 0.00114044, "MN": 0.0, "WiR": 0.00123426, "RDiP": 0.00159468, "PPS": 0.00107761, "Inni": 0.00134454, "Woch": 0.00133524, "Brzoska": 0.00124779, "Matysiak": 0.00111048}, "powiat łęczycki": {"KO": 0.00084037, "PiS": 0.00175557, "RozwojPlus": 0.00148922, "Konfederacja": 0.00144223, "KoronaPolska": 0.00126718, "PL2050": 0.00091327, "PSL": 0.00125633, "Razem": 0.00072626, "Lewica": 0.0009441, "BS": 0.00092796, "NF": 0.00087031, "MN": 0.0, "WiR": 0.00102191, "RDiP": 0.00167716, "PPS": 0.0007444, "Inni": 0.00091419, "Woch": 0.00122157, "Brzoska": 0.00110954, "Matysiak": 0.00083933}, "powiat łowicki": {"KO": 0.00134869, "PiS": 0.00279987, "RozwojPlus": 0.00238362, "Konfederacja": 0.00223846, "KoronaPolska": 0.00191565, "PL2050": 0.0019481, "PSL": 0.00279981, "Razem": 0.00154802, "Lewica": 0.00174592, "BS": 0.00181735, "NF": 0.00144838, "MN": 0.0, "WiR": 0.0024287, "RDiP": 0.0024745, "PPS": 0.00128675, "Inni": 0.00203464, "Woch": 0.00212407, "Brzoska": 0.00180464, "Matysiak": 0.00167184}, "powiat łódzki wschodni": {"KO": 0.00212451, "PiS": 0.00204934, "RozwojPlus": 0.00287567, "Konfederacja": 0.00210271, "KoronaPolska": 0.00217955, "PL2050": 0.00228419, "PSL": 0.00179956, "Razem": 0.00200245, "Lewica": 0.00226439, "BS": 0.00153886, "NF": 0.00206711, "MN": 0.0, "WiR": 0.00257469, "RDiP": 0.00184213, "PPS": 0.00316932, "Inni": 0.00247974, "Woch": 0.00228051, "Brzoska": 0.00214361, "Matysiak": 0.00206445}, "powiat opoczyński": {"KO": 0.00098233, "PiS": 0.00353352, "RozwojPlus": 0.0028716, "Konfederacja": 0.00218643, "KoronaPolska": 0.00227771, "PL2050": 0.00150679, "PSL": 0.00241864, "Razem": 0.00119748, "Lewica": 0.00118887, "BS": 0.00179574, "NF": 0.00115688, "MN": 0.0, "WiR": 0.00274058, "RDiP": 0.00222705, "PPS": 0.00082659, "Inni": 0.0016464, "Woch": 0.00181566, "Brzoska": 0.00166133, "Matysiak": 0.00141834}, "powiat pabianicki": {"KO": 0.00371403, "PiS": 0.00303896, "RozwojPlus": 0.00274812, "Konfederacja": 0.00264191, "KoronaPolska": 0.00289802, "PL2050": 0.0035264, "PSL": 0.00369972, "Razem": 0.00309289, "Lewica": 0.00400911, "BS": 0.00313318, "NF": 0.00381993, "MN": 0.0, "WiR": 0.00366296, "RDiP": 0.00412416, "PPS": 0.00258058, "Inni": 0.00370003, "Woch": 0.0032523, "Brzoska": 0.00336196, "Matysiak": 0.00309695}, "powiat pajęczański": {"KO": 0.0007363, "PiS": 0.0019627, "RozwojPlus": 0.00165026, "Konfederacja": 0.00152664, "KoronaPolska": 0.00145062, "PL2050": 0.00089182, "PSL": 0.00170711, "Razem": 0.00092776, "Lewica": 0.0009646, "BS": 0.00091441, "NF": 0.00079747, "MN": 0.0, "WiR": 0.00152623, "RDiP": 0.00184213, "PPS": 0.00069123, "Inni": 0.00107207, "Woch": 0.00111836, "Brzoska": 0.00111978, "Matysiak": 0.00102785}, "powiat piotrkowski": {"KO": 0.0011882, "PiS": 0.00383983, "RozwojPlus": 0.00316101, "Konfederacja": 0.00289445, "KoronaPolska": 0.00340972, "PL2050": 0.00187353, "PSL": 0.00315338, "Razem": 0.0016855, "Lewica": 0.00157109, "BS": 0.00246666, "NF": 0.00143333, "MN": 0.0, "WiR": 0.00274722, "RDiP": 0.00283193, "PPS": 0.00117126, "Inni": 0.00232874, "Woch": 0.0025032, "Brzoska": 0.00203597, "Matysiak": 0.00188829}, "powiat poddębicki": {"KO": 0.00075549, "PiS": 0.00145697, "RozwojPlus": 0.00123965, "Konfederacja": 0.00106703, "KoronaPolska": 0.00117627, "PL2050": 0.0010001, "PSL": 0.00173133, "Razem": 0.00068637, "Lewica": 0.00101042, "BS": 0.00089773, "NF": 0.00080314, "MN": 0.0, "WiR": 0.00108827, "RDiP": 0.00126474, "PPS": 0.00073022, "Inni": 0.00098294, "Woch": 0.00103117, "Brzoska": 0.00096224, "Matysiak": 0.00077477}, "powiat radomszczański": {"KO": 0.00202386, "PiS": 0.00373061, "RozwojPlus": 0.00312313, "Konfederacja": 0.00286689, "KoronaPolska": 0.00299457, "PL2050": 0.00216467, "PSL": 0.00256394, "Razem": 0.00182299, "Lewica": 0.00236568, "BS": 0.00314874, "NF": 0.00232617, "MN": 0.0, "WiR": 0.00266759, "RDiP": 0.00274944, "PPS": 0.00151592, "Inni": 0.00240111, "Woch": 0.00255455, "Brzoska": 0.00246531, "Matysiak": 0.00202242}, "powiat rawski": {"KO": 0.0007446, "PiS": 0.00184651, "RozwojPlus": 0.00153086, "Konfederacja": 0.00135885, "KoronaPolska": 0.00150613, "PL2050": 0.00105118, "PSL": 0.00179604, "Razem": 0.00073255, "Lewica": 0.0008802, "BS": 0.00119179, "NF": 0.00086155, "MN": 0.0, "WiR": 0.00162577, "RDiP": 0.00131973, "PPS": 0.00060698, "Inni": 0.00111138, "Woch": 0.00117947, "Brzoska": 0.00107684, "Matysiak": 0.00085079}, "powiat sieradzki": {"KO": 0.00212565, "PiS": 0.00396637, "RozwojPlus": 0.00338753, "Konfederacja": 0.0031787, "KoronaPolska": 0.00305652, "PL2050": 0.00286137, "PSL": 0.00368624, "Razem": 0.00194998, "Lewica": 0.00265747, "BS": 0.0026473, "NF": 0.0022397, "MN": 0.0, "WiR": 0.00297283, "RDiP": 0.00318935, "PPS": 0.0019248, "Inni": 0.00252356, "Woch": 0.00269752, "Brzoska": 0.00267679, "Matysiak": 0.00217527}, "powiat skierniewicki": {"KO": 0.00046913, "PiS": 0.00162472, "RozwojPlus": 0.00134006, "Konfederacja": 0.00128133, "KoronaPolska": 0.00132833, "PL2050": 0.00089079, "PSL": 0.00136758, "Razem": 0.00080077, "Lewica": 0.00074395, "BS": 0.00120047, "NF": 0.00059134, "MN": 0.0, "WiR": 0.00147978, "RDiP": 0.00118226, "PPS": 0.00062528, "Inni": 0.00108554, "Woch": 0.00097669, "Brzoska": 0.00085771, "Matysiak": 0.00087371}, "powiat tomaszowski (łódzkie)": {"KO": 0.00240014, "PiS": 0.00390176, "RozwojPlus": 0.00329762, "Konfederacja": 0.00308429, "KoronaPolska": 0.00334697, "PL2050": 0.00272448, "PSL": 0.00367184, "Razem": 0.00220606, "Lewica": 0.00242355, "BS": 0.00325044, "NF": 0.00271362, "MN": 0.0, "WiR": 0.00335107, "RDiP": 0.00335432, "PPS": 0.00157388, "Inni": 0.00294646, "Woch": 0.00271448, "Brzoska": 0.0027999, "Matysiak": 0.00237993}, "powiat wieluński": {"KO": 0.00149586, "PiS": 0.00243347, "RozwojPlus": 0.00209693, "Konfederacja": 0.00205172, "KoronaPolska": 0.00205484, "PL2050": 0.00173971, "PSL": 0.00254039, "Razem": 0.00139689, "Lewica": 0.00179174, "BS": 0.00149621, "NF": 0.00156876, "MN": 0.0, "WiR": 0.00211018, "RDiP": 0.00112727, "PPS": 0.00123358, "Inni": 0.00170359, "Woch": 0.00174963, "Brzoska": 0.0017873, "Matysiak": 0.00151346}, "powiat wieruszowski": {"KO": 0.00072264, "PiS": 0.00122512, "RozwojPlus": 0.00107477, "Konfederacja": 0.00137091, "KoronaPolska": 0.00131706, "PL2050": 0.00104198, "PSL": 0.00152364, "Razem": 0.0007294, "Lewica": 0.00082111, "BS": 0.00096028, "NF": 0.00075636, "MN": 0.0, "WiR": 0.00121435, "RDiP": 0.00118226, "PPS": 0.00065578, "Inni": 0.00109244, "Woch": 0.00117669, "Brzoska": 0.00097093, "Matysiak": 0.00079236}, "powiat zduńskowolski": {"KO": 0.00144024, "PiS": 0.00192279, "RozwojPlus": 0.00167582, "Konfederacja": 0.00156868, "KoronaPolska": 0.00169118, "PL2050": 0.00180509, "PSL": 0.00230256, "Razem": 0.00148924, "Lewica": 0.00159279, "BS": 0.00141592, "NF": 0.00150477, "MN": 0.0, "WiR": 0.00160586, "RDiP": 0.00167716, "PPS": 0.00106697, "Inni": 0.00172906, "Woch": 0.00151581, "Brzoska": 0.00156998, "Matysiak": 0.00152735}, "powiat zgierski": {"KO": 0.00495931, "PiS": 0.00437039, "RozwojPlus": 0.00393533, "Konfederacja": 0.00399904, "KoronaPolska": 0.00389487, "PL2050": 0.00455102, "PSL": 0.00530578, "Razem": 0.00425049, "Lewica": 0.00532096, "BS": 0.00428739, "NF": 0.00510495, "MN": 0.0, "WiR": 0.00461851, "RDiP": 0.00472904, "PPS": 0.00327535, "Inni": 0.00481539, "Woch": 0.00416044, "Brzoska": 0.00463765, "Matysiak": 0.00427398}, "powiat brzeziński": {"KO": 0.00059743, "PiS": 0.00094811, "RozwojPlus": 0.00128751, "Konfederacja": 0.00087995, "KoronaPolska": 0.00098961, "PL2050": 0.00088467, "PSL": 0.00073472, "Razem": 0.00064859, "Lewica": 0.0007126, "BS": 0.0005849, "NF": 0.00059477, "MN": 0.0, "WiR": 0.00094892, "RDiP": 0.00120976, "PPS": 0.00114505, "Inni": 0.00088941, "Woch": 0.00086132, "Brzoska": 0.00074417, "Matysiak": 0.00070505}, "powiat łódź": {"KO": 0.02450904, "PiS": 0.01112295, "RozwojPlus": 0.01684757, "Konfederacja": 0.01151201, "KoronaPolska": 0.01224539, "PL2050": 0.01737765, "PSL": 0.01350742, "Razem": 0.02402207, "Lewica": 0.02684356, "BS": 0.01189929, "NF": 0.02398169, "MN": 0.0, "WiR": 0.01583299, "RDiP": 0.01597427, "PPS": 0.03458312, "Inni": 0.01941048, "Woch": 0.01816567, "Brzoska": 0.01942663, "Matysiak": 0.02276475}, "powiat piotrków trybunalski": {"KO": 0.00190466, "PiS": 0.0018541, "RozwojPlus": 0.00162116, "Konfederacja": 0.00155937, "KoronaPolska": 0.00180945, "PL2050": 0.00168454, "PSL": 0.00199341, "Razem": 0.00153647, "Lewica": 0.00175677, "BS": 0.00194084, "NF": 0.00211687, "MN": 0.0, "WiR": 0.00197083, "RDiP": 0.00126474, "PPS": 0.0010035, "Inni": 0.00192037, "Woch": 0.00156361, "Brzoska": 0.00180683, "Matysiak": 0.0015713}, "powiat skierniewice": {"KO": 0.00138187, "PiS": 0.00125595, "RozwojPlus": 0.00110823, "Konfederacja": 0.00105256, "KoronaPolska": 0.00101857, "PL2050": 0.00132393, "PSL": 0.00173796, "Razem": 0.00133077, "Lewica": 0.00132632, "BS": 0.00154399, "NF": 0.00155804, "MN": 0.0, "WiR": 0.00167222, "RDiP": 0.00126474, "PPS": 0.00089369, "Inni": 0.00147323, "Woch": 0.00143066, "Brzoska": 0.00128991, "Matysiak": 0.00131178}, "powiat bocheński": {"KO": 0.0015461, "PiS": 0.00448483, "RozwojPlus": 0.00377329, "Konfederacja": 0.00357147, "KoronaPolska": 0.00358914, "PL2050": 0.00279191, "PSL": 0.00523405, "Razem": 0.00221865, "Lewica": 0.00151442, "BS": 0.00209812, "NF": 0.00189396, "MN": 0.0, "WiR": 0.00358333, "RDiP": 0.00233703, "PPS": 0.00106508, "Inni": 0.0028581, "Woch": 0.00309566, "Brzoska": 0.00255217, "Matysiak": 0.00242731}, "powiat brzeski (małopolskie)": {"KO": 0.00117486, "PiS": 0.00357336, "RozwojPlus": 0.00301088, "Konfederacja": 0.0030967, "KoronaPolska": 0.00314583, "PL2050": 0.00196036, "PSL": 0.00368984, "Razem": 0.00168025, "Lewica": 0.00103091, "BS": 0.00143924, "NF": 0.00142284, "MN": 0.0, "WiR": 0.00246188, "RDiP": 0.00217206, "PPS": 0.00087499, "Inni": 0.00189519, "Woch": 0.00214395, "Brzoska": 0.00203502, "Matysiak": 0.00185936}, "powiat chrzanowski": {"KO": 0.00321872, "PiS": 0.0029897, "RozwojPlus": 0.00299201, "Konfederacja": 0.00305501, "KoronaPolska": 0.00282802, "PL2050": 0.00324343, "PSL": 0.00343903, "Razem": 0.00290502, "Lewica": 0.00325552, "BS": 0.00306217, "NF": 0.00333806, "MN": 0.0, "WiR": 0.00315864, "RDiP": 0.00269445, "PPS": 0.00209831, "Inni": 0.00345573, "Woch": 0.00297767, "Brzoska": 0.0031495, "Matysiak": 0.00293379}, "powiat dąbrowski": {"KO": 0.0004997, "PiS": 0.00241089, "RozwojPlus": 0.00198227, "Konfederacja": 0.00160623, "KoronaPolska": 0.00189554, "PL2050": 0.0010093, "PSL": 0.00193069, "Razem": 0.0007357, "Lewica": 0.0004401, "BS": 0.00078037, "NF": 0.00060699, "MN": 0.0, "WiR": 0.00145987, "RDiP": 0.00104479, "PPS": 0.00045566, "Inni": 0.00088885, "Woch": 0.00107557, "Brzoska": 0.0010729, "Matysiak": 0.00089615}, "powiat gorlicki": {"KO": 0.00154708, "PiS": 0.00400512, "RozwojPlus": 0.00326083, "Konfederacja": 0.00310703, "KoronaPolska": 0.00366396, "PL2050": 0.00223516, "PSL": 0.00315734, "Razem": 0.00147455, "Lewica": 0.00134561, "BS": 0.00316879, "NF": 0.00167811, "MN": 0.0, "WiR": 0.00226944, "RDiP": 0.00252949, "PPS": 0.00101509, "Inni": 0.00202415, "Woch": 0.00255806, "Brzoska": 0.00229903, "Matysiak": 0.00173441}, "powiat krakowski": {"KO": 0.00688771, "PiS": 0.00931995, "RozwojPlus": 0.0086492, "Konfederacja": 0.00921257, "KoronaPolska": 0.00814696, "PL2050": 0.00915925, "PSL": 0.0092103, "Razem": 0.00823755, "Lewica": 0.00690049, "BS": 0.00624088, "NF": 0.00867157, "MN": 0.0, "WiR": 0.00980106, "RDiP": 0.00709356, "PPS": 0.00658887, "Inni": 0.00963673, "Woch": 0.00858913, "Brzoska": 0.00785163, "Matysiak": 0.00828039}, "powiat limanowski": {"KO": 0.00117503, "PiS": 0.00630159, "RozwojPlus": 0.00502737, "Konfederacja": 0.00465125, "KoronaPolska": 0.00447657, "PL2050": 0.00206762, "PSL": 0.00363187, "Razem": 0.00195417, "Lewica": 0.00109, "BS": 0.00391313, "NF": 0.00134175, "MN": 0.0, "WiR": 0.0034108, "RDiP": 0.00266696, "PPS": 0.00105436, "Inni": 0.00244218, "Woch": 0.0027244, "Brzoska": 0.00275125, "Matysiak": 0.00235236}, "powiat miechowski": {"KO": 0.00071744, "PiS": 0.00179779, "RozwojPlus": 0.00159944, "Konfederacja": 0.00146084, "KoronaPolska": 0.00156567, "PL2050": 0.00094698, "PSL": 0.00121327, "Razem": 0.00090047, "Lewica": 0.00090069, "BS": 0.00075369, "NF": 0.00093178, "MN": 0.0, "WiR": 0.00127407, "RDiP": 0.00159468, "PPS": 0.00084152, "Inni": 0.00112246, "Woch": 0.00134802, "Brzoska": 0.0010642, "Matysiak": 0.00099008}, "powiat myślenicki": {"KO": 0.0019367, "PiS": 0.00516661, "RozwojPlus": 0.00487094, "Konfederacja": 0.00482214, "KoronaPolska": 0.00421508, "PL2050": 0.00310654, "PSL": 0.00404223, "Razem": 0.00271401, "Lewica": 0.00184721, "BS": 0.00304504, "NF": 0.0020599, "MN": 0.0, "WiR": 0.00449906, "RDiP": 0.00318935, "PPS": 0.00175019, "Inni": 0.00323181, "Woch": 0.00355284, "Brzoska": 0.0031321, "Matysiak": 0.00296371}, "powiat nowosądecki": {"KO": 0.00231233, "PiS": 0.01051034, "RozwojPlus": 0.00839361, "Konfederacja": 0.00776793, "KoronaPolska": 0.00680013, "PL2050": 0.00339769, "PSL": 0.00460596, "Razem": 0.00291762, "Lewica": 0.00171216, "BS": 0.00775054, "NF": 0.0025218, "MN": 0.0, "WiR": 0.00560724, "RDiP": 0.00486651, "PPS": 0.00188215, "Inni": 0.00391628, "Woch": 0.00458887, "Brzoska": 0.00471142, "Matysiak": 0.00363359}, "powiat nowotarski": {"KO": 0.00234095, "PiS": 0.00706114, "RozwojPlus": 0.00573069, "Konfederacja": 0.00589847, "KoronaPolska": 0.00720804, "PL2050": 0.00292369, "PSL": 0.00394962, "Razem": 0.00287984, "Lewica": 0.00181103, "BS": 0.00626472, "NF": 0.00255734, "MN": 0.0, "WiR": 0.00362314, "RDiP": 0.00354678, "PPS": 0.00169786, "Inni": 0.00333691, "Woch": 0.00387683, "Brzoska": 0.0038679, "Matysiak": 0.00326915}, "powiat olkuski": {"KO": 0.00251299, "PiS": 0.00352848, "RozwojPlus": 0.00322041, "Konfederacja": 0.0029134, "KoronaPolska": 0.0029825, "PL2050": 0.00244969, "PSL": 0.00286597, "Razem": 0.00252196, "Lewica": 0.00271293, "BS": 0.00242359, "NF": 0.00315243, "MN": 0.0, "WiR": 0.00299274, "RDiP": 0.00283193, "PPS": 0.00200643, "Inni": 0.00296767, "Woch": 0.00273853, "Brzoska": 0.00275532, "Matysiak": 0.00261929}, "powiat oświęcimski": {"KO": 0.00379843, "PiS": 0.00439391, "RozwojPlus": 0.00431501, "Konfederacja": 0.00440525, "KoronaPolska": 0.00369775, "PL2050": 0.00385841, "PSL": 0.00413738, "Razem": 0.00365857, "Lewica": 0.00324828, "BS": 0.00430952, "NF": 0.00388579, "MN": 0.0, "WiR": 0.00409428, "RDiP": 0.00387672, "PPS": 0.00225161, "Inni": 0.00387619, "Woch": 0.0041091, "Brzoska": 0.00400039, "Matysiak": 0.00373964}, "powiat proszowicki": {"KO": 0.00054019, "PiS": 0.00162014, "RozwojPlus": 0.0013698, "Konfederacja": 0.0014188, "KoronaPolska": 0.00141924, "PL2050": 0.00099193, "PSL": 0.0020816, "Razem": 0.00079237, "Lewica": 0.00062337, "BS": 0.00066542, "NF": 0.00067557, "MN": 0.0, "WiR": 0.00102855, "RDiP": 0.00115477, "PPS": 0.00048641, "Inni": 0.00084543, "Woch": 0.00115054, "Brzoska": 0.00094834, "Matysiak": 0.00087488}, "powiat suski": {"KO": 0.00130577, "PiS": 0.00304311, "RozwojPlus": 0.00287394, "Konfederacja": 0.00286827, "KoronaPolska": 0.00247321, "PL2050": 0.00159056, "PSL": 0.00195105, "Razem": 0.00140214, "Lewica": 0.00111411, "BS": 0.00162316, "NF": 0.00134512, "MN": 0.0, "WiR": 0.00218317, "RDiP": 0.00164967, "PPS": 0.00098049, "Inni": 0.00159227, "Woch": 0.00206342, "Brzoska": 0.00191947, "Matysiak": 0.00158399}, "powiat tarnowski": {"KO": 0.00227476, "PiS": 0.0081602, "RozwojPlus": 0.0068157, "Konfederacja": 0.00647522, "KoronaPolska": 0.00685243, "PL2050": 0.00435897, "PSL": 0.00787855, "Razem": 0.00332168, "Lewica": 0.00213176, "BS": 0.00360092, "NF": 0.00277814, "MN": 0.0, "WiR": 0.00577314, "RDiP": 0.00519645, "PPS": 0.00206306, "Inni": 0.0043906, "Woch": 0.00492812, "Brzoska": 0.00426395, "Matysiak": 0.00378634}, "powiat tatrzański": {"KO": 0.00122479, "PiS": 0.00248989, "RozwojPlus": 0.00203355, "Konfederacja": 0.00178091, "KoronaPolska": 0.00342259, "PL2050": 0.00131167, "PSL": 0.00188865, "Razem": 0.00116705, "Lewica": 0.00096701, "BS": 0.00251589, "NF": 0.00131643, "MN": 0.0, "WiR": 0.00156605, "RDiP": 0.00134723, "PPS": 0.00075225, "Inni": 0.00127854, "Woch": 0.00169917, "Brzoska": 0.00157225, "Matysiak": 0.00129529}, "powiat wadowicki": {"KO": 0.00310034, "PiS": 0.00514207, "RozwojPlus": 0.00496051, "Konfederacja": 0.0051112, "KoronaPolska": 0.00466644, "PL2050": 0.00454387, "PSL": 0.00481656, "Razem": 0.00325451, "Lewica": 0.00273705, "BS": 0.004135, "NF": 0.00319945, "MN": 0.0, "WiR": 0.00424027, "RDiP": 0.00415166, "PPS": 0.00237937, "Inni": 0.00398068, "Woch": 0.00462089, "Brzoska": 0.00391249, "Matysiak": 0.00347238}, "powiat wielicki": {"KO": 0.0032262, "PiS": 0.00416271, "RozwojPlus": 0.00371874, "Konfederacja": 0.00460646, "KoronaPolska": 0.0037935, "PL2050": 0.00497497, "PSL": 0.00823545, "Razem": 0.00408152, "Lewica": 0.0033978, "BS": 0.00342802, "NF": 0.00394182, "MN": 0.0, "WiR": 0.00479104, "RDiP": 0.00252949, "PPS": 0.00238734, "Inni": 0.00438805, "Woch": 0.00410733, "Brzoska": 0.00384496, "Matysiak": 0.00407086}, "powiat kraków": {"KO": 0.0265207, "PiS": 0.01718004, "RozwojPlus": 0.01728289, "Konfederacja": 0.01955763, "KoronaPolska": 0.01540087, "PL2050": 0.02973641, "PSL": 0.02863573, "Razem": 0.05193256, "Lewica": 0.03402499, "BS": 0.01904684, "NF": 0.03602619, "MN": 0.0, "WiR": 0.02619146, "RDiP": 0.01732149, "PPS": 0.02896089, "Inni": 0.02862547, "Woch": 0.02611855, "Brzoska": 0.0239963, "Matysiak": 0.04664987}, "powiat nowy sącz": {"KO": 0.00182596, "PiS": 0.00283687, "RozwojPlus": 0.0023522, "Konfederacja": 0.00220883, "KoronaPolska": 0.00205163, "PL2050": 0.00183982, "PSL": 0.00210849, "Razem": 0.00143362, "Lewica": 0.00111773, "BS": 0.00292449, "NF": 0.0019012, "MN": 0.0, "WiR": 0.00195756, "RDiP": 0.00230953, "PPS": 0.00092144, "Inni": 0.00202904, "Woch": 0.00229165, "Brzoska": 0.00202405, "Matysiak": 0.00156927}, "powiat tarnów": {"KO": 0.00281479, "PiS": 0.00293794, "RozwojPlus": 0.00259862, "Konfederacja": 0.00233458, "KoronaPolska": 0.0025939, "PL2050": 0.00306773, "PSL": 0.00554757, "Razem": 0.00229631, "Lewica": 0.00210162, "BS": 0.00186635, "NF": 0.00322796, "MN": 0.0, "WiR": 0.00302592, "RDiP": 0.00211707, "PPS": 0.00137817, "Inni": 0.00246732, "Woch": 0.00250776, "Brzoska": 0.00278364, "Matysiak": 0.00237099}, "powiat białobrzeski": {"KO": 0.00044246, "PiS": 0.00157004, "RozwojPlus": 0.00127496, "Konfederacja": 0.00108598, "KoronaPolska": 0.00098237, "PL2050": 0.00058024, "PSL": 0.00101961, "Razem": 0.00051531, "Lewica": 0.000504, "BS": 0.00073216, "NF": 0.00047178, "MN": 0.0, "WiR": 0.00091574, "RDiP": 0.00087982, "PPS": 0.0004047, "Inni": 0.00072703, "Woch": 0.00075747, "Brzoska": 0.00076009, "Matysiak": 0.00061747}, "powiat ciechanowski": {"KO": 0.00163359, "PiS": 0.00299096, "RozwojPlus": 0.0025221, "Konfederacja": 0.00224328, "KoronaPolska": 0.00257781, "PL2050": 0.00190009, "PSL": 0.00277384, "Razem": 0.00153647, "Lewica": 0.00161208, "BS": 0.00217934, "NF": 0.00161606, "MN": 0.0, "WiR": 0.00407437, "RDiP": 0.00233703, "PPS": 0.00119125, "Inni": 0.00152615, "Woch": 0.00202863, "Brzoska": 0.00199472, "Matysiak": 0.00168339}, "powiat garwoliński": {"KO": 0.00136544, "PiS": 0.00443974, "RozwojPlus": 0.00408319, "Konfederacja": 0.00370205, "KoronaPolska": 0.0038828, "PL2050": 0.00235979, "PSL": 0.00340346, "Razem": 0.00202764, "Lewica": 0.00168202, "BS": 0.00298519, "NF": 0.00166159, "MN": 0.0, "WiR": 0.00405447, "RDiP": 0.0029419, "PPS": 0.00115627, "Inni": 0.0029979, "Woch": 0.00268301, "Brzoska": 0.00243445, "Matysiak": 0.0022761}, "powiat gostyniński": {"KO": 0.00078346, "PiS": 0.00156431, "RozwojPlus": 0.00130987, "Konfederacja": 0.00113525, "KoronaPolska": 0.00111753, "PL2050": 0.00080703, "PSL": 0.00126573, "Razem": 0.00067588, "Lewica": 0.00078253, "BS": 0.0011395, "NF": 0.00077222, "MN": 0.0, "WiR": 0.00112808, "RDiP": 0.00142971, "PPS": 0.00064556, "Inni": 0.00070527, "Woch": 0.00080537, "Brzoska": 0.00097869, "Matysiak": 0.00076811}, "powiat grodziski (mazowieckie)": {"KO": 0.00341808, "PiS": 0.00253745, "RozwojPlus": 0.00241271, "Konfederacja": 0.00282417, "KoronaPolska": 0.00267757, "PL2050": 0.0033793, "PSL": 0.00259551, "Razem": 0.00325241, "Lewica": 0.00365824, "BS": 0.00349385, "NF": 0.00368379, "MN": 0.0, "WiR": 0.00386866, "RDiP": 0.00285942, "PPS": 0.00236174, "Inni": 0.0037385, "Woch": 0.00294164, "Brzoska": 0.00312471, "Matysiak": 0.00317167}, "powiat grójecki": {"KO": 0.00192661, "PiS": 0.00352872, "RozwojPlus": 0.00298928, "Konfederacja": 0.00327482, "KoronaPolska": 0.00313295, "PL2050": 0.00236694, "PSL": 0.00509033, "Razem": 0.00194788, "Lewica": 0.00221375, "BS": 0.00245005, "NF": 0.00203681, "MN": 0.0, "WiR": 0.00382221, "RDiP": 0.00357428, "PPS": 0.0016354, "Inni": 0.0026986, "Woch": 0.00255676, "Brzoska": 0.00255809, "Matysiak": 0.00213017}, "powiat kozienicki": {"KO": 0.00099989, "PiS": 0.00245915, "RozwojPlus": 0.00202004, "Konfederacja": 0.0017375, "KoronaPolska": 0.00204036, "PL2050": 0.00107263, "PSL": 0.00192859, "Razem": 0.00098653, "Lewica": 0.00112617, "BS": 0.00136266, "NF": 0.00105284, "MN": 0.0, "WiR": 0.0016125, "RDiP": 0.00162217, "PPS": 0.0007696, "Inni": 0.00144144, "Woch": 0.00117304, "Brzoska": 0.00140235, "Matysiak": 0.00113546}, "powiat legionowski": {"KO": 0.00440887, "PiS": 0.00324521, "RozwojPlus": 0.00307565, "Konfederacja": 0.00343641, "KoronaPolska": 0.00292538, "PL2050": 0.00451425, "PSL": 0.0029676, "Razem": 0.00407627, "Lewica": 0.00441183, "BS": 0.00441393, "NF": 0.00470684, "MN": 0.0, "WiR": 0.00483749, "RDiP": 0.00258448, "PPS": 0.00294254, "Inni": 0.00455821, "Woch": 0.0039541, "Brzoska": 0.00395135, "Matysiak": 0.00397456}, "powiat lipski": {"KO": 0.00041059, "PiS": 0.00122234, "RozwojPlus": 0.0010028, "Konfederacja": 0.00093128, "KoronaPolska": 0.00101696, "PL2050": 0.00055573, "PSL": 0.00095352, "Razem": 0.00042295, "Lewica": 0.0005667, "BS": 0.00079955, "NF": 0.00044557, "MN": 0.0, "WiR": 0.00086265, "RDiP": 0.00054989, "PPS": 0.00047437, "Inni": 0.00064373, "Woch": 0.00069291, "Brzoska": 0.00066347, "Matysiak": 0.00050814}, "powiat łosicki": {"KO": 0.00031156, "PiS": 0.00110155, "RozwojPlus": 0.00101318, "Konfederacja": 0.00096849, "KoronaPolska": 0.00155924, "PL2050": 0.00047604, "PSL": 0.00092192, "Razem": 0.00035473, "Lewica": 0.0003774, "BS": 0.00057504, "NF": 0.00037037, "MN": 0.0, "WiR": 0.00108827, "RDiP": 0.00101729, "PPS": 0.00030624, "Inni": 0.00068054, "Woch": 0.00095992, "Brzoska": 0.00061306, "Matysiak": 0.00044422}, "powiat makowski": {"KO": 0.00062199, "PiS": 0.001614, "RozwojPlus": 0.00148877, "Konfederacja": 0.0012803, "KoronaPolska": 0.00140798, "PL2050": 0.00078864, "PSL": 0.00157274, "Razem": 0.0005258, "Lewica": 0.0005667, "BS": 0.00116727, "NF": 0.00070206, "MN": 0.0, "WiR": 0.00169876, "RDiP": 0.00134723, "PPS": 0.00040069, "Inni": 0.00079944, "Woch": 0.00091139, "Brzoska": 0.00094519, "Matysiak": 0.00065465}, "powiat miński": {"KO": 0.00355939, "PiS": 0.00469731, "RozwojPlus": 0.00453413, "Konfederacja": 0.00480629, "KoronaPolska": 0.00459725, "PL2050": 0.0053652, "PSL": 0.00587157, "Razem": 0.0041193, "Lewica": 0.00419841, "BS": 0.00545261, "NF": 0.0042217, "MN": 0.0, "WiR": 0.00641017, "RDiP": 0.00459157, "PPS": 0.00262165, "Inni": 0.00531527, "Woch": 0.00516421, "Brzoska": 0.00412899, "Matysiak": 0.00418739}, "powiat mławski": {"KO": 0.00118251, "PiS": 0.00231656, "RozwojPlus": 0.00197198, "Konfederacja": 0.00221227, "KoronaPolska": 0.00205323, "PL2050": 0.00131474, "PSL": 0.00231927, "Razem": 0.00087633, "Lewica": 0.00112255, "BS": 0.00137965, "NF": 0.00114992, "MN": 0.0, "WiR": 0.00209691, "RDiP": 0.00159468, "PPS": 0.00094872, "Inni": 0.00104441, "Woch": 0.00131809, "Brzoska": 0.00159633, "Matysiak": 0.00105092}, "powiat nowodworski (mazowieckie)": {"KO": 0.00203508, "PiS": 0.0024149, "RozwojPlus": 0.00217191, "Konfederacja": 0.00215577, "KoronaPolska": 0.00207415, "PL2050": 0.00197568, "PSL": 0.00163392, "Razem": 0.00195942, "Lewica": 0.00204374, "BS": 0.00242418, "NF": 0.00217882, "MN": 0.0, "WiR": 0.00256141, "RDiP": 0.00181463, "PPS": 0.00136015, "Inni": 0.00236465, "Woch": 0.00213326, "Brzoska": 0.00209144, "Matysiak": 0.00199626}, "powiat ostrołęcki": {"KO": 0.00099437, "PiS": 0.00310303, "RozwojPlus": 0.0028835, "Konfederacja": 0.00310703, "KoronaPolska": 0.00342501, "PL2050": 0.00177546, "PSL": 0.0023905, "Razem": 0.00120483, "Lewica": 0.00111532, "BS": 0.00203327, "NF": 0.00117599, "MN": 0.0, "WiR": 0.00236234, "RDiP": 0.00252949, "PPS": 0.00070979, "Inni": 0.00182404, "Woch": 0.00187282, "Brzoska": 0.00184714, "Matysiak": 0.00142941}, "powiat ostrowski (mazowieckie)": {"KO": 0.00100071, "PiS": 0.00264734, "RozwojPlus": 0.00244361, "Konfederacja": 0.00220331, "KoronaPolska": 0.00198565, "PL2050": 0.00126673, "PSL": 0.00214808, "Razem": 0.00097814, "Lewica": 0.00101283, "BS": 0.00147656, "NF": 0.00115221, "MN": 0.0, "WiR": 0.00205709, "RDiP": 0.00200709, "PPS": 0.00066686, "Inni": 0.00145974, "Woch": 0.00189516, "Brzoska": 0.00154186, "Matysiak": 0.00116897}, "powiat otwocki": {"KO": 0.00353532, "PiS": 0.00425485, "RozwojPlus": 0.00381442, "Konfederacja": 0.00345467, "KoronaPolska": 0.00341294, "PL2050": 0.00426397, "PSL": 0.00308496, "Razem": 0.00341823, "Lewica": 0.0034822, "BS": 0.00446926, "NF": 0.00377788, "MN": 0.0, "WiR": 0.00519582, "RDiP": 0.00365676, "PPS": 0.00237655, "Inni": 0.00460673, "Woch": 0.00405474, "Brzoska": 0.00359953, "Matysiak": 0.00348039}, "powiat piaseczyński": {"KO": 0.00737863, "PiS": 0.00469733, "RozwojPlus": 0.00454113, "Konfederacja": 0.00534583, "KoronaPolska": 0.00444036, "PL2050": 0.00686688, "PSL": 0.00482043, "Razem": 0.00662761, "Lewica": 0.00726342, "BS": 0.00657172, "NF": 0.00784964, "MN": 0.0, "WiR": 0.0076577, "RDiP": 0.00472904, "PPS": 0.00459012, "Inni": 0.00740039, "Woch": 0.00615295, "Brzoska": 0.00639768, "Matysiak": 0.00641088}, "powiat płocki": {"KO": 0.00172237, "PiS": 0.00403319, "RozwojPlus": 0.00338132, "Konfederacja": 0.00302055, "KoronaPolska": 0.0031418, "PL2050": 0.0027725, "PSL": 0.00469943, "Razem": 0.0017999, "Lewica": 0.002139, "BS": 0.0034233, "NF": 0.00176393, "MN": 0.0, "WiR": 0.0032449, "RDiP": 0.00217206, "PPS": 0.00150154, "Inni": 0.00192118, "Woch": 0.00285788, "Brzoska": 0.00244954, "Matysiak": 0.00203807}, "powiat płoński": {"KO": 0.00145829, "PiS": 0.00290147, "RozwojPlus": 0.00244517, "Konfederacja": 0.00231288, "KoronaPolska": 0.00257781, "PL2050": 0.00170702, "PSL": 0.00273042, "Razem": 0.00130453, "Lewica": 0.00153251, "BS": 0.00246271, "NF": 0.00144872, "MN": 0.0, "WiR": 0.00271404, "RDiP": 0.002447, "PPS": 0.00105572, "Inni": 0.00145485, "Woch": 0.002028, "Brzoska": 0.00189302, "Matysiak": 0.00147865}, "powiat pruszkowski": {"KO": 0.00629938, "PiS": 0.00429287, "RozwojPlus": 0.00409291, "Konfederacja": 0.00435839, "KoronaPolska": 0.00382568, "PL2050": 0.00595464, "PSL": 0.00444633, "Razem": 0.00592864, "Lewica": 0.00616137, "BS": 0.00592828, "NF": 0.0067153, "MN": 0.0, "WiR": 0.00652298, "RDiP": 0.00379423, "PPS": 0.00427305, "Inni": 0.00651173, "Woch": 0.00556967, "Brzoska": 0.00547269, "Matysiak": 0.0057192}, "powiat przasnyski": {"KO": 0.00068833, "PiS": 0.00185448, "RozwojPlus": 0.00154538, "Konfederacja": 0.00148495, "KoronaPolska": 0.00159061, "PL2050": 0.00095515, "PSL": 0.00139722, "Razem": 0.00068008, "Lewica": 0.00068245, "BS": 0.0011455, "NF": 0.00068338, "MN": 0.0, "WiR": 0.00146651, "RDiP": 0.00104479, "PPS": 0.00057422, "Inni": 0.00076307, "Woch": 0.00116743, "Brzoska": 0.00105463, "Matysiak": 0.00080324}, "powiat przysuski": {"KO": 0.00042946, "PiS": 0.00213314, "RozwojPlus": 0.0017085, "Konfederacja": 0.00124033, "KoronaPolska": 0.00124465, "PL2050": 0.00070283, "PSL": 0.00126654, "Razem": 0.00050481, "Lewica": 0.00055585, "BS": 0.00075729, "NF": 0.00046592, "MN": 0.0, "WiR": 0.00102855, "RDiP": 0.00093481, "PPS": 0.00043456, "Inni": 0.00075228, "Woch": 0.00102238, "Brzoska": 0.00087709, "Matysiak": 0.00066366}, "powiat pułtuski": {"KO": 0.00084834, "PiS": 0.00167871, "RozwojPlus": 0.00157853, "Konfederacja": 0.00152526, "KoronaPolska": 0.00158418, "PL2050": 0.00128409, "PSL": 0.00211717, "Razem": 0.00087529, "Lewica": 0.0008609, "BS": 0.0011478, "NF": 0.00098046, "MN": 0.0, "WiR": 0.00169213, "RDiP": 0.0014847, "PPS": 0.00063252, "Inni": 0.00130542, "Woch": 0.00141975, "Brzoska": 0.00117087, "Matysiak": 0.00097278}, "powiat radomski": {"KO": 0.00196694, "PiS": 0.00632993, "RozwojPlus": 0.00519323, "Konfederacja": 0.00506469, "KoronaPolska": 0.0050824, "PL2050": 0.00294105, "PSL": 0.00418845, "Razem": 0.00255029, "Lewica": 0.00237171, "BS": 0.00385498, "NF": 0.00212965, "MN": 0.0, "WiR": 0.00455215, "RDiP": 0.00324434, "PPS": 0.00180126, "Inni": 0.00343573, "Woch": 0.00347582, "Brzoska": 0.00336217, "Matysiak": 0.00291486}, "powiat siedlecki": {"KO": 0.00074768, "PiS": 0.00328031, "RozwojPlus": 0.00301514, "Konfederacja": 0.00307292, "KoronaPolska": 0.00382165, "PL2050": 0.00153744, "PSL": 0.0022161, "Razem": 0.00129299, "Lewica": 0.00098268, "BS": 0.00210544, "NF": 0.00093119, "MN": 0.0, "WiR": 0.00291311, "RDiP": 0.00299689, "PPS": 0.00070693, "Inni": 0.00198342, "Woch": 0.00203665, "Brzoska": 0.00172892, "Matysiak": 0.00150944}, "powiat sierpecki": {"KO": 0.00073939, "PiS": 0.00176605, "RozwojPlus": 0.00148036, "Konfederacja": 0.00142569, "KoronaPolska": 0.00126396, "PL2050": 0.0008959, "PSL": 0.00183386, "Razem": 0.000636, "Lewica": 0.0009031, "BS": 0.0011419, "NF": 0.00074687, "MN": 0.0, "WiR": 0.00102191, "RDiP": 0.00123725, "PPS": 0.00065269, "Inni": 0.00074381, "Woch": 0.00106939, "Brzoska": 0.00106775, "Matysiak": 0.00076478}, "powiat sochaczewski": {"KO": 0.00174937, "PiS": 0.00276504, "RozwojPlus": 0.00236489, "Konfederacja": 0.0022357, "KoronaPolska": 0.00258907, "PL2050": 0.0020666, "PSL": 0.00365781, "Razem": 0.00183978, "Lewica": 0.0018665, "BS": 0.00279292, "NF": 0.00175846, "MN": 0.0, "WiR": 0.00230262, "RDiP": 0.00283193, "PPS": 0.00139098, "Inni": 0.00169187, "Woch": 0.00197026, "Brzoska": 0.00206748, "Matysiak": 0.00192969}, "powiat sokołowski": {"KO": 0.00069679, "PiS": 0.00199147, "RozwojPlus": 0.00184177, "Konfederacja": 0.0016872, "KoronaPolska": 0.00200496, "PL2050": 0.00134232, "PSL": 0.0018949, "Razem": 0.00072311, "Lewica": 0.00065713, "BS": 0.00114436, "NF": 0.00079921, "MN": 0.0, "WiR": 0.00204382, "RDiP": 0.00131973, "PPS": 0.00050659, "Inni": 0.00115615, "Woch": 0.00124959, "Brzoska": 0.00116227, "Matysiak": 0.0008712}, "powiat szydłowiecki": {"KO": 0.00044246, "PiS": 0.00161203, "RozwojPlus": 0.00130999, "Konfederacja": 0.0011604, "KoronaPolska": 0.0012527, "PL2050": 0.00058433, "PSL": 0.00088021, "Razem": 0.00061921, "Lewica": 0.00054259, "BS": 0.00087151, "NF": 0.00048314, "MN": 0.0, "WiR": 0.00112808, "RDiP": 0.00076984, "PPS": 0.0003649, "Inni": 0.00080024, "Woch": 0.00065185, "Brzoska": 0.00078566, "Matysiak": 0.00070988}, "powiat warszawski zachodni": {"KO": 0.00448139, "PiS": 0.00336671, "RozwojPlus": 0.00317462, "Konfederacja": 0.00347431, "KoronaPolska": 0.00299618, "PL2050": 0.00427418, "PSL": 0.00293495, "Razem": 0.00408047, "Lewica": 0.00440339, "BS": 0.00422336, "NF": 0.00477029, "MN": 0.0, "WiR": 0.00520246, "RDiP": 0.00313437, "PPS": 0.00296032, "Inni": 0.00459396, "Woch": 0.00407551, "Brzoska": 0.00401158, "Matysiak": 0.00399043}, "powiat węgrowski": {"KO": 0.0009781, "PiS": 0.00244589, "RozwojPlus": 0.00226134, "Konfederacja": 0.00200279, "KoronaPolska": 0.00230265, "PL2050": 0.00140974, "PSL": 0.00193935, "Razem": 0.0010453, "Lewica": 0.00103694, "BS": 0.00146625, "NF": 0.00113877, "MN": 0.0, "WiR": 0.00197083, "RDiP": 0.002447, "PPS": 0.00078421, "Inni": 0.00151793, "Woch": 0.00121741, "Brzoska": 0.0014659, "Matysiak": 0.00120232}, "powiat wołomiński": {"KO": 0.00623418, "PiS": 0.00841473, "RozwojPlus": 0.00757336, "Konfederacja": 0.00822892, "KoronaPolska": 0.00743091, "PL2050": 0.00824496, "PSL": 0.00565078, "Razem": 0.00775898, "Lewica": 0.00738762, "BS": 0.00979405, "NF": 0.0069294, "MN": 0.0, "WiR": 0.01100214, "RDiP": 0.00701108, "PPS": 0.00491312, "Inni": 0.0095633, "Woch": 0.00801338, "Brzoska": 0.00701708, "Matysiak": 0.0077346}, "powiat wyszkowski": {"KO": 0.00128479, "PiS": 0.00262126, "RozwojPlus": 0.00246218, "Konfederacja": 0.00243829, "KoronaPolska": 0.00243138, "PL2050": 0.00175503, "PSL": 0.00309942, "Razem": 0.00145566, "Lewica": 0.00127206, "BS": 0.00196798, "NF": 0.00149038, "MN": 0.0, "WiR": 0.00255478, "RDiP": 0.00164967, "PPS": 0.00085862, "Inni": 0.00186705, "Woch": 0.00214318, "Brzoska": 0.0018045, "Matysiak": 0.00158927}, "powiat zwoleński": {"KO": 0.00041141, "PiS": 0.00146596, "RozwojPlus": 0.00119589, "Konfederacja": 0.00109597, "KoronaPolska": 0.00115213, "PL2050": 0.00057105, "PSL": 0.0011063, "Razem": 0.0005216, "Lewica": 0.00048592, "BS": 0.00077899, "NF": 0.00044348, "MN": 0.0, "WiR": 0.00087592, "RDiP": 0.00126474, "PPS": 0.00033172, "Inni": 0.00074218, "Woch": 0.00082777, "Brzoska": 0.00073833, "Matysiak": 0.00061434}, "powiat żuromiński": {"KO": 0.0006041, "PiS": 0.00124838, "RozwojPlus": 0.00105538, "Konfederacja": 0.00106669, "KoronaPolska": 0.00072008, "PL2050": 0.00074573, "PSL": 0.00137228, "Razem": 0.0004198, "Lewica": 0.00066437, "BS": 0.00064119, "NF": 0.00059574, "MN": 0.0, "WiR": 0.00102191, "RDiP": 0.00071486, "PPS": 0.00046009, "Inni": 0.00048945, "Woch": 0.00072473, "Brzoska": 0.00081136, "Matysiak": 0.00051965}, "powiat żyrardowski": {"KO": 0.00183197, "PiS": 0.0022133, "RozwojPlus": 0.00193128, "Konfederacja": 0.00201451, "KoronaPolska": 0.00214656, "PL2050": 0.00192359, "PSL": 0.00267943, "Razem": 0.00188701, "Lewica": 0.00195934, "BS": 0.00274609, "NF": 0.0018395, "MN": 0.0, "WiR": 0.0023358, "RDiP": 0.00241951, "PPS": 0.00167631, "Inni": 0.00171499, "Woch": 0.00188275, "Brzoska": 0.00195081, "Matysiak": 0.00191193}, "powiat ostrołęka": {"KO": 0.00107665, "PiS": 0.0013798, "RozwojPlus": 0.00131632, "Konfederacja": 0.00119313, "KoronaPolska": 0.00146993, "PL2050": 0.0012228, "PSL": 0.00156133, "Razem": 0.00083331, "Lewica": 0.00098992, "BS": 0.00112489, "NF": 0.00121075, "MN": 0.0, "WiR": 0.0012608, "RDiP": 0.00112727, "PPS": 0.00053234, "Inni": 0.00114856, "Woch": 0.00133277, "Brzoska": 0.00116547, "Matysiak": 0.00090695}, "powiat płock": {"KO": 0.00337857, "PiS": 0.00313869, "RozwojPlus": 0.00275003, "Konfederacja": 0.00220021, "KoronaPolska": 0.00230828, "PL2050": 0.00264276, "PSL": 0.00436087, "Razem": 0.00237188, "Lewica": 0.00318197, "BS": 0.00334886, "NF": 0.00327428, "MN": 0.0, "WiR": 0.00251496, "RDiP": 0.00206208, "PPS": 0.0018582, "Inni": 0.002216, "Woch": 0.00271348, "Brzoska": 0.00305881, "Matysiak": 0.00247076}, "powiat radom": {"KO": 0.00493768, "PiS": 0.00609848, "RozwojPlus": 0.00520835, "Konfederacja": 0.00488346, "KoronaPolska": 0.00515159, "PL2050": 0.00477168, "PSL": 0.00627823, "Razem": 0.00416653, "Lewica": 0.00449744, "BS": 0.00503146, "NF": 0.0050293, "MN": 0.0, "WiR": 0.0055807, "RDiP": 0.0044541, "PPS": 0.00270687, "Inni": 0.00480144, "Woch": 0.00469702, "Brzoska": 0.00508144, "Matysiak": 0.00436143}, "powiat siedlce": {"KO": 0.00175473, "PiS": 0.00216462, "RozwojPlus": 0.00207833, "Konfederacja": 0.00204483, "KoronaPolska": 0.00272906, "PL2050": 0.00198079, "PSL": 0.00233517, "Razem": 0.00155641, "Lewica": 0.00155662, "BS": 0.00239984, "NF": 0.00198061, "MN": 0.0, "WiR": 0.00260123, "RDiP": 0.00283193, "PPS": 0.00103893, "Inni": 0.00223894, "Woch": 0.00257386, "Brzoska": 0.00191275, "Matysiak": 0.00163636}, "powiat warszawa": {"KO": 0.1027948, "PiS": 0.04861138, "RozwojPlus": 0.05156186, "Konfederacja": 0.06240904, "KoronaPolska": 0.07242801, "PL2050": 0.07618033, "PSL": 0.04677326, "Razem": 0.1285809, "Lewica": 0.13233923, "BS": 0.05847093, "NF": 0.11865657, "MN": 0.0, "WiR": 0.08436077, "RDiP": 0.0656842, "PPS": 0.12264905, "Inni": 0.0945731, "Woch": 0.07218638, "Brzoska": 0.08473362, "Matysiak": 0.11823688}, "powiat brzeski (opolskie)": {"KO": 0.00203361, "PiS": 0.00215589, "RozwojPlus": 0.00198367, "Konfederacja": 0.00221124, "KoronaPolska": 0.00249976, "PL2050": 0.00181939, "PSL": 0.0018445, "Razem": 0.00170124, "Lewica": 0.00164464, "BS": 0.00181481, "NF": 0.00158817, "MN": 0.0042672, "WiR": 0.00224953, "RDiP": 0.0024745, "PPS": 0.00227713, "Inni": 0.00198518, "Woch": 0.00178596, "Brzoska": 0.0020704, "Matysiak": 0.00175649}, "powiat głubczycki": {"KO": 0.00088428, "PiS": 0.00128224, "RozwojPlus": 0.0011363, "Konfederacja": 0.00101087, "KoronaPolska": 0.00109259, "PL2050": 0.00076412, "PSL": 0.00069317, "Razem": 0.00057618, "Lewica": 0.00051847, "BS": 0.00080793, "NF": 0.00066451, "MN": 0.00372411, "WiR": 0.00088256, "RDiP": 0.00123725, "PPS": 0.00085787, "Inni": 0.00081924, "Woch": 0.00083543, "Brzoska": 0.00094656, "Matysiak": 0.00065451}, "powiat kędzierzyńsko-kozielski": {"KO": 0.00233948, "PiS": 0.00147513, "RozwojPlus": 0.00144635, "Konfederacja": 0.00183776, "KoronaPolska": 0.00186819, "PL2050": 0.00239044, "PSL": 0.00182659, "Razem": 0.00150814, "Lewica": 0.00169166, "BS": 0.00187137, "NF": 0.00178593, "MN": 0.11024905, "WiR": 0.00193765, "RDiP": 0.00258448, "PPS": 0.00216359, "Inni": 0.00196618, "Woch": 0.0019922, "Brzoska": 0.00206105, "Matysiak": 0.00153548}, "powiat kluczborski": {"KO": 0.00146187, "PiS": 0.00129711, "RozwojPlus": 0.00122145, "Konfederacja": 0.00145601, "KoronaPolska": 0.00148441, "PL2050": 0.00132496, "PSL": 0.00178223, "Razem": 0.00102851, "Lewica": 0.00104779, "BS": 0.00100385, "NF": 0.00111958, "MN": 0.04015052, "WiR": 0.00113472, "RDiP": 0.00126474, "PPS": 0.0012868, "Inni": 0.00122293, "Woch": 0.00124922, "Brzoska": 0.00142837, "Matysiak": 0.0010755}, "powiat krapkowicki": {"KO": 0.0014648, "PiS": 0.00082852, "RozwojPlus": 0.00084981, "Konfederacja": 0.00141226, "KoronaPolska": 0.00122856, "PL2050": 0.00171212, "PSL": 0.00150189, "Razem": 0.00109043, "Lewica": 0.00109, "BS": 0.00132198, "NF": 0.0011285, "MN": 0.14729614, "WiR": 0.00092237, "RDiP": 0.00109978, "PPS": 0.00153911, "Inni": 0.00118968, "Woch": 0.00129589, "Brzoska": 0.00135058, "Matysiak": 0.00108398}, "powiat namysłowski": {"KO": 0.00095257, "PiS": 0.00106441, "RozwojPlus": 0.00098534, "Konfederacja": 0.00119485, "KoronaPolska": 0.0009349, "PL2050": 0.00095209, "PSL": 0.00131047, "Razem": 0.00070946, "Lewica": 0.00092722, "BS": 0.00077561, "NF": 0.00075349, "MN": 0.00368531, "WiR": 0.00106173, "RDiP": 0.00090732, "PPS": 0.00105341, "Inni": 0.00080262, "Woch": 0.00095059, "Brzoska": 0.00102228, "Matysiak": 0.00076388}, "powiat nyski": {"KO": 0.00295659, "PiS": 0.00342185, "RozwojPlus": 0.00309205, "Konfederacja": 0.00291823, "KoronaPolska": 0.00309997, "PL2050": 0.00249259, "PSL": 0.00263991, "Razem": 0.00208431, "Lewica": 0.00212935, "BS": 0.00210971, "NF": 0.00226545, "MN": 0.01136628, "WiR": 0.00248842, "RDiP": 0.00351929, "PPS": 0.00333054, "Inni": 0.00232475, "Woch": 0.00293793, "Brzoska": 0.00295711, "Matysiak": 0.00224083}, "powiat oleski": {"KO": 0.00125373, "PiS": 0.00127658, "RozwojPlus": 0.00119905, "Konfederacja": 0.00153663, "KoronaPolska": 0.00165417, "PL2050": 0.00166207, "PSL": 0.00156206, "Razem": 0.00103586, "Lewica": 0.00107914, "BS": 0.00134218, "NF": 0.0009843, "MN": 0.10415858, "WiR": 0.00126744, "RDiP": 0.00305188, "PPS": 0.00153911, "Inni": 0.0015245, "Woch": 0.00176502, "Brzoska": 0.00133418, "Matysiak": 0.00107774}, "powiat opolski (opolskie)": {"KO": 0.00315042, "PiS": 0.00186161, "RozwojPlus": 0.00187721, "Konfederacja": 0.0028066, "KoronaPolska": 0.00264298, "PL2050": 0.00385432, "PSL": 0.00298357, "Razem": 0.00220291, "Lewica": 0.00219928, "BS": 0.00235108, "NF": 0.00240679, "MN": 0.26363566, "WiR": 0.00209027, "RDiP": 0.00321685, "PPS": 0.00320438, "Inni": 0.00268569, "Woch": 0.00296538, "Brzoska": 0.00285866, "Matysiak": 0.00221107}, "powiat prudnicki": {"KO": 0.00103762, "PiS": 0.00117094, "RozwojPlus": 0.00107721, "Konfederacja": 0.00126376, "KoronaPolska": 0.00121649, "PL2050": 0.00108898, "PSL": 0.00098721, "Razem": 0.00083121, "Lewica": 0.00075118, "BS": 0.00091498, "NF": 0.00080055, "MN": 0.07820622, "WiR": 0.00092901, "RDiP": 0.0009898, "PPS": 0.00109126, "Inni": 0.0009071, "Woch": 0.00087775, "Brzoska": 0.0010938, "Matysiak": 0.00087353}, "powiat strzelecki": {"KO": 0.00166692, "PiS": 0.00117359, "RozwojPlus": 0.00116053, "Konfederacja": 0.00178057, "KoronaPolska": 0.00149728, "PL2050": 0.00216672, "PSL": 0.00166304, "Razem": 0.00119748, "Lewica": 0.00114064, "BS": 0.00147245, "NF": 0.00127304, "MN": 0.16855458, "WiR": 0.00119444, "RDiP": 0.00203459, "PPS": 0.00160219, "Inni": 0.001553, "Woch": 0.0016535, "Brzoska": 0.00160682, "Matysiak": 0.00122035}, "powiat opole": {"KO": 0.00490565, "PiS": 0.0019584, "RozwojPlus": 0.00204861, "Konfederacja": 0.00250582, "KoronaPolska": 0.00230265, "PL2050": 0.00381346, "PSL": 0.00329236, "Razem": 0.00385902, "Lewica": 0.0036715, "BS": 0.00296713, "NF": 0.00379196, "MN": 0.06470634, "WiR": 0.00256141, "RDiP": 0.00335432, "PPS": 0.00513458, "Inni": 0.00336245, "Woch": 0.00342773, "Brzoska": 0.00381669, "Matysiak": 0.00365654}, "powiat bieszczadzki": {"KO": 0.00039254, "PiS": 0.00060261, "RozwojPlus": 0.00051197, "Konfederacja": 0.00056022, "KoronaPolska": 0.00067905, "PL2050": 0.00036776, "PSL": 0.00125547, "Razem": 0.00023299, "Lewica": 0.00038825, "BS": 0.00048424, "NF": 0.00040548, "MN": 0.0, "WiR": 0.00049105, "RDiP": 0.00104479, "PPS": 0.00023421, "Inni": 0.00045165, "Woch": 0.00055793, "Brzoska": 0.00048648, "Matysiak": 0.00028576}, "powiat brzozowski": {"KO": 0.0005571, "PiS": 0.00282981, "RozwojPlus": 0.0022646, "Konfederacja": 0.00193595, "KoronaPolska": 0.00276849, "PL2050": 0.00095311, "PSL": 0.00166651, "Razem": 0.00079972, "Lewica": 0.00050039, "BS": 0.00133705, "NF": 0.00060132, "MN": 0.0, "WiR": 0.00165895, "RDiP": 0.00153969, "PPS": 0.00049445, "Inni": 0.0010976, "Woch": 0.00129685, "Brzoska": 0.00124117, "Matysiak": 0.00099363}, "powiat dębicki": {"KO": 0.00174628, "PiS": 0.00557017, "RozwojPlus": 0.00455554, "Konfederacja": 0.00408896, "KoronaPolska": 0.00511699, "PL2050": 0.0024599, "PSL": 0.00332577, "Razem": 0.00214728, "Lewica": 0.00148307, "BS": 0.00228321, "NF": 0.00217427, "MN": 0.0, "WiR": 0.00392175, "RDiP": 0.00285942, "PPS": 0.0012311, "Inni": 0.00262546, "Woch": 0.00328614, "Brzoska": 0.00287761, "Matysiak": 0.00246499}, "powiat jarosławski": {"KO": 0.00147114, "PiS": 0.00469125, "RozwojPlus": 0.00382044, "Konfederacja": 0.00382849, "KoronaPolska": 0.0041652, "PL2050": 0.00192972, "PSL": 0.00295724, "Razem": 0.00143257, "Lewica": 0.00119972, "BS": 0.00355785, "NF": 0.00152744, "MN": 0.0, "WiR": 0.00256805, "RDiP": 0.0029694, "PPS": 0.0012101, "Inni": 0.00214978, "Woch": 0.00288069, "Brzoska": 0.00249619, "Matysiak": 0.00177016}, "powiat jasielski": {"KO": 0.00144724, "PiS": 0.0046327, "RozwojPlus": 0.00373725, "Konfederacja": 0.00307981, "KoronaPolska": 0.00392464, "PL2050": 0.00195321, "PSL": 0.00289382, "Razem": 0.00149974, "Lewica": 0.00117802, "BS": 0.00303863, "NF": 0.0015085, "MN": 0.0, "WiR": 0.00342407, "RDiP": 0.00192461, "PPS": 0.00111576, "Inni": 0.00219772, "Woch": 0.00272791, "Brzoska": 0.00231298, "Matysiak": 0.00180182}, "powiat kolbuszowski": {"KO": 0.00051905, "PiS": 0.00258583, "RozwojPlus": 0.00210024, "Konfederacja": 0.00203311, "KoronaPolska": 0.00213289, "PL2050": 0.00091736, "PSL": 0.00106021, "Razem": 0.00087319, "Lewica": 0.00054741, "BS": 0.00099684, "NF": 0.00067979, "MN": 0.0, "WiR": 0.00169876, "RDiP": 0.00129224, "PPS": 0.00043451, "Inni": 0.00118997, "Woch": 0.00123831, "Brzoska": 0.00117479, "Matysiak": 0.00103048}, "powiat krośnieński (podkarpackie)": {"KO": 0.00145439, "PiS": 0.00453077, "RozwojPlus": 0.00367161, "Konfederacja": 0.00319041, "KoronaPolska": 0.00447978, "PL2050": 0.00214016, "PSL": 0.00330592, "Razem": 0.0015774, "Lewica": 0.0012998, "BS": 0.00341392, "NF": 0.00153442, "MN": 0.0, "WiR": 0.0029662, "RDiP": 0.00302439, "PPS": 0.0011548, "Inni": 0.00231631, "Woch": 0.00285312, "Brzoska": 0.00236128, "Matysiak": 0.00186836}, "powiat leżajski": {"KO": 0.00061174, "PiS": 0.00308242, "RozwojPlus": 0.0024929, "Konfederacja": 0.00213785, "KoronaPolska": 0.00235414, "PL2050": 0.00099806, "PSL": 0.00224817, "Razem": 0.00081336, "Lewica": 0.0005245, "BS": 0.00085357, "NF": 0.00076724, "MN": 0.0, "WiR": 0.00161913, "RDiP": 0.00142971, "PPS": 0.00036726, "Inni": 0.00111482, "Woch": 0.00128838, "Brzoska": 0.00135664, "Matysiak": 0.00103599}, "powiat lubaczowski": {"KO": 0.00068199, "PiS": 0.00197202, "RozwojPlus": 0.00160979, "Konfederacja": 0.00153319, "KoronaPolska": 0.00191324, "PL2050": 0.00090714, "PSL": 0.00171798, "Razem": 0.00067798, "Lewica": 0.00075962, "BS": 0.00106668, "NF": 0.00073306, "MN": 0.0, "WiR": 0.00109491, "RDiP": 0.0024745, "PPS": 0.00059854, "Inni": 0.00097648, "Woch": 0.00108277, "Brzoska": 0.00109614, "Matysiak": 0.00081592}, "powiat łańcucki": {"KO": 0.00094851, "PiS": 0.00332358, "RozwojPlus": 0.00274181, "Konfederacja": 0.00288274, "KoronaPolska": 0.00363178, "PL2050": 0.00192052, "PSL": 0.00226511, "Razem": 0.00129404, "Lewica": 0.00102247, "BS": 0.00166707, "NF": 0.00122127, "MN": 0.0, "WiR": 0.0027074, "RDiP": 0.00272195, "PPS": 0.00073711, "Inni": 0.0019215, "Woch": 0.00201634, "Brzoska": 0.00179455, "Matysiak": 0.00149769}, "powiat mielecki": {"KO": 0.00188336, "PiS": 0.00507198, "RozwojPlus": 0.00418586, "Konfederacja": 0.003957, "KoronaPolska": 0.00510171, "PL2050": 0.00270099, "PSL": 0.00373354, "Razem": 0.00216303, "Lewica": 0.00176521, "BS": 0.00247656, "NF": 0.00235576, "MN": 0.0, "WiR": 0.00382885, "RDiP": 0.00362927, "PPS": 0.00147939, "Inni": 0.00290604, "Woch": 0.00311643, "Brzoska": 0.00288426, "Matysiak": 0.00244519}, "powiat niżański": {"KO": 0.00064361, "PiS": 0.00260223, "RozwojPlus": 0.0021157, "Konfederacja": 0.00193664, "KoronaPolska": 0.00262528, "PL2050": 0.00092757, "PSL": 0.00122377, "Razem": 0.00086374, "Lewica": 0.0006704, "BS": 0.00083955, "NF": 0.0008243, "MN": 0.0, "WiR": 0.00140015, "RDiP": 0.00123725, "PPS": 0.00043709, "Inni": 0.00112233, "Woch": 0.00135982, "Brzoska": 0.00124532, "Matysiak": 0.00103037}, "powiat przemyski": {"KO": 0.00084119, "PiS": 0.00278273, "RozwojPlus": 0.0022696, "Konfederacja": 0.00234698, "KoronaPolska": 0.00286745, "PL2050": 0.00116968, "PSL": 0.00191722, "Razem": 0.00082596, "Lewica": 0.00080423, "BS": 0.00202441, "NF": 0.00088781, "MN": 0.0, "WiR": 0.00171203, "RDiP": 0.00310687, "PPS": 0.00065384, "Inni": 0.00143066, "Woch": 0.00191658, "Brzoska": 0.0014979, "Matysiak": 0.00103609}, "powiat przeworski": {"KO": 0.00089078, "PiS": 0.00312821, "RozwojPlus": 0.00254731, "Konfederacja": 0.00260539, "KoronaPolska": 0.00295032, "PL2050": 0.00132393, "PSL": 0.00215847, "Razem": 0.00109148, "Lewica": 0.00085608, "BS": 0.00190066, "NF": 0.00095539, "MN": 0.0, "WiR": 0.002077, "RDiP": 0.0019796, "PPS": 0.0007677, "Inni": 0.00132973, "Woch": 0.00145578, "Brzoska": 0.00163928, "Matysiak": 0.00129549}, "powiat ropczycko-sędziszowski": {"KO": 0.00065337, "PiS": 0.00334757, "RozwojPlus": 0.0027197, "Konfederacja": 0.00260504, "KoronaPolska": 0.0031941, "PL2050": 0.00125345, "PSL": 0.00182176, "Razem": 0.0010516, "Lewica": 0.00073068, "BS": 0.00120021, "NF": 0.00085769, "MN": 0.0, "WiR": 0.00232916, "RDiP": 0.00200709, "PPS": 0.00063366, "Inni": 0.00151816, "Woch": 0.00172269, "Brzoska": 0.00153176, "Matysiak": 0.00127313}, "powiat rzeszowski": {"KO": 0.00208337, "PiS": 0.00713722, "RozwojPlus": 0.00588675, "Konfederacja": 0.00614102, "KoronaPolska": 0.0077471, "PL2050": 0.0038911, "PSL": 0.00480493, "Razem": 0.0031653, "Lewica": 0.00215708, "BS": 0.00441714, "NF": 0.00269591, "MN": 0.0, "WiR": 0.00569351, "RDiP": 0.0044541, "PPS": 0.00180786, "Inni": 0.00489768, "Woch": 0.00465456, "Brzoska": 0.00386806, "Matysiak": 0.00353519}, "powiat sanocki": {"KO": 0.00152269, "PiS": 0.00302222, "RozwojPlus": 0.00249924, "Konfederacja": 0.00235835, "KoronaPolska": 0.00317157, "PL2050": 0.00171315, "PSL": 0.00300468, "Razem": 0.00124051, "Lewica": 0.00134803, "BS": 0.00245485, "NF": 0.00157707, "MN": 0.0, "WiR": 0.0022429, "RDiP": 0.00263947, "PPS": 0.00101492, "Inni": 0.00181419, "Woch": 0.00207139, "Brzoska": 0.00197299, "Matysiak": 0.00143684}, "powiat stalowowolski": {"KO": 0.00163603, "PiS": 0.00365188, "RozwojPlus": 0.00301432, "Konfederacja": 0.00266051, "KoronaPolska": 0.00339524, "PL2050": 0.00173051, "PSL": 0.00213668, "Razem": 0.00153752, "Lewica": 0.00146619, "BS": 0.00178729, "NF": 0.00200984, "MN": 0.0, "WiR": 0.00220308, "RDiP": 0.00255698, "PPS": 0.00087936, "Inni": 0.00214446, "Woch": 0.00225677, "Brzoska": 0.00216584, "Matysiak": 0.00174481}, "powiat strzyżowski": {"KO": 0.000588, "PiS": 0.00237466, "RozwojPlus": 0.00194536, "Konfederacja": 0.0019642, "KoronaPolska": 0.00272906, "PL2050": 0.00111452, "PSL": 0.00138236, "Razem": 0.00093511, "Lewica": 0.00062699, "BS": 0.00111706, "NF": 0.00076673, "MN": 0.0, "WiR": 0.00203719, "RDiP": 0.00137472, "PPS": 0.00046813, "Inni": 0.00118496, "Woch": 0.00134292, "Brzoska": 0.00120178, "Matysiak": 0.00107076}, "powiat tarnobrzeski": {"KO": 0.00064654, "PiS": 0.00201002, "RozwojPlus": 0.00165777, "Konfederacja": 0.00165929, "KoronaPolska": 0.0019229, "PL2050": 0.00091736, "PSL": 0.00165933, "Razem": 0.00081861, "Lewica": 0.00070175, "BS": 0.0008686, "NF": 0.00082807, "MN": 0.0, "WiR": 0.00129398, "RDiP": 0.00156718, "PPS": 0.00040347, "Inni": 0.00104968, "Woch": 0.00131173, "Brzoska": 0.00110742, "Matysiak": 0.00093714}, "powiat leski": {"KO": 0.00051629, "PiS": 0.00096255, "RozwojPlus": 0.00080493, "Konfederacja": 0.00084308, "KoronaPolska": 0.00090915, "PL2050": 0.00060067, "PSL": 0.00134421, "Razem": 0.00033164, "Lewica": 0.00042804, "BS": 0.00074654, "NF": 0.00052526, "MN": 0.0, "WiR": 0.00059059, "RDiP": 0.00107228, "PPS": 0.0003253, "Inni": 0.00061819, "Woch": 0.00062611, "Brzoska": 0.00067505, "Matysiak": 0.0004101}, "powiat krosno": {"KO": 0.00109372, "PiS": 0.00135953, "RozwojPlus": 0.0011475, "Konfederacja": 0.00099295, "KoronaPolska": 0.00138867, "PL2050": 0.0011043, "PSL": 0.00147862, "Razem": 0.00077138, "Lewica": 0.00079338, "BS": 0.00134109, "NF": 0.00110401, "MN": 0.0, "WiR": 0.00138024, "RDiP": 0.00126474, "PPS": 0.0006083, "Inni": 0.00106227, "Woch": 0.00111788, "Brzoska": 0.00111218, "Matysiak": 0.00083649}, "powiat przemyśl": {"KO": 0.00136252, "PiS": 0.00158333, "RozwojPlus": 0.00133928, "Konfederacja": 0.00118073, "KoronaPolska": 0.0016413, "PL2050": 0.00111656, "PSL": 0.00146939, "Razem": 0.00080497, "Lewica": 0.00100559, "BS": 0.00148636, "NF": 0.00136678, "MN": 0.0, "WiR": 0.00137361, "RDiP": 0.00184213, "PPS": 0.00068963, "Inni": 0.00121114, "Woch": 0.00139337, "Brzoska": 0.00133904, "Matysiak": 0.00089897}, "powiat rzeszów": {"KO": 0.00525493, "PiS": 0.0052955, "RozwojPlus": 0.00473493, "Konfederacja": 0.00628848, "KoronaPolska": 0.00603661, "PL2050": 0.00682091, "PSL": 0.00731188, "Razem": 0.00629282, "Lewica": 0.00495442, "BS": 0.0063507, "NF": 0.00659761, "MN": 0.0, "WiR": 0.00745863, "RDiP": 0.00511396, "PPS": 0.00353295, "Inni": 0.00699204, "Woch": 0.00654522, "Brzoska": 0.00557105, "Matysiak": 0.00612199}, "powiat tarnobrzeg": {"KO": 0.00117307, "PiS": 0.00120136, "RozwojPlus": 0.0010373, "Konfederacja": 0.00093611, "KoronaPolska": 0.00116259, "PL2050": 0.00092246, "PSL": 0.00125856, "Razem": 0.00069372, "Lewica": 0.00099715, "BS": 0.00082953, "NF": 0.00140101, "MN": 0.0, "WiR": 0.00092237, "RDiP": 0.00074235, "PPS": 0.00042933, "Inni": 0.00098455, "Woch": 0.00108401, "Brzoska": 0.00111067, "Matysiak": 0.00076098}, "powiat augustowski": {"KO": 0.00091355, "PiS": 0.0017032, "RozwojPlus": 0.00147383, "Konfederacja": 0.00166859, "KoronaPolska": 0.00168314, "PL2050": 0.00134232, "PSL": 0.00108642, "Razem": 0.00077243, "Lewica": 0.00079218, "BS": 0.00083006, "NF": 0.00098188, "MN": 0.0, "WiR": 0.00143997, "RDiP": 0.00230953, "PPS": 0.00062396, "Inni": 0.00140999, "Woch": 0.00128554, "Brzoska": 0.00120169, "Matysiak": 0.00087936}, "powiat białostocki": {"KO": 0.00301822, "PiS": 0.00500488, "RozwojPlus": 0.00437852, "Konfederacja": 0.00501335, "KoronaPolska": 0.00502367, "PL2050": 0.00550924, "PSL": 0.00373936, "Razem": 0.00300263, "Lewica": 0.00273464, "BS": 0.0028791, "NF": 0.00329012, "MN": 0.0, "WiR": 0.00492375, "RDiP": 0.00701108, "PPS": 0.00260716, "Inni": 0.00454821, "Woch": 0.00376113, "Brzoska": 0.00379975, "Matysiak": 0.00321804}, "powiat bielski (podlaskie)": {"KO": 0.00092526, "PiS": 0.00155204, "RozwojPlus": 0.00134302, "Konfederacja": 0.00135093, "KoronaPolska": 0.00157694, "PL2050": 0.00146184, "PSL": 0.00111195, "Razem": 0.00067588, "Lewica": 0.00092119, "BS": 0.00054046, "NF": 0.00100154, "MN": 0.0, "WiR": 0.00092237, "RDiP": 0.00426164, "PPS": 0.00069142, "Inni": 0.00113821, "Woch": 0.00102805, "Brzoska": 0.00112305, "Matysiak": 0.00078189}, "powiat grajewski": {"KO": 0.00057483, "PiS": 0.00147681, "RozwojPlus": 0.00124351, "Konfederacja": 0.00113387, "KoronaPolska": 0.00143855, "PL2050": 0.00082337, "PSL": 0.00076745, "Razem": 0.00051111, "Lewica": 0.0004618, "BS": 0.00047648, "NF": 0.0006151, "MN": 0.0, "WiR": 0.00096219, "RDiP": 0.00109978, "PPS": 0.00038787, "Inni": 0.00072242, "Woch": 0.00067214, "Brzoska": 0.00083778, "Matysiak": 0.00061189}, "powiat hajnowski": {"KO": 0.00105323, "PiS": 0.00064225, "RozwojPlus": 0.00064732, "Konfederacja": 0.00122242, "KoronaPolska": 0.00131787, "PL2050": 0.00155583, "PSL": 0.00118525, "Razem": 0.00071156, "Lewica": 0.00117319, "BS": 0.00057919, "NF": 0.00115127, "MN": 0.0, "WiR": 0.00083611, "RDiP": 0.00618625, "PPS": 0.00084319, "Inni": 0.00138444, "Woch": 0.00142222, "Brzoska": 0.00105041, "Matysiak": 0.00073868}, "powiat kolneński": {"KO": 0.00035807, "PiS": 0.00142931, "RozwojPlus": 0.00118464, "Konfederacja": 0.00104532, "KoronaPolska": 0.0013412, "PL2050": 0.00052201, "PSL": 0.00056607, "Razem": 0.00035578, "Lewica": 0.00034243, "BS": 0.00034431, "NF": 0.0003925, "MN": 0.0, "WiR": 0.00082284, "RDiP": 0.00063237, "PPS": 0.00026645, "Inni": 0.00044599, "Woch": 0.00058765, "Brzoska": 0.00067543, "Matysiak": 0.00046691}, "powiat łomżyński": {"KO": 0.00046035, "PiS": 0.00210423, "RozwojPlus": 0.00174306, "Konfederacja": 0.00161209, "KoronaPolska": 0.00199048, "PL2050": 0.00076004, "PSL": 0.00072285, "Razem": 0.00060556, "Lewica": 0.00048712, "BS": 0.00056067, "NF": 0.0005208, "MN": 0.0, "WiR": 0.0016324, "RDiP": 0.00126474, "PPS": 0.00039461, "Inni": 0.00084321, "Woch": 0.00083203, "Brzoska": 0.00097108, "Matysiak": 0.00075437}, "powiat moniecki": {"KO": 0.00041937, "PiS": 0.00129316, "RozwojPlus": 0.00109364, "Konfederacja": 0.00115661, "KoronaPolska": 0.00137258, "PL2050": 0.00079477, "PSL": 0.00068533, "Razem": 0.00046808, "Lewica": 0.00037981, "BS": 0.00045628, "NF": 0.00046072, "MN": 0.0, "WiR": 0.00069012, "RDiP": 0.00085233, "PPS": 0.00036763, "Inni": 0.00066667, "Woch": 0.00089194, "Brzoska": 0.00072617, "Matysiak": 0.00055485}, "powiat sejneński": {"KO": 0.00036409, "PiS": 0.00043088, "RozwojPlus": 0.00038856, "Konfederacja": 0.00050681, "KoronaPolska": 0.00057606, "PL2050": 0.00050465, "PSL": 0.00044451, "Razem": 0.00025398, "Lewica": 0.00036052, "BS": 0.00023572, "NF": 0.00039302, "MN": 0.0, "WiR": 0.00039815, "RDiP": 0.00063237, "PPS": 0.00020237, "Inni": 0.00039721, "Woch": 0.00040139, "Brzoska": 0.00041049, "Matysiak": 0.00028143}, "powiat siemiatycki": {"KO": 0.00068654, "PiS": 0.00128256, "RozwojPlus": 0.00109667, "Konfederacja": 0.00103016, "KoronaPolska": 0.00151418, "PL2050": 0.00093472, "PSL": 0.00078826, "Razem": 0.00049117, "Lewica": 0.00067281, "BS": 0.0004546, "NF": 0.00074111, "MN": 0.0, "WiR": 0.00091574, "RDiP": 0.00285942, "PPS": 0.00047893, "Inni": 0.00087805, "Woch": 0.00097547, "Brzoska": 0.00086133, "Matysiak": 0.00058408}, "powiat sokólski": {"KO": 0.00088737, "PiS": 0.00211677, "RozwojPlus": 0.00180338, "Konfederacja": 0.00183569, "KoronaPolska": 0.00180463, "PL2050": 0.00168659, "PSL": 0.00122444, "Razem": 0.00085325, "Lewica": 0.00072707, "BS": 0.00077197, "NF": 0.0009558, "MN": 0.0, "WiR": 0.00127407, "RDiP": 0.00250199, "PPS": 0.00066106, "Inni": 0.00134031, "Woch": 0.00146819, "Brzoska": 0.00128908, "Matysiak": 0.0009858}, "powiat suwalski": {"KO": 0.00048263, "PiS": 0.00110156, "RozwojPlus": 0.00094983, "Konfederacja": 0.00115902, "KoronaPolska": 0.00140717, "PL2050": 0.00070283, "PSL": 0.00069931, "Razem": 0.00046913, "Lewica": 0.00054379, "BS": 0.00049416, "NF": 0.00053839, "MN": 0.0, "WiR": 0.00080293, "RDiP": 0.00104479, "PPS": 0.00048231, "Inni": 0.00111499, "Woch": 0.0007194, "Brzoska": 0.00074158, "Matysiak": 0.00054454}, "powiat wysokomazowiecki": {"KO": 0.00048881, "PiS": 0.00253564, "RozwojPlus": 0.00209379, "Konfederacja": 0.00189943, "KoronaPolska": 0.00205082, "PL2050": 0.00090203, "PSL": 0.00088901, "Razem": 0.00056673, "Lewica": 0.00043889, "BS": 0.00067937, "NF": 0.00053802, "MN": 0.0, "WiR": 0.00155941, "RDiP": 0.00109978, "PPS": 0.00050929, "Inni": 0.00098723, "Woch": 0.00123993, "Brzoska": 0.00111186, "Matysiak": 0.00076707}, "powiat zambrowski": {"KO": 0.00057857, "PiS": 0.0016474, "RozwojPlus": 0.00138671, "Konfederacja": 0.00133301, "KoronaPolska": 0.00121327, "PL2050": 0.00087139, "PSL": 0.00086535, "Razem": 0.0005342, "Lewica": 0.00044733, "BS": 0.00054972, "NF": 0.00061835, "MN": 0.0, "WiR": 0.00122762, "RDiP": 0.00082483, "PPS": 0.00044858, "Inni": 0.00073868, "Woch": 0.00080655, "Brzoska": 0.00090178, "Matysiak": 0.00064971}, "powiat białystok": {"KO": 0.00731538, "PiS": 0.00726733, "RozwojPlus": 0.00663157, "Konfederacja": 0.00771004, "KoronaPolska": 0.00701334, "PL2050": 0.01185922, "PSL": 0.0083245, "Razem": 0.00891973, "Lewica": 0.00709462, "BS": 0.00586091, "NF": 0.00814721, "MN": 0.0, "WiR": 0.00853362, "RDiP": 0.0133348, "PPS": 0.00625313, "Inni": 0.00891756, "Woch": 0.00816049, "Brzoska": 0.00747814, "Matysiak": 0.00862223}, "powiat łomża": {"KO": 0.00117747, "PiS": 0.00194354, "RozwojPlus": 0.00166086, "Konfederacja": 0.00146221, "KoronaPolska": 0.00153027, "PL2050": 0.00121871, "PSL": 0.00101809, "Razem": 0.00091517, "Lewica": 0.0008802, "BS": 0.00080901, "NF": 0.00124262, "MN": 0.0, "WiR": 0.00145987, "RDiP": 0.00107228, "PPS": 0.00065769, "Inni": 0.00120093, "Woch": 0.00120576, "Brzoska": 0.0013283, "Matysiak": 0.0010198}, "powiat suwałki": {"KO": 0.00149618, "PiS": 0.001667, "RozwojPlus": 0.00149004, "Konfederacja": 0.0017592, "KoronaPolska": 0.00178934, "PL2050": 0.00158443, "PSL": 0.00131041, "Razem": 0.00117439, "Lewica": 0.00128653, "BS": 0.00113396, "NF": 0.00160038, "MN": 0.0, "WiR": 0.00139352, "RDiP": 0.0019796, "PPS": 0.00087692, "Inni": 0.00238793, "Woch": 0.00117694, "Brzoska": 0.00156678, "Matysiak": 0.00123822}, "powiat bytowski": {"KO": 0.00174042, "PiS": 0.00162927, "RozwojPlus": 0.00233682, "Konfederacja": 0.00211408, "KoronaPolska": 0.00173704, "PL2050": 0.00202268, "PSL": 0.00132713, "Razem": 0.00108414, "Lewica": 0.00145172, "BS": 0.00137335, "NF": 0.0016383, "MN": 0.0, "WiR": 0.00158595, "RDiP": 0.00173215, "PPS": 0.00158168, "Inni": 0.00159856, "Woch": 0.00173501, "Brzoska": 0.00181111, "Matysiak": 0.0012255}, "powiat chojnicki": {"KO": 0.00218224, "PiS": 0.00220055, "RozwojPlus": 0.00313961, "Konfederacja": 0.0027966, "KoronaPolska": 0.0024169, "PL2050": 0.00258351, "PSL": 0.00191867, "Razem": 0.00173588, "Lewica": 0.00197019, "BS": 0.0019036, "NF": 0.00209424, "MN": 0.0, "WiR": 0.0019841, "RDiP": 0.00283193, "PPS": 0.00207286, "Inni": 0.00215755, "Woch": 0.00243539, "Brzoska": 0.002348, "Matysiak": 0.00187584}, "powiat człuchowski": {"KO": 0.00143179, "PiS": 0.00090455, "RozwojPlus": 0.00135434, "Konfederacja": 0.00135093, "KoronaPolska": 0.001235, "PL2050": 0.00122586, "PSL": 0.00097748, "Razem": 0.00082281, "Lewica": 0.00124554, "BS": 0.0010605, "NF": 0.00134904, "MN": 0.0, "WiR": 0.00106836, "RDiP": 0.00137472, "PPS": 0.00100038, "Inni": 0.00117616, "Woch": 0.00100445, "Brzoska": 0.00132633, "Matysiak": 0.00089126}, "powiat gdański": {"KO": 0.00422788, "PiS": 0.00215591, "RozwojPlus": 0.00229494, "Konfederacja": 0.00357216, "KoronaPolska": 0.00268642, "PL2050": 0.00436101, "PSL": 0.00288533, "Razem": 0.00392199, "Lewica": 0.00379569, "BS": 0.00279055, "NF": 0.00419819, "MN": 0.0, "WiR": 0.00322499, "RDiP": 0.00324434, "PPS": 0.00495902, "Inni": 0.00349061, "Woch": 0.0033893, "Brzoska": 0.0037076, "Matysiak": 0.00374094}, "powiat kartuski": {"KO": 0.00348605, "PiS": 0.00351738, "RozwojPlus": 0.00508429, "Konfederacja": 0.00509811, "KoronaPolska": 0.00414589, "PL2050": 0.00515067, "PSL": 0.00333334, "Razem": 0.00323247, "Lewica": 0.00318438, "BS": 0.00340644, "NF": 0.0033784, "MN": 0.0, "WiR": 0.00353024, "RDiP": 0.00401419, "PPS": 0.00374917, "Inni": 0.00414311, "Woch": 0.00434461, "Brzoska": 0.00392455, "Matysiak": 0.00339988}, "powiat kościerski": {"KO": 0.00167587, "PiS": 0.00179144, "RozwojPlus": 0.0025513, "Konfederacja": 0.00228635, "KoronaPolska": 0.00196554, "PL2050": 0.00229339, "PSL": 0.00161538, "Razem": 0.00141158, "Lewica": 0.00138058, "BS": 0.0014622, "NF": 0.00159874, "MN": 0.0, "WiR": 0.00157268, "RDiP": 0.00186962, "PPS": 0.00157718, "Inni": 0.00177562, "Woch": 0.00199301, "Brzoska": 0.00185863, "Matysiak": 0.00152001}, "powiat kwidzyński": {"KO": 0.00198402, "PiS": 0.00164255, "RozwojPlus": 0.00160214, "Konfederacja": 0.00201588, "KoronaPolska": 0.00171612, "PL2050": 0.00169374, "PSL": 0.00122156, "Razem": 0.00144307, "Lewica": 0.00186047, "BS": 0.00140114, "NF": 0.00195335, "MN": 0.0, "WiR": 0.0014466, "RDiP": 0.0014847, "PPS": 0.00168898, "Inni": 0.00151587, "Woch": 0.00170243, "Brzoska": 0.00189397, "Matysiak": 0.00149091}, "powiat lęborski": {"KO": 0.00194515, "PiS": 0.00116228, "RozwojPlus": 0.00174402, "Konfederacja": 0.00166067, "KoronaPolska": 0.00146832, "PL2050": 0.00164674, "PSL": 0.0012193, "Razem": 0.00125101, "Lewica": 0.00145413, "BS": 0.00117675, "NF": 0.00181507, "MN": 0.0, "WiR": 0.00151296, "RDiP": 0.00142971, "PPS": 0.00135637, "Inni": 0.00145439, "Woch": 0.0013691, "Brzoska": 0.00174122, "Matysiak": 0.00130308}, "powiat malborski": {"KO": 0.00177343, "PiS": 0.00109639, "RozwojPlus": 0.00110879, "Konfederacja": 0.00139262, "KoronaPolska": 0.00116983, "PL2050": 0.00160588, "PSL": 0.00117199, "Razem": 0.00121637, "Lewica": 0.00167599, "BS": 0.00109964, "NF": 0.00174274, "MN": 0.0, "WiR": 0.00113472, "RDiP": 0.00115477, "PPS": 0.00140299, "Inni": 0.00135378, "Woch": 0.00145698, "Brzoska": 0.00155269, "Matysiak": 0.00122921}, "powiat nowodworski (pomorskie)": {"KO": 0.00114267, "PiS": 0.00071917, "RozwojPlus": 0.00071776, "Konfederacja": 0.00082861, "KoronaPolska": 0.00090915, "PL2050": 0.0009051, "PSL": 0.00062444, "Razem": 0.00074305, "Lewica": 0.00089466, "BS": 0.0006499, "NF": 0.00109947, "MN": 0.0, "WiR": 0.00083611, "RDiP": 0.00060488, "PPS": 0.00100907, "Inni": 0.00069173, "Woch": 0.00102531, "Brzoska": 0.00098002, "Matysiak": 0.00075345}, "powiat pucki": {"KO": 0.00297204, "PiS": 0.0017536, "RozwojPlus": 0.0026782, "Konfederacja": 0.00279557, "KoronaPolska": 0.00241448, "PL2050": 0.00338339, "PSL": 0.00225907, "Razem": 0.00275075, "Lewica": 0.00255016, "BS": 0.002414, "NF": 0.00286193, "MN": 0.0, "WiR": 0.00272067, "RDiP": 0.00233703, "PPS": 0.00300565, "Inni": 0.00298466, "Woch": 0.00228445, "Brzoska": 0.00276166, "Matysiak": 0.00270348}, "powiat słupski": {"KO": 0.00278731, "PiS": 0.00166758, "RozwojPlus": 0.00249499, "Konfederacja": 0.0023115, "KoronaPolska": 0.00221254, "PL2050": 0.00225048, "PSL": 0.00174005, "Razem": 0.00166346, "Lewica": 0.00235844, "BS": 0.00177033, "NF": 0.00262285, "MN": 0.0, "WiR": 0.00215663, "RDiP": 0.00175964, "PPS": 0.00192416, "Inni": 0.00210191, "Woch": 0.00255134, "Brzoska": 0.00248699, "Matysiak": 0.00176438}, "powiat starogardzki": {"KO": 0.00267934, "PiS": 0.00321083, "RozwojPlus": 0.00303588, "Konfederacja": 0.00358353, "KoronaPolska": 0.00307583, "PL2050": 0.00329553, "PSL": 0.00221957, "Razem": 0.00237712, "Lewica": 0.0026647, "BS": 0.00213395, "NF": 0.00268263, "MN": 0.0, "WiR": 0.00319181, "RDiP": 0.00362927, "PPS": 0.00307578, "Inni": 0.00272126, "Woch": 0.00304586, "Brzoska": 0.00293533, "Matysiak": 0.00248862}, "powiat tczewski": {"KO": 0.00284553, "PiS": 0.00245018, "RozwojPlus": 0.00239016, "Konfederacja": 0.00293993, "KoronaPolska": 0.00216105, "PL2050": 0.00300439, "PSL": 0.00223026, "Razem": 0.00260906, "Lewica": 0.00266108, "BS": 0.00211385, "NF": 0.00283552, "MN": 0.0, "WiR": 0.00216327, "RDiP": 0.00299689, "PPS": 0.00300023, "Inni": 0.0025683, "Woch": 0.00280903, "Brzoska": 0.00276341, "Matysiak": 0.00259849}, "powiat wejherowski": {"KO": 0.00637857, "PiS": 0.00415242, "RozwojPlus": 0.00627767, "Konfederacja": 0.0066058, "KoronaPolska": 0.00558042, "PL2050": 0.0076923, "PSL": 0.00500237, "Razem": 0.00620256, "Lewica": 0.00588405, "BS": 0.00568623, "NF": 0.00620598, "MN": 0.0, "WiR": 0.00542807, "RDiP": 0.00615875, "PPS": 0.00643037, "Inni": 0.00698865, "Woch": 0.00681641, "Brzoska": 0.00614987, "Matysiak": 0.00612031}, "powiat sztumski": {"KO": 0.00097501, "PiS": 0.00077324, "RozwojPlus": 0.00075546, "Konfederacja": 0.0009144, "KoronaPolska": 0.00072008, "PL2050": 0.0008673, "PSL": 0.00062114, "Razem": 0.00058352, "Lewica": 0.00081509, "BS": 0.00065911, "NF": 0.00094071, "MN": 0.0, "WiR": 0.00051759, "RDiP": 0.00153969, "PPS": 0.00088496, "Inni": 0.00081501, "Woch": 0.00094338, "Brzoska": 0.00090557, "Matysiak": 0.00062161}, "powiat gdańsk": {"KO": 0.01979901, "PiS": 0.00838239, "RozwojPlus": 0.00895818, "Konfederacja": 0.01005358, "KoronaPolska": 0.00749125, "PL2050": 0.01693736, "PSL": 0.01073984, "Razem": 0.02775725, "Lewica": 0.0213779, "BS": 0.01060108, "NF": 0.02066994, "MN": 0.0, "WiR": 0.01138038, "RDiP": 0.01009046, "PPS": 0.02584734, "Inni": 0.01414508, "Woch": 0.01410829, "Brzoska": 0.0156181, "Matysiak": 0.02502068}, "powiat gdynia": {"KO": 0.01016578, "PiS": 0.00357208, "RozwojPlus": 0.00575032, "Konfederacja": 0.00456373, "KoronaPolska": 0.004059, "PL2050": 0.00751659, "PSL": 0.00564313, "Razem": 0.01006158, "Lewica": 0.00919141, "BS": 0.00595182, "NF": 0.00988142, "MN": 0.0, "WiR": 0.00574659, "RDiP": 0.00536141, "PPS": 0.01040937, "Inni": 0.00745911, "Woch": 0.00717771, "Brzoska": 0.00779209, "Matysiak": 0.00936271}, "powiat słupsk": {"KO": 0.00295757, "PiS": 0.00143751, "RozwojPlus": 0.00216436, "Konfederacja": 0.0015673, "KoronaPolska": 0.0016936, "PL2050": 0.0019624, "PSL": 0.00143323, "Razem": 0.00175372, "Lewica": 0.0022451, "BS": 0.00143195, "NF": 0.00275419, "MN": 0.0, "WiR": 0.00175185, "RDiP": 0.00192461, "PPS": 0.00183403, "Inni": 0.00187426, "Woch": 0.0019741, "Brzoska": 0.00235869, "Matysiak": 0.00179245}, "powiat sopot": {"KO": 0.0017201, "PiS": 0.0006332, "RozwojPlus": 0.00066942, "Konfederacja": 0.00051129, "KoronaPolska": 0.00055273, "PL2050": 0.00103075, "PSL": 0.00057969, "Razem": 0.00172853, "Lewica": 0.00141675, "BS": 0.00067, "NF": 0.00170227, "MN": 0.0, "WiR": 0.00078302, "RDiP": 0.00087982, "PPS": 0.00185086, "Inni": 0.00095198, "Woch": 0.00117351, "Brzoska": 0.00123032, "Matysiak": 0.0015781}, "powiat będziński": {"KO": 0.00476856, "PiS": 0.00297107, "RozwojPlus": 0.0028482, "Konfederacja": 0.00310807, "KoronaPolska": 0.00297767, "PL2050": 0.00359587, "PSL": 0.00337791, "Razem": 0.00383698, "Lewica": 0.00527756, "BS": 0.00334039, "NF": 0.00431766, "MN": 0.0, "WiR": 0.00315864, "RDiP": 0.00373924, "PPS": 0.00579799, "Inni": 0.00391107, "Woch": 0.00380107, "Brzoska": 0.00405536, "Matysiak": 0.00377025}, "powiat bielski (śląskie)": {"KO": 0.00441749, "PiS": 0.00464625, "RozwojPlus": 0.00425859, "Konfederacja": 0.00537236, "KoronaPolska": 0.00416601, "PL2050": 0.00566349, "PSL": 0.00404024, "Razem": 0.00408047, "Lewica": 0.00371129, "BS": 0.00421805, "NF": 0.00398714, "MN": 0.0, "WiR": 0.00503656, "RDiP": 0.00453658, "PPS": 0.00318978, "Inni": 0.00458141, "Woch": 0.0044962, "Brzoska": 0.00461263, "Matysiak": 0.00414222}, "powiat cieszyński": {"KO": 0.00481735, "PiS": 0.00436011, "RozwojPlus": 0.00405336, "Konfederacja": 0.00527141, "KoronaPolska": 0.00457874, "PL2050": 0.00555214, "PSL": 0.00420395, "Razem": 0.00381599, "Lewica": 0.00385719, "BS": 0.00485485, "NF": 0.00429112, "MN": 0.0, "WiR": 0.00456542, "RDiP": 0.00508647, "PPS": 0.00356391, "Inni": 0.00471587, "Woch": 0.00478193, "Brzoska": 0.00478737, "Matysiak": 0.00391103}, "powiat częstochowski": {"KO": 0.00296619, "PiS": 0.00422033, "RozwojPlus": 0.00369361, "Konfederacja": 0.00365726, "KoronaPolska": 0.00369856, "PL2050": 0.00341812, "PSL": 0.00394406, "Razem": 0.00289138, "Lewica": 0.00314941, "BS": 0.00439014, "NF": 0.00282486, "MN": 0.0, "WiR": 0.00342407, "RDiP": 0.00321685, "PPS": 0.00291134, "Inni": 0.00344553, "Woch": 0.00361715, "Brzoska": 0.00332685, "Matysiak": 0.00302552}, "powiat gliwicki": {"KO": 0.00277739, "PiS": 0.00262334, "RozwojPlus": 0.00248426, "Konfederacja": 0.00307602, "KoronaPolska": 0.00293584, "PL2050": 0.00329655, "PSL": 0.00243754, "Razem": 0.00263215, "Lewica": 0.00246093, "BS": 0.00312891, "NF": 0.00266851, "MN": 0.0, "WiR": 0.00267422, "RDiP": 0.00252949, "PPS": 0.00327874, "Inni": 0.00303728, "Woch": 0.00301047, "Brzoska": 0.00280519, "Matysiak": 0.00263314}, "powiat kłobucki": {"KO": 0.00175782, "PiS": 0.00252485, "RozwojPlus": 0.00222623, "Konfederacja": 0.00233114, "KoronaPolska": 0.00253919, "PL2050": 0.00204413, "PSL": 0.00361969, "Razem": 0.00178835, "Lewica": 0.00181344, "BS": 0.00221683, "NF": 0.00167302, "MN": 0.0, "WiR": 0.00206373, "RDiP": 0.00252949, "PPS": 0.00163816, "Inni": 0.00202196, "Woch": 0.00211115, "Brzoska": 0.0020591, "Matysiak": 0.00186994}, "powiat lubliniecki": {"KO": 0.00157456, "PiS": 0.00192906, "RozwojPlus": 0.00173758, "Konfederacja": 0.00227394, "KoronaPolska": 0.00220208, "PL2050": 0.00196343, "PSL": 0.00193056, "Razem": 0.00154487, "Lewica": 0.00137576, "BS": 0.0023611, "NF": 0.00146895, "MN": 0.0, "WiR": 0.00173858, "RDiP": 0.00255698, "PPS": 0.00148113, "Inni": 0.0021426, "Woch": 0.00219818, "Brzoska": 0.00179216, "Matysiak": 0.00158985}, "powiat mikołowski": {"KO": 0.00272324, "PiS": 0.00235785, "RozwojPlus": 0.00244401, "Konfederacja": 0.00293924, "KoronaPolska": 0.00233724, "PL2050": 0.00322709, "PSL": 0.0023368, "Razem": 0.00270877, "Lewica": 0.00239341, "BS": 0.00329814, "NF": 0.0023652, "MN": 0.0, "WiR": 0.00275385, "RDiP": 0.00277694, "PPS": 0.00265306, "Inni": 0.00312807, "Woch": 0.00308267, "Brzoska": 0.00269981, "Matysiak": 0.002675}, "powiat myszkowski": {"KO": 0.00150903, "PiS": 0.00203614, "RozwojPlus": 0.00178665, "Konfederacja": 0.00181157, "KoronaPolska": 0.00209829, "PL2050": 0.0016304, "PSL": 0.00162372, "Razem": 0.00140214, "Lewica": 0.00158676, "BS": 0.00176224, "NF": 0.00143133, "MN": 0.0, "WiR": 0.00179166, "RDiP": 0.00173215, "PPS": 0.00149811, "Inni": 0.00161901, "Woch": 0.00172553, "Brzoska": 0.00165728, "Matysiak": 0.0014692}, "powiat pszczyński": {"KO": 0.00234501, "PiS": 0.00367222, "RozwojPlus": 0.00325058, "Konfederacja": 0.00378301, "KoronaPolska": 0.00292296, "PL2050": 0.00319951, "PSL": 0.00208768, "Razem": 0.00265839, "Lewica": 0.00223666, "BS": 0.00299319, "NF": 0.002173, "MN": 0.0, "WiR": 0.00306573, "RDiP": 0.00283193, "PPS": 0.00209438, "Inni": 0.0030119, "Woch": 0.00330185, "Brzoska": 0.00283429, "Matysiak": 0.00274046}, "powiat raciborski": {"KO": 0.00226387, "PiS": 0.002044, "RozwojPlus": 0.00211131, "Konfederacja": 0.00265052, "KoronaPolska": 0.00223426, "PL2050": 0.00259781, "PSL": 0.00177987, "Razem": 0.00177576, "Lewica": 0.00176401, "BS": 0.00254938, "NF": 0.00191732, "MN": 0.0, "WiR": 0.00205709, "RDiP": 0.00203459, "PPS": 0.00184437, "Inni": 0.00212397, "Woch": 0.00229378, "Brzoska": 0.00228787, "Matysiak": 0.00183648}, "powiat rybnicki": {"KO": 0.0014913, "PiS": 0.00237929, "RozwojPlus": 0.00233738, "Konfederacja": 0.00259229, "KoronaPolska": 0.0019052, "PL2050": 0.00187864, "PSL": 0.00140319, "Razem": 0.0014798, "Lewica": 0.00146739, "BS": 0.00243796, "NF": 0.00131039, "MN": 0.0, "WiR": 0.00177176, "RDiP": 0.00219955, "PPS": 0.0013951, "Inni": 0.00186881, "Woch": 0.00206864, "Brzoska": 0.00185699, "Matysiak": 0.00159027}, "powiat tarnogórski": {"KO": 0.00387242, "PiS": 0.00332077, "RozwojPlus": 0.00314755, "Konfederacja": 0.00351944, "KoronaPolska": 0.003141, "PL2050": 0.00434773, "PSL": 0.00316223, "Razem": 0.00336471, "Lewica": 0.00320005, "BS": 0.00365577, "NF": 0.00367645, "MN": 0.0, "WiR": 0.00335107, "RDiP": 0.00302439, "PPS": 0.00416383, "Inni": 0.00387335, "Woch": 0.00377708, "Brzoska": 0.00366068, "Matysiak": 0.00336038}, "powiat bieruńsko-lędziński": {"KO": 0.00113502, "PiS": 0.00162018, "RozwojPlus": 0.00286324, "Konfederacja": 0.00199969, "KoronaPolska": 0.00168796, "PL2050": 0.0015405, "PSL": 0.00110881, "Razem": 0.00151023, "Lewica": 0.00110688, "BS": 0.00161102, "NF": 0.00118023, "MN": 0.0, "WiR": 0.00153287, "RDiP": 0.00151219, "PPS": 0.00170103, "Inni": 0.00159367, "Woch": 0.00153866, "Brzoska": 0.00146161, "Matysiak": 0.00158481}, "powiat wodzisławski": {"KO": 0.00318799, "PiS": 0.00429004, "RozwojPlus": 0.00425606, "Konfederacja": 0.00480043, "KoronaPolska": 0.00398176, "PL2050": 0.00364593, "PSL": 0.0025241, "Razem": 0.00286199, "Lewica": 0.00298905, "BS": 0.00463033, "NF": 0.00276979, "MN": 0.0, "WiR": 0.00365632, "RDiP": 0.00357428, "PPS": 0.00289424, "Inni": 0.00314697, "Woch": 0.00342991, "Brzoska": 0.00367289, "Matysiak": 0.00305216}, "powiat zawierciański": {"KO": 0.00274487, "PiS": 0.00338235, "RozwojPlus": 0.00302937, "Konfederacja": 0.00299506, "KoronaPolska": 0.00313537, "PL2050": 0.00259475, "PSL": 0.00301077, "Razem": 0.00240861, "Lewica": 0.00291067, "BS": 0.0020839, "NF": 0.00248408, "MN": 0.0, "WiR": 0.00246851, "RDiP": 0.00387671, "PPS": 0.00391412, "Inni": 0.00245846, "Woch": 0.00278542, "Brzoska": 0.00288674, "Matysiak": 0.00251988}, "powiat żywiecki": {"KO": 0.00286878, "PiS": 0.0054591, "RozwojPlus": 0.00472326, "Konfederacja": 0.00460336, "KoronaPolska": 0.00477828, "PL2050": 0.00351619, "PSL": 0.00273965, "Razem": 0.00292182, "Lewica": 0.00233915, "BS": 0.00336552, "NF": 0.00259806, "MN": 0.0, "WiR": 0.00376249, "RDiP": 0.00398669, "PPS": 0.00226023, "Inni": 0.00353507, "Woch": 0.00361149, "Brzoska": 0.0036083, "Matysiak": 0.00315878}, "powiat bielsko-biała": {"KO": 0.00526176, "PiS": 0.00387194, "RozwojPlus": 0.00362769, "Konfederacja": 0.0040359, "KoronaPolska": 0.00361971, "PL2050": 0.00520584, "PSL": 0.00368639, "Razem": 0.00445619, "Lewica": 0.00431658, "BS": 0.00372541, "NF": 0.00471463, "MN": 0.0, "WiR": 0.00459197, "RDiP": 0.00464656, "PPS": 0.00356777, "Inni": 0.00429782, "Woch": 0.00410265, "Brzoska": 0.00467487, "Matysiak": 0.00438242}, "powiat bytom": {"KO": 0.0036794, "PiS": 0.00275291, "RozwojPlus": 0.00265223, "Konfederacja": 0.003147, "KoronaPolska": 0.00253356, "PL2050": 0.00353968, "PSL": 0.00252026, "Razem": 0.00366277, "Lewica": 0.00381981, "BS": 0.00343399, "NF": 0.0036069, "MN": 0.0, "WiR": 0.00273394, "RDiP": 0.00321685, "PPS": 0.0041694, "Inni": 0.00333178, "Woch": 0.00315537, "Brzoska": 0.00336574, "Matysiak": 0.00354792}, "powiat chorzów": {"KO": 0.00290813, "PiS": 0.00135414, "RozwojPlus": 0.00265746, "Konfederacja": 0.00198281, "KoronaPolska": 0.00175474, "PL2050": 0.0028297, "PSL": 0.00173987, "Razem": 0.00297219, "Lewica": 0.00309515, "BS": 0.00262635, "NF": 0.00299486, "MN": 0.0, "WiR": 0.00184475, "RDiP": 0.00200709, "PPS": 0.00357783, "Inni": 0.0028169, "Woch": 0.00252124, "Brzoska": 0.00249068, "Matysiak": 0.00285562}, "powiat częstochowa": {"KO": 0.00664997, "PiS": 0.00499687, "RozwojPlus": 0.00456222, "Konfederacja": 0.00424194, "KoronaPolska": 0.00447737, "PL2050": 0.00504443, "PSL": 0.00488015, "Razem": 0.00486969, "Lewica": 0.00545239, "BS": 0.00616268, "NF": 0.00606601, "MN": 0.0, "WiR": 0.0046915, "RDiP": 0.004949, "PPS": 0.00471076, "Inni": 0.00529617, "Woch": 0.00512639, "Brzoska": 0.00571353, "Matysiak": 0.00489116}, "powiat dąbrowa górnicza": {"KO": 0.00379241, "PiS": 0.00235868, "RozwojPlus": 0.00224905, "Konfederacja": 0.00226464, "KoronaPolska": 0.00241287, "PL2050": 0.00283583, "PSL": 0.0024451, "Razem": 0.00307504, "Lewica": 0.00430331, "BS": 0.0024365, "NF": 0.00344586, "MN": 0.0, "WiR": 0.00225617, "RDiP": 0.00313437, "PPS": 0.00422598, "Inni": 0.00319974, "Woch": 0.00281908, "Brzoska": 0.00317764, "Matysiak": 0.0030136}, "powiat gliwice": {"KO": 0.005787, "PiS": 0.00326838, "RozwojPlus": 0.00325512, "Konfederacja": 0.00387156, "KoronaPolska": 0.00338558, "PL2050": 0.00506997, "PSL": 0.00349394, "Razem": 0.00524647, "Lewica": 0.00495562, "BS": 0.00438255, "NF": 0.00552659, "MN": 0.0, "WiR": 0.00402792, "RDiP": 0.00412416, "PPS": 0.00644058, "Inni": 0.00454719, "Woch": 0.00458891, "Brzoska": 0.00485796, "Matysiak": 0.0050086}, "powiat jastrzębie-zdrój": {"KO": 0.00172498, "PiS": 0.00249249, "RozwojPlus": 0.00242976, "Konfederacja": 0.00228669, "KoronaPolska": 0.00193175, "PL2050": 0.00176116, "PSL": 0.00118025, "Razem": 0.00175162, "Lewica": 0.0018243, "BS": 0.0024727, "NF": 0.0015304, "MN": 0.0, "WiR": 0.00173858, "RDiP": 0.00211707, "PPS": 0.00142821, "Inni": 0.00167508, "Woch": 0.00204814, "Brzoska": 0.00193709, "Matysiak": 0.00182958}, "powiat jaworzno": {"KO": 0.00243851, "PiS": 0.00201745, "RozwojPlus": 0.0018851, "Konfederacja": 0.00216266, "KoronaPolska": 0.00212162, "PL2050": 0.00229543, "PSL": 0.00202857, "Razem": 0.00222285, "Lewica": 0.00249951, "BS": 0.00197009, "NF": 0.00220294, "MN": 0.0, "WiR": 0.00204382, "RDiP": 0.0019521, "PPS": 0.00334769, "Inni": 0.00223383, "Woch": 0.00205696, "Brzoska": 0.00229081, "Matysiak": 0.00220204}, "powiat katowice": {"KO": 0.00994154, "PiS": 0.00464782, "RozwojPlus": 0.00901385, "Konfederacja": 0.00583094, "KoronaPolska": 0.00484264, "PL2050": 0.0085075, "PSL": 0.00565251, "Razem": 0.01146372, "Lewica": 0.01025368, "BS": 0.00725204, "NF": 0.01028588, "MN": 0.0, "WiR": 0.00641681, "RDiP": 0.00684611, "PPS": 0.01300151, "Inni": 0.00809267, "Woch": 0.00840215, "Brzoska": 0.00825634, "Matysiak": 0.01080341}, "powiat mysłowice": {"KO": 0.00192271, "PiS": 0.00143449, "RozwojPlus": 0.00265018, "Konfederacja": 0.00188324, "KoronaPolska": 0.00149568, "PL2050": 0.00192154, "PSL": 0.00129976, "Razem": 0.00179255, "Lewica": 0.00191232, "BS": 0.00184187, "NF": 0.00195357, "MN": 0.0, "WiR": 0.00162577, "RDiP": 0.00192461, "PPS": 0.00257422, "Inni": 0.00189451, "Woch": 0.00181268, "Brzoska": 0.00186654, "Matysiak": 0.00182957}, "powiat piekary śląskie": {"KO": 0.00130186, "PiS": 0.00110896, "RozwojPlus": 0.0019982, "Konfederacja": 0.00116522, "KoronaPolska": 0.00090111, "PL2050": 0.00137603, "PSL": 0.00072837, "Razem": 0.00132972, "Lewica": 0.00122142, "BS": 0.00116694, "NF": 0.00132199, "MN": 0.0, "WiR": 0.0011679, "RDiP": 0.00118226, "PPS": 0.00162732, "Inni": 0.00130278, "Woch": 0.00138551, "Brzoska": 0.00125682, "Matysiak": 0.00134743}, "powiat ruda śląska": {"KO": 0.00315156, "PiS": 0.00242402, "RozwojPlus": 0.00450121, "Konfederacja": 0.00334752, "KoronaPolska": 0.00250942, "PL2050": 0.00371948, "PSL": 0.0027086, "Razem": 0.00322512, "Lewica": 0.00330013, "BS": 0.00346071, "NF": 0.00323967, "MN": 0.0, "WiR": 0.00248178, "RDiP": 0.00318935, "PPS": 0.00393504, "Inni": 0.00363984, "Woch": 0.00339673, "Brzoska": 0.00316547, "Matysiak": 0.0032625}, "powiat rybnik": {"KO": 0.00329108, "PiS": 0.00324894, "RozwojPlus": 0.00330383, "Konfederacja": 0.00379094, "KoronaPolska": 0.00285779, "PL2050": 0.00356216, "PSL": 0.00242391, "Razem": 0.00298059, "Lewica": 0.00311565, "BS": 0.00427692, "NF": 0.00286376, "MN": 0.0, "WiR": 0.00325817, "RDiP": 0.00376674, "PPS": 0.00262468, "Inni": 0.00320367, "Woch": 0.00330928, "Brzoska": 0.00334819, "Matysiak": 0.00303208}, "powiat siemianowice śląskie": {"KO": 0.00190986, "PiS": 0.00098586, "RozwojPlus": 0.00190295, "Konfederacja": 0.00133198, "KoronaPolska": 0.00118833, "PL2050": 0.00218306, "PSL": 0.00120875, "Razem": 0.00170334, "Lewica": 0.00203651, "BS": 0.00138898, "NF": 0.00195103, "MN": 0.0, "WiR": 0.00128734, "RDiP": 0.00164967, "PPS": 0.00208659, "Inni": 0.00165583, "Woch": 0.00164876, "Brzoska": 0.0016637, "Matysiak": 0.00168409}, "powiat sosnowiec": {"KO": 0.00628085, "PiS": 0.00390648, "RozwojPlus": 0.00371742, "Konfederacja": 0.003639, "KoronaPolska": 0.00378786, "PL2050": 0.00449484, "PSL": 0.00406477, "Razem": 0.00532938, "Lewica": 0.00674616, "BS": 0.00388049, "NF": 0.00568222, "MN": 0.0, "WiR": 0.00397484, "RDiP": 0.00478403, "PPS": 0.00743365, "Inni": 0.00505918, "Woch": 0.00497266, "Brzoska": 0.00522361, "Matysiak": 0.0051756}, "powiat świętochłowice": {"KO": 0.00118657, "PiS": 0.00072966, "RozwojPlus": 0.00137572, "Konfederacja": 0.0009616, "KoronaPolska": 0.00087214, "PL2050": 0.00122893, "PSL": 0.00075826, "Razem": 0.00122162, "Lewica": 0.00117681, "BS": 0.00112683, "NF": 0.00121276, "MN": 0.0, "WiR": 0.00075648, "RDiP": 0.00104479, "PPS": 0.00130979, "Inni": 0.00118593, "Woch": 0.00111869, "Brzoska": 0.00108299, "Matysiak": 0.001199}, "powiat tychy": {"KO": 0.00370623, "PiS": 0.00241741, "RozwojPlus": 0.00450775, "Konfederacja": 0.00292167, "KoronaPolska": 0.00249816, "PL2050": 0.00351108, "PSL": 0.00292661, "Razem": 0.00350744, "Lewica": 0.00335439, "BS": 0.00318292, "NF": 0.00373142, "MN": 0.0, "WiR": 0.00312546, "RDiP": 0.00192461, "PPS": 0.0040371, "Inni": 0.00336884, "Woch": 0.00312615, "Brzoska": 0.00338418, "Matysiak": 0.00350111}, "powiat zabrze": {"KO": 0.0038251, "PiS": 0.00283292, "RozwojPlus": 0.00274778, "Konfederacja": 0.00351083, "KoronaPolska": 0.00280711, "PL2050": 0.00374502, "PSL": 0.00264049, "Razem": 0.00378556, "Lewica": 0.00387045, "BS": 0.0037953, "NF": 0.00373742, "MN": 0.0, "WiR": 0.00288657, "RDiP": 0.00321685, "PPS": 0.00485966, "Inni": 0.00348152, "Woch": 0.00359853, "Brzoska": 0.00354861, "Matysiak": 0.00367191}, "powiat żory": {"KO": 0.0015009, "PiS": 0.00155837, "RozwojPlus": 0.00158179, "Konfederacja": 0.0019046, "KoronaPolska": 0.0013243, "PL2050": 0.00150066, "PSL": 0.00107378, "Razem": 0.00143572, "Lewica": 0.00141314, "BS": 0.00189526, "NF": 0.00130956, "MN": 0.0, "WiR": 0.00140015, "RDiP": 0.00112727, "PPS": 0.00140929, "Inni": 0.00148134, "Woch": 0.00149384, "Brzoska": 0.00157184, "Matysiak": 0.00145653}, "powiat buski": {"KO": 0.00127243, "PiS": 0.00272552, "RozwojPlus": 0.00224644, "Konfederacja": 0.00168203, "KoronaPolska": 0.00223989, "PL2050": 0.00144958, "PSL": 0.00285527, "Razem": 0.00106525, "Lewica": 0.00124674, "BS": 0.00275344, "NF": 0.00129669, "MN": 0.0, "WiR": 0.00171867, "RDiP": 0.00189712, "PPS": 0.00104827, "Inni": 0.00134592, "Woch": 0.00163388, "Brzoska": 0.00161911, "Matysiak": 0.00123882}, "powiat jędrzejowski": {"KO": 0.00122056, "PiS": 0.0032744, "RozwojPlus": 0.00269023, "Konfederacja": 0.00226223, "KoronaPolska": 0.00264861, "PL2050": 0.00156706, "PSL": 0.00292898, "Razem": 0.00136435, "Lewica": 0.00129738, "BS": 0.00260875, "NF": 0.00127807, "MN": 0.0, "WiR": 0.00194429, "RDiP": 0.00173215, "PPS": 0.00103396, "Inni": 0.00150547, "Woch": 0.00205988, "Brzoska": 0.00180268, "Matysiak": 0.00154869}, "powiat kazimierski": {"KO": 0.00043141, "PiS": 0.00115545, "RozwojPlus": 0.00095584, "Konfederacja": 0.00085066, "KoronaPolska": 0.00089789, "PL2050": 0.00076004, "PSL": 0.00141362, "Razem": 0.00045548, "Lewica": 0.00047627, "BS": 0.00066142, "NF": 0.000452, "MN": 0.0, "WiR": 0.00054413, "RDiP": 0.00076984, "PPS": 0.00037924, "Inni": 0.0004555, "Woch": 0.0005729, "Brzoska": 0.00066207, "Matysiak": 0.00052933}, "powiat kielecki": {"KO": 0.00303611, "PiS": 0.00839674, "RozwojPlus": 0.00691822, "Konfederacja": 0.00619512, "KoronaPolska": 0.00812363, "PL2050": 0.00468485, "PSL": 0.00689961, "Razem": 0.00403114, "Lewica": 0.00334836, "BS": 0.01065942, "NF": 0.00323512, "MN": 0.0, "WiR": 0.00592576, "RDiP": 0.0044541, "PPS": 0.00305178, "Inni": 0.00492045, "Woch": 0.00532408, "Brzoska": 0.00468949, "Matysiak": 0.00442403}, "powiat konecki": {"KO": 0.00133747, "PiS": 0.00297288, "RozwojPlus": 0.00244065, "Konfederacja": 0.00175128, "KoronaPolska": 0.00209427, "PL2050": 0.00169374, "PSL": 0.00238749, "Razem": 0.00118909, "Lewica": 0.00152165, "BS": 0.00288779, "NF": 0.0013918, "MN": 0.0, "WiR": 0.00237561, "RDiP": 0.00200709, "PPS": 0.00113413, "Inni": 0.00198156, "Woch": 0.00167466, "Brzoska": 0.00169709, "Matysiak": 0.00136831}, "powiat opatowski": {"KO": 0.00060182, "PiS": 0.00189329, "RozwojPlus": 0.00155215, "Konfederacja": 0.00136437, "KoronaPolska": 0.00167187, "PL2050": 0.00088977, "PSL": 0.00168515, "Razem": 0.00064649, "Lewica": 0.00079579, "BS": 0.00141141, "NF": 0.00064637, "MN": 0.0, "WiR": 0.00098873, "RDiP": 0.00175964, "PPS": 0.00077278, "Inni": 0.00097277, "Woch": 0.00144673, "Brzoska": 0.00100077, "Matysiak": 0.00077781}, "powiat ostrowiecki": {"KO": 0.00224208, "PiS": 0.00295347, "RozwojPlus": 0.00249846, "Konfederacja": 0.00199694, "KoronaPolska": 0.00296641, "PL2050": 0.00191235, "PSL": 0.00354431, "Razem": 0.00157425, "Lewica": 0.00218602, "BS": 0.00321554, "NF": 0.00226362, "MN": 0.0, "WiR": 0.00224953, "RDiP": 0.00280443, "PPS": 0.0013166, "Inni": 0.00208193, "Woch": 0.00234206, "Brzoska": 0.00232055, "Matysiak": 0.00173753}, "powiat pińczowski": {"KO": 0.00061792, "PiS": 0.00133876, "RozwojPlus": 0.00110963, "Konfederacja": 0.00096264, "KoronaPolska": 0.00123258, "PL2050": 0.00066912, "PSL": 0.00136452, "Razem": 0.00053525, "Lewica": 0.00066919, "BS": 0.00136712, "NF": 0.00063821, "MN": 0.0, "WiR": 0.00092237, "RDiP": 0.00104479, "PPS": 0.00051877, "Inni": 0.00067682, "Woch": 0.00082674, "Brzoska": 0.00082258, "Matysiak": 0.0006227}, "powiat sandomierski": {"KO": 0.00130983, "PiS": 0.00257502, "RozwojPlus": 0.00214986, "Konfederacja": 0.00186257, "KoronaPolska": 0.00247724, "PL2050": 0.00153029, "PSL": 0.00381506, "Razem": 0.00101697, "Lewica": 0.00120213, "BS": 0.00171407, "NF": 0.00132023, "MN": 0.0, "WiR": 0.00185802, "RDiP": 0.00186962, "PPS": 0.00109836, "Inni": 0.00139481, "Woch": 0.00157843, "Brzoska": 0.00169461, "Matysiak": 0.00119772}, "powiat skarżyski": {"KO": 0.00168985, "PiS": 0.00205949, "RozwojPlus": 0.00175434, "Konfederacja": 0.00150149, "KoronaPolska": 0.00193094, "PL2050": 0.00150986, "PSL": 0.00204474, "Razem": 0.00123002, "Lewica": 0.00147825, "BS": 0.00273277, "NF": 0.00168952, "MN": 0.0, "WiR": 0.00211682, "RDiP": 0.00156718, "PPS": 0.0011556, "Inni": 0.00175253, "Woch": 0.00150498, "Brzoska": 0.00169681, "Matysiak": 0.00132294}, "powiat starachowicki": {"KO": 0.00174189, "PiS": 0.00279168, "RozwojPlus": 0.00234001, "Konfederacja": 0.00198419, "KoronaPolska": 0.00269447, "PL2050": 0.00167331, "PSL": 0.0027147, "Razem": 0.00131398, "Lewica": 0.00153009, "BS": 0.00310924, "NF": 0.00174531, "MN": 0.0, "WiR": 0.00241543, "RDiP": 0.0029419, "PPS": 0.0011878, "Inni": 0.00211796, "Woch": 0.00231203, "Brzoska": 0.00196948, "Matysiak": 0.00147603}, "powiat staszowski": {"KO": 0.00093469, "PiS": 0.00281074, "RozwojPlus": 0.00229167, "Konfederacja": 0.00181605, "KoronaPolska": 0.00233322, "PL2050": 0.00111043, "PSL": 0.00210687, "Razem": 0.00102536, "Lewica": 0.00095375, "BS": 0.0025305, "NF": 0.00097288, "MN": 0.0, "WiR": 0.00165231, "RDiP": 0.00233703, "PPS": 0.00081214, "Inni": 0.00136908, "Woch": 0.00188561, "Brzoska": 0.00143969, "Matysiak": 0.00119699}, "powiat włoszczowski": {"KO": 0.00060036, "PiS": 0.00182854, "RozwojPlus": 0.00149948, "Konfederacja": 0.00129959, "KoronaPolska": 0.0015705, "PL2050": 0.00080396, "PSL": 0.00169818, "Razem": 0.00077034, "Lewica": 0.00070898, "BS": 0.00127706, "NF": 0.00064333, "MN": 0.0, "WiR": 0.00105509, "RDiP": 0.00104479, "PPS": 0.0005295, "Inni": 0.00081836, "Woch": 0.00109348, "Brzoska": 0.00097274, "Matysiak": 0.00087109}, "powiat kielce": {"KO": 0.00578147, "PiS": 0.00488857, "RozwojPlus": 0.00430513, "Konfederacja": 0.00382126, "KoronaPolska": 0.0048708, "PL2050": 0.005024, "PSL": 0.00697832, "Razem": 0.00450866, "Lewica": 0.00463007, "BS": 0.01034938, "NF": 0.00575105, "MN": 0.0, "WiR": 0.00543471, "RDiP": 0.00459157, "PPS": 0.0038353, "Inni": 0.00505685, "Woch": 0.00498061, "Brzoska": 0.00518942, "Matysiak": 0.0045458}, "powiat bartoszycki": {"KO": 0.00132902, "PiS": 0.00115435, "RozwojPlus": 0.00106463, "Konfederacja": 0.00119485, "KoronaPolska": 0.0011119, "PL2050": 0.00119522, "PSL": 0.00108431, "Razem": 0.00074305, "Lewica": 0.0010273, "BS": 0.00079729, "NF": 0.00101698, "MN": 0.0, "WiR": 0.00123426, "RDiP": 0.00120976, "PPS": 0.0012525, "Inni": 0.00090572, "Woch": 0.00102802, "Brzoska": 0.00124308, "Matysiak": 0.00080935}, "powiat braniewski": {"KO": 0.00091078, "PiS": 0.00078106, "RozwojPlus": 0.00073041, "Konfederacja": 0.00093025, "KoronaPolska": 0.0007056, "PL2050": 0.00091531, "PSL": 0.0009395, "Razem": 0.00051426, "Lewica": 0.00084402, "BS": 0.00066847, "NF": 0.00070979, "MN": 0.0, "WiR": 0.0007233, "RDiP": 0.0009898, "PPS": 0.00100703, "Inni": 0.00083798, "Woch": 0.00096225, "Brzoska": 0.00088451, "Matysiak": 0.00056477}, "powiat działdowski": {"KO": 0.00120869, "PiS": 0.00169969, "RozwojPlus": 0.00151291, "Konfederacja": 0.00162621, "KoronaPolska": 0.00136695, "PL2050": 0.00130657, "PSL": 0.00147983, "Razem": 0.00113136, "Lewica": 0.00132271, "BS": 0.00113507, "NF": 0.00098336, "MN": 0.0, "WiR": 0.00157268, "RDiP": 0.0014847, "PPS": 0.00128396, "Inni": 0.00123941, "Woch": 0.00143782, "Brzoska": 0.00137233, "Matysiak": 0.00119536}, "powiat elbląski": {"KO": 0.00127194, "PiS": 0.00115099, "RozwojPlus": 0.0010677, "Konfederacja": 0.00130821, "KoronaPolska": 0.00127281, "PL2050": 0.00125242, "PSL": 0.00131215, "Razem": 0.00084695, "Lewica": 0.00112255, "BS": 0.00098495, "NF": 0.00099285, "MN": 0.0, "WiR": 0.00112808, "RDiP": 0.00151219, "PPS": 0.00151684, "Inni": 0.00107633, "Woch": 0.00099687, "Brzoska": 0.00125148, "Matysiak": 0.00090083}, "powiat ełcki": {"KO": 0.0017775, "PiS": 0.0017998, "RozwojPlus": 0.00186074, "Konfederacja": 0.00219263, "KoronaPolska": 0.00218599, "PL2050": 0.00183062, "PSL": 0.00173604, "Razem": 0.00129719, "Lewica": 0.00153853, "BS": 0.00182969, "NF": 0.00142106, "MN": 0.0, "WiR": 0.00209691, "RDiP": 0.0019521, "PPS": 0.00190636, "Inni": 0.00185242, "Woch": 0.00182195, "Brzoska": 0.00186947, "Matysiak": 0.00139017}, "powiat giżycki": {"KO": 0.00154074, "PiS": 0.00104024, "RozwojPlus": 0.00110996, "Konfederacja": 0.0012045, "KoronaPolska": 0.00130499, "PL2050": 0.00126877, "PSL": 0.00135007, "Razem": 0.00082491, "Lewica": 0.0012383, "BS": 0.00163044, "NF": 0.00120721, "MN": 0.0, "WiR": 0.00108827, "RDiP": 0.00153969, "PPS": 0.00158658, "Inni": 0.00131581, "Woch": 0.00163684, "Brzoska": 0.00137298, "Matysiak": 0.00088665}, "powiat iławski": {"KO": 0.00208044, "PiS": 0.00224574, "RozwojPlus": 0.00205609, "Konfederacja": 0.00249789, "KoronaPolska": 0.00209909, "PL2050": 0.00216876, "PSL": 0.00269392, "Razem": 0.00166661, "Lewica": 0.00208956, "BS": 0.00164834, "NF": 0.00166127, "MN": 0.0, "WiR": 0.00191111, "RDiP": 0.00200709, "PPS": 0.00242317, "Inni": 0.00178385, "Woch": 0.00226097, "Brzoska": 0.00219792, "Matysiak": 0.00175512}, "powiat kętrzyński": {"KO": 0.00139455, "PiS": 0.00116484, "RozwojPlus": 0.00121358, "Konfederacja": 0.00131165, "KoronaPolska": 0.00122454, "PL2050": 0.00116151, "PSL": 0.00116225, "Razem": 0.00082701, "Lewica": 0.0011961, "BS": 0.00117387, "NF": 0.00110383, "MN": 0.0, "WiR": 0.00094892, "RDiP": 0.0014847, "PPS": 0.00113766, "Inni": 0.00102177, "Woch": 0.0013957, "Brzoska": 0.00132011, "Matysiak": 0.00089583}, "powiat lidzbarski": {"KO": 0.00093908, "PiS": 0.00079485, "RozwojPlus": 0.00073788, "Konfederacja": 0.00086306, "KoronaPolska": 0.00084398, "PL2050": 0.00081826, "PSL": 0.00082513, "Razem": 0.00062865, "Lewica": 0.00089828, "BS": 0.00075469, "NF": 0.00073945, "MN": 0.0, "WiR": 0.00074321, "RDiP": 0.00085233, "PPS": 0.00110773, "Inni": 0.00078028, "Woch": 0.00058609, "Brzoska": 0.00088792, "Matysiak": 0.00066053}, "powiat mrągowski": {"KO": 0.0012443, "PiS": 0.00099876, "RozwojPlus": 0.00104884, "Konfederacja": 0.00114972, "KoronaPolska": 0.00122293, "PL2050": 0.00111554, "PSL": 0.00122079, "Razem": 0.00083435, "Lewica": 0.00102609, "BS": 0.00118753, "NF": 0.00098621, "MN": 0.0, "WiR": 0.00102191, "RDiP": 0.00164967, "PPS": 0.00114381, "Inni": 0.00104138, "Woch": 0.00104713, "Brzoska": 0.00117935, "Matysiak": 0.00087638}, "powiat nidzicki": {"KO": 0.00061825, "PiS": 0.00082749, "RozwojPlus": 0.00082775, "Konfederacja": 0.00085101, "KoronaPolska": 0.00070318, "PL2050": 0.00049954, "PSL": 0.00058507, "Razem": 0.00047228, "Lewica": 0.00054862, "BS": 0.00055676, "NF": 0.00049662, "MN": 0.0, "WiR": 0.00071003, "RDiP": 0.00071486, "PPS": 0.00058421, "Inni": 0.00046556, "Woch": 0.00047587, "Brzoska": 0.00069131, "Matysiak": 0.0005209}, "powiat nowomiejski": {"KO": 0.00075695, "PiS": 0.00119891, "RozwojPlus": 0.00107699, "Konfederacja": 0.00136643, "KoronaPolska": 0.00092122, "PL2050": 0.0009337, "PSL": 0.00154317, "Razem": 0.00067903, "Lewica": 0.00079579, "BS": 0.00077599, "NF": 0.00061139, "MN": 0.0, "WiR": 0.00080293, "RDiP": 0.00082483, "PPS": 0.00098815, "Inni": 0.00082544, "Woch": 0.00095149, "Brzoska": 0.00097241, "Matysiak": 0.00074774}, "powiat olecki": {"KO": 0.00059077, "PiS": 0.00068802, "RozwojPlus": 0.00069943, "Konfederacja": 0.0007473, "KoronaPolska": 0.00095582, "PL2050": 0.00064051, "PSL": 0.00066116, "Razem": 0.0004198, "Lewica": 0.00051485, "BS": 0.00074007, "NF": 0.00047202, "MN": 0.0, "WiR": 0.00052423, "RDiP": 0.00120976, "PPS": 0.0007195, "Inni": 0.00076204, "Woch": 0.00068958, "Brzoska": 0.00064745, "Matysiak": 0.00046315}, "powiat olsztyński": {"KO": 0.00360703, "PiS": 0.00248782, "RozwojPlus": 0.00268678, "Konfederacja": 0.00328654, "KoronaPolska": 0.00267757, "PL2050": 0.00352334, "PSL": 0.00359424, "Razem": 0.0029533, "Lewica": 0.00363895, "BS": 0.00334968, "NF": 0.00294816, "MN": 0.0, "WiR": 0.00345725, "RDiP": 0.00327184, "PPS": 0.00386806, "Inni": 0.00323439, "Woch": 0.00303972, "Brzoska": 0.00335821, "Matysiak": 0.00295601}, "powiat ostródzki": {"KO": 0.0026034, "PiS": 0.00199641, "RozwojPlus": 0.00188293, "Konfederacja": 0.00236697, "KoronaPolska": 0.00233161, "PL2050": 0.00222494, "PSL": 0.00248249, "Razem": 0.00164982, "Lewica": 0.00226198, "BS": 0.00170616, "NF": 0.00202463, "MN": 0.0, "WiR": 0.00182484, "RDiP": 0.00250199, "PPS": 0.00258681, "Inni": 0.00191682, "Woch": 0.00224166, "Brzoska": 0.00242701, "Matysiak": 0.00173211}, "powiat piski": {"KO": 0.00097941, "PiS": 0.00140472, "RozwojPlus": 0.00140725, "Konfederacja": 0.00150769, "KoronaPolska": 0.00138304, "PL2050": 0.0010522, "PSL": 0.00109575, "Razem": 0.00074725, "Lewica": 0.0009031, "BS": 0.00129228, "NF": 0.00078981, "MN": 0.0, "WiR": 0.00122762, "RDiP": 0.00137472, "PPS": 0.00108232, "Inni": 0.00101197, "Woch": 0.00094556, "Brzoska": 0.00116017, "Matysiak": 0.00084056}, "powiat szczycieński": {"KO": 0.00150155, "PiS": 0.00169023, "RozwojPlus": 0.00172087, "Konfederacja": 0.00177781, "KoronaPolska": 0.00167187, "PL2050": 0.00152212, "PSL": 0.00190392, "Razem": 0.0011534, "Lewica": 0.00141072, "BS": 0.00142663, "NF": 0.00121369, "MN": 0.0, "WiR": 0.00169876, "RDiP": 0.00228204, "PPS": 0.00174032, "Inni": 0.00149223, "Woch": 0.00157069, "Brzoska": 0.00159907, "Matysiak": 0.00124032}, "powiat gołdapski": {"KO": 0.00056459, "PiS": 0.00047596, "RozwojPlus": 0.00050029, "Konfederacja": 0.00060122, "KoronaPolska": 0.00059779, "PL2050": 0.00052201, "PSL": 0.00054274, "Razem": 0.00028966, "Lewica": 0.00047748, "BS": 0.00065126, "NF": 0.00044388, "MN": 0.0, "WiR": 0.00024552, "RDiP": 0.00076984, "PPS": 0.00055346, "Inni": 0.0003896, "Woch": 0.00034385, "Brzoska": 0.00055481, "Matysiak": 0.00032816}, "powiat węgorzewski": {"KO": 0.00056036, "PiS": 0.00041979, "RozwojPlus": 0.00044614, "Konfederacja": 0.00052749, "KoronaPolska": 0.00046745, "PL2050": 0.00047298, "PSL": 0.00055496, "Razem": 0.00029911, "Lewica": 0.00051003, "BS": 0.00053741, "NF": 0.00044449, "MN": 0.0, "WiR": 0.00039151, "RDiP": 0.00074235, "PPS": 0.00050426, "Inni": 0.00048271, "Woch": 0.00045696, "Brzoska": 0.00052701, "Matysiak": 0.00032919}, "powiat elbląg": {"KO": 0.00362004, "PiS": 0.00227722, "RozwojPlus": 0.00216056, "Konfederacja": 0.00218609, "KoronaPolska": 0.00189232, "PL2050": 0.00287567, "PSL": 0.00268636, "Razem": 0.00221235, "Lewica": 0.00282627, "BS": 0.00230565, "NF": 0.00278234, "MN": 0.0, "WiR": 0.00242206, "RDiP": 0.00233703, "PPS": 0.00336726, "Inni": 0.00277739, "Woch": 0.002506, "Brzoska": 0.00300892, "Matysiak": 0.00225511}, "powiat olsztyn": {"KO": 0.0058992, "PiS": 0.00306627, "RozwojPlus": 0.00340112, "Konfederacja": 0.00369722, "KoronaPolska": 0.00294388, "PL2050": 0.00488916, "PSL": 0.00469983, "Razem": 0.00616373, "Lewica": 0.0058539, "BS": 0.00489359, "NF": 0.00488307, "MN": 0.0, "WiR": 0.00473132, "RDiP": 0.00365676, "PPS": 0.00678909, "Inni": 0.00493245, "Woch": 0.00481629, "Brzoska": 0.00492407, "Matysiak": 0.00579109}, "powiat chodzieski": {"KO": 0.00140658, "PiS": 0.00082457, "RozwojPlus": 0.00084314, "Konfederacja": 0.00110734, "KoronaPolska": 0.00111029, "PL2050": 0.00155685, "PSL": 0.00149046, "Razem": 0.00109673, "Lewica": 0.00129618, "BS": 0.00184402, "NF": 0.00122592, "MN": 0.0, "WiR": 0.00105509, "RDiP": 0.00123725, "PPS": 0.00110223, "Inni": 0.00110519, "Woch": 0.00135763, "Brzoska": 0.0012541, "Matysiak": 0.00108468}, "powiat czarnkowsko-trzcianecki": {"KO": 0.00226484, "PiS": 0.00177419, "RozwojPlus": 0.00172984, "Konfederacja": 0.00206998, "KoronaPolska": 0.00192933, "PL2050": 0.00225661, "PSL": 0.00235842, "Razem": 0.00144307, "Lewica": 0.0018255, "BS": 0.00181586, "NF": 0.00192959, "MN": 0.0, "WiR": 0.00145324, "RDiP": 0.00217206, "PPS": 0.00201748, "Inni": 0.0018602, "Woch": 0.00213065, "Brzoska": 0.00212845, "Matysiak": 0.00151915}, "powiat gnieźnieński": {"KO": 0.00383453, "PiS": 0.00318871, "RozwojPlus": 0.0029815, "Konfederacja": 0.0038154, "KoronaPolska": 0.00309594, "PL2050": 0.00461027, "PSL": 0.004355, "Razem": 0.00323247, "Lewica": 0.00438289, "BS": 0.00402917, "NF": 0.00373176, "MN": 0.0, "WiR": 0.00335107, "RDiP": 0.0034643, "PPS": 0.00276525, "Inni": 0.00364099, "Woch": 0.00379379, "Brzoska": 0.003746, "Matysiak": 0.00327184}, "powiat gostyński": {"KO": 0.00137943, "PiS": 0.0019127, "RozwojPlus": 0.00176624, "Konfederacja": 0.00253441, "KoronaPolska": 0.0020653, "PL2050": 0.00183369, "PSL": 0.00214411, "Razem": 0.00133392, "Lewica": 0.00170372, "BS": 0.00225165, "NF": 0.0013653, "MN": 0.0, "WiR": 0.00177176, "RDiP": 0.00200709, "PPS": 0.00147015, "Inni": 0.00176199, "Woch": 0.00168794, "Brzoska": 0.00174408, "Matysiak": 0.00142384}, "powiat grodziski (wielkopolskie)": {"KO": 0.00108803, "PiS": 0.00122489, "RozwojPlus": 0.00117448, "Konfederacja": 0.00156006, "KoronaPolska": 0.00126235, "PL2050": 0.00158749, "PSL": 0.00163255, "Razem": 0.00113976, "Lewica": 0.00127206, "BS": 0.0012943, "NF": 0.00099162, "MN": 0.0, "WiR": 0.00121435, "RDiP": 0.00156718, "PPS": 0.00144176, "Inni": 0.00130139, "Woch": 0.00154601, "Brzoska": 0.00123791, "Matysiak": 0.00115968}, "powiat jarociński": {"KO": 0.00145976, "PiS": 0.00182162, "RozwojPlus": 0.00167522, "Konfederacja": 0.00207101, "KoronaPolska": 0.00173141, "PL2050": 0.00191031, "PSL": 0.00213058, "Razem": 0.0015816, "Lewica": 0.00160726, "BS": 0.00201837, "NF": 0.00143427, "MN": 0.0, "WiR": 0.00191111, "RDiP": 0.00164967, "PPS": 0.00158455, "Inni": 0.00193135, "Woch": 0.00161244, "Brzoska": 0.00167285, "Matysiak": 0.00160956}, "powiat kaliski": {"KO": 0.00133048, "PiS": 0.00287214, "RozwojPlus": 0.00252898, "Konfederacja": 0.00257231, "KoronaPolska": 0.0023823, "PL2050": 0.00207171, "PSL": 0.00261214, "Razem": 0.00143572, "Lewica": 0.00168564, "BS": 0.00266022, "NF": 0.00133062, "MN": 0.0, "WiR": 0.00190447, "RDiP": 0.00156718, "PPS": 0.00153794, "Inni": 0.00214528, "Woch": 0.00175354, "Brzoska": 0.00188297, "Matysiak": 0.00159619}, "powiat kępiński": {"KO": 0.00131926, "PiS": 0.00143183, "RozwojPlus": 0.00132979, "Konfederacja": 0.00170787, "KoronaPolska": 0.0014466, "PL2050": 0.00154459, "PSL": 0.00158064, "Razem": 0.00107784, "Lewica": 0.00112376, "BS": 0.00147446, "NF": 0.00123916, "MN": 0.0, "WiR": 0.00139352, "RDiP": 0.00140222, "PPS": 0.00114392, "Inni": 0.00154805, "Woch": 0.00118245, "Brzoska": 0.00142059, "Matysiak": 0.00113099}, "powiat kolski": {"KO": 0.00140415, "PiS": 0.00293908, "RozwojPlus": 0.00250643, "Konfederacja": 0.00223535, "KoronaPolska": 0.00205323, "PL2050": 0.00144856, "PSL": 0.00176686, "Razem": 0.00133812, "Lewica": 0.00152768, "BS": 0.00213855, "NF": 0.00136774, "MN": 0.0, "WiR": 0.00163904, "RDiP": 0.00241951, "PPS": 0.0010292, "Inni": 0.00160812, "Woch": 0.00178728, "Brzoska": 0.00180626, "Matysiak": 0.00150013}, "powiat koniński": {"KO": 0.00202077, "PiS": 0.00469641, "RozwojPlus": 0.00400538, "Konfederacja": 0.00371273, "KoronaPolska": 0.00355856, "PL2050": 0.00264889, "PSL": 0.00288719, "Razem": 0.00249677, "Lewica": 0.00279975, "BS": 0.00460639, "NF": 0.00206839, "MN": 0.0, "WiR": 0.00297283, "RDiP": 0.00299689, "PPS": 0.00212054, "Inni": 0.002929, "Woch": 0.00344235, "Brzoska": 0.00282184, "Matysiak": 0.00270219}, "powiat kościański": {"KO": 0.00195832, "PiS": 0.00176184, "RozwojPlus": 0.00167665, "Konfederacja": 0.00218023, "KoronaPolska": 0.00185773, "PL2050": 0.00253652, "PSL": 0.00301571, "Razem": 0.00180934, "Lewica": 0.0022234, "BS": 0.00243209, "NF": 0.00191205, "MN": 0.0, "WiR": 0.00205046, "RDiP": 0.0019796, "PPS": 0.00171588, "Inni": 0.00213934, "Woch": 0.00211817, "Brzoska": 0.00201864, "Matysiak": 0.00182767}, "powiat krotoszyński": {"KO": 0.00153944, "PiS": 0.00194064, "RozwojPlus": 0.00178213, "Konfederacja": 0.00219194, "KoronaPolska": 0.00200094, "PL2050": 0.00193789, "PSL": 0.00238043, "Razem": 0.00146616, "Lewica": 0.00167961, "BS": 0.00238311, "NF": 0.00149844, "MN": 0.0, "WiR": 0.00183811, "RDiP": 0.00178714, "PPS": 0.00151676, "Inni": 0.00213637, "Woch": 0.00201674, "Brzoska": 0.0017744, "Matysiak": 0.0015333}, "powiat leszczyński": {"KO": 0.00134902, "PiS": 0.0013602, "RozwojPlus": 0.00130002, "Konfederacja": 0.00198212, "KoronaPolska": 0.00157854, "PL2050": 0.00198181, "PSL": 0.00214137, "Razem": 0.00138744, "Lewica": 0.00171819, "BS": 0.00237023, "NF": 0.00134592, "MN": 0.0, "WiR": 0.00165895, "RDiP": 0.00153969, "PPS": 0.00157184, "Inni": 0.00184221, "Woch": 0.00174848, "Brzoska": 0.00153062, "Matysiak": 0.00140577}, "powiat międzychodzki": {"KO": 0.00100233, "PiS": 0.00065629, "RozwojPlus": 0.00066206, "Konfederacja": 0.00093301, "KoronaPolska": 0.00099122, "PL2050": 0.00096639, "PSL": 0.00098918, "Razem": 0.00070107, "Lewica": 0.00094651, "BS": 0.00088089, "NF": 0.00087127, "MN": 0.0, "WiR": 0.00078302, "RDiP": 0.00076984, "PPS": 0.00077255, "Inni": 0.00084193, "Woch": 0.00106165, "Brzoska": 0.00093314, "Matysiak": 0.00071604}, "powiat nowotomyski": {"KO": 0.00211167, "PiS": 0.001489, "RozwojPlus": 0.00149261, "Konfederacja": 0.00207962, "KoronaPolska": 0.00196312, "PL2050": 0.00249974, "PSL": 0.0021266, "Razem": 0.00170334, "Lewica": 0.0020341, "BS": 0.00191273, "NF": 0.00185243, "MN": 0.0, "WiR": 0.00155277, "RDiP": 0.00142971, "PPS": 0.00215526, "Inni": 0.00190242, "Woch": 0.002144, "Brzoska": 0.00201332, "Matysiak": 0.00170986}, "powiat obornicki": {"KO": 0.00175197, "PiS": 0.00112357, "RozwojPlus": 0.00113316, "Konfederacja": 0.00143293, "KoronaPolska": 0.0013581, "PL2050": 0.00171008, "PSL": 0.00235182, "Razem": 0.00133917, "Lewica": 0.00164464, "BS": 0.00161084, "NF": 0.00152841, "MN": 0.0, "WiR": 0.00127407, "RDiP": 0.0014847, "PPS": 0.00165335, "Inni": 0.00150256, "Woch": 0.00160083, "Brzoska": 0.00159885, "Matysiak": 0.00134187}, "powiat ostrowski (wielkopolskie)": {"KO": 0.00407454, "PiS": 0.00397112, "RozwojPlus": 0.00369439, "Konfederacja": 0.00431394, "KoronaPolska": 0.00424566, "PL2050": 0.00453978, "PSL": 0.00451964, "Razem": 0.00329019, "Lewica": 0.00368476, "BS": 0.00470565, "NF": 0.00384776, "MN": 0.0, "WiR": 0.0038753, "RDiP": 0.00420665, "PPS": 0.00329196, "Inni": 0.00473923, "Woch": 0.00413277, "Brzoska": 0.00411114, "Matysiak": 0.00340044}, "powiat ostrzeszowski": {"KO": 0.00114543, "PiS": 0.00142917, "RozwojPlus": 0.00131917, "Konfederacja": 0.00166997, "KoronaPolska": 0.00147958, "PL2050": 0.00155072, "PSL": 0.00199501, "Razem": 0.00112402, "Lewica": 0.00119128, "BS": 0.0014938, "NF": 0.00111069, "MN": 0.0, "WiR": 0.00123426, "RDiP": 0.00151219, "PPS": 0.00116511, "Inni": 0.00147674, "Woch": 0.00139756, "Brzoska": 0.00133369, "Matysiak": 0.0011684}, "powiat pilski": {"KO": 0.00380314, "PiS": 0.00268732, "RozwojPlus": 0.00265384, "Konfederacja": 0.00325036, "KoronaPolska": 0.00286745, "PL2050": 0.00364286, "PSL": 0.00368101, "Razem": 0.00255764, "Lewica": 0.00344723, "BS": 0.00313382, "NF": 0.00328573, "MN": 0.0, "WiR": 0.00254814, "RDiP": 0.0024745, "PPS": 0.0030213, "Inni": 0.0028884, "Woch": 0.00329946, "Brzoska": 0.00347549, "Matysiak": 0.0026352}, "powiat pleszewski": {"KO": 0.00132804, "PiS": 0.00171462, "RozwojPlus": 0.00156586, "Konfederacja": 0.001835, "KoronaPolska": 0.00146591, "PL2050": 0.00169884, "PSL": 0.0020879, "Razem": 0.00104426, "Lewica": 0.00132391, "BS": 0.00176704, "NF": 0.0012656, "MN": 0.0, "WiR": 0.0015395, "RDiP": 0.0019521, "PPS": 0.00111003, "Inni": 0.00170553, "Woch": 0.00149348, "Brzoska": 0.00151401, "Matysiak": 0.00113874}, "powiat poznański": {"KO": 0.01714862, "PiS": 0.0062792, "RozwojPlus": 0.01065394, "Konfederacja": 0.01048701, "KoronaPolska": 0.00830063, "PL2050": 0.01736846, "PSL": 0.00983765, "Razem": 0.01501734, "Lewica": 0.01658988, "BS": 0.01155877, "NF": 0.01744427, "MN": 0.0, "WiR": 0.01187143, "RDiP": 0.00932061, "PPS": 0.02238527, "Inni": 0.01541314, "Woch": 0.01303689, "Brzoska": 0.01393026, "Matysiak": 0.0143339}, "powiat rawicki": {"KO": 0.00136154, "PiS": 0.00130891, "RozwojPlus": 0.00123992, "Konfederacja": 0.00170339, "KoronaPolska": 0.00168153, "PL2050": 0.00163244, "PSL": 0.00199716, "Razem": 0.0011681, "Lewica": 0.00158074, "BS": 0.00186757, "NF": 0.00132757, "MN": 0.0, "WiR": 0.00155941, "RDiP": 0.00137472, "PPS": 0.00117358, "Inni": 0.00158668, "Woch": 0.00137298, "Brzoska": 0.00145861, "Matysiak": 0.00120918}, "powiat słupecki": {"KO": 0.00119405, "PiS": 0.00171952, "RozwojPlus": 0.00151945, "Konfederacja": 0.00161657, "KoronaPolska": 0.00134442, "PL2050": 0.00150679, "PSL": 0.00195512, "Razem": 0.00113556, "Lewica": 0.0012383, "BS": 0.00293701, "NF": 0.00115641, "MN": 0.0, "WiR": 0.00122099, "RDiP": 0.00134723, "PPS": 0.00099813, "Inni": 0.00125213, "Woch": 0.00143106, "Brzoska": 0.00138096, "Matysiak": 0.00120121}, "powiat szamotulski": {"KO": 0.00286309, "PiS": 0.00175683, "RozwojPlus": 0.00177798, "Konfederacja": 0.0022984, "KoronaPolska": 0.00237264, "PL2050": 0.0029482, "PSL": 0.0027722, "Razem": 0.00224594, "Lewica": 0.00278045, "BS": 0.00238697, "NF": 0.00251022, "MN": 0.0, "WiR": 0.00187129, "RDiP": 0.00189712, "PPS": 0.0028294, "Inni": 0.00237182, "Woch": 0.00243504, "Brzoska": 0.00256695, "Matysiak": 0.00222806}, "powiat średzki (wielkopolskie)": {"KO": 0.00150204, "PiS": 0.00131371, "RozwojPlus": 0.00123376, "Konfederacja": 0.00169547, "KoronaPolska": 0.00139269, "PL2050": 0.00210134, "PSL": 0.0018967, "Razem": 0.0014798, "Lewica": 0.00181103, "BS": 0.00192876, "NF": 0.00148512, "MN": 0.0, "WiR": 0.00166558, "RDiP": 0.00153969, "PPS": 0.00132048, "Inni": 0.00153692, "Woch": 0.00192395, "Brzoska": 0.00153794, "Matysiak": 0.0014735}, "powiat śremski": {"KO": 0.00151391, "PiS": 0.00126584, "RozwojPlus": 0.0011954, "Konfederacja": 0.00169305, "KoronaPolska": 0.0015713, "PL2050": 0.0019624, "PSL": 0.00182634, "Razem": 0.00144307, "Lewica": 0.00190388, "BS": 0.00188172, "NF": 0.00150232, "MN": 0.0, "WiR": 0.00142669, "RDiP": 0.00252949, "PPS": 0.0013166, "Inni": 0.00164986, "Woch": 0.00152812, "Brzoska": 0.00153984, "Matysiak": 0.00144106}, "powiat turecki": {"KO": 0.00141992, "PiS": 0.00283961, "RozwojPlus": 0.00243699, "Konfederacja": 0.00225637, "KoronaPolska": 0.00233563, "PL2050": 0.00180406, "PSL": 0.00194064, "Razem": 0.00145566, "Lewica": 0.00178451, "BS": 0.00257211, "NF": 0.00141524, "MN": 0.0, "WiR": 0.00191774, "RDiP": 0.00189712, "PPS": 0.00130883, "Inni": 0.0016425, "Woch": 0.00186595, "Brzoska": 0.00183193, "Matysiak": 0.00159827}, "powiat wągrowiecki": {"KO": 0.00178205, "PiS": 0.0014387, "RozwojPlus": 0.00142088, "Konfederacja": 0.00186773, "KoronaPolska": 0.00165337, "PL2050": 0.00231586, "PSL": 0.00248356, "Razem": 0.00143257, "Lewica": 0.00179054, "BS": 0.00150045, "NF": 0.00157034, "MN": 0.0, "WiR": 0.00153287, "RDiP": 0.00200709, "PPS": 0.00162383, "Inni": 0.00153733, "Woch": 0.00167311, "Brzoska": 0.00177398, "Matysiak": 0.00146405}, "powiat wolsztyński": {"KO": 0.00140496, "PiS": 0.00123127, "RozwojPlus": 0.00122194, "Konfederacja": 0.00186601, "KoronaPolska": 0.00150211, "PL2050": 0.00185616, "PSL": 0.00202813, "Razem": 0.00131503, "Lewica": 0.00143243, "BS": 0.00156916, "NF": 0.00125068, "MN": 0.0, "WiR": 0.00145324, "RDiP": 0.00151219, "PPS": 0.00134335, "Inni": 0.00145289, "Woch": 0.0016262, "Brzoska": 0.00150438, "Matysiak": 0.00132753}, "powiat wrzesiński": {"KO": 0.00191263, "PiS": 0.00186775, "RozwojPlus": 0.00171763, "Konfederacja": 0.00214026, "KoronaPolska": 0.00192933, "PL2050": 0.0026826, "PSL": 0.00212088, "Razem": 0.00175372, "Lewica": 0.00217637, "BS": 0.00241318, "NF": 0.00186906, "MN": 0.0, "WiR": 0.00211018, "RDiP": 0.00252949, "PPS": 0.00159623, "Inni": 0.00207706, "Woch": 0.00228318, "Brzoska": 0.00197142, "Matysiak": 0.00178054}, "powiat złotowski": {"KO": 0.00169766, "PiS": 0.00127945, "RozwojPlus": 0.00126606, "Konfederacja": 0.00172544, "KoronaPolska": 0.00158096, "PL2050": 0.001801, "PSL": 0.00165993, "Razem": 0.00117544, "Lewica": 0.00142519, "BS": 0.0016942, "NF": 0.00145735, "MN": 0.0, "WiR": 0.0013537, "RDiP": 0.00181463, "PPS": 0.00151065, "Inni": 0.00133616, "Woch": 0.00166137, "Brzoska": 0.00162827, "Matysiak": 0.00121713}, "powiat kalisz": {"KO": 0.00325596, "PiS": 0.00206921, "RozwojPlus": 0.00197164, "Konfederacja": 0.00182398, "KoronaPolska": 0.00196393, "PL2050": 0.00236796, "PSL": 0.00260782, "Razem": 0.00228477, "Lewica": 0.00237894, "BS": 0.00445819, "NF": 0.00299266, "MN": 0.0, "WiR": 0.00197083, "RDiP": 0.00225454, "PPS": 0.0019828, "Inni": 0.00260881, "Woch": 0.00233443, "Brzoska": 0.00268929, "Matysiak": 0.00227125}, "powiat konin": {"KO": 0.00207183, "PiS": 0.0018568, "RozwojPlus": 0.0016594, "Konfederacja": 0.00132716, "KoronaPolska": 0.00133155, "PL2050": 0.00156093, "PSL": 0.00162507, "Razem": 0.00150394, "Lewica": 0.0019292, "BS": 0.0020559, "NF": 0.00195406, "MN": 0.0, "WiR": 0.00142669, "RDiP": 0.00167716, "PPS": 0.00131272, "Inni": 0.00153201, "Woch": 0.00165171, "Brzoska": 0.00182717, "Matysiak": 0.00154389}, "powiat leszno": {"KO": 0.00217622, "PiS": 0.00100313, "RozwojPlus": 0.00102361, "Konfederacja": 0.00126686, "KoronaPolska": 0.00103627, "PL2050": 0.00178772, "PSL": 0.00183687, "Razem": 0.0014819, "Lewica": 0.00205339, "BS": 0.00236765, "NF": 0.00204727, "MN": 0.0, "WiR": 0.00119444, "RDiP": 0.00129224, "PPS": 0.00135152, "Inni": 0.00166393, "Woch": 0.0014549, "Brzoska": 0.00176569, "Matysiak": 0.00145781}, "powiat poznań": {"KO": 0.02181002, "PiS": 0.00707626, "RozwojPlus": 0.01217715, "Konfederacja": 0.01013799, "KoronaPolska": 0.00793456, "PL2050": 0.01881702, "PSL": 0.01124145, "Razem": 0.03455698, "Lewica": 0.02515792, "BS": 0.01207147, "NF": 0.02366723, "MN": 0.0, "WiR": 0.0120705, "RDiP": 0.01152017, "PPS": 0.03530413, "Inni": 0.01722406, "Woch": 0.01703387, "Brzoska": 0.01695744, "Matysiak": 0.030914}, "powiat białogardzki": {"KO": 0.00117683, "PiS": 0.00086731, "RozwojPlus": 0.00081306, "Konfederacja": 0.00095609, "KoronaPolska": 0.00089869, "PL2050": 0.00073143, "PSL": 0.00082512, "Razem": 0.00061291, "Lewica": 0.00102368, "BS": 0.00087177, "NF": 0.00078909, "MN": 0.0, "WiR": 0.00071003, "RDiP": 0.00101729, "PPS": 0.00120963, "Inni": 0.00117146, "Woch": 0.00097481, "Brzoska": 0.00105099, "Matysiak": 0.00066422}, "powiat choszczeński": {"KO": 0.00110859, "PiS": 0.00096833, "RozwojPlus": 0.00089529, "Konfederacja": 0.00101535, "KoronaPolska": 0.00084076, "PL2050": 0.00099091, "PSL": 0.00096712, "Razem": 0.00070527, "Lewica": 0.00102247, "BS": 0.00083961, "NF": 0.00075375, "MN": 0.0, "WiR": 0.00067021, "RDiP": 0.00142971, "PPS": 0.00104101, "Inni": 0.00118557, "Woch": 0.00085242, "Brzoska": 0.00104791, "Matysiak": 0.00075059}, "powiat drawski": {"KO": 0.00150053, "PiS": 0.00106281, "RozwojPlus": 0.00100536, "Konfederacja": 0.00119072, "KoronaPolska": 0.00131867, "PL2050": 0.00111656, "PSL": 0.00141162, "Razem": 0.0007441, "Lewica": 0.00114425, "BS": 0.00100376, "NF": 0.00099168, "MN": 0.0, "WiR": 0.00082284, "RDiP": 0.00159468, "PPS": 0.00148087, "Inni": 0.00143256, "Woch": 0.00125663, "Brzoska": 0.00134356, "Matysiak": 0.00081195}, "powiat goleniowski": {"KO": 0.00234558, "PiS": 0.0016495, "RozwojPlus": 0.00157255, "Konfederacja": 0.00191115, "KoronaPolska": 0.00165095, "PL2050": 0.00175094, "PSL": 0.00182989, "Razem": 0.00159315, "Lewica": 0.00204736, "BS": 0.00166014, "NF": 0.00182462, "MN": 0.0, "WiR": 0.00158595, "RDiP": 0.00159468, "PPS": 0.00233302, "Inni": 0.0018797, "Woch": 0.00164876, "Brzoska": 0.00209417, "Matysiak": 0.00162674}, "powiat gryficki": {"KO": 0.00180203, "PiS": 0.00130707, "RozwojPlus": 0.00121995, "Konfederacja": 0.00115006, "KoronaPolska": 0.00116339, "PL2050": 0.00130452, "PSL": 0.00132966, "Razem": 0.00097604, "Lewica": 0.00130341, "BS": 0.00096418, "NF": 0.00136487, "MN": 0.0, "WiR": 0.00096219, "RDiP": 0.00170465, "PPS": 0.00128088, "Inni": 0.00116152, "Woch": 0.00118128, "Brzoska": 0.00153276, "Matysiak": 0.00103387}, "powiat gryfiński": {"KO": 0.00194642, "PiS": 0.00185832, "RozwojPlus": 0.00169812, "Konfederacja": 0.00173784, "KoronaPolska": 0.00182313, "PL2050": 0.00163244, "PSL": 0.00139046, "Razem": 0.00143677, "Lewica": 0.00152045, "BS": 0.00150759, "NF": 0.00150402, "MN": 0.0, "WiR": 0.00129398, "RDiP": 0.00156718, "PPS": 0.00235263, "Inni": 0.00164895, "Woch": 0.00160811, "Brzoska": 0.00184238, "Matysiak": 0.00148879}, "powiat kamieński": {"KO": 0.00158497, "PiS": 0.00098269, "RozwojPlus": 0.00093413, "Konfederacja": 0.000943, "KoronaPolska": 0.00095743, "PL2050": 0.00096843, "PSL": 0.0009295, "Razem": 0.00076614, "Lewica": 0.00112858, "BS": 0.00082758, "NF": 0.00119411, "MN": 0.0, "WiR": 0.00093565, "RDiP": 0.00175964, "PPS": 0.00129395, "Inni": 0.00099819, "Woch": 0.00133898, "Brzoska": 0.00129785, "Matysiak": 0.00081409}, "powiat kołobrzeski": {"KO": 0.00321158, "PiS": 0.00188712, "RozwojPlus": 0.00179067, "Konfederacja": 0.00165584, "KoronaPolska": 0.00170325, "PL2050": 0.00217591, "PSL": 0.00207938, "Razem": 0.00143362, "Lewica": 0.00237171, "BS": 0.00159493, "NF": 0.00210913, "MN": 0.0, "WiR": 0.00159922, "RDiP": 0.00173215, "PPS": 0.0029031, "Inni": 0.00248405, "Woch": 0.001847, "Brzoska": 0.0025699, "Matysiak": 0.00153872}, "powiat koszaliński": {"KO": 0.00202731, "PiS": 0.00136306, "RozwojPlus": 0.00130684, "Konfederacja": 0.00164654, "KoronaPolska": 0.00164291, "PL2050": 0.00180509, "PSL": 0.00193081, "Razem": 0.00111562, "Lewica": 0.00177848, "BS": 0.00164262, "NF": 0.00136326, "MN": 0.0, "WiR": 0.0014466, "RDiP": 0.0014572, "PPS": 0.0023826, "Inni": 0.00205005, "Woch": 0.00165517, "Brzoska": 0.00182233, "Matysiak": 0.00118798}, "powiat myśliborski": {"KO": 0.00159245, "PiS": 0.00129734, "RozwojPlus": 0.00120641, "Konfederacja": 0.00134921, "KoronaPolska": 0.00150774, "PL2050": 0.00113188, "PSL": 0.00101574, "Razem": 0.00093301, "Lewica": 0.00119851, "BS": 0.00112172, "NF": 0.00121394, "MN": 0.0, "WiR": 0.00085602, "RDiP": 0.00173215, "PPS": 0.0015096, "Inni": 0.00123412, "Woch": 0.00134164, "Brzoska": 0.00145191, "Matysiak": 0.00099388}, "powiat policki": {"KO": 0.00306685, "PiS": 0.00144334, "RozwojPlus": 0.00145668, "Konfederacja": 0.00178987, "KoronaPolska": 0.00169199, "PL2050": 0.00248033, "PSL": 0.00198927, "Razem": 0.00235089, "Lewica": 0.00252604, "BS": 0.0020849, "NF": 0.00238596, "MN": 0.0, "WiR": 0.00201064, "RDiP": 0.00151219, "PPS": 0.00339171, "Inni": 0.00246824, "Woch": 0.00212654, "Brzoska": 0.00247346, "Matysiak": 0.00226407}, "powiat pyrzycki": {"KO": 0.00075964, "PiS": 0.00102888, "RozwojPlus": 0.00091774, "Konfederacja": 0.00093094, "KoronaPolska": 0.00083433, "PL2050": 0.00074676, "PSL": 0.00074168, "Razem": 0.00059087, "Lewica": 0.00068486, "BS": 0.0007179, "NF": 0.00059673, "MN": 0.0, "WiR": 0.00058395, "RDiP": 0.00112727, "PPS": 0.00096719, "Inni": 0.00066632, "Woch": 0.00073886, "Brzoska": 0.00082569, "Matysiak": 0.00064194}, "powiat sławieński": {"KO": 0.00166875, "PiS": 0.00132626, "RozwojPlus": 0.00123467, "Konfederacja": 0.00142328, "KoronaPolska": 0.00134442, "PL2050": 0.00129124, "PSL": 0.00123334, "Razem": 0.0008543, "Lewica": 0.00136249, "BS": 0.00144187, "NF": 0.00111119, "MN": 0.0, "WiR": 0.00104845, "RDiP": 0.00126474, "PPS": 0.00177412, "Inni": 0.00165486, "Woch": 0.00131731, "Brzoska": 0.00152315, "Matysiak": 0.00093902}, "powiat stargardzki": {"KO": 0.00339578, "PiS": 0.00259539, "RozwojPlus": 0.00244019, "Konfederacja": 0.00271426, "KoronaPolska": 0.00257539, "PL2050": 0.00306773, "PSL": 0.00252554, "Razem": 0.00234459, "Lewica": 0.0027684, "BS": 0.00288157, "NF": 0.00262599, "MN": 0.0, "WiR": 0.00246851, "RDiP": 0.00217206, "PPS": 0.00327407, "Inni": 0.00288826, "Woch": 0.00264868, "Brzoska": 0.0030551, "Matysiak": 0.00240094}, "powiat szczecinecki": {"KO": 0.00196981, "PiS": 0.00161076, "RozwojPlus": 0.00148425, "Konfederacja": 0.00152837, "KoronaPolska": 0.00161395, "PL2050": 0.0014455, "PSL": 0.00147489, "Razem": 0.00107259, "Lewica": 0.00153251, "BS": 0.00142412, "NF": 0.00130859, "MN": 0.0, "WiR": 0.00136034, "RDiP": 0.00208958, "PPS": 0.00211868, "Inni": 0.00196889, "Woch": 0.00165695, "Brzoska": 0.00177147, "Matysiak": 0.00116066}, "powiat świdwiński": {"KO": 0.00116345, "PiS": 0.00096922, "RozwojPlus": 0.00089476, "Konfederacja": 0.00094713, "KoronaPolska": 0.0009526, "PL2050": 0.00090714, "PSL": 0.00105303, "Razem": 0.00061186, "Lewica": 0.00090913, "BS": 0.00078859, "NF": 0.00077223, "MN": 0.0, "WiR": 0.00076975, "RDiP": 0.00096231, "PPS": 0.00123895, "Inni": 0.00109383, "Woch": 0.00089773, "Brzoska": 0.00106423, "Matysiak": 0.0006715}, "powiat wałecki": {"KO": 0.00146104, "PiS": 0.00093507, "RozwojPlus": 0.00089935, "Konfederacja": 0.00112319, "KoronaPolska": 0.00103466, "PL2050": 0.0011421, "PSL": 0.00125931, "Razem": 0.00092986, "Lewica": 0.0012383, "BS": 0.00099378, "NF": 0.00098476, "MN": 0.0, "WiR": 0.00102191, "RDiP": 0.00079734, "PPS": 0.00159084, "Inni": 0.00144315, "Woch": 0.00119759, "Brzoska": 0.00128299, "Matysiak": 0.00095215}, "powiat łobeski": {"KO": 0.0008237, "PiS": 0.00071601, "RozwojPlus": 0.00065896, "Konfederacja": 0.00063222, "KoronaPolska": 0.00070882, "PL2050": 0.00068648, "PSL": 0.00079114, "Razem": 0.00047333, "Lewica": 0.00057273, "BS": 0.00050153, "NF": 0.00062321, "MN": 0.0, "WiR": 0.00049768, "RDiP": 0.0009898, "PPS": 0.00083649, "Inni": 0.00059373, "Woch": 0.00062205, "Brzoska": 0.00075059, "Matysiak": 0.0005096}, "powiat koszalin": {"KO": 0.00386312, "PiS": 0.00189332, "RozwojPlus": 0.00186836, "Konfederacja": 0.00207067, "KoronaPolska": 0.00195347, "PL2050": 0.00287159, "PSL": 0.00269034, "Razem": 0.00201924, "Lewica": 0.00322899, "BS": 0.00252437, "NF": 0.00258021, "MN": 0.0, "WiR": 0.00215, "RDiP": 0.00239202, "PPS": 0.00430333, "Inni": 0.0035179, "Woch": 0.0026485, "Brzoska": 0.00307925, "Matysiak": 0.0020739}, "powiat szczecin": {"KO": 0.013628, "PiS": 0.00718501, "RozwojPlus": 0.00702773, "Konfederacja": 0.00710883, "KoronaPolska": 0.00689829, "PL2050": 0.00992031, "PSL": 0.00826117, "Razem": 0.01291728, "Lewica": 0.01183441, "BS": 0.00943041, "NF": 0.0107842, "MN": 0.0, "WiR": 0.00856017, "RDiP": 0.00750598, "PPS": 0.01716112, "Inni": 0.01113301, "Woch": 0.00942316, "Brzoska": 0.01090099, "Matysiak": 0.01215934}, "powiat świnoujście": {"KO": 0.00158627, "PiS": 0.0007445, "RozwojPlus": 0.00073557, "Konfederacja": 0.00079037, "KoronaPolska": 0.00085283, "PL2050": 0.00082235, "PSL": 0.00070173, "Razem": 0.00077978, "Lewica": 0.00107312, "BS": 0.00070594, "NF": 0.00119071, "MN": 0.0, "WiR": 0.0007233, "RDiP": 0.00120976, "PPS": 0.00102601, "Inni": 0.00087892, "Woch": 0.00084198, "Brzoska": 0.00122092, "Matysiak": 0.00079783}};

const POWIAT_TURNOUT_SENSITIVITY = {"powiat bolesławiecki": 0.7461, "powiat dzierżoniowski": 0.7376, "powiat głogowski": 0.73, "powiat górowski": 0.4157, "powiat jaworski": 0.5394, "powiat karkonoski": 0.6414, "powiat kamiennogórski": 0.474, "powiat kłodzki": 0.8965, "powiat legnicki": 0.6006, "powiat lubański": 0.5687, "powiat lubiński": 0.8214, "powiat lwówecki": 0.4911, "powiat milicki": 0.4772, "powiat oleśnicki": 0.83, "powiat oławski": 0.7469, "powiat polkowicki": 0.6193, "powiat strzeliński": 0.5301, "powiat średzki (dolnośląskie)": 0.6441, "powiat świdnicki (dolnośląskie)": 0.9026, "powiat trzebnicki": 0.7974, "powiat wałbrzyski": 0.571, "powiat wołowski": 0.558, "powiat wrocławski": 1.037, "powiat ząbkowicki": 0.6058, "powiat zgorzelecki": 0.7341, "powiat złotoryjski": 0.4761, "powiat jelenia góra": 0.6793, "powiat legnica": 0.7489, "powiat wrocław": 1.4968, "powiat wałbrzych": 0.7448, "powiat aleksandrowski": 0.6023, "powiat brodnicki": 0.6857, "powiat bydgoski": 0.8949, "powiat chełmiński": 0.5443, "powiat golubsko-dobrzyński": 0.5018, "powiat grudziądzki": 0.4813, "powiat inowrocławski": 0.9295, "powiat lipnowski": 0.6088, "powiat mogileński": 0.5237, "powiat nakielski": 0.7247, "powiat radziejowski": 0.4727, "powiat rypiński": 0.4915, "powiat sępoleński": 0.4902, "powiat świecki": 0.7536, "powiat toruński": 0.8397, "powiat tucholski": 0.5533, "powiat wąbrzeski": 0.4116, "powiat włocławski": 0.7265, "powiat żniński": 0.658, "powiat bydgoszcz": 1.1954, "powiat grudziądz": 0.708, "powiat toruń": 1.0401, "powiat włocławek": 0.7998, "powiat bialski": 0.8796, "powiat biłgorajski": 0.7702, "powiat chełmski": 0.6693, "powiat hrubieszowski": 0.5829, "powiat janowski": 0.4941, "powiat krasnostawski": 0.6144, "powiat kraśnicki": 0.7351, "powiat lubartowski": 0.7654, "powiat lubelski": 0.9898, "powiat łęczyński": 0.6242, "powiat łukowski": 0.8207, "powiat opolski (lubelskie)": 0.5925, "powiat parczewski": 0.4647, "powiat puławski": 0.8635, "powiat radzyński": 0.8186, "powiat rycki": 0.5942, "powiat świdnicki (lubelskie)": 0.7061, "powiat tomaszowski (lubelskie)": 0.6813, "powiat włodawski": 0.4799, "powiat zamojski": 0.7952, "powiat biała podlaska": 0.6561, "powiat chełm": 0.6006, "powiat lublin": 1.2353, "powiat zamość": 0.6172, "powiat gorzowski": 0.686, "powiat krośnieński (lubuskie)": 0.5344, "powiat międzyrzecki": 0.5863, "powiat nowosolski": 0.6922, "powiat słubicki": 0.5163, "powiat strzelecko-drezdenecki": 0.4949, "powiat sulęciński": 0.4175, "powiat świebodziński": 0.5928, "powiat zielonogórski": 0.6983, "powiat żagański": 0.6568, "powiat żarski": 0.7236, "powiat wschowski": 0.4453, "powiat gorzów wielkopolski": 0.827, "powiat zielona góra": 0.9195, "powiat bełchatowski": 0.8443, "powiat kutnowski": 0.7479, "powiat łaski": 0.592, "powiat łęczycki": 0.5437, "powiat łowicki": 0.7297, "powiat łódzki wschodni": 0.7644, "powiat opoczyński": 0.7051, "powiat pabianicki": 0.892, "powiat pajęczański": 0.5694, "powiat piotrkowski": 0.7812, "powiat poddębicki": 0.5199, "powiat radomszczański": 0.8041, "powiat rawski": 0.5621, "powiat sieradzki": 0.832, "powiat skierniewicki": 0.5209, "powiat tomaszowski (łódzkie)": 0.8455, "powiat wieluński": 0.6905, "powiat wieruszowski": 0.5244, "powiat zduńskowolski": 0.6602, "powiat zgierski": 0.9835, "powiat brzeziński": 0.4601, "powiat łódź": 1.4434, "powiat piotrków trybunalski": 0.6793, "powiat skierniewice": 0.6042, "powiat bocheński": 0.8396, "powiat brzeski (małopolskie)": 0.7506, "powiat chrzanowski": 0.8628, "powiat dąbrowski": 0.5521, "powiat gorlicki": 0.7874, "powiat krakowski": 1.181, "powiat limanowski": 0.8502, "powiat miechowski": 0.5624, "powiat myślenicki": 0.8941, "powiat nowosądecki": 1.0113, "powiat nowotarski": 0.9478, "powiat olkuski": 0.8346, "powiat oświęcimski": 0.9412, "powiat proszowicki": 0.5221, "powiat suski": 0.7096, "powiat tarnowski": 1.0022, "powiat tatrzański": 0.6681, "powiat wadowicki": 0.9559, "powiat wielicki": 0.9568, "powiat kraków": 1.5606, "powiat nowy sącz": 0.7325, "powiat tarnów": 0.8188, "powiat białobrzeski": 0.4333, "powiat ciechanowski": 0.7495, "powiat garwoliński": 0.8338, "powiat gostyniński": 0.5022, "powiat grodziski (mazowieckie)": 0.8699, "powiat grójecki": 0.8312, "powiat kozienicki": 0.6214, "powiat legionowski": 0.9391, "powiat lipski": 0.3987, "powiat łosicki": 0.4198, "powiat makowski": 0.5153, "powiat miński": 1.0026, "powiat mławski": 0.641, "powiat nowodworski (mazowieckie)": 0.7437, "powiat ostrołęcki": 0.7252, "powiat ostrowski (mazowieckie)": 0.6664, "powiat otwocki": 0.9353, "powiat piaseczyński": 1.0855, "powiat płocki": 0.823, "powiat płoński": 0.7293, "powiat pruszkowski": 1.0441, "powiat przasnyski": 0.5376, "powiat przysuski": 0.4871, "powiat pułtuski": 0.592, "powiat radomski": 0.9135, "powiat siedlecki": 0.7363, "powiat sierpecki": 0.5316, "powiat sochaczewski": 0.7591, "powiat sokołowski": 0.5873, "powiat szydłowiecki": 0.4468, "powiat warszawski zachodni": 0.9448, "powiat węgrowski": 0.6521, "powiat wołomiński": 1.1616, "powiat wyszkowski": 0.7214, "powiat zwoleński": 0.4427, "powiat żuromiński": 0.4244, "powiat żyrardowski": 0.7374, "powiat ostrołęka": 0.5601, "powiat płock": 0.8322, "powiat radom": 1.0113, "powiat siedlce": 0.7508, "powiat warszawa": 1.9201, "powiat brzeski (opolskie)": 0.763, "powiat głubczycki": 0.5327, "powiat kędzierzyńsko-kozielski": 1.1724, "powiat kluczborski": 0.9081, "powiat krapkowicki": 1.2228, "powiat namysłowski": 0.556, "powiat nyski": 0.8959, "powiat oleski": 1.1405, "powiat opolski (opolskie)": 1.4161, "powiat prudnicki": 1.042, "powiat strzelecki": 1.2685, "powiat opole": 1.127, "powiat bieszczadzki": 0.3038, "powiat brzozowski": 0.6054, "powiat dębicki": 0.8608, "powiat jarosławski": 0.8142, "powiat jasielski": 0.7994, "powiat kolbuszowski": 0.5792, "powiat krośnieński (podkarpackie)": 0.8171, "powiat leżajski": 0.6113, "powiat lubaczowski": 0.5651, "powiat łańcucki": 0.7311, "powiat mielecki": 0.8671, "powiat niżański": 0.5883, "powiat przemyski": 0.6754, "powiat przeworski": 0.6777, "powiat ropczycko-sędziszowski": 0.6754, "powiat rzeszowski": 0.9806, "powiat sanocki": 0.7385, "powiat stalowowolski": 0.7545, "powiat strzyżowski": 0.6029, "powiat tarnobrzeski": 0.5647, "powiat leski": 0.3861, "powiat krosno": 0.5427, "powiat przemyśl": 0.5908, "powiat rzeszów": 1.0804, "powiat tarnobrzeg": 0.5051, "powiat augustowski": 0.5786, "powiat białostocki": 0.9535, "powiat bielski (podlaskie)": 0.5737, "powiat grajewski": 0.4431, "powiat hajnowski": 0.5955, "powiat kolneński": 0.3709, "powiat łomżyński": 0.5097, "powiat moniecki": 0.4181, "powiat sejneński": 0.2923, "powiat siemiatycki": 0.4937, "powiat sokólski": 0.6036, "powiat suwalski": 0.4274, "powiat wysokomazowiecki": 0.5497, "powiat zambrowski": 0.4624, "powiat białystok": 1.1768, "powiat łomża": 0.5695, "powiat suwałki": 0.6332, "powiat bytowski": 0.67, "powiat chojnicki": 0.7699, "powiat człuchowski": 0.5525, "powiat gdański": 0.9062, "powiat kartuski": 0.945, "powiat kościerski": 0.6972, "powiat kwidzyński": 0.6701, "powiat lęborski": 0.6331, "powiat malborski": 0.6079, "powiat nowodworski (pomorskie)": 0.4633, "powiat pucki": 0.8164, "powiat słupski": 0.7587, "powiat starogardzki": 0.8483, "powiat tczewski": 0.8178, "powiat wejherowski": 1.0884, "powiat sztumski": 0.4523, "powiat gdańsk": 1.3793, "powiat gdynia": 1.1383, "powiat słupsk": 0.7204, "powiat sopot": 0.5424, "powiat będziński": 0.936, "powiat bielski (śląskie)": 0.9808, "powiat cieszyński": 0.9896, "powiat częstochowski": 0.9036, "powiat gliwicki": 0.841, "powiat kłobucki": 0.7526, "powiat lubliniecki": 0.7168, "powiat mikołowski": 0.8336, "powiat myszkowski": 0.6748, "powiat pszczyński": 0.8477, "powiat raciborski": 0.7516, "powiat rybnicki": 0.7104, "powiat tarnogórski": 0.9141, "powiat bieruńsko-lędziński": 0.6533, "powiat wodzisławski": 0.909, "powiat zawierciański": 0.8436, "powiat żywiecki": 0.9116, "powiat bielsko-biała": 0.9695, "powiat bytom": 0.8862, "powiat chorzów": 0.803, "powiat częstochowa": 1.031, "powiat dąbrowa górnicza": 0.8548, "powiat gliwice": 0.9925, "powiat jastrzębie-zdrój": 0.7158, "powiat jaworzno": 0.7624, "powiat katowice": 1.184, "powiat mysłowice": 0.7085, "powiat piekary śląskie": 0.5903, "powiat ruda śląska": 0.887, "powiat rybnik": 0.8841, "powiat siemianowice śląskie": 0.6669, "powiat sosnowiec": 1.0158, "powiat świętochłowice": 0.5379, "powiat tychy": 0.8853, "powiat zabrze": 0.908, "powiat żory": 0.6337, "powiat buski": 0.6838, "powiat jędrzejowski": 0.7198, "powiat kazimierski": 0.3871, "powiat kielecki": 1.0489, "powiat konecki": 0.7087, "powiat opatowski": 0.5637, "powiat ostrowiecki": 0.7797, "powiat pińczowski": 0.4691, "powiat sandomierski": 0.6855, "powiat skarżyski": 0.6778, "powiat starachowicki": 0.7506, "powiat staszowski": 0.6715, "powiat włoszczowski": 0.5279, "powiat kielce": 1.0367, "powiat bartoszycki": 0.5324, "powiat braniewski": 0.4504, "powiat działdowski": 0.6077, "powiat elbląski": 0.5552, "powiat ełcki": 0.6972, "powiat giżycki": 0.6023, "powiat iławski": 0.7433, "powiat kętrzyński": 0.5667, "powiat lidzbarski": 0.4359, "powiat mrągowski": 0.5418, "powiat nidzicki": 0.3532, "powiat nowomiejski": 0.4873, "powiat olecki": 0.3854, "powiat olsztyński": 0.8805, "powiat ostródzki": 0.7542, "powiat piski": 0.5432, "powiat szczycieński": 0.6567, "powiat gołdapski": 0.2923, "powiat węgorzewski": 0.2923, "powiat elbląg": 0.8113, "powiat olsztyn": 1.0091, "powiat chodzieski": 0.5782, "powiat czarnkowsko-trzcianecki": 0.7209, "powiat gnieźnieński": 0.9201, "powiat gostyński": 0.6927, "powiat grodziski (wielkopolskie)": 0.6034, "powiat jarociński": 0.6854, "powiat kaliski": 0.726, "powiat kępiński": 0.6049, "powiat kolski": 0.6963, "powiat koniński": 0.8714, "powiat kościański": 0.7414, "powiat krotoszyński": 0.7096, "powiat leszczyński": 0.6731, "powiat międzychodzki": 0.4707, "powiat nowotomyski": 0.7181, "powiat obornicki": 0.6455, "powiat ostrowski (wielkopolskie)": 0.9539, "powiat ostrzeszowski": 0.6118, "powiat pilski": 0.8686, "powiat pleszewski": 0.6442, "powiat poznański": 1.3348, "powiat rawicki": 0.6325, "powiat słupecki": 0.629, "powiat szamotulski": 0.7867, "powiat średzki (wielkopolskie)": 0.6673, "powiat śremski": 0.6616, "powiat turecki": 0.7139, "powiat wągrowiecki": 0.6797, "powiat wolsztyński": 0.6402, "powiat wrzesiński": 0.7418, "powiat złotowski": 0.6449, "powiat kalisz": 0.7959, "powiat konin": 0.6704, "powiat leszno": 0.6521, "powiat poznań": 1.4299, "powiat białogardzki": 0.4833, "powiat choszczeński": 0.4909, "powiat drawski": 0.5645, "powiat goleniowski": 0.6969, "powiat gryficki": 0.5818, "powiat gryfiński": 0.6704, "powiat kamieński": 0.5458, "powiat kołobrzeski": 0.7344, "powiat koszaliński": 0.6697, "powiat myśliborski": 0.585, "powiat policki": 0.7608, "powiat pyrzycki": 0.4306, "powiat sławieński": 0.5999, "powiat stargardzki": 0.8271, "powiat szczecinecki": 0.6591, "powiat świdwiński": 0.4853, "powiat wałecki": 0.5518, "powiat łobeski": 0.3787, "powiat koszalin": 0.8216, "powiat szczecin": 1.2446, "powiat świnoujście": 0.4834};

// =========================================================================================
// PROFILE_POWIATOW_PREZYDENT / profilePowiatow
// Profile ideologiczne 380 powiatow do wyborow prezydenckich.
// Wyliczone jako srednia wazona poparcia partii w kazdym powiecie z wagami przypisanymi
// do reprezentatywnych kandydatow:
// - PiS: Przemyslaw Czarnek
// - KO: Donald Tusk
// - Konfederacja: Slawomir Mentzen
// - Korona Polska: Grzegorz Braun
// - Lewica: Magdalena Biejat
// - Razem: Adrian Zandberg
// - PSL: Wladyslaw Kosiniak-Kamysz
// - PL2050: Katarzyna Pelczynska-Nalecz
//
// Skale wartosci:
// - aborcja: 0 (za) - 10 (przeciw)
// - lgbt: 0 (za) - 10 (przeciw)
// - gospodarka: 0 (socjalizm) - 10 (kapitalizm)
// - kosmopolityzmNacjonalizm: 0 (kosmopolityzm) - 10 (nacjonalizm)
// - geopolityka (ue, rosja, usa): 0 (anty) - 10 (pro)
// - mediaTradycyjne: 0 - 100
// - mediaInternetowe: 0 - 100
// - glosy: szacowana liczba glosow w powiecie
// =========================================================================================
const PROFILE_POWIATOW_PREZYDENT = {
  "powiat jelenia góra": {
    "aborcja": 4.703,
    "lgbt": 4.914,
    "gospodarka": 6.583,
    "kosmopolityzmNacjonalizm": 4.571,
    "ue": 5.837,
    "rosja": 1.375,
    "usa": 7.622,
    "mediaTradycyjne": 73.446,
    "mediaInternetowe": 78.882,
    "glosy": 42104,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 3.835,
      "lgbt": 4.382,
      "gospodarka": 6.19,
      "kosmopolityzmNacjonalizm": 4.607,
      "ue": 5.852,
      "rosja": 1.382,
      "usa": 7.418
    }
  },
  "powiat legnica": {
    "aborcja": 5.323,
    "lgbt": 5.483,
    "gospodarka": 6.696,
    "kosmopolityzmNacjonalizm": 5.11,
    "ue": 5.249,
    "rosja": 1.518,
    "usa": 7.539,
    "mediaTradycyjne": 70.402,
    "mediaInternetowe": 77.159,
    "glosy": 47856,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.205,
      "lgbt": 4.803,
      "gospodarka": 6.222,
      "kosmopolityzmNacjonalizm": 5.152,
      "ue": 5.23,
      "rosja": 1.54,
      "usa": 7.346
    }
  },
  "powiat wałbrzych": {
    "aborcja": 4.769,
    "lgbt": 4.973,
    "gospodarka": 6.61,
    "kosmopolityzmNacjonalizm": 4.623,
    "ue": 5.781,
    "rosja": 1.397,
    "usa": 7.619,
    "mediaTradycyjne": 73.219,
    "mediaInternetowe": 78.876,
    "glosy": 50166,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 3.871,
      "lgbt": 4.422,
      "gospodarka": 6.215,
      "kosmopolityzmNacjonalizm": 4.661,
      "ue": 5.792,
      "rosja": 1.408,
      "usa": 7.413
    }
  },
  "powiat wrocław": {
    "aborcja": 4.297,
    "lgbt": 4.429,
    "gospodarka": 6.095,
    "kosmopolityzmNacjonalizm": 4.304,
    "ue": 6.025,
    "rosja": 1.336,
    "usa": 7.295,
    "mediaTradycyjne": 69.366,
    "mediaInternetowe": 76.825,
    "glosy": 430857,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 3.49,
      "lgbt": 3.987,
      "gospodarka": 5.737,
      "kosmopolityzmNacjonalizm": 4.343,
      "ue": 6.004,
      "rosja": 1.369,
      "usa": 7.069
    }
  },
  "powiat bolesławiecki": {
    "aborcja": 5.839,
    "lgbt": 5.962,
    "gospodarka": 6.938,
    "kosmopolityzmNacjonalizm": 5.552,
    "ue": 4.777,
    "rosja": 1.8,
    "usa": 7.395,
    "mediaTradycyjne": 68.813,
    "mediaInternetowe": 77.94,
    "glosy": 46849,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.532,
      "lgbt": 5.163,
      "gospodarka": 6.442,
      "kosmopolityzmNacjonalizm": 5.599,
      "ue": 4.738,
      "rosja": 1.851,
      "usa": 7.187
    }
  },
  "powiat dzierżoniowski": {
    "aborcja": 5.585,
    "lgbt": 5.732,
    "gospodarka": 6.843,
    "kosmopolityzmNacjonalizm": 5.333,
    "ue": 5.014,
    "rosja": 1.695,
    "usa": 7.446,
    "mediaTradycyjne": 69.798,
    "mediaInternetowe": 77.831,
    "glosy": 49985,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.386,
      "lgbt": 4.999,
      "gospodarka": 6.363,
      "kosmopolityzmNacjonalizm": 5.376,
      "ue": 4.988,
      "rosja": 1.731,
      "usa": 7.243
    }
  },
  "powiat górowski": {
    "aborcja": 6.077,
    "lgbt": 6.162,
    "gospodarka": 6.945,
    "kosmopolityzmNacjonalizm": 5.786,
    "ue": 4.506,
    "rosja": 1.948,
    "usa": 7.223,
    "mediaTradycyjne": 66.393,
    "mediaInternetowe": 77.236,
    "glosy": 16238,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.679,
      "lgbt": 5.324,
      "gospodarka": 6.421,
      "kosmopolityzmNacjonalizm": 5.836,
      "ue": 4.446,
      "rosja": 2.014,
      "usa": 7.01
    }
  },
  "powiat głogowski": {
    "aborcja": 5.647,
    "lgbt": 5.782,
    "gospodarka": 6.787,
    "kosmopolityzmNacjonalizm": 5.394,
    "ue": 4.944,
    "rosja": 1.608,
    "usa": 7.501,
    "mediaTradycyjne": 69.046,
    "mediaInternetowe": 76.695,
    "glosy": 46658,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.397,
      "lgbt": 5.023,
      "gospodarka": 6.274,
      "kosmopolityzmNacjonalizm": 5.439,
      "ue": 4.909,
      "rosja": 1.638,
      "usa": 7.311
    }
  },
  "powiat jaworski": {
    "aborcja": 6.006,
    "lgbt": 6.127,
    "gospodarka": 6.915,
    "kosmopolityzmNacjonalizm": 5.705,
    "ue": 4.613,
    "rosja": 1.796,
    "usa": 7.378,
    "mediaTradycyjne": 67.781,
    "mediaInternetowe": 76.431,
    "glosy": 25197,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.659,
      "lgbt": 5.308,
      "gospodarka": 6.368,
      "kosmopolityzmNacjonalizm": 5.748,
      "ue": 4.567,
      "rosja": 1.836,
      "usa": 7.188
    }
  },
  "powiat kamiennogórski": {
    "aborcja": 5.428,
    "lgbt": 5.577,
    "gospodarka": 6.743,
    "kosmopolityzmNacjonalizm": 5.202,
    "ue": 5.15,
    "rosja": 1.589,
    "usa": 7.492,
    "mediaTradycyjne": 69.837,
    "mediaInternetowe": 77.323,
    "glosy": 21653,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.271,
      "lgbt": 4.876,
      "gospodarka": 6.264,
      "kosmopolityzmNacjonalizm": 5.247,
      "ue": 5.125,
      "rosja": 1.618,
      "usa": 7.294
    }
  },
  "powiat karkonoski": {
    "aborcja": 4.941,
    "lgbt": 5.127,
    "gospodarka": 6.648,
    "kosmopolityzmNacjonalizm": 4.772,
    "ue": 5.615,
    "rosja": 1.485,
    "usa": 7.547,
    "mediaTradycyjne": 72.221,
    "mediaInternetowe": 78.647,
    "glosy": 35162,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 3.978,
      "lgbt": 4.54,
      "gospodarka": 6.241,
      "kosmopolityzmNacjonalizm": 4.812,
      "ue": 5.615,
      "rosja": 1.506,
      "usa": 7.338
    }
  },
  "powiat kłodzki": {
    "aborcja": 5.454,
    "lgbt": 5.616,
    "gospodarka": 6.832,
    "kosmopolityzmNacjonalizm": 5.215,
    "ue": 5.146,
    "rosja": 1.687,
    "usa": 7.449,
    "mediaTradycyjne": 70.555,
    "mediaInternetowe": 78.215,
    "glosy": 80269,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.324,
      "lgbt": 4.923,
      "gospodarka": 6.372,
      "kosmopolityzmNacjonalizm": 5.255,
      "ue": 5.128,
      "rosja": 1.72,
      "usa": 7.243
    }
  },
  "powiat legnicki": {
    "aborcja": 6.136,
    "lgbt": 6.241,
    "gospodarka": 6.998,
    "kosmopolityzmNacjonalizm": 5.803,
    "ue": 4.511,
    "rosja": 1.811,
    "usa": 7.426,
    "mediaTradycyjne": 67.749,
    "mediaInternetowe": 76.969,
    "glosy": 29404,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.703,
      "lgbt": 5.365,
      "gospodarka": 6.454,
      "kosmopolityzmNacjonalizm": 5.854,
      "ue": 4.458,
      "rosja": 1.862,
      "usa": 7.23
    }
  },
  "powiat lubański": {
    "aborcja": 5.456,
    "lgbt": 5.61,
    "gospodarka": 6.776,
    "kosmopolityzmNacjonalizm": 5.208,
    "ue": 5.15,
    "rosja": 1.567,
    "usa": 7.546,
    "mediaTradycyjne": 70.373,
    "mediaInternetowe": 77.496,
    "glosy": 27214,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.283,
      "lgbt": 4.893,
      "gospodarka": 6.299,
      "kosmopolityzmNacjonalizm": 5.255,
      "ue": 5.127,
      "rosja": 1.596,
      "usa": 7.35
    }
  },
  "powiat lubiński": {
    "aborcja": 5.901,
    "lgbt": 6.025,
    "gospodarka": 6.872,
    "kosmopolityzmNacjonalizm": 5.613,
    "ue": 4.712,
    "rosja": 1.686,
    "usa": 7.472,
    "mediaTradycyjne": 68.295,
    "mediaInternetowe": 76.469,
    "glosy": 57519,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.56,
      "lgbt": 5.207,
      "gospodarka": 6.33,
      "kosmopolityzmNacjonalizm": 5.659,
      "ue": 4.669,
      "rosja": 1.722,
      "usa": 7.286
    }
  },
  "powiat lwówecki": {
    "aborcja": 5.655,
    "lgbt": 5.807,
    "gospodarka": 6.841,
    "kosmopolityzmNacjonalizm": 5.392,
    "ue": 4.953,
    "rosja": 1.74,
    "usa": 7.394,
    "mediaTradycyjne": 69.515,
    "mediaInternetowe": 77.264,
    "glosy": 22135,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.464,
      "lgbt": 5.08,
      "gospodarka": 6.345,
      "kosmopolityzmNacjonalizm": 5.429,
      "ue": 4.925,
      "rosja": 1.772,
      "usa": 7.196
    }
  },
  "powiat milicki": {
    "aborcja": 5.969,
    "lgbt": 6.061,
    "gospodarka": 6.927,
    "kosmopolityzmNacjonalizm": 5.668,
    "ue": 4.636,
    "rosja": 1.848,
    "usa": 7.332,
    "mediaTradycyjne": 67.312,
    "mediaInternetowe": 77.417,
    "glosy": 19147,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.585,
      "lgbt": 5.225,
      "gospodarka": 6.422,
      "kosmopolityzmNacjonalizm": 5.724,
      "ue": 4.58,
      "rosja": 1.912,
      "usa": 7.119
    }
  },
  "powiat oleśnicki": {
    "aborcja": 5.36,
    "lgbt": 5.482,
    "gospodarka": 6.693,
    "kosmopolityzmNacjonalizm": 5.138,
    "ue": 5.197,
    "rosja": 1.594,
    "usa": 7.452,
    "mediaTradycyjne": 69.134,
    "mediaInternetowe": 77.525,
    "glosy": 59310,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.184,
      "lgbt": 4.779,
      "gospodarka": 6.242,
      "kosmopolityzmNacjonalizm": 5.196,
      "ue": 5.161,
      "rosja": 1.641,
      "usa": 7.24
    }
  },
  "powiat oławski": {
    "aborcja": 5.626,
    "lgbt": 5.743,
    "gospodarka": 6.813,
    "kosmopolityzmNacjonalizm": 5.394,
    "ue": 4.928,
    "rosja": 1.78,
    "usa": 7.321,
    "mediaTradycyjne": 68.381,
    "mediaInternetowe": 77.808,
    "glosy": 44599,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.392,
      "lgbt": 5.001,
      "gospodarka": 6.339,
      "kosmopolityzmNacjonalizm": 5.439,
      "ue": 4.888,
      "rosja": 1.832,
      "usa": 7.107
    }
  },
  "powiat polkowicki": {
    "aborcja": 6.5,
    "lgbt": 6.581,
    "gospodarka": 7.033,
    "kosmopolityzmNacjonalizm": 6.129,
    "ue": 4.152,
    "rosja": 1.931,
    "usa": 7.311,
    "mediaTradycyjne": 65.601,
    "mediaInternetowe": 75.52,
    "glosy": 32388,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.951,
      "lgbt": 5.641,
      "gospodarka": 6.43,
      "kosmopolityzmNacjonalizm": 6.179,
      "ue": 4.08,
      "rosja": 1.986,
      "usa": 7.125
    }
  },
  "powiat strzeliński": {
    "aborcja": 6.019,
    "lgbt": 6.133,
    "gospodarka": 6.966,
    "kosmopolityzmNacjonalizm": 5.719,
    "ue": 4.601,
    "rosja": 1.786,
    "usa": 7.426,
    "mediaTradycyjne": 68.059,
    "mediaInternetowe": 77.209,
    "glosy": 23833,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.635,
      "lgbt": 5.287,
      "gospodarka": 6.43,
      "kosmopolityzmNacjonalizm": 5.766,
      "ue": 4.555,
      "rosja": 1.832,
      "usa": 7.231
    }
  },
  "powiat trzebnicki": {
    "aborcja": 5.631,
    "lgbt": 5.743,
    "gospodarka": 6.793,
    "kosmopolityzmNacjonalizm": 5.397,
    "ue": 4.921,
    "rosja": 1.748,
    "usa": 7.343,
    "mediaTradycyjne": 68.164,
    "mediaInternetowe": 77.538,
    "glosy": 51495,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.382,
      "lgbt": 4.994,
      "gospodarka": 6.313,
      "kosmopolityzmNacjonalizm": 5.446,
      "ue": 4.879,
      "rosja": 1.8,
      "usa": 7.131
    }
  },
  "powiat wałbrzyski": {
    "aborcja": 5.146,
    "lgbt": 5.314,
    "gospodarka": 6.739,
    "kosmopolityzmNacjonalizm": 4.954,
    "ue": 5.417,
    "rosja": 1.638,
    "usa": 7.438,
    "mediaTradycyjne": 71.256,
    "mediaInternetowe": 78.874,
    "glosy": 27635,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.122,
      "lgbt": 4.692,
      "gospodarka": 6.327,
      "kosmopolityzmNacjonalizm": 4.995,
      "ue": 5.407,
      "rosja": 1.672,
      "usa": 7.22
    }
  },
  "powiat wołowski": {
    "aborcja": 5.749,
    "lgbt": 5.869,
    "gospodarka": 6.839,
    "kosmopolityzmNacjonalizm": 5.5,
    "ue": 4.82,
    "rosja": 1.781,
    "usa": 7.337,
    "mediaTradycyjne": 68.076,
    "mediaInternetowe": 77.268,
    "glosy": 25788,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.481,
      "lgbt": 5.105,
      "gospodarka": 6.335,
      "kosmopolityzmNacjonalizm": 5.545,
      "ue": 4.779,
      "rosja": 1.827,
      "usa": 7.133
    }
  },
  "powiat wrocławski": {
    "aborcja": 5.03,
    "lgbt": 5.158,
    "gospodarka": 6.595,
    "kosmopolityzmNacjonalizm": 4.869,
    "ue": 5.473,
    "rosja": 1.585,
    "usa": 7.389,
    "mediaTradycyjne": 69.762,
    "mediaInternetowe": 78.347,
    "glosy": 110942,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 3.98,
      "lgbt": 4.539,
      "gospodarka": 6.199,
      "kosmopolityzmNacjonalizm": 4.923,
      "ue": 5.446,
      "rosja": 1.635,
      "usa": 7.161
    }
  },
  "powiat zgorzelecki": {
    "aborcja": 5.686,
    "lgbt": 5.818,
    "gospodarka": 6.838,
    "kosmopolityzmNacjonalizm": 5.437,
    "ue": 4.894,
    "rosja": 1.756,
    "usa": 7.367,
    "mediaTradycyjne": 68.714,
    "mediaInternetowe": 77.487,
    "glosy": 45809,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.449,
      "lgbt": 5.069,
      "gospodarka": 6.342,
      "kosmopolityzmNacjonalizm": 5.481,
      "ue": 4.859,
      "rosja": 1.798,
      "usa": 7.163
    }
  },
  "powiat ząbkowicki": {
    "aborcja": 5.863,
    "lgbt": 5.995,
    "gospodarka": 6.913,
    "kosmopolityzmNacjonalizm": 5.564,
    "ue": 4.768,
    "rosja": 1.759,
    "usa": 7.425,
    "mediaTradycyjne": 68.785,
    "mediaInternetowe": 77.121,
    "glosy": 31211,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.563,
      "lgbt": 5.2,
      "gospodarka": 6.397,
      "kosmopolityzmNacjonalizm": 5.61,
      "ue": 4.729,
      "rosja": 1.8,
      "usa": 7.228
    }
  },
  "powiat złotoryjski": {
    "aborcja": 5.754,
    "lgbt": 5.903,
    "gospodarka": 6.88,
    "kosmopolityzmNacjonalizm": 5.476,
    "ue": 4.872,
    "rosja": 1.674,
    "usa": 7.496,
    "mediaTradycyjne": 69.473,
    "mediaInternetowe": 77.015,
    "glosy": 21342,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.501,
      "lgbt": 5.134,
      "gospodarka": 6.359,
      "kosmopolityzmNacjonalizm": 5.518,
      "ue": 4.842,
      "rosja": 1.702,
      "usa": 7.308
    }
  },
  "powiat średzki (dolnośląskie)": {
    "aborcja": 5.732,
    "lgbt": 5.833,
    "gospodarka": 6.859,
    "kosmopolityzmNacjonalizm": 5.471,
    "ue": 4.845,
    "rosja": 1.776,
    "usa": 7.362,
    "mediaTradycyjne": 68.071,
    "mediaInternetowe": 77.944,
    "glosy": 33610,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.424,
      "lgbt": 5.045,
      "gospodarka": 6.382,
      "kosmopolityzmNacjonalizm": 5.526,
      "ue": 4.797,
      "rosja": 1.837,
      "usa": 7.145
    }
  },
  "powiat świdnicki (dolnośląskie)": {
    "aborcja": 5.382,
    "lgbt": 5.536,
    "gospodarka": 6.769,
    "kosmopolityzmNacjonalizm": 5.155,
    "ue": 5.203,
    "rosja": 1.602,
    "usa": 7.5,
    "mediaTradycyjne": 70.46,
    "mediaInternetowe": 78.0,
    "glosy": 82435,
    "woj": "dolnośląskie",
    "elektorat": {
      "aborcja": 4.24,
      "lgbt": 4.839,
      "gospodarka": 6.311,
      "kosmopolityzmNacjonalizm": 5.2,
      "ue": 5.182,
      "rosja": 1.635,
      "usa": 7.295
    }
  },
  "powiat bydgoszcz": {
    "aborcja": 4.558,
    "lgbt": 4.739,
    "gospodarka": 6.414,
    "kosmopolityzmNacjonalizm": 4.445,
    "ue": 5.941,
    "rosja": 1.306,
    "usa": 7.58,
    "mediaTradycyjne": 72.219,
    "mediaInternetowe": 77.922,
    "glosy": 193319,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 3.695,
      "lgbt": 4.227,
      "gospodarka": 6.038,
      "kosmopolityzmNacjonalizm": 4.491,
      "ue": 5.94,
      "rosja": 1.323,
      "usa": 7.369
    }
  },
  "powiat grudziądz": {
    "aborcja": 4.762,
    "lgbt": 4.941,
    "gospodarka": 6.546,
    "kosmopolityzmNacjonalizm": 4.597,
    "ue": 5.792,
    "rosja": 1.367,
    "usa": 7.613,
    "mediaTradycyjne": 72.392,
    "mediaInternetowe": 78.369,
    "glosy": 45640,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 3.825,
      "lgbt": 4.376,
      "gospodarka": 6.161,
      "kosmopolityzmNacjonalizm": 4.649,
      "ue": 5.788,
      "rosja": 1.39,
      "usa": 7.401
    }
  },
  "powiat toruń": {
    "aborcja": 4.562,
    "lgbt": 4.72,
    "gospodarka": 6.344,
    "kosmopolityzmNacjonalizm": 4.464,
    "ue": 5.9,
    "rosja": 1.312,
    "usa": 7.519,
    "mediaTradycyjne": 71.253,
    "mediaInternetowe": 77.619,
    "glosy": 117819,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 3.665,
      "lgbt": 4.196,
      "gospodarka": 5.968,
      "kosmopolityzmNacjonalizm": 4.512,
      "ue": 5.888,
      "rosja": 1.339,
      "usa": 7.304
    }
  },
  "powiat włocławek": {
    "aborcja": 4.702,
    "lgbt": 4.895,
    "gospodarka": 6.494,
    "kosmopolityzmNacjonalizm": 4.572,
    "ue": 5.821,
    "rosja": 1.341,
    "usa": 7.596,
    "mediaTradycyjne": 72.295,
    "mediaInternetowe": 77.861,
    "glosy": 55285,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 3.814,
      "lgbt": 4.362,
      "gospodarka": 6.089,
      "kosmopolityzmNacjonalizm": 4.615,
      "ue": 5.824,
      "rosja": 1.35,
      "usa": 7.394
    }
  },
  "powiat aleksandrowski": {
    "aborcja": 5.789,
    "lgbt": 5.919,
    "gospodarka": 6.863,
    "kosmopolityzmNacjonalizm": 5.489,
    "ue": 4.846,
    "rosja": 1.669,
    "usa": 7.494,
    "mediaTradycyjne": 68.867,
    "mediaInternetowe": 76.832,
    "glosy": 32217,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.49,
      "lgbt": 5.127,
      "gospodarka": 6.348,
      "kosmopolityzmNacjonalizm": 5.543,
      "ue": 4.806,
      "rosja": 1.708,
      "usa": 7.3
    }
  },
  "powiat brodnicki": {
    "aborcja": 6.158,
    "lgbt": 6.255,
    "gospodarka": 7.008,
    "kosmopolityzmNacjonalizm": 5.773,
    "ue": 4.535,
    "rosja": 1.898,
    "usa": 7.351,
    "mediaTradycyjne": 67.591,
    "mediaInternetowe": 76.997,
    "glosy": 40466,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.731,
      "lgbt": 5.385,
      "gospodarka": 6.494,
      "kosmopolityzmNacjonalizm": 5.834,
      "ue": 4.472,
      "rosja": 1.965,
      "usa": 7.139
    }
  },
  "powiat bydgoski": {
    "aborcja": 5.048,
    "lgbt": 5.189,
    "gospodarka": 6.643,
    "kosmopolityzmNacjonalizm": 4.853,
    "ue": 5.503,
    "rosja": 1.577,
    "usa": 7.443,
    "mediaTradycyjne": 70.525,
    "mediaInternetowe": 78.483,
    "glosy": 74280,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.006,
      "lgbt": 4.567,
      "gospodarka": 6.253,
      "kosmopolityzmNacjonalizm": 4.909,
      "ue": 5.479,
      "rosja": 1.625,
      "usa": 7.215
    }
  },
  "powiat chełmiński": {
    "aborcja": 5.679,
    "lgbt": 5.778,
    "gospodarka": 6.831,
    "kosmopolityzmNacjonalizm": 5.395,
    "ue": 4.925,
    "rosja": 1.704,
    "usa": 7.433,
    "mediaTradycyjne": 68.394,
    "mediaInternetowe": 77.786,
    "glosy": 25223,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.366,
      "lgbt": 4.987,
      "gospodarka": 6.365,
      "kosmopolityzmNacjonalizm": 5.46,
      "ue": 4.874,
      "rosja": 1.767,
      "usa": 7.215
    }
  },
  "powiat golubsko-dobrzyński": {
    "aborcja": 6.363,
    "lgbt": 6.419,
    "gospodarka": 7.044,
    "kosmopolityzmNacjonalizm": 5.967,
    "ue": 4.313,
    "rosja": 1.941,
    "usa": 7.323,
    "mediaTradycyjne": 65.964,
    "mediaInternetowe": 76.971,
    "glosy": 22521,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.8,
      "lgbt": 5.474,
      "gospodarka": 6.511,
      "kosmopolityzmNacjonalizm": 6.04,
      "ue": 4.231,
      "rosja": 2.025,
      "usa": 7.107
    }
  },
  "powiat grudziądzki": {
    "aborcja": 6.159,
    "lgbt": 6.222,
    "gospodarka": 6.952,
    "kosmopolityzmNacjonalizm": 5.797,
    "ue": 4.488,
    "rosja": 1.903,
    "usa": 7.297,
    "mediaTradycyjne": 66.151,
    "mediaInternetowe": 76.877,
    "glosy": 19927,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.681,
      "lgbt": 5.335,
      "gospodarka": 6.44,
      "kosmopolityzmNacjonalizm": 5.868,
      "ue": 4.411,
      "rosja": 1.984,
      "usa": 7.078
    }
  },
  "powiat inowrocławski": {
    "aborcja": 5.367,
    "lgbt": 5.509,
    "gospodarka": 6.731,
    "kosmopolityzmNacjonalizm": 5.134,
    "ue": 5.215,
    "rosja": 1.617,
    "usa": 7.457,
    "mediaTradycyjne": 69.875,
    "mediaInternetowe": 77.638,
    "glosy": 81621,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.227,
      "lgbt": 4.821,
      "gospodarka": 6.279,
      "kosmopolityzmNacjonalizm": 5.184,
      "ue": 5.187,
      "rosja": 1.656,
      "usa": 7.248
    }
  },
  "powiat lipnowski": {
    "aborcja": 6.296,
    "lgbt": 6.371,
    "gospodarka": 6.934,
    "kosmopolityzmNacjonalizm": 5.884,
    "ue": 4.406,
    "rosja": 1.799,
    "usa": 7.41,
    "mediaTradycyjne": 66.191,
    "mediaInternetowe": 75.184,
    "glosy": 30985,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.781,
      "lgbt": 5.456,
      "gospodarka": 6.372,
      "kosmopolityzmNacjonalizm": 5.956,
      "ue": 4.326,
      "rosja": 1.862,
      "usa": 7.215
    }
  },
  "powiat mogileński": {
    "aborcja": 5.875,
    "lgbt": 5.966,
    "gospodarka": 6.846,
    "kosmopolityzmNacjonalizm": 5.575,
    "ue": 4.726,
    "rosja": 1.858,
    "usa": 7.264,
    "mediaTradycyjne": 66.781,
    "mediaInternetowe": 76.641,
    "glosy": 23504,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.553,
      "lgbt": 5.178,
      "gospodarka": 6.348,
      "kosmopolityzmNacjonalizm": 5.634,
      "ue": 4.666,
      "rosja": 1.922,
      "usa": 7.049
    }
  },
  "powiat nakielski": {
    "aborcja": 5.518,
    "lgbt": 5.633,
    "gospodarka": 6.769,
    "kosmopolityzmNacjonalizm": 5.258,
    "ue": 5.073,
    "rosja": 1.677,
    "usa": 7.418,
    "mediaTradycyjne": 68.793,
    "mediaInternetowe": 77.53,
    "glosy": 44603,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.297,
      "lgbt": 4.9,
      "gospodarka": 6.314,
      "kosmopolityzmNacjonalizm": 5.318,
      "ue": 5.03,
      "rosja": 1.731,
      "usa": 7.202
    }
  },
  "powiat radziejowski": {
    "aborcja": 6.519,
    "lgbt": 6.592,
    "gospodarka": 6.99,
    "kosmopolityzmNacjonalizm": 6.111,
    "ue": 4.169,
    "rosja": 1.839,
    "usa": 7.392,
    "mediaTradycyjne": 65.354,
    "mediaInternetowe": 74.68,
    "glosy": 19632,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.934,
      "lgbt": 5.633,
      "gospodarka": 6.378,
      "kosmopolityzmNacjonalizm": 6.175,
      "ue": 4.087,
      "rosja": 1.895,
      "usa": 7.212
    }
  },
  "powiat rypiński": {
    "aborcja": 6.266,
    "lgbt": 6.355,
    "gospodarka": 6.992,
    "kosmopolityzmNacjonalizm": 5.891,
    "ue": 4.405,
    "rosja": 1.905,
    "usa": 7.322,
    "mediaTradycyjne": 66.599,
    "mediaInternetowe": 76.227,
    "glosy": 21498,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.802,
      "lgbt": 5.467,
      "gospodarka": 6.442,
      "kosmopolityzmNacjonalizm": 5.95,
      "ue": 4.337,
      "rosja": 1.967,
      "usa": 7.121
    }
  },
  "powiat sępoleński": {
    "aborcja": 5.876,
    "lgbt": 5.971,
    "gospodarka": 6.903,
    "kosmopolityzmNacjonalizm": 5.585,
    "ue": 4.724,
    "rosja": 1.833,
    "usa": 7.332,
    "mediaTradycyjne": 67.476,
    "mediaInternetowe": 77.52,
    "glosy": 19823,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.53,
      "lgbt": 5.161,
      "gospodarka": 6.41,
      "kosmopolityzmNacjonalizm": 5.643,
      "ue": 4.67,
      "rosja": 1.897,
      "usa": 7.116
    }
  },
  "powiat toruński": {
    "aborcja": 5.516,
    "lgbt": 5.615,
    "gospodarka": 6.763,
    "kosmopolityzmNacjonalizm": 5.254,
    "ue": 5.065,
    "rosja": 1.718,
    "usa": 7.369,
    "mediaTradycyjne": 68.495,
    "mediaInternetowe": 77.961,
    "glosy": 63204,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.271,
      "lgbt": 4.871,
      "gospodarka": 6.327,
      "kosmopolityzmNacjonalizm": 5.318,
      "ue": 5.016,
      "rosja": 1.785,
      "usa": 7.142
    }
  },
  "powiat tucholski": {
    "aborcja": 6.383,
    "lgbt": 6.459,
    "gospodarka": 7.087,
    "kosmopolityzmNacjonalizm": 6.017,
    "ue": 4.269,
    "rosja": 2.043,
    "usa": 7.227,
    "mediaTradycyjne": 65.986,
    "mediaInternetowe": 77.067,
    "glosy": 25142,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.883,
      "lgbt": 5.55,
      "gospodarka": 6.544,
      "kosmopolityzmNacjonalizm": 6.073,
      "ue": 4.198,
      "rosja": 2.117,
      "usa": 7.015
    }
  },
  "powiat wąbrzeski": {
    "aborcja": 5.894,
    "lgbt": 5.988,
    "gospodarka": 6.912,
    "kosmopolityzmNacjonalizm": 5.532,
    "ue": 4.781,
    "rosja": 1.821,
    "usa": 7.374,
    "mediaTradycyjne": 68.074,
    "mediaInternetowe": 77.475,
    "glosy": 16222,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.531,
      "lgbt": 5.162,
      "gospodarka": 6.442,
      "kosmopolityzmNacjonalizm": 5.603,
      "ue": 4.72,
      "rosja": 1.894,
      "usa": 7.151
    }
  },
  "powiat włocławski": {
    "aborcja": 6.084,
    "lgbt": 6.177,
    "gospodarka": 6.884,
    "kosmopolityzmNacjonalizm": 5.744,
    "ue": 4.557,
    "rosja": 1.777,
    "usa": 7.385,
    "mediaTradycyjne": 66.697,
    "mediaInternetowe": 75.736,
    "glosy": 43206,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.668,
      "lgbt": 5.325,
      "gospodarka": 6.334,
      "kosmopolityzmNacjonalizm": 5.805,
      "ue": 4.493,
      "rosja": 1.83,
      "usa": 7.19
    }
  },
  "powiat świecki": {
    "aborcja": 5.742,
    "lgbt": 5.845,
    "gospodarka": 6.856,
    "kosmopolityzmNacjonalizm": 5.467,
    "ue": 4.848,
    "rosja": 1.824,
    "usa": 7.31,
    "mediaTradycyjne": 67.872,
    "mediaInternetowe": 77.661,
    "glosy": 49020,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.458,
      "lgbt": 5.075,
      "gospodarka": 6.382,
      "kosmopolityzmNacjonalizm": 5.523,
      "ue": 4.798,
      "rosja": 1.886,
      "usa": 7.09
    }
  },
  "powiat żniński": {
    "aborcja": 5.782,
    "lgbt": 5.881,
    "gospodarka": 6.856,
    "kosmopolityzmNacjonalizm": 5.502,
    "ue": 4.809,
    "rosja": 1.831,
    "usa": 7.301,
    "mediaTradycyjne": 67.521,
    "mediaInternetowe": 77.372,
    "glosy": 36478,
    "woj": "kujawsko-pomorskie",
    "elektorat": {
      "aborcja": 4.485,
      "lgbt": 5.104,
      "gospodarka": 6.374,
      "kosmopolityzmNacjonalizm": 5.56,
      "ue": 4.756,
      "rosja": 1.894,
      "usa": 7.083
    }
  },
  "powiat biała podlaska": {
    "aborcja": 6.337,
    "lgbt": 6.443,
    "gospodarka": 7.028,
    "kosmopolityzmNacjonalizm": 5.978,
    "ue": 4.315,
    "rosja": 2.108,
    "usa": 7.112,
    "mediaTradycyjne": 66.191,
    "mediaInternetowe": 76.066,
    "glosy": 32234,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 4.95,
      "lgbt": 5.604,
      "gospodarka": 6.473,
      "kosmopolityzmNacjonalizm": 6.015,
      "ue": 4.253,
      "rosja": 2.166,
      "usa": 6.908
    }
  },
  "powiat chełm": {
    "aborcja": 6.026,
    "lgbt": 6.166,
    "gospodarka": 6.99,
    "kosmopolityzmNacjonalizm": 5.691,
    "ue": 4.639,
    "rosja": 1.914,
    "usa": 7.311,
    "mediaTradycyjne": 68.566,
    "mediaInternetowe": 76.964,
    "glosy": 32033,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 4.732,
      "lgbt": 5.372,
      "gospodarka": 6.467,
      "kosmopolityzmNacjonalizm": 5.729,
      "ue": 4.599,
      "rosja": 1.956,
      "usa": 7.111
    }
  },
  "powiat lublin": {
    "aborcja": 5.569,
    "lgbt": 5.696,
    "gospodarka": 6.659,
    "kosmopolityzmNacjonalizm": 5.309,
    "ue": 5.012,
    "rosja": 1.645,
    "usa": 7.375,
    "mediaTradycyjne": 68.341,
    "mediaInternetowe": 75.661,
    "glosy": 204579,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 4.371,
      "lgbt": 4.979,
      "gospodarka": 6.162,
      "kosmopolityzmNacjonalizm": 5.353,
      "ue": 4.967,
      "rosja": 1.681,
      "usa": 7.179
    }
  },
  "powiat zamość": {
    "aborcja": 6.189,
    "lgbt": 6.327,
    "gospodarka": 6.976,
    "kosmopolityzmNacjonalizm": 5.811,
    "ue": 4.51,
    "rosja": 1.906,
    "usa": 7.314,
    "mediaTradycyjne": 67.963,
    "mediaInternetowe": 75.65,
    "glosy": 33654,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 4.848,
      "lgbt": 5.504,
      "gospodarka": 6.417,
      "kosmopolityzmNacjonalizm": 5.85,
      "ue": 4.461,
      "rosja": 1.944,
      "usa": 7.127
    }
  },
  "powiat bialski": {
    "aborcja": 7.394,
    "lgbt": 7.436,
    "gospodarka": 7.384,
    "kosmopolityzmNacjonalizm": 6.891,
    "ue": 3.337,
    "rosja": 2.537,
    "usa": 6.881,
    "mediaTradycyjne": 62.331,
    "mediaInternetowe": 75.317,
    "glosy": 60620,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.636,
      "lgbt": 6.368,
      "gospodarka": 6.729,
      "kosmopolityzmNacjonalizm": 6.933,
      "ue": 3.232,
      "rosja": 2.628,
      "usa": 6.676
    }
  },
  "powiat biłgorajski": {
    "aborcja": 7.615,
    "lgbt": 7.672,
    "gospodarka": 7.445,
    "kosmopolityzmNacjonalizm": 7.048,
    "ue": 3.191,
    "rosja": 2.443,
    "usa": 7.04,
    "mediaTradycyjne": 62.903,
    "mediaInternetowe": 74.374,
    "glosy": 55919,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.774,
      "lgbt": 6.539,
      "gospodarka": 6.74,
      "kosmopolityzmNacjonalizm": 7.089,
      "ue": 3.086,
      "rosja": 2.519,
      "usa": 6.859
    }
  },
  "powiat chełmski": {
    "aborcja": 7.438,
    "lgbt": 7.473,
    "gospodarka": 7.412,
    "kosmopolityzmNacjonalizm": 6.948,
    "ue": 3.277,
    "rosja": 2.541,
    "usa": 6.89,
    "mediaTradycyjne": 62.068,
    "mediaInternetowe": 75.626,
    "glosy": 38844,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.646,
      "lgbt": 6.384,
      "gospodarka": 6.75,
      "kosmopolityzmNacjonalizm": 6.99,
      "ue": 3.172,
      "rosja": 2.634,
      "usa": 6.685
    }
  },
  "powiat hrubieszowski": {
    "aborcja": 7.228,
    "lgbt": 7.292,
    "gospodarka": 7.333,
    "kosmopolityzmNacjonalizm": 6.73,
    "ue": 3.525,
    "rosja": 2.306,
    "usa": 7.11,
    "mediaTradycyjne": 63.826,
    "mediaInternetowe": 75.209,
    "glosy": 31059,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.492,
      "lgbt": 6.229,
      "gospodarka": 6.673,
      "kosmopolityzmNacjonalizm": 6.776,
      "ue": 3.432,
      "rosja": 2.38,
      "usa": 6.921
    }
  },
  "powiat janowski": {
    "aborcja": 8.16,
    "lgbt": 8.203,
    "gospodarka": 7.563,
    "kosmopolityzmNacjonalizm": 7.587,
    "ue": 2.63,
    "rosja": 2.429,
    "usa": 7.114,
    "mediaTradycyjne": 60.878,
    "mediaInternetowe": 72.625,
    "glosy": 25800,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 6.11,
      "lgbt": 6.939,
      "gospodarka": 6.724,
      "kosmopolityzmNacjonalizm": 7.618,
      "ue": 2.516,
      "rosja": 2.485,
      "usa": 6.975
    }
  },
  "powiat krasnostawski": {
    "aborcja": 6.971,
    "lgbt": 7.043,
    "gospodarka": 7.211,
    "kosmopolityzmNacjonalizm": 6.518,
    "ue": 3.747,
    "rosja": 2.137,
    "usa": 7.21,
    "mediaTradycyjne": 64.512,
    "mediaInternetowe": 75.051,
    "glosy": 32110,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.297,
      "lgbt": 6.019,
      "gospodarka": 6.563,
      "kosmopolityzmNacjonalizm": 6.565,
      "ue": 3.661,
      "rosja": 2.201,
      "usa": 7.027
    }
  },
  "powiat kraśnicki": {
    "aborcja": 7.309,
    "lgbt": 7.383,
    "gospodarka": 7.283,
    "kosmopolityzmNacjonalizm": 6.823,
    "ue": 3.43,
    "rosja": 2.223,
    "usa": 7.159,
    "mediaTradycyjne": 63.355,
    "mediaInternetowe": 73.694,
    "glosy": 49779,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.561,
      "lgbt": 6.312,
      "gospodarka": 6.567,
      "kosmopolityzmNacjonalizm": 6.86,
      "ue": 3.338,
      "rosja": 2.275,
      "usa": 6.996
    }
  },
  "powiat lubartowski": {
    "aborcja": 7.32,
    "lgbt": 7.359,
    "gospodarka": 7.32,
    "kosmopolityzmNacjonalizm": 6.84,
    "ue": 3.393,
    "rosja": 2.349,
    "usa": 7.043,
    "mediaTradycyjne": 62.596,
    "mediaInternetowe": 74.96,
    "glosy": 49959,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.528,
      "lgbt": 6.269,
      "gospodarka": 6.648,
      "kosmopolityzmNacjonalizm": 6.885,
      "ue": 3.289,
      "rosja": 2.43,
      "usa": 6.852
    }
  },
  "powiat lubelski": {
    "aborcja": 6.973,
    "lgbt": 7.022,
    "gospodarka": 7.185,
    "kosmopolityzmNacjonalizm": 6.514,
    "ue": 3.736,
    "rosja": 2.163,
    "usa": 7.164,
    "mediaTradycyjne": 63.767,
    "mediaInternetowe": 74.963,
    "glosy": 96458,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.273,
      "lgbt": 5.99,
      "gospodarka": 6.552,
      "kosmopolityzmNacjonalizm": 6.568,
      "ue": 3.64,
      "rosja": 2.24,
      "usa": 6.971
    }
  },
  "powiat opolski (lubelskie)": {
    "aborcja": 7.289,
    "lgbt": 7.346,
    "gospodarka": 7.289,
    "kosmopolityzmNacjonalizm": 6.799,
    "ue": 3.448,
    "rosja": 2.217,
    "usa": 7.172,
    "mediaTradycyjne": 63.246,
    "mediaInternetowe": 74.248,
    "glosy": 31042,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.507,
      "lgbt": 6.256,
      "gospodarka": 6.593,
      "kosmopolityzmNacjonalizm": 6.845,
      "ue": 3.35,
      "rosja": 2.282,
      "usa": 6.998
    }
  },
  "powiat parczewski": {
    "aborcja": 7.201,
    "lgbt": 7.254,
    "gospodarka": 7.326,
    "kosmopolityzmNacjonalizm": 6.693,
    "ue": 3.552,
    "rosja": 2.401,
    "usa": 7.004,
    "mediaTradycyjne": 63.576,
    "mediaInternetowe": 75.609,
    "glosy": 18733,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.481,
      "lgbt": 6.204,
      "gospodarka": 6.699,
      "kosmopolityzmNacjonalizm": 6.742,
      "ue": 3.452,
      "rosja": 2.489,
      "usa": 6.798
    }
  },
  "powiat puławski": {
    "aborcja": 6.479,
    "lgbt": 6.577,
    "gospodarka": 7.014,
    "kosmopolityzmNacjonalizm": 6.094,
    "ue": 4.196,
    "rosja": 1.929,
    "usa": 7.305,
    "mediaTradycyjne": 65.988,
    "mediaInternetowe": 75.004,
    "glosy": 65736,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 4.977,
      "lgbt": 5.662,
      "gospodarka": 6.408,
      "kosmopolityzmNacjonalizm": 6.139,
      "ue": 4.127,
      "rosja": 1.976,
      "usa": 7.124
    }
  },
  "powiat radzyński": {
    "aborcja": 7.56,
    "lgbt": 7.6,
    "gospodarka": 7.394,
    "kosmopolityzmNacjonalizm": 7.013,
    "ue": 3.212,
    "rosja": 2.485,
    "usa": 6.953,
    "mediaTradycyjne": 62.093,
    "mediaInternetowe": 74.425,
    "glosy": 32725,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.727,
      "lgbt": 6.482,
      "gospodarka": 6.704,
      "kosmopolityzmNacjonalizm": 7.058,
      "ue": 3.099,
      "rosja": 2.571,
      "usa": 6.761
    }
  },
  "powiat rycki": {
    "aborcja": 7.011,
    "lgbt": 7.083,
    "gospodarka": 7.164,
    "kosmopolityzmNacjonalizm": 6.537,
    "ue": 3.728,
    "rosja": 2.047,
    "usa": 7.282,
    "mediaTradycyjne": 64.262,
    "mediaInternetowe": 73.792,
    "glosy": 31861,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.319,
      "lgbt": 6.051,
      "gospodarka": 6.489,
      "kosmopolityzmNacjonalizm": 6.586,
      "ue": 3.638,
      "rosja": 2.1,
      "usa": 7.114
    }
  },
  "powiat tomaszowski (lubelskie)": {
    "aborcja": 7.342,
    "lgbt": 7.411,
    "gospodarka": 7.322,
    "kosmopolityzmNacjonalizm": 6.825,
    "ue": 3.43,
    "rosja": 2.211,
    "usa": 7.209,
    "mediaTradycyjne": 63.759,
    "mediaInternetowe": 74.141,
    "glosy": 42403,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.556,
      "lgbt": 6.313,
      "gospodarka": 6.618,
      "kosmopolityzmNacjonalizm": 6.87,
      "ue": 3.336,
      "rosja": 2.271,
      "usa": 7.04
    }
  },
  "powiat włodawski": {
    "aborcja": 6.579,
    "lgbt": 6.675,
    "gospodarka": 7.092,
    "kosmopolityzmNacjonalizm": 6.138,
    "ue": 4.15,
    "rosja": 2.088,
    "usa": 7.195,
    "mediaTradycyjne": 65.918,
    "mediaInternetowe": 75.315,
    "glosy": 20437,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.083,
      "lgbt": 5.763,
      "gospodarka": 6.511,
      "kosmopolityzmNacjonalizm": 6.187,
      "ue": 4.076,
      "rosja": 2.15,
      "usa": 6.998
    }
  },
  "powiat zamojski": {
    "aborcja": 7.582,
    "lgbt": 7.636,
    "gospodarka": 7.415,
    "kosmopolityzmNacjonalizm": 7.059,
    "ue": 3.174,
    "rosja": 2.466,
    "usa": 6.979,
    "mediaTradycyjne": 62.303,
    "mediaInternetowe": 74.266,
    "glosy": 57421,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.764,
      "lgbt": 6.524,
      "gospodarka": 6.7,
      "kosmopolityzmNacjonalizm": 7.094,
      "ue": 3.071,
      "rosja": 2.539,
      "usa": 6.8
    }
  },
  "powiat łukowski": {
    "aborcja": 7.785,
    "lgbt": 7.813,
    "gospodarka": 7.496,
    "kosmopolityzmNacjonalizm": 7.256,
    "ue": 2.96,
    "rosja": 2.525,
    "usa": 6.964,
    "mediaTradycyjne": 61.276,
    "mediaInternetowe": 74.557,
    "glosy": 60586,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.857,
      "lgbt": 6.636,
      "gospodarka": 6.762,
      "kosmopolityzmNacjonalizm": 7.295,
      "ue": 2.846,
      "rosja": 2.609,
      "usa": 6.782
    }
  },
  "powiat łęczyński": {
    "aborcja": 7.429,
    "lgbt": 7.453,
    "gospodarka": 7.432,
    "kosmopolityzmNacjonalizm": 6.953,
    "ue": 3.271,
    "rosja": 2.479,
    "usa": 6.97,
    "mediaTradycyjne": 62.234,
    "mediaInternetowe": 76.226,
    "glosy": 32287,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.588,
      "lgbt": 6.333,
      "gospodarka": 6.773,
      "kosmopolityzmNacjonalizm": 7.0,
      "ue": 3.165,
      "rosja": 2.576,
      "usa": 6.765
    }
  },
  "powiat świdnicki (lubelskie)": {
    "aborcja": 6.595,
    "lgbt": 6.681,
    "gospodarka": 7.013,
    "kosmopolityzmNacjonalizm": 6.19,
    "ue": 4.087,
    "rosja": 1.959,
    "usa": 7.271,
    "mediaTradycyjne": 65.249,
    "mediaInternetowe": 74.452,
    "glosy": 40645,
    "woj": "lubelskie",
    "elektorat": {
      "aborcja": 5.046,
      "lgbt": 5.741,
      "gospodarka": 6.392,
      "kosmopolityzmNacjonalizm": 6.236,
      "ue": 4.009,
      "rosja": 2.01,
      "usa": 7.092
    }
  },
  "powiat gorzów wielkopolski": {
    "aborcja": 4.93,
    "lgbt": 5.112,
    "gospodarka": 6.647,
    "kosmopolityzmNacjonalizm": 4.758,
    "ue": 5.629,
    "rosja": 1.458,
    "usa": 7.579,
    "mediaTradycyjne": 72.278,
    "mediaInternetowe": 78.693,
    "glosy": 63498,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 3.955,
      "lgbt": 4.517,
      "gospodarka": 6.244,
      "kosmopolityzmNacjonalizm": 4.802,
      "ue": 5.628,
      "rosja": 1.48,
      "usa": 7.369
    }
  },
  "powiat zielona góra": {
    "aborcja": 4.523,
    "lgbt": 4.72,
    "gospodarka": 6.493,
    "kosmopolityzmNacjonalizm": 4.414,
    "ue": 5.989,
    "rosja": 1.318,
    "usa": 7.625,
    "mediaTradycyjne": 73.411,
    "mediaInternetowe": 79.002,
    "glosy": 82939,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 3.683,
      "lgbt": 4.212,
      "gospodarka": 6.135,
      "kosmopolityzmNacjonalizm": 4.455,
      "ue": 6.0,
      "rosja": 1.333,
      "usa": 7.411
    }
  },
  "powiat gorzowski": {
    "aborcja": 5.369,
    "lgbt": 5.503,
    "gospodarka": 6.816,
    "kosmopolityzmNacjonalizm": 5.149,
    "ue": 5.198,
    "rosja": 1.716,
    "usa": 7.404,
    "mediaTradycyjne": 70.142,
    "mediaInternetowe": 79.205,
    "glosy": 40432,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.216,
      "lgbt": 4.804,
      "gospodarka": 6.396,
      "kosmopolityzmNacjonalizm": 5.199,
      "ue": 5.172,
      "rosja": 1.77,
      "usa": 7.177
    }
  },
  "powiat krośnieński (lubuskie)": {
    "aborcja": 5.26,
    "lgbt": 5.423,
    "gospodarka": 6.781,
    "kosmopolityzmNacjonalizm": 5.038,
    "ue": 5.333,
    "rosja": 1.576,
    "usa": 7.542,
    "mediaTradycyjne": 71.312,
    "mediaInternetowe": 78.644,
    "glosy": 26821,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.162,
      "lgbt": 4.749,
      "gospodarka": 6.35,
      "kosmopolityzmNacjonalizm": 5.085,
      "ue": 5.319,
      "rosja": 1.609,
      "usa": 7.332
    }
  },
  "powiat międzyrzecki": {
    "aborcja": 5.295,
    "lgbt": 5.453,
    "gospodarka": 6.802,
    "kosmopolityzmNacjonalizm": 5.059,
    "ue": 5.309,
    "rosja": 1.618,
    "usa": 7.513,
    "mediaTradycyjne": 71.179,
    "mediaInternetowe": 78.831,
    "glosy": 29454,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.185,
      "lgbt": 4.772,
      "gospodarka": 6.378,
      "kosmopolityzmNacjonalizm": 5.109,
      "ue": 5.292,
      "rosja": 1.657,
      "usa": 7.297
    }
  },
  "powiat nowosolski": {
    "aborcja": 5.486,
    "lgbt": 5.641,
    "gospodarka": 6.839,
    "kosmopolityzmNacjonalizm": 5.239,
    "ue": 5.12,
    "rosja": 1.633,
    "usa": 7.517,
    "mediaTradycyjne": 70.631,
    "mediaInternetowe": 78.231,
    "glosy": 43268,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.309,
      "lgbt": 4.916,
      "gospodarka": 6.375,
      "kosmopolityzmNacjonalizm": 5.283,
      "ue": 5.099,
      "rosja": 1.667,
      "usa": 7.313
    }
  },
  "powiat strzelecko-drezdenecki": {
    "aborcja": 5.494,
    "lgbt": 5.639,
    "gospodarka": 6.788,
    "kosmopolityzmNacjonalizm": 5.233,
    "ue": 5.115,
    "rosja": 1.663,
    "usa": 7.45,
    "mediaTradycyjne": 69.83,
    "mediaInternetowe": 77.536,
    "glosy": 23911,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.324,
      "lgbt": 4.929,
      "gospodarka": 6.323,
      "kosmopolityzmNacjonalizm": 5.283,
      "ue": 5.086,
      "rosja": 1.701,
      "usa": 7.243
    }
  },
  "powiat sulęciński": {
    "aborcja": 5.826,
    "lgbt": 5.953,
    "gospodarka": 6.996,
    "kosmopolityzmNacjonalizm": 5.534,
    "ue": 4.806,
    "rosja": 1.784,
    "usa": 7.458,
    "mediaTradycyjne": 69.513,
    "mediaInternetowe": 78.744,
    "glosy": 17735,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.507,
      "lgbt": 5.14,
      "gospodarka": 6.513,
      "kosmopolityzmNacjonalizm": 5.584,
      "ue": 4.771,
      "rosja": 1.836,
      "usa": 7.247
    }
  },
  "powiat słubicki": {
    "aborcja": 5.247,
    "lgbt": 5.395,
    "gospodarka": 6.77,
    "kosmopolityzmNacjonalizm": 5.04,
    "ue": 5.319,
    "rosja": 1.638,
    "usa": 7.46,
    "mediaTradycyjne": 70.795,
    "mediaInternetowe": 79.065,
    "glosy": 24252,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.142,
      "lgbt": 4.723,
      "gospodarka": 6.354,
      "kosmopolityzmNacjonalizm": 5.088,
      "ue": 5.3,
      "rosja": 1.682,
      "usa": 7.239
    }
  },
  "powiat wschowski": {
    "aborcja": 5.972,
    "lgbt": 6.087,
    "gospodarka": 6.919,
    "kosmopolityzmNacjonalizm": 5.662,
    "ue": 4.657,
    "rosja": 1.768,
    "usa": 7.419,
    "mediaTradycyjne": 68.05,
    "mediaInternetowe": 76.773,
    "glosy": 19164,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.611,
      "lgbt": 5.257,
      "gospodarka": 6.39,
      "kosmopolityzmNacjonalizm": 5.711,
      "ue": 4.609,
      "rosja": 1.814,
      "usa": 7.223
    }
  },
  "powiat zielonogórski": {
    "aborcja": 5.232,
    "lgbt": 5.381,
    "gospodarka": 6.763,
    "kosmopolityzmNacjonalizm": 5.021,
    "ue": 5.339,
    "rosja": 1.625,
    "usa": 7.472,
    "mediaTradycyjne": 70.826,
    "mediaInternetowe": 78.959,
    "glosy": 41276,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.132,
      "lgbt": 4.712,
      "gospodarka": 6.349,
      "kosmopolityzmNacjonalizm": 5.071,
      "ue": 5.32,
      "rosja": 1.669,
      "usa": 7.251
    }
  },
  "powiat świebodziński": {
    "aborcja": 5.489,
    "lgbt": 5.632,
    "gospodarka": 6.851,
    "kosmopolityzmNacjonalizm": 5.235,
    "ue": 5.118,
    "rosja": 1.668,
    "usa": 7.488,
    "mediaTradycyjne": 70.34,
    "mediaInternetowe": 78.574,
    "glosy": 29272,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.297,
      "lgbt": 4.901,
      "gospodarka": 6.403,
      "kosmopolityzmNacjonalizm": 5.286,
      "ue": 5.092,
      "rosja": 1.713,
      "usa": 7.275
    }
  },
  "powiat żagański": {
    "aborcja": 5.6,
    "lgbt": 5.749,
    "gospodarka": 6.854,
    "kosmopolityzmNacjonalizm": 5.345,
    "ue": 5.004,
    "rosja": 1.71,
    "usa": 7.437,
    "mediaTradycyjne": 69.852,
    "mediaInternetowe": 77.793,
    "glosy": 37312,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.406,
      "lgbt": 5.018,
      "gospodarka": 6.373,
      "kosmopolityzmNacjonalizm": 5.386,
      "ue": 4.978,
      "rosja": 1.745,
      "usa": 7.235
    }
  },
  "powiat żarski": {
    "aborcja": 5.363,
    "lgbt": 5.527,
    "gospodarka": 6.822,
    "kosmopolityzmNacjonalizm": 5.138,
    "ue": 5.228,
    "rosja": 1.657,
    "usa": 7.475,
    "mediaTradycyjne": 70.993,
    "mediaInternetowe": 78.661,
    "glosy": 46307,
    "woj": "lubuskie",
    "elektorat": {
      "aborcja": 4.253,
      "lgbt": 4.845,
      "gospodarka": 6.379,
      "kosmopolityzmNacjonalizm": 5.179,
      "ue": 5.214,
      "rosja": 1.691,
      "usa": 7.265
    }
  },
  "powiat ostrołęka": {
    "aborcja": 6.18,
    "lgbt": 6.294,
    "gospodarka": 6.959,
    "kosmopolityzmNacjonalizm": 5.825,
    "ue": 4.484,
    "rosja": 1.884,
    "usa": 7.321,
    "mediaTradycyjne": 67.201,
    "mediaInternetowe": 75.834,
    "glosy": 27063,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.795,
      "lgbt": 5.451,
      "gospodarka": 6.403,
      "kosmopolityzmNacjonalizm": 5.871,
      "ue": 4.428,
      "rosja": 1.93,
      "usa": 7.129
    }
  },
  "powiat płock": {
    "aborcja": 5.385,
    "lgbt": 5.553,
    "gospodarka": 6.621,
    "kosmopolityzmNacjonalizm": 5.116,
    "ue": 5.243,
    "rosja": 1.443,
    "usa": 7.584,
    "mediaTradycyjne": 70.218,
    "mediaInternetowe": 75.391,
    "glosy": 66953,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.261,
      "lgbt": 4.87,
      "gospodarka": 6.118,
      "kosmopolityzmNacjonalizm": 5.163,
      "ue": 5.216,
      "rosja": 1.455,
      "usa": 7.406
    }
  },
  "powiat radom": {
    "aborcja": 5.967,
    "lgbt": 6.094,
    "gospodarka": 6.846,
    "kosmopolityzmNacjonalizm": 5.642,
    "ue": 4.68,
    "rosja": 1.701,
    "usa": 7.445,
    "mediaTradycyjne": 68.001,
    "mediaInternetowe": 75.473,
    "glosy": 116177,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.63,
      "lgbt": 5.28,
      "gospodarka": 6.292,
      "kosmopolityzmNacjonalizm": 5.688,
      "ue": 4.631,
      "rosja": 1.734,
      "usa": 7.264
    }
  },
  "powiat siedlce": {
    "aborcja": 6.226,
    "lgbt": 6.33,
    "gospodarka": 7.002,
    "kosmopolityzmNacjonalizm": 5.885,
    "ue": 4.414,
    "rosja": 2.002,
    "usa": 7.213,
    "mediaTradycyjne": 66.749,
    "mediaInternetowe": 76.49,
    "glosy": 44663,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.835,
      "lgbt": 5.487,
      "gospodarka": 6.458,
      "kosmopolityzmNacjonalizm": 5.927,
      "ue": 4.356,
      "rosja": 2.059,
      "usa": 7.009
    }
  },
  "powiat warszawa": {
    "aborcja": 4.543,
    "lgbt": 4.679,
    "gospodarka": 6.284,
    "kosmopolityzmNacjonalizm": 4.518,
    "ue": 5.815,
    "rosja": 1.507,
    "usa": 7.234,
    "mediaTradycyjne": 69.179,
    "mediaInternetowe": 77.612,
    "glosy": 1834042,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 3.691,
      "lgbt": 4.204,
      "gospodarka": 5.91,
      "kosmopolityzmNacjonalizm": 4.557,
      "ue": 5.797,
      "rosja": 1.544,
      "usa": 7.004
    }
  },
  "powiat białobrzeski": {
    "aborcja": 7.374,
    "lgbt": 7.435,
    "gospodarka": 7.232,
    "kosmopolityzmNacjonalizm": 6.848,
    "ue": 3.406,
    "rosja": 1.965,
    "usa": 7.421,
    "mediaTradycyjne": 63.49,
    "mediaInternetowe": 72.61,
    "glosy": 19993,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.506,
      "lgbt": 6.287,
      "gospodarka": 6.478,
      "kosmopolityzmNacjonalizm": 6.902,
      "ue": 3.304,
      "rosja": 2.01,
      "usa": 7.279
    }
  },
  "powiat ciechanowski": {
    "aborcja": 6.573,
    "lgbt": 6.672,
    "gospodarka": 7.027,
    "kosmopolityzmNacjonalizm": 6.164,
    "ue": 4.126,
    "rosja": 1.9,
    "usa": 7.349,
    "mediaTradycyjne": 65.878,
    "mediaInternetowe": 74.459,
    "glosy": 48656,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.034,
      "lgbt": 5.732,
      "gospodarka": 6.399,
      "kosmopolityzmNacjonalizm": 6.211,
      "ue": 4.054,
      "rosja": 1.943,
      "usa": 7.177
    }
  },
  "powiat garwoliński": {
    "aborcja": 7.349,
    "lgbt": 7.388,
    "gospodarka": 7.267,
    "kosmopolityzmNacjonalizm": 6.845,
    "ue": 3.39,
    "rosja": 2.185,
    "usa": 7.194,
    "mediaTradycyjne": 62.647,
    "mediaInternetowe": 73.82,
    "glosy": 64047,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.51,
      "lgbt": 6.268,
      "gospodarka": 6.562,
      "kosmopolityzmNacjonalizm": 6.898,
      "ue": 3.283,
      "rosja": 2.255,
      "usa": 7.022
    }
  },
  "powiat gostyniński": {
    "aborcja": 6.647,
    "lgbt": 6.745,
    "gospodarka": 7.037,
    "kosmopolityzmNacjonalizm": 6.222,
    "ue": 4.07,
    "rosja": 1.823,
    "usa": 7.444,
    "mediaTradycyjne": 65.936,
    "mediaInternetowe": 74.084,
    "glosy": 23875,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.057,
      "lgbt": 5.771,
      "gospodarka": 6.385,
      "kosmopolityzmNacjonalizm": 6.272,
      "ue": 3.997,
      "rosja": 1.861,
      "usa": 7.283
    }
  },
  "powiat grodziski (mazowieckie)": {
    "aborcja": 5.236,
    "lgbt": 5.364,
    "gospodarka": 6.605,
    "kosmopolityzmNacjonalizm": 5.054,
    "ue": 5.279,
    "rosja": 1.599,
    "usa": 7.377,
    "mediaTradycyjne": 68.899,
    "mediaInternetowe": 77.074,
    "glosy": 67788,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.134,
      "lgbt": 4.713,
      "gospodarka": 6.156,
      "kosmopolityzmNacjonalizm": 5.102,
      "ue": 5.246,
      "rosja": 1.639,
      "usa": 7.166
    }
  },
  "powiat grójecki": {
    "aborcja": 6.622,
    "lgbt": 6.699,
    "gospodarka": 7.024,
    "kosmopolityzmNacjonalizm": 6.163,
    "ue": 4.114,
    "rosja": 1.941,
    "usa": 7.316,
    "mediaTradycyjne": 65.45,
    "mediaInternetowe": 74.512,
    "glosy": 61777,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.037,
      "lgbt": 5.735,
      "gospodarka": 6.42,
      "kosmopolityzmNacjonalizm": 6.224,
      "ue": 4.027,
      "rosja": 2.003,
      "usa": 7.129
    }
  },
  "powiat kozienicki": {
    "aborcja": 6.964,
    "lgbt": 7.046,
    "gospodarka": 7.134,
    "kosmopolityzmNacjonalizm": 6.507,
    "ue": 3.762,
    "rosja": 2.001,
    "usa": 7.309,
    "mediaTradycyjne": 64.53,
    "mediaInternetowe": 73.764,
    "glosy": 35891,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.287,
      "lgbt": 6.02,
      "gospodarka": 6.45,
      "kosmopolityzmNacjonalizm": 6.553,
      "ue": 3.677,
      "rosja": 2.047,
      "usa": 7.146
    }
  },
  "powiat legionowski": {
    "aborcja": 5.158,
    "lgbt": 5.295,
    "gospodarka": 6.582,
    "kosmopolityzmNacjonalizm": 4.984,
    "ue": 5.36,
    "rosja": 1.512,
    "usa": 7.459,
    "mediaTradycyjne": 69.47,
    "mediaInternetowe": 76.988,
    "glosy": 84579,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.074,
      "lgbt": 4.653,
      "gospodarka": 6.133,
      "kosmopolityzmNacjonalizm": 5.032,
      "ue": 5.332,
      "rosja": 1.545,
      "usa": 7.254
    }
  },
  "powiat lipski": {
    "aborcja": 7.201,
    "lgbt": 7.259,
    "gospodarka": 7.204,
    "kosmopolityzmNacjonalizm": 6.709,
    "ue": 3.541,
    "rosja": 2.091,
    "usa": 7.257,
    "mediaTradycyjne": 63.335,
    "mediaInternetowe": 73.524,
    "glosy": 17354,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.426,
      "lgbt": 6.177,
      "gospodarka": 6.5,
      "kosmopolityzmNacjonalizm": 6.762,
      "ue": 3.442,
      "rosja": 2.149,
      "usa": 7.092
    }
  },
  "powiat makowski": {
    "aborcja": 7.197,
    "lgbt": 7.269,
    "gospodarka": 7.268,
    "kosmopolityzmNacjonalizm": 6.677,
    "ue": 3.589,
    "rosja": 2.099,
    "usa": 7.304,
    "mediaTradycyjne": 64.438,
    "mediaInternetowe": 74.161,
    "glosy": 23888,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.434,
      "lgbt": 6.183,
      "gospodarka": 6.583,
      "kosmopolityzmNacjonalizm": 6.729,
      "ue": 3.495,
      "rosja": 2.158,
      "usa": 7.135
    }
  },
  "powiat miński": {
    "aborcja": 6.101,
    "lgbt": 6.183,
    "gospodarka": 6.851,
    "kosmopolityzmNacjonalizm": 5.762,
    "ue": 4.526,
    "rosja": 1.849,
    "usa": 7.281,
    "mediaTradycyjne": 66.037,
    "mediaInternetowe": 75.359,
    "glosy": 96646,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.695,
      "lgbt": 5.342,
      "gospodarka": 6.309,
      "kosmopolityzmNacjonalizm": 5.818,
      "ue": 4.454,
      "rosja": 1.909,
      "usa": 7.08
    }
  },
  "powiat mławski": {
    "aborcja": 6.866,
    "lgbt": 6.938,
    "gospodarka": 7.195,
    "kosmopolityzmNacjonalizm": 6.395,
    "ue": 3.881,
    "rosja": 2.026,
    "usa": 7.334,
    "mediaTradycyjne": 65.321,
    "mediaInternetowe": 75.387,
    "glosy": 38263,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.187,
      "lgbt": 5.908,
      "gospodarka": 6.567,
      "kosmopolityzmNacjonalizm": 6.454,
      "ue": 3.796,
      "rosja": 2.091,
      "usa": 7.149
    }
  },
  "powiat nowodworski (mazowieckie)": {
    "aborcja": 5.883,
    "lgbt": 5.996,
    "gospodarka": 6.819,
    "kosmopolityzmNacjonalizm": 5.609,
    "ue": 4.703,
    "rosja": 1.716,
    "usa": 7.397,
    "mediaTradycyjne": 67.474,
    "mediaInternetowe": 76.035,
    "glosy": 47791,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.553,
      "lgbt": 5.194,
      "gospodarka": 6.276,
      "kosmopolityzmNacjonalizm": 5.655,
      "ue": 4.654,
      "rosja": 1.755,
      "usa": 7.208
    }
  },
  "powiat ostrowski (mazowieckie)": {
    "aborcja": 7.143,
    "lgbt": 7.205,
    "gospodarka": 7.226,
    "kosmopolityzmNacjonalizm": 6.642,
    "ue": 3.62,
    "rosja": 2.017,
    "usa": 7.362,
    "mediaTradycyjne": 64.267,
    "mediaInternetowe": 74.119,
    "glosy": 38673,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.357,
      "lgbt": 6.109,
      "gospodarka": 6.538,
      "kosmopolityzmNacjonalizm": 6.699,
      "ue": 3.525,
      "rosja": 2.076,
      "usa": 7.196
    }
  },
  "powiat ostrołęcki": {
    "aborcja": 7.525,
    "lgbt": 7.547,
    "gospodarka": 7.43,
    "kosmopolityzmNacjonalizm": 7.004,
    "ue": 3.221,
    "rosja": 2.409,
    "usa": 7.057,
    "mediaTradycyjne": 62.174,
    "mediaInternetowe": 75.355,
    "glosy": 47937,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.635,
      "lgbt": 6.394,
      "gospodarka": 6.749,
      "kosmopolityzmNacjonalizm": 7.058,
      "ue": 3.109,
      "rosja": 2.502,
      "usa": 6.862
    }
  },
  "powiat otwocki": {
    "aborcja": 5.834,
    "lgbt": 5.954,
    "gospodarka": 6.782,
    "kosmopolityzmNacjonalizm": 5.559,
    "ue": 4.76,
    "rosja": 1.659,
    "usa": 7.436,
    "mediaTradycyjne": 67.656,
    "mediaInternetowe": 75.466,
    "glosy": 82399,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.53,
      "lgbt": 5.168,
      "gospodarka": 6.234,
      "kosmopolityzmNacjonalizm": 5.604,
      "ue": 4.712,
      "rosja": 1.691,
      "usa": 7.254
    }
  },
  "powiat piaseczyński": {
    "aborcja": 4.984,
    "lgbt": 5.129,
    "gospodarka": 6.535,
    "kosmopolityzmNacjonalizm": 4.832,
    "ue": 5.52,
    "rosja": 1.472,
    "usa": 7.473,
    "mediaTradycyjne": 70.108,
    "mediaInternetowe": 77.425,
    "glosy": 134456,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 3.96,
      "lgbt": 4.523,
      "gospodarka": 6.111,
      "kosmopolityzmNacjonalizm": 4.88,
      "ue": 5.499,
      "rosja": 1.503,
      "usa": 7.263
    }
  },
  "powiat pruszkowski": {
    "aborcja": 5.008,
    "lgbt": 5.157,
    "gospodarka": 6.519,
    "kosmopolityzmNacjonalizm": 4.851,
    "ue": 5.501,
    "rosja": 1.452,
    "usa": 7.483,
    "mediaTradycyjne": 70.058,
    "mediaInternetowe": 76.963,
    "glosy": 116245,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 3.983,
      "lgbt": 4.55,
      "gospodarka": 6.083,
      "kosmopolityzmNacjonalizm": 4.897,
      "ue": 5.48,
      "rosja": 1.479,
      "usa": 7.279
    }
  },
  "powiat przasnyski": {
    "aborcja": 7.203,
    "lgbt": 7.266,
    "gospodarka": 7.263,
    "kosmopolityzmNacjonalizm": 6.71,
    "ue": 3.549,
    "rosja": 2.108,
    "usa": 7.281,
    "mediaTradycyjne": 63.932,
    "mediaInternetowe": 74.237,
    "glosy": 26866,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.427,
      "lgbt": 6.176,
      "gospodarka": 6.572,
      "kosmopolityzmNacjonalizm": 6.76,
      "ue": 3.454,
      "rosja": 2.168,
      "usa": 7.112
    }
  },
  "powiat przysuski": {
    "aborcja": 7.697,
    "lgbt": 7.759,
    "gospodarka": 7.293,
    "kosmopolityzmNacjonalizm": 7.122,
    "ue": 3.123,
    "rosja": 1.982,
    "usa": 7.445,
    "mediaTradycyjne": 62.617,
    "mediaInternetowe": 71.144,
    "glosy": 24341,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.735,
      "lgbt": 6.549,
      "gospodarka": 6.473,
      "kosmopolityzmNacjonalizm": 7.172,
      "ue": 3.014,
      "rosja": 2.016,
      "usa": 7.325
    }
  },
  "powiat pułtuski": {
    "aborcja": 6.793,
    "lgbt": 6.865,
    "gospodarka": 7.115,
    "kosmopolityzmNacjonalizm": 6.324,
    "ue": 3.947,
    "rosja": 2.029,
    "usa": 7.277,
    "mediaTradycyjne": 65.013,
    "mediaInternetowe": 74.635,
    "glosy": 28608,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.162,
      "lgbt": 5.871,
      "gospodarka": 6.494,
      "kosmopolityzmNacjonalizm": 6.381,
      "ue": 3.859,
      "rosja": 2.093,
      "usa": 7.091
    }
  },
  "powiat płocki": {
    "aborcja": 6.825,
    "lgbt": 6.903,
    "gospodarka": 7.044,
    "kosmopolityzmNacjonalizm": 6.346,
    "ue": 3.926,
    "rosja": 1.919,
    "usa": 7.349,
    "mediaTradycyjne": 64.713,
    "mediaInternetowe": 73.157,
    "glosy": 61673,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.184,
      "lgbt": 5.904,
      "gospodarka": 6.384,
      "kosmopolityzmNacjonalizm": 6.403,
      "ue": 3.835,
      "rosja": 1.969,
      "usa": 7.183
    }
  },
  "powiat płoński": {
    "aborcja": 6.739,
    "lgbt": 6.825,
    "gospodarka": 7.093,
    "kosmopolityzmNacjonalizm": 6.303,
    "ue": 3.977,
    "rosja": 1.975,
    "usa": 7.313,
    "mediaTradycyjne": 65.292,
    "mediaInternetowe": 74.541,
    "glosy": 46603,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.136,
      "lgbt": 5.846,
      "gospodarka": 6.455,
      "kosmopolityzmNacjonalizm": 6.353,
      "ue": 3.897,
      "rosja": 2.026,
      "usa": 7.138
    }
  },
  "powiat radomski": {
    "aborcja": 7.33,
    "lgbt": 7.376,
    "gospodarka": 7.261,
    "kosmopolityzmNacjonalizm": 6.831,
    "ue": 3.411,
    "rosja": 2.123,
    "usa": 7.259,
    "mediaTradycyjne": 62.97,
    "mediaInternetowe": 73.732,
    "glosy": 87954,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.49,
      "lgbt": 6.252,
      "gospodarka": 6.547,
      "kosmopolityzmNacjonalizm": 6.884,
      "ue": 3.308,
      "rosja": 2.186,
      "usa": 7.094
    }
  },
  "powiat siedlecki": {
    "aborcja": 7.847,
    "lgbt": 7.854,
    "gospodarka": 7.517,
    "kosmopolityzmNacjonalizm": 7.302,
    "ue": 2.9,
    "rosja": 2.568,
    "usa": 6.933,
    "mediaTradycyjne": 60.729,
    "mediaInternetowe": 74.875,
    "glosy": 47475,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.866,
      "lgbt": 6.647,
      "gospodarka": 6.796,
      "kosmopolityzmNacjonalizm": 7.35,
      "ue": 2.776,
      "rosja": 2.667,
      "usa": 6.741
    }
  },
  "powiat sierpecki": {
    "aborcja": 6.91,
    "lgbt": 6.983,
    "gospodarka": 7.104,
    "kosmopolityzmNacjonalizm": 6.419,
    "ue": 3.853,
    "rosja": 1.912,
    "usa": 7.4,
    "mediaTradycyjne": 64.82,
    "mediaInternetowe": 73.657,
    "glosy": 26523,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.21,
      "lgbt": 5.944,
      "gospodarka": 6.437,
      "kosmopolityzmNacjonalizm": 6.481,
      "ue": 3.761,
      "rosja": 1.965,
      "usa": 7.234
    }
  },
  "powiat sochaczewski": {
    "aborcja": 6.346,
    "lgbt": 6.447,
    "gospodarka": 6.923,
    "kosmopolityzmNacjonalizm": 5.95,
    "ue": 4.342,
    "rosja": 1.87,
    "usa": 7.315,
    "mediaTradycyjne": 66.235,
    "mediaInternetowe": 74.528,
    "glosy": 49734,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.889,
      "lgbt": 5.563,
      "gospodarka": 6.335,
      "kosmopolityzmNacjonalizm": 6.0,
      "ue": 4.27,
      "rosja": 1.918,
      "usa": 7.132
    }
  },
  "powiat sokołowski": {
    "aborcja": 7.361,
    "lgbt": 7.413,
    "gospodarka": 7.341,
    "kosmopolityzmNacjonalizm": 6.834,
    "ue": 3.414,
    "rosja": 2.257,
    "usa": 7.173,
    "mediaTradycyjne": 63.318,
    "mediaInternetowe": 74.356,
    "glosy": 29956,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.555,
      "lgbt": 6.306,
      "gospodarka": 6.655,
      "kosmopolityzmNacjonalizm": 6.885,
      "ue": 3.312,
      "rosja": 2.329,
      "usa": 6.994
    }
  },
  "powiat szydłowiecki": {
    "aborcja": 7.441,
    "lgbt": 7.491,
    "gospodarka": 7.277,
    "kosmopolityzmNacjonalizm": 6.94,
    "ue": 3.299,
    "rosja": 2.127,
    "usa": 7.26,
    "mediaTradycyjne": 62.663,
    "mediaInternetowe": 73.234,
    "glosy": 21116,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.573,
      "lgbt": 6.348,
      "gospodarka": 6.532,
      "kosmopolityzmNacjonalizm": 6.987,
      "ue": 3.195,
      "rosja": 2.183,
      "usa": 7.106
    }
  },
  "powiat warszawski zachodni": {
    "aborcja": 5.185,
    "lgbt": 5.324,
    "gospodarka": 6.595,
    "kosmopolityzmNacjonalizm": 5.007,
    "ue": 5.337,
    "rosja": 1.513,
    "usa": 7.467,
    "mediaTradycyjne": 69.542,
    "mediaInternetowe": 77.014,
    "glosy": 85972,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.093,
      "lgbt": 4.674,
      "gospodarka": 6.141,
      "kosmopolityzmNacjonalizm": 5.054,
      "ue": 5.311,
      "rosja": 1.545,
      "usa": 7.264
    }
  },
  "powiat wołomiński": {
    "aborcja": 6.043,
    "lgbt": 6.125,
    "gospodarka": 6.829,
    "kosmopolityzmNacjonalizm": 5.758,
    "ue": 4.528,
    "rosja": 1.805,
    "usa": 7.3,
    "mediaTradycyjne": 65.906,
    "mediaInternetowe": 75.623,
    "glosy": 164838,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.639,
      "lgbt": 5.287,
      "gospodarka": 6.276,
      "kosmopolityzmNacjonalizm": 5.809,
      "ue": 4.463,
      "rosja": 1.858,
      "usa": 7.105
    }
  },
  "powiat wyszkowski": {
    "aborcja": 6.841,
    "lgbt": 6.908,
    "gospodarka": 7.132,
    "kosmopolityzmNacjonalizm": 6.373,
    "ue": 3.894,
    "rosja": 2.043,
    "usa": 7.271,
    "mediaTradycyjne": 64.844,
    "mediaInternetowe": 74.793,
    "glosy": 44182,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.181,
      "lgbt": 5.895,
      "gospodarka": 6.507,
      "kosmopolityzmNacjonalizm": 6.43,
      "ue": 3.804,
      "rosja": 2.11,
      "usa": 7.085
    }
  },
  "powiat węgrowski": {
    "aborcja": 7.098,
    "lgbt": 7.161,
    "gospodarka": 7.226,
    "kosmopolityzmNacjonalizm": 6.629,
    "ue": 3.628,
    "rosja": 2.137,
    "usa": 7.22,
    "mediaTradycyjne": 63.882,
    "mediaInternetowe": 74.462,
    "glosy": 37382,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.371,
      "lgbt": 6.106,
      "gospodarka": 6.554,
      "kosmopolityzmNacjonalizm": 6.677,
      "ue": 3.536,
      "rosja": 2.2,
      "usa": 7.043
    }
  },
  "powiat zwoleński": {
    "aborcja": 7.45,
    "lgbt": 7.501,
    "gospodarka": 7.287,
    "kosmopolityzmNacjonalizm": 6.918,
    "ue": 3.324,
    "rosja": 2.128,
    "usa": 7.276,
    "mediaTradycyjne": 62.937,
    "mediaInternetowe": 73.212,
    "glosy": 19608,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.579,
      "lgbt": 6.354,
      "gospodarka": 6.551,
      "kosmopolityzmNacjonalizm": 6.97,
      "ue": 3.218,
      "rosja": 2.188,
      "usa": 7.118
    }
  },
  "powiat łosicki": {
    "aborcja": 7.74,
    "lgbt": 7.771,
    "gospodarka": 7.524,
    "kosmopolityzmNacjonalizm": 7.208,
    "ue": 3.007,
    "rosja": 2.661,
    "usa": 6.834,
    "mediaTradycyjne": 61.401,
    "mediaInternetowe": 75.345,
    "glosy": 16884,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.866,
      "lgbt": 6.628,
      "gospodarka": 6.825,
      "kosmopolityzmNacjonalizm": 7.246,
      "ue": 2.895,
      "rosja": 2.756,
      "usa": 6.634
    }
  },
  "powiat żuromiński": {
    "aborcja": 6.71,
    "lgbt": 6.793,
    "gospodarka": 7.051,
    "kosmopolityzmNacjonalizm": 6.225,
    "ue": 4.064,
    "rosja": 1.76,
    "usa": 7.541,
    "mediaTradycyjne": 65.935,
    "mediaInternetowe": 73.88,
    "glosy": 19292,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 5.048,
      "lgbt": 5.774,
      "gospodarka": 6.406,
      "kosmopolityzmNacjonalizm": 6.294,
      "ue": 3.98,
      "rosja": 1.807,
      "usa": 7.377
    }
  },
  "powiat żyrardowski": {
    "aborcja": 5.952,
    "lgbt": 6.06,
    "gospodarka": 6.812,
    "kosmopolityzmNacjonalizm": 5.636,
    "ue": 4.669,
    "rosja": 1.779,
    "usa": 7.332,
    "mediaTradycyjne": 67.139,
    "mediaInternetowe": 75.552,
    "glosy": 45145,
    "woj": "mazowieckie",
    "elektorat": {
      "aborcja": 4.616,
      "lgbt": 5.257,
      "gospodarka": 6.275,
      "kosmopolityzmNacjonalizm": 5.685,
      "ue": 4.611,
      "rosja": 1.825,
      "usa": 7.138
    }
  },
  "powiat kraków": {
    "aborcja": 4.694,
    "lgbt": 4.805,
    "gospodarka": 6.175,
    "kosmopolityzmNacjonalizm": 4.616,
    "ue": 5.692,
    "rosja": 1.405,
    "usa": 7.283,
    "mediaTradycyjne": 68.018,
    "mediaInternetowe": 75.447,
    "glosy": 537137,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 3.744,
      "lgbt": 4.274,
      "gospodarka": 5.767,
      "kosmopolityzmNacjonalizm": 4.661,
      "ue": 5.65,
      "rosja": 1.444,
      "usa": 7.066
    }
  },
  "powiat nowy sącz": {
    "aborcja": 6.42,
    "lgbt": 6.539,
    "gospodarka": 7.054,
    "kosmopolityzmNacjonalizm": 6.028,
    "ue": 4.289,
    "rosja": 1.76,
    "usa": 7.528,
    "mediaTradycyjne": 67.672,
    "mediaInternetowe": 75.417,
    "glosy": 46603,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.908,
      "lgbt": 5.603,
      "gospodarka": 6.442,
      "kosmopolityzmNacjonalizm": 6.074,
      "ue": 4.234,
      "rosja": 1.793,
      "usa": 7.361
    }
  },
  "powiat tarnów": {
    "aborcja": 5.783,
    "lgbt": 5.932,
    "gospodarka": 6.784,
    "kosmopolityzmNacjonalizm": 5.419,
    "ue": 4.923,
    "rosja": 1.625,
    "usa": 7.509,
    "mediaTradycyjne": 69.441,
    "mediaInternetowe": 75.226,
    "glosy": 61694,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.533,
      "lgbt": 5.165,
      "gospodarka": 6.265,
      "kosmopolityzmNacjonalizm": 5.469,
      "ue": 4.879,
      "rosja": 1.654,
      "usa": 7.324
    }
  },
  "powiat bocheński": {
    "aborcja": 7.196,
    "lgbt": 7.255,
    "gospodarka": 7.189,
    "kosmopolityzmNacjonalizm": 6.661,
    "ue": 3.592,
    "rosja": 2.053,
    "usa": 7.304,
    "mediaTradycyjne": 63.851,
    "mediaInternetowe": 73.194,
    "glosy": 65469,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.415,
      "lgbt": 6.164,
      "gospodarka": 6.499,
      "kosmopolityzmNacjonalizm": 6.718,
      "ue": 3.488,
      "rosja": 2.114,
      "usa": 7.137
    }
  },
  "powiat brzeski (małopolskie)": {
    "aborcja": 7.368,
    "lgbt": 7.415,
    "gospodarka": 7.3,
    "kosmopolityzmNacjonalizm": 6.827,
    "ue": 3.416,
    "rosja": 2.178,
    "usa": 7.237,
    "mediaTradycyjne": 63.372,
    "mediaInternetowe": 74.003,
    "glosy": 52278,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.524,
      "lgbt": 6.283,
      "gospodarka": 6.607,
      "kosmopolityzmNacjonalizm": 6.882,
      "ue": 3.309,
      "rosja": 2.25,
      "usa": 7.063
    }
  },
  "powiat chrzanowski": {
    "aborcja": 5.583,
    "lgbt": 5.705,
    "gospodarka": 6.724,
    "kosmopolityzmNacjonalizm": 5.325,
    "ue": 5.001,
    "rosja": 1.655,
    "usa": 7.407,
    "mediaTradycyjne": 68.436,
    "mediaInternetowe": 76.472,
    "glosy": 69598,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.359,
      "lgbt": 4.971,
      "gospodarka": 6.235,
      "kosmopolityzmNacjonalizm": 5.376,
      "ue": 4.958,
      "rosja": 1.697,
      "usa": 7.206
    }
  },
  "powiat dąbrowski": {
    "aborcja": 7.825,
    "lgbt": 7.875,
    "gospodarka": 7.408,
    "kosmopolityzmNacjonalizm": 7.226,
    "ue": 3.009,
    "rosja": 2.215,
    "usa": 7.269,
    "mediaTradycyjne": 62.296,
    "mediaInternetowe": 72.261,
    "glosy": 29607,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.851,
      "lgbt": 6.657,
      "gospodarka": 6.621,
      "kosmopolityzmNacjonalizm": 7.273,
      "ue": 2.894,
      "rosja": 2.271,
      "usa": 7.125
    }
  },
  "powiat gorlicki": {
    "aborcja": 7.196,
    "lgbt": 7.266,
    "gospodarka": 7.279,
    "kosmopolityzmNacjonalizm": 6.703,
    "ue": 3.56,
    "rosja": 2.136,
    "usa": 7.261,
    "mediaTradycyjne": 64.168,
    "mediaInternetowe": 74.341,
    "glosy": 58521,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.443,
      "lgbt": 6.189,
      "gospodarka": 6.591,
      "kosmopolityzmNacjonalizm": 6.749,
      "ue": 3.469,
      "rosja": 2.194,
      "usa": 7.092
    }
  },
  "powiat krakowski": {
    "aborcja": 6.134,
    "lgbt": 6.222,
    "gospodarka": 6.882,
    "kosmopolityzmNacjonalizm": 5.802,
    "ue": 4.491,
    "rosja": 1.81,
    "usa": 7.344,
    "mediaTradycyjne": 66.415,
    "mediaInternetowe": 75.584,
    "glosy": 182231,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.702,
      "lgbt": 5.359,
      "gospodarka": 6.327,
      "kosmopolityzmNacjonalizm": 5.855,
      "ue": 4.424,
      "rosja": 1.864,
      "usa": 7.15
    }
  },
  "powiat limanowski": {
    "aborcja": 7.936,
    "lgbt": 7.967,
    "gospodarka": 7.458,
    "kosmopolityzmNacjonalizm": 7.343,
    "ue": 2.881,
    "rosja": 2.214,
    "usa": 7.299,
    "mediaTradycyjne": 61.768,
    "mediaInternetowe": 72.727,
    "glosy": 75478,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.873,
      "lgbt": 6.694,
      "gospodarka": 6.658,
      "kosmopolityzmNacjonalizm": 7.395,
      "ue": 2.761,
      "rosja": 2.277,
      "usa": 7.155
    }
  },
  "powiat miechowski": {
    "aborcja": 6.981,
    "lgbt": 7.04,
    "gospodarka": 7.142,
    "kosmopolityzmNacjonalizm": 6.545,
    "ue": 3.708,
    "rosja": 2.067,
    "usa": 7.232,
    "mediaTradycyjne": 63.678,
    "mediaInternetowe": 74.23,
    "glosy": 27289,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.275,
      "lgbt": 6.004,
      "gospodarka": 6.47,
      "kosmopolityzmNacjonalizm": 6.594,
      "ue": 3.616,
      "rosja": 2.128,
      "usa": 7.058
    }
  },
  "powiat myślenicki": {
    "aborcja": 7.175,
    "lgbt": 7.218,
    "gospodarka": 7.245,
    "kosmopolityzmNacjonalizm": 6.688,
    "ue": 3.559,
    "rosja": 2.1,
    "usa": 7.277,
    "mediaTradycyjne": 63.593,
    "mediaInternetowe": 74.602,
    "glosy": 78576,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.365,
      "lgbt": 6.111,
      "gospodarka": 6.572,
      "kosmopolityzmNacjonalizm": 6.745,
      "ue": 3.458,
      "rosja": 2.172,
      "usa": 7.099
    }
  },
  "powiat nowosądecki": {
    "aborcja": 7.827,
    "lgbt": 7.867,
    "gospodarka": 7.453,
    "kosmopolityzmNacjonalizm": 7.255,
    "ue": 2.982,
    "rosja": 2.126,
    "usa": 7.392,
    "mediaTradycyjne": 62.549,
    "mediaInternetowe": 73.139,
    "glosy": 125594,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.786,
      "lgbt": 6.605,
      "gospodarka": 6.659,
      "kosmopolityzmNacjonalizm": 7.307,
      "ue": 2.871,
      "rosja": 2.182,
      "usa": 7.252
    }
  },
  "powiat nowotarski": {
    "aborcja": 7.484,
    "lgbt": 7.533,
    "gospodarka": 7.414,
    "kosmopolityzmNacjonalizm": 6.988,
    "ue": 3.252,
    "rosja": 2.327,
    "usa": 7.132,
    "mediaTradycyjne": 62.994,
    "mediaInternetowe": 75.068,
    "glosy": 101012,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.629,
      "lgbt": 6.393,
      "gospodarka": 6.708,
      "kosmopolityzmNacjonalizm": 7.029,
      "ue": 3.153,
      "rosja": 2.4,
      "usa": 6.955
    }
  },
  "powiat olkuski": {
    "aborcja": 6.105,
    "lgbt": 6.211,
    "gospodarka": 6.859,
    "kosmopolityzmNacjonalizm": 5.787,
    "ue": 4.515,
    "rosja": 1.768,
    "usa": 7.371,
    "mediaTradycyjne": 66.742,
    "mediaInternetowe": 75.253,
    "glosy": 64904,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.706,
      "lgbt": 5.366,
      "gospodarka": 6.286,
      "kosmopolityzmNacjonalizm": 5.834,
      "ue": 4.456,
      "rosja": 1.808,
      "usa": 7.189
    }
  },
  "powiat oświęcimski": {
    "aborcja": 5.961,
    "lgbt": 6.07,
    "gospodarka": 6.876,
    "kosmopolityzmNacjonalizm": 5.647,
    "ue": 4.667,
    "rosja": 1.729,
    "usa": 7.433,
    "mediaTradycyjne": 67.803,
    "mediaInternetowe": 76.347,
    "glosy": 89605,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.588,
      "lgbt": 5.236,
      "gospodarka": 6.342,
      "kosmopolityzmNacjonalizm": 5.699,
      "ue": 4.614,
      "rosja": 1.775,
      "usa": 7.24
    }
  },
  "powiat proszowicki": {
    "aborcja": 7.261,
    "lgbt": 7.307,
    "gospodarka": 7.218,
    "kosmopolityzmNacjonalizm": 6.714,
    "ue": 3.529,
    "rosja": 2.138,
    "usa": 7.231,
    "mediaTradycyjne": 63.32,
    "mediaInternetowe": 73.499,
    "glosy": 24415,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.454,
      "lgbt": 6.203,
      "gospodarka": 6.538,
      "kosmopolityzmNacjonalizm": 6.774,
      "ue": 3.418,
      "rosja": 2.211,
      "usa": 7.054
    }
  },
  "powiat suski": {
    "aborcja": 7.072,
    "lgbt": 7.126,
    "gospodarka": 7.257,
    "kosmopolityzmNacjonalizm": 6.607,
    "ue": 3.654,
    "rosja": 2.065,
    "usa": 7.323,
    "mediaTradycyjne": 64.39,
    "mediaInternetowe": 75.305,
    "glosy": 47020,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.296,
      "lgbt": 6.037,
      "gospodarka": 6.596,
      "kosmopolityzmNacjonalizm": 6.662,
      "ue": 3.563,
      "rosja": 2.133,
      "usa": 7.145
    }
  },
  "powiat tarnowski": {
    "aborcja": 7.518,
    "lgbt": 7.564,
    "gospodarka": 7.327,
    "kosmopolityzmNacjonalizm": 6.955,
    "ue": 3.284,
    "rosja": 2.187,
    "usa": 7.246,
    "mediaTradycyjne": 62.906,
    "mediaInternetowe": 73.297,
    "glosy": 112343,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.63,
      "lgbt": 6.404,
      "gospodarka": 6.603,
      "kosmopolityzmNacjonalizm": 7.009,
      "ue": 3.173,
      "rosja": 2.254,
      "usa": 7.082
    }
  },
  "powiat tatrzański": {
    "aborcja": 7.02,
    "lgbt": 7.111,
    "gospodarka": 7.284,
    "kosmopolityzmNacjonalizm": 6.598,
    "ue": 3.668,
    "rosja": 2.351,
    "usa": 7.01,
    "mediaTradycyjne": 64.45,
    "mediaInternetowe": 75.633,
    "glosy": 40650,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 5.424,
      "lgbt": 6.134,
      "gospodarka": 6.639,
      "kosmopolityzmNacjonalizm": 6.623,
      "ue": 3.594,
      "rosja": 2.411,
      "usa": 6.821
    }
  },
  "powiat wadowicki": {
    "aborcja": 6.573,
    "lgbt": 6.648,
    "gospodarka": 7.083,
    "kosmopolityzmNacjonalizm": 6.167,
    "ue": 4.114,
    "rosja": 1.96,
    "usa": 7.322,
    "mediaTradycyjne": 65.65,
    "mediaInternetowe": 75.632,
    "glosy": 92295,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.993,
      "lgbt": 5.685,
      "gospodarka": 6.49,
      "kosmopolityzmNacjonalizm": 6.222,
      "ue": 4.036,
      "rosja": 2.024,
      "usa": 7.13
    }
  },
  "powiat wielicki": {
    "aborcja": 6.119,
    "lgbt": 6.202,
    "gospodarka": 6.836,
    "kosmopolityzmNacjonalizm": 5.719,
    "ue": 4.572,
    "rosja": 1.804,
    "usa": 7.341,
    "mediaTradycyjne": 66.57,
    "mediaInternetowe": 74.98,
    "glosy": 88354,
    "woj": "małopolskie",
    "elektorat": {
      "aborcja": 4.692,
      "lgbt": 5.343,
      "gospodarka": 6.306,
      "kosmopolityzmNacjonalizm": 5.784,
      "ue": 4.493,
      "rosja": 1.867,
      "usa": 7.139
    }
  },
  "powiat opole": {
    "aborcja": 4.511,
    "lgbt": 4.7,
    "gospodarka": 6.458,
    "kosmopolityzmNacjonalizm": 4.404,
    "ue": 5.99,
    "rosja": 1.346,
    "usa": 7.568,
    "mediaTradycyjne": 72.937,
    "mediaInternetowe": 78.76,
    "glosy": 75157,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 3.678,
      "lgbt": 4.202,
      "gospodarka": 6.104,
      "kosmopolityzmNacjonalizm": 4.446,
      "ue": 5.997,
      "rosja": 1.365,
      "usa": 7.35
    }
  },
  "powiat brzeski (opolskie)": {
    "aborcja": 6.001,
    "lgbt": 6.115,
    "gospodarka": 6.957,
    "kosmopolityzmNacjonalizm": 5.703,
    "ue": 4.612,
    "rosja": 1.886,
    "usa": 7.308,
    "mediaTradycyjne": 67.79,
    "mediaInternetowe": 77.296,
    "glosy": 46513,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.658,
      "lgbt": 5.298,
      "gospodarka": 6.437,
      "kosmopolityzmNacjonalizm": 5.746,
      "ue": 4.564,
      "rosja": 1.938,
      "usa": 7.103
    }
  },
  "powiat głubczycki": {
    "aborcja": 6.411,
    "lgbt": 6.536,
    "gospodarka": 7.109,
    "kosmopolityzmNacjonalizm": 6.045,
    "ue": 4.276,
    "rosja": 1.841,
    "usa": 7.469,
    "mediaTradycyjne": 67.816,
    "mediaInternetowe": 76.283,
    "glosy": 21712,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.923,
      "lgbt": 5.613,
      "gospodarka": 6.507,
      "kosmopolityzmNacjonalizm": 6.085,
      "ue": 4.227,
      "rosja": 1.875,
      "usa": 7.296
    }
  },
  "powiat kluczborski": {
    "aborcja": 5.812,
    "lgbt": 5.942,
    "gospodarka": 6.918,
    "kosmopolityzmNacjonalizm": 5.497,
    "ue": 4.837,
    "rosja": 1.79,
    "usa": 7.403,
    "mediaTradycyjne": 69.138,
    "mediaInternetowe": 77.57,
    "glosy": 30812,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.53,
      "lgbt": 5.157,
      "gospodarka": 6.432,
      "kosmopolityzmNacjonalizm": 5.547,
      "ue": 4.796,
      "rosja": 1.84,
      "usa": 7.195
    }
  },
  "powiat krapkowicki": {
    "aborcja": 5.382,
    "lgbt": 5.506,
    "gospodarka": 6.818,
    "kosmopolityzmNacjonalizm": 5.133,
    "ue": 5.209,
    "rosja": 1.752,
    "usa": 7.374,
    "mediaTradycyjne": 69.865,
    "mediaInternetowe": 78.975,
    "glosy": 27601,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.228,
      "lgbt": 4.809,
      "gospodarka": 6.415,
      "kosmopolityzmNacjonalizm": 5.19,
      "ue": 5.176,
      "rosja": 1.814,
      "usa": 7.139
    }
  },
  "powiat kędzierzyńsko-kozielski": {
    "aborcja": 5.317,
    "lgbt": 5.467,
    "gospodarka": 6.788,
    "kosmopolityzmNacjonalizm": 5.092,
    "ue": 5.267,
    "rosja": 1.663,
    "usa": 7.447,
    "mediaTradycyjne": 70.527,
    "mediaInternetowe": 78.494,
    "glosy": 42539,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.212,
      "lgbt": 4.795,
      "gospodarka": 6.36,
      "kosmopolityzmNacjonalizm": 5.139,
      "ue": 5.246,
      "rosja": 1.704,
      "usa": 7.23
    }
  },
  "powiat namysłowski": {
    "aborcja": 5.994,
    "lgbt": 6.097,
    "gospodarka": 6.903,
    "kosmopolityzmNacjonalizm": 5.648,
    "ue": 4.665,
    "rosja": 1.756,
    "usa": 7.43,
    "mediaTradycyjne": 67.759,
    "mediaInternetowe": 76.539,
    "glosy": 22639,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.602,
      "lgbt": 5.251,
      "gospodarka": 6.382,
      "kosmopolityzmNacjonalizm": 5.71,
      "ue": 4.607,
      "rosja": 1.812,
      "usa": 7.229
    }
  },
  "powiat nyski": {
    "aborcja": 6.016,
    "lgbt": 6.149,
    "gospodarka": 6.951,
    "kosmopolityzmNacjonalizm": 5.698,
    "ue": 4.632,
    "rosja": 1.751,
    "usa": 7.461,
    "mediaTradycyjne": 68.572,
    "mediaInternetowe": 76.591,
    "glosy": 66118,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.664,
      "lgbt": 5.318,
      "gospodarka": 6.403,
      "kosmopolityzmNacjonalizm": 5.741,
      "ue": 4.591,
      "rosja": 1.785,
      "usa": 7.276
    }
  },
  "powiat oleski": {
    "aborcja": 6.053,
    "lgbt": 6.15,
    "gospodarka": 6.984,
    "kosmopolityzmNacjonalizm": 5.726,
    "ue": 4.58,
    "rosja": 1.958,
    "usa": 7.253,
    "mediaTradycyjne": 67.25,
    "mediaInternetowe": 77.338,
    "glosy": 29802,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.689,
      "lgbt": 5.325,
      "gospodarka": 6.482,
      "kosmopolityzmNacjonalizm": 5.777,
      "ue": 4.523,
      "rosja": 2.024,
      "usa": 7.036
    }
  },
  "powiat opolski (opolskie)": {
    "aborcja": 5.379,
    "lgbt": 5.513,
    "gospodarka": 6.825,
    "kosmopolityzmNacjonalizm": 5.134,
    "ue": 5.216,
    "rosja": 1.73,
    "usa": 7.402,
    "mediaTradycyjne": 70.136,
    "mediaInternetowe": 78.776,
    "glosy": 58546,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.242,
      "lgbt": 4.824,
      "gospodarka": 6.412,
      "kosmopolityzmNacjonalizm": 5.186,
      "ue": 5.188,
      "rosja": 1.785,
      "usa": 7.174
    }
  },
  "powiat prudnicki": {
    "aborcja": 6.13,
    "lgbt": 6.236,
    "gospodarka": 7.02,
    "kosmopolityzmNacjonalizm": 5.8,
    "ue": 4.513,
    "rosja": 1.877,
    "usa": 7.367,
    "mediaTradycyjne": 67.722,
    "mediaInternetowe": 77.288,
    "glosy": 24321,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.719,
      "lgbt": 5.373,
      "gospodarka": 6.489,
      "kosmopolityzmNacjonalizm": 5.848,
      "ue": 4.461,
      "rosja": 1.933,
      "usa": 7.165
    }
  },
  "powiat strzelecki": {
    "aborcja": 5.64,
    "lgbt": 5.755,
    "gospodarka": 6.914,
    "kosmopolityzmNacjonalizm": 5.355,
    "ue": 4.981,
    "rosja": 1.792,
    "usa": 7.397,
    "mediaTradycyjne": 69.297,
    "mediaInternetowe": 78.618,
    "glosy": 33314,
    "woj": "opolskie",
    "elektorat": {
      "aborcja": 4.39,
      "lgbt": 4.995,
      "gospodarka": 6.475,
      "kosmopolityzmNacjonalizm": 5.412,
      "ue": 4.941,
      "rosja": 1.854,
      "usa": 7.171
    }
  },
  "powiat krosno": {
    "aborcja": 6.124,
    "lgbt": 6.263,
    "gospodarka": 6.961,
    "kosmopolityzmNacjonalizm": 5.771,
    "ue": 4.557,
    "rosja": 1.82,
    "usa": 7.396,
    "mediaTradycyjne": 68.256,
    "mediaInternetowe": 75.756,
    "glosy": 25563,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 4.781,
      "lgbt": 5.438,
      "gospodarka": 6.398,
      "kosmopolityzmNacjonalizm": 5.809,
      "ue": 4.512,
      "rosja": 1.851,
      "usa": 7.215
    }
  },
  "powiat przemyśl": {
    "aborcja": 6.044,
    "lgbt": 6.189,
    "gospodarka": 6.963,
    "kosmopolityzmNacjonalizm": 5.714,
    "ue": 4.621,
    "rosja": 1.804,
    "usa": 7.411,
    "mediaTradycyjne": 68.67,
    "mediaInternetowe": 76.317,
    "glosy": 30387,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 4.727,
      "lgbt": 5.379,
      "gospodarka": 6.41,
      "kosmopolityzmNacjonalizm": 5.751,
      "ue": 4.583,
      "rosja": 1.834,
      "usa": 7.228
    }
  },
  "powiat rzeszów": {
    "aborcja": 5.859,
    "lgbt": 5.953,
    "gospodarka": 6.826,
    "kosmopolityzmNacjonalizm": 5.562,
    "ue": 4.738,
    "rosja": 1.839,
    "usa": 7.274,
    "mediaTradycyjne": 67.162,
    "mediaInternetowe": 76.627,
    "glosy": 125232,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 4.538,
      "lgbt": 5.161,
      "gospodarka": 6.332,
      "kosmopolityzmNacjonalizm": 5.614,
      "ue": 4.679,
      "rosja": 1.901,
      "usa": 7.06
    }
  },
  "powiat tarnobrzeg": {
    "aborcja": 5.765,
    "lgbt": 5.916,
    "gospodarka": 6.84,
    "kosmopolityzmNacjonalizm": 5.467,
    "ue": 4.876,
    "rosja": 1.683,
    "usa": 7.462,
    "mediaTradycyjne": 69.248,
    "mediaInternetowe": 76.315,
    "glosy": 24705,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 4.527,
      "lgbt": 5.159,
      "gospodarka": 6.315,
      "kosmopolityzmNacjonalizm": 5.51,
      "ue": 4.843,
      "rosja": 1.709,
      "usa": 7.276
    }
  },
  "powiat bieszczadzki": {
    "aborcja": 6.58,
    "lgbt": 6.683,
    "gospodarka": 7.074,
    "kosmopolityzmNacjonalizm": 6.08,
    "ue": 4.215,
    "rosja": 2.011,
    "usa": 7.288,
    "mediaTradycyjne": 66.676,
    "mediaInternetowe": 75.054,
    "glosy": 11507,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.064,
      "lgbt": 5.752,
      "gospodarka": 6.498,
      "kosmopolityzmNacjonalizm": 6.14,
      "ue": 4.136,
      "rosja": 2.073,
      "usa": 7.092
    }
  },
  "powiat brzozowski": {
    "aborcja": 7.988,
    "lgbt": 8.029,
    "gospodarka": 7.527,
    "kosmopolityzmNacjonalizm": 7.412,
    "ue": 2.808,
    "rosja": 2.441,
    "usa": 7.085,
    "mediaTradycyjne": 61.44,
    "mediaInternetowe": 73.309,
    "glosy": 35179,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.993,
      "lgbt": 6.8,
      "gospodarka": 6.738,
      "kosmopolityzmNacjonalizm": 7.449,
      "ue": 2.694,
      "rosja": 2.508,
      "usa": 6.929
    }
  },
  "powiat dębicki": {
    "aborcja": 7.445,
    "lgbt": 7.505,
    "gospodarka": 7.35,
    "kosmopolityzmNacjonalizm": 6.944,
    "ue": 3.303,
    "rosja": 2.227,
    "usa": 7.202,
    "mediaTradycyjne": 63.163,
    "mediaInternetowe": 74.052,
    "glosy": 76136,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.61,
      "lgbt": 6.377,
      "gospodarka": 6.625,
      "kosmopolityzmNacjonalizm": 6.984,
      "ue": 3.205,
      "rosja": 2.286,
      "usa": 7.038
    }
  },
  "powiat jarosławski": {
    "aborcja": 7.524,
    "lgbt": 7.575,
    "gospodarka": 7.412,
    "kosmopolityzmNacjonalizm": 6.994,
    "ue": 3.252,
    "rosja": 2.235,
    "usa": 7.242,
    "mediaTradycyjne": 63.268,
    "mediaInternetowe": 74.515,
    "glosy": 64649,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.636,
      "lgbt": 6.411,
      "gospodarka": 6.691,
      "kosmopolityzmNacjonalizm": 7.043,
      "ue": 3.151,
      "rosja": 2.302,
      "usa": 7.074
    }
  },
  "powiat jasielski": {
    "aborcja": 7.426,
    "lgbt": 7.499,
    "gospodarka": 7.329,
    "kosmopolityzmNacjonalizm": 6.913,
    "ue": 3.344,
    "rosja": 2.147,
    "usa": 7.28,
    "mediaTradycyjne": 63.65,
    "mediaInternetowe": 73.515,
    "glosy": 61182,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.604,
      "lgbt": 6.375,
      "gospodarka": 6.59,
      "kosmopolityzmNacjonalizm": 6.953,
      "ue": 3.251,
      "rosja": 2.196,
      "usa": 7.128
    }
  },
  "powiat kolbuszowski": {
    "aborcja": 7.898,
    "lgbt": 7.92,
    "gospodarka": 7.484,
    "kosmopolityzmNacjonalizm": 7.348,
    "ue": 2.868,
    "rosja": 2.324,
    "usa": 7.182,
    "mediaTradycyjne": 61.306,
    "mediaInternetowe": 73.636,
    "glosy": 32304,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.86,
      "lgbt": 6.668,
      "gospodarka": 6.703,
      "kosmopolityzmNacjonalizm": 7.395,
      "ue": 2.75,
      "rosja": 2.397,
      "usa": 7.024
    }
  },
  "powiat krośnieński (podkarpackie)": {
    "aborcja": 7.431,
    "lgbt": 7.497,
    "gospodarka": 7.347,
    "kosmopolityzmNacjonalizm": 6.92,
    "ue": 3.33,
    "rosja": 2.259,
    "usa": 7.167,
    "mediaTradycyjne": 63.271,
    "mediaInternetowe": 73.912,
    "glosy": 62852,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.628,
      "lgbt": 6.389,
      "gospodarka": 6.626,
      "kosmopolityzmNacjonalizm": 6.959,
      "ue": 3.234,
      "rosja": 2.317,
      "usa": 7.001
    }
  },
  "powiat leski": {
    "aborcja": 6.828,
    "lgbt": 6.919,
    "gospodarka": 7.178,
    "kosmopolityzmNacjonalizm": 6.325,
    "ue": 3.964,
    "rosja": 2.013,
    "usa": 7.349,
    "mediaTradycyjne": 66.058,
    "mediaInternetowe": 74.927,
    "glosy": 16152,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.2,
      "lgbt": 5.916,
      "gospodarka": 6.556,
      "kosmopolityzmNacjonalizm": 6.382,
      "ue": 3.882,
      "rosja": 2.072,
      "usa": 7.167
    }
  },
  "powiat leżajski": {
    "aborcja": 7.914,
    "lgbt": 7.959,
    "gospodarka": 7.458,
    "kosmopolityzmNacjonalizm": 7.304,
    "ue": 2.928,
    "rosja": 2.229,
    "usa": 7.287,
    "mediaTradycyjne": 62.223,
    "mediaInternetowe": 72.555,
    "glosy": 37295,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.893,
      "lgbt": 6.709,
      "gospodarka": 6.662,
      "kosmopolityzmNacjonalizm": 7.354,
      "ue": 2.811,
      "rosja": 2.288,
      "usa": 7.144
    }
  },
  "powiat lubaczowski": {
    "aborcja": 7.305,
    "lgbt": 7.366,
    "gospodarka": 7.291,
    "kosmopolityzmNacjonalizm": 6.795,
    "ue": 3.455,
    "rosja": 2.211,
    "usa": 7.185,
    "mediaTradycyjne": 63.431,
    "mediaInternetowe": 74.084,
    "glosy": 28642,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.522,
      "lgbt": 6.274,
      "gospodarka": 6.594,
      "kosmopolityzmNacjonalizm": 6.843,
      "ue": 3.357,
      "rosja": 2.275,
      "usa": 7.013
    }
  },
  "powiat mielecki": {
    "aborcja": 7.243,
    "lgbt": 7.306,
    "gospodarka": 7.29,
    "kosmopolityzmNacjonalizm": 6.763,
    "ue": 3.488,
    "rosja": 2.223,
    "usa": 7.166,
    "mediaTradycyjne": 63.567,
    "mediaInternetowe": 74.481,
    "glosy": 74879,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.487,
      "lgbt": 6.231,
      "gospodarka": 6.602,
      "kosmopolityzmNacjonalizm": 6.806,
      "ue": 3.395,
      "rosja": 2.286,
      "usa": 6.991
    }
  },
  "powiat niżański": {
    "aborcja": 7.744,
    "lgbt": 7.784,
    "gospodarka": 7.462,
    "kosmopolityzmNacjonalizm": 7.224,
    "ue": 3.001,
    "rosja": 2.404,
    "usa": 7.073,
    "mediaTradycyjne": 61.781,
    "mediaInternetowe": 74.13,
    "glosy": 34353,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.818,
      "lgbt": 6.603,
      "gospodarka": 6.709,
      "kosmopolityzmNacjonalizm": 7.262,
      "ue": 2.893,
      "rosja": 2.475,
      "usa": 6.907
    }
  },
  "powiat przemyski": {
    "aborcja": 7.598,
    "lgbt": 7.641,
    "gospodarka": 7.449,
    "kosmopolityzmNacjonalizm": 7.065,
    "ue": 3.171,
    "rosja": 2.364,
    "usa": 7.121,
    "mediaTradycyjne": 62.646,
    "mediaInternetowe": 74.772,
    "glosy": 39474,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.707,
      "lgbt": 6.48,
      "gospodarka": 6.735,
      "kosmopolityzmNacjonalizm": 7.112,
      "ue": 3.066,
      "rosja": 2.441,
      "usa": 6.943
    }
  },
  "powiat przeworski": {
    "aborcja": 7.599,
    "lgbt": 7.639,
    "gospodarka": 7.416,
    "kosmopolityzmNacjonalizm": 7.063,
    "ue": 3.171,
    "rosja": 2.306,
    "usa": 7.164,
    "mediaTradycyjne": 62.545,
    "mediaInternetowe": 74.343,
    "glosy": 43322,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.69,
      "lgbt": 6.467,
      "gospodarka": 6.693,
      "kosmopolityzmNacjonalizm": 7.112,
      "ue": 3.063,
      "rosja": 2.38,
      "usa": 6.991
    }
  },
  "powiat ropczycko-sędziszowski": {
    "aborcja": 7.959,
    "lgbt": 7.982,
    "gospodarka": 7.518,
    "kosmopolityzmNacjonalizm": 7.393,
    "ue": 2.819,
    "rosja": 2.437,
    "usa": 7.081,
    "mediaTradycyjne": 61.055,
    "mediaInternetowe": 73.706,
    "glosy": 42787,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.937,
      "lgbt": 6.741,
      "gospodarka": 6.744,
      "kosmopolityzmNacjonalizm": 7.437,
      "ue": 2.699,
      "rosja": 2.515,
      "usa": 6.917
    }
  },
  "powiat rzeszowski": {
    "aborcja": 7.563,
    "lgbt": 7.595,
    "gospodarka": 7.408,
    "kosmopolityzmNacjonalizm": 7.054,
    "ue": 3.17,
    "rosja": 2.405,
    "usa": 7.041,
    "mediaTradycyjne": 61.992,
    "mediaInternetowe": 74.643,
    "glosy": 103554,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.688,
      "lgbt": 6.45,
      "gospodarka": 6.701,
      "kosmopolityzmNacjonalizm": 7.098,
      "ue": 3.061,
      "rosja": 2.486,
      "usa": 6.857
    }
  },
  "powiat sanocki": {
    "aborcja": 6.87,
    "lgbt": 6.961,
    "gospodarka": 7.186,
    "kosmopolityzmNacjonalizm": 6.417,
    "ue": 3.863,
    "rosja": 2.103,
    "usa": 7.235,
    "mediaTradycyjne": 65.287,
    "mediaInternetowe": 74.962,
    "glosy": 48951,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.258,
      "lgbt": 5.972,
      "gospodarka": 6.547,
      "kosmopolityzmNacjonalizm": 6.46,
      "ue": 3.785,
      "rosja": 2.158,
      "usa": 7.055
    }
  },
  "powiat stalowowolski": {
    "aborcja": 6.953,
    "lgbt": 7.039,
    "gospodarka": 7.198,
    "kosmopolityzmNacjonalizm": 6.525,
    "ue": 3.749,
    "rosja": 2.073,
    "usa": 7.266,
    "mediaTradycyjne": 64.796,
    "mediaInternetowe": 74.739,
    "glosy": 54701,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.294,
      "lgbt": 6.022,
      "gospodarka": 6.527,
      "kosmopolityzmNacjonalizm": 6.564,
      "ue": 3.671,
      "rosja": 2.121,
      "usa": 7.097
    }
  },
  "powiat strzyżowski": {
    "aborcja": 7.775,
    "lgbt": 7.801,
    "gospodarka": 7.492,
    "kosmopolityzmNacjonalizm": 7.251,
    "ue": 2.963,
    "rosja": 2.523,
    "usa": 6.963,
    "mediaTradycyjne": 61.268,
    "mediaInternetowe": 74.614,
    "glosy": 33160,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.846,
      "lgbt": 6.623,
      "gospodarka": 6.761,
      "kosmopolityzmNacjonalizm": 7.29,
      "ue": 2.849,
      "rosja": 2.607,
      "usa": 6.78
    }
  },
  "powiat tarnobrzeski": {
    "aborcja": 7.391,
    "lgbt": 7.439,
    "gospodarka": 7.317,
    "kosmopolityzmNacjonalizm": 6.877,
    "ue": 3.363,
    "rosja": 2.244,
    "usa": 7.165,
    "mediaTradycyjne": 62.957,
    "mediaInternetowe": 74.198,
    "glosy": 29049,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.56,
      "lgbt": 6.319,
      "gospodarka": 6.616,
      "kosmopolityzmNacjonalizm": 6.926,
      "ue": 3.259,
      "rosja": 2.315,
      "usa": 6.99
    }
  },
  "powiat łańcucki": {
    "aborcja": 7.607,
    "lgbt": 7.637,
    "gospodarka": 7.433,
    "kosmopolityzmNacjonalizm": 7.087,
    "ue": 3.137,
    "rosja": 2.422,
    "usa": 7.039,
    "mediaTradycyjne": 61.895,
    "mediaInternetowe": 74.643,
    "glosy": 48030,
    "woj": "podkarpackie",
    "elektorat": {
      "aborcja": 5.718,
      "lgbt": 6.484,
      "gospodarka": 6.723,
      "kosmopolityzmNacjonalizm": 7.133,
      "ue": 3.026,
      "rosja": 2.506,
      "usa": 6.856
    }
  },
  "powiat białystok": {
    "aborcja": 5.665,
    "lgbt": 5.767,
    "gospodarka": 6.725,
    "kosmopolityzmNacjonalizm": 5.405,
    "ue": 4.904,
    "rosja": 1.705,
    "usa": 7.349,
    "mediaTradycyjne": 67.448,
    "mediaInternetowe": 75.994,
    "glosy": 167376,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 4.409,
      "lgbt": 5.02,
      "gospodarka": 6.23,
      "kosmopolityzmNacjonalizm": 5.456,
      "ue": 4.852,
      "rosja": 1.754,
      "usa": 7.145
    }
  },
  "powiat suwałki": {
    "aborcja": 6.055,
    "lgbt": 6.161,
    "gospodarka": 6.973,
    "kosmopolityzmNacjonalizm": 5.746,
    "ue": 4.565,
    "rosja": 1.873,
    "usa": 7.334,
    "mediaTradycyjne": 67.478,
    "mediaInternetowe": 77.129,
    "glosy": 35200,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 4.677,
      "lgbt": 5.324,
      "gospodarka": 6.445,
      "kosmopolityzmNacjonalizm": 5.794,
      "ue": 4.513,
      "rosja": 1.927,
      "usa": 7.131
    }
  },
  "powiat łomża": {
    "aborcja": 6.483,
    "lgbt": 6.595,
    "gospodarka": 7.069,
    "kosmopolityzmNacjonalizm": 6.112,
    "ue": 4.196,
    "rosja": 1.83,
    "usa": 7.45,
    "mediaTradycyjne": 66.872,
    "mediaInternetowe": 75.385,
    "glosy": 31326,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 4.961,
      "lgbt": 5.658,
      "gospodarka": 6.445,
      "kosmopolityzmNacjonalizm": 6.154,
      "ue": 4.138,
      "rosja": 1.864,
      "usa": 7.282
    }
  },
  "powiat augustowski": {
    "aborcja": 6.84,
    "lgbt": 6.906,
    "gospodarka": 7.227,
    "kosmopolityzmNacjonalizm": 6.418,
    "ue": 3.854,
    "rosja": 2.099,
    "usa": 7.261,
    "mediaTradycyjne": 64.94,
    "mediaInternetowe": 76.044,
    "glosy": 28833,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.18,
      "lgbt": 5.892,
      "gospodarka": 6.607,
      "kosmopolityzmNacjonalizm": 6.47,
      "ue": 3.774,
      "rosja": 2.167,
      "usa": 7.07
    }
  },
  "powiat białostocki": {
    "aborcja": 6.609,
    "lgbt": 6.678,
    "gospodarka": 7.123,
    "kosmopolityzmNacjonalizm": 6.219,
    "ue": 4.058,
    "rosja": 2.033,
    "usa": 7.26,
    "mediaTradycyjne": 65.187,
    "mediaInternetowe": 75.865,
    "glosy": 90121,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.032,
      "lgbt": 5.721,
      "gospodarka": 6.53,
      "kosmopolityzmNacjonalizm": 6.271,
      "ue": 3.981,
      "rosja": 2.1,
      "usa": 7.065
    }
  },
  "powiat bielski (podlaskie)": {
    "aborcja": 6.59,
    "lgbt": 6.676,
    "gospodarka": 7.113,
    "kosmopolityzmNacjonalizm": 6.201,
    "ue": 4.085,
    "rosja": 2.016,
    "usa": 7.272,
    "mediaTradycyjne": 65.503,
    "mediaInternetowe": 75.536,
    "glosy": 26959,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.05,
      "lgbt": 5.74,
      "gospodarka": 6.507,
      "kosmopolityzmNacjonalizm": 6.249,
      "ue": 4.015,
      "rosja": 2.072,
      "usa": 7.084
    }
  },
  "powiat grajewski": {
    "aborcja": 7.244,
    "lgbt": 7.313,
    "gospodarka": 7.336,
    "kosmopolityzmNacjonalizm": 6.777,
    "ue": 3.484,
    "rosja": 2.202,
    "usa": 7.217,
    "mediaTradycyjne": 63.958,
    "mediaInternetowe": 74.879,
    "glosy": 21430,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.486,
      "lgbt": 6.233,
      "gospodarka": 6.643,
      "kosmopolityzmNacjonalizm": 6.817,
      "ue": 3.398,
      "rosja": 2.261,
      "usa": 7.046
    }
  },
  "powiat hajnowski": {
    "aborcja": 5.613,
    "lgbt": 5.702,
    "gospodarka": 6.876,
    "kosmopolityzmNacjonalizm": 5.356,
    "ue": 4.953,
    "rosja": 2.001,
    "usa": 7.126,
    "mediaTradycyjne": 67.472,
    "mediaInternetowe": 78.804,
    "glosy": 22539,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 4.405,
      "lgbt": 4.988,
      "gospodarka": 6.465,
      "kosmopolityzmNacjonalizm": 5.416,
      "ue": 4.901,
      "rosja": 2.086,
      "usa": 6.874
    }
  },
  "powiat kolneński": {
    "aborcja": 7.767,
    "lgbt": 7.813,
    "gospodarka": 7.489,
    "kosmopolityzmNacjonalizm": 7.239,
    "ue": 2.994,
    "rosja": 2.353,
    "usa": 7.151,
    "mediaTradycyjne": 62.119,
    "mediaInternetowe": 74.109,
    "glosy": 18400,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.824,
      "lgbt": 6.617,
      "gospodarka": 6.726,
      "kosmopolityzmNacjonalizm": 7.279,
      "ue": 2.889,
      "rosja": 2.419,
      "usa": 6.991
    }
  },
  "powiat moniecki": {
    "aborcja": 7.524,
    "lgbt": 7.559,
    "gospodarka": 7.445,
    "kosmopolityzmNacjonalizm": 7.024,
    "ue": 3.21,
    "rosja": 2.378,
    "usa": 7.096,
    "mediaTradycyjne": 62.467,
    "mediaInternetowe": 75.209,
    "glosy": 18920,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.652,
      "lgbt": 6.413,
      "gospodarka": 6.746,
      "kosmopolityzmNacjonalizm": 7.07,
      "ue": 3.107,
      "rosja": 2.458,
      "usa": 6.912
    }
  },
  "powiat sejneński": {
    "aborcja": 6.293,
    "lgbt": 6.377,
    "gospodarka": 7.075,
    "kosmopolityzmNacjonalizm": 5.942,
    "ue": 4.35,
    "rosja": 2.071,
    "usa": 7.186,
    "mediaTradycyjne": 66.23,
    "mediaInternetowe": 77.225,
    "glosy": 9403,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 4.853,
      "lgbt": 5.506,
      "gospodarka": 6.546,
      "kosmopolityzmNacjonalizm": 5.994,
      "ue": 4.285,
      "rosja": 2.144,
      "usa": 6.969
    }
  },
  "powiat siemiatycki": {
    "aborcja": 6.82,
    "lgbt": 6.905,
    "gospodarka": 7.213,
    "kosmopolityzmNacjonalizm": 6.42,
    "ue": 3.855,
    "rosja": 2.185,
    "usa": 7.147,
    "mediaTradycyjne": 64.812,
    "mediaInternetowe": 75.686,
    "glosy": 21439,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.24,
      "lgbt": 5.943,
      "gospodarka": 6.583,
      "kosmopolityzmNacjonalizm": 6.458,
      "ue": 3.783,
      "rosja": 2.243,
      "usa": 6.959
    }
  },
  "powiat sokólski": {
    "aborcja": 7.098,
    "lgbt": 7.158,
    "gospodarka": 7.276,
    "kosmopolityzmNacjonalizm": 6.635,
    "ue": 3.629,
    "rosja": 2.088,
    "usa": 7.308,
    "mediaTradycyjne": 64.214,
    "mediaInternetowe": 74.885,
    "glosy": 31874,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.345,
      "lgbt": 6.083,
      "gospodarka": 6.605,
      "kosmopolityzmNacjonalizm": 6.686,
      "ue": 3.54,
      "rosja": 2.15,
      "usa": 7.134
    }
  },
  "powiat suwalski": {
    "aborcja": 7.203,
    "lgbt": 7.24,
    "gospodarka": 7.364,
    "kosmopolityzmNacjonalizm": 6.756,
    "ue": 3.483,
    "rosja": 2.403,
    "usa": 7.008,
    "mediaTradycyjne": 62.947,
    "mediaInternetowe": 76.414,
    "glosy": 18766,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.446,
      "lgbt": 6.173,
      "gospodarka": 6.728,
      "kosmopolityzmNacjonalizm": 6.804,
      "ue": 3.386,
      "rosja": 2.495,
      "usa": 6.801
    }
  },
  "powiat wysokomazowiecki": {
    "aborcja": 8.023,
    "lgbt": 8.051,
    "gospodarka": 7.559,
    "kosmopolityzmNacjonalizm": 7.45,
    "ue": 2.772,
    "rosja": 2.335,
    "usa": 7.224,
    "mediaTradycyjne": 61.464,
    "mediaInternetowe": 73.569,
    "glosy": 30587,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.952,
      "lgbt": 6.774,
      "gospodarka": 6.758,
      "kosmopolityzmNacjonalizm": 7.496,
      "ue": 2.657,
      "rosja": 2.402,
      "usa": 7.074
    }
  },
  "powiat zambrowski": {
    "aborcja": 7.316,
    "lgbt": 7.375,
    "gospodarka": 7.331,
    "kosmopolityzmNacjonalizm": 6.814,
    "ue": 3.447,
    "rosja": 2.06,
    "usa": 7.38,
    "mediaTradycyjne": 64.042,
    "mediaInternetowe": 74.358,
    "glosy": 22672,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.47,
      "lgbt": 6.237,
      "gospodarka": 6.618,
      "kosmopolityzmNacjonalizm": 6.866,
      "ue": 3.353,
      "rosja": 2.117,
      "usa": 7.22
    }
  },
  "powiat łomżyński": {
    "aborcja": 7.884,
    "lgbt": 7.913,
    "gospodarka": 7.519,
    "kosmopolityzmNacjonalizm": 7.352,
    "ue": 2.867,
    "rosja": 2.413,
    "usa": 7.102,
    "mediaTradycyjne": 61.34,
    "mediaInternetowe": 74.12,
    "glosy": 26860,
    "woj": "podlaskie",
    "elektorat": {
      "aborcja": 5.887,
      "lgbt": 6.688,
      "gospodarka": 6.747,
      "kosmopolityzmNacjonalizm": 7.393,
      "ue": 2.755,
      "rosja": 2.486,
      "usa": 6.938
    }
  },
  "powiat gdańsk": {
    "aborcja": 4.196,
    "lgbt": 4.353,
    "gospodarka": 6.123,
    "kosmopolityzmNacjonalizm": 4.197,
    "ue": 6.16,
    "rosja": 1.231,
    "usa": 7.439,
    "mediaTradycyjne": 70.847,
    "mediaInternetowe": 77.126,
    "glosy": 324718,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 3.431,
      "lgbt": 3.927,
      "gospodarka": 5.77,
      "kosmopolityzmNacjonalizm": 4.236,
      "ue": 6.153,
      "rosja": 1.251,
      "usa": 7.221
    }
  },
  "powiat gdynia": {
    "aborcja": 4.189,
    "lgbt": 4.376,
    "gospodarka": 6.256,
    "kosmopolityzmNacjonalizm": 4.159,
    "ue": 6.229,
    "rosja": 1.25,
    "usa": 7.523,
    "mediaTradycyjne": 72.622,
    "mediaInternetowe": 78.344,
    "glosy": 155821,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 3.457,
      "lgbt": 3.953,
      "gospodarka": 5.923,
      "kosmopolityzmNacjonalizm": 4.198,
      "ue": 6.237,
      "rosja": 1.265,
      "usa": 7.303
    }
  },
  "powiat sopot": {
    "aborcja": 3.963,
    "lgbt": 4.181,
    "gospodarka": 6.163,
    "kosmopolityzmNacjonalizm": 3.986,
    "ue": 6.424,
    "rosja": 1.1,
    "usa": 7.619,
    "mediaTradycyjne": 73.816,
    "mediaInternetowe": 78.097,
    "glosy": 24403,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 3.326,
      "lgbt": 3.812,
      "gospodarka": 5.823,
      "kosmopolityzmNacjonalizm": 4.013,
      "ue": 6.45,
      "rosja": 1.091,
      "usa": 7.415
    }
  },
  "powiat słupsk": {
    "aborcja": 4.758,
    "lgbt": 4.948,
    "gospodarka": 6.587,
    "kosmopolityzmNacjonalizm": 4.629,
    "ue": 5.764,
    "rosja": 1.433,
    "usa": 7.557,
    "mediaTradycyjne": 72.565,
    "mediaInternetowe": 78.91,
    "glosy": 47427,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 3.855,
      "lgbt": 4.401,
      "gospodarka": 6.198,
      "kosmopolityzmNacjonalizm": 4.668,
      "ue": 5.77,
      "rosja": 1.45,
      "usa": 7.346
    }
  },
  "powiat bytowski": {
    "aborcja": 5.914,
    "lgbt": 6.016,
    "gospodarka": 6.981,
    "kosmopolityzmNacjonalizm": 5.612,
    "ue": 4.708,
    "rosja": 1.829,
    "usa": 7.393,
    "mediaTradycyjne": 68.134,
    "mediaInternetowe": 78.054,
    "glosy": 39132,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.555,
      "lgbt": 5.19,
      "gospodarka": 6.489,
      "kosmopolityzmNacjonalizm": 5.67,
      "ue": 4.66,
      "rosja": 1.891,
      "usa": 7.179
    }
  },
  "powiat chojnicki": {
    "aborcja": 5.979,
    "lgbt": 6.072,
    "gospodarka": 6.962,
    "kosmopolityzmNacjonalizm": 5.676,
    "ue": 4.632,
    "rosja": 1.872,
    "usa": 7.33,
    "mediaTradycyjne": 67.411,
    "mediaInternetowe": 77.651,
    "glosy": 51865,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.6,
      "lgbt": 5.238,
      "gospodarka": 6.461,
      "kosmopolityzmNacjonalizm": 5.732,
      "ue": 4.577,
      "rosja": 1.937,
      "usa": 7.115
    }
  },
  "powiat człuchowski": {
    "aborcja": 5.422,
    "lgbt": 5.55,
    "gospodarka": 6.836,
    "kosmopolityzmNacjonalizm": 5.194,
    "ue": 5.149,
    "rosja": 1.75,
    "usa": 7.378,
    "mediaTradycyjne": 69.677,
    "mediaInternetowe": 79.077,
    "glosy": 27639,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.255,
      "lgbt": 4.845,
      "gospodarka": 6.411,
      "kosmopolityzmNacjonalizm": 5.248,
      "ue": 5.12,
      "rosja": 1.807,
      "usa": 7.15
    }
  },
  "powiat gdański": {
    "aborcja": 4.987,
    "lgbt": 5.117,
    "gospodarka": 6.604,
    "kosmopolityzmNacjonalizm": 4.831,
    "ue": 5.515,
    "rosja": 1.573,
    "usa": 7.41,
    "mediaTradycyjne": 70.102,
    "mediaInternetowe": 78.69,
    "glosy": 75715,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 3.946,
      "lgbt": 4.5,
      "gospodarka": 6.219,
      "kosmopolityzmNacjonalizm": 4.885,
      "ue": 5.491,
      "rosja": 1.624,
      "usa": 7.179
    }
  },
  "powiat kartuski": {
    "aborcja": 6.058,
    "lgbt": 6.131,
    "gospodarka": 6.994,
    "kosmopolityzmNacjonalizm": 5.746,
    "ue": 4.548,
    "rosja": 1.944,
    "usa": 7.271,
    "mediaTradycyjne": 66.696,
    "mediaInternetowe": 77.859,
    "glosy": 86685,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.637,
      "lgbt": 5.275,
      "gospodarka": 6.501,
      "kosmopolityzmNacjonalizm": 5.806,
      "ue": 4.484,
      "rosja": 2.023,
      "usa": 7.046
    }
  },
  "powiat kościerski": {
    "aborcja": 6.102,
    "lgbt": 6.188,
    "gospodarka": 7.014,
    "kosmopolityzmNacjonalizm": 5.777,
    "ue": 4.526,
    "rosja": 1.912,
    "usa": 7.323,
    "mediaTradycyjne": 67.137,
    "mediaInternetowe": 77.566,
    "glosy": 41194,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.68,
      "lgbt": 5.326,
      "gospodarka": 6.503,
      "kosmopolityzmNacjonalizm": 5.833,
      "ue": 4.467,
      "rosja": 1.98,
      "usa": 7.109
    }
  },
  "powiat kwidzyński": {
    "aborcja": 5.586,
    "lgbt": 5.704,
    "gospodarka": 6.819,
    "kosmopolityzmNacjonalizm": 5.349,
    "ue": 4.981,
    "rosja": 1.714,
    "usa": 7.402,
    "mediaTradycyjne": 68.752,
    "mediaInternetowe": 77.979,
    "glosy": 40639,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.345,
      "lgbt": 4.956,
      "gospodarka": 6.348,
      "kosmopolityzmNacjonalizm": 5.401,
      "ue": 4.943,
      "rosja": 1.764,
      "usa": 7.19
    }
  },
  "powiat lęborski": {
    "aborcja": 5.294,
    "lgbt": 5.436,
    "gospodarka": 6.798,
    "kosmopolityzmNacjonalizm": 5.084,
    "ue": 5.272,
    "rosja": 1.667,
    "usa": 7.446,
    "mediaTradycyjne": 70.51,
    "mediaInternetowe": 79.139,
    "glosy": 35736,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.171,
      "lgbt": 4.754,
      "gospodarka": 6.38,
      "kosmopolityzmNacjonalizm": 5.133,
      "ue": 5.251,
      "rosja": 1.715,
      "usa": 7.222
    }
  },
  "powiat malborski": {
    "aborcja": 5.113,
    "lgbt": 5.257,
    "gospodarka": 6.649,
    "kosmopolityzmNacjonalizm": 4.931,
    "ue": 5.425,
    "rosja": 1.549,
    "usa": 7.47,
    "mediaTradycyjne": 70.259,
    "mediaInternetowe": 78.11,
    "glosy": 32181,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.048,
      "lgbt": 4.62,
      "gospodarka": 6.228,
      "kosmopolityzmNacjonalizm": 4.983,
      "ue": 5.403,
      "rosja": 1.588,
      "usa": 7.254
    }
  },
  "powiat nowodworski (pomorskie)": {
    "aborcja": 5.23,
    "lgbt": 5.387,
    "gospodarka": 6.747,
    "kosmopolityzmNacjonalizm": 5.044,
    "ue": 5.317,
    "rosja": 1.642,
    "usa": 7.433,
    "mediaTradycyjne": 70.594,
    "mediaInternetowe": 78.632,
    "glosy": 20375,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.159,
      "lgbt": 4.738,
      "gospodarka": 6.317,
      "kosmopolityzmNacjonalizm": 5.085,
      "ue": 5.302,
      "rosja": 1.678,
      "usa": 7.218
    }
  },
  "powiat pucki": {
    "aborcja": 5.27,
    "lgbt": 5.388,
    "gospodarka": 6.723,
    "kosmopolityzmNacjonalizm": 5.074,
    "ue": 5.26,
    "rosja": 1.71,
    "usa": 7.342,
    "mediaTradycyjne": 69.308,
    "mediaInternetowe": 78.647,
    "glosy": 57760,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.145,
      "lgbt": 4.718,
      "gospodarka": 6.315,
      "kosmopolityzmNacjonalizm": 5.126,
      "ue": 5.227,
      "rosja": 1.768,
      "usa": 7.11
    }
  },
  "powiat starogardzki": {
    "aborcja": 6.088,
    "lgbt": 6.176,
    "gospodarka": 6.948,
    "kosmopolityzmNacjonalizm": 5.78,
    "ue": 4.519,
    "rosja": 1.85,
    "usa": 7.34,
    "mediaTradycyjne": 66.737,
    "mediaInternetowe": 76.807,
    "glosy": 66336,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.667,
      "lgbt": 5.318,
      "gospodarka": 6.414,
      "kosmopolityzmNacjonalizm": 5.835,
      "ue": 4.459,
      "rosja": 1.91,
      "usa": 7.136
    }
  },
  "powiat sztumski": {
    "aborcja": 5.514,
    "lgbt": 5.648,
    "gospodarka": 6.822,
    "kosmopolityzmNacjonalizm": 5.269,
    "ue": 5.078,
    "rosja": 1.629,
    "usa": 7.505,
    "mediaTradycyjne": 69.707,
    "mediaInternetowe": 78.013,
    "glosy": 19012,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.298,
      "lgbt": 4.908,
      "gospodarka": 6.354,
      "kosmopolityzmNacjonalizm": 5.322,
      "ue": 5.048,
      "rosja": 1.672,
      "usa": 7.298
    }
  },
  "powiat słupski": {
    "aborcja": 5.267,
    "lgbt": 5.41,
    "gospodarka": 6.772,
    "kosmopolityzmNacjonalizm": 5.066,
    "ue": 5.288,
    "rosja": 1.678,
    "usa": 7.413,
    "mediaTradycyjne": 70.28,
    "mediaInternetowe": 78.978,
    "glosy": 51540,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.164,
      "lgbt": 4.744,
      "gospodarka": 6.354,
      "kosmopolityzmNacjonalizm": 5.115,
      "ue": 5.267,
      "rosja": 1.726,
      "usa": 7.189
    }
  },
  "powiat tczewski": {
    "aborcja": 5.535,
    "lgbt": 5.649,
    "gospodarka": 6.748,
    "kosmopolityzmNacjonalizm": 5.295,
    "ue": 5.031,
    "rosja": 1.634,
    "usa": 7.444,
    "mediaTradycyjne": 68.628,
    "mediaInternetowe": 77.259,
    "glosy": 59447,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.295,
      "lgbt": 4.904,
      "gospodarka": 6.274,
      "kosmopolityzmNacjonalizm": 5.351,
      "ue": 4.99,
      "rosja": 1.682,
      "usa": 7.237
    }
  },
  "powiat wejherowski": {
    "aborcja": 5.392,
    "lgbt": 5.497,
    "gospodarka": 6.748,
    "kosmopolityzmNacjonalizm": 5.183,
    "ue": 5.14,
    "rosja": 1.754,
    "usa": 7.308,
    "mediaTradycyjne": 68.575,
    "mediaInternetowe": 78.419,
    "glosy": 130521,
    "woj": "pomorskie",
    "elektorat": {
      "aborcja": 4.217,
      "lgbt": 4.799,
      "gospodarka": 6.327,
      "kosmopolityzmNacjonalizm": 5.237,
      "ue": 5.099,
      "rosja": 1.818,
      "usa": 7.075
    }
  },
  "powiat elbląg": {
    "aborcja": 4.985,
    "lgbt": 5.165,
    "gospodarka": 6.606,
    "kosmopolityzmNacjonalizm": 4.795,
    "ue": 5.589,
    "rosja": 1.387,
    "usa": 7.631,
    "mediaTradycyjne": 71.917,
    "mediaInternetowe": 77.61,
    "glosy": 61379,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 3.983,
      "lgbt": 4.555,
      "gospodarka": 6.176,
      "kosmopolityzmNacjonalizm": 4.841,
      "ue": 5.582,
      "rosja": 1.402,
      "usa": 7.433
    }
  },
  "powiat olsztyn": {
    "aborcja": 4.669,
    "lgbt": 4.825,
    "gospodarka": 6.383,
    "kosmopolityzmNacjonalizm": 4.555,
    "ue": 5.805,
    "rosja": 1.372,
    "usa": 7.48,
    "mediaTradycyjne": 70.833,
    "mediaInternetowe": 77.4,
    "glosy": 102140,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 3.752,
      "lgbt": 4.289,
      "gospodarka": 5.996,
      "kosmopolityzmNacjonalizm": 4.602,
      "ue": 5.789,
      "rosja": 1.4,
      "usa": 7.265
    }
  },
  "powiat bartoszycki": {
    "aborcja": 5.651,
    "lgbt": 5.792,
    "gospodarka": 6.868,
    "kosmopolityzmNacjonalizm": 5.373,
    "ue": 4.975,
    "rosja": 1.666,
    "usa": 7.501,
    "mediaTradycyjne": 69.705,
    "mediaInternetowe": 77.557,
    "glosy": 26460,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.414,
      "lgbt": 5.035,
      "gospodarka": 6.38,
      "kosmopolityzmNacjonalizm": 5.423,
      "ue": 4.944,
      "rosja": 1.703,
      "usa": 7.301
    }
  },
  "powiat braniewski": {
    "aborcja": 5.629,
    "lgbt": 5.753,
    "gospodarka": 6.827,
    "kosmopolityzmNacjonalizm": 5.338,
    "ue": 5.001,
    "rosja": 1.648,
    "usa": 7.497,
    "mediaTradycyjne": 69.199,
    "mediaInternetowe": 77.342,
    "glosy": 18782,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.371,
      "lgbt": 4.99,
      "gospodarka": 6.35,
      "kosmopolityzmNacjonalizm": 5.399,
      "ue": 4.961,
      "rosja": 1.695,
      "usa": 7.291
    }
  },
  "powiat działdowski": {
    "aborcja": 6.176,
    "lgbt": 6.268,
    "gospodarka": 6.906,
    "kosmopolityzmNacjonalizm": 5.834,
    "ue": 4.463,
    "rosja": 1.781,
    "usa": 7.394,
    "mediaTradycyjne": 66.562,
    "mediaInternetowe": 75.582,
    "glosy": 31797,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.723,
      "lgbt": 5.39,
      "gospodarka": 6.338,
      "kosmopolityzmNacjonalizm": 5.89,
      "ue": 4.398,
      "rosja": 1.831,
      "usa": 7.205
    }
  },
  "powiat elbląski": {
    "aborcja": 5.77,
    "lgbt": 5.891,
    "gospodarka": 6.883,
    "kosmopolityzmNacjonalizm": 5.477,
    "ue": 4.852,
    "rosja": 1.776,
    "usa": 7.387,
    "mediaTradycyjne": 68.609,
    "mediaInternetowe": 77.429,
    "glosy": 27197,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.492,
      "lgbt": 5.115,
      "gospodarka": 6.395,
      "kosmopolityzmNacjonalizm": 5.529,
      "ue": 4.809,
      "rosja": 1.827,
      "usa": 7.178
    }
  },
  "powiat ełcki": {
    "aborcja": 6.041,
    "lgbt": 6.141,
    "gospodarka": 7.0,
    "kosmopolityzmNacjonalizm": 5.726,
    "ue": 4.583,
    "rosja": 1.929,
    "usa": 7.294,
    "mediaTradycyjne": 67.524,
    "mediaInternetowe": 77.762,
    "glosy": 41429,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.665,
      "lgbt": 5.306,
      "gospodarka": 6.495,
      "kosmopolityzmNacjonalizm": 5.778,
      "ue": 4.53,
      "rosja": 1.993,
      "usa": 7.078
    }
  },
  "powiat giżycki": {
    "aborcja": 5.389,
    "lgbt": 5.542,
    "gospodarka": 6.801,
    "kosmopolityzmNacjonalizm": 5.147,
    "ue": 5.211,
    "rosja": 1.679,
    "usa": 7.439,
    "mediaTradycyjne": 70.402,
    "mediaInternetowe": 78.263,
    "glosy": 28732,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.267,
      "lgbt": 4.859,
      "gospodarka": 6.359,
      "kosmopolityzmNacjonalizm": 5.194,
      "ue": 5.189,
      "rosja": 1.719,
      "usa": 7.226
    }
  },
  "powiat gołdapski": {
    "aborcja": 5.817,
    "lgbt": 5.937,
    "gospodarka": 6.959,
    "kosmopolityzmNacjonalizm": 5.517,
    "ue": 4.814,
    "rosja": 1.848,
    "usa": 7.361,
    "mediaTradycyjne": 68.768,
    "mediaInternetowe": 78.225,
    "glosy": 11905,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.527,
      "lgbt": 5.151,
      "gospodarka": 6.483,
      "kosmopolityzmNacjonalizm": 5.57,
      "ue": 4.773,
      "rosja": 1.906,
      "usa": 7.143
    }
  },
  "powiat iławski": {
    "aborcja": 5.924,
    "lgbt": 6.027,
    "gospodarka": 6.871,
    "kosmopolityzmNacjonalizm": 5.599,
    "ue": 4.713,
    "rosja": 1.763,
    "usa": 7.396,
    "mediaTradycyjne": 67.68,
    "mediaInternetowe": 76.55,
    "glosy": 48864,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.566,
      "lgbt": 5.206,
      "gospodarka": 6.357,
      "kosmopolityzmNacjonalizm": 5.658,
      "ue": 4.657,
      "rosja": 1.818,
      "usa": 7.193
    }
  },
  "powiat kętrzyński": {
    "aborcja": 5.626,
    "lgbt": 5.759,
    "gospodarka": 6.851,
    "kosmopolityzmNacjonalizm": 5.358,
    "ue": 4.983,
    "rosja": 1.704,
    "usa": 7.444,
    "mediaTradycyjne": 69.351,
    "mediaInternetowe": 77.774,
    "glosy": 28234,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.393,
      "lgbt": 5.009,
      "gospodarka": 6.374,
      "kosmopolityzmNacjonalizm": 5.409,
      "ue": 4.949,
      "rosja": 1.749,
      "usa": 7.236
    }
  },
  "powiat lidzbarski": {
    "aborcja": 5.573,
    "lgbt": 5.704,
    "gospodarka": 6.792,
    "kosmopolityzmNacjonalizm": 5.319,
    "ue": 5.017,
    "rosja": 1.695,
    "usa": 7.41,
    "mediaTradycyjne": 68.992,
    "mediaInternetowe": 77.364,
    "glosy": 19227,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.363,
      "lgbt": 4.973,
      "gospodarka": 6.315,
      "kosmopolityzmNacjonalizm": 5.369,
      "ue": 4.981,
      "rosja": 1.738,
      "usa": 7.203
    }
  },
  "powiat mrągowski": {
    "aborcja": 5.636,
    "lgbt": 5.769,
    "gospodarka": 6.857,
    "kosmopolityzmNacjonalizm": 5.365,
    "ue": 4.972,
    "rosja": 1.769,
    "usa": 7.377,
    "mediaTradycyjne": 69.213,
    "mediaInternetowe": 77.839,
    "glosy": 25365,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.42,
      "lgbt": 5.03,
      "gospodarka": 6.388,
      "kosmopolityzmNacjonalizm": 5.414,
      "ue": 4.936,
      "rosja": 1.817,
      "usa": 7.164
    }
  },
  "powiat nidzicki": {
    "aborcja": 6.27,
    "lgbt": 6.366,
    "gospodarka": 7.022,
    "kosmopolityzmNacjonalizm": 5.919,
    "ue": 4.384,
    "rosja": 1.836,
    "usa": 7.414,
    "mediaTradycyjne": 67.103,
    "mediaInternetowe": 76.682,
    "glosy": 15683,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.78,
      "lgbt": 5.455,
      "gospodarka": 6.458,
      "kosmopolityzmNacjonalizm": 5.974,
      "ue": 4.324,
      "rosja": 1.89,
      "usa": 7.221
    }
  },
  "powiat nowomiejski": {
    "aborcja": 6.497,
    "lgbt": 6.564,
    "gospodarka": 7.037,
    "kosmopolityzmNacjonalizm": 6.059,
    "ue": 4.224,
    "rosja": 1.866,
    "usa": 7.408,
    "mediaTradycyjne": 66.005,
    "mediaInternetowe": 75.63,
    "glosy": 22334,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.897,
      "lgbt": 5.59,
      "gospodarka": 6.462,
      "kosmopolityzmNacjonalizm": 6.13,
      "ue": 4.14,
      "rosja": 1.935,
      "usa": 7.213
    }
  },
  "powiat olecki": {
    "aborcja": 6.291,
    "lgbt": 6.388,
    "gospodarka": 7.09,
    "kosmopolityzmNacjonalizm": 5.949,
    "ue": 4.349,
    "rosja": 2.086,
    "usa": 7.178,
    "mediaTradycyjne": 66.674,
    "mediaInternetowe": 77.441,
    "glosy": 14904,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.872,
      "lgbt": 5.526,
      "gospodarka": 6.557,
      "kosmopolityzmNacjonalizm": 5.993,
      "ue": 4.291,
      "rosja": 2.153,
      "usa": 6.964
    }
  },
  "powiat olsztyński": {
    "aborcja": 5.291,
    "lgbt": 5.417,
    "gospodarka": 6.667,
    "kosmopolityzmNacjonalizm": 5.068,
    "ue": 5.269,
    "rosja": 1.615,
    "usa": 7.414,
    "mediaTradycyjne": 69.31,
    "mediaInternetowe": 77.561,
    "glosy": 71130,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.155,
      "lgbt": 4.74,
      "gospodarka": 6.233,
      "kosmopolityzmNacjonalizm": 5.125,
      "ue": 5.233,
      "rosja": 1.664,
      "usa": 7.196
    }
  },
  "powiat ostródzki": {
    "aborcja": 5.543,
    "lgbt": 5.677,
    "gospodarka": 6.819,
    "kosmopolityzmNacjonalizm": 5.282,
    "ue": 5.06,
    "rosja": 1.717,
    "usa": 7.409,
    "mediaTradycyjne": 69.464,
    "mediaInternetowe": 77.883,
    "glosy": 51648,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.348,
      "lgbt": 4.953,
      "gospodarka": 6.359,
      "kosmopolityzmNacjonalizm": 5.333,
      "ue": 5.026,
      "rosja": 1.764,
      "usa": 7.196
    }
  },
  "powiat piski": {
    "aborcja": 6.454,
    "lgbt": 6.536,
    "gospodarka": 7.099,
    "kosmopolityzmNacjonalizm": 6.077,
    "ue": 4.213,
    "rosja": 1.97,
    "usa": 7.318,
    "mediaTradycyjne": 66.228,
    "mediaInternetowe": 76.693,
    "glosy": 26762,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.915,
      "lgbt": 5.597,
      "gospodarka": 6.529,
      "kosmopolityzmNacjonalizm": 6.133,
      "ue": 4.144,
      "rosja": 2.035,
      "usa": 7.119
    }
  },
  "powiat szczycieński": {
    "aborcja": 6.019,
    "lgbt": 6.126,
    "gospodarka": 6.922,
    "kosmopolityzmNacjonalizm": 5.686,
    "ue": 4.627,
    "rosja": 1.812,
    "usa": 7.376,
    "mediaTradycyjne": 67.633,
    "mediaInternetowe": 76.585,
    "glosy": 35894,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.645,
      "lgbt": 5.292,
      "gospodarka": 6.396,
      "kosmopolityzmNacjonalizm": 5.74,
      "ue": 4.572,
      "rosja": 1.865,
      "usa": 7.175
    }
  },
  "powiat węgorzewski": {
    "aborcja": 5.526,
    "lgbt": 5.659,
    "gospodarka": 6.821,
    "kosmopolityzmNacjonalizm": 5.255,
    "ue": 5.089,
    "rosja": 1.69,
    "usa": 7.443,
    "mediaTradycyjne": 69.606,
    "mediaInternetowe": 77.976,
    "glosy": 11118,
    "woj": "warmińsko-mazurskie",
    "elektorat": {
      "aborcja": 4.324,
      "lgbt": 4.93,
      "gospodarka": 6.367,
      "kosmopolityzmNacjonalizm": 5.312,
      "ue": 5.055,
      "rosja": 1.739,
      "usa": 7.229
    }
  },
  "powiat koszalin": {
    "aborcja": 4.724,
    "lgbt": 4.914,
    "gospodarka": 6.545,
    "kosmopolityzmNacjonalizm": 4.571,
    "ue": 5.824,
    "rosja": 1.37,
    "usa": 7.606,
    "mediaTradycyjne": 72.62,
    "mediaInternetowe": 78.333,
    "glosy": 61472,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 3.824,
      "lgbt": 4.371,
      "gospodarka": 6.157,
      "kosmopolityzmNacjonalizm": 4.618,
      "ue": 5.827,
      "rosja": 1.386,
      "usa": 7.397
    }
  },
  "powiat szczecin": {
    "aborcja": 4.638,
    "lgbt": 4.816,
    "gospodarka": 6.413,
    "kosmopolityzmNacjonalizm": 4.539,
    "ue": 5.837,
    "rosja": 1.346,
    "usa": 7.527,
    "mediaTradycyjne": 71.687,
    "mediaInternetowe": 77.647,
    "glosy": 224458,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 3.756,
      "lgbt": 4.294,
      "gospodarka": 6.017,
      "kosmopolityzmNacjonalizm": 4.577,
      "ue": 5.834,
      "rosja": 1.361,
      "usa": 7.321
    }
  },
  "powiat świnoujście": {
    "aborcja": 4.737,
    "lgbt": 4.943,
    "gospodarka": 6.625,
    "kosmopolityzmNacjonalizm": 4.603,
    "ue": 5.804,
    "rosja": 1.403,
    "usa": 7.621,
    "mediaTradycyjne": 73.47,
    "mediaInternetowe": 79.389,
    "glosy": 23994,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 3.845,
      "lgbt": 4.394,
      "gospodarka": 6.239,
      "kosmopolityzmNacjonalizm": 4.64,
      "ue": 5.819,
      "rosja": 1.416,
      "usa": 7.412
    }
  },
  "powiat białogardzki": {
    "aborcja": 5.399,
    "lgbt": 5.55,
    "gospodarka": 6.782,
    "kosmopolityzmNacjonalizm": 5.167,
    "ue": 5.19,
    "rosja": 1.617,
    "usa": 7.491,
    "mediaTradycyjne": 70.298,
    "mediaInternetowe": 78.114,
    "glosy": 22085,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.248,
      "lgbt": 4.85,
      "gospodarka": 6.324,
      "kosmopolityzmNacjonalizm": 5.216,
      "ue": 5.168,
      "rosja": 1.653,
      "usa": 7.284
    }
  },
  "powiat choszczeński": {
    "aborcja": 5.549,
    "lgbt": 5.684,
    "gospodarka": 6.776,
    "kosmopolityzmNacjonalizm": 5.286,
    "ue": 5.057,
    "rosja": 1.603,
    "usa": 7.505,
    "mediaTradycyjne": 69.385,
    "mediaInternetowe": 77.093,
    "glosy": 22474,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.329,
      "lgbt": 4.944,
      "gospodarka": 6.292,
      "kosmopolityzmNacjonalizm": 5.34,
      "ue": 5.022,
      "rosja": 1.641,
      "usa": 7.306
    }
  },
  "powiat drawski": {
    "aborcja": 5.481,
    "lgbt": 5.636,
    "gospodarka": 6.843,
    "kosmopolityzmNacjonalizm": 5.218,
    "ue": 5.14,
    "rosja": 1.701,
    "usa": 7.448,
    "mediaTradycyjne": 70.461,
    "mediaInternetowe": 78.255,
    "glosy": 28166,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.331,
      "lgbt": 4.932,
      "gospodarka": 6.392,
      "kosmopolityzmNacjonalizm": 5.265,
      "ue": 5.117,
      "rosja": 1.74,
      "usa": 7.237
    }
  },
  "powiat goleniowski": {
    "aborcja": 5.296,
    "lgbt": 5.442,
    "gospodarka": 6.714,
    "kosmopolityzmNacjonalizm": 5.076,
    "ue": 5.277,
    "rosja": 1.576,
    "usa": 7.49,
    "mediaTradycyjne": 70.239,
    "mediaInternetowe": 77.904,
    "glosy": 43839,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.17,
      "lgbt": 4.761,
      "gospodarka": 6.269,
      "kosmopolityzmNacjonalizm": 5.127,
      "ue": 5.253,
      "rosja": 1.614,
      "usa": 7.281
    }
  },
  "powiat gryficki": {
    "aborcja": 5.246,
    "lgbt": 5.425,
    "gospodarka": 6.722,
    "kosmopolityzmNacjonalizm": 5.021,
    "ue": 5.357,
    "rosja": 1.482,
    "usa": 7.605,
    "mediaTradycyjne": 71.517,
    "mediaInternetowe": 77.571,
    "glosy": 31802,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.169,
      "lgbt": 4.763,
      "gospodarka": 6.261,
      "kosmopolityzmNacjonalizm": 5.064,
      "ue": 5.347,
      "rosja": 1.499,
      "usa": 7.412
    }
  },
  "powiat gryfiński": {
    "aborcja": 5.719,
    "lgbt": 5.856,
    "gospodarka": 6.856,
    "kosmopolityzmNacjonalizm": 5.457,
    "ue": 4.881,
    "rosja": 1.703,
    "usa": 7.443,
    "mediaTradycyjne": 69.085,
    "mediaInternetowe": 77.203,
    "glosy": 40309,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.467,
      "lgbt": 5.093,
      "gospodarka": 6.348,
      "kosmopolityzmNacjonalizm": 5.499,
      "ue": 4.848,
      "rosja": 1.738,
      "usa": 7.247
    }
  },
  "powiat kamieński": {
    "aborcja": 5.073,
    "lgbt": 5.261,
    "gospodarka": 6.702,
    "kosmopolityzmNacjonalizm": 4.881,
    "ue": 5.509,
    "rosja": 1.462,
    "usa": 7.612,
    "mediaTradycyjne": 72.242,
    "mediaInternetowe": 78.396,
    "glosy": 26333,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.056,
      "lgbt": 4.635,
      "gospodarka": 6.269,
      "kosmopolityzmNacjonalizm": 4.922,
      "ue": 5.508,
      "rosja": 1.478,
      "usa": 7.412
    }
  },
  "powiat koszaliński": {
    "aborcja": 5.356,
    "lgbt": 5.503,
    "gospodarka": 6.765,
    "kosmopolityzmNacjonalizm": 5.112,
    "ue": 5.242,
    "rosja": 1.655,
    "usa": 7.443,
    "mediaTradycyjne": 70.179,
    "mediaInternetowe": 78.029,
    "glosy": 38127,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.234,
      "lgbt": 4.823,
      "gospodarka": 6.328,
      "kosmopolityzmNacjonalizm": 5.164,
      "ue": 5.216,
      "rosja": 1.697,
      "usa": 7.228
    }
  },
  "powiat kołobrzeski": {
    "aborcja": 4.911,
    "lgbt": 5.111,
    "gospodarka": 6.629,
    "kosmopolityzmNacjonalizm": 4.729,
    "ue": 5.672,
    "rosja": 1.372,
    "usa": 7.664,
    "mediaTradycyjne": 72.816,
    "mediaInternetowe": 78.048,
    "glosy": 51748,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 3.958,
      "lgbt": 4.526,
      "gospodarka": 6.205,
      "kosmopolityzmNacjonalizm": 4.772,
      "ue": 5.676,
      "rosja": 1.379,
      "usa": 7.469
    }
  },
  "powiat myśliborski": {
    "aborcja": 5.622,
    "lgbt": 5.768,
    "gospodarka": 6.884,
    "kosmopolityzmNacjonalizm": 5.373,
    "ue": 4.974,
    "rosja": 1.741,
    "usa": 7.42,
    "mediaTradycyjne": 69.734,
    "mediaInternetowe": 78.19,
    "glosy": 31051,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.416,
      "lgbt": 5.03,
      "gospodarka": 6.406,
      "kosmopolityzmNacjonalizm": 5.415,
      "ue": 4.949,
      "rosja": 1.781,
      "usa": 7.214
    }
  },
  "powiat policki": {
    "aborcja": 4.718,
    "lgbt": 4.892,
    "gospodarka": 6.518,
    "kosmopolityzmNacjonalizm": 4.59,
    "ue": 5.789,
    "rosja": 1.428,
    "usa": 7.515,
    "mediaTradycyjne": 71.902,
    "mediaInternetowe": 78.49,
    "glosy": 49833,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 3.811,
      "lgbt": 4.35,
      "gospodarka": 6.14,
      "kosmopolityzmNacjonalizm": 4.634,
      "ue": 5.786,
      "rosja": 1.454,
      "usa": 7.298
    }
  },
  "powiat pyrzycki": {
    "aborcja": 6.188,
    "lgbt": 6.295,
    "gospodarka": 6.963,
    "kosmopolityzmNacjonalizm": 5.847,
    "ue": 4.464,
    "rosja": 1.774,
    "usa": 7.441,
    "mediaTradycyjne": 67.301,
    "mediaInternetowe": 76.006,
    "glosy": 18870,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.744,
      "lgbt": 5.414,
      "gospodarka": 6.392,
      "kosmopolityzmNacjonalizm": 5.898,
      "ue": 4.408,
      "rosja": 1.818,
      "usa": 7.257
    }
  },
  "powiat stargardzki": {
    "aborcja": 5.392,
    "lgbt": 5.539,
    "gospodarka": 6.75,
    "kosmopolityzmNacjonalizm": 5.163,
    "ue": 5.19,
    "rosja": 1.599,
    "usa": 7.488,
    "mediaTradycyjne": 70.044,
    "mediaInternetowe": 77.594,
    "glosy": 64617,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.246,
      "lgbt": 4.844,
      "gospodarka": 6.288,
      "kosmopolityzmNacjonalizm": 5.21,
      "ue": 5.165,
      "rosja": 1.633,
      "usa": 7.285
    }
  },
  "powiat szczecinecki": {
    "aborcja": 5.516,
    "lgbt": 5.672,
    "gospodarka": 6.818,
    "kosmopolityzmNacjonalizm": 5.264,
    "ue": 5.094,
    "rosja": 1.629,
    "usa": 7.504,
    "mediaTradycyjne": 70.253,
    "mediaInternetowe": 77.619,
    "glosy": 37699,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.343,
      "lgbt": 4.955,
      "gospodarka": 6.338,
      "kosmopolityzmNacjonalizm": 5.308,
      "ue": 5.071,
      "rosja": 1.659,
      "usa": 7.307
    }
  },
  "powiat sławieński": {
    "aborcja": 5.53,
    "lgbt": 5.676,
    "gospodarka": 6.836,
    "kosmopolityzmNacjonalizm": 5.274,
    "ue": 5.08,
    "rosja": 1.649,
    "usa": 7.495,
    "mediaTradycyjne": 70.038,
    "mediaInternetowe": 77.916,
    "glosy": 32165,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.336,
      "lgbt": 4.947,
      "gospodarka": 6.364,
      "kosmopolityzmNacjonalizm": 5.323,
      "ue": 5.054,
      "rosja": 1.686,
      "usa": 7.292
    }
  },
  "powiat wałecki": {
    "aborcja": 5.222,
    "lgbt": 5.374,
    "gospodarka": 6.705,
    "kosmopolityzmNacjonalizm": 5.003,
    "ue": 5.357,
    "rosja": 1.579,
    "usa": 7.484,
    "mediaTradycyjne": 70.64,
    "mediaInternetowe": 78.107,
    "glosy": 26599,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.134,
      "lgbt": 4.716,
      "gospodarka": 6.276,
      "kosmopolityzmNacjonalizm": 5.053,
      "ue": 5.336,
      "rosja": 1.616,
      "usa": 7.271
    }
  },
  "powiat łobeski": {
    "aborcja": 5.615,
    "lgbt": 5.775,
    "gospodarka": 6.846,
    "kosmopolityzmNacjonalizm": 5.333,
    "ue": 5.025,
    "rosja": 1.643,
    "usa": 7.515,
    "mediaTradycyjne": 70.266,
    "mediaInternetowe": 77.19,
    "glosy": 16066,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.421,
      "lgbt": 5.04,
      "gospodarka": 6.353,
      "kosmopolityzmNacjonalizm": 5.376,
      "ue": 5.0,
      "rosja": 1.67,
      "usa": 7.322
    }
  },
  "powiat świdwiński": {
    "aborcja": 5.566,
    "lgbt": 5.719,
    "gospodarka": 6.831,
    "kosmopolityzmNacjonalizm": 5.292,
    "ue": 5.064,
    "rosja": 1.634,
    "usa": 7.513,
    "mediaTradycyjne": 70.167,
    "mediaInternetowe": 77.464,
    "glosy": 22629,
    "woj": "zachodniopomorskie",
    "elektorat": {
      "aborcja": 4.371,
      "lgbt": 4.987,
      "gospodarka": 6.349,
      "kosmopolityzmNacjonalizm": 5.34,
      "ue": 5.038,
      "rosja": 1.666,
      "usa": 7.315
    }
  },
  "powiat piotrków trybunalski": {
    "aborcja": 5.633,
    "lgbt": 5.774,
    "gospodarka": 6.755,
    "kosmopolityzmNacjonalizm": 5.368,
    "ue": 4.968,
    "rosja": 1.662,
    "usa": 7.422,
    "mediaTradycyjne": 68.879,
    "mediaInternetowe": 76.259,
    "glosy": 40276,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.426,
      "lgbt": 5.044,
      "gospodarka": 6.247,
      "kosmopolityzmNacjonalizm": 5.411,
      "ue": 4.932,
      "rosja": 1.693,
      "usa": 7.23
    }
  },
  "powiat skierniewice": {
    "aborcja": 5.396,
    "lgbt": 5.541,
    "gospodarka": 6.61,
    "kosmopolityzmNacjonalizm": 5.146,
    "ue": 5.196,
    "rosja": 1.512,
    "usa": 7.493,
    "mediaTradycyjne": 69.354,
    "mediaInternetowe": 75.654,
    "glosy": 28415,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.251,
      "lgbt": 4.853,
      "gospodarka": 6.12,
      "kosmopolityzmNacjonalizm": 5.193,
      "ue": 5.16,
      "rosja": 1.537,
      "usa": 7.304
    }
  },
  "powiat łódź": {
    "aborcja": 4.376,
    "lgbt": 4.55,
    "gospodarka": 6.266,
    "kosmopolityzmNacjonalizm": 4.333,
    "ue": 6.037,
    "rosja": 1.315,
    "usa": 7.45,
    "mediaTradycyjne": 71.276,
    "mediaInternetowe": 77.478,
    "glosy": 405526,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 3.589,
      "lgbt": 4.101,
      "gospodarka": 5.896,
      "kosmopolityzmNacjonalizm": 4.373,
      "ue": 6.036,
      "rosja": 1.331,
      "usa": 7.236
    }
  },
  "powiat bełchatowski": {
    "aborcja": 6.814,
    "lgbt": 6.862,
    "gospodarka": 7.101,
    "kosmopolityzmNacjonalizm": 6.394,
    "ue": 3.86,
    "rosja": 2.02,
    "usa": 7.258,
    "mediaTradycyjne": 63.92,
    "mediaInternetowe": 75.005,
    "glosy": 64641,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.123,
      "lgbt": 5.84,
      "gospodarka": 6.466,
      "kosmopolityzmNacjonalizm": 6.455,
      "ue": 3.766,
      "rosja": 2.091,
      "usa": 7.071
    }
  },
  "powiat brzeziński": {
    "aborcja": 6.401,
    "lgbt": 6.477,
    "gospodarka": 6.986,
    "kosmopolityzmNacjonalizm": 6.055,
    "ue": 4.22,
    "rosja": 1.989,
    "usa": 7.208,
    "mediaTradycyjne": 65.09,
    "mediaInternetowe": 75.459,
    "glosy": 18079,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.911,
      "lgbt": 5.582,
      "gospodarka": 6.403,
      "kosmopolityzmNacjonalizm": 6.104,
      "ue": 4.147,
      "rosja": 2.049,
      "usa": 7.013
    }
  },
  "powiat kutnowski": {
    "aborcja": 6.209,
    "lgbt": 6.326,
    "gospodarka": 6.902,
    "kosmopolityzmNacjonalizm": 5.867,
    "ue": 4.443,
    "rosja": 1.733,
    "usa": 7.443,
    "mediaTradycyjne": 67.006,
    "mediaInternetowe": 74.801,
    "glosy": 50800,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.784,
      "lgbt": 5.459,
      "gospodarka": 6.301,
      "kosmopolityzmNacjonalizm": 5.913,
      "ue": 4.386,
      "rosja": 1.764,
      "usa": 7.273
    }
  },
  "powiat opoczyński": {
    "aborcja": 7.327,
    "lgbt": 7.397,
    "gospodarka": 7.185,
    "kosmopolityzmNacjonalizm": 6.809,
    "ue": 3.448,
    "rosja": 1.949,
    "usa": 7.404,
    "mediaTradycyjne": 63.462,
    "mediaInternetowe": 71.998,
    "glosy": 44484,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.502,
      "lgbt": 6.277,
      "gospodarka": 6.424,
      "kosmopolityzmNacjonalizm": 6.858,
      "ue": 3.349,
      "rosja": 1.987,
      "usa": 7.268
    }
  },
  "powiat pabianicki": {
    "aborcja": 5.265,
    "lgbt": 5.411,
    "gospodarka": 6.586,
    "kosmopolityzmNacjonalizm": 5.055,
    "ue": 5.289,
    "rosja": 1.54,
    "usa": 7.436,
    "mediaTradycyjne": 69.3,
    "mediaInternetowe": 76.156,
    "glosy": 73842,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.179,
      "lgbt": 4.766,
      "gospodarka": 6.115,
      "kosmopolityzmNacjonalizm": 5.101,
      "ue": 5.259,
      "rosja": 1.567,
      "usa": 7.239
    }
  },
  "powiat pajęczański": {
    "aborcja": 6.983,
    "lgbt": 7.046,
    "gospodarka": 7.095,
    "kosmopolityzmNacjonalizm": 6.513,
    "ue": 3.744,
    "rosja": 1.962,
    "usa": 7.328,
    "mediaTradycyjne": 63.975,
    "mediaInternetowe": 73.415,
    "glosy": 28683,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.259,
      "lgbt": 5.997,
      "gospodarka": 6.411,
      "kosmopolityzmNacjonalizm": 6.569,
      "ue": 3.649,
      "rosja": 2.016,
      "usa": 7.164
    }
  },
  "powiat piotrkowski": {
    "aborcja": 7.293,
    "lgbt": 7.344,
    "gospodarka": 7.221,
    "kosmopolityzmNacjonalizm": 6.795,
    "ue": 3.446,
    "rosja": 2.161,
    "usa": 7.189,
    "mediaTradycyjne": 62.82,
    "mediaInternetowe": 73.355,
    "glosy": 54300,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.497,
      "lgbt": 6.251,
      "gospodarka": 6.511,
      "kosmopolityzmNacjonalizm": 6.843,
      "ue": 3.342,
      "rosja": 2.223,
      "usa": 7.022
    }
  },
  "powiat poddębicki": {
    "aborcja": 6.51,
    "lgbt": 6.603,
    "gospodarka": 6.932,
    "kosmopolityzmNacjonalizm": 6.085,
    "ue": 4.2,
    "rosja": 1.842,
    "usa": 7.354,
    "mediaTradycyjne": 65.466,
    "mediaInternetowe": 73.481,
    "glosy": 23828,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.988,
      "lgbt": 5.682,
      "gospodarka": 6.304,
      "kosmopolityzmNacjonalizm": 6.14,
      "ue": 4.121,
      "rosja": 1.885,
      "usa": 7.183
    }
  },
  "powiat radomszczański": {
    "aborcja": 6.512,
    "lgbt": 6.604,
    "gospodarka": 6.993,
    "kosmopolityzmNacjonalizm": 6.133,
    "ue": 4.153,
    "rosja": 1.862,
    "usa": 7.36,
    "mediaTradycyjne": 65.58,
    "mediaInternetowe": 74.553,
    "glosy": 60247,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.972,
      "lgbt": 5.669,
      "gospodarka": 6.363,
      "kosmopolityzmNacjonalizm": 6.182,
      "ue": 4.082,
      "rosja": 1.905,
      "usa": 7.188
    }
  },
  "powiat rawski": {
    "aborcja": 6.96,
    "lgbt": 7.037,
    "gospodarka": 7.119,
    "kosmopolityzmNacjonalizm": 6.481,
    "ue": 3.787,
    "rosja": 1.988,
    "usa": 7.32,
    "mediaTradycyjne": 64.457,
    "mediaInternetowe": 73.469,
    "glosy": 27413,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.279,
      "lgbt": 6.011,
      "gospodarka": 6.443,
      "kosmopolityzmNacjonalizm": 6.533,
      "ue": 3.697,
      "rosja": 2.038,
      "usa": 7.155
    }
  },
  "powiat sieradzki": {
    "aborcja": 6.502,
    "lgbt": 6.588,
    "gospodarka": 6.965,
    "kosmopolityzmNacjonalizm": 6.099,
    "ue": 4.186,
    "rosja": 1.837,
    "usa": 7.375,
    "mediaTradycyjne": 65.466,
    "mediaInternetowe": 74.127,
    "glosy": 65188,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.958,
      "lgbt": 5.653,
      "gospodarka": 6.341,
      "kosmopolityzmNacjonalizm": 6.155,
      "ue": 4.108,
      "rosja": 1.884,
      "usa": 7.202
    }
  },
  "powiat skierniewicki": {
    "aborcja": 7.266,
    "lgbt": 7.305,
    "gospodarka": 7.169,
    "kosmopolityzmNacjonalizm": 6.77,
    "ue": 3.462,
    "rosja": 2.117,
    "usa": 7.201,
    "mediaTradycyjne": 62.339,
    "mediaInternetowe": 72.957,
    "glosy": 22966,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.453,
      "lgbt": 6.206,
      "gospodarka": 6.459,
      "kosmopolityzmNacjonalizm": 6.825,
      "ue": 3.351,
      "rosja": 2.183,
      "usa": 7.034
    }
  },
  "powiat tomaszowski (łódzkie)": {
    "aborcja": 6.39,
    "lgbt": 6.491,
    "gospodarka": 6.969,
    "kosmopolityzmNacjonalizm": 6.008,
    "ue": 4.288,
    "rosja": 1.847,
    "usa": 7.367,
    "mediaTradycyjne": 66.326,
    "mediaInternetowe": 74.808,
    "glosy": 66994,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.905,
      "lgbt": 5.588,
      "gospodarka": 6.366,
      "kosmopolityzmNacjonalizm": 6.057,
      "ue": 4.221,
      "rosja": 1.889,
      "usa": 7.19
    }
  },
  "powiat wieluński": {
    "aborcja": 6.347,
    "lgbt": 6.44,
    "gospodarka": 6.927,
    "kosmopolityzmNacjonalizm": 5.966,
    "ue": 4.324,
    "rosja": 1.836,
    "usa": 7.351,
    "mediaTradycyjne": 65.974,
    "mediaInternetowe": 74.663,
    "glosy": 42848,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.863,
      "lgbt": 5.542,
      "gospodarka": 6.332,
      "kosmopolityzmNacjonalizm": 6.021,
      "ue": 4.252,
      "rosja": 1.884,
      "usa": 7.169
    }
  },
  "powiat wieruszowski": {
    "aborcja": 6.668,
    "lgbt": 6.725,
    "gospodarka": 7.11,
    "kosmopolityzmNacjonalizm": 6.235,
    "ue": 4.03,
    "rosja": 2.086,
    "usa": 7.203,
    "mediaTradycyjne": 64.829,
    "mediaInternetowe": 75.81,
    "glosy": 23187,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.06,
      "lgbt": 5.752,
      "gospodarka": 6.529,
      "kosmopolityzmNacjonalizm": 6.296,
      "ue": 3.942,
      "rosja": 2.166,
      "usa": 6.998
    }
  },
  "powiat zduńskowolski": {
    "aborcja": 6.013,
    "lgbt": 6.123,
    "gospodarka": 6.802,
    "kosmopolityzmNacjonalizm": 5.68,
    "ue": 4.624,
    "rosja": 1.744,
    "usa": 7.366,
    "mediaTradycyjne": 66.919,
    "mediaInternetowe": 74.764,
    "glosy": 36861,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.661,
      "lgbt": 5.309,
      "gospodarka": 6.243,
      "kosmopolityzmNacjonalizm": 5.73,
      "ue": 4.564,
      "rosja": 1.784,
      "usa": 7.181
    }
  },
  "powiat zgierski": {
    "aborcja": 5.394,
    "lgbt": 5.532,
    "gospodarka": 6.629,
    "kosmopolityzmNacjonalizm": 5.16,
    "ue": 5.177,
    "rosja": 1.561,
    "usa": 7.446,
    "mediaTradycyjne": 68.988,
    "mediaInternetowe": 76.108,
    "glosy": 102186,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.247,
      "lgbt": 4.846,
      "gospodarka": 6.146,
      "kosmopolityzmNacjonalizm": 5.209,
      "ue": 5.141,
      "rosja": 1.592,
      "usa": 7.25
    }
  },
  "powiat łaski": {
    "aborcja": 6.212,
    "lgbt": 6.312,
    "gospodarka": 6.89,
    "kosmopolityzmNacjonalizm": 5.856,
    "ue": 4.44,
    "rosja": 1.813,
    "usa": 7.349,
    "mediaTradycyjne": 66.413,
    "mediaInternetowe": 74.984,
    "glosy": 29568,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.78,
      "lgbt": 5.447,
      "gospodarka": 6.313,
      "kosmopolityzmNacjonalizm": 5.908,
      "ue": 4.374,
      "rosja": 1.86,
      "usa": 7.164
    }
  },
  "powiat łowicki": {
    "aborcja": 6.581,
    "lgbt": 6.658,
    "gospodarka": 6.947,
    "kosmopolityzmNacjonalizm": 6.157,
    "ue": 4.119,
    "rosja": 1.807,
    "usa": 7.4,
    "mediaTradycyjne": 65.066,
    "mediaInternetowe": 73.523,
    "glosy": 44457,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.99,
      "lgbt": 5.695,
      "gospodarka": 6.308,
      "kosmopolityzmNacjonalizm": 6.216,
      "ue": 4.034,
      "rosja": 1.854,
      "usa": 7.232
    }
  },
  "powiat łódzki wschodni": {
    "aborcja": 5.66,
    "lgbt": 5.773,
    "gospodarka": 6.76,
    "kosmopolityzmNacjonalizm": 5.419,
    "ue": 4.897,
    "rosja": 1.744,
    "usa": 7.324,
    "mediaTradycyjne": 67.717,
    "mediaInternetowe": 76.666,
    "glosy": 48350,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 4.42,
      "lgbt": 5.033,
      "gospodarka": 6.263,
      "kosmopolityzmNacjonalizm": 5.466,
      "ue": 4.851,
      "rosja": 1.79,
      "usa": 7.119
    }
  },
  "powiat łęczycki": {
    "aborcja": 6.739,
    "lgbt": 6.818,
    "gospodarka": 7.081,
    "kosmopolityzmNacjonalizm": 6.311,
    "ue": 3.968,
    "rosja": 1.882,
    "usa": 7.406,
    "mediaTradycyjne": 65.228,
    "mediaInternetowe": 74.462,
    "glosy": 27088,
    "woj": "łódzkie",
    "elektorat": {
      "aborcja": 5.093,
      "lgbt": 5.813,
      "gospodarka": 6.43,
      "kosmopolityzmNacjonalizm": 6.367,
      "ue": 3.887,
      "rosja": 1.931,
      "usa": 7.237
    }
  },
  "powiat bielsko-biała": {
    "aborcja": 5.257,
    "lgbt": 5.403,
    "gospodarka": 6.67,
    "kosmopolityzmNacjonalizm": 5.056,
    "ue": 5.296,
    "rosja": 1.541,
    "usa": 7.494,
    "mediaTradycyjne": 70.069,
    "mediaInternetowe": 77.384,
    "glosy": 98732,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.15,
      "lgbt": 4.737,
      "gospodarka": 6.217,
      "kosmopolityzmNacjonalizm": 5.102,
      "ue": 5.272,
      "rosja": 1.572,
      "usa": 7.292
    }
  },
  "powiat bytom": {
    "aborcja": 5.212,
    "lgbt": 5.338,
    "gospodarka": 6.592,
    "kosmopolityzmNacjonalizm": 5.034,
    "ue": 5.3,
    "rosja": 1.548,
    "usa": 7.426,
    "mediaTradycyjne": 69.051,
    "mediaInternetowe": 77.119,
    "glosy": 72375,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.096,
      "lgbt": 4.678,
      "gospodarka": 6.143,
      "kosmopolityzmNacjonalizm": 5.084,
      "ue": 5.268,
      "rosja": 1.587,
      "usa": 7.217
    }
  },
  "powiat chorzów": {
    "aborcja": 4.677,
    "lgbt": 4.818,
    "gospodarka": 6.42,
    "kosmopolityzmNacjonalizm": 4.588,
    "ue": 5.762,
    "rosja": 1.483,
    "usa": 7.373,
    "mediaTradycyjne": 70.137,
    "mediaInternetowe": 78.08,
    "glosy": 52062,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.763,
      "lgbt": 4.291,
      "gospodarka": 6.049,
      "kosmopolityzmNacjonalizm": 4.635,
      "ue": 5.744,
      "rosja": 1.523,
      "usa": 7.144
    }
  },
  "powiat częstochowa": {
    "aborcja": 5.201,
    "lgbt": 5.369,
    "gospodarka": 6.643,
    "kosmopolityzmNacjonalizm": 5.001,
    "ue": 5.365,
    "rosja": 1.484,
    "usa": 7.541,
    "mediaTradycyjne": 70.769,
    "mediaInternetowe": 77.069,
    "glosy": 121195,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.136,
      "lgbt": 4.724,
      "gospodarka": 6.18,
      "kosmopolityzmNacjonalizm": 5.041,
      "ue": 5.35,
      "rosja": 1.501,
      "usa": 7.348
    }
  },
  "powiat dąbrowa górnicza": {
    "aborcja": 4.843,
    "lgbt": 5.002,
    "gospodarka": 6.451,
    "kosmopolityzmNacjonalizm": 4.719,
    "ue": 5.639,
    "rosja": 1.442,
    "usa": 7.442,
    "mediaTradycyjne": 70.221,
    "mediaInternetowe": 77.054,
    "glosy": 67815,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.896,
      "lgbt": 4.448,
      "gospodarka": 6.028,
      "kosmopolityzmNacjonalizm": 4.763,
      "ue": 5.624,
      "rosja": 1.465,
      "usa": 7.235
    }
  },
  "powiat gliwice": {
    "aborcja": 4.889,
    "lgbt": 5.045,
    "gospodarka": 6.539,
    "kosmopolityzmNacjonalizm": 4.752,
    "ue": 5.611,
    "rosja": 1.464,
    "usa": 7.485,
    "mediaTradycyjne": 70.867,
    "mediaInternetowe": 78.004,
    "glosy": 100185,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.906,
      "lgbt": 4.46,
      "gospodarka": 6.134,
      "kosmopolityzmNacjonalizm": 4.796,
      "ue": 5.597,
      "rosja": 1.493,
      "usa": 7.272
    }
  },
  "powiat jastrzębie-zdrój": {
    "aborcja": 6.176,
    "lgbt": 6.267,
    "gospodarka": 6.913,
    "kosmopolityzmNacjonalizm": 5.87,
    "ue": 4.426,
    "rosja": 1.776,
    "usa": 7.393,
    "mediaTradycyjne": 66.388,
    "mediaInternetowe": 75.8,
    "glosy": 45192,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.717,
      "lgbt": 5.386,
      "gospodarka": 6.334,
      "kosmopolityzmNacjonalizm": 5.92,
      "ue": 4.365,
      "rosja": 1.823,
      "usa": 7.208
    }
  },
  "powiat jaworzno": {
    "aborcja": 5.434,
    "lgbt": 5.56,
    "gospodarka": 6.689,
    "kosmopolityzmNacjonalizm": 5.218,
    "ue": 5.111,
    "rosja": 1.658,
    "usa": 7.372,
    "mediaTradycyjne": 68.642,
    "mediaInternetowe": 77.014,
    "glosy": 50157,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.267,
      "lgbt": 4.864,
      "gospodarka": 6.219,
      "kosmopolityzmNacjonalizm": 5.266,
      "ue": 5.074,
      "rosja": 1.7,
      "usa": 7.164
    }
  },
  "powiat katowice": {
    "aborcja": 4.492,
    "lgbt": 4.646,
    "gospodarka": 6.307,
    "kosmopolityzmNacjonalizm": 4.434,
    "ue": 5.923,
    "rosja": 1.354,
    "usa": 7.436,
    "mediaTradycyjne": 70.722,
    "mediaInternetowe": 77.628,
    "glosy": 172438,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.636,
      "lgbt": 4.155,
      "gospodarka": 5.936,
      "kosmopolityzmNacjonalizm": 4.477,
      "ue": 5.912,
      "rosja": 1.381,
      "usa": 7.217
    }
  },
  "powiat mysłowice": {
    "aborcja": 5.373,
    "lgbt": 5.488,
    "gospodarka": 6.699,
    "kosmopolityzmNacjonalizm": 5.171,
    "ue": 5.156,
    "rosja": 1.652,
    "usa": 7.385,
    "mediaTradycyjne": 68.716,
    "mediaInternetowe": 77.76,
    "glosy": 40249,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.196,
      "lgbt": 4.787,
      "gospodarka": 6.252,
      "kosmopolityzmNacjonalizm": 5.225,
      "ue": 5.118,
      "rosja": 1.704,
      "usa": 7.168
    }
  },
  "powiat piekary śląskie": {
    "aborcja": 5.367,
    "lgbt": 5.492,
    "gospodarka": 6.657,
    "kosmopolityzmNacjonalizm": 5.174,
    "ue": 5.159,
    "rosja": 1.551,
    "usa": 7.465,
    "mediaTradycyjne": 68.883,
    "mediaInternetowe": 76.913,
    "glosy": 27450,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.193,
      "lgbt": 4.791,
      "gospodarka": 6.181,
      "kosmopolityzmNacjonalizm": 5.222,
      "ue": 5.125,
      "rosja": 1.587,
      "usa": 7.265
    }
  },
  "powiat ruda śląska": {
    "aborcja": 5.422,
    "lgbt": 5.525,
    "gospodarka": 6.691,
    "kosmopolityzmNacjonalizm": 5.204,
    "ue": 5.114,
    "rosja": 1.67,
    "usa": 7.362,
    "mediaTradycyjne": 68.199,
    "mediaInternetowe": 77.437,
    "glosy": 68690,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.22,
      "lgbt": 4.812,
      "gospodarka": 6.244,
      "kosmopolityzmNacjonalizm": 5.262,
      "ue": 5.069,
      "rosja": 1.728,
      "usa": 7.142
    }
  },
  "powiat rybnik": {
    "aborcja": 5.754,
    "lgbt": 5.857,
    "gospodarka": 6.83,
    "kosmopolityzmNacjonalizm": 5.49,
    "ue": 4.827,
    "rosja": 1.707,
    "usa": 7.419,
    "mediaTradycyjne": 67.926,
    "mediaInternetowe": 77.141,
    "glosy": 73307,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.435,
      "lgbt": 5.063,
      "gospodarka": 6.33,
      "kosmopolityzmNacjonalizm": 5.545,
      "ue": 4.778,
      "rosja": 1.759,
      "usa": 7.214
    }
  },
  "powiat siemianowice śląskie": {
    "aborcja": 4.795,
    "lgbt": 4.936,
    "gospodarka": 6.477,
    "kosmopolityzmNacjonalizm": 4.677,
    "ue": 5.675,
    "rosja": 1.494,
    "usa": 7.403,
    "mediaTradycyjne": 70.015,
    "mediaInternetowe": 77.781,
    "glosy": 34864,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.846,
      "lgbt": 4.385,
      "gospodarka": 6.089,
      "kosmopolityzmNacjonalizm": 4.727,
      "ue": 5.656,
      "rosja": 1.533,
      "usa": 7.18
    }
  },
  "powiat sosnowiec": {
    "aborcja": 4.823,
    "lgbt": 4.986,
    "gospodarka": 6.444,
    "kosmopolityzmNacjonalizm": 4.7,
    "ue": 5.661,
    "rosja": 1.414,
    "usa": 7.47,
    "mediaTradycyjne": 70.51,
    "mediaInternetowe": 77.047,
    "glosy": 110991,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.88,
      "lgbt": 4.433,
      "gospodarka": 6.02,
      "kosmopolityzmNacjonalizm": 4.742,
      "ue": 5.648,
      "rosja": 1.434,
      "usa": 7.265
    }
  },
  "powiat tychy": {
    "aborcja": 5.125,
    "lgbt": 5.264,
    "gospodarka": 6.603,
    "kosmopolityzmNacjonalizm": 4.945,
    "ue": 5.402,
    "rosja": 1.545,
    "usa": 7.442,
    "mediaTradycyjne": 69.909,
    "mediaInternetowe": 77.606,
    "glosy": 71833,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.054,
      "lgbt": 4.626,
      "gospodarka": 6.176,
      "kosmopolityzmNacjonalizm": 4.993,
      "ue": 5.376,
      "rosja": 1.584,
      "usa": 7.228
    }
  },
  "powiat zabrze": {
    "aborcja": 5.284,
    "lgbt": 5.404,
    "gospodarka": 6.641,
    "kosmopolityzmNacjonalizm": 5.096,
    "ue": 5.234,
    "rosja": 1.602,
    "usa": 7.4,
    "mediaTradycyjne": 68.874,
    "mediaInternetowe": 77.46,
    "glosy": 76066,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.141,
      "lgbt": 4.726,
      "gospodarka": 6.195,
      "kosmopolityzmNacjonalizm": 5.148,
      "ue": 5.198,
      "rosja": 1.648,
      "usa": 7.186
    }
  },
  "powiat świętochłowice": {
    "aborcja": 5.071,
    "lgbt": 5.199,
    "gospodarka": 6.576,
    "kosmopolityzmNacjonalizm": 4.923,
    "ue": 5.414,
    "rosja": 1.596,
    "usa": 7.358,
    "mediaTradycyjne": 69.304,
    "mediaInternetowe": 77.839,
    "glosy": 23147,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.02,
      "lgbt": 4.581,
      "gospodarka": 6.161,
      "kosmopolityzmNacjonalizm": 4.97,
      "ue": 5.386,
      "rosja": 1.641,
      "usa": 7.136
    }
  },
  "powiat żory": {
    "aborcja": 5.855,
    "lgbt": 5.948,
    "gospodarka": 6.867,
    "kosmopolityzmNacjonalizm": 5.579,
    "ue": 4.73,
    "rosja": 1.735,
    "usa": 7.413,
    "mediaTradycyjne": 67.598,
    "mediaInternetowe": 77.294,
    "glosy": 34494,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.483,
      "lgbt": 5.12,
      "gospodarka": 6.36,
      "kosmopolityzmNacjonalizm": 5.636,
      "ue": 4.677,
      "rosja": 1.792,
      "usa": 7.207
    }
  },
  "powiat bielski (śląskie)": {
    "aborcja": 5.907,
    "lgbt": 6.006,
    "gospodarka": 6.897,
    "kosmopolityzmNacjonalizm": 5.607,
    "ue": 4.706,
    "rosja": 1.755,
    "usa": 7.417,
    "mediaTradycyjne": 67.755,
    "mediaInternetowe": 76.98,
    "glosy": 101190,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.541,
      "lgbt": 5.179,
      "gospodarka": 6.386,
      "kosmopolityzmNacjonalizm": 5.663,
      "ue": 4.653,
      "rosja": 1.809,
      "usa": 7.213
    }
  },
  "powiat bieruńsko-lędziński": {
    "aborcja": 6.408,
    "lgbt": 6.462,
    "gospodarka": 7.043,
    "kosmopolityzmNacjonalizm": 6.07,
    "ue": 4.197,
    "rosja": 2.021,
    "usa": 7.212,
    "mediaTradycyjne": 65.141,
    "mediaInternetowe": 76.894,
    "glosy": 34275,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.856,
      "lgbt": 5.527,
      "gospodarka": 6.491,
      "kosmopolityzmNacjonalizm": 6.126,
      "ue": 4.119,
      "rosja": 2.1,
      "usa": 7.0
    }
  },
  "powiat będziński": {
    "aborcja": 4.901,
    "lgbt": 5.055,
    "gospodarka": 6.483,
    "kosmopolityzmNacjonalizm": 4.759,
    "ue": 5.596,
    "rosja": 1.456,
    "usa": 7.453,
    "mediaTradycyjne": 70.205,
    "mediaInternetowe": 77.208,
    "glosy": 85983,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 3.922,
      "lgbt": 4.48,
      "gospodarka": 6.062,
      "kosmopolityzmNacjonalizm": 4.807,
      "ue": 5.578,
      "rosja": 1.483,
      "usa": 7.244
    }
  },
  "powiat cieszyński": {
    "aborcja": 5.78,
    "lgbt": 5.892,
    "gospodarka": 6.896,
    "kosmopolityzmNacjonalizm": 5.497,
    "ue": 4.828,
    "rosja": 1.77,
    "usa": 7.4,
    "mediaTradycyjne": 68.463,
    "mediaInternetowe": 77.638,
    "glosy": 103245,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.479,
      "lgbt": 5.103,
      "gospodarka": 6.41,
      "kosmopolityzmNacjonalizm": 5.55,
      "ue": 4.784,
      "rosja": 1.825,
      "usa": 7.189
    }
  },
  "powiat częstochowski": {
    "aborcja": 6.18,
    "lgbt": 6.28,
    "gospodarka": 6.897,
    "kosmopolityzmNacjonalizm": 5.838,
    "ue": 4.461,
    "rosja": 1.807,
    "usa": 7.358,
    "mediaTradycyjne": 66.571,
    "mediaInternetowe": 75.263,
    "glosy": 78162,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.755,
      "lgbt": 5.419,
      "gospodarka": 6.325,
      "kosmopolityzmNacjonalizm": 5.888,
      "ue": 4.398,
      "rosja": 1.852,
      "usa": 7.173
    }
  },
  "powiat gliwicki": {
    "aborcja": 5.793,
    "lgbt": 5.897,
    "gospodarka": 6.863,
    "kosmopolityzmNacjonalizm": 5.524,
    "ue": 4.79,
    "rosja": 1.812,
    "usa": 7.325,
    "mediaTradycyjne": 67.788,
    "mediaInternetowe": 77.329,
    "glosy": 61874,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.495,
      "lgbt": 5.117,
      "gospodarka": 6.372,
      "kosmopolityzmNacjonalizm": 5.573,
      "ue": 4.742,
      "rosja": 1.868,
      "usa": 7.113
    }
  },
  "powiat kłobucki": {
    "aborcja": 6.299,
    "lgbt": 6.395,
    "gospodarka": 6.939,
    "kosmopolityzmNacjonalizm": 5.906,
    "ue": 4.386,
    "rosja": 1.899,
    "usa": 7.297,
    "mediaTradycyjne": 66.408,
    "mediaInternetowe": 75.197,
    "glosy": 48610,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.849,
      "lgbt": 5.516,
      "gospodarka": 6.374,
      "kosmopolityzmNacjonalizm": 5.96,
      "ue": 4.315,
      "rosja": 1.954,
      "usa": 7.103
    }
  },
  "powiat lubliniecki": {
    "aborcja": 6.268,
    "lgbt": 6.349,
    "gospodarka": 7.033,
    "kosmopolityzmNacjonalizm": 5.92,
    "ue": 4.37,
    "rosja": 1.985,
    "usa": 7.254,
    "mediaTradycyjne": 66.424,
    "mediaInternetowe": 77.041,
    "glosy": 40832,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.803,
      "lgbt": 5.461,
      "gospodarka": 6.499,
      "kosmopolityzmNacjonalizm": 5.973,
      "ue": 4.304,
      "rosja": 2.055,
      "usa": 7.043
    }
  },
  "powiat mikołowski": {
    "aborcja": 5.619,
    "lgbt": 5.726,
    "gospodarka": 6.789,
    "kosmopolityzmNacjonalizm": 5.368,
    "ue": 4.953,
    "rosja": 1.707,
    "usa": 7.393,
    "mediaTradycyjne": 68.311,
    "mediaInternetowe": 77.38,
    "glosy": 58402,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.357,
      "lgbt": 4.968,
      "gospodarka": 6.316,
      "kosmopolityzmNacjonalizm": 5.421,
      "ue": 4.907,
      "rosja": 1.76,
      "usa": 7.18
    }
  },
  "powiat myszkowski": {
    "aborcja": 6.18,
    "lgbt": 6.28,
    "gospodarka": 6.934,
    "kosmopolityzmNacjonalizm": 5.86,
    "ue": 4.437,
    "rosja": 1.894,
    "usa": 7.28,
    "mediaTradycyjne": 66.446,
    "mediaInternetowe": 75.899,
    "glosy": 39018,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.775,
      "lgbt": 5.432,
      "gospodarka": 6.371,
      "kosmopolityzmNacjonalizm": 5.905,
      "ue": 4.377,
      "rosja": 1.943,
      "usa": 7.087
    }
  },
  "powiat pszczyński": {
    "aborcja": 6.402,
    "lgbt": 6.472,
    "gospodarka": 7.015,
    "kosmopolityzmNacjonalizm": 6.052,
    "ue": 4.23,
    "rosja": 1.869,
    "usa": 7.365,
    "mediaTradycyjne": 65.723,
    "mediaInternetowe": 75.962,
    "glosy": 65998,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.848,
      "lgbt": 5.531,
      "gospodarka": 6.43,
      "kosmopolityzmNacjonalizm": 6.108,
      "ue": 4.158,
      "rosja": 1.93,
      "usa": 7.174
    }
  },
  "powiat raciborski": {
    "aborcja": 5.846,
    "lgbt": 5.95,
    "gospodarka": 6.943,
    "kosmopolityzmNacjonalizm": 5.559,
    "ue": 4.761,
    "rosja": 1.818,
    "usa": 7.378,
    "mediaTradycyjne": 68.253,
    "mediaInternetowe": 78.044,
    "glosy": 49222,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.513,
      "lgbt": 5.141,
      "gospodarka": 6.459,
      "kosmopolityzmNacjonalizm": 5.613,
      "ue": 4.715,
      "rosja": 1.878,
      "usa": 7.163
    }
  },
  "powiat rybnicki": {
    "aborcja": 6.491,
    "lgbt": 6.556,
    "gospodarka": 7.068,
    "kosmopolityzmNacjonalizm": 6.121,
    "ue": 4.159,
    "rosja": 1.903,
    "usa": 7.367,
    "mediaTradycyjne": 65.619,
    "mediaInternetowe": 76.248,
    "glosy": 43075,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.896,
      "lgbt": 5.587,
      "gospodarka": 6.482,
      "kosmopolityzmNacjonalizm": 6.181,
      "ue": 4.083,
      "rosja": 1.97,
      "usa": 7.173
    }
  },
  "powiat tarnogórski": {
    "aborcja": 5.533,
    "lgbt": 5.662,
    "gospodarka": 6.764,
    "kosmopolityzmNacjonalizm": 5.289,
    "ue": 5.048,
    "rosja": 1.639,
    "usa": 7.453,
    "mediaTradycyjne": 69.102,
    "mediaInternetowe": 77.106,
    "glosy": 78873,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.326,
      "lgbt": 4.933,
      "gospodarka": 6.285,
      "kosmopolityzmNacjonalizm": 5.337,
      "ue": 5.013,
      "rosja": 1.678,
      "usa": 7.25
    }
  },
  "powiat wodzisławski": {
    "aborcja": 6.304,
    "lgbt": 6.382,
    "gospodarka": 7.038,
    "kosmopolityzmNacjonalizm": 5.968,
    "ue": 4.323,
    "rosja": 1.909,
    "usa": 7.336,
    "mediaTradycyjne": 66.299,
    "mediaInternetowe": 76.893,
    "glosy": 83811,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.796,
      "lgbt": 5.467,
      "gospodarka": 6.481,
      "kosmopolityzmNacjonalizm": 6.023,
      "ue": 4.257,
      "rosja": 1.974,
      "usa": 7.135
    }
  },
  "powiat zawierciański": {
    "aborcja": 5.983,
    "lgbt": 6.094,
    "gospodarka": 6.851,
    "kosmopolityzmNacjonalizm": 5.678,
    "ue": 4.632,
    "rosja": 1.771,
    "usa": 7.363,
    "mediaTradycyjne": 67.247,
    "mediaInternetowe": 75.841,
    "glosy": 66605,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 4.632,
      "lgbt": 5.279,
      "gospodarka": 6.304,
      "kosmopolityzmNacjonalizm": 5.726,
      "ue": 4.578,
      "rosja": 1.814,
      "usa": 7.172
    }
  },
  "powiat żywiecki": {
    "aborcja": 6.74,
    "lgbt": 6.821,
    "gospodarka": 7.149,
    "kosmopolityzmNacjonalizm": 6.347,
    "ue": 3.933,
    "rosja": 1.991,
    "usa": 7.322,
    "mediaTradycyjne": 65.344,
    "mediaInternetowe": 75.466,
    "glosy": 87470,
    "woj": "śląskie",
    "elektorat": {
      "aborcja": 5.118,
      "lgbt": 5.829,
      "gospodarka": 6.512,
      "kosmopolityzmNacjonalizm": 6.391,
      "ue": 3.86,
      "rosja": 2.043,
      "usa": 7.145
    }
  },
  "powiat kalisz": {
    "aborcja": 5.012,
    "lgbt": 5.197,
    "gospodarka": 6.608,
    "kosmopolityzmNacjonalizm": 4.824,
    "ue": 5.558,
    "rosja": 1.431,
    "usa": 7.581,
    "mediaTradycyjne": 71.882,
    "mediaInternetowe": 77.544,
    "glosy": 55519,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.022,
      "lgbt": 4.593,
      "gospodarka": 6.175,
      "kosmopolityzmNacjonalizm": 4.863,
      "ue": 5.552,
      "rosja": 1.445,
      "usa": 7.384
    }
  },
  "powiat kielce": {
    "aborcja": 5.428,
    "lgbt": 5.592,
    "gospodarka": 6.695,
    "kosmopolityzmNacjonalizm": 5.168,
    "ue": 5.187,
    "rosja": 1.579,
    "usa": 7.48,
    "mediaTradycyjne": 70.153,
    "mediaInternetowe": 76.304,
    "glosy": 112992,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.312,
      "lgbt": 4.913,
      "gospodarka": 6.211,
      "kosmopolityzmNacjonalizm": 5.209,
      "ue": 5.161,
      "rosja": 1.601,
      "usa": 7.289
    }
  },
  "powiat konin": {
    "aborcja": 5.295,
    "lgbt": 5.462,
    "gospodarka": 6.614,
    "kosmopolityzmNacjonalizm": 5.079,
    "ue": 5.282,
    "rosja": 1.426,
    "usa": 7.585,
    "mediaTradycyjne": 70.24,
    "mediaInternetowe": 75.974,
    "glosy": 39752,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.191,
      "lgbt": 4.794,
      "gospodarka": 6.114,
      "kosmopolityzmNacjonalizm": 5.121,
      "ue": 5.261,
      "rosja": 1.435,
      "usa": 7.407
    }
  },
  "powiat leszno": {
    "aborcja": 4.638,
    "lgbt": 4.813,
    "gospodarka": 6.456,
    "kosmopolityzmNacjonalizm": 4.497,
    "ue": 5.886,
    "rosja": 1.357,
    "usa": 7.557,
    "mediaTradycyjne": 71.98,
    "mediaInternetowe": 77.986,
    "glosy": 35466,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 3.749,
      "lgbt": 4.285,
      "gospodarka": 6.082,
      "kosmopolityzmNacjonalizm": 4.549,
      "ue": 5.88,
      "rosja": 1.382,
      "usa": 7.341
    }
  },
  "powiat poznań": {
    "aborcja": 3.92,
    "lgbt": 4.073,
    "gospodarka": 5.983,
    "kosmopolityzmNacjonalizm": 3.98,
    "ue": 6.371,
    "rosja": 1.207,
    "usa": 7.361,
    "mediaTradycyjne": 70.732,
    "mediaInternetowe": 77.27,
    "glosy": 353642,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 3.249,
      "lgbt": 3.716,
      "gospodarka": 5.667,
      "kosmopolityzmNacjonalizm": 4.018,
      "ue": 6.366,
      "rosja": 1.23,
      "usa": 7.133
    }
  },
  "powiat buski": {
    "aborcja": 6.757,
    "lgbt": 6.867,
    "gospodarka": 7.056,
    "kosmopolityzmNacjonalizm": 6.298,
    "ue": 3.994,
    "rosja": 1.897,
    "usa": 7.38,
    "mediaTradycyjne": 65.797,
    "mediaInternetowe": 73.346,
    "glosy": 40688,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.182,
      "lgbt": 5.9,
      "gospodarka": 6.389,
      "kosmopolityzmNacjonalizm": 6.342,
      "ue": 3.919,
      "rosja": 1.929,
      "usa": 7.224
    }
  },
  "powiat chodzieski": {
    "aborcja": 5.165,
    "lgbt": 5.305,
    "gospodarka": 6.655,
    "kosmopolityzmNacjonalizm": 4.953,
    "ue": 5.395,
    "rosja": 1.636,
    "usa": 7.384,
    "mediaTradycyjne": 69.943,
    "mediaInternetowe": 77.847,
    "glosy": 26213,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.108,
      "lgbt": 4.675,
      "gospodarka": 6.246,
      "kosmopolityzmNacjonalizm": 5.005,
      "ue": 5.367,
      "rosja": 1.683,
      "usa": 7.161
    }
  },
  "powiat czarnkowsko-trzcianecki": {
    "aborcja": 5.566,
    "lgbt": 5.701,
    "gospodarka": 6.828,
    "kosmopolityzmNacjonalizm": 5.288,
    "ue": 5.056,
    "rosja": 1.689,
    "usa": 7.451,
    "mediaTradycyjne": 69.633,
    "mediaInternetowe": 77.664,
    "glosy": 45064,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.359,
      "lgbt": 4.968,
      "gospodarka": 6.365,
      "kosmopolityzmNacjonalizm": 5.341,
      "ue": 5.022,
      "rosja": 1.734,
      "usa": 7.241
    }
  },
  "powiat gnieźnieński": {
    "aborcja": 5.455,
    "lgbt": 5.568,
    "gospodarka": 6.677,
    "kosmopolityzmNacjonalizm": 5.206,
    "ue": 5.119,
    "rosja": 1.635,
    "usa": 7.398,
    "mediaTradycyjne": 68.318,
    "mediaInternetowe": 76.628,
    "glosy": 81462,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.261,
      "lgbt": 4.859,
      "gospodarka": 6.213,
      "kosmopolityzmNacjonalizm": 5.266,
      "ue": 5.073,
      "rosja": 1.685,
      "usa": 7.187
    }
  },
  "powiat gostyński": {
    "aborcja": 6.405,
    "lgbt": 6.457,
    "gospodarka": 7.039,
    "kosmopolityzmNacjonalizm": 6.027,
    "ue": 4.243,
    "rosja": 2.024,
    "usa": 7.217,
    "mediaTradycyjne": 65.169,
    "mediaInternetowe": 76.72,
    "glosy": 40310,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.855,
      "lgbt": 5.525,
      "gospodarka": 6.498,
      "kosmopolityzmNacjonalizm": 6.094,
      "ue": 4.159,
      "rosja": 2.109,
      "usa": 7.0
    }
  },
  "powiat grodziski (wielkopolskie)": {
    "aborcja": 6.001,
    "lgbt": 6.075,
    "gospodarka": 6.864,
    "kosmopolityzmNacjonalizm": 5.673,
    "ue": 4.616,
    "rosja": 1.855,
    "usa": 7.286,
    "mediaTradycyjne": 66.337,
    "mediaInternetowe": 76.379,
    "glosy": 27993,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.602,
      "lgbt": 5.24,
      "gospodarka": 6.357,
      "kosmopolityzmNacjonalizm": 5.737,
      "ue": 4.546,
      "rosja": 1.926,
      "usa": 7.071
    }
  },
  "powiat jarociński": {
    "aborcja": 6.098,
    "lgbt": 6.178,
    "gospodarka": 6.888,
    "kosmopolityzmNacjonalizm": 5.76,
    "ue": 4.53,
    "rosja": 1.844,
    "usa": 7.313,
    "mediaTradycyjne": 66.355,
    "mediaInternetowe": 76.067,
    "glosy": 38307,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.669,
      "lgbt": 5.32,
      "gospodarka": 6.356,
      "kosmopolityzmNacjonalizm": 5.82,
      "ue": 4.46,
      "rosja": 1.908,
      "usa": 7.108
    }
  },
  "powiat jędrzejowski": {
    "aborcja": 7.07,
    "lgbt": 7.149,
    "gospodarka": 7.153,
    "kosmopolityzmNacjonalizm": 6.584,
    "ue": 3.682,
    "rosja": 2.011,
    "usa": 7.316,
    "mediaTradycyjne": 64.316,
    "mediaInternetowe": 73.286,
    "glosy": 46576,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.358,
      "lgbt": 6.1,
      "gospodarka": 6.456,
      "kosmopolityzmNacjonalizm": 6.631,
      "ue": 3.591,
      "rosja": 2.057,
      "usa": 7.158
    }
  },
  "powiat kaliski": {
    "aborcja": 6.788,
    "lgbt": 6.849,
    "gospodarka": 7.081,
    "kosmopolityzmNacjonalizm": 6.349,
    "ue": 3.915,
    "rosja": 1.98,
    "usa": 7.296,
    "mediaTradycyjne": 64.356,
    "mediaInternetowe": 74.371,
    "glosy": 46582,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.131,
      "lgbt": 5.845,
      "gospodarka": 6.442,
      "kosmopolityzmNacjonalizm": 6.407,
      "ue": 3.824,
      "rosja": 2.043,
      "usa": 7.116
    }
  },
  "powiat kazimierski": {
    "aborcja": 7.06,
    "lgbt": 7.135,
    "gospodarka": 7.135,
    "kosmopolityzmNacjonalizm": 6.532,
    "ue": 3.735,
    "rosja": 1.978,
    "usa": 7.353,
    "mediaTradycyjne": 64.43,
    "mediaInternetowe": 72.875,
    "glosy": 16861,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.342,
      "lgbt": 6.083,
      "gospodarka": 6.45,
      "kosmopolityzmNacjonalizm": 6.589,
      "ue": 3.638,
      "rosja": 2.029,
      "usa": 7.192
    }
  },
  "powiat kielecki": {
    "aborcja": 7.162,
    "lgbt": 7.226,
    "gospodarka": 7.208,
    "kosmopolityzmNacjonalizm": 6.689,
    "ue": 3.561,
    "rosja": 2.168,
    "usa": 7.17,
    "mediaTradycyjne": 63.434,
    "mediaInternetowe": 73.811,
    "glosy": 123296,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.435,
      "lgbt": 6.174,
      "gospodarka": 6.518,
      "kosmopolityzmNacjonalizm": 6.732,
      "ue": 3.466,
      "rosja": 2.227,
      "usa": 7.0
    }
  },
  "powiat kolski": {
    "aborcja": 6.69,
    "lgbt": 6.776,
    "gospodarka": 7.049,
    "kosmopolityzmNacjonalizm": 6.283,
    "ue": 3.999,
    "rosja": 1.846,
    "usa": 7.419,
    "mediaTradycyjne": 65.345,
    "mediaInternetowe": 74.265,
    "glosy": 44406,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.067,
      "lgbt": 5.785,
      "gospodarka": 6.39,
      "kosmopolityzmNacjonalizm": 6.334,
      "ue": 3.923,
      "rosja": 1.888,
      "usa": 7.256
    }
  },
  "powiat konecki": {
    "aborcja": 6.673,
    "lgbt": 6.78,
    "gospodarka": 6.989,
    "kosmopolityzmNacjonalizm": 6.247,
    "ue": 4.044,
    "rosja": 1.799,
    "usa": 7.434,
    "mediaTradycyjne": 65.55,
    "mediaInternetowe": 72.896,
    "glosy": 42915,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.105,
      "lgbt": 5.822,
      "gospodarka": 6.309,
      "kosmopolityzmNacjonalizm": 6.292,
      "ue": 3.971,
      "rosja": 1.825,
      "usa": 7.286
    }
  },
  "powiat koniński": {
    "aborcja": 6.757,
    "lgbt": 6.822,
    "gospodarka": 7.026,
    "kosmopolityzmNacjonalizm": 6.355,
    "ue": 3.906,
    "rosja": 1.926,
    "usa": 7.307,
    "mediaTradycyjne": 64.081,
    "mediaInternetowe": 73.904,
    "glosy": 71508,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.11,
      "lgbt": 5.827,
      "gospodarka": 6.364,
      "kosmopolityzmNacjonalizm": 6.407,
      "ue": 3.819,
      "rosja": 1.978,
      "usa": 7.138
    }
  },
  "powiat kościański": {
    "aborcja": 5.645,
    "lgbt": 5.747,
    "gospodarka": 6.734,
    "kosmopolityzmNacjonalizm": 5.35,
    "ue": 4.963,
    "rosja": 1.724,
    "usa": 7.346,
    "mediaTradycyjne": 67.75,
    "mediaInternetowe": 76.387,
    "glosy": 44510,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.39,
      "lgbt": 4.999,
      "gospodarka": 6.262,
      "kosmopolityzmNacjonalizm": 5.412,
      "ue": 4.907,
      "rosja": 1.782,
      "usa": 7.131
    }
  },
  "powiat krotoszyński": {
    "aborcja": 6.178,
    "lgbt": 6.26,
    "gospodarka": 6.939,
    "kosmopolityzmNacjonalizm": 5.823,
    "ue": 4.467,
    "rosja": 1.9,
    "usa": 7.289,
    "mediaTradycyjne": 66.345,
    "mediaInternetowe": 76.213,
    "glosy": 40758,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.737,
      "lgbt": 5.392,
      "gospodarka": 6.404,
      "kosmopolityzmNacjonalizm": 5.882,
      "ue": 4.397,
      "rosja": 1.966,
      "usa": 7.082
    }
  },
  "powiat kępiński": {
    "aborcja": 6.058,
    "lgbt": 6.154,
    "gospodarka": 6.967,
    "kosmopolityzmNacjonalizm": 5.72,
    "ue": 4.589,
    "rosja": 1.846,
    "usa": 7.371,
    "mediaTradycyjne": 67.535,
    "mediaInternetowe": 77.111,
    "glosy": 31388,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.652,
      "lgbt": 5.3,
      "gospodarka": 6.452,
      "kosmopolityzmNacjonalizm": 5.777,
      "ue": 4.531,
      "rosja": 1.907,
      "usa": 7.163
    }
  },
  "powiat leszczyński": {
    "aborcja": 5.914,
    "lgbt": 5.982,
    "gospodarka": 6.839,
    "kosmopolityzmNacjonalizm": 5.596,
    "ue": 4.69,
    "rosja": 1.883,
    "usa": 7.237,
    "mediaTradycyjne": 66.226,
    "mediaInternetowe": 76.761,
    "glosy": 34320,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.541,
      "lgbt": 5.167,
      "gospodarka": 6.356,
      "kosmopolityzmNacjonalizm": 5.664,
      "ue": 4.618,
      "rosja": 1.962,
      "usa": 7.011
    }
  },
  "powiat międzychodzki": {
    "aborcja": 5.452,
    "lgbt": 5.576,
    "gospodarka": 6.795,
    "kosmopolityzmNacjonalizm": 5.213,
    "ue": 5.12,
    "rosja": 1.799,
    "usa": 7.297,
    "mediaTradycyjne": 69.063,
    "mediaInternetowe": 78.388,
    "glosy": 19827,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.297,
      "lgbt": 4.884,
      "gospodarka": 6.367,
      "kosmopolityzmNacjonalizm": 5.265,
      "ue": 5.084,
      "rosja": 1.858,
      "usa": 7.067
    }
  },
  "powiat nowotomyski": {
    "aborcja": 5.468,
    "lgbt": 5.583,
    "gospodarka": 6.768,
    "kosmopolityzmNacjonalizm": 5.226,
    "ue": 5.101,
    "rosja": 1.756,
    "usa": 7.325,
    "mediaTradycyjne": 68.692,
    "mediaInternetowe": 77.887,
    "glosy": 42962,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.289,
      "lgbt": 4.879,
      "gospodarka": 6.331,
      "kosmopolityzmNacjonalizm": 5.281,
      "ue": 5.061,
      "rosja": 1.815,
      "usa": 7.1
    }
  },
  "powiat obornicki": {
    "aborcja": 5.254,
    "lgbt": 5.395,
    "gospodarka": 6.66,
    "kosmopolityzmNacjonalizm": 5.006,
    "ue": 5.341,
    "rosja": 1.617,
    "usa": 7.418,
    "mediaTradycyjne": 69.952,
    "mediaInternetowe": 77.388,
    "glosy": 33646,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.16,
      "lgbt": 4.739,
      "gospodarka": 6.237,
      "kosmopolityzmNacjonalizm": 5.061,
      "ue": 5.309,
      "rosja": 1.663,
      "usa": 7.199
    }
  },
  "powiat opatowski": {
    "aborcja": 7.286,
    "lgbt": 7.348,
    "gospodarka": 7.229,
    "kosmopolityzmNacjonalizm": 6.773,
    "ue": 3.476,
    "rosja": 2.14,
    "usa": 7.222,
    "mediaTradycyjne": 63.217,
    "mediaInternetowe": 73.217,
    "glosy": 26570,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.506,
      "lgbt": 6.261,
      "gospodarka": 6.516,
      "kosmopolityzmNacjonalizm": 6.823,
      "ue": 3.375,
      "rosja": 2.197,
      "usa": 7.059
    }
  },
  "powiat ostrowiecki": {
    "aborcja": 6.093,
    "lgbt": 6.231,
    "gospodarka": 6.885,
    "kosmopolityzmNacjonalizm": 5.742,
    "ue": 4.579,
    "rosja": 1.8,
    "usa": 7.364,
    "mediaTradycyjne": 67.754,
    "mediaInternetowe": 75.041,
    "glosy": 54690,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.766,
      "lgbt": 5.421,
      "gospodarka": 6.314,
      "kosmopolityzmNacjonalizm": 5.782,
      "ue": 4.529,
      "rosja": 1.83,
      "usa": 7.185
    }
  },
  "powiat ostrowski (wielkopolskie)": {
    "aborcja": 5.816,
    "lgbt": 5.931,
    "gospodarka": 6.863,
    "kosmopolityzmNacjonalizm": 5.521,
    "ue": 4.8,
    "rosja": 1.781,
    "usa": 7.366,
    "mediaTradycyjne": 68.118,
    "mediaInternetowe": 76.931,
    "glosy": 90818,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.522,
      "lgbt": 5.148,
      "gospodarka": 6.364,
      "kosmopolityzmNacjonalizm": 5.572,
      "ue": 4.752,
      "rosja": 1.832,
      "usa": 7.16
    }
  },
  "powiat ostrzeszowski": {
    "aborcja": 6.196,
    "lgbt": 6.276,
    "gospodarka": 6.948,
    "kosmopolityzmNacjonalizm": 5.825,
    "ue": 4.465,
    "rosja": 1.903,
    "usa": 7.296,
    "mediaTradycyjne": 66.417,
    "mediaInternetowe": 76.194,
    "glosy": 30457,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.746,
      "lgbt": 5.401,
      "gospodarka": 6.418,
      "kosmopolityzmNacjonalizm": 5.886,
      "ue": 4.393,
      "rosja": 1.972,
      "usa": 7.087
    }
  },
  "powiat pilski": {
    "aborcja": 5.349,
    "lgbt": 5.487,
    "gospodarka": 6.726,
    "kosmopolityzmNacjonalizm": 5.109,
    "ue": 5.24,
    "rosja": 1.615,
    "usa": 7.459,
    "mediaTradycyjne": 69.855,
    "mediaInternetowe": 77.658,
    "glosy": 73053,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.21,
      "lgbt": 4.801,
      "gospodarka": 6.283,
      "kosmopolityzmNacjonalizm": 5.163,
      "ue": 5.209,
      "rosja": 1.658,
      "usa": 7.246
    }
  },
  "powiat pińczowski": {
    "aborcja": 6.845,
    "lgbt": 6.936,
    "gospodarka": 7.112,
    "kosmopolityzmNacjonalizm": 6.386,
    "ue": 3.891,
    "rosja": 2.013,
    "usa": 7.286,
    "mediaTradycyjne": 65.09,
    "mediaInternetowe": 74.037,
    "glosy": 20731,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.23,
      "lgbt": 5.948,
      "gospodarka": 6.455,
      "kosmopolityzmNacjonalizm": 6.433,
      "ue": 3.81,
      "rosja": 2.06,
      "usa": 7.116
    }
  },
  "powiat pleszewski": {
    "aborcja": 6.184,
    "lgbt": 6.276,
    "gospodarka": 6.95,
    "kosmopolityzmNacjonalizm": 5.807,
    "ue": 4.497,
    "rosja": 1.803,
    "usa": 7.412,
    "mediaTradycyjne": 67.007,
    "mediaInternetowe": 75.936,
    "glosy": 34232,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.729,
      "lgbt": 5.392,
      "gospodarka": 6.404,
      "kosmopolityzmNacjonalizm": 5.869,
      "ue": 4.43,
      "rosja": 1.86,
      "usa": 7.216
    }
  },
  "powiat poznański": {
    "aborcja": 4.457,
    "lgbt": 4.615,
    "gospodarka": 6.395,
    "kosmopolityzmNacjonalizm": 4.382,
    "ue": 5.99,
    "rosja": 1.393,
    "usa": 7.461,
    "mediaTradycyjne": 71.466,
    "mediaInternetowe": 78.676,
    "glosy": 279188,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 3.618,
      "lgbt": 4.129,
      "gospodarka": 6.055,
      "kosmopolityzmNacjonalizm": 4.432,
      "ue": 5.984,
      "rosja": 1.428,
      "usa": 7.23
    }
  },
  "powiat rawicki": {
    "aborcja": 5.882,
    "lgbt": 5.971,
    "gospodarka": 6.86,
    "kosmopolityzmNacjonalizm": 5.571,
    "ue": 4.729,
    "rosja": 1.9,
    "usa": 7.233,
    "mediaTradycyjne": 66.944,
    "mediaInternetowe": 76.984,
    "glosy": 32719,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.559,
      "lgbt": 5.182,
      "gospodarka": 6.376,
      "kosmopolityzmNacjonalizm": 5.63,
      "ue": 4.667,
      "rosja": 1.969,
      "usa": 7.01
    }
  },
  "powiat sandomierski": {
    "aborcja": 6.78,
    "lgbt": 6.884,
    "gospodarka": 7.1,
    "kosmopolityzmNacjonalizm": 6.284,
    "ue": 4.006,
    "rosja": 1.99,
    "usa": 7.319,
    "mediaTradycyjne": 65.963,
    "mediaInternetowe": 73.94,
    "glosy": 41815,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.204,
      "lgbt": 5.915,
      "gospodarka": 6.464,
      "kosmopolityzmNacjonalizm": 6.333,
      "ue": 3.926,
      "rosja": 2.037,
      "usa": 7.146
    }
  },
  "powiat skarżyski": {
    "aborcja": 5.984,
    "lgbt": 6.122,
    "gospodarka": 6.876,
    "kosmopolityzmNacjonalizm": 5.661,
    "ue": 4.667,
    "rosja": 1.741,
    "usa": 7.42,
    "mediaTradycyjne": 68.235,
    "mediaInternetowe": 75.592,
    "glosy": 39010,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.672,
      "lgbt": 5.321,
      "gospodarka": 6.318,
      "kosmopolityzmNacjonalizm": 5.701,
      "ue": 4.624,
      "rosja": 1.77,
      "usa": 7.24
    }
  },
  "powiat starachowicki": {
    "aborcja": 6.456,
    "lgbt": 6.574,
    "gospodarka": 7.03,
    "kosmopolityzmNacjonalizm": 6.062,
    "ue": 4.243,
    "rosja": 1.908,
    "usa": 7.343,
    "mediaTradycyjne": 66.765,
    "mediaInternetowe": 74.992,
    "glosy": 47364,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.988,
      "lgbt": 5.674,
      "gospodarka": 6.42,
      "kosmopolityzmNacjonalizm": 6.103,
      "ue": 4.182,
      "rosja": 1.945,
      "usa": 7.168
    }
  },
  "powiat staszowski": {
    "aborcja": 7.248,
    "lgbt": 7.327,
    "gospodarka": 7.224,
    "kosmopolityzmNacjonalizm": 6.751,
    "ue": 3.509,
    "rosja": 2.076,
    "usa": 7.288,
    "mediaTradycyjne": 63.894,
    "mediaInternetowe": 73.172,
    "glosy": 38069,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.488,
      "lgbt": 6.246,
      "gospodarka": 6.499,
      "kosmopolityzmNacjonalizm": 6.793,
      "ue": 3.418,
      "rosja": 2.121,
      "usa": 7.135
    }
  },
  "powiat szamotulski": {
    "aborcja": 5.202,
    "lgbt": 5.338,
    "gospodarka": 6.661,
    "kosmopolityzmNacjonalizm": 4.998,
    "ue": 5.345,
    "rosja": 1.66,
    "usa": 7.358,
    "mediaTradycyjne": 69.618,
    "mediaInternetowe": 77.853,
    "glosy": 54206,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.132,
      "lgbt": 4.702,
      "gospodarka": 6.244,
      "kosmopolityzmNacjonalizm": 5.049,
      "ue": 5.316,
      "rosja": 1.707,
      "usa": 7.135
    }
  },
  "powiat słupecki": {
    "aborcja": 6.217,
    "lgbt": 6.311,
    "gospodarka": 6.908,
    "kosmopolityzmNacjonalizm": 5.842,
    "ue": 4.457,
    "rosja": 1.767,
    "usa": 7.42,
    "mediaTradycyjne": 66.697,
    "mediaInternetowe": 75.14,
    "glosy": 31957,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.755,
      "lgbt": 5.425,
      "gospodarka": 6.338,
      "kosmopolityzmNacjonalizm": 5.901,
      "ue": 4.388,
      "rosja": 1.817,
      "usa": 7.233
    }
  },
  "powiat turecki": {
    "aborcja": 6.618,
    "lgbt": 6.696,
    "gospodarka": 7.015,
    "kosmopolityzmNacjonalizm": 6.229,
    "ue": 4.046,
    "rosja": 1.917,
    "usa": 7.312,
    "mediaTradycyjne": 64.851,
    "mediaInternetowe": 74.378,
    "glosy": 45433,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.037,
      "lgbt": 5.74,
      "gospodarka": 6.377,
      "kosmopolityzmNacjonalizm": 6.279,
      "ue": 3.967,
      "rosja": 1.966,
      "usa": 7.138
    }
  },
  "powiat wolsztyński": {
    "aborcja": 5.831,
    "lgbt": 5.914,
    "gospodarka": 6.869,
    "kosmopolityzmNacjonalizm": 5.517,
    "ue": 4.785,
    "rosja": 1.861,
    "usa": 7.286,
    "mediaTradycyjne": 67.328,
    "mediaInternetowe": 77.487,
    "glosy": 32765,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.494,
      "lgbt": 5.113,
      "gospodarka": 6.404,
      "kosmopolityzmNacjonalizm": 5.582,
      "ue": 4.722,
      "rosja": 1.937,
      "usa": 7.058
    }
  },
  "powiat wrzesiński": {
    "aborcja": 5.714,
    "lgbt": 5.813,
    "gospodarka": 6.772,
    "kosmopolityzmNacjonalizm": 5.443,
    "ue": 4.867,
    "rosja": 1.751,
    "usa": 7.33,
    "mediaTradycyjne": 67.312,
    "mediaInternetowe": 76.438,
    "glosy": 43987,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.439,
      "lgbt": 5.054,
      "gospodarka": 6.28,
      "kosmopolityzmNacjonalizm": 5.499,
      "ue": 4.813,
      "rosja": 1.807,
      "usa": 7.12
    }
  },
  "powiat wągrowiecki": {
    "aborcja": 5.594,
    "lgbt": 5.705,
    "gospodarka": 6.772,
    "kosmopolityzmNacjonalizm": 5.305,
    "ue": 5.019,
    "rosja": 1.734,
    "usa": 7.363,
    "mediaTradycyjne": 68.402,
    "mediaInternetowe": 77.02,
    "glosy": 38300,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.367,
      "lgbt": 4.97,
      "gospodarka": 6.315,
      "kosmopolityzmNacjonalizm": 5.365,
      "ue": 4.969,
      "rosja": 1.791,
      "usa": 7.144
    }
  },
  "powiat włoszczowski": {
    "aborcja": 7.232,
    "lgbt": 7.298,
    "gospodarka": 7.197,
    "kosmopolityzmNacjonalizm": 6.725,
    "ue": 3.527,
    "rosja": 2.103,
    "usa": 7.243,
    "mediaTradycyjne": 63.509,
    "mediaInternetowe": 73.165,
    "glosy": 25708,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 5.466,
      "lgbt": 6.218,
      "gospodarka": 6.489,
      "kosmopolityzmNacjonalizm": 6.772,
      "ue": 3.427,
      "rosja": 2.158,
      "usa": 7.081
    }
  },
  "powiat złotowski": {
    "aborcja": 5.612,
    "lgbt": 5.732,
    "gospodarka": 6.86,
    "kosmopolityzmNacjonalizm": 5.341,
    "ue": 4.992,
    "rosja": 1.772,
    "usa": 7.376,
    "mediaTradycyjne": 69.035,
    "mediaInternetowe": 78.157,
    "glosy": 34489,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.381,
      "lgbt": 4.987,
      "gospodarka": 6.408,
      "kosmopolityzmNacjonalizm": 5.396,
      "ue": 4.953,
      "rosja": 1.83,
      "usa": 7.155
    }
  },
  "powiat średzki (wielkopolskie)": {
    "aborcja": 5.572,
    "lgbt": 5.667,
    "gospodarka": 6.704,
    "kosmopolityzmNacjonalizm": 5.311,
    "ue": 4.998,
    "rosja": 1.719,
    "usa": 7.321,
    "mediaTradycyjne": 67.417,
    "mediaInternetowe": 76.547,
    "glosy": 33921,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.332,
      "lgbt": 4.935,
      "gospodarka": 6.237,
      "kosmopolityzmNacjonalizm": 5.373,
      "ue": 4.942,
      "rosja": 1.78,
      "usa": 7.103
    }
  },
  "powiat śremski": {
    "aborcja": 5.57,
    "lgbt": 5.664,
    "gospodarka": 6.716,
    "kosmopolityzmNacjonalizm": 5.321,
    "ue": 4.985,
    "rosja": 1.786,
    "usa": 7.252,
    "mediaTradycyjne": 67.225,
    "mediaInternetowe": 76.895,
    "glosy": 34163,
    "woj": "świętokrzyskie",
    "elektorat": {
      "aborcja": 4.346,
      "lgbt": 4.943,
      "gospodarka": 6.258,
      "kosmopolityzmNacjonalizm": 5.38,
      "ue": 4.929,
      "rosja": 1.85,
      "usa": 7.028
    }
  }
};

const profilePowiatow = PROFILE_POWIATOW_PREZYDENT;

// Funkcja pomocnicza do pobierania profilu powiatu
function getPowiatIdeologicalProfile(powName) {
  if (!powName) return null;
  const key = powName.toLowerCase().trim();
  return PROFILE_POWIATOW_PREZYDENT[key] || null;
}

// Dowiazanie profili do istniejacego POWIAT_INFO
if (typeof POWIAT_INFO !== 'undefined') {
  for (const pow in POWIAT_INFO) {
    if (PROFILE_POWIATOW_PREZYDENT[pow]) {
      POWIAT_INFO[pow].profil = PROFILE_POWIATOW_PREZYDENT[pow];
    }
  }
}
