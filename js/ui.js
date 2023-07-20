(() => {
    // IMPLEMENTAR ROLAGEM HORIZONTAL NO PATH-CONTAINER
    const pathContainer = document.getElementById('path-container');

    const wheelScroll = (event) => pathContainer.scrollBy(event.deltaY / 2, 0);

    let lastValueX = null;

    const touchstartScroll = (event) => {
        if(event.targetTouches.length == 1) lastValueX = null;
    }
    const touchmoveScroll = (event) => {
        if(lastValueX == null) {
            lastValueX = event.targetTouches[0].clientX;
        }
        else {
            const deltaX = lastValueX - event.targetTouches[0].clientX;
            lastValueX = event.targetTouches[0].clientX;
            pathContainer.scrollBy(deltaX, 0);
        }
    }

    pathContainer.addEventListener('wheel', wheelScroll, {passive: true});
    pathContainer.addEventListener('touchstart', touchstartScroll, {passive: true});
    pathContainer.addEventListener('touchmove', touchmoveScroll, {passive: true});
})();