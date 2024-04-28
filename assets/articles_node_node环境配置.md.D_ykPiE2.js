import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.CFgrr6nf.js";const g=JSON.parse('{"title":"node环境变量设置","description":"","frontmatter":{},"headers":[],"relativePath":"articles/node/node环境配置.md","filePath":"articles/node/node环境配置.md"}'),e={name:"articles/node/node环境配置.md"},t=n(`<h1 id="node环境变量设置" tabindex="-1">node环境变量设置 <a class="header-anchor" href="#node环境变量设置" aria-label="Permalink to &quot;node环境变量设置&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 首先在node.js的安装目录新建两个文件夹node_global和node_cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;F:\\dev\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;F:\\dev\\nodejs\\node_cache&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">================================================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;E:\\dev\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;E:\\dev\\nodejs\\node_cache&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D:\\dev\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D:\\dev\\nodejs\\node_cache&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接下来设置电脑环境变量，右键“我的电脑”=》属性=》高级系统设置=》环境变量 进入以下环境变量对话框</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新建环境变量 NODE_PATH，变量值: E:\\dev\\nodejs\\node_global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试是否配置成功，在cmd窗口中输入以下指定全局安装express模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> express</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # -g表示是全局安装</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装cnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置永久淘宝镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span></span></code></pre></div><blockquote><p><a href="https://www.cnblogs.com/xxiaonian/p/14490985.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/xxiaonian/p/14490985.html</a> 参考网址</p></blockquote><h2 id="解决-npm-install-报错-the-operation-was-rejected-by-your-operating-system" tabindex="-1">解决： npm install 报错 ‘The operation was rejected by your operating system‘ <a class="header-anchor" href="#解决-npm-install-报错-the-operation-was-rejected-by-your-operating-system" aria-label="Permalink to &quot;解决： npm install 报错 ‘The operation was rejected by your operating system‘&quot;">​</a></h2><p>通过网上查找资料，发现删除本机电脑用户目录下的.npmrc文件，可以解决当前问题，于是进行了尝试，果然解决了问题，文件 具体路径为 <code>C:\\Users\\{当前登录的用户名}\\.npmrc</code>。</p>`,5),l=[t];function p(h,k,r,o,d,F){return a(),i("div",null,l)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
