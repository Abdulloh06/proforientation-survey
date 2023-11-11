// JavaScript to handle radio button interactions and store selected value

let software = 0;
let design = 0;
let marketing = 0;

const answersArr = [];

document.addEventListener('DOMContentLoaded', function () {
    const questionsData = [
        {
            question: "1) Menga koproq mos keladi:",
            options: [
                "O'z ishingizni boshqalardan mustaqil ravishda bajarish|1,1,2",
                "Jamoada, boshqalar bilan hamkorlikda ishlash|3,2,2",
                "Odamlarni boshqaradi, ularning ishini tashkil qilish|2,1,2",
            ],
        },
        {
            question: "2) Maktabda o'qiyotganda menda ko'proq darajalar namoyon boʻlgan qobiliyatlar:",
            options: [
                "chizmachilik, amaliy san’at|1,9,1",
                "musiqa, qo'shiq aytish yoki DJing (musiqa to'plamlarini yaratish)|1,1,1",
                "aniq fanlar (informatika, matematika, fizik kimyo)|7,1,2",
            ],
        },
        {
            question: "3) Qaysi yo'l bilan malumotni yaxshiroq chunasiz:",
            options: [
                "Tinglash orqali eslayman|1,1,1",
                "Rasmlar va tasvirlar orqali|1,5,1",
                "Yaxshiroq eslash uchun mantiqni tushunishim kerak|4,1,2",
            ]
        },
        {
            question: "4) Menga ko'proq yoqadi:",
            options: [
                "O'ylashingiz kerak bo'lgan muammolarni hal qilish|8,1,1",
                "o'rganing, tahlil qiling, saralash|3,1,3",
                "yangi narsa o'ylab toping, tajriba qilish|2,3,2",
            ]
        },
        {
            question: "5) Menga ko'proq tog'ri keladi:",
            options: [
                "doimiy to'liq ish kunlik shaxsiy kompaniyalar|3,1,1",
                "Turli tashkilotlarda mustaqil ish pudratchi sifatida|1,1,2",
                "davlat tashkilotida ishlash|1,1,1",
                "o'z biznesimni/brendimni yuritish|1,2,1"
            ]
        },
        {
            question: "6) Biznes muvaffaqiyati uchun eng muhim:",
            options: [
                "noyob, terilgan mahsulotni yaratish yoki xizmat ko'rsatish|2,2,2",
                "mahsulotingizni reklama qilish va sotish imkoniyatiga ega bo'lish yoki xizmat ko'rsatish|1,1,8",
                "moliya va odamlarni to'g'ri boshqarish|2,1,1",
            ]
        },
        {
            question: "7) Menga ishlash osonroq:",
            options: [
                "raqamlar va jadvallar bilan|1,1,1",
                "odamlar bilan|2,1,2",
                "asboblar va materiallar bilan|1,3,1",
                "kompyuter dasturlari bilan|6,3,2",
            ]
        },
        {
            question: "8) Menga muhumroq:",
            options: [
                "o'z sohangizda mashhur bo'lish, o'zingizni qurish shaxsiy brend|1,1,1",
                "ijodkorlik bilan bog'liq qiziqarli ish|1,5,1",
                "eng avvalo martaba imkoniyatlari beradigan ishga ega bo'lish|2,1,2",
                "mehnat bozorida doimiy talabga ega bo'lgan mutaxassis bo'lish|3,1,3",
            ]
        },
        {
            question: "9) Meni kuchli tarafim:",
            options: [
                "analitik aql, rivojlangan mantiq|4,1,2",
                "ijodkorlik, badiiy did|1,4,1",
                "moslashuvchanlik, tez o'rganish|2,2,3",
                "xushmuomalalik, odamlarni ishontirish qobiliyat|1,1,2",
            ]
        },
        {
            question: "10) Men uchun hayot ancha zerikarli bo'lardi:",
            options: [
                "Filmlar, seriallar, videolarsiz|1,2,1",
                "Musiqasiz|1,1,1",
                "Ijtimioy tarmoqlarsiz|1,1,5",
                "Kamputer oyinlarsiz|1,2,1",
                "Sportsiz|1,1,1",
            ]
        },
        {
            question: "11) Men odamlarga  nimadur tushuntirish kerak bo'lganda undan foydalanaman:",
            options: [
                "Rasmlar va obrazlar|1,4,1",
                "Sxema va chizmalar|3,2,1",
                "Raqamlar, tablitsalar va grafiklar|2,1,2",
                "Faqat og'zaki|1,1,3",
            ]
        },
        {
            question: "12) Men ishonaman, muvaffaqiyatli karyera uchun:",
            options: [
                "Keng dunyoqarash va ko'plab hududlar keng bilimga ega bo'lish|1,1,2",
                "Aniq mutaxassislikni chuqur tushunchaga ega bo'lish|2,2,2",
                "Ambitsiya va boshqarish qobiliyatiga ega bo'lish|1,1,1",
            ]
        },
        {
            question: "13) Menga qulayroq:",
            options: [
                "Diqqatni chalg'itmasdan bir narsaga qaratish|2,2,2",
                "Zerikmaslik uchun turli vazifalarga o'tish|1,1,1",
                "Bir vaqtning o'zida bir nechta ishlarni bajarish|1,1,1",
            ]
        },
        {
            question: "14) Bugungi kunda men uchun muhimroq:",
            options: [
                "Kelajakda munosib kasbga ega bo'lish uchun martaba qurish|2,1,2",
                "Moliyaviy mustaqilligingizni ta'minlash va barqarorlik|2,2,2",
                "Ish va hayot o'rtasidagi muvozanatni topish|1,1,1",
                "O'zingizga yoqadigan narsani topish, o'zini o'zi anglash|1,2,1",
            ]
        },
        {
            question: "15) Menda yaxshiroq rivojlangan:",
            options: [
                "Ta'm, uslub hissi|1,2,1",
                "Muloqot qobiliyatlari|1,1,1",
                "Analitik ko'nikmalar|4,1,2",
                "Intuitsia|1,1,2",
            ]
        },
        {
            question: "16) Tehnik korgazmada men etibor beraman:",
            options: [
                "eksponatlarning tashqi ko'rinishi, qanday ko'rinishi haqida|1,3,1",
                "eksponatlarning ichki tuzilishi bo'yicha|3,1,1",
                "ularni qanday qo'llash mumkinligi haqida|1,1,1",
            ]
        },
        {
            question: "17) Men qila olmayman va yoqtirmayman:",
            options: [
                "odamlarga moslashtirilinish, xushomad bo'lish|1,1,1",
                "ishontirish, o'z fikrini majburlash|1,1,1",
                "boshqa odamlarni nazorat qilish, ishni tekshirish|1,1,1",
            ]
        },
        {
            question: "18) Menha yaqinroq:",
            options: [
                "buyurtma, aniq vazifalar va ko'rsatmalar, ishonch|2,1,2",
                "chegaralar va standartlardan tashqariga chiqish imkoniyati, ijodiy buzuqlik, spontanlik|1,2,1",
            ]
        },
        {
            question: "19) Menga ko'proq mos keladigan Moliyaviy motivatsiya:",
            options: [
                "ish haqi va ko'rsatkichlarga erishish uchun premialar|1,1,2",
                "beqaror, lekin hech kim bilan cheklanmagan daromad biznesingiz|1,1,1",
                "kam oylik va sotishning yuqori foizi|1,1,1",
                "asta-sekin o'sib borayotgan barqaror ish haqi xizmat muddati va tajribasi|3,1,2",
            ]
        },
        {   
            question: "20) Siz qanday ijtimoiy tarmoqlarsiz afzal va faol hisoblaringiz bor:",
            options: [
                "Twitter|1,1,1",
                "ВКонтакте|1,1,2",
                "Facebook|1,1,2",
                "Instagram|1,3,3",
                "LinkedIn|2,1,1",
                "Pinterest|1,3,1",
                "ijtimoiy tarmoqlardan umuman foydalanmayman|1,1,1"
            ]
        },
        // Add more questions and options as needed
    ];

    const radioContainer = document.getElementById('radioContainer');

    questionsData.forEach(function (data, index) {
        const questionElement = document.createElement('div');
        questionElement.classList.add('radio-component');

        const questionTextElement = document.createElement('p');
        questionTextElement.classList.add('question');
        questionTextElement.textContent = data.question;

        const formElement = document.createElement('form');

        data.options.forEach(function (option, optionIndex) {
            const labelElement = document.createElement('label');

            const inputElement = document.createElement('input');

            inputElement.type = 'radio';
            inputElement.name = `radioGroup${index + 1}`;
            inputElement.value = data.options[optionIndex].split('|')[1].toString().split(',');

            const optionTextElement = document.createTextNode(option.split('|')[0]);

            labelElement.appendChild(inputElement);
            labelElement.appendChild(optionTextElement);

            formElement.appendChild(labelElement);
        });

        questionElement.appendChild(questionTextElement);
        questionElement.appendChild(formElement);

        radioContainer.appendChild(questionElement);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const radioGroups = document.querySelectorAll('form');

    radioGroups.forEach(function (group) {
        group.addEventListener('change', function (event) {
            console.log(event.target.name);
            const selectedValue = event.target.value;
            console.log(`Selected value: ${selectedValue}`);
            for(let i = 0; i < answersArr.length; i++) {
                if(answersArr[i].includes(event.target.name.toString())) {
                    console.log(answersArr);
                    console.log(answersArr[i].split('|')[1].toString().split(',')[0]);
                    software -= parseInt(answersArr[i].split('|')[1].toString().split(',')[0]);
                    design -= parseInt(answersArr[i].split('|')[1].toString().split(',')[1]);
                    marketing -= parseInt(answersArr[i].split('|')[1].toString().split(',')[2]);
                    answersArr.splice(answersArr[i]);
                }
            }
            
        
            answersArr.push(event.target.name.toString() + `|${selectedValue}`);
            software += parseInt(selectedValue[0]);
            design += parseInt(selectedValue[1]);
            marketing += parseInt([2]);

            console.log(software);
            // You can now use 'selectedValue' as needed, such as storing it in a variable or sending it to a server.
        });
    });
});
