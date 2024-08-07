
import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "server-dev/interfaces/IControllerBase.interface";
import { NativeApiRequest } from "../../snippet/native-api.request";

const optionsReq = {
    'method': 'GET',
    'hostname': 'api.currencyfreaks.com',
    'path': '/latest?apikey=82d81e795ce14a53a3d2d7128dd675f7',
    'headers': {
        'apikey': '82d81e795ce14a53a3d2d7128dd675f7'
    },
    'maxRedirects': 20
};

class CurrencyFreaksApiController implements IControllerBase {
    public path: string = "/v1/currency/";
    private router = express.Router();
    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + 'list', this.currencyList);
    }

    currencyList(req: Request, res: Response) {
        try {
            // let reqOp = optionsReq;
            // NativeApiRequest(reqOp, (response: any) => {
            //     res.jsonp(JSON.parse(response));
            // })
            const data = {
                "date": "2022-05-28 00:05:00+00",
                "base": "USD",
                "rates": {
                    "AGLD": "2.0876826722338206",
                    "FJD": "2.1451",
                    "MATIC": "1.7456576765296326",
                    "MXN": "19.58117",
                    "STD": "22974.299999987823",
                    "SCR": "12.740905999999997",
                    "CDF": "2004.9999999999297",
                    "BBD": "2.0177470000000004",
                    "CTX": "0.3154574132492114",
                    "HNL": "24.55000000000003",
                    "UGX": "3712.5602999994603",
                    "IOTX": "24.77086945751796",
                    "SHIB": "95693.77990430623",
                    "GLM": "4.0551500405515",
                    "ZAR": "15.566480000000011",
                    "STN": "23.0619",
                    "AIOZ": "12.254901960784313",
                    "CUC": "1.0",
                    "BSD": "0.9993462",
                    "STX": "1.941747572815534",
                    "FARM": "0.0239635753654445",
                    "SDG": "446.821",
                    "IQD": "1460.000000000032",
                    "CUP": "24.1815",
                    "GMD": "54.054054054054056",
                    "RBN": "3.389830508474576",
                    "TWD": "29.314300000000042",
                    "ZRX": "2.716977851196557",
                    "RSD": "109.41406700000002",
                    "BSV": "0.0209485503603151",
                    "BCH": "0.0057304948282284",
                    "MYR": "4.3790000000000004",
                    "OMG": "0.4246284501061571",
                    "FKP": "0.791822",
                    "BAND": "0.6956521739130435",
                    "XOF": "625.0",
                    "GMT": "0.9746588693957114",
                    "BTC": "0.0000350178923921",
                    "NKN": "12.150668286755772",
                    "UYU": "39.88831272437176",
                    "CVC": "6.457862447529868",
                    "CVE": "103.30578512396694",
                    "OMR": "0.3847743260100518",
                    "MIR": "3.5842293906810037",
                    "KES": "116.74999999999936",
                    "SEK": "9.80630488527555",
                    "BTN": "77.552027",
                    "GNF": "8826.1253309797",
                    "MZN": "63.83000000000008",
                    "SVC": "8.743980999999998",
                    "ARS": "119.48259258108686",
                    "QAR": "3.6409989590383978",
                    "IRR": "42280.4",
                    "ANKR": "28.388928317955997",
                    "SUSHI": "0.7017543859649124",
                    "GNT": "4.537086508083999",
                    "XPD": "0.000482",
                    "ALGO": "2.7727713849993068",
                    "THB": "34.07998026087543",
                    "UZS": "11045.000000001739",
                    "XPF": "111.69999999999992",
                    "WBTC": "0.0000349829484364",
                    "BDT": "87.81550400000029",
                    "LYD": "4.779999999999999",
                    "KWD": "0.3057",
                    "ASM": "39.25417075564279",
                    "DIA": "2.3422494964163585",
                    "XPT": "0.00105",
                    "RUB": "65.75006690069307",
                    "ISK": "128.28999999999968",
                    "MANA": "1.0804970286331712",
                    "ACH": "60.43574169763998",
                    "MKD": "57.55372200000006",
                    "MINA": "1.2300123001230012",
                    "DZD": "145.46599999999967",
                    "QSP": "32.43593902043464",
                    "PAB": "0.9992528",
                    "SGD": "1.368999793691731",
                    "NMR": "0.0861326442721792",
                    "JEP": "0.791822",
                    "MKR": "0.0008961015103791",
                    "KGS": "79.51598700000004",
                    "ICP": "0.1437814521926671",
                    "ZEC": "0.0116611276310419",
                    "REN": "7.671653241273495",
                    "REP": "0.1068947087119188",
                    "XAF": "611.2074480000035",
                    "ADA": "2.1994941163532387",
                    "REQ": "8.752735229759299",
                    "XAG": "0.0452",
                    "STORJ": "1.9801980198019802",
                    "CHF": "0.9570583242827518",
                    "HRK": "7.024999999999999",
                    "RARI": "0.3407155025553663",
                    "DJF": "177.55",
                    "ZEN": "0.0529380624669137",
                    "DESO": "0.0886917960088692",
                    "LOOM": "20.855057351407716",
                    "PAX": "1.0005002501250626",
                    "DOGE": "12.338062924120914",
                    "PRO": "1.1173184357541899",
                    "TZS": "2326.999999999771",
                    "VND": "23197.499999980086",
                    "XAU": "0.0005394470667566",
                    "MLN": "0.0375869197519263",
                    "AUD": "1.3964531",
                    "CHZ": "9.324009324009324",
                    "KHR": "4058.4415584415583",
                    "IDR": "14539.399999992536",
                    "XBA": "9.429202262909227",
                    "KYD": "0.8322915124326458",
                    "XRP": "2.6276374911317233",
                    "CTSI": "5.712653527563553",
                    "JASMY": "85.17887563884156",
                    "BWP": "12.025405999999997",
                    "SHP": "0.79312",
                    "TJS": "11.342608999999998",
                    "AED": "3.6731000000000003",
                    "RWF": "1027.9999999999968",
                    "FIDA": "2.150537634408602",
                    "SAND": "0.770712909441233",
                    "DKK": "6.928899999999998",
                    "WCFG": "2.6737967914438503",
                    "ZWD": "462.5222",
                    "BGN": "1.8269380000000002",
                    "UMA": "0.3234152652005175",
                    "SYN": "0.7917656373713381",
                    "MMK": "1850.1387604070305",
                    "NOK": "9.436939351433132",
                    "SYP": "2511.95",
                    "CRPT": "4.06421459053038",
                    "FOX": "7.6923076923076925",
                    "ZWL": "322.0",
                    "LKR": "354.75130999999703",
                    "GAL": "0.2233638597274961",
                    "CZK": "23.00510000000001",
                    "XCD": "2.7026",
                    "HTG": "111.91540985661398",
                    "RGT": "0.147819660014782",
                    "AVT": "0.9389671361502347",
                    "BHD": "0.3767873",
                    "ENJ": "1.6934801016088061",
                    "COVAL": "61.97706848466068",
                    "CGLD": "0.7692307692307692",
                    "KZT": "434.94902397439023",
                    "SZL": "15.648991860646353",
                    "YFII": "0.0019652736152191",
                    "YER": "250.24962399993993",
                    "GRT": "7.358351729212656",
                    "AFN": "88.9999999999998",
                    "ORN": "0.7010164738871363",
                    "ENS": "0.1027221366204417",
                    "MASK": "0.60790273556231",
                    "AWG": "1.8005",
                    "NPR": "124.06563071865017",
                    "UNI": "0.2134471718249733",
                    "AAVE": "0.0108506944444444",
                    "FX": "4.097520999795124",
                    "MNT": "3106.0654",
                    "GBP": "0.7918221",
                    "BYN": "3.3646390000000004",
                    "XTS": "1392.28131889225",
                    "PERP": "0.9345794392523364",
                    "HUF": "367.21000000000214",
                    "BYR": "33646.39000000001",
                    "GBX": "112.23017061230536",
                    "BOND": "0.2936857562408223",
                    "YFI": "0.0001356698393059",
                    "BIF": "2053.809817210926",
                    "XTZ": "0.5509641873278237",
                    "XDR": "0.727015",
                    "EOS": "0.8230452674897119",
                    "GST": "0.5125576627370579",
                    "LQTY": "0.8368200836820084",
                    "BICO": "1.5325670498084292",
                    "BZD": "2.0132739175934775",
                    "MOP": "8.079732999999997",
                    "NAD": "15.600000000000001",
                    "SKL": "15.873015873015873",
                    "GTC": "0.4444444444444444",
                    "PEN": "3.6564221032178708",
                    "WST": "2.624382",
                    "SHPING": "120.962864400629",
                    "TMT": "3.4935706073327952",
                    "AXS": "0.0548095368594135",
                    "CLF": "0.029953178987797",
                    "GTQ": "7.669718000000002",
                    "CLP": "826.5000000000122",
                    "TRAC": "3.7993920972644375",
                    "MPL": "0.0457247370827618",
                    "DNT": "21.390374331550802",
                    "TND": "3.0339989927123345",
                    "CLV": "7.852375343541421",
                    "FLOW": "0.4248990864669641",
                    "UPI": "42.40882103477524",
                    "COMP": "0.0178970917225951",
                    "SLL": "13099.999999999214",
                    "FORTH": "0.351493848857645",
                    "DOP": "55.12156509967081",
                    "KMF": "459.7999999999953",
                    "DOT": "0.11001100110011",
                    "IDEX": "14.316392269148174",
                    "GEL": "2.8901734104046244",
                    "MAD": "9.910000000000002",
                    "AVAX": "0.0445136879590474",
                    "TOP": "2.314",
                    "AZN": "1.7",
                    "PGK": "3.51",
                    "GYEN": "127.45347947998981",
                    "UNFI": "0.5277044854881267",
                    "CNH": "6.741899977980955",
                    "UAH": "29.44291500000003",
                    "NCT": "43.03851947493006",
                    "WLUNA": "8505.571149102661",
                    "POWR": "3.9920159680638725",
                    "ERN": "0.495049504950495",
                    "KNC": "0.5446029844243546",
                    "RLC": "1.2987012987012987",
                    "GFI": "0.6024096385542169",
                    "CNY": "6.698599999999999",
                    "ATOM": "0.1083423618634886",
                    "QUICK": "0.0146284376828555",
                    "BLZ": "13.605442176870747",
                    "LPT": "0.0829187396351575",
                    "MRU": "36.4801",
                    "GODS": "1.6001408123914904",
                    "BMD": "1.0",
                    "SNT": "29.19281856663261",
                    "PHP": "52.325000000000124",
                    "SNX": "0.4079135223332653",
                    "RLY": "17.857142857142858",
                    "PYG": "6858.710562414266",
                    "JMD": "154.2305438168975",
                    "COP": "3907.7764751856193",
                    "USD": "1.0",
                    "API3": "0.6533812479581836",
                    "BTRST": "0.3832886163280951",
                    "ROSE": "16.366612111292962",
                    "SUKU": "9.86679822397632",
                    "DAI": "1.000050002500125",
                    "XYO": "111.98208286674132",
                    "GGP": "0.791822",
                    "SOL": "0.0243161094224924",
                    "ETB": "51.898929947862335",
                    "FET": "7.155635062611807",
                    "ETC": "0.0447127207690588",
                    "SOS": "575.67209717345",
                    "VEF": "403133000033.2891",
                    "VUV": "114.835332",
                    "LAK": "13157.894736842105",
                    "OGN": "5.221932114882507",
                    "UST": "19.99800019998",
                    "ETH": "0.0005806189397898",
                    "BND": "1.3690710000000001",
                    "AUCTION": "0.1640689089417555",
                    "LRC": "2.0938023450586263",
                    "BADGER": "0.1808318264014467",
                    "REPV2": "0.1068947087119188",
                    "LRD": "151.50000000000003",
                    "ALL": "112.99999999999991",
                    "HIGH": "0.558659217877095",
                    "TRB": "0.1160092807424594",
                    "VES": "4031330.000332891",
                    "ZMW": "17.213715000000008",
                    "BNT": "0.819672131147541",
                    "USDT": "1.0013367846074508",
                    "OXT": "8.14000814000814",
                    "DASH": "0.0182615047479912",
                    "ILS": "3.34467",
                    "GHS": "7.769917815248292",
                    "GYD": "208.6898451521349",
                    "KPW": "900.026",
                    "BOB": "6.870259999999998",
                    "MDL": "19.047619047619047",
                    "TRU": "12.360939431396787",
                    "AMD": "481.61585000000224",
                    "TRY": "16.21799844274779",
                    "LBP": "1517.0000000000016",
                    "MDT": "30.93580819798917",
                    "JOD": "0.7089911707911519",
                    "GUSD": "1.0",
                    "HKD": "7.849110000000001",
                    "AERGO": "7.140307033202427",
                    "EUR": "0.9314456035767511",
                    "AMP": "87.26003490401396",
                    "LSL": "15.648835132010444",
                    "ORCA": "1.2195121951219512",
                    "KEEP": "5.092946269416858",
                    "CAD": "1.2725492546551762",
                    "MUR": "43.32355299999998",
                    "IMP": "0.791822",
                    "GIP": "0.791822",
                    "RON": "4.6049999999999995",
                    "NGN": "414.7088950910908",
                    "CRC": "674.7683857515908",
                    "IMX": "1.1723329425556859",
                    "PKR": "200.1000000000005",
                    "ANG": "1.7998349551346142",
                    "LTC": "0.0162932790224033",
                    "USDC": "1.0",
                    "SPELL": "823.0452674897119",
                    "LCX": "16.9061707523246",
                    "CRO": "5.982650314089142",
                    "KRL": "2.1052631578947367",
                    "PLA": "1.9756989034871086",
                    "SRD": "21.05900000000002",
                    "SAR": "3.750991",
                    "TTD": "6.778068745206634",
                    "CRV": "0.8561643835616438",
                    "VGX": "1.3793103448275863",
                    "NU": "6.508298080052066",
                    "MVR": "15.450000000000008",
                    "TRIBE": "4.23908435777872",
                    "INR": "77.69220000000001",
                    "INV": "0.0112714156898106",
                    "KRW": "1258.3700000000522",
                    "JPY": "127.134913027006",
                    "AOA": "419.2169028255219",
                    "PLN": "4.259",
                    "SBD": "8.123476848090982",
                    "QNT": "0.0160423518087752",
                    "ALICE": "0.3967466772465781",
                    "PLU": "0.1310615989515072",
                    "XLM": "8.323830293747971",
                    "DDX": "0.9049773755656109",
                    "LINK": "0.1592356687898089",
                    "MUSD": "1.002104419280489",
                    "MWK": "1016.5000000000342",
                    "SUPER": "5.684240443370754",
                    "POLS": "1.8018018018018018",
                    "MGA": "3982.500000000031",
                    "FIL": "0.1386001386001386",
                    "POLY": "4.542357483533954",
                    "RNDR": "1.4388489208633095",
                    "BAL": "0.1554001554001554",
                    "BAM": "1.826931",
                    "GALA": "14.234875444839858",
                    "EGP": "18.593451999999985",
                    "SSP": "130.26",
                    "RAD": "0.4739336492890995",
                    "BAT": "2.785515320334262",
                    "NIO": "35.82078859466091",
                    "APE": "0.1649484536082474",
                    "NZD": "1.5308778053335783",
                    "ETH2": "0.0005806189397898",
                    "RAI": "0.3327787021630616",
                    "BUSD": "0.9995002498750625",
                    "ARPA": "33.840947546531304",
                    "BRL": "4.731",
                    "MCO2": "0.1483679525222552",
                    "ALCX": "0.0304275064658451",
                    "COTI": "9.42951438000943"
                }
            };
            res.json(data)
        } catch (err) {
            res.jsonp({ error: err });
        }
    }
}


export default CurrencyFreaksApiController;