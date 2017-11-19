class Character {

    constructor() {
        this.state = {
            soak: 0,
            maxWounds: 0,
            currentWounds: 0,
            maxStrain: 0,
            currentStrain: 0,
            rangedDefense: 0,
            meleeDefense: 0,
            characteristics: {
                brawn: 0,
                agility: 0,
                intellect: 0,
                cunning: 0,
                willpower: 0,
                presence: 0
            },
            skills: []
        }
    }
    
    get soak() {
        return this.state.soak;
    }

    get maxWounds() {
        return this.state.maxWounds;
    }

    get currentWounds() {
        return this.state.currentWounds;
    }

    get maxStrain() {
        return this.state.maxStrain;
    }

    get currentStrain() {
        return this.state.currentStrain;
    }

    get rangedDefense() {
        return this.state.rangedDefense;
    }

    get meleeDefense() {
        return this.state.meleeDefense;
    }

    get brawn() {
        return this.characteristics.brawn;
    }

    get agility() {
        return this.characteristics.agility;
    }

    get intellect() {
        return this.characteristics.intellect;
    }

    get cunning() {
        return this.characteristics.cunning;
    }

    get willpower() {
        return this.characteristics.willpower;
    }

    get presence() {
        return this.characteristics.presence;
    }

    dicePoolFor(skillName) {
        let relevantSkill = this.state.skills.find(function (skill) {
            return skill.name === skillName;
        });
        if (!relevantSkill) {
            
        }
    }
}