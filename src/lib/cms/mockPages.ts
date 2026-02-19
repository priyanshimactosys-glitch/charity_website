export const mockPages: any = {
    home: {
        slug: "home",
        template: "standard",
        sections: [
            {
                type: "hero",
                content: {
                    title: "Welcome to VPeters Initiative",
                    subtitle: "Empowering communities",
                },
            },
            {
                type: "text",
                content: {
                    text: "We support immigrants and families.",
                },
            },
        ],
    },

    "why-us": {
        slug: "why-us",
        template: "standard",
        sections: [
              {
                type: "hero",
                content: {
                  title: "About VPeters Initiative",
                  subtitle: "Empowering families and individuals through education, access, and opportunity.",
                  alignment: "left"
                },
              }
            // {
            //     type: "hero",
            //     title: "About VPeters Initiative",
            //     subtitle:
            //         "Empowering families and individuals through education, access, and opportunity.",
            //     backgroundImage: "/images/whyus-hero.jpg",
            //     alignment: "left"
            // }
,
            { "type": "mission_vision" },
            { "type": "impact_stats" }
        ],
    },


};
