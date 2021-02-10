class Airport{

  constructor() {
    this.hangar = [];
  };

  land(plane) {
    this.hangar.shift(plane);

  };

  planes(){
    return this.hangar;
  };

};
