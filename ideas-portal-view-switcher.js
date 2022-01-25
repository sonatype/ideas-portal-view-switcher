// New tab
javascript: (() => {
    if (window.location.hostname == 'ideas.sonatype.com') {
        window.open(window.location.href.replace('ideas.sonatype.com', 'sonatype.aha.io/ideas'))
    } else if (window.location.hostname == 'sonatype.aha.io') {
        window.open(window.location.href.replace('sonatype.aha.io/ideas', 'ideas.sonatype.com'))
    } else {
        alert('This bookmarklet only works when you are viewing an idea in ideas.sonatype.com or sonatype.aha.io.')
    }
})();

// Same tab
javascript: (() => {
    if (window.location.hostname == 'ideas.sonatype.com') {
        window.open(window.location.href.replace('ideas.sonatype.com', 'sonatype.aha.io/ideas'), "_self")
    } else if (window.location.hostname == 'sonatype.aha.io') {
        window.open(window.location.href.replace('sonatype.aha.io/ideas', 'ideas.sonatype.com'), "_self")
    } else {
        alert('This bookmarklet only works when you are viewing an idea in ideas.sonatype.com or sonatype.aha.io.')
    }
})();