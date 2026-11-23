const{mkdirSync:K,readdirSync:R,readFileSync:F,writeFileSync:W}=require('node:fs')
const G='0<T15263922222221222122292229@AA@091291141'.split(9),
{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env,
N=65536,B=Buffer.alloc(N),D=new Int32Array(256)
for(let d of R(I)){
d='/'+d+'/'
let p=F(I+d+'program.bin'),q=F(I+d+'input.bin'),n=p.length,M=[],C=[],s=0,L=0,i=0,c=0,t=0,e=-1,k,g,a,b,u,v
while(e<0)++t>1e6?e=10:c>>>0>=n?e=9:(g=G[(k=p[c])>>4]?.charCodeAt(k&15)-48)!=g?e=5:(c+=1+(g>>3))>n?e=9:s<(g&3)?e=2:g&4&&s>255?e=3:
!k?e=0:k<3?D[s++]=k&1?p[c-1]<<24>>24:p.readInt32LE(c-4):k<4?s--:k<8?k&1?(a=D[b=s-g],D.copyWithin(b,b+1,s),D[s-1]=a):D[s]=D[s++-g+4]:
k<35?(b=D[s-1],s-=g-1,a=D[s-1],u=a>>>0,v=b>>>0,k>18&&k<23&&!b?e=4:D[s-1]=[a+b,a-b,Math.imul(a,b),a/b,a%b,u/v,u%v,-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,,a==b,a<b,u<v][k-16]):
k<51?(k<49||!D[--s]==k%2)&&(c+=p.readInt16LE(c-2)):k<52?C.push(c)>64?e=7:c=p[c-2]|p[c-1]<<8:k<53?c=C.pop()||(e=8):
k<66?(a=D[--s])>>>8?e=6:k<65?D[s++]=M[a]:M[a]=D[--s]:
k<81?L+(a=''+D[--s]).length>N?e=11:L+=B.write(a,L):k<82?L<N?B[L++]=D[--s]:e=11:k<83?D[s++]=q[i++]??-1:e=D[--s]&255
K(a=O+d,{recursive:!0})
W(a+'stdout.bin',B.slice(0,L))
W(a+'exit.txt',''+e)
}
