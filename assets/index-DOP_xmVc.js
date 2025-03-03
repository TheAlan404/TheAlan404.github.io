import{j as t}from"./jsx-runtime-BjG_zV1W.js";const T="Hello",S="First blog post",k="14.08.2024",I="hello";function a(n){const e={h1:"h1",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{children:"Hello!"}),`
`,t.jsx(e.p,{children:"Welcome to by blog! :3"}),`
`,t.jsx(e.p,{children:"I have 2 WIP articles as of writing this, dont worry haha"})]})}function C(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}const z=Object.freeze(Object.defineProperty({__proto__:null,date:k,default:C,description:S,slug:I,title:T},Symbol.toStringTag,{value:"Module"})),A="That Time I Had an Internship of 2 Days",O="yeah",P="2024.08.08",X="internship";function c(n){const e={em:"em",p:"p",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Hi! It's me, Deniz, im currently bored at metro so I decided I would actually start writing blog posts."}),`
`,t.jsx(e.p,{children:"Now, a bit of context: the type of highschool that i went to does not provide internships. The friendly government that contains my school, however, does a mini internship available to students studying in my type of highschools."}),`
`,t.jsx(e.p,{children:"I applied the first time I heard about it, they called me over and I had to basically fill some forms and do a small interview. A few weeks after that I was accepted! 🎉"}),`
`,t.jsxs(e.p,{children:["I remember the first day of the event. It was raining a lot, I got up at a time I ",t.jsx(e.em,{children:"never"})," woke up in before. Now, from my house to the where I need to go is kinda far (10 kilometers or so) and they previously sent out a table of private bus services for us to get in contact with and possibly use. I did talk with the driver that goes near my house, and we agreed on a pickup spot."]}),`
`,t.jsxs(e.p,{children:["At ",t.jsx(e.strong,{children:"6:50"}),' am, I was at the pickup spot. The infographic they sent had "',t.jsx(e.strong,{children:"7:00"}),' am" written as their starting time. 20 minutes after I arrived, ',t.jsx(e.strong,{children:"7:10"})," am, the bus driver still wasn't there. I started panicking."]}),`
`,t.jsxs(e.p,{children:["I called the bus driver, no response. At ",t.jsx(e.strong,{children:"7:20"}),"am, I saw the bus! But uh, the bus ",t.jsx(e.em,{children:"didnt"})," stop, or even ",t.jsx(e.em,{children:"slow down"})," for that matter. I screamed after it I think, but the bus just kept going."]}),`
`,t.jsx(e.p,{children:"I was frustrated, I hopped on one of the public busses and started to go on my own. I was texting them telling what happened. At one point, the bus driver called me back! ...explaining how he was asleep and that apparently someone else took the route?? Awesome."})]})}function N(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(c,{...n})}):c(n)}const B=Object.freeze(Object.defineProperty({__proto__:null,date:P,default:N,description:O,slug:X,title:A},Symbol.toStringTag,{value:"Module"})),L="TypeScript Algebraic Enums",F="I made an npm library: @alan404/enum",E="14.08.2024",R="enum-lib";function i(n){const e={p:"p",...n.components};return t.jsx(e.p,{children:"meow"})}function W(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}const H=Object.freeze(Object.defineProperty({__proto__:null,date:E,default:W,description:F,slug:R,title:L},Symbol.toStringTag,{value:"Module"})),U=(...[n])=>new Proxy({},{get:(e,o)=>r=>({type:o,data:r,...n==null?void 0:n({type:o,data:r})})}),s=U(),G="nbs-js",J="nbs.js",Y="NBS parser in Javascript",q="2021",V="archive",Z=["js"],K=["library"],Q=[s.repo("TheAlan404/nbs.js"),s.npm("nbs.js")];function l(n){const e={code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"This is REALLY old"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`const NBS = require("nbs.js")

let song = NBS.loadSong("./song.nbs")

console.log(song)
`})})]})}function ee(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(l,{...n})}):l(n)}const te=Object.freeze(Object.defineProperty({__proto__:null,buttons:Q,default:ee,id:G,name:J,shortDesc:Y,status:V,tech:Z,types:K,year:q},Symbol.toStringTag,{value:"Module"})),ne="denvis",se="DenVis",oe="A simple Windows Audio Visualizer",re="2022",ae="wip",ce=["cs"],ie=["desktop"],le=[s.repo("TheAlan404/DenVis"),s.website("https://denvis.glitch.me/")];function d(n){const e={a:"a",img:"img",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:t.jsx(e.img,{src:"/assets/img/proj/denvis.png",alt:""})}),`
`,t.jsx(e.p,{children:"I like Audio-Visual stuff so I added this equalizer-style thing to my desktop. Updates in real time of course."}),`
`,t.jsx(e.p,{children:`It uses .NET/C# and some Windows API's to render a transparent window overlay and some interesting math stuff
(Fourier Transform) to render the bar.`}),`
`,t.jsx(e.p,{children:"It can also render snow!"}),`
`,t.jsxs(e.p,{children:[`For settings, I didn't want to bother with rendering UI in
C# so I expose a websocket in the app and made a `,t.jsx(e.a,{href:"https://denvis.glitch.me/",children:"website"})," for it :P"]}),`
`,t.jsx(e.p,{children:"I do want to rewrite this in Rust sometime, making it platform-independent."})]})}function de(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(d,{...n})}):d(n)}const ue=Object.freeze(Object.defineProperty({__proto__:null,buttons:le,default:de,id:ne,name:se,shortDesc:oe,status:ae,tech:ce,types:ie,year:re},Symbol.toStringTag,{value:"Module"})),pe="paginated-selects",he="PaginatedSelects",me="A DSharpPlus extension that adds paginated select components",be="2022",ge="archive",je=["cs"],ye=["library"],fe=[s.repo("TheAlan404/DSharpPlus.PaginatedSelects")];function u(n){const e={a:"a",code:"code",p:"p",pre:"pre",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["This is a really old ",t.jsx(e.a,{href:"https://dsharpplus.github.io/DSharpPlus/",children:"DSharpPlus"})," extension that adds paginated select components"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-cs",children:`using DSharpPlus.PaginatedSelects;

var paginatedExtension = client.UsePaginatedSelects();
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-cs",children:`await ctx.EditResponseAsync(new DiscordWebhookBuilder()
	.WithContent("Hi! Where are you from?")
	.AddPaginatedSelect("myselect", new PaginatedSelect(new(){
		new("America", "us"),
		new("France", "fr"),
		new("Germany", "gb"),
		new("Turkey", "tr"),
		// ... imagine more than 25 options ....
	})));
`})})]})}function xe(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}const _e=Object.freeze(Object.defineProperty({__proto__:null,buttons:fe,default:xe,id:pe,name:he,shortDesc:me,status:ge,tech:je,types:ye,year:be},Symbol.toStringTag,{value:"Module"})),$e="want-you-gone",we="Want You Gone",ve="Portal 2 ending credits song animation recreated using (very bad) HTML",De="2022",Me="archive",Te=["html","css","js"],Se=["website"],ke=[s.website("https://deniz.blue/want-you-gone/"),s.repo("TheAlan404/want-you-gone")];function p(n){const e={img:"img",p:"p",...n.components};return t.jsx(e.p,{children:t.jsx(e.img,{src:"/assets/img/proj/wantyougone.png",alt:""})})}function Ie(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(p,{...n})}):p(n)}const Ce=Object.freeze(Object.defineProperty({__proto__:null,buttons:ke,default:Ie,id:$e,name:we,shortDesc:ve,status:Me,tech:Te,types:Se,year:De},Symbol.toStringTag,{value:"Module"})),ze="mcman",Ae="mcman",Oe="A powerful Minecraft Server Management CLI which allows you to use git and many other things",Pe="2023",Xe=void 0,Ne=["rust"],Be=["cli","library"],Le=[s.repo("ParadigmMC/mcman"),s.docs("https://mcman.deniz.blue/")];function h(n){const e={code:"code",img:"img",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.code,{children:"mcman"})," allows you to use ",t.jsx(e.code,{children:"git"})," to version-control your minecraft servers ✨"]}),`
`,t.jsxs(e.p,{children:[`it does this by its own config format and build process that auto-downloads and updates any plugins/mods/worlds/etc
and by seperating actual plugin/mod config files from `,t.jsx(e.code,{children:"jar"})," files"]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://mcman.deniz.blue/mcman-3.png",alt:""})})]})}function Fe(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(h,{...n})}):h(n)}const Ee=Object.freeze(Object.defineProperty({__proto__:null,buttons:Le,default:Fe,id:ze,name:Ae,shortDesc:Oe,status:Xe,tech:Ne,types:Be,year:Pe},Symbol.toStringTag,{value:"Module"})),Re="oaalmun",We="OAALMUN",He="MUN (Model United Nations) website for my school",Ue="2023",Ge=void 0,Je=["js","ts","react","vite"],Ye=[],qe=[s.website("https://mun.oaal.com.tr")];function m(n){const e={em:"em",p:"p",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"I still haven't got my payment of 2 toasts at the canteen for this"}),`
`,t.jsxs(e.p,{children:["For the record, ",t.jsx(e.em,{children:t.jsx(e.strong,{children:"no"})}),", I was not a part of any MUN's."]})]})}function Ve(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(m,{...n})}):m(n)}const Ze=Object.freeze(Object.defineProperty({__proto__:null,buttons:qe,default:Ve,id:Re,name:We,shortDesc:He,status:Ge,tech:Je,types:Ye,year:Ue},Symbol.toStringTag,{value:"Module"})),Ke="alphamath",Qe="alphamath",et="An experimental interactive math engine/solver",tt="2024",nt="wip",st=["ts","react","vite"],ot=["website"],rt=[s.website("https://deniz.blue/alphamath/"),s.repo("TheAlan404/alphamath")];function b(n){const e={p:"p",...n.components};return t.jsx(e.p,{children:"Skip this, its a giant WIP"})}function at(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(b,{...n})}):b(n)}const ct=Object.freeze(Object.defineProperty({__proto__:null,buttons:rt,default:at,id:Ke,name:Qe,shortDesc:et,status:nt,tech:st,types:ot,year:tt},Symbol.toStringTag,{value:"Module"})),it="carpanga",lt="Çarpanga",dt="A 1v1 mathematical strategy game",ut="2024",pt="up",ht=["ts","react","vite"],mt=["website"],bt=[s.website("https://carpanga.deniz.blue/"),s.repo("TheAlan404/carpanga")];function g(n){const e={img:"img",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"Goal: Get 3 in a row"}),`
`,t.jsx(e.p,{children:"The number your opponent picked on their turn will be multiplied with your choice. You take the result if it exists on the board."}),`
`,t.jsx(e.p,{children:"My classmates really liked this little game haha"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/assets/img/proj/carpanga.png",alt:""})})]})}function gt(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(g,{...n})}):g(n)}const jt=Object.freeze(Object.defineProperty({__proto__:null,buttons:bt,default:gt,id:it,name:lt,shortDesc:dt,status:pt,tech:ht,types:mt,year:ut},Symbol.toStringTag,{value:"Module"})),yt="discord-jsx",ft="discord-jsx",xt="A library that allows you to use React/JSX inside your discord bot projects",_t="2024",$t=void 0,wt=["ts","react","nodejs"],vt=["library"],Dt=[s.repo("TheAlan404/discord-jsx"),s.npm("@alan404/discordjsx")];function j(n){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:["This project uses ",t.jsx(e.a,{href:"https://www.npmjs.com/package/react-reconciler",children:"react-reconciler"})," to render React components into discord messages."]}),`
`,t.jsxs(e.p,{children:["This allows you to use ",t.jsx(e.strong,{children:"all"})," React hooks in your components."]}),`
`,t.jsx(e.p,{children:"This was made as a proof of concept. I dont think anyone would ever actually want to use React to make a discord bot."}),`
`,t.jsxs(e.p,{children:["Below is an example that uses ",t.jsx(e.strong,{children:"effects"})," and ",t.jsx(e.strong,{children:"state"})," to render ",t.jsx(e.strong,{children:"embeds"})," and ",t.jsx(e.strong,{children:"message buttons"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { createJSXRenderer } from "@alan404/discordjsx";

const Test = () => {
    const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(c => c + 10);
		}, 30_000);

		return () => clearInterval(interval);
	}, []);

    return (
        <msg>
            <embed
                color="Purple"
                title="discord-jsx Example"
            >
                Hello world!

                Counter: {counter}
            </embed>

            <row>
                <button onClick={() => setCounter(c => c-1)}>
                    -1
                </button>
                <button onClick={() => setCounter(c => c+1)}>
                    +1
                </button>
            </row>
        </msg>
    );
}

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    await interaction.deferReply();

    createJSXRenderer(client, <Test />, async (msg) => {
        await interaction.editReply(msg);
    });
});
`})})]})}function Mt(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(j,{...n})}):j(n)}const Tt=Object.freeze(Object.defineProperty({__proto__:null,buttons:Dt,default:Mt,id:yt,name:ft,shortDesc:xt,status:$t,tech:wt,types:vt,year:_t},Symbol.toStringTag,{value:"Module"})),St="istanbus",kt="Istanbus",It="Istanbul Bus Information website (IETT)",Ct="2024",zt="up",At=["ts","react","nodejs"],Ot=["website","restapi"],Pt=[s.website("https://istanbus.deniz.blue/"),s.repo("TheAlan404/istanbus")];function y(n){const e={p:"p",...n.components};return t.jsx(e.p,{children:"IETT but better idk"})}function Xt(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(y,{...n})}):y(n)}const Nt=Object.freeze(Object.defineProperty({__proto__:null,buttons:Pt,default:Xt,id:St,name:kt,shortDesc:It,status:zt,tech:At,types:Ot,year:Ct},Symbol.toStringTag,{value:"Module"})),Bt="minecraft-assets",Lt="minecraft-assets",Ft="TypeScript library providing minecraft assets (block states, models and textures)",Et="2024",Rt=void 0,Wt=["ts"],Ht=["library"],Ut=[s.npm("@alan404/minecraft-assets"),s.repo("TheAlan404/minecraft-assets-ts")];function f(n){const e={a:"a",p:"p",...n.components};return t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://www.npmjs.com/package/minecraft-data",children:"minecraft-data"}),` is NodeJS-only so I made this quickly,
it works on browsers plus its ✨ ESM ✨`]})}function Gt(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(f,{...n})}):f(n)}const Jt=Object.freeze(Object.defineProperty({__proto__:null,buttons:Ut,default:Gt,id:Bt,name:Lt,shortDesc:Ft,status:Rt,tech:Wt,types:Ht,year:Et},Symbol.toStringTag,{value:"Module"})),Yt="nbt-ts",qt="nbt",Vt="TypeScript library for serializing and deserializing NBT",Zt="2024",Kt=void 0,Qt=["ts"],en=["library"],tn=[s.npm("@alan404/nbt"),s.repo("TheAlan404/nbt-ts")];function x(n){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://minecraft.wiki/w/NBT_format",children:"Named Binary Tag (NBT)"}),` is a data format used
by `,t.jsx(e.strong,{children:"Minecraft"})," - this is a TypeScript library that provides serialization and deserialization for it."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`let tag = NBTTag.Compound({
    name: NBTTag.String("Sophia"),
    age: NBTTag.Byte(19),
});
`})}),`
`,t.jsxs(e.p,{children:["This library uses the native javascript ",t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",children:"ArrayBuffer"})," API. (Browser compatible)"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { NBTCompound, serializeNBT, deserializeNBT } from "@alan404/nbt";

let buffer: ArrayBuffer = serializeNBT(tag);
let anotherTag: NBTCompound = deserializeNBT(buffer);
`})}),`
`,t.jsx(e.p,{children:"This library also provides some support for serde-like functionality:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { NBTDocument, Field } from "@alan404/nbt";

class Person extends NBTDocument {
    @Field("String")
    name: string = "";

    @Field("Byte")
    age: number = 0;
}
`})}),`
`,t.jsx(e.p,{children:"See README for more details."})]})}function nn(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(x,{...n})}):x(n)}const sn=Object.freeze(Object.defineProperty({__proto__:null,buttons:tn,default:nn,id:Yt,name:qt,shortDesc:Vt,status:Kt,tech:Qt,types:en,year:Zt},Symbol.toStringTag,{value:"Module"})),on="nekotube",rn="NekoTube",an="an alternative YouTube video player",cn="2024",ln="wip",dn=["js","react","vite"],un=["website"],pn=[s.website("https://tube.deniz.blue/"),s.repo("TheAlan404/nekotube")];function _(n){const e={a:"a",p:"p",strong:"strong",...n.components},{Alert:o}=e;return o||mn("Alert"),t.jsxs(t.Fragment,{children:[t.jsx(o,{variant:"outline",color:"yellow",children:t.jsxs(e.p,{children:["Since YouTube started ",t.jsx(e.a,{href:"https://github.com/iv-org/invidious/issues/4734",children:"being more strict"}),`
invidious instances have become more scarce, so this project doesn't work that much anymore.`]})}),`
`,t.jsx(o,{variant:"outline",color:"yellow",children:t.jsxs(e.p,{children:["LightTube also ",t.jsx(e.a,{href:"https://blog.kuylar.dev/lighttube-end-of-development/",children:"stopped development"})]})}),`
`,t.jsxs(e.p,{children:["NekoTube is an alternative YouTube frontend. It uses other third party API's such as ",t.jsx(e.a,{href:"https://invidious.io/",children:"Invidious"}),`
and `,t.jsx(e.a,{href:"https://lighttube.org/",children:"LightTube"}),"."]}),`
`,t.jsxs(e.p,{children:["The most notable feature of NekoTube was the ability to use a ",t.jsx(e.strong,{children:"comment"})," as a source of ",t.jsx(e.strong,{children:"chapters"})]})]})}function hn(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(_,{...n})}):_(n)}function mn(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const bn=Object.freeze(Object.defineProperty({__proto__:null,buttons:pn,default:hn,id:on,name:rn,shortDesc:an,status:ln,tech:dn,types:un,year:cn},Symbol.toStringTag,{value:"Module"})),gn="polycules",jn="Polycules",yn="A website to graph 'polycules'",fn="2024",xn="up",_n=["ts","react","vite","nodejs"],$n=["website"],wn=[s.website("https://poly.deniz.blue"),s.repo("TheAlan404/polycules")];function $(n){const e={a:"a",p:"p",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx("iframe",{src:"https://poly.deniz.blue/default",width:"100%",height:"300",loading:"lazy",style:{border:"0",borderRadius:"0.5rem"}}),`
`,t.jsxs(e.p,{children:["This is basically ",t.jsx(e.a,{href:"https://polycul.es/",children:"polycul.es"})," but its more mobile-friendly and supports DID/OSDD/plurality/systems."]}),`
`,t.jsx(e.p,{children:"Made as a request from my friends who are polyamorous"})]})}function vn(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx($,{...n})}):$(n)}const Dn=Object.freeze(Object.defineProperty({__proto__:null,buttons:wn,default:vn,id:gn,name:jn,shortDesc:yn,status:xn,tech:_n,types:$n,year:fn},Symbol.toStringTag,{value:"Module"})),Mn="react-workspace",Tn="react-workspace",Sn="Infinitely pannable, accessible map-like workspace for React",kn="2024",In=void 0,Cn=["ts","react"],zn=["library"],An=[s.npm("@alan404/react-workspace"),s.repo("TheAlan404/react-workspace")];function w(n){const e={a:"a",p:"p",...n.components};return t.jsxs(e.p,{children:["Used by ",t.jsx(e.a,{href:"/projects/alphamath",children:"alphamath"})," and ",t.jsx(e.a,{href:"/projects/polycules",children:"Polycules"})]})}function On(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(w,{...n})}):w(n)}const Pn=Object.freeze(Object.defineProperty({__proto__:null,buttons:An,default:On,id:Mn,name:Tn,shortDesc:Sn,status:In,tech:Cn,types:zn,year:kn},Symbol.toStringTag,{value:"Module"})),Xn="ziltek",Nn="ZilTek",Bn="A school bell app.",Ln="2024",Fn="up",En=["ts","react","vite","nodejs"],Rn=["website","desktop"],Wn=[s.website("https://ziltek.deniz.blue/"),s.repo("TheAlan404/ZilTek")];function v(n){const e={img:"img",li:"li",p:"p",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"ZilTek plays school bells."}),`
`,t.jsx(e.p,{children:"Features:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Available offline"}),`
`,t.jsx(e.li,{children:"Web app"}),`
`,t.jsx(e.li,{children:"Desktop app"}),`
`,t.jsx(e.li,{children:"Remote control"}),`
`,t.jsx(e.li,{children:"No limits"}),`
`,t.jsx(e.li,{children:"Free"}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/assets/img/proj/ziltekscreenshot.png",alt:""})})]})}function Hn(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(v,{...n})}):v(n)}const Un=Object.freeze(Object.defineProperty({__proto__:null,buttons:Wn,default:Hn,id:Xn,name:Nn,shortDesc:Bn,status:Fn,tech:En,types:Rn,year:Ln},Symbol.toStringTag,{value:"Module"})),Gn="deniz.blue",Jn=n=>`https://${n}.${Gn}/`,Yn="events",qn="deniz'in Etkinlik Listesi",Vn="A website for finding out about events",Zn="2025",Kn="wip",Qn=["ts","vite","react","mongodb","prisma"],es=["website","restapi","mobile"],ts=[s.website(Jn("events"))];function D(n){const e={p:"p",...n.components},{Group:o}=e;return o||ss("Group"),t.jsxs(t.Fragment,{children:[t.jsx(e.p,{children:"A website im making so people can find events and such"}),`
`,t.jsx(e.p,{children:"It's Turkish only (maybe for now)"}),`
`,t.jsx(e.p,{children:"Here's an event I went to, displayed by my site:"}),`
`,t.jsx(o,{justify:"center",children:t.jsx("iframe",{src:"https://events.deniz.blue/embed/events/675423692476197849d7f5f8",width:"400",height:"450",loading:"lazy",style:{border:"0",borderRadius:"0.5rem"}})})]})}function ns(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(D,{...n})}):D(n)}function ss(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const os=Object.freeze(Object.defineProperty({__proto__:null,buttons:ts,default:ns,id:Yn,name:qn,shortDesc:Vn,status:Kn,tech:Qn,types:es,year:Zn},Symbol.toStringTag,{value:"Module"})),M=n=>Object.fromEntries(Object.entries(n).map(([e,o])=>{const r=e.split("/");return[r[r.length-1].replace(".mdx","").replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o]}).filter(([e])=>e[0]!=="_")),cs=M(Object.assign({"./blog/Hello.mdx":z,"./blog/_Internship.mdx":B,"./blog/_LibraryEnum.mdx":H})),is=M(Object.assign({"./proj/2021/nbs-js.mdx":te,"./proj/2022/denvis.mdx":ue,"./proj/2022/paginated-selects.mdx":_e,"./proj/2022/want-you-gone.mdx":Ce,"./proj/2023/mcman.mdx":Ee,"./proj/2023/oaalmun.mdx":Ze,"./proj/2024/alphamath.mdx":ct,"./proj/2024/carpanga.mdx":jt,"./proj/2024/discord-jsx.mdx":Tt,"./proj/2024/istanbus.mdx":Nt,"./proj/2024/minecraft-assets.mdx":Jt,"./proj/2024/nbt-ts.mdx":sn,"./proj/2024/nekotube.mdx":bn,"./proj/2024/polycules.mdx":Dn,"./proj/2024/react-workspace.mdx":Pn,"./proj/2024/ziltek.mdx":Un,"./proj/2025/events.mdx":os}));export{is as D,cs as a};
