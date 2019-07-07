


class GameScene extends Phaser.Scene {
    constructor() {
        super("game");
    }
    preload() {
        this.load.spritesheet('balls', 
        'balls.png', { frameWidth: 17, frameHeight: 17 });
    }
    releaseBall () {
        var ball = this.matter.add.image(Phaser.Math.Between(32, 768), -200, 'balls', Phaser.Math.Between(0, 5));
        ball.setCircle();
        ball.setBounce(0.96);
    }
    create() {
        this.matter.world.setBounds(0, 0, 400, 600, 32, true, true, false, true);
        this.matter.add.fromVertices(0, 545, vertexSets, 
            { ignoreGravity: true }, true, 0.01, 10);
        
        for(let i=0;i<100;i++) {
            this.releaseBall();
        }
    }
}

var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    backgroundColor: '#c4dedf',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            enableSleeping: true
        }
    },
    scene: [GameScene]
};

let game = null;
let vertexSets = [];

// need this polyfill for pathToVertices. see below
// https://github.com/progers/pathseg/blob/master/pathseg.js

function mainline() {
    $.get('./testpath.svg').done(function(data) {
        console.log("done with get",data);
        //let vertexSets = [];
        $(data).find("path").each(function(i,path){
            let Matter = Phaser.Physics.Matter.Matter;
            // this call requires the polyfill
            // from google above
            vertexSets.push(Matter.Svg.pathToVertices(path,30));
            console.log(vertexSets);
            // create game now
            game = new Phaser.Game(config);
        });
    });
   
}

window.onload = mainline;