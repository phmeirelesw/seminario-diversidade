var C=["#c8553d","#d9a441","#2a9d8f","#3d5a98","#7a4e8c","#8c6d4f"];
var SK=["#f6d3b3","#e0a878","#b9784a","#8a5230","#5a3320","#3b2216"];
function person(x,y,i,s){var sk=SK[i%6],sh=C[(i+2)%6],hr=["#2b1a10","#6b3a1e","#d4a017","#111","#a33","#5a3ea0"][(i*3)%6];
s=s||1;return '<g transform="translate('+x+','+y+') scale('+s+')"><path d="M-30 90 Q-30 38 0 38 Q30 38 30 90Z" fill="'+sh+'"/><circle cx="0" cy="12" r="24" fill="'+sk+'"/><path d="M-25 10 Q-24 -16 0 -16 Q24 -16 25 10 Q10 -2 -25 10Z" fill="'+hr+'"/><circle cx="-8" cy="14" r="2.5" fill="#222"/><circle cx="8" cy="14" r="2.5" fill="#222"/><path d="M-7 23 Q0 29 7 23" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>'}
function scene(bg,n,off,extra){var o='<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="260" fill="'+bg+'"/>';
o+='<circle cx="60" cy="50" r="34" fill="#fff4"/><circle cx="350" cy="210" r="50" fill="#fff3"/>'+(extra||'');
var step=340/n;for(var i=0;i<n;i++){o+=person(30+step*(i+.5)+ (i%2?0:0),110+(i%2)*14,i+off,1.1)}
return o+'</svg>'}
var LBL={hero:"Foto 1 · capa",g1:"Foto 2 · conceito",g2:"Foto 3 · empatia e respeito",g3:"Foto 4 · importância",g4:"Foto 5 · discriminação e inclusão",g5:"Foto 6 · conclusão"};
function mosaic(seed){var r=seed*9301+49297,P=["#c8553d","#d9a441","#2a9d8f","#3d5a98","#7a4e8c","#8c6d4f"];function rnd(){r=(r*9301+49297)%233280;return r/233280}
var o='<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="500" fill="#14213d"/>';
for(var y=0;y<5;y++)for(var x=0;x<4;x++){var c=P[Math.floor(rnd()*6)],k=Math.floor(rnd()*4),X=x*100,Y=y*100,q=Math.floor(rnd()*4);
o+='<rect x="'+X+'" y="'+Y+'" width="100" height="100" fill="'+P[Math.floor(rnd()*6)]+'" opacity=".16"/>';
if(k==0)o+='<circle cx="'+(X+50)+'" cy="'+(Y+50)+'" r="38" fill="'+c+'"/>';
else if(k==1)o+='<path d="M'+X+' '+(Y+100)+'A100 100 0 0 1 '+(X+100)+' '+Y+'V'+(Y+100)+'Z" fill="'+c+'" transform="rotate('+(q*90)+' '+(X+50)+' '+(Y+50)+')"/>';
else if(k==2)o+='<path d="M'+(X+10)+' '+(Y+50)+'a40 40 0 0 1 80 0z" fill="'+c+'" transform="rotate('+(q*90)+' '+(X+50)+' '+(Y+50)+')"/>';
else o+='<rect x="'+(X+14)+'" y="'+(Y+14)+'" width="72" height="72" rx="4" fill="'+c+'" opacity=".9"/>'}
return o+'</svg>'}
var n=0;document.querySelectorAll("[data-art]").forEach(function(e){n++;var k=e.dataset.art;e.classList.add("art");
e.innerHTML=mosaic(n+3)+'<div class="hint">'+LBL[k]+' — clique para inserir</div>';
var f=document.createElement("input");f.type="file";f.accept="image/*";f.hidden=true;e.appendChild(f);
e.onclick=function(ev){if(ev.target!==f)f.click()};
function setImg(src){var im=new Image();im.alt=LBL[k];im.onload=function(){e.innerHTML="";e.classList.add("has");e.appendChild(im);e.appendChild(f)};im.src=src}
f.onchange=function(){if(f.files[0])setImg(URL.createObjectURL(f.files[0]))};
if(e.dataset.src)setImg(e.dataset.src)});
var vs=document.getElementById("vslot"),tv=document.createElement("video");tv.controls=true;tv.playsInline=true;tv.preload="metadata";
tv.onloadedmetadata=function(){vs.innerHTML="";vs.appendChild(tv)};tv.src="video/diversidade.mp4";
var pr=document.getElementById("prog");addEventListener("scroll",function(){var h=document.documentElement;pr.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.08});
document.querySelectorAll(".row,.video,.refs").forEach(function(x){x.classList.add("rv");io.observe(x)});

/* QUIZ */
var Q=[
["O que melhor define o conceito de diversidade humana?",["O conjunto de diferenças físicas que distinguem os indivíduos de uma sociedade.","A variedade de características biológicas, culturais, sociais e identitárias presentes entre os seres humanos.","As diferenças de nacionalidade, idioma e religião entre os povos.","A existência de diferentes grupos sociais que compartilham os mesmos valores e costumes."],1,"A diversidade humana reúne diferenças biológicas, culturais, sociais e identitárias."],
["Por que compreender a diversidade humana é fundamental nas sociedades contemporâneas?",["Para facilitar a adaptação de todos os grupos a uma cultura predominante.","Para reduzir conflitos por meio da padronização de valores e comportamentos.","Para reconhecer e valorizar as diferenças, promovendo uma convivência respeitosa e igualitária.","Para garantir que as diferenças culturais não interfiram nas relações sociais."],2,"Reconhecer e valorizar as diferenças ajuda a promover uma convivência respeitosa e igualitária."],
["No contexto da diversidade humana, qual atitude representa verdadeiramente a empatia?",["Defender a própria visão de mundo, respeitando o direito de o outro discordar.","Tratar todas as pessoas exatamente da mesma forma, independentemente de suas necessidades.","Compreender as experiências, os sentimentos e as perspectivas do outro, evitando julgamentos precipitados.","Concordar com todas as opiniões para evitar conflitos e preservar a convivência."],2,"Empatia envolve compreender as experiências, os sentimentos e as perspectivas de outra pessoa."],
["Qual ação demonstra, na prática, o respeito às diferenças na sociedade?",["Evitar discussões sobre diversidade para impedir possíveis desentendimentos.","Reconhecer a liberdade individual, mesmo quando determinados grupos são excluídos dos espaços sociais.","Aceitar costumes de diferentes culturas sem questionar nenhuma prática.","Combater preconceitos e discriminações, defendendo os direitos e a dignidade de todas as pessoas."],3,"Respeitar as diferenças inclui combater preconceitos e defender os direitos e a dignidade de todos."],
["Qual atitude contribui para a permanência do preconceito, mesmo quando uma pessoa afirma valorizar a diversidade?",["Respeitar perspectivas culturais diferentes das suas.","Ignorar situações de discriminação, permitindo que elas continuem acontecendo.","Demonstrar empatia por pessoas socialmente excluídas.","Promover o diálogo entre indivíduos de diferentes origens."],1,"Ignorar a discriminação permite que o preconceito continue acontecendo."],
["Qual alternativa melhor diferencia a tolerância da inclusão efetiva?",["Tolerar significa garantir participação; incluir significa apenas aceitar a presença do outro.","Tolerância e inclusão são conceitos idênticos, pois ambos exigem apenas respeito verbal.","A tolerância permite a convivência, enquanto a inclusão busca assegurar acolhimento, participação e oportunidades reais.","A inclusão consiste em evitar conflitos por meio da redução das diferenças entre os indivíduos."],2,"A inclusão vai além da convivência: busca acolhimento, participação e oportunidades reais."],
["Uma pessoa afirma respeitar a diversidade, mas defende que determinados grupos não devem ter acesso aos mesmos espaços sociais. O que essa situação evidencia?",["Uma forma legítima de preservar a identidade cultural de determinados grupos.","Uma manifestação de liberdade de expressão que não apresenta implicações sociais.","Uma contradição entre o discurso de respeito e uma prática que promove exclusão e discriminação.","Uma inclusão parcial que garante o respeito, mesmo sem igualdade de direitos."],2,"Defender a exclusão contradiz o discurso de respeito à diversidade."],
["Uma escola aceita a matrícula de alunos com deficiência, mas não oferece acessibilidade nem adapta suas atividades. Qual é a principal falha dessa instituição?",["Não garantir que todos os alunos tenham o mesmo desempenho acadêmico.","Permitir que as necessidades individuais interfiram no planejamento escolar.","Oferecer condições diferentes para alunos que deveriam receber tratamento idêntico.","Garantir o acesso formal, mas não assegurar condições efetivas de participação e aprendizagem."],3,"Matrícula por si só não garante inclusão: é preciso assegurar participação e aprendizagem."],
["Segundo 1 Coríntios 12, qual ensinamento a comparação da comunidade cristã com um corpo transmite sobre a diversidade?",["A unidade depende de todos os membros exercerem a mesma função.","Os membros mais importantes podem dispensar a contribuição dos demais.","Cada membro possui uma função própria, e a diversidade de contribuições é essencial para o funcionamento do corpo.","As diferenças devem ser eliminadas para preservar a unidade da comunidade."],2,"A comparação ensina que cada membro tem uma função e que as diferentes contribuições são importantes."],
["Uma comunidade promove eventos culturais, mas impede que determinados grupos participem das decisões e das atividades principais. Considerando os princípios da diversidade, da empatia e da inclusão, qual seria a melhor avaliação dessa situação?",["A comunidade é inclusiva porque permite que diferentes culturas sejam apresentadas publicamente.","A comunidade valoriza a diversidade, pois a participação nas decisões não é necessária para garantir respeito.","A comunidade demonstra empatia ao reconhecer as diferenças, mesmo que mantenha alguns grupos afastados.","A comunidade promove uma valorização superficial da diversidade, pois não garante participação efetiva, pertencimento e igualdade de oportunidades."],3,"Valorizar a diversidade exige participação efetiva, pertencimento e igualdade de oportunidades."]];
var QUESTION_TIME=30;
var SYM=["A","B","C","D"],qi=0,tm=null,tl=QUESTION_TIME,hits=0,done=false;
var qa=document.getElementById("qarea");
document.getElementById("start").onclick=function(){qi=0;hits=0;ask()};
function ask(){var q=Q[qi];done=false;tl=QUESTION_TIME;
qa.innerHTML='<div class="qtop"><span>Pergunta '+(qi+1)+'/'+Q.length+'</span></div><div class="timer"><i id="tb"></i></div><div class="qtext">'+q[0]+'</div><div class="ans">'+q[1].map(function(a,i){return '<button class="a'+i+'" data-i="'+i+'"><span>'+SYM[i]+'</span>'+a+'</button>'}).join("")+'</div><div class="fb" id="fb"></div>';
qa.querySelectorAll(".ans button").forEach(function(b){b.onclick=function(){pick(+b.dataset.i)}});
clearInterval(tm);tm=setInterval(function(){tl-=.1;document.getElementById("tb").style.width=(tl/QUESTION_TIME*100)+"%";if(tl<=0)pick(-1)},100)}
function pick(i){if(done)return;done=true;clearInterval(tm);var q=Q[qi],ok=i===q[2],fb=document.getElementById("fb");
if(ok)hits++;
fb.innerHTML=(i<0?'Tempo esgotado. ':ok?'Correto! ':'Incorreto. ')+'<small>'+q[3]+'</small>';
qa.querySelectorAll(".ans button").forEach(function(b,k){b.disabled=true;if(k===q[2])b.classList.add("ok");else b.classList.add("dim")});
var n=document.createElement("button");n.className="btn";n.style.background="var(--c3)";n.textContent=qi<Q.length-1?"Próxima →":"Concluir";n.onclick=function(){qi++;qi<Q.length?ask():end()};fb.appendChild(document.createElement("br"));fb.appendChild(n)}
function end(){
var m=hits>=9?"Excelente domínio do tema":hits>=7?"Bom desempenho":"Vale revisar o conteúdo";
qa.innerHTML='<h3>Quiz concluído!</h3><p>'+m+'. Você acertou '+hits+' de '+Q.length+' perguntas.</p><button class="btn" style="background:var(--c2);color:#14213d" id="again">Responder novamente</button>';
document.getElementById("again").onclick=function(){qi=0;hits=0;ask()}}
