/*
* update by hcy
* 2013-10-3
*/
$(function() {
	$(window).load(function() {
		show();
		countLeft(); // 计算动画元素left值
		animAuto(); // 自动播放动画
	});
	function show() {
        $(".loading").fadeOut(); // 隐藏loading加载符
        $(".container").fadeIn(); // 显示container模块   
    }
   
    // 异步执行动画
	var Queue = function() {
		this.list = []; // 队列数组
	};
	Queue.prototype = {
		// 添加回调函数到队列中
		queue: function(fn) {
			this.list.push(fn);
			return this;
		},
		// 队列中每个函数执行的时间间隔
		wait: function(num) {
			this.list.push(num);
			return this;
		},
		// 执行队列中的每个函数(根据给定时间间隔)
		dequeue: function() {
			var self = this,
				list = self.list;
			var item = list.shift() || function() {}; 
			if (typeof item === "number") {
				setTimeout(function() {
					self.dequeue();
				}, item);
			} else if (typeof item === "function") {
				item.call(self);
				if (list.length) {
					self.dequeue();
				}
			}
		}
	};
	
	var isResponsive = false; // 是否应用响应式
	if ($(window).width() < 460) {
		isResponsive = true;
	}

	// 计算动画元素的left值
	function countLeft() {
		var winWidth = $(window).width(),
			helloWidth = $(".hello").width(),
			elemWidth = $(".animElem1").width(), 
			left1 = (winWidth - helloWidth) / 2,
			left2 = left1 + elemWidth,
			left3 = left2 + elemWidth,
			left4 = left3 + elemWidth,
			left5 = left4 + elemWidth;
		// 设置left属性
		$(".animElem1").css("left", left1);
		$(".animElem2").css("left", left2);
		$(".animElem3").css("left", left3);
		$(".animElem4").css("left", left4);
		$(".animElem5").css("left", left5);
	}

	// 自动播放动画
	function animAuto() {
		var q = new Queue(); // 实例化对象
		q.queue(function() {
			$(".animElem1").animate({top: isResponsive === false ? "170px" : "110px"}, 1000, function() {
            	$(this).addClass("rotate10");
            });
		}).wait(1000)
		.queue(function() {
			$(".animElem2").animate({top: isResponsive === false ? "170px" : "110px"}, 1000, function() {
            	$(this).addClass("rotate-10");
            });
		}).wait(1000)
		.queue(function() {
			$(".animElem3").animate({top: isResponsive === false ? "170px" : "110px"}, 1000, function() {
            	$(this).addClass("rotate10");
            });
		}).wait(1000)
		.queue(function() {
			$(".animElem4").animate({top: isResponsive === false ? "170px" : "110px"}, 1000, function() {
            	$(this).addClass("rotate-10");
            });
		}).wait(1000)
		.queue(function() {
			$(".animElem5").animate({top: isResponsive === false ? "170px" : "110px"}, 1000, function() {
            	$(this).addClass("rotate10");
            });
		}).wait(1000)
		.queue(function() {
			$(".hello h3").fadeIn("slow");
		}).wait(1000)
		.queue(function() {
			$(".hello").find(".hcy").fadeIn("slow").end().children(".nextBtn").show(1000);
		}).dequeue();
    
    }


    // 下一页(根据window的垂直滚动距离来显示元素)
    $(window).scroll(function(event) {
    	var curScrollTop = $(this).scrollTop();
    	if (curScrollTop >= 750 && curScrollTop < 1450) {
        	if ($(".about").css("display") === "none") {
        		$(".about").fadeIn(); // 显示关于模块
        		//console.log("1"); // 确保只执行一次代码
        	}	
        } else if (curScrollTop >= 1450 && curScrollTop < 2500) {
        	if ($(".experience").css("display") === "none") {
        		$(".experience").fadeIn(); // 显示联系模块
        	}
        } else if (curScrollTop >= 2500) {
        	if ($(".contact").css("display") === "none") {
        		$(".contact").fadeIn(); // 显示经验模块
        	}
        }
        // 底栏固定
        if (curScrollTop >= 3000) {
        	$(".footer").fadeIn();
        } else {
        	$(".footer").fadeOut();
        }
    });
    
    $(".hello .nextBtn").click(function(event) {
    	$("body, html").animate({scrollTop: "1000px"}, 1000, function() {
    		$(".about").fadeIn(2000); // 显示关于模块
    	});
    });
    $(".about .nextBtn").click(function(event) {
    	$("body, html").animate({scrollTop: "1800px"}, 1000, function() {
    		$(".experience").fadeIn(2000); // 显示联系模块
    	});
    });
    $(".experience .nextBtn").click(function(event) {
    	$("body, html").animate({scrollTop: "3000px"}, 1000, function() {
    		$(".contact").fadeIn(2000); // 显示联系模块
    	});
    });

    // 经验模块
    if (!isResponsive) {
    	$(".experience").find("li").hover(function() {
	    	$(this).addClass("current");
	    }, function() {
	    	$(this).removeClass("current");
	    });
    }
    if (isResponsive) { // 设置宽度
    	$(".contact").find("li:even").addClass("percent25").end().find("li:odd").addClass("percent75");

    }

    // 返回顶部按钮
    $(window).scroll(function(){
	    if ($(window).scrollTop() >= 500){
            $(".returnBtn").fadeIn();
        } else {
            $(".returnBtn").fadeOut();
	    }
    });
   $(".returnBtn").click(function(){
        $("body, html").animate({scrollTop: 0}, 500);
   });

});