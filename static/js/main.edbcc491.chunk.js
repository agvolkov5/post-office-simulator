(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),c=(a(24),a(5)),l=a(6),r=a(9),d=a(7),m=a(10),u=(a(25),a(26),a(2)),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).startStep=function(e,t){clearTimeout(a.rotationTimeout),a.setState({animated:!0,y:a.state.y-e,leftFootOffset:e,leftBoatOffset:e,rightFootOffset:-e-.45*a.state.boatHeight,rightBoatOffset:-e,afterRotate:0},function(){setTimeout(function(){"function"===typeof t&&t()},300)})},a.continueStep=function(e,t,n,o){a.setState({animated:!0,y:a.state.y-2*e*Math.sin(a.deg2rad(t+90)),x:a.state.x-2*e*Math.cos(a.deg2rad(t+90)),leftFootOffset:a.state.leftFootOffset<0?e:-e,leftBoatOffset:a.state.leftBoatOffset<0?e:-e,rightFootOffset:a.state.rightFootOffset<0?e:-e,rightBoatOffset:a.state.rightBoatOffset<0?e:-e,rotate:t},function(){setTimeout(function(){n>0?a.continueStep(e,t,n-1,o):"function"===typeof o&&o()},300)})},a.finishStep=function(e,t){a.turnNear(0),a.setState({animated:!0,y:a.state.y-e*Math.sin(a.deg2rad(a.state.rotate+90)),x:a.state.x-e*Math.cos(a.deg2rad(a.state.rotate+90)),leftFootOffset:0,leftBoatOffset:0,rightFootOffset:0,rightBoatOffset:0},function(){setTimeout(function(){"function"===typeof t&&t()},300)})},a.toPoint=function(e,t){var n=a.state.x-e[0],o=a.state.y-e[1],i=Math.atan2(o,n)*(180/Math.PI)-90,s=(a.state.rotate-i)%360;s>180&&(i+=360),s<-180&&(i-=360);var c=Math.sqrt(n*n+o*o);a.continueStep(a.props.stepDistance,i,c/(2*a.props.stepDistance)-2,function(){"function"===typeof t&&t()})},a.deg2rad=function(e){return e*Math.PI/180},a.handleClick=function(e){},a.nextGoal=function(e){if(a.goals.length>0)"atm"!==a.goal||1!==a.goals.length||a.enteredToOffice||(a.enteredToOffice=!0,a.goals[0]=[290+20*Math.random()-10,window.innerHeight-170-window.privacySpace*window.queues[0].length],a.myNumber=window.queues[0].length,window.queues[0].push(a.props.code)),a.toPoint(a.goals[0],function(){a.nextGoal(e)}),a.currentGoal=a.goals[0],a.goals.shift();else{if(a.iAmGoing&&a.myNumber!==window.queues[a.windowNumber].indexOf(a.props.code))return a.myNumber=window.queues[a.windowNumber].indexOf(a.props.code),a.goals=[[window.innerWidth-280-window.privacySpace*a.myNumber+Math.floor(5*Math.random())-10,a.windowNumber*(.8*window.innerHeight)/4+Math.floor(20*Math.random())-10]],console.log("aha",a.myNumber,window.queues[a.windowNumber].indexOf(a.props.code)),void a.nextGoal(e);var t=a.state.x-a.currentGoal[0],n=a.state.y-a.currentGoal[1],o=Math.sqrt(t*t+n*n);a.finishStep(o,function(){a.iAmGoing=!1,"function"===typeof e&&e()})}},a.turnNear=function(e){a.rotationTimeout=setTimeout(function(){a.setState({afterRotate:60*Math.random()-30},function(){a.turnNear(Math.random()*a.turnDelay+1e3)})},e)},a.checkQueue=function(e,t,n){var o=e.indexOf(a.props.code);if(0!==a.myNumber){if(o!==a.myNumber)return a.myNumber=o,a.props.queued(o,a.props.code),"atm"===a.goal?a.goals=[[290+20*Math.random()-10,window.innerHeight-170-window.privacySpace*a.myNumber]]:"window"===a.goal&&(a.goals=[[window.innerWidth-280-window.privacySpace*a.myNumber+Math.floor(5*Math.random())-10,a.windowNumber*(.8*window.innerHeight)/4+Math.floor(20*Math.random())-10]]),a.startStep(5,function(){a.nextGoal(function(){a.checkQueue(e,t,n)})}),void clearTimeout(a.queueCheckTimer);a.queueCheckTimer=setTimeout(function(){a.checkQueue(e,t,n)},500)}else{if("atm"===a.goal&&window.number++,a.state.iAmChosen&&"atm"===a.goal)a.props.showATM(function(n){console.log(n),a.willBeWait=a.service[n],a.chosenService=n,e.shift(),t.shift(),a.newGoal()});else{var i=setInterval(function(){t[0]--},1e3);setTimeout(function(){clearInterval(i);var n=Object.keys(a.service),o=n[Math.floor(Math.random()*n.length)];setTimeout(function(){t.shift(),e.shift()},700),a.willBeWait=a.service[o],a.chosenService=o,a.newGoal(),console.log(a.willBeWait,o,a.service[o])},n)}clearTimeout(a.queueCheckTimer)}},a.newGoal=function(){switch(clearTimeout(a.queueCheckTimer),a.goal){case"atm":a.goal="window",a.props.windowed(a.props.code);var e=Math.round(3*Math.random()+1);console.log(e),a.windowNumber=e,a.goals=[[400,window.innerHeight-230],[window.innerWidth-280-window.privacySpace*window.queueLength,e*(.8*window.innerHeight)/4],[window.innerWidth-280-window.privacySpace*window.queues[e].length+Math.floor(5*Math.random())-10,e*(.8*window.innerHeight)/4+Math.floor(20*Math.random())-10]],window.queues[e].push(a.props.code),window.times[e].push(a.willBeWait),a.myNumber=window.queues[e].indexOf(a.props.code),a.iAmGoing=!0,setTimeout(function(){a.startStep(a.props.stepDistance,function(){a.nextGoal(function(){a.checkQueue(window.queues[e],window.times[e],1e3*a.willBeWait)})})},100),a.props.update(a.windowNumber,a.chosenService,a.myNumber,a.props.code,a.goal);break;case"window":a.goal="quit",a.props.quited(a.props.code);var t=a.state.y+80*(Math.random()<.5?-1:1);a.goals=[[a.state.x,t],[window.innerWidth-290-window.privacySpace*window.queueLength,t],[300,150+50*Math.random()],[100,125+50*Math.random()],[700*Math.random()-540,-200]],setTimeout(function(){a.startStep(a.props.stepDistance,function(){a.nextGoal(function(){a.props.kill(a.props.id)})})},100);break;default:console.log("opa")}},a.iAmChosen=function(){a.setState({iAmChosen:!0},function(){}),a.props.onClick(a.windowNumber,a.chosenService,a.myNumber,a.props.code,a.goal)},a.state={x:e.x,y:e.y,animated:!0,leftFootOffset:0,rightFootOffset:0,leftBoatOffset:1,rightBoatOffset:1,bodyOffset:0,rotate:e.deg,afterRotate:0,iAmChosen:!1,footLength:20,footWidth:16.5,bodyHeight:17.2,boatWidth:13.5,boatHeight:22},"client"===a.props.kind&&(a.atmQueuePosition=window.queues[0].length,a.windowNumber=0,a.queueLength=0,a.enteredToOffice=!1,a.iAmGoing=!1,a.goal="atm",a.goals=[[120,260],[200,250-50*Math.random()],[270,270],[290+20*Math.random()-10,window.innerHeight-170-window.privacySpace*window.queues[0].length]]),a.service={pay:10,"get-mail":7,"get-box":15,"get-money":18,"get-package":6,"send-mail":12,"send-box":25,"send-money":9,"send-documents":8},a.chosenService="0",a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;switch(document.addEventListener("click",this.handleClick,!1),this.setState({rotate:this.props.deg},function(){}),this.props.kind){case"client":this.turnDelay=5e3,this.startStep(this.props.stepDistance,function(){e.nextGoal(function(){e.checkQueue(window.queues[0],window.times[0],1500)})});break;case"worker":this.turnDelay=1e3,this.turnNear(0);break;default:console.log("heh")}}},{key:"render",value:function(){var e=this.state.rotate+this.state.afterRotate-120,t="Human";return"worker"===this.props.kind&&(t+=" worker"),this.state.iAmChosen&&(t+=" chosen"),o.a.createElement("div",{className:this.state.animated?t:t+" non-transition",onClick:this.iAmChosen,style:{transform:"translate("+this.state.x+"px, "+this.state.y+"px) rotate("+(this.state.rotate+this.state.afterRotate)+"deg)"}},o.a.createElement("div",{className:"boats"},o.a.createElement("div",{className:"left boat",style:{top:this.state.bodyHeight/2-this.state.boatHeight/2-this.state.leftBoatOffset+"px"}}),o.a.createElement("div",{className:"right boat",style:{top:this.state.bodyHeight/2-this.state.boatHeight/2-this.state.rightBoatOffset+"px"}})),o.a.createElement("div",{className:"foots"},o.a.createElement("div",{className:"left foot",style:{height:this.state.leftFootOffset*(1-2*(this.state.leftFootOffset<0))+"px",top:this.state.bodyHeight/2-this.state.leftFootOffset*(this.state.leftFootOffset>0)+"px"}}),o.a.createElement("div",{className:"right foot",style:{height:this.state.rightFootOffset*(1-2*(this.state.rightFootOffset<0))+"px",top:this.state.bodyHeight/2-this.state.rightFootOffset*(this.state.rightFootOffset>0)+"px"}})),o.a.createElement("div",{className:"body-shadow",style:{top:this.state.bodyOffset+"px"}}),o.a.createElement("div",{className:"body",style:{top:this.state.bodyOffset+"px"}}),o.a.createElement("div",{className:"balloon"}),o.a.createElement("div",{className:"head",style:{top:this.state.bodyOffset-3.8+"px"}},o.a.createElement("div",{className:"hat"}),o.a.createElement("div",{className:"flare",style:{transform:"rotate(-"+e+"deg) translateY(-9px) rotate(90deg)"}})))}}]),t}(n.Component),f=Object(u.b)(function(e,t){return{people:e.people}},function(e){return{kill:function(t){return e({type:"KILL_HUMAN",payload:t})}}})(h),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).moveGoal=function(e){a.setState({goalX:e.clientX-5,goalY:e.clientY-5})},a.showATM=function(e){a.setState({ATMDisplay:"flex",menu:"main"},function(){}),a.callback=e},a.hideATM=function(){a.setState({ATMDisplay:"none"},function(){})},a.toGet=function(){a.setState({menu:"get"},function(){})},a.toSend=function(){a.setState({menu:"send"},function(){})},a.toPay=function(){a.hideATM(),a.callback("pay")},a.toChill=function(){a.hideATM(),a.callback("chill")},a.toGetMail=function(){a.hideATM(),a.callback("get-mail")},a.toGetBox=function(){a.hideATM(),a.callback("get-box")},a.toGetMoney=function(){a.hideATM(),a.callback("get-money")},a.toGetPackage=function(){a.hideATM(),a.callback("get-package")},a.toSendMail=function(){a.hideATM(),a.callback("send-mail")},a.toSendBox=function(){a.hideATM(),a.callback("send-box")},a.toSendMoney=function(){a.hideATM(),a.callback("send-money")},a.toSendDocuments=function(){a.hideATM(),a.callback("send-documents")},a.humanChosen=function(e,t,n,o,i){clearInterval(a.secondInterval);a.setState({goal:i},function(){}),a.myCode=o,a.myNumber=n;for(var s=0,c=0;c<a.myNumber+1;c++)s+=window.times[e][c];var l=Math.floor(s/60),r=s%60;a.secondInterval=setInterval(function(){for(var t=0,n=0;n<a.myNumber+1;n++)t+=window.times[e][n];var o=Math.floor(t/60),i=t%60;a.setState({waitForMinutes:o,waitForSeconds:i,queueLength:a.myNumber+1},function(){})},1e3);var d=o.split("client")[1];1===d.length&&(d="00"+d),2===d.length&&(d="0"+d),a.setState({windowNumber:e,service:{pay:"\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0448\u0442\u0440\u0430\u0444","get-mail":"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0438\u0441\u044c\u043c\u043e","get-box":"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0441\u044b\u043b\u043a\u0443","get-money":"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0435\u043d\u0441\u0438\u044e","get-package":"\u043c\u0435\u043b\u043a\u0438\u0439 \u043f\u0430\u043a\u0435\u0442","send-mail":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0438\u0441\u044c\u043c\u043e","send-box":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u044b\u043b\u043a\u0443","send-money":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434","send-documents":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"}[t],queueLength:n+1,waitForMinutes:l,waitForSeconds:r,ticketNumber:d},function(){})},a.queued=function(e,t){a.myCode===t&&(a.myNumber=e)},a.quited=function(e){a.myCode===e&&a.setState({goal:"quit"},function(){})},a.windowed=function(e){a.myCode===e&&a.setState({goal:"window"},function(){})},a.updateMe=function(e,t,n,o,i){a.myCode===o&&a.humanChosen(e,t,n,o,i)},a.state={goalX:0,goalY:0,population:0,ATMDisplay:"none",menu:"main",windowNumber:3,ticketNumber:"005",service:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u0435\u0433",queueLength:0,waitForMinutes:0,waitForSeconds:0},window.number=0,window.queues=[[],[],[],[],[]],window.times=[[],[],[],[],[]],window.privacySpace=65,window.queueLength=Math.round((window.innerWidth-740)/window.privacySpace),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.moveGoal,!1)}},{key:"render",value:function(){var e=this,t=[1,2,3,4].map(function(e){return o.a.createElement(f,{x:window.innerWidth-180,y:e*(.8*window.innerHeight)/4,stepDistance:15,kind:"worker",deg:-90,key:"worker"+e.toString(),code:"worker"+e.toString()})}),a="tickets";return"window"!==this.state.goal&&(a+=" outed"),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"workspace"},o.a.createElement("div",{className:"street"}),o.a.createElement("div",{className:"post-office"},o.a.createElement("div",{className:"shadows"},o.a.createElement("div",{className:"window-shadow"})),o.a.createElement("div",{className:"walls"},o.a.createElement("div",{className:"wall shadow top-left"}),o.a.createElement("div",{className:"wall shadow bottom-left"}),o.a.createElement("div",{className:"wall shadow top"}),o.a.createElement("div",{className:"wall shadow bottom"}),o.a.createElement("div",{className:"wall shadow top-right"}),o.a.createElement("div",{className:"wall shadow bottom-right"}),o.a.createElement("div",{className:"wall top-left"}),o.a.createElement("div",{className:"wall bottom-left"}),o.a.createElement("div",{className:"wall top"}),o.a.createElement("div",{className:"wall bottom"}),o.a.createElement("div",{className:"wall top-right"}),o.a.createElement("div",{className:"wall bottom-right"})),o.a.createElement("div",{className:"atm"}),o.a.createElement("div",{className:"atm-shadow"}),o.a.createElement("div",{className:"top-stack shadow"}),o.a.createElement("div",{className:"top-stack"}),o.a.createElement("div",{className:"bottom-stack shadow"}),o.a.createElement("div",{className:"bottom-stack"})),o.a.createElement("div",{id:"population"},this.props.people.map(function(t){return o.a.createElement(f,{id:t,x:150*Math.random(),y:window.innerHeight+50,stepDistance:15,kind:"client",deg:0,key:"client"+t.toString(),code:"client"+t.toString(),showATM:e.showATM,onClick:e.humanChosen,queued:e.queued,quited:e.quited,windowed:e.windowed,update:e.updateMe})}),t),o.a.createElement("div",{className:"window"})),o.a.createElement("div",{className:"ATM",style:{display:this.state.ATMDisplay}},o.a.createElement("div",{className:"main-group",style:{display:"main"===this.state.menu?"flex":"none"}},o.a.createElement("div",{className:"item",onClick:this.toGet},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"),o.a.createElement("div",{className:"item",onClick:this.toSend},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),o.a.createElement("div",{className:"item",onClick:this.toPay},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0448\u0442\u0440\u0430\u0444"),o.a.createElement("div",{className:"item",onClick:this.toChill},"\u0427\u0438\u043b\u0438\u0442\u044c")),o.a.createElement("div",{className:"get-group",style:{display:"get"===this.state.menu?"flex":"none"}},o.a.createElement("div",{className:"item",onClick:this.toGetMail},"\u041f\u0438\u0441\u044c\u043c\u043e"),o.a.createElement("div",{className:"item",onClick:this.toGetBox},"\u041f\u043e\u0441\u044b\u043b\u043a\u0443"),o.a.createElement("div",{className:"item",onClick:this.toGetMoney},"\u041f\u0435\u043d\u0441\u0438\u044e"),o.a.createElement("div",{className:"item",onClick:this.toGetPackage},"\u041c\u0435\u043b\u043a\u0438\u0439 \u043f\u0430\u043a\u0435\u0442")),o.a.createElement("div",{className:"send-group",style:{display:"send"===this.state.menu?"flex":"none"}},o.a.createElement("div",{className:"item",onClick:this.toSendMail},"\u041f\u0438\u0441\u044c\u043c\u043e"),o.a.createElement("div",{className:"item",onClick:this.toSendBox},"\u041f\u043e\u0441\u044b\u043b\u043a\u0443"),o.a.createElement("div",{className:"item",onClick:this.toSendMoney},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"),o.a.createElement("div",{className:"item",onClick:this.toSendDocuments},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b"))),o.a.createElement("div",{className:a},o.a.createElement("div",{className:"ticket"},o.a.createElement("svg",{height:"10",width:"200"},o.a.createElement("polygon",{points:"0,10 0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0 105,10 110,0 115,10 120,0 125,10 130,0 135,10 140,0 145,10 150,0 155,10 160,0 165,10 170,0 175,10 180,0 185,10 190,0 195,10 200,0 200,10",fill:"white"})),o.a.createElement("svg",{height:"10",width:"200"},o.a.createElement("polygon",{points:"0,10 0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0 105,10 110,0 115,10 120,0 125,10 130,0 135,10 140,0 145,10 150,0 155,10 160,0 165,10 170,0 175,10 180,0 185,10 190,0 195,10 200,0 200,10",fill:"white"})),o.a.createElement("div",{className:"service-label"},"\u0423\u0441\u043b\u0443\u0433\u0430:"),o.a.createElement("span",{id:"service-kind",className:"service-value"},this.state.service),o.a.createElement("div",{className:"ticket-number"},"\u0411\u0443\u043c\u0430\u0436\u043a\u0430 \u2116",o.a.createElement("span",{id:"ticket-number"},this.state.ticketNumber)),o.a.createElement("div",{id:"window-number",className:"window-number"},this.state.windowNumber),o.a.createElement("div",{className:"window-label"},"\u043e\u043a\u043d\u043e"),o.a.createElement("div",{className:"wait"},"\u0416\u0434\u0430\u0442\u044c: ",o.a.createElement("span",{id:"wait-for",className:"stm1"},this.state.waitForMinutes," \u043c. ",this.state.waitForSeconds," \u0441\u0435\u043a.")),o.a.createElement("div",{className:"queue"},"\u041e\u0447\u0435\u0440\u0435\u0434\u044c: ",o.a.createElement("span",{id:"queue-length",className:"stm2"},this.state.queueLength," \u0447\u0435\u043b.")))))}}]),t}(n.Component),p=Object(u.b)(function(e,t){return{people:e.people}},null)(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(8),v=a(18),y=a(14),b={population:1,last_id:1,serviced:0,waitingTimeSum:0,people:[1]},N=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CREATE_HUMAN":return Object(y.a)({},a,{population:a.population+1,last_id:a.last_id+1,people:[].concat(Object(v.a)(a.people),[a.last_id+1])});case"KILL_HUMAN":var o=a.people.indexOf(n.payload);return Object(y.a)({},a,{population:a.population-1,people:(e=a.people,t=o,e.filter(function(e,a){return a!==t}))});default:return a}},k=Object(g.b)(N);setInterval(function(){var e=Math.random();k.getState().population<20&&e>.65&&k.dispatch({type:"CREATE_HUMAN"})},1500);s.a.render(o.a.createElement(u.a,{store:k},o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.edbcc491.chunk.js.map