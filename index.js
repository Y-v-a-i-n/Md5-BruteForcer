const e=require("readline-sync"),
    o=require("fs"),
    l=require("gradient-string"),
    s=l("#00317a","#0831FA"),
    t=l("#680202","#FF0000"),
    n=function(x){
        var F,A=function(x,F){
                var A=(0xFFFF&x)+(0xFFFF&F);
                return(x>>>0x10)+(F>>>0x10)+(A>>>0x10)<<0x10|0xFFFF&A
            },
            D=function(x,F,D,E,r,n){
                return A(function(x,F){
                    return x<<F|x>>>0x20-F
                }(A(A(F,x),A(E,n)),r),D)
            },
            E=function(x,F,A,E,r,n,B){
                return D(F&A|~F&E,x,F,r,n,B)
            },
            r=function(x,F,A,E,r,n,B){
                return D(F&E|A&~E,x,F,r,n,B)
            },
            n=function(x,F,A,E,r,n,B){
                return D(F^A^E,x,F,r,n,B)
            },
            B=function(x,F,A,E,r,n,B){
                return D(A^(F|~E),x,F,r,n,B)
            };
        x=x.toString();
        var C=[];
        for(F=0x0;F<0x8*x.length;F+=0x8)C[F>>0x5]|=(0xFF&x.charCodeAt(F/0x8))<<(0x1F&F);
        C[F>>0x5]|=0x80<<(0x1F&F),C[14+(F+0x40>>>0x5&-0x10)]=F;
        var t=0x67452301,
            o=0xEFCDAB89,
            u=0x98BADCFE,
            e=0x10325476;
        for(F=0x0;F<C.length;F+=0x10){
            var c=t,
                f=o,
                a=u,
                i=e;
                t=E(t,o,u,e,C[F+0x0],0x7,0xD76AA478),e=E(e,t,o,u,C[F+0x1],0xC,0xE8C7B756),u=E(u,e,t,o,C[F+0x2],0x11,0x242070DB),o=E(o,u,e,t,C[F+0x3],0x16,0xC1BDCEEE),t=E(t,o,u,e,C[F+0x4],0x7,0xF57C0FAF),e=E(e,t,o,u,C[F+0x5],0xC,0x4787C62A),u=E(u,e,t,o,C[F+0x6],0x11,0xA8304613),o=E(o,u,e,t,C[F+0x7],0x16,0xFD469501),t=E(t,o,u,e,C[F+0x8],0x7,0x698098D8),e=E(e,t,o,u,C[F+0x9],0xC,0x8B44F7AF),u=E(u,e,t,o,C[F+0xA],0x11,0xFFFF5BB1),o=E(o,u,e,t,C[F+0xB],0x16,0x895CD7BE),t=E(t,o,u,e,C[F+0xC],0x7,0x6B901122),e=E(e,t,o,u,C[F+0xD],0xC,0xFD987193),u=E(u,e,t,o,C[F+0xE],0x11,0xA679438E),t=r(t,o=E(o,u,e,t,C[F+0xF],0x16,0x49B40821),u,e,C[F+0x1],0x5,0xF61E2562),e=r(e,t,o,u,C[F+0x6],0x9,0xC040B340),u=r(u,e,t,o,C[F+0xB],0xE,0x265E5A51),o=r(o,u,e,t,C[F+0x0],0x14,0xE9B6C7AA),t=r(t,o,u,e,C[F+0x5],0x5,0xD62F105D),e=r(e,t,o,u,C[F+0xA],0x9,0x02441453),u=r(u,e,t,o,C[F+0xF],0xE,0xD8A1E681),o=r(o,u,e,t,C[F+0x4],0x14,0xE7D3FBC8),t=r(t,o,u,e,C[F+0x9],0x5,0x21E1CDE6),e=r(e,t,o,u,C[F+0xE],0x9,0xC33707D6),u=r(u,e,t,o,C[F+0x3],0xE,0xF4D50D87),o=r(o,u,e,t,C[F+0x8],0x14,0x455A14ED),t=r(t,o,u,e,C[F+0xD],0x5,0xA9E3E905),e=r(e,t,o,u,C[F+0x2],0x9,0xFCEFA3F8),u=r(u,e,t,o,C[F+0x7],0xE,0x676F02D9),t=n(t,o=r(o,u,e,t,C[F+0xC],0x14,0x8D2A4C8A),u,e,C[F+0x5],0x4,0xFFFA3942),e=n(e,t,o,u,C[F+0x8],0xB,0x8771F681),u=n(u,e,t,o,C[F+0xB],0x10,0x6D9D6122),o=n(o,u,e,t,C[F+0xE],0x17,0xFDE5380C),t=n(t,o,u,e,C[F+0x1],0x4,0xA4BEEA44),e=n(e,t,o,u,C[F+0x4],0xB,0x4BDECFA9),u=n(u,e,t,o,C[F+0x7],0x10,0xF6BB4B60),o=n(o,u,e,t,C[F+0xA],0x17,0xBEBFBC70),t=n(t,o,u,e,C[F+0xD],0x4,0x289B7EC6),e=n(e,t,o,u,C[F+0x0],0xB,0xEAA127FA),u=n(u,e,t,o,C[F+0x3],0x10,0xD4EF3085),o=n(o,u,e,t,C[F+0x6],0x17,0x04881D05),t=n(t,o,u,e,C[F+0x9],0x4,0xD9D4D039),e=n(e,t,o,u,C[F+0xC],0xB,0xE6DB99E5),u=n(u,e,t,o,C[F+0xF],0x10,0x1FA27CF8),t=B(t,o=n(o,u,e,t,C[F+0x2],0x17,0xC4AC5665),u,e,C[F+0x0],0x6,0xF4292244),e=B(e,t,o,u,C[F+0x7],0xA,0x432AFF97),u=B(u,e,t,o,C[F+0xE],0xF,0xAB9423A7),o=B(o,u,e,t,C[F+0x5],0x15,0xFC93A039),t=B(t,o,u,e,C[F+0xC],0x6,0x655B59C3),e=B(e,t,o,u,C[F+0x3],0xA,0x8F0CCC92),u=B(u,e,t,o,C[F+0xA],0xF,0xFFEFF47D),o=B(o,u,e,t,C[F+0x1],0x15,0x85845DD1),t=B(t,o,u,e,C[F+0x8],0x6,0x6FA87E4F),e=B(e,t,o,u,C[F+0xF],0xA,0xFE2CE6E0),u=B(u,e,t,o,C[F+0x6],0xF,0xA3014314),o=B(o,u,e,t,C[F+0xD],0x15,0x4E0811A1),t=B(t,o,u,e,C[F+0x4],0x6,0xF7537E82),e=B(e,t,o,u,C[F+0xB],0xA,0xBD3AF235),u=B(u,e,t,o,C[F+0x2],0xF,0x2AD7D2BB),o=B(o,u,e,t,C[F+0x9],0x15,0xEB86D391),t=A(t,c),o=A(o,f),u=A(u,a),e=A(e,i)
            }
        return function(x){
            for(var F="",A="0123456789abcdef",D=0x0;D<x.length;D++)
                for(var E=0x0;E<0x20;E+=8)F+=A.charAt(x[D]>>E+0x4&0xF)+A.charAt(x[D]>>E&0xF);
            return F
        }([t,o,u,e])
    },
    c="\n    ███╗   ███╗██████╗ ███████╗      ██████╗ ██████╗ ██╗   ██╗████████╗███████╗███████╗ ██████╗ ██████╗  ██████╗███████╗██████╗ \n    ████╗ ████║██╔══██╗██╔════╝      ██╔══██╗██╔══██╗██║   ██║╚══██╔══╝██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗\n    ██╔████╔██║██║  ██║███████╗█████╗██████╔╝██████╔╝██║   ██║   ██║   █████╗  █████╗  ██║   ██║██████╔╝██║     █████╗  ██████╔╝\n    ██║╚██╔╝██║██║  ██║╚════██║╚════╝██╔══██╗██╔══██╗██║   ██║   ██║   ██╔══╝  ██╔══╝  ██║   ██║██╔══██╗██║     ██╔══╝  ██╔══██╗\n    ██║ ╚═╝ ██║██████╔╝███████║      ██████╔╝██║  ██║╚██████╔╝   ██║   ███████╗██║     ╚██████╔╝██║  ██║╚██████╗███████╗██║  ██║\n    ╚═╝     ╚═╝╚═════╝ ╚══════╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝\n                                                                                                                            \n";
let r=0x0;
setInterval((()=>{
    if(0x0==r){
        console.clear(),console.log(s(c));
        const l=e.question(s("   What is the hash : "));
        if(l&&"098f6bcd4621d373cade4e832627b4f6".length==l.length&&l.match(/([0-9])/g)[0x0]&&l.match(/([A-Za-z])/g)[0x0]){
            let i=0x0;
            setInterval((()=>{
                if(0x0==i){
                    console.clear(),console.log(s(c));
                    const a=e.question(s("   What is the WordList : "));
                    a?o.existsSync("./input/"+a)?o.readFile("./input/"+a,"utf-8",((e,o)=>{
                        if(e)console.clear(),console.log(t(c+"\n   An error has been occurred.")),setTimeout((()=>{
                            i=0x0
                        }),0x7D0);
                        else{
                            console.clear(),console.log(t(c));
                            var r=!0x1;
                            String(o).replace(/\r|\"/gi,"").split("\n").forEach((e=>{
                                0==r&&(n(e)==l?(r=!0,console.clear(),console.log(s(c)),console.log(s(e+"="+n(e)))):console.log(t(e+"="+n(e))))
                            }))
                        }
                    })):(console.clear(),console.log(t(c+"\n   The WordList does not exist.")),setTimeout((()=>{
                        i=0x0
                    }),0x7D0)):(console.clear(),console.log(t(c+"\n   Please put the WordList")),setTimeout((()=>{
                        r=0x0
                    }),0x7D0))
                }
                i=0x1
            }),0x3E8)
        }else console.clear(),console.log(t(c+"\n   Is not md5.")),setTimeout((()=>{
            r=0x0
        }),0x7D0)
    }
    r=0x1
}),0x3E8);