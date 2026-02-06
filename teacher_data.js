const teacherData = [
    {
        name: "Xursandov Zarif", subject: "Informatika", schedule: {
            "Dushanba": ["8-B", "8-B", "6-A", "5-B", "8-A", "6-A", "", ""],
            "Seshanba": ["11-B", "7-B", "", "11-A", "7-A", "8-A", "", ""],
            "Chorshanba": ["9-A", "9-B", "7-A", "8-B", "7-B", "10-B", "", ""],
            "Payshanba": ["9-V", "9-A", "5-A", "5-B", "9-B", "", "", ""],
            "Juma": ["11-B", "11-A", "10-B", "5-A", "11-V", "10-V", "7-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Roziqov Azamat", subject: "Informatika", schedule: {
            "Dushanba": ["8-B", "8-B", "", "5-B", "", "", "8-V", ""],
            "Seshanba": ["11-B", "7-B", "", "11-A", "", "", "11-V", ""],
            "Chorshanba": ["", "9-B", "9-B", "8-B", "7-B", "10-B", "", ""],
            "Payshanba": ["", "", "", "5-B", "9-B", "", "11-V", ""],
            "Juma": ["11-B", "11-A", "10-B", "", "11-V", "10-V", "7-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Hamroyev G'iyos", subject: "Texnologiya", schedule: {
            "Dushanba": ["", "", "", "", "", "9-A", "9-A", ""],
            "Seshanba": ["", "", "10-V", "10-V", "9-V", "9-V", "", ""],
            "Chorshanba": ["", "7-B", "11-V", "7-V", "8-V", "", "", ""],
            "Payshanba": ["7-V", "11-V", "10-V", "9-V", "7-V", "7-B", "9-B", ""],
            "Juma": ["10-A", "8-V", "10-A", "11-V", "11-V", "8-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "To'rayev Abduhakim", subject: "Kimyo", schedule: {
            "Dushanba": ["9-B", "7-V", "8-V", "10-V", "9-V", "11-V", "11-V", ""],
            "Seshanba": ["", "10-V", "10-V", "8-V", "11-V", "11-V", "8-V", ""],
            "Chorshanba": ["7-B", "11-V", "7-V", "8-V", "", "", "8-B", ""],
            "Payshanba": ["7-V", "11-V", "10-V", "11-V", "10-V", "7-B", "9-B", "8-B"],
            "Juma": ["8-A", "10-V", "8-V", "11-V", "11-V", "10-V", "8-B", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Tojiyev Sultonmurod", subject: "Kimyo", schedule: {
            "Dushanba": ["9-A", "7-V", "8-V", "10-V", "9-V", "11-V", "11-V", ""],
            "Seshanba": ["", "10-V", "10-V", "8-V", "11-V", "11-V", "8-V", ""],
            "Chorshanba": ["11-V", "11-V", "7-V", "8-V", "", "8-A", "7-A", ""],
            "Payshanba": ["7-V", "11-V", "10-V", "11-V", "10-V", "9-A", "7-A", ""],
            "Juma": ["8-A", "10-V", "8-V", "11-V", "11-V", "10-V", "8-B", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Samatov F.", subject: "Ingliz tili", schedule: {
            "Dushanba": ["", "", "9-B", "", "5-B", "", "", "8-A"],
            "Seshanba": ["9-B", "9-B", "", "8-V", "", "", "11-B", ""],
            "Chorshanba": ["8-V", "7-A", "8-A", "5-B", "", "11-B", "9-B", ""],
            "Payshanba": ["11-B", "5-B", "8-V", "", "8-A", "", "", ""],
            "Juma": ["9-B", "11-B", "5-B", "", "8-V", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Umarova Y.", subject: "Ingliz tili", schedule: {
            "Dushanba": ["", "", "", "", "9-A", "7-V", "10-V", ""],
            "Seshanba": ["", "11-V", "6-A", "6-A", "", "", "10-V", ""],
            "Chorshanba": ["6-A", "7-V", "", "10-V", "6-A", "11-V", "11-V", ""],
            "Payshanba": ["9-A", "6-A", "11-V", "10-V", "", "", "", ""],
            "Juma": ["11-V", "11-B", "7-V", "6-A", "6-A", "9-V", "7-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Kenjaboyev X.", subject: "Ingliz tili", schedule: {
            "Dushanba": ["10-B", "10-B", "", "", "", "", "10-V", ""],
            "Seshanba": ["11-V", "10-A", "11-A", "", "10-A", "11-B", "10-V", ""],
            "Chorshanba": ["10-B", "10-B", "10-B", "", "11-A", "11-A", "11-V", ""],
            "Payshanba": ["11-B", "11-A", "11-V", "10-V", "8-B", "10-B", "", ""],
            "Juma": ["11-V", "11-B", "", "", "8-B", "9-A", "11-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Bekmurodov S.", subject: "Tarix", schedule: {
            "Dushanba": ["10-B", "10-A", "", "9-A", "", "", "", ""],
            "Seshanba": ["5-A", "", "", "5-B", "9-B", "7-B", "", ""],
            "Chorshanba": ["10-B", "10-B", "5-B", "9-B", "", "5-A", "", ""],
            "Payshanba": ["9-B", "9-A", "5-A", "9-B", "5-B", "", "", ""],
            "Juma": ["5-A", "5-B", "", "9-A", "", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Ismoilov Damir", subject: "Ingliz tili", schedule: {
            "Dushanba": ["5-A", "", "5-A", "7-B", "", "", "8-A", ""],
            "Seshanba": ["", "6-A", "11-A", "7-A", "7-B", "6-A", "9-V", ""],
            "Chorshanba": ["7-A", "7-B", "6-A", "5-A", "11-A", "7-A", "5-A", ""],
            "Payshanba": ["7-B", "11-A", "7-A", "6-A", "6-A", "5-A", "", ""],
            "Juma": ["5-A", "9-B", "5-A", "", "5-A", "", "9-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Narzullayev S.", subject: "Jismoniy tarbiya", schedule: {
            "Dushanba": ["9-V", "9-V", "5-A", "", "", "", "", ""],
            "Seshanba": ["", "6-A", "8-A", "8-A", "7-B", "7-B", "", ""],
            "Chorshanba": ["", "7-A", "7-A", "", "", "", "5-A", "5-A"],
            "Payshanba": ["", "", "", "5-A", "", "", "", ""],
            "Juma": ["9-A", "9-A", "11-V", "11-A", "", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Boltayev G.", subject: "Jismoniy tarbiya", schedule: {
            "Dushanba": ["9-V", "9-A", "", "", "", "", "", ""],
            "Seshanba": ["", "8-B", "6-A", "6-A", "", "", "5-B", ""],
            "Chorshanba": ["", "9-A", "", "", "9-B", "9-B", "9-V", ""],
            "Payshanba": ["", "", "", "", "", "", "", ""],
            "Juma": ["", "", "", "", "", "", "9-V", "9-B"],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Pardayev Jafar", subject: "Matematika", schedule: {
            "Dushanba": ["10-A", "9-A", "9-A", "11-A", "11-A", "", "", ""],
            "Seshanba": ["10-A", "", "", "9-A", "9-A", "7-V", "11-A", ""],
            "Chorshanba": ["9-V", "", "9-B", "9-A", "10-A", "9-V", "11-A", ""],
            "Payshanba": ["8-B", "10-A", "11-A", "9-A", "8-A", "", "11-A", ""],
            "Juma": ["9-V", "9-V", "11-A", "9-V", "8-B", "8-B", "10-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Sattorova Farogat", subject: "Matematika", schedule: {
            "Dushanba": ["8-A", "8-B", "9-B", "8-B", "8-A", "8-A", "9-B", ""],
            "Seshanba": ["", "", "", "8-B", "9-B", "8-A", "11-A", ""],
            "Chorshanba": ["8-A", "9-V", "9-B", "9-B", "", "", "8-B", ""],
            "Payshanba": ["8-B", "9-B", "", "8-A", "8-A", "8-A", "8-A", ""],
            "Juma": ["9-V", "8-A", "8-A", "8-B", "8-B", "8-B", "10-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Choriyev Humoyiddin", subject: "Matematika", schedule: {
            "Dushanba": ["", "5-A", "6-A", "5-A", "5-A", "6-A", "", ""],
            "Seshanba": ["", "5-A", "6-A", "6-A", "5-A", "5-A", "6-A", ""],
            "Chorshanba": ["", "6-A", "6-A", "6-A", "5-A", "5-A", "5-A", ""],
            "Payshanba": ["", "5-A", "6-A", "6-A", "5-A", "5-A", "5-A", ""],
            "Juma": ["", "5-A", "5-A", "6-A", "6-A", "5-A", "5-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Aliyorova Feruza", subject: "Matematika", schedule: {
            "Dushanba": ["", "", "9-A", "9-A", "", "", "", ""],
            "Seshanba": ["", "", "9-A", "9-A", "", "", "", ""],
            "Chorshanba": ["", "", "9-A", "11-V", "11-V", "", "", ""],
            "Payshanba": ["", "11-V", "11-V", "9-A", "9-A", "", "", ""],
            "Juma": ["", "", "11-V", "9-A", "9-A", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Qilichev Samandar", subject: "Matematika", schedule: {
            "Dushanba": ["", "7-V", "10-B", "", "10-B", "10-B", "", ""],
            "Seshanba": ["10-B", "8-V", "", "11-B", "11-B", "7-B", "10-B", ""],
            "Chorshanba": ["11-B", "", "11-B", "7-V", "7-V", "8-V", "10-B", ""],
            "Payshanba": ["", "7-B", "11-B", "11-B", "", "8-V", "7-B", ""],
            "Juma": ["", "11-B", "11-B", "8-V", "10-B", "10-B", "10-B", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Axmadov Nurbek", subject: "Matematika", schedule: {
            "Dushanba": ["", "5-B", "10-B", "", "", "10-B", "9-B", ""],
            "Seshanba": ["10-B", "", "5-B", "11-V", "5-B", "7-B", "10-B", ""],
            "Chorshanba": ["", "5-B", "9-B", "11-B", "11-B", "10-B", "10-B", ""],
            "Payshanba": ["5-B", "7-B", "11-V", "11-V", "5-B", "7-B", "7-B", ""],
            "Juma": ["5-B", "", "", "", "10-B", "10-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Faxriddinov Nodir", subject: "Matematika", schedule: {
            "Dushanba": ["", "", "8-B", "7-A", "8-B", "10-V", "", ""],
            "Seshanba": ["", "7-A", "8-B", "11-B", "11-B", "10-V", "", ""],
            "Chorshanba": ["11-B", "7-A", "11-B", "7-B", "7-A", "8-B", "", ""],
            "Payshanba": ["8-B", "7-A", "11-B", "11-B", "7-A", "10-V", "", ""],
            "Juma": ["", "11-B", "11-B", "7-A", "8-B", "8-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Xudoyshukurov Jahongir", subject: "Matematika", schedule: {
            "Dushanba": ["", "5-B", "8-A", "9-B", "11-A", "11-A", "11-A", ""],
            "Seshanba": ["7-B", "", "5-B", "9-B", "5-B", "", "7-B", ""],
            "Chorshanba": ["", "5-B", "7-B", "7-B", "", "7-A", "10-V", ""],
            "Payshanba": ["5-B", "9-B", "11-A", "11-A", "5-B", "11-A", "", ""],
            "Juma": ["5-B", "", "11-A", "9-B", "7-B", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Qudratov Baxtiyor", subject: "Matematika", schedule: {
            "Dushanba": ["", "8-A", "", "7-A", "11-A", "8-A", "7-B", ""],
            "Seshanba": ["7-B", "7-A", "", "9-B", "", "10-A", "7-B", ""],
            "Chorshanba": ["5-B", "8-A", "7-B", "7-B", "", "7-A", "10-V", ""],
            "Payshanba": ["", "", "10-A", "9-B", "10-B", "8-B", "7-V", ""],
            "Juma": ["", "8-A", "8-A", "7-A", "7-B", "10-A", "10-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Avazova Mavluda", subject: "Fizika", schedule: {
            "Dushanba": ["", "11-B", "", "10-B", "11-B", "11-B", "7-B", ""],
            "Seshanba": ["7-A", "", "11-B", "7-B", "11-A", "11-A", "7-B", ""],
            "Chorshanba": ["11-B", "11-A", "11-A", "7-B", "7-B", "9-A", "", ""],
            "Payshanba": ["11-A", "8-V", "10-A", "9-B", "11-A", "8-B", "", ""],
            "Juma": ["11-A", "7-A", "9-A", "", "", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Asqarov Sherzod", subject: "Fizika", schedule: {
            "Dushanba": ["", "6-A", "8-A", "10-A", "10-B", "8-V", "", ""],
            "Seshanba": ["8-V", "", "", "10-A", "10-B", "8-B", "7-V", ""],
            "Chorshanba": ["8-B", "10-A", "", "11-A", "7-B", "7-V", "9-A", ""],
            "Payshanba": ["11-A", "8-A", "9-A", "9-B", "", "", "", ""],
            "Juma": ["10-A", "9-B", "", "10-B", "", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Raximov Bobomurod", subject: "Fizika", schedule: {
            "Dushanba": ["", "10-V", "8-V", "11-V", "9-V", "9-A", "8-V", ""],
            "Seshanba": ["", "8-A", "", "7-B", "8-B", "8-B", "7-B", ""],
            "Chorshanba": ["8-B", "", "11-A", "7-B", "8-A", "9-A", "", ""],
            "Payshanba": ["10-B", "8-A", "9-V", "7-A", "11-B", "", "", ""],
            "Juma": ["11-A", "9-B", "9-A", "", "", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "G'ofiyev Akmal", subject: "Fizika", schedule: {
            "Dushanba": ["", "10-V", "", "10-B", "11-V", "11-B", "8-B", ""],
            "Seshanba": ["7-A", "8-A", "11-B", "", "10-B", "", "", ""],
            "Chorshanba": ["", "", "", "10-B", "8-A", "", "", ""],
            "Payshanba": ["10-B", "11-B", "", "7-A", "11-B", "8-B", "", ""],
            "Juma": ["", "7-A", "", "10-B", "9-V", "11-B", "10-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Rashidova Go'zal", subject: "Rus tili", schedule: {
            "Dushanba": ["", "7-A", "5-A", "11-V", "10-B", "8-V", "8-B", ""],
            "Seshanba": ["9-A", "9-V", "7-B", "10-B", "9-B", "9-V", "11-A", ""],
            "Chorshanba": ["7-V", "", "", "", "7-B", "11-B", "", ""],
            "Payshanba": ["6-A", "11-B", "5-B", "8-V", "", "", "8-A", ""],
            "Juma": ["9-A", "7-V", "9-B", "", "11-A", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Rashidov S.", subject: "Rus tili", schedule: {
            "Dushanba": ["", "6-A", "8-A", "10-V", "5-A", "8-V", "7-B", ""],
            "Seshanba": ["9-A", "9-V", "7-B", "10-B", "9-B", "9-V", "11-A", ""],
            "Chorshanba": ["", "", "11-V", "7-A", "10-V", "7-B", "11-B", ""],
            "Payshanba": ["5-A", "11-B", "5-B", "7-A", "8-B", "11-V", "11-A", ""],
            "Juma": ["9-A", "", "7-B", "5-B", "11-A", "5-A", "7-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Rahmonova Z.", subject: "Geografiya", schedule: {
            "Dushanba": ["", "8-A", "8-V", "11-V", "9-V", "9-A", "8-B", ""],
            "Seshanba": ["", "", "", "", "", "", "", ""],
            "Chorshanba": ["7-V", "", "11-V", "7-A", "10-V", "5-A", "", ""],
            "Payshanba": ["6-A", "9-V", "5-B", "5-B", "8-B", "8-B", "11-V", ""],
            "Juma": ["", "7-V", "", "5-B", "", "", "7-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Nurboyeva Dilnoza", subject: "Biologiya", schedule: {
            "Dushanba": ["", "10-A", "8-V", "11-V", "9-V", "9-B", "8-B", ""],
            "Seshanba": ["10-V", "7-V", "7-A", "9-V", "8-V", "7-V", "", ""],
            "Chorshanba": ["10-V", "8-V", "8-V", "8-A", "11-V", "11-V", "", ""],
            "Payshanba": ["7-A", "9-V", "7-B", "", "10-V", "7-V", "11-V", ""],
            "Juma": ["7-V", "8-B", "7-A", "10-V", "11-V", "11-V", "11-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Qarorova Sarviniso", subject: "Biologiya", schedule: {
            "Dushanba": ["", "10-B", "7-V", "", "", "5-B", "", ""],
            "Seshanba": ["10-V", "7-V", "", "9-V", "8-V", "7-V", "", ""],
            "Chorshanba": ["10-V", "8-V", "8-V", "8-A", "11-V", "11-V", "9-V", ""],
            "Payshanba": ["8-V", "", "8-A", "5-B", "9-V", "9-B", "9-A", ""],
            "Juma": ["8-V", "7-B", "", "10-V", "6-A", "8-A", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Turdiyev S.", subject: "Geografiya", schedule: {
            "Dushanba": ["7-A", "5-A", "", "", "5-B", "", "", ""],
            "Seshanba": ["6-A", "11-A", "", "10-A", "5-B", "6-A", "8-B", ""],
            "Chorshanba": ["5-A", "9-A", "8-B", "9-V", "9-B", "7-V", "7-V", ""],
            "Payshanba": ["8-V", "", "8-A", "", "9-V", "9-B", "9-A", ""],
            "Juma": ["8-V", "7-B", "5-A", "", "6-A", "8-A", "11-V", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Shoymardonov M.", subject: "Jismoniy tarbiya", schedule: {
            "Dushanba": ["", "", "11-V", "8-B", "", "", "", ""],
            "Seshanba": ["11-A", "", "10-A", "", "", "", "", ""],
            "Chorshanba": ["", "", "5-A", "11-B", "5-B", "", "", ""],
            "Payshanba": ["", "", "", "", "", "", "", ""],
            "Juma": ["", "", "5-A", "", "5-B", "5-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Ne'matova L.", subject: "Jismoniy tarbiya", schedule: {
            "Dushanba": ["8-V", "10-V", "6-A", "6-A", "7-A", "9-V", "9-V", ""],
            "Seshanba": ["8-A", "9-B", "7-V", "7-V", "", "9-A", "", ""],
            "Chorshanba": ["10-V", "11-V", "10-V", "10-A", "5-A", "5-B", "", ""],
            "Payshanba": ["", "", "", "", "", "", "", ""],
            "Juma": ["", "", "", "", "", "", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Narziyeva B.", subject: "Ona tili", schedule: {
            "Dushanba": ["11-A", "", "", "", "", "", "", "11-V"],
            "Seshanba": ["", "11-B", "10-B", "", "", "10-B", "", ""],
            "Chorshanba": ["11-V", "9-B", "11-B", "9-V", "10-B", "", "", ""],
            "Payshanba": ["10-A", "10-B", "", "", "", "", "", ""],
            "Juma": ["8-B", "8-V", "9-B", "11-A", "10-A", "8-V", "8-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Eshqulova N.", subject: "Ona tili", schedule: {
            "Dushanba": ["", "", "11-B", "", "11-B", "", "9-A", ""],
            "Seshanba": ["", "10-B", "9-B", "", "10-V", "", "", "11-A"],
            "Chorshanba": ["9-B", "11-B", "9-V", "10-B", "9-A", "10-V", "", ""],
            "Payshanba": ["9-A", "10-B", "8-V", "8-B", "9-B", "8-A", "", ""],
            "Juma": ["10-B", "9-B", "10-V", "11-B", "11-B", "9-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Odilova S.", subject: "Ona tili", schedule: {
            "Dushanba": ["11-V", "7-B", "7-V", "7-A", "11-V", "8-B", "", ""],
            "Seshanba": ["7-V", "11-V", "", "", "", "11-A", "10-A", ""],
            "Chorshanba": ["", "", "", "", "9-V", "", "", ""],
            "Payshanba": ["8-A", "8-B", "8-B", "11-A", "8-V", "8-A", "8-V", ""],
            "Juma": ["7-A", "11-V", "", "", "9-V", "", "7-B", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Hamrayev S.", subject: "Tasviriy san'at", schedule: {
            "Dushanba": ["", "", "", "", "", "", "", "11-V"],
            "Seshanba": ["", "", "", "", "", "", "7-V", "11-V"],
            "Chorshanba": ["", "", "", "", "", "", "", "11-A"],
            "Payshanba": ["", "", "", "", "7-B", "7-A", "7-A", "7-B"],
            "Juma": ["", "", "", "", "", "7-A", "7-V", "7-B"],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Nayimov S.", subject: "Tarix", schedule: {
            "Dushanba": ["", "11-V", "7-B", "5-B", "9-B", "7-B", "5-A", ""],
            "Seshanba": ["", "7-V", "", "5-A", "", "8-V", "7-B", ""],
            "Chorshanba": ["", "", "8-A", "10-V", "10-V", "9-V", "10-B", ""],
            "Payshanba": ["", "7-V", "11-V", "9-A", "7-V", "10-A", "10-V", "11-B"],
            "Juma": ["7-A", "7-V", "10-V", "10-B", "", "5-B", "7-B", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Bo'riyev A.", subject: "Tarbiya", schedule: {
            "Dushanba": ["7-B", "5-B", "9-V", "5-A", "", "5-A", "", ""],
            "Seshanba": ["11-A", "", "", "5-A", "8-V", "6-A", "", ""],
            "Chorshanba": ["", "10-A", "5-B", "5-V", "8-B", "10-B", "", ""],
            "Payshanba": ["11-V", "", "5-A", "6-A", "", "", "", ""],
            "Juma": ["10-V", "10-B", "", "7-B", "6-A", "5-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Husanov N.", subject: "Tarix", schedule: {
            "Dushanba": ["", "9-V", "8-V", "7-A", "8-V", "", "", ""],
            "Seshanba": ["5-A", "8-B", "5-A", "11-V", "8-B", "8-A", "", ""],
            "Chorshanba": ["5-B", "5-V", "10-B", "10-V", "", "8-A", "9-B", ""],
            "Payshanba": ["10-V", "5-A", "10-B", "10-A", "10-V", "", "10-V", ""],
            "Juma": ["7-B", "10-V", "", "7-A", "8-A", "7-A", "7-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Mo'minov F.", subject: "Tarix", schedule: {
            "Dushanba": ["7-A", "8-A", "11-A", "11-V", "", "", "", ""],
            "Seshanba": ["8-B", "8-B", "11-V", "8-A", "11-V", "", "", ""],
            "Chorshanba": ["5-B", "8-B", "", "", "", "", "", ""],
            "Payshanba": ["", "", "", "5-B", "10-B", "8-V", "8-A", ""],
            "Juma": ["", "5-B", "9-V", "", "10-V", "7-B", "", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Rajabova M.", subject: "Tarix", schedule: {
            "Dushanba": ["11-B", "11-A", "7-V", "11-B", "", "", "11-B", ""],
            "Seshanba": ["9-V", "9-A", "", "", "9-A", "9-B", "9-B", ""],
            "Chorshanba": ["11-A", "", "", "", "", "", "", ""],
            "Payshanba": ["", "", "7-V", "", "11-A", "11-B", "", ""],
            "Juma": ["9-V", "7-V", "9-B", "9-B", "9-A", "9-A", "9-A", ""],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    },
    {
        name: "Norboyeva O.", subject: "Biologiya", schedule: {
            "Dushanba": ["", "", "7-B", "7-A", "", "7-B", "7-A", ""],
            "Seshanba": ["", "", "", "", "", "5-A", "5-B", "7-A"],
            "Chorshanba": ["", "", "", "", "11-V", "11-V", "7-B", "7-B"],
            "Payshanba": ["9-B", "7-B", "", "", "5-A", "5-B", "6-A", "9-B"],
            "Juma": ["", "", "", "", "5-A", "5-B", "5-B", "6-A"],
            "Shanba": ["", "", "", "", "", "", "", ""]
        }
    }
];
