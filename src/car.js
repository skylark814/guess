let carLayer = cc.Layer.extend({
    sprite: null,
    car1: "",
    car2: "",
    dx: 1,
    background1: null,
    background2: null,
    win_size: null,


    ctor: function () {

        this._super();

        // let title = new cc.LabelTTF("Guess Number", "", 48);
        // title.x = cc.winSize.width / 2;
        // title.y = cc.winSize.height * 7 / 8;
        // title.setColor(cc.color(255, 127, 0));
        // this.addChild(title, 0, "mytitle");
        this.car1 = new cc.Sprite(res.car1_png);
        this.car1.attr({
            x: this.car1.width,
            y: cc.winSize.height * 0.45
        });
        this.addChild(this.car1, 2, "mycar1");

        this.car2 = new cc.Sprite(res.car2_png);
        this.car2.attr({
            x: this.car2.width,
            y: cc.winSize.height * 0.39
        });
        this.addChild(this.car2, 2, "mycar2");

        this.car3 = new cc.Sprite(res.car3_png);
        this.car3.attr({
            x: this.car3.width,
            y: cc.winSize.height * 0.33
        });
        this.addChild(this.car3, 2, "mycar3");

        this.car4 = new cc.Sprite(res.car4_png);
        this.car4.attr({
            x: this.car4.width,
            y: cc.winSize.height * 0.28
        });
        this.addChild(this.car4, 2, "mycar4");

        this.init();
        this.scheduleUpdate();
        return true;


    },
    init: function () {
        this._super();

        this.win_size = cc.Director._getInstance().getWinSize();


        this.background1 = cc.Sprite.create("res/track.png");
        this.background1.setAnchorPoint(cc.p(0, 0));
        this.background1.setPosition(cc.p(0, this.win_size.height / 5));

        this.addChild(this.background1, 0);

        var sprite_action = cc.RepeatForever.create(cc.MoveBy.create(5.0, cc.p(this.win_size.width, 0)));
        this.background1.runAction(sprite_action);

        this.background2 = cc.Sprite.create("res/track.png");
        this.background2.setAnchorPoint(cc.p(0, 0));
        this.background2.setPosition(cc.p(-500, this.win_size.height / 5));

        this.addChild(this.background2, 1);

        var sprite_action = cc.RepeatForever.create(cc.MoveBy.create(5.0, cc.p(this.win_size.width, 0)));
        this.background2.runAction(sprite_action);


        return true;
    },

    update: function () {
        let ax1 = Math.random() * 3;
        let car1 = this.getChildByName("mycar1");
        let ax2 = Math.random() * 3;
        let car2 = this.getChildByName("mycar2");
        let ax3 = Math.random() * 3;
        let car3 = this.getChildByName("mycar3");
        let ax4 = Math.random() * 3;
        let car4 = this.getChildByName("mycar4");

        car1.x += this.dx + ax1;
        car2.x += this.dx + ax2;
        car3.x += this.dx + ax3;
        car4.x += this.dx + ax4;

        if (this.background1.getPosition().y <= -this.win_size.height) {
            this.background1.setPosition(0, this.win_size.height);
        }

    }
});

let carScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new carLayer();
        this.addChild(layer);
    }
});

