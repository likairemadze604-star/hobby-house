/* ===================================
   PROFESSIONS
=================================== */

const professions = {

    sewing: {
        title: "კერვა",

        description:
            "კერვა არის შემოქმედებითი ჰობი, რომლის საშუალებითაც შეგიძლია შექმნა ტანსაცმელი, აქსესუარები და სხვადასხვა საინტერესო ნივთი.",

        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "საკერავი მანქანის გამოყენება",
            "ქსოვილის სწორად შერჩევა",
            "ტანსაცმლის დიზაინის შექმნა",
            "კერვის ძირითადი ტექნიკები"
        ],

        forWho:
            "კერვა გამოადგება ყველას, ვისაც უყვარს ხელსაქმე, დიზაინი და საკუთარი ნივთების შექმნა.",

        why:
            "კერვა ავითარებს კრეატიულობას და საშუალებას გაძლევს შენი იდეები რეალურ ნივთებად აქციო."
    },


    embroidery: {
        title: "ქარგვა",

        description:
            "ქარგვა არის ხელსაქმის ლამაზი მიმართულება, რომლის დროსაც ძაფითა და ნემსით იქმნება სხვადასხვა დეკორატიული ნიმუში.",

        image:
            "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "ნემსისა და ძაფის სწორად გამოყენება",
            "ნაქარგის დიზაინის შექმნა",
            "სხვადასხვა ნაკერის სწავლა",
            "დეკორატიული ნიმუშების შექმნა"
        ],

        forWho:
            "ქარგვა შესაფერისია მათთვის, ვისაც მშვიდი და შემოქმედებითი საქმიანობა მოსწონს.",

        why:
            "ქარგვა ავითარებს მოთმინებას, ყურადღებას და კრეატიულობას."
    },


    knitting: {
        title: "ქსოვა",

        description:
            "ქსოვა საშუალებას გაძლევს ძაფისგან შექმნა ტანსაცმელი, აქსესუარები და დეკორატიული ნივთები.",

        image:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "საქსოვი ჩხირების გამოყენება",
            "ძაფის სწორად შერჩევა",
            "ძირითადი ქსოვის ტექნიკები",
            "მარტივი ნივთების შექმნა"
        ],

        forWho:
            "ქსოვა განსაკუთრებით საინტერესოა მათთვის, ვისაც ხელსაქმე და საკუთარი ნივთების შექმნა უყვარს.",

        why:
            "ქსოვა კრეატიული და სასიამოვნო ჰობია, რომელიც ყურადღებასა და მოთმინებას ავითარებს."
    },


    vlogging: {
        title: "ვლოგინგი",

        description:
            "ვლოგინგი გაძლევს შესაძლებლობას შექმნა საინტერესო ვიდეოები და გაუზიარო შენი იდეები სხვა ადამიანებს.",

        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "ვიდეოს გადაღება",
            "კადრის სწორად შერჩევა",
            "ვიდეოს მონტაჟი",
            "კონტენტის დაგეგმვა"
        ],

        forWho:
            "ვლოგინგი საინტერესოა მათთვის, ვისაც კამერა, ვიდეოები და კრეატიული იდეების გაზიარება მოსწონს.",

        why:
            "ვლოგინგი ავითარებს კომუნიკაციის, კრეატიულობისა და ტექნოლოგიების გამოყენების უნარებს."
    },


    makeup: {
        title: "მაკიაჟი",

        description:
            "მაკიაჟის კურსზე გაეცნობი მაკიაჟის ძირითად ტექნიკებს და სხვადასხვა სტილის შექმნას.",

        image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "მაკიაჟის ძირითადი ტექნიკები",
            "კოსმეტიკური საშუალებების გამოყენება",
            "ფერების შერჩევა",
            "სხვადასხვა სტილის შექმნა"
        ],

        forWho:
            "მაკიაჟი საინტერესოა მათთვის, ვისაც სილამაზის სფერო და კრეატიული მუშაობა მოსწონს.",

        why:
            "მაკიაჟი გაძლევს შესაძლებლობას განავითარო კრეატიულობა და ვიზუალური სტილის შექმნის უნარი."
    },


    nails: {
        title: "ფრჩხილები",

        description:
            "ფრჩხილების მიმართულება მოიცავს მოვლას, მანიკიურსა და სხვადასხვა კრეატიული დიზაინის შექმნას.",

        image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "ფრჩხილების მოვლა",
            "მანიკიურის ტექნიკები",
            "დიზაინის შექმნა",
            "ფერების კომბინირება"
        ],

        forWho:
            "ეს მიმართულება საინტერესოა მათთვის, ვისაც სილამაზისა და დიზაინის სფერო მოსწონს.",

        why:
            "ფრჩხილების დიზაინი აერთიანებს სილამაზესა და კრეატიულობას."
    },


    hair: {
        title: "თმის სტილი",

        description:
            "თმის სტილის მიმართულება მოიცავს თმის მოვლას, ვარცხნილობებსა და სხვადასხვა სტილის შექმნას.",

        image:
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "თმის მოვლა",
            "ვარცხნილობების შექმნა",
            "თმის სტილის შერჩევა",
            "საბაზისო ტექნიკები"
        ],

        forWho:
            "ეს მიმართულება გამოგადგება მათთვის, ვისაც თმის სტილი და სილამაზის სფერო აინტერესებს.",

        why:
            "თმის სტილი კრეატიული საქმიანობაა და მრავალფეროვანი იდეების განხორციელების შესაძლებლობას იძლევა."
    },


    drawing: {
        title: "ხატვა",

        description:
            "ხატვა არის კრეატიული საქმიანობა, რომელიც გეხმარება იდეებისა და ემოციების ვიზუალურად გამოხატვაში.",

        image:
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "ხატვის ძირითადი ტექნიკები",
            "ფერების გამოყენება",
            "კომპოზიციის შექმნა",
            "კრეატიული იდეების განვითარება"
        ],

        forWho:
            "ხატვა შესაფერისია ყველასთვის, ვისაც ხელოვნება და შემოქმედება უყვარს.",

        why:
            "ხატვა ავითარებს წარმოსახვას, ყურადღებასა და კრეატიულ აზროვნებას."
    },


    photography: {
        title: "ფოტოგრაფია",

        description:
            "ფოტოგრაფიის კურსზე ისწავლი კარგი კადრის შექმნას, განათების გამოყენებას და ფოტოს გადაღების საფუძვლებს.",

        image:
            "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "კამერის გამოყენება",
            "კადრის კომპოზიცია",
            "განათების გამოყენება",
            "ფოტოს დამუშავების საფუძვლები"
        ],

        forWho:
            "ფოტოგრაფია საინტერესოა მათთვის, ვისაც ფოტოების გადაღება და ვიზუალური ისტორიების შექმნა მოსწონს.",

        why:
            "ფოტოგრაფია გაძლევს შესაძლებლობას ყოველდღიური მომენტები საინტერესო ისტორიებად აქციო."
    },


    cooking: {
        title: "კულინარია",

        description:
            "კულინარია არის შემოქმედებითი მიმართულება, სადაც შეგიძლია ისწავლო სხვადასხვა კერძის მომზადება.",

        image:
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",

        skills: [
            "სამზარეულოს ძირითადი ტექნიკები",
            "ინგრედიენტების მომზადება",
            "კერძების მომზადება",
            "ახალი რეცეპტების შექმნა"
        ],

        forWho:
            "კულინარია საინტერესოა მათთვის, ვისაც საჭმლის მომზადება და ახალი გემოების აღმოჩენა უყვარს.",

        why:
            "კულინარია ავითარებს კრეატიულობას და პრაქტიკულ უნარებს."
    }

};



/* ===================================
   PROFESSION PAGE
=================================== */

const params =
    new URLSearchParams(
        window.location.search
    );


const professionName =
    params.get("profession");


if (
    professionName &&
    professions[professionName]
) {

    const profession =
        professions[professionName];


    const title =
        document.getElementById(
            "professionTitle"
        );


    const description =
        document.getElementById(
            "professionDescription"
        );


    const image =
        document.getElementById(
            "professionImage"
        );


    const skills =
        document.getElementById(
            "professionSkills"
        );


    const forWho =
        document.getElementById(
            "professionFor"
        );


    const why =
        document.getElementById(
            "professionWhy"
        );


    if (title) {
        title.textContent =
            profession.title;
    }


    if (description) {
        description.textContent =
            profession.description;
    }


    if (image) {
        image.src =
            profession.image;

        image.alt =
            profession.title;
    }


    if (skills) {

        skills.innerHTML = "";

        profession.skills.forEach(
            skill => {

                const li =
                    document.createElement(
                        "li"
                    );

                li.textContent =
                    skill;

                skills.appendChild(li);

            }
        );

    }


    if (forWho) {
        forWho.textContent =
            profession.forWho;
    }


    if (why) {
        why.textContent =
            profession.why;
    }

}



/* ===================================
   COURSE SEARCH
=================================== */

const searchInput =
    document.getElementById(
        "searchInput"
    );


const courseCards =
    document.querySelectorAll(
        ".course-card"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const searchText =
                searchInput.value
                    .toLowerCase()
                    .trim();


            courseCards.forEach(
                card => {

                    const text =
                        card.textContent
                            .toLowerCase();


                    if (
                        text.includes(
                            searchText
                        )
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}



/* ===================================
   CONTACT FORM
=================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            alert(
                "მადლობა! შენი შეტყობინება გაიგზავნა. 💗"
            );


            contactForm.reset();

        }
    );

}



/* ===================================
   LANGUAGE
=================================== */

const translations = {

    ka: {
        heroSmall: "ისწავლე და განავითარე",
        heroTitle: "შენი ჰობი — შენი შესაძლებლობა",
        heroText: "აღმოაჩინე ახალი ჰობი, ისწავლე საინტერესო პროფესია და განავითარე საკუთარი შესაძლებლობები.",
        heroButton: "კურსების ნახვა",
        coursesTitle: "პოპულარული კურსები"
    },


    en: {
        heroSmall: "Learn and grow",
        heroTitle: "Your hobby — your opportunity",
        heroText: "Discover a new hobby, learn an interesting skill and develop your abilities.",
        heroButton: "View courses",
        coursesTitle: "Popular courses"
    },


    de: {
        heroSmall: "Lerne und entwickle dich",
        heroTitle: "Dein Hobby — deine Chance",
        heroText: "Entdecke ein neues Hobby und entwickle deine Fähigkeiten.",
        heroButton: "Kurse ansehen",
        coursesTitle: "Beliebte Kurse"
    },


    fr: {
        heroSmall: "Apprends et développe-toi",
        heroTitle: "Ton hobby — ton opportunité",
        heroText: "Découvre un nouveau hobby et développe tes compétences.",
        heroButton: "Voir les cours",
        coursesTitle: "Cours populaires"
    },


    es: {
        heroSmall: "Aprende y crece",
        heroTitle: "Tu hobby — tu oportunidad",
        heroText: "Descubre un nuevo hobby y desarrolla tus habilidades.",
        heroButton: "Ver cursos",
        coursesTitle: "Cursos populares"
    },


    it: {
        heroSmall: "Impara e cresci",
        heroTitle: "Il tuo hobby — la tua opportunità",
        heroText: "Scopri un nuovo hobby e sviluppa le tue capacità.",
        heroButton: "Vedi i corsi",
        coursesTitle: "Corsi popolari"
    },


    ru: {
        heroSmall: "Учись и развивайся",
        heroTitle: "Твоё хобби — твоя возможность",
        heroText: "Открой новое хобби и развивай свои способности.",
        heroButton: "Посмотреть курсы",
        coursesTitle: "Популярные курсы"
    },


    tr: {
        heroSmall: "Öğren ve geliş",
        heroTitle: "Hobbin — fırsatın",
        heroText: "Yeni bir hobi keşfet ve yeteneklerini geliştir.",
        heroButton: "Kursları gör",
        coursesTitle: "Popüler kurslar"
    },


    ar: {
        heroSmall: "تعلم وتطور",
        heroTitle: "هوايتك — فرصتك",
        heroText: "اكتشف هواية جديدة وطوّر مهاراتك.",
        heroButton: "عرض الدورات",
        coursesTitle: "الدورات الشعبية"
    },


    zh: {
        heroSmall: "学习并成长",
        heroTitle: "你的爱好 — 你的机会",
        heroText: "发现新的爱好，学习有趣的技能并发展自己的能力。",
        heroButton: "查看课程",
        coursesTitle: "热门课程"
    },


    ja: {
        heroSmall: "学んで成長しよう",
        heroTitle: "あなたの趣味 — あなたの可能性",
        heroText: "新しい趣味を見つけ、楽しいスキルを学びましょう。",
        heroButton: "コースを見る",
        coursesTitle: "人気のコース"
    }

};



const languageSelect =
    document.getElementById(
        "languageSelect"
    );


function changeLanguage(language) {

    const texts =
        translations[language];


    if (!texts) return;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (texts[key]) {

                element.textContent =
                    texts[key];

            }

        });


    localStorage.setItem(
        "hobbyHouseLanguage",
        language
    );

}


if (languageSelect) {

    const savedLanguage =
        localStorage.getItem(
            "hobbyHouseLanguage"
        ) || "ka";


    languageSelect.value =
        savedLanguage;


    changeLanguage(
        savedLanguage
    );


    languageSelect.addEventListener(
        "change",
        () => {

            changeLanguage(
                languageSelect.value
            );

        }
    );

}



/* ===================================
   CHAT SYSTEM
=================================== */

const chatList =
    document.getElementById(
        "chatList"
    );


const newChatButton =
    document.getElementById(
        "newChatButton"
    );


const emptyNewChatButton =
    document.getElementById(
        "emptyNewChatButton"
    );


const newChatModal =
    document.getElementById(
        "newChatModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const createChatButton =
    document.getElementById(
        "createChatButton"
    );


const newChatName =
    document.getElementById(
        "newChatName"
    );


const emptyChat =
    document.getElementById(
        "emptyChat"
    );


const activeChat =
    document.getElementById(
        "activeChat"
    );


const activeChatTitle =
    document.getElementById(
        "activeChatTitle"
    );


const activeChatMembers =
    document.getElementById(
        "activeChatMembers"
    );


const messages =
    document.getElementById(
        "messages"
    );


const messageForm =
    document.getElementById(
        "messageForm"
    );


const messageInput =
    document.getElementById(
        "messageInput"
    );


const deleteChatButton =
    document.getElementById(
        "deleteChatButton"
    );


const chatSearch =
    document.getElementById(
        "chatSearch"
    );



let chats =
    JSON.parse(
        localStorage.getItem(
            "hobbyHouseChats"
        )
    ) || [

        {
            id: 1,

            name: "კერვის მოყვარულები",

            members: [
                "ანა",
                "ნინო"
            ],

            messages: [

                {
                    sender: "ანა",

                    text:
                        "გამარჯობა! 😊",

                    type: "other"
                },

                {
                    sender: "მე",

                    text:
                        "გამარჯობა! Hobby House-ზე ახალი კურსი ვნახე.",

                    type: "me"
                }

            ]

        },


        {
            id: 2,

            name: "კრეატიული ჯგუფი",

            members: [
                "მარიამი",
                "ლუკა"
            ],

            messages: [

                {
                    sender: "მარიამი",

                    text:
                        "რა ჰობი მოგწონთ ყველაზე მეტად?",

                    type: "other"
                }

            ]

        }

    ];


let currentChatId = null;



function saveChats() {

    localStorage.setItem(
        "hobbyHouseChats",
        JSON.stringify(chats)
    );

}



function renderChats(
    searchText = ""
) {

    if (!chatList) return;


    chatList.innerHTML = "";


    const filteredChats =
        chats.filter(
            chat =>
                chat.name
                    .toLowerCase()
                    .includes(
                        searchText
                            .toLowerCase()
                    )
        );


    filteredChats.forEach(
        chat => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "chat-item";


            if (
                chat.id ===
                currentChatId
            ) {

                item.classList.add(
                    "active"
                );

            }


            item.innerHTML = `

                <h3>
                    💬 ${chat.name}
                </h3>

                <p>
                    👥 ${chat.members.join(", ")}
                </p>

            `;


            item.addEventListener(
                "click",
                () => {

                    openChat(
                        chat.id
                    );

                }
            );


            chatList.appendChild(
                item
            );

        }
    );


    if (
        filteredChats.length === 0
    ) {

        chatList.innerHTML = `
            <p style="color:#9b8994;">
                ჩატი ვერ მოიძებნა.
            </p>
        `;

    }

}



function openChat(id) {

    const chat =
        chats.find(
            item =>
                item.id === id
        );


    if (!chat) return;


    currentChatId = id;


    if (emptyChat) {

        emptyChat.classList.add(
            "hidden"
        );

    }


    if (activeChat) {

        activeChat.classList.remove(
            "hidden"
        );

    }


    if (activeChatTitle) {

        activeChatTitle.textContent =
            chat.name;

    }


    if (activeChatMembers) {

        activeChatMembers.textContent =
            "👥 " +
            chat.members.join(", ");

    }


    renderMessages(chat);

    renderChats(
        chatSearch
            ? chatSearch.value
            : ""
    );

}



function renderMessages(chat) {

    if (!messages) return;


    messages.innerHTML = "";


    chat.messages.forEach(
        message => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                `message ${message.type}`;


            element.innerHTML = `

                <span class="message-name">
                    ${message.sender}
                </span>

                ${message.text}

            `;


            messages.appendChild(
                element
            );

        }
    );


    messages.scrollTop =
        messages.scrollHeight;

}



function openNewChatModal() {

    if (!newChatModal) return;


    newChatModal.classList.remove(
        "hidden"
    );


    if (newChatName) {

        newChatName.value = "";

    }

}



function closeNewChatModal() {

    if (!newChatModal) return;


    newChatModal.classList.add(
        "hidden"
    );

}



if (newChatButton) {

    newChatButton.addEventListener(
        "click",
        openNewChatModal
    );

}


if (emptyNewChatButton) {

    emptyNewChatButton.addEventListener(
        "click",
        openNewChatModal
    );

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeNewChatModal
    );

}



if (createChatButton) {

    createChatButton.addEventListener(
        "click",
        () => {

            const name =
                newChatName.value.trim();


            if (!name) {

                alert(
                    "გთხოვ, ჩატს სახელი დაარქვი."
                );

                return;

            }


            const selectedMembers =
                document.querySelectorAll(
                    ".members-options input:checked"
                );


            const members =
                Array.from(
                    selectedMembers
                ).map(
                    input =>
                        input.value
                );


            if (
                members.length === 0
            ) {

                alert(
                    "აირჩიე მინიმუმ ერთი მონაწილე."
                );

                return;

            }


            const newChat = {

                id: Date.now(),

                name: name,

                members: members,

                messages: []

            };


            chats.push(
                newChat
            );


            saveChats();


            closeNewChatModal();


            renderChats();


            openChat(
                newChat.id
            );

        }
    );

}



if (messageForm) {

    messageForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const text =
                messageInput.value.trim();


            if (!text) return;


            const chat =
                chats.find(
                    item =>
                        item.id ===
                        currentChatId
                );


            if (!chat) return;


            chat.messages.push({

                sender: "მე",

                text: text,

                type: "me"

            });


            saveChats();


            renderMessages(
                chat
            );


            messageInput.value = "";

        }
    );

}



if (deleteChatButton) {

    deleteChatButton.addEventListener(
        "click",
        () => {

            if (
                currentChatId ===
                null
            ) {
                return;
            }


            const answer =
                confirm(
                    "ნამდვილად გინდა ამ ჩატის წაშლა?"
                );


            if (!answer) return;


            chats =
                chats.filter(
                    chat =>
                        chat.id !==
                        currentChatId
                );


            currentChatId = null;


            saveChats();


            if (activeChat) {

                activeChat.classList.add(
                    "hidden"
                );

            }


            if (emptyChat) {

                emptyChat.classList.remove(
                    "hidden"
                );

            }


            renderChats();

        }
    );

}



if (chatSearch) {

    chatSearch.addEventListener(
        "input",
        () => {

            renderChats(
                chatSearch.value
            );

        }
    );

}



if (chatList) {

    renderChats();

}
