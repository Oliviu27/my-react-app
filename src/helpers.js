export const scrollToElement = id => {
    let scrollContainer = id;
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);
    
    let targetY = 0;

    do { 
        if (id === scrollContainer) break;
        targetY += id.offsetTop;
    } while (id === id.offsetParent);
    
    window.scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ window.scroll(c, a, b, i); }, 20);
    }
    window.scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}