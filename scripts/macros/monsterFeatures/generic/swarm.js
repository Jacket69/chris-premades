export async function swarmDamage(workflow) {
    let hp = workflow.actor.system.attributes.hp.value;
    let maxhp = workflow.actor.system.attributes.hp.value;
    if (hp > Math.floor(maxhp / 2)) return;
    let damageFormula = workflow.damageRoll._formula;
    let diceNum = Number(damageFormula.substring(0,1)) / 2;
    let restOfFormula = damageFormula.substring(1);
    let newFormula = diceNum + restOfFormula;
    let damageRoll = await new Roll(newFormula).roll({async: true});
    await workflow.setDamageRoll(damageRoll);
}