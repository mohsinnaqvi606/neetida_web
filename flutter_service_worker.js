'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "1baf601db9aab063e1c832d470a9c84a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "68e09203de06cc652810ce5a96061020",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0270a099329707163c5c7d185c126001",
".git/logs/refs/heads/main": "141257ca012b9d610f1f2657a8ae3c3b",
".git/logs/refs/remotes/origin/main": "3e4b9b8c22da6663fe120ed80e971349",
".git/objects/02/65205cb381b71b0f668fe25aadcfa42062d9b1": "beae3d97a2380667cc9e719eac096d55",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/4268b1832159c8e578b5c208dc500c729f0bfc": "158fa4cfc074a9a54ccf0b6fe6e2949d",
".git/objects/05/4d58c2cde54f52eeafc2dce3ddf55107e20f5a": "6ddf6ab210fae8e0f640ef8890030403",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/f1678da1777af90f9bd40355ad1d1a2a9a1600": "ca0e8d78c40fd153b436a562cee8913a",
".git/objects/11/8eba98c0f19f2b5c1f2bb87f0008f74ab922cd": "16702fedcb3564732d7fbe86ae91fb98",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1b/2bcbb31e31b1db79140c5a5c732e8ea085db7b": "d95cedcef450fe26afffa7f76e9ee6d5",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/660115510e10dd559ecab25719c14c7ff7e6ff": "bbcfe73fa1fd4bb2d87de45315a479e0",
".git/objects/26/39ccd25df81375a4fa1e4ea268e118c5defb5d": "bff0c06439d1b08c6cf3a7856920db1a",
".git/objects/29/e6fc09f437e241ef8ee49b276f3a1780bed801": "6b493becdebb19db009d6c1b98c66595",
".git/objects/2b/c0004d264b389437ef7a83c609eeedebee52b2": "0ea87b1bd129b59cdaef340fce8765c8",
".git/objects/2c/0f746d6f7521836a44b2960666fe723af65765": "95cc347d83711806bfecc7fdd3fc4f3f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/94b468d27df22e806b994fc1f3cd6894d10fdb": "00638f8ec8794100e3de6c145b94d65a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/2c124d7f1992e7102ff7f5dfb0f33027490319": "38ba5e49f59f4fcce7f4fb3d433b9bcd",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3d/9d1c1096e7073f1dbe1333440f62ec0f2a8ef0": "d495528d479a144f203aec81579e5774",
".git/objects/41/4e68dde4ee617c7428d27b52015ea63d7c8b08": "303e0e55189b4600edae9356e08d9a6d",
".git/objects/42/d9d5c9cf076f27b27412139f1f083f20ea1e96": "bc77581ae49c7ff6b339d7c6d81cf7c6",
".git/objects/44/1c5633ababc05004c44079c5506d9a561d7256": "ee8870d071e7b21b6796e2951c6e0d46",
".git/objects/44/8fae592ba5b7df28ee503b0121ddd6e5d3424b": "a9af9d6c979c142d9ca7bceb81e71b7b",
".git/objects/46/59cbf86d4d773ae29cd8cff7c9d1edc0a31fbd": "fbcc7564dc2d4c9829a68360cc3d8190",
".git/objects/4e/4c59819e47bc74b0183e60ea278d591633e30b": "8d57be2bb2512e777c07cdda5c7bbf81",
".git/objects/50/e032009810ceaf421085d7da208f00b9295e06": "ebecc8af24cab4cfb678d526aa3b834a",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/6a3d164d5c8ec5bf659d486bac64e7bcbed0fb": "6a47c539da6fbb1fa4ae760356a7cf98",
".git/objects/57/d8c8d8c67d54ab66b4f94641757cc6f78a9f21": "39b95ccbeb6415432b9bc3d7e2135f59",
".git/objects/5a/2fbf7db01c2534b117403e4e99767973f578e1": "8cdddcb0f627a2c231f220bc4e2dc158",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5e/2098f7ad6ceeac7641a0c13e335cdeb715c1ce": "5cc6fa3e1652b847870e87d262da7ea8",
".git/objects/5e/3d9d83da4a954b9ee36d96fd90d338534ee350": "43454b8f65b2fd6cd8ad0994c5ce5c36",
".git/objects/5e/87cc880da2f15f3b5ab1a28309e17e9caeeb50": "2a38eb9b4ffc1a5d518bf1978da7cf1e",
".git/objects/5f/706c861fc6534375fdc3395cef56af8bec263e": "fb007f520585292de3cb8d3bf1087fe6",
".git/objects/62/1d4262c5acce1a418c1e4adafa3b9971919639": "56ce83927b5f621e3106c27686a02cf6",
".git/objects/62/93c7221c44394e52487764a282b4bc038abf8b": "5f34cd61e94f426f04527c70b9ed39e2",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/65/ec0740fe66b3ef321de9079eac2470aa21e10a": "5a146c719d4186e0189ad220b938ce93",
".git/objects/67/382d4301805418506acc2da7e9b8a4621474b3": "c470ba6f5ce91c23edee6c054ca85722",
".git/objects/6a/8286420234a442e85bbc020b12c6c1f903bd53": "92c95b42c56a943a0e5906fda36e1dfd",
".git/objects/6e/64a5f9e73ca781bc785c4ba9fb7e5ceeb08f43": "e9b9aa9984436c8a420ea57023cffb76",
".git/objects/6e/f7efcf944cf1c24a343ed3251ea1fb2a13db24": "4579e188d4378ae64b99ad5a503d8c33",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/9c59d0d7d5c2014b67118748445ae5ecd043ef": "cf04cfae594731275266f9932c147608",
".git/objects/7a/fdc30dcf7e8ec75de3c4a111dc444c6f8ec52e": "660669b282aa1e8096b73d1b06704fdc",
".git/objects/7c/5f119a74aa004d3725205b0e9e2d9722ae2cba": "de704705f9f6a6d239526655563660b9",
".git/objects/7e/53d0150d9715fb041327160e52b2ef3878562e": "c1a3842c08b7c0d2bc462c34d0768b21",
".git/objects/7e/6b73bbdca05fa96ff161eee59406f303ee1085": "d23afc6e78988f24d4defd2a5af389d9",
".git/objects/7f/3908c1c084d02b6f722d24cf43b15e8d1e2afd": "f5b8f983069f15bdb0545a2b9ed06bd2",
".git/objects/7f/ec6426e296ca0813351b7802435a41645faf6b": "220ef1dee77974da752724a075b059c3",
".git/objects/82/6c338c2ce5bb29b2377acfae2dcea9086a0355": "a3c8492028329df4e87624cd5d98b256",
".git/objects/88/6a5a1e3bd93fd755a67b5545373b4fcc6544c1": "b2476099b269776a8b35f39ec603e9ce",
".git/objects/8f/bfa2cd7c7b446643c7d6e027200a5567763e95": "f1c89f8fee79ccd8a68c3e6200dfaf58",
".git/objects/92/cb2ff96d150a875355ebd2b5f84a9d0999a82e": "fed49dd218ed47feff0284108c63cd65",
".git/objects/94/17baaa341a5268b1a34d340479c357c2c68130": "c85faf323b7288c4c4f9bc98e43b4893",
".git/objects/96/b1ea38e29dd6c12f52c2a3e1dbd53da87b4937": "179e25181d25344eb0199bd1e7b583b6",
".git/objects/99/2bf7c6c8fa6e587e0d1f8ad5bf5fd33b551200": "735bd9dea9ecf591e9c4d328da4a70c7",
".git/objects/9a/694ec962869c3e730dd4659c9e6cf4b9bc37e6": "f6c3f7d524c81054ed92313249c99900",
".git/objects/9a/aaa94d8588a94f65efd85aa7112d29fcd20455": "c1d5079e3edbb82aedb9cacf77237d92",
".git/objects/9e/c00faa7e3c84f07277067050ebf16654813faf": "b3b81eb91ab431d8afdb35be66d5ec30",
".git/objects/a0/33de714d51c241cd2d4133bffa11269e0f5588": "52796800956e5ed1ebf983746e3a2198",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/134d6089b2bee56ef5d309cbe085601c756fc1": "1597fe28e2f7ec7fa89d8e35a4c1d275",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/8251b88a957b130983884af2df0bd5dd287ce9": "7fa16691b3fb417f98b1f76cf55c66c9",
".git/objects/b0/803abe307bb03db276c76fd3813b3334f336ca": "0087793f0c13172564ba503f5ced87c6",
".git/objects/b1/c84704f24755984158673680943af281a6d10c": "ffec4f331c540610fa21ba3e1801aca7",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b8/7b73f6dcdee7f6a3c31ad9d10fe2af019d32a3": "fb1d0bbfd98e9b4426d5a055bd6f258f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/01864f13c080dee210c3665d665742a17b6f17": "b420d39167bb337ca4a05846edc456b0",
".git/objects/bf/9f040e9f499e65d184ebe4f5e906d6d9369c7f": "2b74c2df7be512532657aa110e3ab017",
".git/objects/c4/d597980555cf3c3b4568d9c203e77fb7b97b89": "bde6b92a90b4d217fad84c8b95abaf6a",
".git/objects/c6/5db93529a6c289fc30b43b0419562eb4adb958": "d104dca7b5829cd845bf9a0b5afc6d6e",
".git/objects/cb/8cffc228417de29ab59881e60b573107ded0ea": "38e12780ced7e07862d53c8272a1f098",
".git/objects/cb/cebe273246ce7df790e5a5a484d6d08f0a4f84": "160d178aea95da8795cd288d40dfba5f",
".git/objects/cc/69f67071a0ad8fc9bc6231f13a062a43f530c2": "2eec54a5bdae3c040b03ba1c06d5c638",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/b22f5f7ac9e4815e5ce99bb6d8e2fdc878d0f3": "fa86869f7271b51d29ba4765a41c5567",
".git/objects/cf/792bed6dc491c7ed0dad2313223cbb9a462ac1": "40e3df3db94d0dd38e6bcdc989dd21c9",
".git/objects/d0/cd4d0abbc7820a086773d395fe3b3c7a27ec3b": "fdc6d4cd0a8b24dd643c37e1ce819621",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/8e60d0a785f4372247bc1d25f69d2dddf60a0d": "6375a05816b58f1ca3e39c325b564791",
".git/objects/d5/fe3fee6ae7431866a7b9db4247b85ed0781ca8": "3df5a8ed1246c7db83ad828785626dbe",
".git/objects/dc/60de0012eddb19ca02d063dbb2b516dea693f1": "a50ad6a4fb3b4140dc509d4c93812601",
".git/objects/df/44c88239d4bc4a038bacb3a760ee40cbce709d": "12ad90caff56f988311f142a62078742",
".git/objects/e1/b72336a3b126034ee8855b4e5db8253bf711e0": "4849cc80b9df5925a7a5461490f0aee2",
".git/objects/e2/88c5fdfea129caae246fb27abcd795f392a192": "20b388422ad573933fb10e05696399a0",
".git/objects/e4/004bc9a1b48e60372365758948ed0ce02153e6": "74505981eac7f7661e4da9bfb0405ce0",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e7/3121e1d667c50ff12bba6b3239c25e6ee8b72e": "3bb98ed82f6ce96eb6d112b063f2f2c9",
".git/objects/ea/daa8f858c48f487c072ab0d4a5ce4dab61baff": "e412125242a5c2d91cf037d64f212b67",
".git/objects/ee/4c2fd887ad621f864012ce3910cb0ad9fc2fc4": "4bdc245b12e8c55720b2e3187948458f",
".git/objects/ef/51052715044248896993a80a7a92e0b3037c58": "ebe6532ef0ee5fe6751a32f2fcca769e",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f4/2547088a589ea4ce8b9bd591fdc062e90ad5a5": "189dc63e3c83ea1967c25d0e3995755e",
".git/objects/fd/dbc31acec762a55ba8741cae9495c32f610ce9": "11732be8b44ade8ed111644c761849d7",
".git/refs/heads/main": "7329a9a9bba453781d909d01fc30fce4",
".git/refs/remotes/origin/main": "7329a9a9bba453781d909d01fc30fce4",
"assets/AssetManifest.json": "709c1b609fe99bea335875ac4071f89c",
"assets/AssetManifest.smcbin": "3d9dace7ced0eb7ef205c0ca8fcc8f57",
"assets/assets/fonts/Asap-Black.ttf": "54396cac6178cccfdac6e73d3286c5f6",
"assets/assets/fonts/Asap-Bold.ttf": "378d3b281b7ac93c44f65434f30afc35",
"assets/assets/fonts/Asap-ExtraBold.ttf": "a339944ecd22cff7026e7e06e478b3eb",
"assets/assets/fonts/Asap-ExtraLight.ttf": "64c4fb1d82b3952a0ead29319a1eec5a",
"assets/assets/fonts/Asap-Light.ttf": "e6f56f7ad34b81e7edf076c7874ee9b3",
"assets/assets/fonts/Asap-Medium.ttf": "dd632bf0da27c8ee47fbcb070a44895a",
"assets/assets/fonts/Asap-Regular.ttf": "c3baa296b36a4b2d634bc5cabe020875",
"assets/assets/fonts/Asap-SemiBold.ttf": "cb376a6250865e3c27bd362f8c9da887",
"assets/assets/fonts/Asap-Thin.ttf": "de1d6c901eb1a96b1dd2e9923551a3c4",
"assets/assets/images/add_post.svg": "60536ba14709339db50c46558ebf39a4",
"assets/assets/images/add_user.svg": "16d81ff3e57bc8eaee9bf8e8d5d58f24",
"assets/assets/images/affiliate_marketing.svg": "b7e9c9a93ea0652f17f9c125ab0a2483",
"assets/assets/images/arrow_down.svg": "d4d91610c48772a04809edf771104ed5",
"assets/assets/images/arrow_left.svg": "b8b0bc1699f8c25901ee38c393b75761",
"assets/assets/images/arrow_right.svg": "bdc747b71c609229cf3ca654a5c8ef0e",
"assets/assets/images/dashboard.svg": "e56c3687e7c15a4c9e2b9d5efc2f240b",
"assets/assets/images/default_image.png": "28a81226adbe1e8f55b0a1fb050718af",
"assets/assets/images/exchange.svg": "41f3406f49908fa1c6bdef887f69654d",
"assets/assets/images/financial_gain.png": "744937ad9f9868494f197203b1649e3e",
"assets/assets/images/globe.png": "9cdef4c569f6ba342775c249c19ce434",
"assets/assets/images/grey_wallet.svg": "29683dc65ea329ac8c7de81e672fd375",
"assets/assets/images/group_users.svg": "cb26237edb48683d9e7f495cd94ac6b6",
"assets/assets/images/growth.png": "90c253fb2a9ee782bb7f093c6568d709",
"assets/assets/images/help.svg": "da2c6b8ddd3d5dc70d16e02de7cc10f4",
"assets/assets/images/info.svg": "804ba7f005d81c439ea8f31f47685a3c",
"assets/assets/images/information.svg": "1bf2d7f6eeaf6c09f8d90aa68dfb03d1",
"assets/assets/images/internet.svg": "1e2fbf3890e19237694fb5b1dd3b7cc8",
"assets/assets/images/launcher_icon.png": "fb35b6b345809699bb021b1f7473b1ec",
"assets/assets/images/lock.svg": "3466776be5f3e6ddf2c14d567aeaf575",
"assets/assets/images/logo.png": "68fdc05f0067f78c60c247bfc0d28095",
"assets/assets/images/logo2.png": "59927d0e67dda172ab1309ea5c70ef8d",
"assets/assets/images/logo3.png": "4e43c1791008bb85be37a5019ffed911",
"assets/assets/images/logo4.png": "df7c497b31207ae294d5e653462040ff",
"assets/assets/images/membership.png": "20742b4a994a7c28505516d43d91e5ba",
"assets/assets/images/menu.svg": "a21758dc00204b29d84a4c7c1f8796b1",
"assets/assets/images/native_splash.png": "c5f4a6caddd0ed0b716106e4e25c878e",
"assets/assets/images/news.svg": "52400c34a04929240f3d0fddc82e5da9",
"assets/assets/images/news2.svg": "6541b058ef3eeb5544197b2227088292",
"assets/assets/images/paste.svg": "d3426ff24aa6f8d1c2eafd889177a19e",
"assets/assets/images/player.svg": "e371c9743ecf0bd20d39ee05205eb5b1",
"assets/assets/images/profile.png": "b2dd1b09edee72c9a508ccce5054ff2d",
"assets/assets/images/puzzle.svg": "64e0769c5c8cfee5f97a146eef291762",
"assets/assets/images/qr_code.svg": "a77ecb120ee7c88c0ec7377810f6cb45",
"assets/assets/images/resume.svg": "51b073e52637090fdde964e1655ca4d2",
"assets/assets/images/send.svg": "de03f1e5240924e11779982f3307fee7",
"assets/assets/images/settings.svg": "bdbb608002b398b0234634ffda14e161",
"assets/assets/images/speedometer.png": "56f3ca7ca66183dbb904aa692cb4ed7c",
"assets/assets/images/upload_image.svg": "a5f9bdbda6159d8d42b972281cc2f099",
"assets/assets/images/wallet.png": "e7b521e474d39b6816072d1d0ba084b5",
"assets/assets/images/wallet_grey.png": "40867503605fa764c5c55cb300c3fa41",
"assets/FontManifest.json": "10233b65a195edbfd39f2651963a59f2",
"assets/fonts/MaterialIcons-Regular.otf": "04b2c1e60c6642f64ef081f6ee091b5e",
"assets/NOTICES": "efc4c313366bbe8de8319c163c5d29a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b8c22757a2a95b5ce22d6bf63cd4d862",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "df930d5a43fc565ae3e52d65d04b54d4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "47253ebb3ad74f340858a54e5f080e02",
"icons/Icon-512.png": "7084a6b13e161ab7bea21a89c7310ed5",
"icons/Icon-maskable-192.png": "47253ebb3ad74f340858a54e5f080e02",
"icons/Icon-maskable-512.png": "7084a6b13e161ab7bea21a89c7310ed5",
"index.html": "6ecb99fc1229ae8cf54e28a828fbd15d",
"/": "6ecb99fc1229ae8cf54e28a828fbd15d",
"main.dart.js": "f3f0d2b0812a9730e7b6763d62253993",
"manifest.json": "8ca405f7b2d355d1003f8a1d2b6e258a",
"splash/img/light-background.png": "c5f4a6caddd0ed0b716106e4e25c878e",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "c9212ca373399b78bbb21570949964c0",
"version.json": "504d5fefc31a3ee3ca208e869586128f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
