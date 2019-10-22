(function() {
    // {HTMLCollection}
    var sections;

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // get live collection
            sections = document.getElementsByClassName('infinity-block'); 
            scrollIntoView();           
            window.addEventListener('scroll', scrollIntoView);
        });
    } else {
        sections = document.getElementsByClassName('infinity-block');            
        scrollIntoView();           
        window.addEventListener('scroll', scrollIntoView);
    }

    /**
     * @method scrollIntoView
     * @description Performs appropriate side swipe animation if a segment is in view
     */
    function scrollIntoView() {
        for(var index = 0; index < sections.length; index++) {
            let section = sections[index];
            // only render the animation for blocks that are in view 
            // and haven't run through the rendering animation before
            if(!section.hasAttribute('data-viewed')) {
                let boundingBox = section.getBoundingClientRect();
                if(inView(boundingBox)) {
                    section.dataset.viewed = true;
                    renderAnimation(section);
                }
            }
        }
    }

    /**
     * @method inView
     * @description checks to see if the element is inview
     * 
     * @param {DOMRect} boundingBox
     * @return {boolean} Determined if the bottom of the block is in view 
     */
    function inView(boundingBox) {
        return boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    /**
     * @method renderAnimation
     * @description Renders the appropriate view animation for a section
     * 
     * @param {HTMLDivElement} currSection 
     */
    function renderAnimation(currSection) {
        var children = currSection.children;
        for(var index = 0; index < children.length; index++) {
            setTimeout(function() {                
                this.classList.add('fadeIn');
            }.bind(children[index]), index * 250);
        }
    }
})();