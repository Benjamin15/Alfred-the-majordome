export class Animal {
    private nomAnimal: string;
    private description: string;
    private besoinsSpecifiques: string;

    constructor(nom: string, description: string, besoins: string) {
        this.nomAnimal = nom;
        this.description = description;
        this.besoinsSpecifiques = besoins;
    }
}
