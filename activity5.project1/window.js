class Window {

    constructor(options = {}) {

        this.width = options.width || 300;
        this.height = options.height || 400;
        this.posX = options.posX || 600;
        this.posY = options.posY || 200;

        this.mainWindow = document.createElement('div');
        this.mainWindow.id = "main-window";

        this.mainWindow.style.width = this.width + 'px';
        this.mainWindow.style.height = this.height + 'px';
        this.mainWindow.style.top = this.posY + 'px';
        this.mainWindow.style.left = this.posX + 'px';
        this.mainWindow.style.position = 'absolute';
        this.mainWindow.style.backgroundColor = 'lightseagreen';

        this.title = document.createElement('div');
        this.title.classList.add("title");
        this.title.id = "title";
        this.setTitle("Window");

        this.mainWindow.appendChild(this.title);
        document.body.appendChild(this.mainWindow);

        // Make the title draggable
        this.dragWindow(this.mainWindow, this.title);
    }

    setTitle(newTitle) {
        this.title.innerHTML = newTitle;
    }

    setContent(htmlContent) {
        this.mainWindow.innerHTML = htmlContent;
    }

    // Mouse drag set to the title
    dragWindow(mainWindow, title) {
      
        let topStart, topEnd;
        let leftStart, leftEnd;

        title.onmousedown = dragMouseDown;
      
        function dragMouseDown(e) {
          e.preventDefault();

          // Save the initial position of the mouse
          topStart = e.clientY;
          leftStart = e.clientX;

          // Move when the mouse is dragged to another position
          document.onmousemove = elementDrag;

          // Stop in the actual position when the button is released
          document.onmouseup = closeDragElement;
        }
      
        function elementDrag(e) {
          e.preventDefault();

          // Calculate the new position of the mouse
          topEnd = topStart - e.clientY;
          leftEnd = leftStart - e.clientX;
          topStart = e.clientY;
          leftStart = e.clientX;

          // Set the new position to the window
          mainWindow.style.top = (mainWindow.offsetTop - topEnd) + "px";
          mainWindow.style.left = (mainWindow.offsetLeft - leftEnd) + "px";
        }
      
        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }

}