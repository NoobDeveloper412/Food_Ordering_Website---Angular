export class Foods {
    id!: number;
    name!: string;
    price!: number;
    origins!: string[];
    tags?: string[];
    favourite!: boolean;
    imageUrl!: string;
    star: number = 0;
    cookTime!: string;
}