// churches.js - dataset for Stockholm evangelical churches (bilingual)

const churches = [
  {
    id: "Citykyrkan",
    name: { sv: "Citykyrkan i Stockholm", en: "Citykyrkan (City Church) Stockholm" },
    address: "Adolf Fredriks kyrkogata 10, 111 37 Stockholm",
    lat: 59.33707,
    lng: 18.05913,
    coords_verified: true,
    description: {
      sv: "Citykyrkan är en av de större frikyrkorna i Stockholm med gudstjänster på söndagar kl. 10:30 (med engelsk översättning) och kl. 14:00 (på engelska).",
      en: "Citykyrkan is one of the larger free churches in Stockholm with Sunday services at 10:30 (with English translation) and at 14:00 (in English)."
    },
    website: "https://cks.se/"
  },

  {
    id: "S:ta Clara kyrka",
    name: { sv: "S:ta Clara kyrka Stockholm", en: "St. Clara's Church Stockholm" },
    address: "Klara Östra kyrkogata 7-9, 111 52 Stockholm",
    lat: 59.33119,
    lng: 18.06153,
    coords_verified: true,
    description: {
      sv: "S:ta Clara kyrka är en luthersk kyrka i centrala Stockholm, känd för socialt arbete och väckelsetradition. Gudstjänst kl. 11:00, med morgonservice varannan söndag och mässa nästkommande.",
      en: "St. Clara’s Church is a Lutheran church in central Stockholm, known for social work and revival tradition. Service at 11:00 — alternating between morning service and worship mass."
    },
    website: "https://clarakyrka.se/"
  },

  {
    id: "Korskyrkan",
    name: { sv: "Korskyrkan Stockholm", en: "Korskyrkan Stockholm" },
    address: "Birger Jarlsgatan 66, 114 29 Stockholm",
    lat: 59.34252,
    lng: 18.06410,
    coords_verified: true,
    description: {
      sv: "Korskyrkan är en evangelisk frikyrka i Stockholm. Gudstjänst kl. 11:00 med mingel 10:30–11:00.",
      en: "Korskyrkan is an evangelical free church in Stockholm. Service at 11:00 with mingle time from 10:30–11:00."
    },
    website: "https://korskyrkanstockholm.se/"
  },

  {
    id: "Filadelfiakyrkan",
    name: { sv: "Filadelfiakyrkan Stockholm", en: "Filadelfia Church Stockholm" },
    address: "Rörstrandsgatan 5, 113 40 Stockholm",
    lat: 59.33847,
    lng: 18.05029,
    coords_verified: true,
    description: {
      sv: "Filadelfiakyrkan är Sveriges största pingstkyrka, en del av Pingströrelsen. Gudstjänster kl. 11:00 och 18:00 med engelska översättningar ibland tillgängliga.",
      en: "Filadelfia Church is Sweden’s largest Pentecostal church and part of the Pentecostal movement. Services at 11:00 and 18:00, with English translation available for many services.:contentReference[oaicite:0]{index=0}"
    },
    website: "https://filadelfiakyrkan.se/"
  },

  {
    id: "Hillsong",
    name: { sv: "Hillsong Stockholm", en: "Hillsong Stockholm" },
    address: "Segelbåtsvägen 15, 112 64 Stockholm",
    lat: 59.32847,
    lng: 18.04769,
    coords_verified: false,
    description: {
      sv: "Hillsong Stockholm är en del av den internationella Hillsong-rörelsen med mångspråkiga gudstjänster. Söndagsgudstjänst kl. 10:30 och fler tider möjliga.",
      en: "Hillsong Stockholm is part of the international Hillsong movement with multi-service Sundays, including a 10:30 service.:contentReference[oaicite:1]{index=1}"
    },
    website: "https://hillsong.se/"
  },

  {
    id: "WAOChurch",
    name: { sv: "We Are One Church (WAO)", en: "We Are One Church (WAO)" },
    address: "Götgatan 87, 116 21 Stockholm",
    lat: 59.31329,
    lng: 18.06650,
    coords_verified: false,
    description: {
      sv: "We Are One Church är en församling i G12-rörelsen. Gudstjänster: fredag kl. 19:00 samt söndag kl. 11:00 och 14:00 med översättning.",
      en: "We Are One Church is part of the G12 movement. Services include Friday at 19:00 and Sunday at 11:00 and 14:00 (with translation available).:contentReference[oaicite:2]{index=2}"
    },
    website: "https://www.waochurch.com/"
  },

  {
    id: "OneHeartChurch",
    name: { sv: "One Heart Church", en: "One Heart Church" },
    address: "Birger Jarlsgatan 66B, 114 29 Stockholm",
    lat: 59.34240,
    lng: 18.06400,
    coords_verified: false,
    description: {
      sv: "One Heart Church möts på samma adress som Korskyrkan, med söndagsgudstjänst kl. 16:30.",
      en: "One Heart Church meets at the same address as Korskyrkan, with a Sunday service at 16:30.:contentReference[oaicite:3]{index=3}"
    },
    website: "http://www.oneheartchurch.se"
  },

  {
    id: "Folkungakyrkan",
    name: { sv: "Folkungakyrkan Stockholm", en: "Folkungakyrkan Stockholm" },
    address: "Folkungagatan 90, 116 30 Stockholm",
    lat: 59.31436,
    lng: 18.07125,
    coords_verified: false,
    description: {
      sv: "Folkungakyrkan är en evangelisk församling på Södermalm. Söndagsgudstjänst kl. 11:00.",
      en: "Folkungakyrkan is an evangelical church on Södermalm with a Sunday service at 11:00.:contentReference[oaicite:4]{index=4}"
    },
    website: ""
  },

  {
    id: "Soderhojdskyrkan",
    name: { sv: "Söderhöjdskyrkan", en: "Söderhöjdskyrkan" },
    address: "Blecktornsgränd 13, 116 62 Stockholm",
    lat: 59.31680,
    lng: 18.06345,
    coords_verified: false,
    description: {
      sv: "Söderhöjdskyrkan är en kristen församling på Södermalm. Gudstjänst kl. 11:00.",
      en: "Söderhöjdskyrkan is a Christian congregation on Södermalm with a Sunday service at 11:00.:contentReference[oaicite:5]{index=5}"
    },
    website: ""
  }
];
