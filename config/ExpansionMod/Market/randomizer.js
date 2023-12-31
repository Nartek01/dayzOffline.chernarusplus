let market = {
    "m_Version": 12,
    "DisplayName": "#STR_EXPANSION_MARKET_CATEGORY_ASSAULT_RIFLES",
    "Icon": "Deliver",
    "Color": "FBFCFEFF",
    "IsExchange": 0,
    "InitStockPercent": 75.0,
    "Items": [
        {
            "ClassName": "fal",
            "MaxPriceThreshold": 2000,
            "MinPriceThreshold": 1700,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "fal_oebttstck",
                "mag_fal_20rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "akm",
            "MaxPriceThreshold": 3000,
            "MinPriceThreshold": 1500,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "ak_woodbttstck",
                "ak_woodhndgrd",
                "mag_akm_30rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "ak101",
            "MaxPriceThreshold": 3000,
            "MinPriceThreshold": 1500,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "ak_plasticbttstck",
                "ak_plastichndgrd",
                "mag_ak101_30rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "ak74",
            "MaxPriceThreshold": 3200,
            "MinPriceThreshold": 1600,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "ak74_woodbttstck",
                "ak74_hndgrd",
                "mag_ak74_30rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "m4a1",
            "MaxPriceThreshold": 3000,
            "MinPriceThreshold": 1600,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "m4_carryhandleoptic",
                "mag_stanag_30rnd",
                "m4_oebttstck",
                "m4_plastichndgrd"
            ],
            "Variants": []
        },
        {
            "ClassName": "m16a2",
            "MaxPriceThreshold": 3200,
            "MinPriceThreshold": 1500,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "mag_stanag_30rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "famas",
            "MaxPriceThreshold": 3200,
            "MinPriceThreshold": 1500,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "mag_famas_25rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "aug",
            "MaxPriceThreshold": 3200,
            "MinPriceThreshold": 1600,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "mag_aug_30rnd"
            ],
            "Variants": []
        },
        {
            "ClassName": "augshort",
            "MaxPriceThreshold": 3200,
            "MinPriceThreshold": 1500,
            "SellPricePercent": -1.0,
            "MaxStockThreshold": 100,
            "MinStockThreshold": 1,
            "QuantityPercent": -1,
            "SpawnAttachments": [
                "mag_aug_30rnd"
            ],
            "Variants": []
        }
    ]
};

for (let i = 0; i < market.Items.length; i++) {
    let start = 4000; // Min Price change me!
    let end = 8000; // Max Price change me!
    let randomInt = Math.floor(Math.random() * (end - start + 1)) + start;
    market.Items[i].MaxPriceThreshold = randomInt;
    console.log(market.Items[i].MaxPriceThreshold);
}



console.log(JSON.stringify(market));