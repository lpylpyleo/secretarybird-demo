---
name: THE PROSECUTION — 蛇鹫案卷
description: 一份摊开的检察卷宗：档案纸面上的编辑级滚动叙事
colors:
  stamp: "#c23a1d"
  stamp-deep: "#9c2c13"
  paper: "#f2ecdf"
  paper-hi: "#faf5e9"
  mount-white: "#fffdf6"
  ink: "#1b1611"
  ink-soft: "#5a5245"
  rule: "#c8bda9"
  coal: "#16120e"
  coal-ink: "#eadfc8"
  coal-soft: "#a89a80"
typography:
  display:
    fontFamily: '"Bodoni Moda", "Didot", serif'
    fontSize: "clamp(2.8rem, 6.6vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: '"Bodoni Moda", "Didot", serif'
    fontSize: "clamp(1.9rem, 4.6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Spectral", "Noto Serif SC", "Songti SC", serif'
    fontSize: "clamp(1rem, 0.92rem + 0.35vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.75
  body-zh:
    fontFamily: '"Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "clamp(1rem, 0.92rem + 0.35vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"Courier Prime", "Courier New", monospace'
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.22em"
rounded:
  sharp: "0px"
  pin: "50%"
spacing:
  pad-x: "clamp(1.25rem, 5vw, 5rem)"
  gap-col: "clamp(1.5rem, 4vw, 4rem)"
  section-y: "clamp(5rem, 12vh, 9rem)"
components:
  exhibit-mount:
    backgroundColor: "{colors.mount-white}"
    padding: "clamp(0.6rem, 1.2vw, 1rem) clamp(0.6rem, 1.2vw, 1rem) 0"
    rounded: "{rounded.sharp}"
  exhibit-tag:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.paper-hi}"
    typography: "{typography.label}"
    padding: "0.45em 0.9em"
    rounded: "{rounded.sharp}"
  stamp-seal:
    textColor: "{colors.stamp}"
    typography: "{typography.label}"
    padding: "0.6em 1.1em"
    rounded: "{rounded.sharp}"
  charges-ticker:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.paper-hi}"
    typography: "{typography.label}"
    padding: "0.55em 0"
  scene-pin:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.paper-hi}"
    rounded: "{rounded.pin}"
    size: "1.9em"
---

# Design System: THE PROSECUTION — 蛇鹫案卷

## Overview

**Creative North Star: "摊开的检察卷宗"（The Open Case File）**

整个页面不为"展示一只鸟"，而是呈现一份摊开在桌面上的公诉案卷：封面、案号、物证装裱照、账目式证据清单、印章与判决。一切视觉决定都从"档案文书"这个物质前提出发——纸是暖奶油色的档案纸，字是打字机与雕版活字，照片不是插图而是被装裱、编号、盖章呈堂的证物。版式是编辑级的：didone 巨字负字距、发丝规线、紧缩成对的网格柱，密度高但留白干净，靠字体与规线而不是装饰撑起高级感。

反差点是刻意的：全页只有一枚橙红（印泥色），只在"呈堂"的瞬间出现；全页只有一次明暗反转（作案现场一段沉入煤黑夜视），其余全部是纸。动效是文书的物理：打字机逐字、印章砸落、卷宗红线随滚动生长——翻译案卷动作，不做装饰性漂浮。

**Key Characteristics:**
- 档案纸双色底（纸面与纸面高光），白纸仅用于物证装裱衬底
- 三字体严格分工：Bodoni Moda 宣告、Courier Prime 文书标签、Spectral + 宋体正文
- 唯一强调色为印泥橙红；橡皮章全站仅两枚
- 照片一律装裱为"物证"：白衬底、发丝边框、紧投影、±1° 微旋转、EXHIBIT 编号牌
- 全站方角（圆的场合只有现场图钉）；深度靠紧投影与纸的环境光，不用弥散阴影
- 动效一律 from-tween + once:true；无 JS 时内容完整可读；`prefers-reduced-motion` 全停

## Colors

暖奶油纸面 + 墨色文字 + 一枚印泥橙红；仅在作案现场段落使用一次煤黑反转。

### Primary
- **印泥橙红 Inkpad Vermilion** (#c23a1d)：呈堂责任色。只出现在 EXHIBIT 牌、橡皮章、罪名 ticker 底、打字机光标、现场红线与图钉、选区高亮、滚动条 hover。它是"这一处被官方确认过"的信号。
- **深印泥 Deep Vermilion** (#9c2c13)：橙红的文书化变体——正文里的关键词强调（账目单元格、封面副题）、超大证据数字。用于需要入纸而非浮于纸面的强调。

### Neutral
- **档案纸 Dossier Paper** (#f2ecdf)：全页底色，一切叙事的桌面。
- **纸面高光 Paper Highlight** (#faf5e9)：封面内框与印章/强调之上的最浅纸层，模拟灯下纸面。
- **装裱衬白 Mount White** (#fffdf6)：仅作物证照片的装裱衬底（比任何纸都白），让照片像冲印后贴在卡纸上的实物。
- **卷宗墨 Dossier Ink** (#1b1611)：主文字、双线规线的实线、表格外框、封面内边框。
- **软墨 Soft Ink** (#5a5245)：次级文字——图注、表格行头、案号栏标签、colo­phon。
- **规线 Rule Beige** (#c8bda9)：1px 发丝分隔线、装裱边框、表格行线、双线规线的内线。

### 反转段（仅作案现场一次）
- **煤黑 Coal Black** (#16120e)：作案现场整段底色。
- **煤上米 Coal Ink** (#eadfc8)：反转段主文字与双线规线实线。
- **煤上软米 Coal Soft** (#a89a80)：反转段次级文字与内线。

### Named Rules
**两枚印章规则。** 橡皮章全站上限两枚：封面一枚（斜盖 9°）、判决一枚（-6°）。第三个印章即破坏卷宗的真实性——稀缺就是它成立的原因。
**橙红不作大面积正文规则。** 橙红的最大连续面积是罪名 ticker 的一条横带与装裱牌；它永远不作为段落底色或大块背景，更不出现在纸段正文文字上。大面积色块只能是纸或煤黑。
**反转只发生一次规则。** 煤黑夜视全站仅作案现场一段使用一次；第二段深色即稀释对比。

## Typography

**Display Font:** Bodoni Moda（fallback Didot, serif）
**Label/Mono Font:** Courier Prime（fallback Courier New）
**Body Font:** Spectral（西文/拉丁学名/斜体）+ Noto Serif SC / Songti SC（中文正文）

**Character:** 雕版 didone 负责"宣告"，打字机等宽体负责"文书",宋体负责"供述"。三套字气质悬殊但从不互换岗位——这正是卷宗感（法院公函 × 档案打字 × 书面证词）的来源。

### Hierarchy
- **Display / 报头** (Bodoni Moda 800, clamp(2.8rem, 6.6vw, 7rem), lh 0.92, -0.02em)：封面巨字 THE PROSECUTION。多行逐行入场，行内 `overflow:hidden` 遮罩。
- **Display / 巨字** (Bodoni Moda 900 italic, clamp(6rem, 22vw, 22rem), lh 0.85)：STOMP. 与判决级大数字（bigstat 800, clamp(4.5rem, 13vw, 12rem)）共用这一档的体量，橙红深号。
- **Headline / 章节标题** (Bodoni Moda 700, clamp(1.9rem, 4.6vw, 4.2rem), lh 1.18)：`data-typewrite` 打字机逐字显现的中文标题，光标为 0.08em 橙红竖条、0.9s steps(1) 闪烁。
- **Label / 文书标签** (Courier Prime 700, 0.7–0.85rem, letter-spacing 0.18–0.32em, 视场合大写)：案号、FORM X-1 页眉、EXHIBIT 牌、表格行头、图注编号、罪名 ticker、签名行（0.5em 字距）。
- **Body / 正文** (Spectral 400 + Noto Serif SC, clamp(1rem, 0.92rem + 0.35vw, 1.125rem), lh 1.75，中文段 max-width 62ch)：拉丁学名用 `<i>` 切回 Spectral 斜体；全页 `font-variant-numeric: tabular-nums`。

### Named Rules
**三岗不替规则。** Bodoni 永不写正文，Courier 永不写句子，宋体永不写大标题。新增任何版面元素，先问它属于"宣告 / 文书 / 供述"哪一岗。
**宽字距只属于等宽体规则。** 0.2em 以上的 letter-spacing 只出现在 Courier Prime 场合；衬线大标题反而是负字距（-0.02em）。

## Layout

单列滚动叙事，桌面内容最大宽 1400px 居中；左右页边距 `--pad-x: clamp(1.25rem, 5vw, 5rem)`，段落纵向节奏 `clamp(5rem, 12vh, 9rem)` 顶 / `clamp(4rem, 10vh, 7rem)` 底。

- **封面**：满屏（100svh）弹性容器，内为 1px 墨框 + 5px offset 发丝 outline 的"封面纸"；内网格 7fr / 5fr（文左照右），列距 `--gap-col: clamp(1.5rem, 4vw, 4rem)`。
- **文书章节**（FORM X-1…X-4）：`file-grid` 两柱 5fr / 7fr 与 7fr / 5fr 交替（照与文左右换位），`align-items: start`。
- **作案现场**：整段出血煤黑（占满视宽，不受 max-width 约束），内网格 8fr / 4fr（大图 + 窄注栏）。
- **判决**：破网格居中，max-width 60rem，正文 56ch。

**断点**：1024px 全部两柱塌为单柱（反转网格恢复照上文下，照片限 26–32em 宽、hero 居中）；700px 报头降至 `clamp(2.6rem, 13vw, 4rem)`、案号元数据两列、页眉标签松绑换行、账目表行头变块级。移动端无内容隐藏，只降密度。

## Elevation & Depth

系统近乎平面；深度只来自三种来源，且全部服务于"纸"的物理：① 紧贴的装裱投影（纸张的厚度感）；② `body::before` 一层 26s 缓漂移的纸面环境光（全站唯一常驻动层的"活体"层）；③ 明暗反转本身。没有弥散的环境阴影、没有毛玻璃、没有梯度浮层。

### Shadow Vocabulary
- **装裱投影** (`box-shadow: 8px 10px 22px -12px rgba(27, 22, 17, 0.5)`)：仅物证装裱。偏移大、扩散负值——影子紧咬纸边，是冲印照片贴在纸上的厚度，不是浮起。
- **封面纸投影** (`box-shadow: 0 18px 42px -26px rgba(27, 22, 17, 0.35)`)：仅封面内框一次，暗示封面纸压在外层纸面上。
- **图钉投影** (`box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.5)`)：仅煤黑段的现场图钉，错觉其浮在照片表面。

### Named Rules
**装裱一体规则。** 发丝边框、近距投影、±1° 微旋转、白衬底四者视为物证装裱的一个整体；单独拿走任何一项（如去掉边框只留阴影）都判为离体。
**纸不浮起规则。** 除上述三个指定场合外，任何卡片、表格、段落不加 box-shadow；层级用明暗与规线表达。

## Shapes

全站方角（`border-radius: 0`，连滚动条滑块也是方角）。唯一的圆是作案现场的图钉（50%）。边框纪律：分隔一律 1px 发丝规线；结构性外框（账目表上下缘、bigstat 上下缘、封面内框）用 2px 实墨线；"双线规线"（1px 实墨 + 3px 下偏移的 1px 规线色）只在章节页眉。橡皮章是唯一使用 3px 粗边 + 4px 内描边双层边框的元素。物证整体微旋转 ±0.8–1.6°，封面章 9°、判决章 -6°。

## Components

### 物证装裱 Evidence Mount（.exhibit）
照片一律以此呈堂，是全站出镜率最高的签名组件。
- **结构**：装裱衬白底（#fffdf6）→ 顶部 EXHIBIT 编号牌 → 照片 → 等宽体双行图注。
- **样式**：1px 规线边框 + 装裱投影（见 Elevation）+ ±1° 微旋转（每个角度写死在其变体上，不随机）。
- **编号牌**：橙红实底、纸面高光字、Courier 700 0.75rem / 0.22em 字距，0.45em 0.9em 内边距。
- **图注**：Courier 0.78rem、软墨色、行高 1.7，英上中下两行。

### 橡皮章 Rubber Stamp（.stamp）
- **样式**：Courier 700 橙红，3px 橙红边 + 4px 内偏移 1px 内边（伪元素双层），字距 0.18em，opacity 0.88 + `mix-blend-mode: multiply` 压在纸上，`pointer-events: none`。
- **两枚变体**：封面章 clamp(0.7rem, 1.1vw, 1rem)、rotate(9deg)、绝对定位于封面右下；判决章 clamp(1.2rem, 3vw, 2.2rem)、rotate(-6deg)、居中静态。
- **砸落动效**：判决章 scale 2.2 → 1、rotate -30 → 0、0.45s power4.in；封面章 scale 1.6 → 1、back.out(2.5)。均 once:true。

### 文书页眉 Form Header（.form-head）
- **结构**：双线规线（左右各一）夹 Courier 700 大写标签（FORM X‑1 —— … 中英并置），标签 0.3em 字距不换行（700px 下松绑）。
- **双线**：1px 实墨线上方 3px 内偏移一条 1px 规线色内线；反转段换为煤上米 + 煤上软米。

### 账目表 Ledger（.ledger）
- **样式**：无竖线，上下 2px 实墨边，行间 1px 规线；行头 Courier 700 0.7rem 大写软墨色，单元格中文宋体、备注列 Courier 0.75rem 软墨。
- **强调**：关键词用深印泥 600（`.ledger__accent`），不下划线不加底。
- **证据清单变体**：行入场为逐行 x:-24px 淡入（stagger 0.12s）；700px 下行头转块级紧凑堆叠。

### 大数字 Big Stat（.bigstat）
- **结构**：Bodoni 800 巨号深印泥数字（clamp(4.5rem, 13vw, 12rem)）+ 0.32em 单位 + 30ch 宋体说明，基线对齐，上下 2px 实墨线。
- **动效**：滚动至 80% 触发 1.6s power2.out 计数。

### 罪名栏 Charges Ticker（.charges）
- **样式**：橙红实底横带，上下 1px 墨线，Courier 700 0.75rem / 0.25em 字距纸面高光字，无缝匀速滚动（30s 线性，内容复制 4 份平移 1 份）。
- **`aria-hidden`**，reduced-motion 下轨道换行平铺、不再滚动。

### 现场图钉与红线（.pin / .scene__string）
- **图钉**：1.9em 圆形橙红、Courier 700 序号 ①②、图钉投影；位置由内联 `--x/--y` 百分比钉在照片上。
- **红线**：SVG `preserveAspectRatio="none"` 全幅覆盖，`stroke: #c23a1d` 0.35 + `non-scaling-stroke`，opacity 0.85；滚动 scrub 由 dashoffset 生长。
- **STOMP.**：Bodoni 900 斜体巨字居中收尾本段，句号橙红；入场 scale 3 → 1、0.35s power4.in 并触发 .scene 四帧震屏（±14px 内，0.32s 延迟）。

### 打字机标题（[data-typewrite] 章节标题）
- JS 将文本拆为逐字 `<span>`（visibility 控制而非删改），滚动至 78% 起以 45ms/字显现，光标闪烁 2.5s 后移除。无 JS 时标题完整静态可见。

### 全站动效纪律（GSAP + ScrollTrigger + Lenis）
- Lenis `lerp: 0.09` 平滑滚动接入 GSAP ticker；入场一律 **from-tween**（初态在 CSS 中即为完整可读态），scrollTrigger 全部 `once: true`。
- 缓动分工：揭幕 power3/power4.out，砸落 power4.in，弹性入场 back.out(2.5)，scrub 线性。
- `prefers-reduced-motion: reduce`：JS 整体短路返回，CSS 停掉一切 animation/transition。

## Do's and Don'ts

### Do:
- **Do** 让每张照片走完整装裱（衬底 + 发丝边框 + 近距投影 + 编号牌 + 微旋转 ±0.8–1.6°），缺一即不入卷。
- **Do** 用 Courier Prime + 宽字距（0.18–0.32em）承担一切编号、标签、图注，并让它们中英并置。
- **Do** 关键词强调用深印泥（#9c2c13），亮橙红（#c23a1d）只留给印章、编号牌、光标、红线等"官方物件"。
- **Do** 两个文书章节左右柱交替（5/7 与 7/5），保持翻阅卷宗的节奏。
- **Do** 新动效从完整静态态出发做 from-tween，once:true，并确认 reduced-motion 下完全停用。
- **Do** 分隔用 1px 发丝线，结构边界才用 2px 实墨线；"双线规线"只出现在章节页眉。

### Don't:
- **Don't** 橡皮章超过两枚；新强调用排版（字重、负字距巨字）解决，不加章。
- **Don't** 把橙红铺成大块底色（罪名 ticker 是上限）或用于大段正文文字。
- **Don't** 加第二段深色反转、第二个强调色、第二种字体岗；煤黑夜视、印泥橙红、三字体分工各只成立一次。
- **Don't** 给任何元素上圆角（现场图钉除外）、弥散阴影、毛玻璃或渐变卡片。
- **Don't** 给 Bodoni 大标题加宽字距，或让正文/标题换岗；字距纪律见 Typography。
- **Don't** 写需要 JS 才可见的内容；动效只能是翻译，不能是内容的容器。
