export interface FamilyData {
    familyMembers: FamilyMember[];

}

export interface FamilyMember {
    id: number;
    name: string;
    parents?: string[];
    spouse?: string;
    generation: number;
}