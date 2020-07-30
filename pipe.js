class pipe {
    constructor()   {
        this.gap = 120;
        this.y = random(40, height - (this.gap + 40));
        this.x = width;
        this.w = 60;
        this.velocity = 3;
    }

    update()    {
        this.x = this.x - this.velocity
    }

    show()  {
        rectMode(CORNERS);
        rect(this.x, 0, this.x + this.w, this.y);
        rect(this.x, this.y + this.gap, this.x + this.w, height)
    }

    hits(_b)   {
        if (((_b.y - 10) < this.y) || ((_b.y + 10) > (this.y + this.gap)))   {
            if (((_b.x + 10) > this.x) && ((_b.x - 10) < (this.x + this.w)))   {
                return 1;
            }
        }
        else{
            return 0;
        }
    }
}
