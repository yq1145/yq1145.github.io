import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.Baa73rbD.js";const B=JSON.parse('{"title":"1. 安装","description":"","frontmatter":{},"headers":[],"relativePath":"articles/frida/抓包环境配置.md","filePath":"articles/frida/抓包环境配置.md"}'),l={name:"articles/frida/抓包环境配置.md"},h=n(`<p>Charles 配置</p><h1 id="_1-安装" tabindex="-1">1. 安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1. 安装&quot;">​</a></h1><p><a href="https://www.cnblogs.com/hancel/p/11245286.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/hancel/p/11245286.html</a></p><h1 id="_2-配置charles-和drony-抓包" tabindex="-1">2. 配置charles 和Drony 抓包 <a class="header-anchor" href="#_2-配置charles-和drony-抓包" aria-label="Permalink to &quot;2. 配置charles 和Drony 抓包&quot;">​</a></h1><p>参考网址： <a href="https://blog.csdn.net/wyx1275/article/details/113249468" target="_blank" rel="noreferrer">https://blog.csdn.net/wyx1275/article/details/113249468</a></p><p>记录fidder 的配置： <a href="https://zhuanlan.zhihu.com/p/20878833" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/20878833</a></p><p>使用openssl 对charles 证书进行处理，参考网址： <a href="https://zhuanlan.zhihu.com/p/409343172" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/409343172</a></p><h2 id="使用openssl-对charles-证书进行处理" tabindex="-1">使用openssl 对charles 证书进行处理： <a class="header-anchor" href="#使用openssl-对charles-证书进行处理" aria-label="Permalink to &quot;使用openssl 对charles 证书进行处理：&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -subject_hash_old</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo.pem</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 得到如下结果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rogram</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">penSSL-Win64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -subject_hash_old</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> demo.pem</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">93ed2ee1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-----BEGIN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CERTIFICATE-----</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MIIFRjCCBC6gAwIBAgIGAYlANPZAMA0GCSqGSIb3DQEBCwUAMIGnMTgwNgYDVQQD</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DC9DaGFybGVzIFByb3h5IENBICgxMCBKdWwgMjAyMywgREVTS1RPUC1RVEszUUFQ</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">KTElMCMGA1UECwwcaHR0cHM6Ly9jaGFybGVzcHJveHkuY29tL3NzbDERMA8GA1UE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CgwIWEs3MiBMdGQxETAPBgNVBAcMCEF1Y2tsYW5kMREwDwYDVQQIDAhBdWNrbGFu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ZDELMAkGA1UEBhMCTlowHhcNMjMwNzA5MTQyOTIwWhcNMjQwNzA4MTQyOTIwWjCB</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pzE4MDYGA1UEAwwvQ2hhcmxlcyBQcm94eSBDQSAoMTAgSnVsIDIwMjMsIERFU0tU</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T1AtUVRLM1FBUCkxJTAjBgNVBAsMHGh0dHBzOi8vY2hhcmxlc3Byb3h5LmNvbS9z</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">c2wxETAPBgNVBAoMCFhLNzIgTHRkMREwDwYDVQQHDAhBdWNrbGFuZDERMA8GA1UE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CAwIQXVja2xhbmQxCzAJBgNVBAYTAk5aMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MIIBCgKCAQEAkIb8+ST3Dgasz/BWUIZDqf/6kgHEHMjEx+OyviAhwM4ni6TihyW8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T1M3xCnrnIfATlnTHnBfxL1WVX/UezHt2dZJXVj/5fY1y+09TYepacRpUn9Bv4zX</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1RqgBB9szToFI0HDv8uxwcBGHZb9leO1l2zaPBYS3mOJ9OEvp6iKHJrfUM6QJQmi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aid1UPcLmJKZd8E7N/jJScg60DRl4ZlmsDds9WnHnJjYOyzivfa4SwrkNnhdGHpt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Zn2LVGcVPKlOi73D7b9VsToG215OhSv6M451rvrN5FJpq+mn/MnuZE+JtxcttaQ7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6z4xaeZUDTz69ox6USnRX4giT5q0mu8cnQIDAQABo4IBdDCCAXAwDwYDVR0TAQH/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BAUwAwEB/zCCASwGCWCGSAGG+EIBDQSCAR0TggEZVGhpcyBSb290IGNlcnRpZmlj</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">YXRlIHdhcyBnZW5lcmF0ZWQgYnkgQ2hhcmxlcyBQcm94eSBmb3IgU1NMIFByb3h5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aW5nLiBJZiB0aGlzIGNlcnRpZmljYXRlIGlzIHBhcnQgb2YgYSBjZXJ0aWZpY2F0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ZSBjaGFpbiwgdGhpcyBtZWFucyB0aGF0IHlvdSdyZSBicm93c2luZyB0aHJvdWdo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IENoYXJsZXMgUHJveHkgd2l0aCBTU0wgUHJveHlpbmcgZW5hYmxlZCBmb3IgdGhp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cyB3ZWJzaXRlLiBQbGVhc2Ugc2VlIGh0dHA6Ly9jaGFybGVzcHJveHkuY29tL3Nz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4wDgYDVR0PAQH/BAQDAgIEMB0GA1UdDgQW</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BBQ2O2fvMx7/5fB7dKknZeTtq14//DANBgkqhkiG9w0BAQsFAAOCAQEAj3xLEE9o</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AfxVBkQuahvXpQGQB+NKq0YlXW2EmmFbmTxIy3joNxumm0n+gqyLkHaj8W8PPIGx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Az6lKi/NA8xIMTG3JOfy1/X2/7pl+kqWqlHagr7iVvKUaQ9VDl0GqdyaYeVsKNXI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lWzRxjmt3YxcugJvrLFob4bMk5JXugwrhTdrpCSNSmUHIuXGdVDcFCvQQ9TVxfiI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ejyobbuPXNn3Xkb1Af2hPxJJOk3Mx3hbPGZK6IUYZEpQ6Eqv3NzUS4kEiw2Lvorj</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">W+xO+y+KrNe4oRqDpg+QWDrI3e5QPLo+XUKPRfG3ydYfvxHTt1NlfX9fFEuU0Z1M</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Y/14LZ8ACY4m8A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">==</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-----END</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CERTIFICATE-----</span></span></code></pre></div><p><strong>将demo.pem证书文件改名为得到的---&gt;&gt;&gt; 93ed2ee1.0</strong></p><p>将该文件移动到“/system/etc/security/cacerts/”下；</p><p>解决charles乱码</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vmarg.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Dfile.encoding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UTF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span></code></pre></div><h2 id="设置dolly-代理" tabindex="-1">设置dolly 代理 <a class="header-anchor" href="#设置dolly-代理" aria-label="Permalink to &quot;设置dolly 代理&quot;">​</a></h2><p>左滑进入setting页面--&gt;点击WIFI 设置页面--&gt; 设置hostname为本机的ip，Port 为charles监听的端口 --&gt; 将proxy type 设置为manul</p><p>返回setting 页面。设置 Filter和Rule --&gt; filter 设置为direct all -- &gt; rule 中选择要监听的app 并设置Action 为 local proxy chain</p><h2 id="重新设置本机的代理" tabindex="-1">重新设置本机的代理 <a class="header-anchor" href="#重新设置本机的代理" aria-label="Permalink to &quot;重新设置本机的代理&quot;">​</a></h2><p>ip：127.0.0.1 端口为： 8020 与drony 一致</p>`,18),p=[h];function e(t,k,r,c,d,F){return i(),a("div",null,p)}const o=s(l,[["render",e]]);export{B as __pageData,o as default};
