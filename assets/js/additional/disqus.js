var disqus_loaded = false;

function load_disqus() {
	if (donnie_dark_config_disqus_shortname !== '') {
		disqus_loaded = true;
		var disqus_shortname = donnie_dark_config_disqus_shortname;
		// For embedding disqus under a post
		(function() {
		    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	}
}

// Load Disqus only after user has scrolled to bottom of the page
window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //hit bottom of page
        if (disqus_loaded==false){ load_disqus() };
    }
};