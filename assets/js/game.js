// Game States
// "WIN" - Player robot has deated all enemy-robots
//  *fight all enemy-robots
//  *defeat each enemy-robot
// "LOSE" - Player robots health is zero or les
// "PLAY AGAIN" feature
// "SHOP" feature

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (min - max + 1) + min);

    return value;
};

var enemy = ["Roborto", "Amy Android", "Robo Trumble"];

// creates function expression
var fight = function (enemy) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");

    console.log(enemy);
//If player choses to skip
if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//if yes, leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
    }
}
 //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
        playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " healh remaning. "
    );

    // check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
    }
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    
    //generate random damage value based on enemy's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemy.name + " attacked " + playerInfo.attack + "." + playerInfo.name + " now has " + playerInfo.health + " health remaning. "
    );

    //check players health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
}
}

// executes fight
var startGame = function () {
    //reset player stats
    playerInfo.reset();

//function to end the entire game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

for(var i = 0; i <enemyInfo.length; i++) {
    if (playerInfo.health > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        // pick a new enemy to fight based on the index of the enemy.names array
        var pickedEnemyObj = enemyInfo[i];

        //reset enemy.health before starting new fight
       //enemy.health = Math.floor(Math.random() * 21) + 40;
        pickedEnemyObj.health = randomNumber(40, 60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnenmyName variables value into the fight function
    fight(pickedEnemyObj);
    if (playerInfo.health > 0 && i <enemyInfo.length -1) {
        var storeConfirm = window.confirm("The fight is over, want to visit the store before the next round?");

        //if yes, take them to the store
        if (storeConfirm) {
        shop();
        }   
    }
}
    else {
        window.alert("You have lost your robot in battle! Game Over!");
    }
}
endGame();
};

var shop = function () {
    //ask the player what they would like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice");

        switch (shopOptionPrompt) {
            case "refill":
            case "REFILL":
                if (playerInfo.money >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increate health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
            break;
            case "upgrade":
            case "UPGRADE":
                if (playerInfo.money >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase players attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
                }
                else {
                    window.alert("You don't have enough money!")
                }
            break;
            case "leave":
            case "LEAVE":
                window.alert("leaving the store.");
            break;

            default:
                window.alert("You did not pick a valid option. Try again.");

            //call shop again to force player to pick an options
            shop();
            break;
        }
};

var playerInfo = {
    name: window.prompt("What is your robots name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        this.health += 20;
        this.health -= 7;
    },
    upgradeAttack: function() {
        this.attack +=6;
        this.money -= 7;
    }
};

console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

var enemyInfo = [
    {name: "Roborto",
    attack: randomNumber(10, 14)
    },
    {name: "Amy Android",
    attack: randomNumber(10, 14)
    },
    {name: "Robo Trumble",
    attack: randomNumber(10, 14)
    }
];
// start the game when the page loads
    startGame();
