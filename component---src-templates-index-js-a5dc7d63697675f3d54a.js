(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{TRom:function(e,a,t){"use strict";t.r(a);var r=t("dI71"),l=t("q1tI"),s=t.n(l),c=t("Wbzz"),n=t("9eSz"),i=t.n(n),m=t("Bl7J"),o=t("vrFN"),u=t("d+8V"),E=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){var e=this.props.data,a=e.site.siteMetadata.title,t=e.site.siteMetadata.subtitle,r=e.site.siteMetadata.author,l=e.site.siteMetadata.bio,n=e.profilePic.childImageSharp.fluid,E=e.allMarkdownRemark.edges,g=this.props.pageContext,d=g.isFirstPage,h=g.isLastPage,p=g.currentPage,f=g.totalPages,v="/"+String(p+1),N=p-1==1?"/":"/"+String(p-1);return s.a.createElement(m.a,{title:a,subtitle:t},s.a.createElement(o.a,{title:"Code Thoughts"}),s.a.createElement("div",{className:"blog-container"},s.a.createElement("aside",{className:"aside-left"},s.a.createElement(i.a,{fluid:n,alt:"Author "+r}),s.a.createElement("h3",null,r),s.a.createElement("p",null,l),s.a.createElement("a",{href:"mailto:gaurav@gaurgaurav.com"}," Contact me"),s.a.createElement("div",{className:"contacts-div"},s.a.createElement("ul",{className:"contacts-list"},s.a.createElement("li",{className:"contacts-list-item"},s.a.createElement("a",{className:"contacts-list-item-links",href:"https://www.youtube.com/user/gauravgaur91/",rel:"noreferrer",target:"_blank"},s.a.createElement("svg",{className:"contacts-icons",viewBox:"0 0 24 24"},s.a.createElement("title",null,"YouTube"),s.a.createElement("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})))),s.a.createElement("li",{className:"contacts-list-item"},s.a.createElement("a",{className:"contacts-list-item-links",href:"https://twitter.com/Gaur4vGaur",rel:"noreferrer",target:"_blank"},s.a.createElement("svg",{className:"contacts-icons",viewBox:"0 0 26 28"},s.a.createElement("title",null,"twitter"),s.a.createElement("path",{d:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"}))))))),s.a.createElement("section",null,E.map((function(e,a){return s.a.createElement("div",{className:"post-summary",key:a},s.a.createElement("p",null,e.node.frontmatter.date," ",s.a.createElement("span",null," ",e.node.fields.readingTime.text," ")),s.a.createElement(c.Link,{to:e.node.fields.slug},s.a.createElement("h2",{className:"post-navigation"},e.node.frontmatter.title)),s.a.createElement("div",{className:"content"},e.node.frontmatter.description))}))),s.a.createElement("aside",{className:"aside-right"},s.a.createElement(u.a,null))),s.a.createElement("div",{className:"post-pagination"},!d&&s.a.createElement(c.Link,{to:N,rel:"prev"},"<"),Array.from({length:f},(function(e,a){return s.a.createElement(c.Link,{key:a,to:"/"+(0===a?"":a+1)},a+1)})),!h&&s.a.createElement(c.Link,{to:v,rel:"next"},">")))},a}(s.a.Component);a.default=E},"d+8V":function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r);a.a=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"tags"},"Tags"),l.a.createElement("ul",{className:"tags"},l.a.createElement("li",{className:"tags",key:"programming"},l.a.createElement("a",{href:"/tags/programming"},"programming (11)")),l.a.createElement("li",{className:"tags",key:"tutorial"},l.a.createElement("a",{href:"/tags/tutorial"},"tutorial (10)")),l.a.createElement("li",{className:"tags",key:"scala"},l.a.createElement("a",{href:"/tags/scala"},"scala (9)")),l.a.createElement("li",{className:"tags",key:"microservices"},l.a.createElement("a",{href:"/tags/microservices"},"microservices (7)")),l.a.createElement("li",{className:"tags",key:"architecture"},l.a.createElement("a",{href:"/tags/architecture"},"architecture (7)")),l.a.createElement("li",{className:"tags",key:"ci"},l.a.createElement("a",{href:"/tags/ci"},"ci (2)")),l.a.createElement("li",{className:"tags",key:"releases"},l.a.createElement("a",{href:"/tags/releases"},"releases (2)")),l.a.createElement("li",{className:"tags",key:"java"},l.a.createElement("a",{href:"/tags/java"},"java (2)")),l.a.createElement("li",{className:"tags",key:"microbenchark"},l.a.createElement("a",{href:"/tags/microbenchark"},"microbenchark (2)"))))}}}]);
//# sourceMappingURL=component---src-templates-index-js-a5dc7d63697675f3d54a.js.map