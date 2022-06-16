export interface FamilyData {
    familyMembers: FamilyMember[];

}

export interface FamilyMember {
    id: number;
    name: string;
    parents?: string[];
    spouse?: string;
    generation: number;
    birthDate: string;
    deathDate?: string;
}

export interface FamilyTreeData {
    member: Person;
    spouse?: Person;
    children?: FamilyTreeData[]
}

export interface Person {
    name: string;
    birthDate: string;
    deathDate?: string;
}

export const tempFamilyData: FamilyTreeData = {
    member: {
        name: 'Herman Wannemacher',
        birthDate: 'July 17 1906',
    },
    spouse: {
        name: 'Helen Wannemacher',
        birthDate: 'October 2, 1929',
    },
    children: [
        {
            member: {
                name: 'Elizabeth Kast',
                birthDate: 'July 17 1906',
            },
            spouse: {
                name: 'Raymond Kast',
                birthDate: 'October 2, 1929',
            },
            children: [
                {
                    member: {
                        name: 'David Kast',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Kathy Kast',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Douglas Kast',
                                birthDate: 'July 17 1906',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Kaylen Kast',
                                        birthDate: 'July 17 1906',
                                    },

                                },
                                {
                                    member: {
                                        name: 'Karsen Kast',
                                        birthDate: 'July 17 1906',
                                    },

                                }
                            ]
                        },
                        {
                            member: {
                                name: 'Kelly Carr',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Kristopher Carr',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Kinsey Carr',
                                        birthDate: 'July 17 1906',
                                    },

                                },
                                {
                                    member: {
                                        name: 'Kurtis Carr',
                                        birthDate: 'July 17 1906',
                                    },

                                }
                            ]
                        },
                    ]
                },
                {
                    member: {
                        name: 'Carol Meadows',
                        birthDate: 'July 17 1906',
                    },
                    children: [
                        {
                            member: {
                                name: 'Chad Wright',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Lesley Wright',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Olivia Wright',
                                        birthDate: 'July 17 1906',
                                    },

                                },
                                {
                                    member: {
                                        name: 'Anna Wright',
                                        birthDate: 'July 17 1906',
                                    },

                                }
                            ]
                        },
                    ]
                },
                {
                    member: {
                        name: 'Jean Laukhuf',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Richard  Laukhuf',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Courtney Kast',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Steven Kast',
                                birthDate: 'July 28 1998',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Joan McCloud',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Casper McCloud',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Courtney Kast',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Steven Kast',
                                birthDate: 'July 28 1998',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Susan Friedrich',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Mark Friedrich',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Courtney Kast',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Steven Kast',
                                birthDate: 'July 28 1998',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Kevin Kast',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Kathryn Kast',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Courtney Kast',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Steven Kast',
                                birthDate: 'July 28 1998',
                            },
                        },
                    ]
                },
            ]
        },
        {
            member: {
                name: 'Bernard Wannemacher',
                birthDate: 'July 17 1906',
            },
            spouse: {
                name: 'Barbara Louise',
                birthDate: 'October 2, 1929',
            },
        },
        {
            member: {
                name: 'Gerald "Jerry" Wannemacher',
                birthDate: 'July 17 1906',
            },
            spouse: {
                name: 'Evelyn Wannemacher',
                birthDate: 'October 2, 1929',
            },
        },
        {
            member: {
                name: 'Carl Wannemacher',
                birthDate: 'July 17 1906',
            },
            spouse: {
                name: 'Judith Wannemacher',
                birthDate: 'October 2, 1929',
            },
        },
        {
            member: {
                name: 'Maurice Wannemacher',
                birthDate: 'July 17 1906',
            },
            spouse: {
                name: 'Elaine Wannemacher',
                birthDate: 'October 2, 1929',
            },
        },
        {
            member: {
                name: 'Ann Olwin',
                birthDate: 'July 17 1906',
            },
            spouse: {
                name: 'Dan Olwin',
                birthDate: 'October 2, 1929',
            },
        }
    ]

}