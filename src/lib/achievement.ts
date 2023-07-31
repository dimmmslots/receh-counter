export const achievementLists = {
    "juragan_cepek": {
        "title": "Juragan Cepek",
        "description": "Kumpulkan 50 koin 100",
        isAchieved: false
    },
    "baginda_gopek": {
        "title": "Baginda Gopek",
        "description": "Kumpulkan 50 koin 200",
        isAchieved: false
    },
    "raja_seceng": {
        "title": "Raja Seceng",
        "description": "Kumpulkan 50 koin 1000",
        isAchieved: false
    },
    "indonesia": {
        "title": "Merdeka!!",
        "description": "Susun receh dengan urutan 1 - 9 - 4 - 5",
        isAchieved: false
    },
    "harbinger_of_receh": {
        "title": "Harbinger of Receh",
        "description": "Capai total receh Rp. 100.000",
        isAchieved: false
    }
}

export function checkAchievement(receh100: number, receh200: number, receh500: number, receh1000: number, achieved: {
    [key: string]: boolean
}) {
    // if conditions are met, return the object keys of the achievement
    if (receh100 >= 50 && !achieved["juragan_cepek"]) {
        return "juragan_cepek"
    }

    if (receh500 >= 50 && !achieved["baginda_gopek"]) {
        return "baginda_gopek"
    }

    if (receh1000 >= 50 && !achieved["raja_seceng"]) {
        return "raja_seceng"
    }

    if ((receh100 == 1 && receh200 == 9 && receh500 == 4 && receh1000 == 5) && !achieved["indonesia"]) {
        return "indonesia"
    }

    if (((receh100*100) + (receh200*200) + (receh500*500) + (receh1000*1000) >= 100000) && !achieved["harbinger_of_receh"]) {
        return "harbinger_of_receh"
    }

    return '';
}