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
                text: "Single Location 1", 
                link: "#"
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