(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{44:function(e,t,a){e.exports=a.p+"dist/layout-tree_design.png"},51:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var l=a(1),n=a.n(l),r=a(41),c=a.n(r);class m extends n.a.Component{componentDidMount(){prettyPrint();let e=document.getElementById("api-nav").getElementsByTagName("li");for(let t=0;t<e.length;t++)e[t].setAttribute("active","no");c()(".apimenu-item").attr("active","no"),c()("#calculate").attr("active","yes"),window.image2d_docs_api_navHelper={small:[],little:[],type:"calculate"};let t=c()(".title.small"),a=c()(".title.little");for(let e=0;e<t.length;e++)window.image2d_docs_api_navHelper.small[e]={top:t[e].offsetTop};for(let e=0;e<a.length;e++)window.image2d_docs_api_navHelper.little[e]={top:a[e].offsetTop}}render(){return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"绘图的时候难免要进行一些比较复杂的计算，这里根据使用场景不同，提供了几种常见的辅助计算。"),n.a.createElement("h4",{className:"title small"},"二维简单坐标变换"),n.a.createElement("p",null,"简单坐标变换分为二类：独立的变换和变换对象dot。"),n.a.createElement("h6",{className:"title little"},"独立的变换"),n.a.createElement("p",null,"点（x,y）围绕中心（cx,cy）旋转deg度："),n.a.createElement("pre",{className:"prettyprint lang-js"},"$$.rotate(cx, cy, deg, x, y);"),n.a.createElement("p",null,"点（x,y）沿着向量（ax,ay）方向移动距离d："),n.a.createElement("pre",{className:"prettyprint lang-js"},"$$.move(ax, ay, d, x, y);"),n.a.createElement("p",null,"点（x,y）围绕中心（cx,cy）缩放times倍："),n.a.createElement("pre",{className:"prettyprint lang-js"},"$$.scale(cx, cy, times, x, y);"),n.a.createElement("h6",{className:"title little"},"变换对象"),n.a.createElement("p",null,"dot表示一个会移动的二维点，内部维护着「前进方向向量」、「当前位置」和「中心坐标」。首先，我们来看看如何获取一个dot实例："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var dot=$$.dot({\n    // 前进方向、中心坐标和当前位置（都可选，下列是缺省值）\n    d: [1, 1],c: [0, 0],p: [0, 0]\n});"),n.a.createElement("p",null,"下列是一些变换方法，通过这些方法可以控制点dot的坐标改变或获取当前坐标。"),n.a.createElement("p",null,"前进方向以当前位置为中心，旋转deg度（注意，改变的是前进方向，不是当前坐标）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"dot.rotate(deg);"),n.a.createElement("p",null,"沿着当前前进方向前进d："),n.a.createElement("pre",{className:"prettyprint lang-js"},"dot.move(d);"),n.a.createElement("p",null,"围绕中心坐标缩放："),n.a.createElement("pre",{className:"prettyprint lang-js"},"dot.scale(times);"),n.a.createElement("p",null,"返回当前位置："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var p=dot.value();"),n.a.createElement("h4",{className:"title small"},"Matrix4三维坐标变换"),n.a.createElement("p",null,"Matrix4是一个列主序存储的4x4矩阵，使用该矩阵对象的第一步是像下面这样获取该对象，参数initMatrix4可选，你可以传递一个初始化矩阵或默认采用单位矩阵E初始化。"),n.a.createElement("pre",{className:"prettyprint lang-js"},"var matrix4=$$.Matrix4(initMatrix4);"),n.a.createElement("p",null,"和前面的二维坐标变换不同的是，变换不是直接作用在具体的点上，而是先求解出一系列变换的变换矩阵，最后应用在具体点上。"),n.a.createElement("h6",{className:"title little"},"基本运算"),n.a.createElement("p",null,"返回matrix4当前记录的内部矩阵："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var val=matrix4.value();"),n.a.createElement("p",null,"比如采用默认值初始化的矩阵对象，打印结果如下："),n.a.createElement("pre",{className:"prettyprint lang-js"},"(16) [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]"),n.a.createElement("p",null,"二个矩阵相乘："),n.a.createElement("pre",{className:"prettyprint lang-js"},"matrix4.multiply(newMatrix4[, flag]);"),n.a.createElement("p",null,"第一个参数应该是一个和value打印出来一样格式的一维数组，列主序存储。flag默认false，可不传，表示左乘，即newMatrix4 × matrix4，如果设置flag为true，表示右乘。"),n.a.createElement("p",null,"把变换矩阵作用在具体的点上："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var position=matrix4.use(x, y, z, w);"),n.a.createElement("p",null,"矩阵的目的是对坐标进行变换，use方法返回齐次坐标(x, y, z, w)经过matrix4矩阵变换后的坐标值。其中z和w可以不传递，默认0和1，返回的坐标值是一个齐次坐标。"),n.a.createElement("h6",{className:"title little"},"坐标变换"),n.a.createElement("p",null,"沿着向量(a, b, c)方向移动距离dis（其中c可以不传，默认0）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"matrix4.move(dis, a, b, c);"),n.a.createElement("p",null,"以点(cx, cy, cz)为中心，分别在x、y和z方向上缩放xTimes、yTimes和zTimes倍（其中cx、cy和cz都可以不传递，默认0）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"matrix4.scale(xTimes, yTimes, zTimes, cx, cy, cz);"),n.a.createElement("p",null,"围绕射线(a1, b1, c1) -> (a2, b2, c2)旋转deg度（方向由右手法则确定）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"matrix4.rotate(deg, a1, b1, c1, a2, b2, c2);"),n.a.createElement("p",null,"a1、b1、c1、a2、b2和c2这6个值在设置的时候，不是一定需要全部设置，还有以下可选："),n.a.createElement("ul",null,n.a.createElement("li",null,"只设置了a1和b1，表示在xoy平面围绕（a1, b1）旋转。"),n.a.createElement("li",null,"只设置三个点(设置不足六个点都认为只设置了三个点)，表示围绕从原点出发的射线旋转。")),n.a.createElement("h4",{className:"title small"},"曲线插值"),n.a.createElement("p",null,"给定若干个不连续的点，在这些点之间插入足够的点，来使得这些点连接起来是一个平滑的曲线。求解在何处插入新的点就是这里需要解决的问题。"),n.a.createElement("h6",{className:"title little"},"Cardinal"),n.a.createElement("p",null,"用一个N次多项式函数求解出若干个点的插值函数是一个可行的方法，不过在一次插值中，当插值点数量增加的时候，N越来越大，很容易带来收敛困难，也就是Runge现象。"),n.a.createElement("p",null,"因此在这里，我们内部选择三次插值Hermite法（N=3）。在需要插值的点的个数比较多的时候，选择分段求解，也就是Cardinal插值法。"),n.a.createElement("p",null,"首先，我们需要获取插值对象实例："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var cardinal=$$.cardinal();"),n.a.createElement("p",null,"设置张弛系数(应该在点的位置设置前设置)："),n.a.createElement("pre",{className:"prettyprint lang-js"},"cardinal.setT(t);"),n.a.createElement("p",null,"该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重。"),n.a.createElement("p",null,"设置点的位置："),n.a.createElement("pre",{className:"prettyprint lang-js"},"cardinal.setP([[x,y],[x,y],...]);"),n.a.createElement("p",null,"经过上面的设置，插值对象就可以求值了。比如x=a，其中a在需要插值的点之间（边界也可以），你可以这样求解出y值："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var y=cardinal(a);"),n.a.createElement("h4",{className:"title small"},"布局"),n.a.createElement("p",null,"在绘制一些常见图形的时候，比如关系图，单个结点或连线并不难，麻烦的是位置的计算等，和图形模块不同，布局就是专门计算一些特殊图形位置的模块，用一句通俗的话说就是：决定什么元素绘制在哪里。因此，布局应该和具体的绘图方法无关，她只关心位置的计算。"),n.a.createElement("h6",{className:"title little"},"树布局"),n.a.createElement("p",null,"调用treeLayout方法，传递配置config（后续也可以提供config方法来修改配置）就可以获取树布局实例："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var treeLayout=$$.treeLayout(config);"),n.a.createElement("p",null,"config是一个键值对格式的配置json，由于原始数据格式不一定，你需要传递数据格式的配置（必须的，可选部分在后面说明）："),n.a.createElement("ul",null,n.a.createElement("li",null,'"root":function(initTree){ /*返回根结点*/ }'),n.a.createElement("li",null,'"id":function(treedata){ /*返回id*/ }'),n.a.createElement("li",null,'"child":function(parentTree, initTree){ /*返回孩子结点*/ }')),n.a.createElement("p",null,"你还必须配置绘图方法，因为布局并不知道如何绘制："),n.a.createElement("pre",{className:"prettyprint lang-js"},"treeLayout.drawer(function(data){ /*绘制*/ });"),n.a.createElement("p",null,"data是计算后带有结点坐标的数据，格式如下："),n.a.createElement("pre",{className:"prettyprint lang-js"},'{node: {\n    "XXX":{\n        children: []\n        data: any\n        id: string||number\n        left: number\n        pid: any\n        top: number\n    },\n    ...\n}, root: string||number, size: number, deep: number}'),n.a.createElement("p",null,"node记录的是每个结点的信息，每个结点中的left和top就是该结点应该绘制的位置，data是结点的原始数据。"),n.a.createElement("p",null,"上面说明的都配置好以后，就可以启动布局计算并绘图了："),n.a.createElement("pre",{className:"prettyprint lang-js"},"treeLayout(data);"),n.a.createElement("h6",{className:"title sub-little"},"基本模型"),n.a.createElement("img",{src:a(44),style:{float:"right",backgroundColor:"#fff"},width:"260"}),n.a.createElement("p",null,"可能你已经发现了，树图分为很多种（圆形树，倒树等），上面并没有配置这些信息（有接口提供配置，稍后说明）。是的，没有配置的时候，默认选择的是基本模型，那什么是基本模型？"),n.a.createElement("p",null,"右图是某个具体例子的基本模型，其中每个红色矩形都是一个1x1的正方形，坐标原心位于左上角绿色顶点。"),n.a.createElement("pre",{className:"prettyprint lang-js"},'"油画":{\n    children: [];\n    data: (2) ["油画", "手绘"];\n    id: "油画";\n    left: 1.5;\n    pid: "手绘";\n    show: true;\n    top: 1.5\n}'),n.a.createElement("p",null,"主要看看top和left，和右边的图对应，是不是很清晰了。tree布局的核心位置计算就是把每个结点看成一个1x1的正方形，别的具体树图都是从此出发计算得出的，这就是基本模型。"),n.a.createElement("h6",{className:"title sub-little"},"配置模型"),n.a.createElement("p",null,"虽然从基本模型出发计算具体的树图已经很容易了，不过为了方便，依旧对常见的树图提供了下列配置选项："),n.a.createElement("ul",null,n.a.createElement("li",null,"type:LR|RL|BT|TB|circle，配置树图的类型（默认原始模型，会忽略下列全部设置）。"),n.a.createElement("li",null,"width,height:number，设置树图的宽和高（如果类型是LR|RL|BT|TB需要设置）。"),n.a.createElement("li",null,"cx,cy:number，设置圆心（如果类型是circle需要设置）。"),n.a.createElement("li",null,"radius:number，设置树图半径（如果类型是circle需要设置）。"),n.a.createElement("li",null,"begin-deg,deg:number，开始和跨越弧度（可选，如果类型是circle设置该参数有效）。")),n.a.createElement("h4",{className:"title small"},"动画轮询"),n.a.createElement("p",null,"绘图的时候，为了实现动画效果，你除了可以使用画布或css天然的动画相关属性，还可以使用ES绘制每一帧的方式实现。为了方便你绘制我们提供了下面方法："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var stop=$$.animation(function(deep){\n    // deep取值0-1，表示动画进度\n}, speeds, function(deep){\n    // deep和上面一样，提供的原因是有时候结束回调是stop方法触发而不是动画结束了\n});"),n.a.createElement("p",null,"该方法有三个参数：分别表示画帧方法、动画时长和动画结束回调（动画时长单位毫秒，最后二个均可选）。"),n.a.createElement("p",null,"如果你希望动画立刻结束，可以调用下面的方法强行提前停止："),n.a.createElement("pre",{className:"prettyprint lang-js"},"stop();"))}}}}]);