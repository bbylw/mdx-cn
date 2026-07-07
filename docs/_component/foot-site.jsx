import React from 'react'
import {config} from '../_config.js'

export function FootSite() {
  return (
    <footer className="foot-site">
      <div className="content">
        <div
          className="block"
          style={{display: 'flex', justifyContent: 'space-between'}}
        >
          <div>
            <small>
              MDX 用 ❤️ 在阿姆斯特丹、博伊西和全球各地打造
            </small>
            <br />
            <small>本站不会跟踪你。</small>
            <br />
            <small>MIT © 2017-{new Date().getFullYear()}</small>
          </div>
          <div style={{marginLeft: 'auto', textAlign: 'right'}}>
            <small>
              项目在 <a href={config.gh.href}>GitHub</a>
            </small>
            <br />
            <small>
              网站在 <a href={new URL('docs/', config.ghTree).href}>GitHub</a>
            </small>
            <br />
            <small>
              更新订阅 <a href="/rss.xml">RSS</a>
            </small>
            <br />
            <small>
              赞助 <a href={config.oc.href}>OpenCollective</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
