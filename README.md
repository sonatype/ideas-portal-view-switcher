# ideas-portal-view-switcher
 Bookmarklet to switch between the external Ideas Portal view and the internal Aha workspace view.

## Getting Started

### Dependencies
* Any modern browser (i.e. Firefox, Chrome, Edge, Safari)
* Internal user access to Sonatype Aha instance

### Installation

#### Method 1: Click and drag
1. Drag one of the following links onto your bookmarks bar
   * Open new tab: <a href="javascript: (() => {    if (window.location.hostname == 'ideas.sonatype.com') {        window.open(window.location.href.replace('ideas.sonatype.com', 'sonatype.aha.io/ideas'))    } else if (window.location.hostname == 'sonatype.aha.io') {        window.open(window.location.href.replace('sonatype.aha.io/ideas', 'ideas.sonatype.com'))    } else {        alert('This bookmarklet only works when you are viewing an idea in ideas.sonatype.com or sonatype.aha.io.')    }})();">Switch View</a>
   * Open in same tab: <a href="javascript: (() => {    if (window.location.hostname == 'ideas.sonatype.com') {        window.open(window.location.href.replace('ideas.sonatype.com', 'sonatype.aha.io/ideas'), '_self')    } else if (window.location.hostname == 'sonatype.aha.io') {        window.open(window.location.href.replace('sonatype.aha.io/ideas', 'ideas.sonatype.com'), '_self')    } else {        alert('This bookmarklet only works when you are viewing an idea in ideas.sonatype.com or sonatype.aha.io.')    }})();">Switch View</a>
2. If the above link does not show, go [here](https://sonatype.github.io/ideas-portal-view-switcher/) first

#### Method 2: Manually create new bookmark
1. Create a new bookmark using one of the following code blocks:

Open new tab:
```
javascript: (() => {
    if (window.location.hostname == 'ideas.sonatype.com') {
        window.open(window.location.href.replace('ideas.sonatype.com', 'sonatype.aha.io/ideas'))
    } else if (window.location.hostname == 'sonatype.aha.io') {
        window.open(window.location.href.replace('sonatype.aha.io/ideas', 'ideas.sonatype.com'))
    } else {
        alert('This bookmarklet only works when you are viewing an idea in ideas.sonatype.com or sonatype.aha.io.')
    }
})();
```

Open in same tab:
```
javascript: (() => {
    if (window.location.hostname == 'ideas.sonatype.com') {
        window.open(window.location.href.replace('ideas.sonatype.com', 'sonatype.aha.io/ideas'), '_self')
    } else if (window.location.hostname == 'sonatype.aha.io') {
        window.open(window.location.href.replace('sonatype.aha.io/ideas', 'ideas.sonatype.com'), '_self')
    } else {
        alert('This bookmarklet only works when you are viewing an idea in ideas.sonatype.com or sonatype.aha.io.')
    }
})();
```

## Usage
1. Go to a [URL](https://ideas.sonatype.com/ideas/IDEAS-I-123) with a Sonatype Idea
2. Click on the bookmarklet

## License
TBD
