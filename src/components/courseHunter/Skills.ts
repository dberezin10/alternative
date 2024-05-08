export class Skills {
  skills: string[] = [];

  addSkills(skill: string): void;
  addSkills(skills: string[]): void;
  public addSkills(skillOrSkills: string | Array<string>): void {
    if (typeof skillOrSkills === "string") {
      this.skills.push(skillOrSkills);
    } else {
      this.skills = [...this.skills, ...skillOrSkills];
    }
  }
}

const skills = new Skills();
skills.addSkills("elen");
skills.addSkills(["react", "vue"]);
console.log(skills);
