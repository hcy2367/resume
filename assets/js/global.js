/**
 * @website: http://hcy2367.github.io/resume
 * @author: chmyun
 * @date: 2014-1-26
 * @email: hcy2367@163.com
 */
$(function() {
    $('.loading').animate({
        top: '-100%'
    }, 2000, function() {
        $(this).hide();
        $('.surrounding-anim').addClass('running');
        setTimeout(function() {
            $('.welcome').removeClass('flipOutY').addClass('flipInY');
        }, 5500);
    });

    $('#down_arrow').bind('click', function() {
        $(this).parent('.welcome').removeClass('flipInY').addClass('flipOutY');
        $('#impress').fadeIn(1000, function() {
            var api = impress();
            api.init();
            // api.goto('about');
        });
    });

    var bubbleChart = new d3.svg.BubbleChart({
        supportResponsive: true,
        //container: => use @default
        size: 600,
        //viewBoxSize: => use @default
        innerRadius: 120,
        //outerRadius: => use @default
        radiusMin: 80,
        //radiusMax: use @default
        //intersectDelta: use @default
        //intersectInc: use @default
        //circleColor: use @default
        data: {
            items: [
                {text: 'CSS', count: '30'},
                {text: 'JavaScript', count: '30'},
                {text: 'HTML5', count: '10'},
                {text: 'NodeJS', count: '10'},
                {text: 'PHP', count: '10'},
                {text: 'Others', count: '10'}
            ],
            eval: function(item) {return item.count;},
            classed: function(item) {return item.text.split(' ').join('');}
        },
        plugins: [
            {
                name: 'central-click',
                options: {
                    text: '(See more detail)',
                    style: {
                        'font-size': '18px',
                        'font-style': 'italic',
                        // 'font-family': 'Source Sans Pro, sans-serif',
                        'font-weight': '700',
                        'text-anchor': 'middle',
                        'fill': '#666'
                    },
                    attr: {dy: '60px'},
                    centralClick: function() {
                        console.log('Here is more details!!');
                        // alert('Here is more details!!');
                    }
                }
            },
            {
                name: 'lines',
                options: {
                    format: [
                        {// Line #0
                            textField: 'count',
                            classed: {count: true},
                            style: {
                                'font-size': '50px',
                                'font-family': 'Source Sans Pro, sans-serif',
                                'text-anchor': 'middle',
                                fill: 'white'
                            },
                            attr: {
                                dy: '0px',
                                x: function(d) {return d.cx;},
                                y: function(d) {return d.cy;}
                            }
                        },
                        {// Line #1
                            textField: 'text',
                            classed: {text: true},
                            style: {
                                'font-size': '24px',
                                'text-anchor': 'middle',
                                fill: 'white'
                            },
                            attr: {
                                dy: '40px',
                                x: function(d) {return d.cx;},
                                y: function(d) {return d.cy;}
                            }
                        }
                    ],
                    centralFormat: [
                        {// Line #0
                            style: {'font-size': '70px'},
                            attr: {dy: '-20px'}
                        },
                        {// Line #1
                            style: {'font-size': '35px'},
                            attr: {dy: '30px'}
                        }
                    ]
                }
            }
        ]
    });
});

// console.log
(function(){
    var console = window.console || {
            log : function(){}
        },
        n = '\n' ,
        words = [
            n +'            ┏┓．°． ┏┓            【神兽在此守护】'+ n
                +'            ┃┗━━━┛┃'+ n
                +'            ┃ ⌒   ⌒ ┃'+ n
                +'            ┃  ●   ●  ┃                   少年不知愁滋味'+ n
                +'            ┃  ” ω ”  ┃               By chmyun QQ：729555742'+ n
                +'            ┗○━━━━○┛'+ n
            ,
            n +'   ┏┓       ┏┓'+ n
                +' ┏┛┻━━━━┛┻┓'+ n
                +' ┃              ┃                              【神兽在此守护】'+ n
                +' ┃      ━      ┃'+ n
                +' ┃  ┳┛  ┗┳   ┃'+ n
                +' ┃              ┃'+ n
                +' ┃      ┻      ┃'+ n
                +' ┃              ┃'+ n
                +' ┗━━┓   ┏━━┛'+ n
                +'      ┃   ┃'+ n
                +'      ┃   ┃'+ n
                +'      ┃   ┗━━━━-━┓'+ n
                +'      ┃              ┣┓                   少年不知愁滋味'+ n
                +'      ┃              ┏┛'+ n
                +'      ┗┓┓┏━┳┓┏━┛'+ n
                +'        ┃┫┫  ┃┫┫                      By chmyun hcy2367@163.com'+ n
                +'        ┗┻┛  ┗┻┛'
        ];
    console.log(words[rand(0, words.length - 1 )]);

    // 去区间随机整数
    function rand(mi, ma){
        var range = ma - mi;
        var out = mi + Math.round(Math.random() * range) ;
        return parseInt(out);
    }
})();