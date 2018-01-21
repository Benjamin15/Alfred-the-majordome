export class Animal {
    public nomAnimal: string;
    public description: string;
    public besoinsSpecifiques: string;

    constructor(nom: string, description: string, besoins: string) {
        this.nomAnimal = nom;
        this.description = description;
        this.besoinsSpecifiques = besoins;
    }
}
