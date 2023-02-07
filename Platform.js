class Platform{
    constructor(newPlatformBot,color,svg) {
        this.bot = newPlatformBot;
        this.left = Math.random() * 350;
        this.visual = document.createElement('div');
        this.color = color;
        this.svg = svg;


        let visual = this.visual;
        visual.innerHTML = svg;
        visual.classList.add(this.color);
        visual.style.left = this.left + 'px';
        visual.style.bottom = this.bot + 'px';
        container.appendChild(visual);
    }
}