'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "279d7027f1bd1a4e58131351bd90fb36",
".git/config": "699b918647c26e05ffb41f47381dce98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b73c685e9f4dca0d8587a7620a4619c1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "83de54f881fe49cef93385dac63e2dd3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3362abd628a435d55548b3fc341254d9",
".git/logs/refs/heads/main": "d056c2c11fa5ed6dafa009b3c55f7914",
".git/logs/refs/remotes/origin/main": "b9623794c2f5d3b05fb97c16a622172e",
".git/objects/01/6b0a2640f477a8d884082e6089f60af761f7d0": "d1dfdfda4e0fd9d90cbbfc51372f095b",
".git/objects/02/b3753aa8c94dd95f19b238274f7e20c3003ef2": "ca14847df64f7c20ea9bf3c573a444b6",
".git/objects/03/31ca29fec08970c65e5ab8083a1a4d6f066db5": "baf4bed65fb5c3de709fd42322f8e3b8",
".git/objects/03/b82b317542c5ee7a1489b246b357a6fec72f91": "04773a0bbacdc277ce010e8d65fe09b8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/79e9f4c25e8b502e79c79ba666e0b6eb3a0ec8": "d4d37ac5edb14880ba88dfdf254d3666",
".git/objects/09/cb556b9ef919005bce7d5a646bf1e9ed507754": "5581227e42115bbf15f14c46b88d7eb2",
".git/objects/0e/e73619f2816af9de6b2270ed1d50ab3ea95b2a": "b8a65a05eea7a72528a764fa290db7d6",
".git/objects/12/bdb0a34c1c816ef2cf2f835739fc968d0e2359": "a27b0521552f81eb071a89fe01ca9763",
".git/objects/13/084174e2979fc77749b51c2520f36c390e605a": "04fd81262eb13e138779d5fc1646c864",
".git/objects/17/58245138b43f6222d8a84275a9f5917f8458d5": "ac8672bf31e881d9ea1df5f9525689ed",
".git/objects/1b/dbbd094037aa59b9af93691a0ac17523f39e63": "512080c06f39c229e74bb6a5209a4fbc",
".git/objects/1c/9415a48438a0b2271d99479b7b6cea8c9f9160": "abb9a3b766fde36b36679321bdae73cd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/7f091d06e1f161eae4c18f1a4d230d6be65123": "75ce9e0379c5cd1e96712ef1fb17026c",
".git/objects/21/72ba8fade0ef219bfda35901cbc49b282e8a72": "c028d4a05314bfa3a392ef244b62033c",
".git/objects/22/946ad659e8b846360fbaf57fb724ff152b20fa": "85b3cfd912545d916892fe94074f3b44",
".git/objects/23/5e4723bf9ffac631ee295ca2dbe3c88529fd1a": "62a9f1f67adca3b13a913bd5df33c9aa",
".git/objects/23/b82f912280d993337779eca306fb528c19bfe9": "50d8dbbb87e6abcc75ff6cbee2d4cab0",
".git/objects/28/7e47847ccb3d6a0759d11b52b2e3c565f565a0": "3ca05fec28aa9e999737b4c7aebd2207",
".git/objects/28/b27983c3e375b3d4f7e1d240ac69e097d4bbfc": "75596b785f1f31889c98527af9afbf2e",
".git/objects/2b/ced79e458d36e90c7e3555513a4aa63b9b5ee2": "04ddeda13dd225595412d60905a8e5cc",
".git/objects/30/30bf57084e12c2e5e25d38c199819d940609d5": "07a6c0e134839fabecfd988ed341194f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/331a9e95a00eebd771b52e78a3d0ca40faef38": "e64c2d8d68d1b9d23b1f97ef9dce1b63",
".git/objects/35/d4bfbc0c85f3b2c11f00de09eeaefddbb28e73": "87f46dc1b8dddd31da81c7e06e531080",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/11f6097609aaf9aee17020a2d1168ffde02416": "9ac0c403f38210b5742ba9a0bda446e2",
".git/objects/3f/21c50559faac64c506323bc8bde3be0fb8e243": "12d4772429e0ece401bcdb69bbafc541",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/4e896b71e23cdf0c02eaf026deed3baad42c76": "3e7f812c37c15028e98d2c96dc49a42b",
".git/objects/42/7be4e1e48f3e7137d4dfc41302273bf8bae0ae": "740229ac47d7947f45f21bc9d0e0c50a",
".git/objects/43/acbffd52dcfb98b9d1772415b8105b85dd735a": "081eafac485c0159f2b14e5ee23811a7",
".git/objects/44/1ecae31f1a4b0070e160b41b9b2d73b8081101": "912d7d9d247b0db8796fdb070ed6987b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/725b62bb48b1f626dcfe583bd2580e991c1dae": "ee73bffb40e0f92734f19a954ced2fa8",
".git/objects/46/d0e52159fbaff85eb14a2be649a0e58b52612c": "63010e3313de088228db1bbf17929079",
".git/objects/46/d20a29a2910b625281db6065914dc52cbb4b41": "06c258908c149cab16ad7df0fa706a5b",
".git/objects/47/81e7c88a1e3659f283d530984b4232cd80ab71": "64bd8e937336531f802265672bc1b1c9",
".git/objects/48/0cab228930baec299a3318655f0dbdbdb31eb1": "87f9f77af70f76cb1bc699cc5ec8ad72",
".git/objects/51/c9fd3ebd8273e1e63091a844ff82159359b264": "8e8e92a0d74fc06282597cf4724c2673",
".git/objects/54/6b90890f3370c7f4ba671e0a47fd2e67e6bf92": "13dd00722c11b3656baecefbe833967c",
".git/objects/56/12e97f296a0c43a65b2c7197e8587f55d0ee5f": "dd79a228fd1e0966777693eb3e45a5e7",
".git/objects/57/326f894fea61067197af31b9e18ba5f51d58ed": "d2870c893332a566ac7558a177d3ced6",
".git/objects/58/0340cdeb6fc3cb9c5767c0687d694e8cfcc0e6": "e3681d2b5d548b9cc4007277afa11512",
".git/objects/59/7d301543354fb68cb7ab022ade5063a34bc083": "75266c4e1e84655746821ce934b151c3",
".git/objects/5c/af489c98b8c603bb867dfa42fa0804cb6f94b2": "1cf0c49bdde65ab67611d6287a18e4ef",
".git/objects/62/b434b12f9f5a75636b5455c26836858b443baf": "e2d386c16ab63a04aeef882bab597c81",
".git/objects/64/bf52432b60a96e0f00e84fe4109ea481bde769": "25f5972f21a588a33a28758ad75648dd",
".git/objects/66/471ddd00d422d45bde93a7f54b6dbe7a3ad6cb": "2db7a515258c77e8e152dba327418e61",
".git/objects/68/2a1feed89c854f484ffd22d496f027ccf47db1": "1af897cddbc45b9eb22a58ac524170db",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/8c474ff94a31ccb12e676488edcabf998e45ee": "fb013f50318739e6b2a5d51661700a2c",
".git/objects/6f/6e274df43815a4cb409c0e99f531feac78354a": "d5ab4c39e9e545a9801b9f8e8d0286db",
".git/objects/73/63d63dc068920aee5c0b3f5bf5842df0686789": "0fa1c778dc76527472b02aa3226b839e",
".git/objects/78/41f593bf00d1a08c1d311086eb32ddd31c1e95": "830681b81f1e07f494b016848019e243",
".git/objects/79/699be1c6bee23e38934799b8695a97f8474f0c": "07d8c8218fbec69de5efc24ee854cb8a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/5159dd3781b07461ef0f73cfaa5a0fc5132fbe": "e6f6cda9cec9b1b291de652ccfa51248",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/c25e6dce59b42f982b93dcbbd0c549f35fa029": "0afd51fac69bebcd81e1e6485ce7c7a7",
".git/objects/95/c7228ab891f16553b16529b5edaf128b6f02df": "99767f391d300baadb66dfdab8121788",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/bd46163d118dc8c506f34f27b7ec0830d26350": "f77f6d6c195ac39184d70b769abf00f6",
".git/objects/9a/afc2043260bec52cf02efe2783879d25de4d5b": "7f6908551bfa06bb016527d5da97fcdf",
".git/objects/9a/ba4600d44bb3451cbb3c1089057f511eb65b83": "31abf642416ffe2eb8566fe240c0e041",
".git/objects/a3/3aba245643e1fd201016df3527118951ab9fdc": "05e98a55564a8eb77d7b15a66ffa5998",
".git/objects/ab/48a65e6f4b15eee6284feb3648919033e8d19a": "e5d9b5bcf37e31e944be056cb1370fe5",
".git/objects/b0/72a9f8a6a9646f46b007ef1fdc6cef88b753ef": "c128cb4cc9a5a9916449cc37f29f970c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/819698b06a7ec3bc6f13eb263f4f93a64093b8": "f6ee168b889a94e335fcc053a3e1c8bc",
".git/objects/b6/7fac50a65593f27b888d6b523a5db55cb2a872": "e02d6ffc7ec84b30e3beb5a336c4d012",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/901b8de6b0af93efdf90d33823ab0949d3c8f4": "7e282e29b54ae75b567e804dd66cc2ff",
".git/objects/bf/884d70c95fc265ef6b74f72bd0fd2d1d61526c": "3ec927f0e877c841320ff332dd564d79",
".git/objects/c2/3c850b719ad5f846c97af623c03ace7ce0b283": "c9727b2349496336e69d582692063a1a",
".git/objects/c3/b80fd2343982770d0bce6f01c085a58c008832": "63d09c9a8eebf86f0dfe713cd0d7a74d",
".git/objects/ca/3cbc64f44683a646c123777c78f9dc4eada613": "1c49e9ec617ac2f800944143e3c1f1e6",
".git/objects/cc/91e94545d0fd812317d8a224e5608eef44f788": "f25a6c6babe5f7627a02dd35315ffd3b",
".git/objects/cc/cd6edc044a9deef6f59cb82567c9cc2e595b7f": "3c5b18776afcf480a51bcc8d61465608",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/0e5ad485b2b9be2aded36081d1d1e56d41fe26": "96f82445510d2e81b5404fa0ae472c54",
".git/objects/d3/d18c469493a6b6b468e4b4ca36c7100dca4f73": "4a8018cf960bdb54fd59e650434fb819",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9b536faf5390ef706f7bfd0658155740db0057": "3147eea9a3e63b0936cb07d6e0cb9247",
".git/objects/d7/a960b660942f506027d67ad14046c6e6d73f27": "52ce163fefdcf8c615735f55af7da2d8",
".git/objects/da/be237468db1bbf2cef0f0d7dbae045fd092e46": "a26ee93050b97aed039376bf95d92eb7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/f7252707639322d3e58d6f459968f4761cd094": "53d8e84a1e43d2bd71229f41c7f36e18",
".git/objects/e3/1a3d6155975484393c2dad50c88b826cc55cce": "91b0751710e37473f2ecf3205f9a0467",
".git/objects/e3/b4c66a9b6a66a9dd1186ff22742b8ea34913b9": "f09b2e8ab12286126473fd673f9b64ad",
".git/objects/e6/e4ce2a13f112dd9be44ecf629836452960b62d": "a2fdae9780f22bf7eee0d3e5909a8000",
".git/objects/e7/dbc98b6d9ad14d06b89137b2d72312753ef237": "8002aec7639ba2397609b00dc3143054",
".git/objects/e8/c11549ef9b3c74cb71f23547b33c4c6576c9a7": "fdf10708ed5725434569a3dc99c49ab4",
".git/objects/e8/f33c6414294cc2049a52cd24b78987977d2087": "ed9ed66e2e7c7b4df851c3cadcc94121",
".git/objects/ea/8624cb08baa0c62d97f5479b28072e180a5c44": "48f522a7216bb7b7920663789a0bee6d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b42976f4be6835a55d263ec81ca91c8eef38fd": "9d0eba76c393af76d3ee660f00d24d2e",
".git/objects/f1/4522227d2520adb2981d9ead4ccfb15b2ee40e": "17315b079b77c2f2d683dc7b7a3be9f6",
".git/objects/f1/a4b06bb31231c2bb8ff3eb2fc199b974da5832": "96cf1a4b887ac40c8d656a04fdf16949",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/845bbeb7a71a2c84ee906e3ed4a623c420c5f0": "c665741617182734d18d95700f505b54",
".git/objects/f8/2222cd9787801065eb03a8f096ae4ca0ef2cf0": "d79f2d809e940197706265d4c8e5a791",
".git/objects/f9/8d5916d022a3c8d53d642f228803419843b82d": "c2048c3ef6adc66f294141f2b8337493",
".git/objects/fa/ac2978e1a56feb6ebbc5cc356dec218867ec2f": "f423362ed6d98a76de78a2dfd94d0d1f",
".git/objects/fb/41d74b10921056a1acbccaf1278918cfbfbe35": "e3cdd2d45742a0db79dba9bd6d92b6c8",
".git/objects/fb/d5a19ae0493d16ccb3509d0dd9fcc62f89c89f": "fa85de95e81eebab68e6931e3028f8a0",
".git/objects/fd/7e1a4b235d74f59547888852d63985f32e8bb0": "bc526695abbf2a8c5f7cc9b4914cdd06",
".git/objects/fe/0e2e0411d1b2dff87214977f7ff32f33afaec2": "d3e461906f06e2dcdb76a780f830aa0e",
".git/ORIG_HEAD": "453a5fe45b2296509d97617e71ddb390",
".git/refs/heads/main": "55a6bcf8ad881146b114fea30586f294",
".git/refs/remotes/origin/main": "55a6bcf8ad881146b114fea30586f294",
"assets/AssetManifest.bin": "2ea7812eeddb0b7b5a1742fa0dfaf0ee",
"assets/AssetManifest.bin.json": "2ae8256ce38ea28c292be3cf51e69ec6",
"assets/AssetManifest.json": "115abaffc00d982909895cbfdcc21612",
"assets/assets/animations/aboutBg.json": "c7ae8489656c7b175a718e039ac7df49",
"assets/assets/animations/aboutMe.json": "61bb65422642916b418d368818083860",
"assets/assets/animations/bookApoinment.json": "8b32f017d8f7f48fea0948c66cec4322",
"assets/assets/animations/developer_portfolio.json": "d35671af8071bd7187e9ec5e83bb5773",
"assets/assets/animations/developer_waiting.json": "1acd01094852f1142a95f0d6091a9a97",
"assets/assets/animations/education.json": "26b95c8a798c6ad55c9ece60dc5fa22d",
"assets/assets/animations/loading.json": "68d2d54705312a860a34bff0a8b9b75b",
"assets/assets/animations/skills_portfolio.json": "36d0806f75d4548f8ff5593998fdc72a",
"assets/assets/gifs/loading.gif": "402630577e3cdceaf86a6f342f67355c",
"assets/assets/images/C.png": "307bf51b42061eb5dc0a79deddc10813",
"assets/assets/images/circle.png": "3dd66cf82c548790915496fda3beb4ca",
"assets/assets/images/circle_chat.jpg": "ca906ce501645688725ce68fd2fb2e6a",
"assets/assets/images/circle_chatList.jpg": "bbbd653b26e294ab08397c948b573300",
"assets/assets/images/circle_chatmenu.jpg": "d958f214d55e836bd36f5cce3b361377",
"assets/assets/images/circle_chatMessage.jpg": "a0dfab67e2d29c7dd177942a79f1292f",
"assets/assets/images/circle_home.jpg": "ddb819874c9c7d93642bf2a0d62eb234",
"assets/assets/images/circle_login.jpg": "d0673317596ba998f4e7557fade11be0",
"assets/assets/images/circle_signup.jpg": "b200c1e2a330b78799604faa92331f81",
"assets/assets/images/circle_splash.jpg": "98036d865c7d1ddee767088fc18f0eb9",
"assets/assets/images/Dart.png": "e8f4ae7a36f98f7648f117ee356f023b",
"assets/assets/images/Figma.png": "2ef3cc295b969860412cd044be6f81c9",
"assets/assets/images/Firebase.png": "bc800ada43bb56100c534de89ba7bdc6",
"assets/assets/images/Flutter.png": "4cb0091a4af5dcf74304f470d3183d37",
"assets/assets/images/gitHubImage.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/Java.png": "05f161af5a5e7c1faf0d4251b564670b",
"assets/assets/images/montra.png": "d8e727d66b39e33e6519388eb5d4cb1e",
"assets/assets/images/MySelfImage.jpg": "26afc0d60bd18d927983115d81739622",
"assets/assets/images/NetflixLogo.jpeg": "b4bd1d92a56a238f6c4b2fe502dfec93",
"assets/assets/images/portfolio.png": "fd20f3ef708bee79ee15d277f270eb76",
"assets/assets/images/Python.png": "66613da9a8fad6a4485207c32aab0242",
"assets/assets/images/sujith.jpg": "58604bfb9e9b4a48d3a5984907e32b57",
"assets/assets/images/Telegram+popupmenu.jpg": "558c8214faebc248a5020b1145514981",
"assets/assets/images/telegramLogo.png": "286e1b82f7937fe6d5ace7f71813d30e",
"assets/assets/images/Telegram_chat.jpg": "fc72bb6b002035460198a1ed76d9aebc",
"assets/assets/images/Telegram_drawer.jpg": "d902985545d6e5b38aaeb6d2cb367691",
"assets/assets/images/Telegram_home.jpg": "bbe9a2e5008bfe71f17ded1c1d5932d2",
"assets/assets/images/Telegram_msg_snt.jpg": "cd783c7861a322ec0db8ab5ef5780c13",
"assets/assets/images/Telegram_settings.jpg": "d4efc527033ae4a690f3ba3870a2eed7",
"assets/assets/images/Telegram_settings_popupmenu.jpg": "299ffee3ace2fb357adee26775d4babe",
"assets/assets/images/Telegram_typing.jpg": "03536700d4ad0a9689122eb89a4197f6",
"assets/assets/images/todoAppLogo.jpg": "af6b921f094aa612f57b0d2e3f3aedf5",
"assets/assets/images/todoProfile.jpg": "cefff9e0268ed32cbbd8ff6dfa1af1f9",
"assets/assets/images/todo_aboutus.jpg": "76e0284ac2dc63b8a5483a2ddff1dd11",
"assets/assets/images/todo_bottomsheet.jpg": "5b47816911f53a273a9e780593801742",
"assets/assets/images/todo_bottomshettdata.jpg": "10e4c43e9d88196a5d59aba5cf8730db",
"assets/assets/images/todo_bottomshett_withoutData.jpg": "c68801ef2611e7edd7b7744d413ade31",
"assets/assets/images/todo_deleteDatas.jpg": "dc0d51e11e456330cd972a8162a4a8cf",
"assets/assets/images/todo_edit_profile.jpg": "b0d2bd7ebb024bcb5bd1ec1893bb5eab",
"assets/assets/images/todo_getstarted.jpg": "3c2e835664b58cbcba95581c6b99b95f",
"assets/assets/images/todo_home.jpg": "51b4d4c1df1ea3a41f795901d1b6042d",
"assets/assets/images/whatsappLogo.png": "6acf414c3e19aa945cf24307cd1715f4",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "07867ed55c3ddd5e07018a2e64beb9e0",
"assets/NOTICES": "b2d236c4003c526403056d9030618a4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "47da171c28d6506d54b843967f12630f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bb129261409fdf99e0631f212ff36d0",
"/": "5bb129261409fdf99e0631f212ff36d0",
"main.dart.js": "ca22f032576f6e2a574e33071727d7d4",
"manifest.json": "bae248d31e4f8733acb2f353550226d3",
"README.md": "6624c8ca96c2f7f25a913644d11b0c25",
"version.json": "696e9d4932b7ca674bd60f27894c8396"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
