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
    }

}