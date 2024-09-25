const ads = [
    {
        title: "Vélo tout terrain en bon état",
        description:
            "Vélo VTT, peu utilisé, en très bon état, idéal pour randonnées.",
        city: "Paris",
        price: 120,
        typeEnum: "OFFER",
        categoryEnum: "VEHICLE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Demande de service de plomberie",
        description:
            "Recherche un plombier pour une intervention rapide sur une fuite d'eau.",
        city: "Lyon",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "SERVICES",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Appartement T2 à louer",
        description:
            "Appartement 2 pièces, 50m², proche du centre-ville et des commerces.",
        city: "Marseille",
        price: 650,
        typeEnum: "OFFER",
        categoryEnum: "REAL_ESTATE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Recherche jeux vidéo d'occasion",
        description:
            "Je suis à la recherche de jeux vidéo d'occasion pour PS4 et Nintendo Switch.",
        city: "Toulouse",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "MULTIMEDIA",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Offre de baby-sitting",
        description:
            "Disponible pour garder vos enfants en soirée ou le week-end. Expérience vérifiable.",
        city: "Nantes",
        price: 10,
        typeEnum: "OFFER",
        categoryEnum: "SERVICES",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Location de maison de vacances",
        description:
            "Maison de vacances spacieuse, 3 chambres, à 5 minutes de la plage. Idéal pour famille.",
        city: "Nice",
        price: 1200,
        typeEnum: "OFFER",
        categoryEnum: "REAL_ESTATE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Vente d'un ordinateur portable",
        description:
            "Ordinateur portable en très bon état, parfait pour le travail ou le jeu.",
        city: "Bordeaux",
        price: 500,
        typeEnum: "OFFER",
        categoryEnum: "MULTIMEDIA",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Demande de service de jardinage",
        description:
            "Recherche un jardinier pour entretenir mon jardin une fois par semaine.",
        city: "Lille",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "SERVICES",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Voiture d'occasion à vendre",
        description:
            "Peugeot 208 d'occasion, année 2018, faible kilométrage, en bon état.",
        city: "Rennes",
        price: 7500,
        typeEnum: "OFFER",
        categoryEnum: "VEHICLE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Recherche une assistante administrative",
        description:
            "Entreprise recherche une assistante administrative pour un poste à mi-temps.",
        city: "Strasbourg",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "EMPLOYMENT",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Cours de guitare pour débutants",
        description:
            "Donne cours de guitare pour débutants. Possibilité à domicile ou en ligne.",
        city: "Paris",
        price: 25,
        typeEnum: "OFFER",
        categoryEnum: "SERVICES",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Achat de meubles anciens",
        description:
            "Cherche à acheter des meubles anciens en bois pour rénovation.",
        city: "Lille",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "HOME",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Chiot labrador à vendre",
        description:
            "Chiot labrador de 3 mois, vacciné et en bonne santé, cherche famille aimante.",
        city: "Lyon",
        price: 600,
        typeEnum: "OFFER",
        categoryEnum: "ANIMALS",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Demande d'emploi en marketing digital",
        description:
            "Cherche un poste en marketing digital, expérience de 2 ans dans le secteur.",
        city: "Bordeaux",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "EMPLOYMENT",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Vente de livres d'occasion",
        description:
            "Lot de livres d'occasion en très bon état, genres variés (romans, essais).",
        city: "Toulouse",
        price: 30,
        typeEnum: "OFFER",
        categoryEnum: "LEISURE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Demande de réparation d'ordinateur",
        description:
            "Cherche technicien pour réparer un ordinateur portable Lenovo. Écran cassé.",
        city: "Marseille",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "SERVICES",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Location d'un camion de déménagement",
        description:
            "Camion de déménagement disponible à la location, permis B suffisant.",
        city: "Nice",
        price: 80,
        typeEnum: "OFFER",
        categoryEnum: "VEHICLE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Recherche stage en développement web",
        description:
            "Étudiant en développement web, recherche un stage de 3 mois.",
        city: "Nantes",
        price: 0,
        typeEnum: "DEMAND",
        categoryEnum: "EMPLOYMENT",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Location de matériel de camping",
        description:
            "Matériel de camping complet à louer : tente, sacs de couchage, réchaud.",
        city: "Montpellier",
        price: 50,
        typeEnum: "OFFER",
        categoryEnum: "LEISURE",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: "Don de vêtements pour bébé",
        description: "Donne vêtements pour bébé, taille 0-6 mois. En bon état.",
        city: "Rennes",
        price: 0,
        typeEnum: "OFFER",
        categoryEnum: "FASHION",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export { ads };
