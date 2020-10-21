const navigationLinks = [
    {
        text: "Shift", 
        link: "/shift" 
    }, 
    {
        text: "Classes", 
        link: "/classes"
    }, 
    {
        text: "Locations", 
        link: "/locations", 
        children: [
            {
                text: "North Fort Lauderdale", 
                link: "/locations/north-fort-lauderdale"
            }, 
            {
                text: "West Boca Raton", 
                link: "/locations/west-boca-raton"
            }
        ]
    }, 
    {
        text: "Teachers", 
        link: "/teachers"
    }, 
    { 
        text: "Store", 
        link: "/store"
    }
];

export default navigationLinks;