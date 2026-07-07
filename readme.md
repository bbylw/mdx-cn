[![MDX][githubusercontent-logo]][website]

# 面向组件时代的 Markdown

[![构建][build-badge]][build]
[![覆盖率][coverage-badge]][coverage]
[![赞助者][sponsors-badge]][collective]
[![支持者][backers-badge]][collective]
[![讨论][chat-badge]][chat]

[MDX][website] 是一种可创作的格式，让你可以在 Markdown 文档中无缝地编写 JSX。
你可以导入组件（如交互式图表或提示框），并将它们嵌入到内容中。
这让使用组件编写长篇内容变得非常轻松。🚀

```mdx
import {Chart} from './snowfall.js'
export const year = 2013

# 去年的降雪量

在 {year} 年，降雪量高于平均水平。
随后迎来了温暖的春天，导致附近许多河流
出现了洪水泛滥的情况。

<Chart year={year} color="#fcb32c" />
```

有关格式的更多信息，请参见[§ 什么是 MDX](https://mdx.ndjp.net/docs/what-is-mdx/)。
要在线试用，请参见[§ Playground](https://mdx.ndjp.net/playground/)。

## 这是什么？

这个 GitHub 仓库包含多个包，用于将 MDX 格式编译为
JavaScript，与 webpack 和 Rollup 等打包器集成，以及与
React、Preact 和 Vue 等框架一起使用。

有关如何将 MDX 集成到你的项目中，请参见
[§ 快速开始](https://mdx.ndjp.net/docs/getting-started/)。

## 安全

请参见我们网站上的[§ 安全][security]了解相关信息。

## 贡献

请参见我们网站上的[§ 贡献][contribute]了解如何参与。
请参见[§ 支持][support]了解如何获取帮助。

本项目有一份[行为准则][coc]。
通过与本仓库、组织或社区互动，即表示你同意遵守其条款。

## 赞助

请参见我们网站上的[§ 赞助][sponsor]了解如何提供财务支持。

<table>
<tr valign="middle">
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://vercel.com">Vercel</a><br><br>
  <a href="https://vercel.com"><img src="https://avatars1.githubusercontent.com/u/14985020?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://motif.land">Motif</a><br><br>
  <a href="https://motif.land"><img src="https://avatars1.githubusercontent.com/u/74457950?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.hashicorp.com">HashiCorp</a><br><br>
  <a href="https://www.hashicorp.com"><img src="https://avatars1.githubusercontent.com/u/761456?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.gitbook.com">GitBook</a><br><br>
  <a href="https://www.gitbook.com"><img src="https://avatars1.githubusercontent.com/u/7111340?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.gatsbyjs.org">Gatsby</a><br><br>
  <a href="https://www.gatsbyjs.org"><img src="https://avatars1.githubusercontent.com/u/12551863?s=256&v=4" width="128"></a>
</td>
</tr>
<tr valign="middle"></tr>
<tr valign="middle">
<td width="20%" align="center" rowspan="2" colspan="2">
  <a href="https://www.netlify.com">Netlify</a><br><br>
  <!--OC has a sharper image-->
  <a href="https://www.netlify.com"><img src="https://images.opencollective.com/netlify/4087de2/logo/256.png" width="128"></a>
</td>
<td width="10%" align="center">
  <a href="https://www.coinbase.com">Coinbase</a><br><br>
  <a href="https://www.coinbase.com"><img src="https://avatars1.githubusercontent.com/u/1885080?s=256&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://themeisle.com">ThemeIsle</a><br><br>
  <a href="https://themeisle.com"><img src="https://avatars1.githubusercontent.com/u/58979018?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://expo.io">Expo</a><br><br>
  <a href="https://expo.io"><img src="https://avatars1.githubusercontent.com/u/12504344?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://boostnote.io">Boost Note</a><br><br>
  <a href="https://boostnote.io"><img src="https://images.opencollective.com/boosthub/6318083/logo/128.png" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://markdown.space">Markdown Space</a><br><br>
  <a href="https://markdown.space"><img src="https://images.opencollective.com/markdown-space/e1038ed/logo/128.png" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://www.holloway.com">Holloway</a><br><br>
  <a href="https://www.holloway.com"><img src="https://avatars1.githubusercontent.com/u/35904294?s=128&v=4" width="64"></a>
</td>
<td width="10%"></td>
<td width="10%"></td>
</tr>
<tr valign="middle">
<td width="100%" align="center" colspan="8">
  <br>
  <a href="https://opencollective.com/unified"><strong>你？</strong></a>
  <br><br>
</td>
</tr>
</table>

## 许可证

[MIT][] © Compositor 和 [Vercel][]

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[build]: https://github.com/mdx-js/mdx/actions

[build-badge]: https://github.com/mdx-js/mdx/workflows/main/badge.svg

[chat]: https://github.com/mdx-js/mdx/discussions

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[coc]: https://github.com/mdx-js/.github/blob/main/code-of-conduct.md

[collective]: https://opencollective.com/unified

[contribute]: https://mdx.ndjp.net/community/contribute/

[coverage]: https://codecov.io/github/mdx-js/mdx

[coverage-badge]: https://img.shields.io/codecov/c/github/mdx-js/mdx/main.svg

[githubusercontent-logo]: https://raw.githubusercontent.com/mdx-js/.github/5a63e56/image/cover.svg?sanitize=true

[mit]: license

[security]: https://mdx.ndjp.net/docs/getting-started/#security

[sponsor]: https://mdx.ndjp.net/community/sponsor/

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[support]: https://mdx.ndjp.net/community/support/

[vercel]: https://vercel.com

[website]: https://mdx.ndjp.net
