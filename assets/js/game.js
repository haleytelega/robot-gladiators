// Game States
// "WIN" - Player robot has deated all enemy-robots
//  *fight all enemy-robots
//  *defeat each enemy-robot
// "LOSE" - Player robots health is zero or less

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyName.length);

for(var i = 0; i < enemyName.length; i++){
}
var enemyHealth = 50;
var enemyAttack = 12;

var enemy = ["Roborto", "Amy Android", "Robo Trumble"];


// creates function expression
var fight = function (enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");

    console.log(promptFight);
    
    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " healh remaning. "
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerAttack + "." + playerName + " now has " + playerHealth + " health remaning. "
    );

    //check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //If player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    //if no, ask if they want to fight again
    else {
        fight ();
    }
}
    //Check to see if the value of the playerHealth variable is greater then 0
    //if and else statements are called control flow
    if (playerHealth === 0){
        console.log("This will not run");
    }
    else {
        console.log("This will run instead.");
    }
}
}

// executes fight
for(var i = 0; i <enemyName.length; i++) {
    var pickedEnemyName = enemyName[i];
    enemyHealth = 50;
    fight (pickedEnemyName);
}
