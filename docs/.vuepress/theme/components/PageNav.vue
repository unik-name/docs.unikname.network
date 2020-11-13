<template>
  <div class="page-nav" v-if="prev || next">
    <p class="inner">
      <span v-if="prev" class="prev"><span class="navbutton">
        ←
        <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
      </span></span>

      <span v-if="next" class="next"><span class="navbutton">
        <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>
        →
      </span></span>
    </p>
  </div>
</template>
<script>
import { resolvePage } from '../util'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'

export default {
  name: 'PageNav',
  props: ['sidebarItems'],
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig

  if (link === false) {
    return
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  } else {
    return resolveLink($page, sidebarItems)
  }
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

.navbutton 
  border 1px solid $accentColor
  border-radius 15px
  padding 3px 10px
  margin 0px

@media screen and (max-width: 720px)
  p.inner
    display: flex
    flex-direction: column
    align-items: center

    & > span
      margin-bottom: 1em
      width: 100%
      &.prev > span.navbutton a
        margin-left:1em

      &.next > span.navbutton
        a
          margin-right:1em

      & > span.navbutton
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center

          a
            margin-left:1em

</style>
