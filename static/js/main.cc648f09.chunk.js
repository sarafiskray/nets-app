(this["webpackJsonpnets-app"]=this["webpackJsonpnets-app"]||[]).push([[0],{181:function(e,t,s){},182:function(e,t,s){},200:function(e,t,s){},202:function(e,t,s){},340:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(77),r=s.n(n),i=(s(181),s(16)),l=(s(182),s(58)),j=s.n(l),d=(s(200),s(2)),o=function(e){var t=e.fName,s=e.lName,c=e.setfName,n=e.setlName,r=e.searchfName,i=e.searchlName;return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)("div",{className:"col s5",children:Object(d.jsxs)("form",{onSubmit:r,children:[Object(d.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},placeholder:"First Name"}),Object(d.jsx)("button",{className:"btn grey",type:"submit",children:"Go"})]})}),Object(d.jsx)("p",{className:"col s2",children:"OR"}),Object(d.jsx)("div",{className:"col s5",children:Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},placeholder:"Last Name"}),Object(d.jsx)("button",{className:"btn grey",type:"submit",children:"Go"})]})})]})},b=function(e){var t=e.listPlayers;return Object(d.jsx)("ul",{className:"collection highlight",children:t})},p=function(e){var t=e.id,s=e.firstName,a=e.lastName,c=(e.teamId,e.setPlayer),n=e.setPlayerStats,r=e.numGames;console.log(r);var i={method:"GET",url:"https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/",headers:{"x-rapidapi-key":"ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56","x-rapidapi-host":"api-nba-v1.p.rapidapi.com"}};return Object(d.jsx)("li",{className:"collection-item",onClick:function(e){e.preventDefault(),c(t),(i.url+=t,j.a.request(i).then((function(e){return e.data.api.statistics})).catch((function(e){console.log(e)}))).then((function(e){for(var t=[],s=e.length-1;t.length<10;){var a=parseInt(e[s].min),c=parseInt(e[s].gameId);a>0&&8784!=c&&t.unshift(e[s]),s-=1}n(t)}))},children:Object(d.jsxs)("p",{children:[" ",s," ",a]})})},h=function(e){var t,s=e.setPlayer,c=e.setPlayerStats,n=e.numGames,r=Object(a.useState)(""),l=Object(i.a)(r,2),h=l[0],u=l[1],O=Object(a.useState)(""),m=Object(i.a)(O,2),x=m[0],f=m[1],y=Object(a.useState)([]),g=Object(i.a)(y,2),v=g[0],N=g[1],S={method:"GET",url:"https://api-nba-v1.p.rapidapi.com/players/firstName/",headers:{"x-rapidapi-key":"ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56","x-rapidapi-host":"api-nba-v1.p.rapidapi.com"}},P={method:"GET",url:"https://api-nba-v1.p.rapidapi.com/players/lastName/",headers:{"x-rapidapi-key":"ac51f32be0msh667db546ecb476ep1e1b64jsna2067267cb56","x-rapidapi-host":"api-nba-v1.p.rapidapi.com"}};return t=v.length>0?v.map((function(e){return Object(d.jsx)(p,{id:e.playerId,firstName:e.firstName,lastName:e.lastName,teamId:e.teamId,setPlayer:s,setPlayerStats:c},e.playerId)})):[],Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(o,{fName:h,lName:x,setfName:u,setlName:f,searchlName:function(e){e.preventDefault(),P.url+=x,j.a.request(P).then((function(e){N(e.data.api.players)})).catch((function(e){console.log(e)}))},searchfName:function(e){e.preventDefault(),S.url+=h,j.a.request(S).then((function(e){N(e.data.api.players)})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(b,{listPlayers:t,numGames:n})]})},u=function(e){var t=e.playerOneStats,s=e.playerTwoStats,a=function(e){var t={assists:0,blks:0,min:0,pts:0,stls:0,to:0,rebounds:0,fgp:0,tpp:0,plusMinus:0};if(e.length>0){for(var s=0,a=0,c=0,n=0,r=0,i=0,l=0,j=0,d=0,o=0,b=0,p=0,h=0;h<e.length;h++)s+=parseInt(e[h].assists),a+=parseInt(e[h].blocks),c+=parseInt(e[h].min),n+=parseInt(e[h].points),r+=parseInt(e[h].steals),i+=parseInt(e[h].turnovers),l+=parseInt(e[h].totReb),j+=parseInt(e[h].fga),d+=parseInt(e[h].fgm),o+=parseInt(e[h].tpa),b+=parseInt(e[h].tpm),p+=parseInt(e[h].plusMinus);return t.assists=s/10,t.blks=a/10,t.min=c/10,t.pts=n/10,t.stls=r/10,t.to=i/10,t.rebounds=l/10,t.fgp=(d/j*100).toFixed(1),t.tpp=(b/o*100).toFixed(1),t.plusMinus=p,t}return t},c=a(t),n=a(s);return Object(d.jsx)("table",{className:"centered highlight",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.pts}),Object(d.jsx)("td",{children:"PPG"}),Object(d.jsx)("td",{children:n.pts})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.rebounds}),Object(d.jsx)("td",{children:"RPG"}),Object(d.jsx)("td",{children:n.rebounds})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.assists}),Object(d.jsx)("td",{children:"APG"}),Object(d.jsx)("td",{children:n.assists})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.stls}),Object(d.jsx)("td",{children:"SPG"}),Object(d.jsx)("td",{children:n.stls})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.blks}),Object(d.jsx)("td",{children:"BPG"}),Object(d.jsx)("td",{children:n.blks})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.to}),Object(d.jsx)("td",{children:"TOPG"}),Object(d.jsx)("td",{children:n.to})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.min}),Object(d.jsx)("td",{children:"MPG"}),Object(d.jsx)("td",{children:n.min})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.fgp}),Object(d.jsx)("td",{children:"FG %"}),Object(d.jsx)("td",{children:n.fgp})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.tpp}),Object(d.jsx)("td",{children:"3P %"}),Object(d.jsx)("td",{children:n.tpp})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:c.plusMinus}),Object(d.jsx)("td",{children:"Total +/-"}),Object(d.jsx)("td",{children:n.plusMinus})]})]})})},O=s(342),m=s(172),x=s(169),f=s(170),y=s(67),g=(s(202),function(e){for(var t=e.playerOneStats,s=e.playerTwoStats,c=(e.numGames,e.setNumGames,Object(a.useState)("points")),n=Object(i.a)(c,2),r=n[0],l=n[1],j=[],o=0;o<10;o++)j.push({});if(t.length>0)for(var b=0;b<10;b++)j[b].p1Pts=t[b].points,j[b].p1Asts=t[b].assists,j[b].p1Reb=t[b].totReb;if(s.length>0)for(var p=0;p<10;p++)j[p].p2Pts=s[p].points,j[p].p2Asts=s[p].assists,j[p].p2Reb=s[p].totReb;return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsxs)("div",{className:"statChips center-align",children:[Object(d.jsx)("div",{className:"points"==r?"chip statSelected":"chip",onClick:function(e){e.preventDefault(),l("points")},children:"Points"}),Object(d.jsx)("div",{className:"rebounds"==r?"chip statSelected":"chip",onClick:function(e){e.preventDefault(),l("rebounds")},children:"Rebounds"}),Object(d.jsx)("div",{className:"assists"==r?"chip statSelected":"chip",onClick:function(e){e.preventDefault(),l("assists")},children:"Assists"})]}),Object(d.jsxs)(O.a,{width:800,height:400,data:j,children:[t.length>0&&"points"==r?Object(d.jsx)(m.a,{type:"monotone",dataKey:"p1Pts",stroke:"purple"}):null,s.length>0&&"points"==r?Object(d.jsx)(m.a,{type:"monotone",dataKey:"p2Pts",stroke:"green"}):null,t.length>0&&"rebounds"==r?Object(d.jsx)(m.a,{type:"monotone",dataKey:"p1Reb",stroke:"purple"}):null,s.length>0&&"rebounds"==r?Object(d.jsx)(m.a,{type:"monotone",dataKey:"p2Reb",stroke:"green"}):null,t.length>0&&"assists"==r?Object(d.jsx)(m.a,{type:"monotone",dataKey:"p1Asts",stroke:"purple"}):null,s.length>0&&"assists"==r?Object(d.jsx)(m.a,{type:"monotone",dataKey:"p2Asts",stroke:"green"}):null,Object(d.jsx)(x.a,{tick:!1}),Object(d.jsx)(f.a,{type:"number",domain:[0,80]}),Object(d.jsx)(y.a,{cursor:!1})]})]})});var v=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),s=(t[0],t[1]),c=Object(a.useState)(0),n=Object(i.a)(c,2),r=(n[0],n[1]),l=Object(a.useState)([]),j=Object(i.a)(l,2),o=j[0],b=j[1],p=Object(a.useState)([]),O=Object(i.a)(p,2),m=O[0],x=O[1],f=Object(a.useState)(10),y=Object(i.a)(f,2),v=y[0],N=y[1];return console.log(o),console.log(m),Object(d.jsxs)("div",{className:"grey lighten-4",children:[Object(d.jsx)("div",{className:"top",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row mySection",children:[Object(d.jsx)("div",{className:"col s12 m6 l6 p1",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)(h,{setPlayer:s,setPlayerStats:b})})}),Object(d.jsx)("div",{className:"col s12 m6 l6 p2",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)(h,{setPlayer:r,setPlayerStats:x,numGames:v})})})]})})}),Object(d.jsx)("div",{className:"container ",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)(g,{playerOneStats:o,playerTwoStats:m,numGames:v,setNumGames:N})})}),Object(d.jsx)("div",{className:"container mySection",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)(u,{playerOneStats:o,playerTwoStats:m,numGames:v})})})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,347)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),N()}},[[340,1,2]]]);
//# sourceMappingURL=main.cc648f09.chunk.js.map