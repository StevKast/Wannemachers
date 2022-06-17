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
                                name: 'Alicia Still',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Stephen  Still',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Madison Still',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                            ]
                        },
                        {
                            member: {
                                name: 'Kylee Goff',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Gregory  Goff',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Camille Goff',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                            ]
                        },
                    ]
                },
                {
                    member: {
                        name: 'Joan McCloud',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Caspar McCloud',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Derek McCloud',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Audrey McCloud',
                                birthDate: 'October 2, 1929',
                            },
                        },
                        {
                            member: {
                                name: 'Hayley McCloud',
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
                                name: 'Colin Friedrich',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Audrey Friedrich',
                                birthDate: 'October 2, 1929',
                            },
                        },
                        {
                            member: {
                                name: 'Bridget Markley',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Justin Markley',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Eloise Markley',
                                        birthDate: 'July 17 1906',
                                    },

                                },
                                {
                                    member: {
                                        name: 'Merriweather Markley',
                                        birthDate: 'July 17 1906',
                                    },
                                }
                            ]
                        },
                        {
                            member: {
                                name: 'Allison Friedrich',
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
                name: 'Barbara Wannemacher',
                birthDate: 'October 2, 1929',
            },
            children: [
                {
                    member: {
                        name: 'Martin Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                    children: [
                        {
                            member: {
                                name: 'Blake Wannemacher',
                                birthDate: 'July 17 1906',
                            },
                        }
                    ]
                },
                {
                    member: {
                        name: 'Paul Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Dawn Wannemacher',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Alexandra Compton',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Wes Compton',
                                birthDate: 'October 2, 1929',
                            },
                        },
                        {
                            member: {
                                name: 'Marcia Reeder',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Steve Reeder',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Zachery Reeder',
                                        birthDate: 'July 17 1906',
                                    },
                                }
                            ]
                        }
                    ]
                },
                {
                    member: {
                        name: 'Christine Lyons',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Richard Lyons',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Michael Lyons',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Mindy Lyons',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Estella Lyons',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                                {
                                    member: {
                                        name: 'Killian Lyons',
                                        birthDate: 'July 17 1906',
                                    },
                                }
                            ]
                        },
                        {
                            member: {
                                name: 'David Lyons',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Caitis Lyons',
                                birthDate: 'October 2, 1929',
                            },
                        }
                    ]
                },
                {
                    member: {
                        name: 'Michael Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Teresa Wannemacher',
                        birthDate: 'October 2, 1929',
                    },
                    children: [

                    ]
                },
                {
                    member: {
                        name: 'Bernard Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Barbara Wannemacher',
                        birthDate: 'October 2, 1929',
                    },
                    children: [

                    ]
                },
            ]
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
            children: [
                {
                    member: {
                        name: 'Joseph Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                },
                {
                    member: {
                        name: 'Debra Seibert',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Alfred Seibert',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Sarah Shellabarger',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Ben Shellabarger',
                                birthDate: 'October 2, 1929',
                            },
                        },
                        {
                            member: {
                                name: 'Nicholas Seibert',
                                birthDate: 'July 17 1906',
                            },
                        }

                    ]
                },
                {
                    member: {
                        name: 'Kathy Waker',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Steve Waker',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Krista Drake',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Tim Drake',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Olive Drake',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                            ]
                        },
                        {
                            member: {
                                name: 'Jenna Abshear',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Matt Abshear',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Jordan Abshear',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                                {
                                    member: {
                                        name: 'Jackson Abshear',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                                {
                                    member: {
                                        name: 'Dylan Abshear',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                            ]
                        },
                        {
                            member: {
                                name: 'Mallory Waker',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Morgan Waker',
                                birthDate: 'July 17 1906',
                            },
                        },

                    ]

                },
                {
                    member: {
                        name: 'Connie Wannemacher Filbrun',
                        birthDate: 'July 17 1906',
                    },
                    children: [
                        {
                            member: {
                                name: 'Caroline Filbrun',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Joesph Filbrun',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Jacob Filbrun',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
            ]
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
            children: [
                {
                    member: {
                        name: 'Mark Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Michelle Wannemacher',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Alec Wannemacher',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Nathan Wannemacher',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Kim Stacy',
                        birthDate: 'July 17 1906',
                    },
                    children: [
                        {
                            member: {
                                name: 'Tyler Stacy',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Samantha Stacy',
                                birthDate: 'October 2, 1929',
                            },
                        },
                        {
                            member: {
                                name: 'Tiffany Stacy',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Cynthia Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                },
                {
                    member: {
                        name: 'Daniel Wannemacher',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Jaymee Wannemacher',
                        birthDate: 'October 2, 1929',
                    },
                },
            ]
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
            children: [
                {
                    member: {
                        name: 'Joellen Sisson',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Brad  Sisson',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Nicole Sisson',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Wade Sisson',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Lori Clounie',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Thomas  Clounie',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Lauren Clounie',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Thomas Clounie',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Karen Hahn',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Daniel Hahn',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Taylor Miller',
                                birthDate: 'July 17 1906',
                            },
                            spouse: {
                                name: 'Colby Miller',
                                birthDate: 'October 2, 1929',
                            },
                            children: [
                                {
                                    member: {
                                        name: 'Laudon Miller',
                                        birthDate: 'July 17 1906',
                                    },
                                },
                                {
                                    member: {
                                        name: 'Silver Miller',
                                        birthDate: 'July 17 1906',
                                    },
                                }
                            ]
                        },
                        {
                            member: {
                                name: 'Morgan Hahn',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
            ]
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
            children: [
                {
                    member: {
                        name: 'Melanie Forrer',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Michael Forrer',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Drew Forrer',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Kyle Forrer',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
                {
                    member: {
                        name: 'Michelle Davis',
                        birthDate: 'July 17 1906',
                    },
                    spouse: {
                        name: 'Bradley Davis',
                        birthDate: 'October 2, 1929',
                    },
                    children: [
                        {
                            member: {
                                name: 'Tyler Davis',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Conner Davis',
                                birthDate: 'July 17 1906',
                            },
                        },
                        {
                            member: {
                                name: 'Addilyn Davis',
                                birthDate: 'July 17 1906',
                            },
                        },
                    ]
                },
            ]
        }
    ]

}