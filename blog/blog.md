# 你想知道的博客园个性化设置这里都有哦～

[[TOC]]

## 博客园个性化功能设置

> 博客园可以个性化设置一些功能，比如自定义博客园皮肤，添加 github 图标，添加天气小组件，自定义鼠标样式，设置背景渐变色等，接下来一一为大家讲解～

### 添加 GitHub 图标，链接到自己的 GitHub 主页

> 操作步骤：
>
> 1. 自己博客园头部的`管理`tab 页签点击去 => 点击`设置`tab 页签 => 找到`页首HTML代码` => 粘贴下面的代码，需要把我的`github仓库名字Ritusan`改成你自己需要链接到的`github地址`：

```html
<a href="https://github.com/Ritusan" target="_blank" class="github-corner" aria-label="View source on Github">
  <svg width="70" height="70" viewBox="0 0 250 250" style="color:#fff;" aria-hidden="true">
    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm" />
    <path
      d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
      fill="currentColor"
      class="octo-body"
    />
  </svg>
</a>
```

### 添加悬浮天气小组件

指路：点击我的博客园首页`右下角的天气小图标`，下方有`链接到心知天气`，然后点进去心知天气，自己注册或登陆一个账号，那上面会有提示你如果想在页面调用这种悬浮的天气小组件的话该怎么操作，会让你`复制一段代码`到自己的项目，如果你要在博客园首页展示悬浮天气小组件的话，需要把那一段心知天气提供的代码复制到自己的博客园设置里的`页脚HTML代码`

### 自定义鼠标样式

操作步骤：博客园设置 => `页面定制 css 代码` => 粘贴下面的代码到自己的博客园设置里，如果你有自定义的鼠标图片，就把 url 改成你的自定义鼠标图片地址：

```css
body {
  cursor: url('xxx.png'), auto;
}
```


### 设置博客园背景渐变色

操作步骤：博客园设置 => `页面定制 css 代码` => 粘贴下面的代码到自己的博客园设置里，如果你有喜欢的渐变色配置，就把 `background` 改成你喜欢的渐变色：

```css
body {
  background: linear-gradient(-20deg, #eaf6fd 0%, #f7f3ed 100%);
  background-blend-mode: screen;
  background-attachment: fixed;
}
```

### 设置博客园我的签名文字渐变色

操作步骤：博客园设置 => 页面定制 css 代码 => 粘贴下面的代码到自己的博客园设置里，如果你有喜欢的渐变色配置，就把 `background-image` 改成你喜欢的渐变色：

```css
#MySignature {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #fb929e, #aedefc, #b4b4ff);
}
```

### 设置博客园主题色为css变量

```css
:root {
  --base-color: #84b9e5;
  --base-bg-color: #69c4d0;
  --title-bg-color: #84b9e5;
  --base-text-gradient-color: linear-gradient(to right, #84b9e5, #69c4d0, #00aceb);
  --base-body-gradient-color: linear-gradient(-20deg, #eaf6fd 0%, #f7f3ed 100%);
}

/* github-corner */
.github-corner svg {
  fill: var(--base-color);
}
/* topbar */
.catListTitle {
  background: var(--title-bg-color);
  color: #fff;
}
#navList a:hover {
  color: #fff;
  background-color: var(--base-bg-color);
  text-decoration: none;
  text-shadow: none;
}
#MySignature {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--base-text-gradient-color);
}
body {
  background: var(--base-body-gradient-color);
  background-blend-mode: screen;
  background-attachment: fixed;
}
```
