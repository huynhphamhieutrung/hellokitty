function abc() {
  const appContainer = $('#appContainer');
  const currentContainer = $('#currentContainer');
  let isSelected = false;
  let currentLeft = 0;
  let currentTop = 0;

  appContainer.bind('mousedown', event => {
    currentLeft = event.offsetX;
    currentTop = event.offsetY;
    currentContainer.css('left', currentLeft + 'px');
    currentContainer.css('top', currentTop + 'px');
  });

  appContainer.bind('mousemove', event => {
      let width = event.offsetX - currentLeft;
      let height = event.offsetY - currentTop;
      if (width < 0) {
        width = 0;
      }
      if (height < 0) {
        height = 0;
      }
      currentContainer.css('width', width + 'px');
      currentContainer.css('height', height + 'px');
    
  });

  appContainer.bind('mouseup', () => {
   
      isSelected = false;
      currentContainer.css('width', 0);
      currentContainer.css('height', 0);
  
  });
}
const tools = {
  abc,
}

export default tools;